import React from 'react';

import './checkbox.scss';

const label = {
    all: 'Все',
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
}

const Checkbox = (props) => {
    
    const {
        name,
        onChange,
        isTrue
    } = props;

    return (
       <>
       <input
            id={name}
            type='checkbox'
            name={name}
            onChange={onChange}
            checked={isTrue(name)}
        />
       <label htmlFor={name}>{label[name]}</label>
       </>
      )
}

export default Checkbox;