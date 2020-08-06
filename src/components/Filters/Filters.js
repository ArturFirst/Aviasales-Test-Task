import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Checkbox from '../Checkbox/Checkbox.js';
import { resetFilter, addFilter, removeFilter, checkAllFilter } from '../../actions/actions.js';
import { inputs } from '../../reducer/reducer.js';

import './filters.scss';

const Filters = (props) => {
 
  const { stopsAmount, 
          addFilter, 
          removeFilter, 
          resetFilter, 
          checkAllFilter } = props;

  const onChange = (evt) => {
    const { name, checked } = evt.target;

    switch (name) {
      case 'all':
        return (checked) ? checkAllFilter() : resetFilter();

      default: 
        return (checked) ? addFilter(name) : removeFilter(name)
    }
  }

  useEffect(() => {
    if (!stopsAmount.includes('all') && stopsAmount.length === 4) addFilter('all')
    else if (stopsAmount.includes('all') && stopsAmount.length < 5) removeFilter('all')
  })

  const isTrue = (value) => stopsAmount.includes(value);
  
  const renderInputs = inputs; 
  
    return (
      <div className='filters'>
        <h2 className='filters__title'>Количество пересадок</h2>
        {renderInputs.map(input => <Checkbox
                                      key={input} 
                                      name={input}
                                      onChange={onChange}
                                      isTrue={isTrue}
                                    />)}
      </div>
    )
  
}

const mapStateToProps = ({ stopsAmount }) => ({ stopsAmount })

const mapDispatchToProps = {
  resetFilter,
  addFilter,
  removeFilter,
  checkAllFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
