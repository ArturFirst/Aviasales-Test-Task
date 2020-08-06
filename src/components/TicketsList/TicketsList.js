import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { changeSorting, ticketsRequest } from '../../actions/actions.js';

import Spinner from '../Spinner/Spinner.js';
import TicketItem from '../TicketItem/TicketItem.js';

import './ticketsList.scss';



const TicketsList = (props) => {

  const filterTickets = (tickets, filters) => {
    if (filters.length === 0) return tickets;

    const filteredTickets = tickets.filter(({ flightDetails }) => {
        const stops = flightDetails.reduce((acc, { stops }) => acc + stops.length, 0);
        return filters.includes(stops.toString()) 
      });
      
    return filteredTickets;
  }

  const onSort = (evt) => {
    const attributeValue = evt.target.getAttribute('value');

    return !(sortingCriteria === attributeValue) && changeSorting(attributeValue);
    
  }

  const getItemsSorted = (items, sortingCriteria, filters) => {

    const filteredTickets = filterTickets(items, filters);

    switch(sortingCriteria) {
      case 'cheapiest':
        return filteredTickets.sort((a, b) => a.price - b.price);
      
      case 'fastest':
        return filteredTickets.sort((a, b) =>  a.duration - b.duration);
      
      default:
        return filteredTickets;
      }
  }

  const { tickets,
          loading,
          sortingCriteria,
          stopsAmount,
          changeSorting,
          ticketsRequest } = props;
  
          
  useEffect(() => {
    ticketsRequest()
  }, [])


  useEffect(() => {
    getItemsSorted(tickets, sortingCriteria, stopsAmount);
  }, [stopsAmount, sortingCriteria])


  const visibleTickets = getItemsSorted(tickets, sortingCriteria, stopsAmount);
  

  if (loading) return <Spinner />
    
  if (stopsAmount.length < 1) return (<h2 className='alert'>
                                        Пожалуйста, выбeрите как минимум один фильтр слева.
                                      </h2>)
    

  if (visibleTickets.length < 1) return (<h2 className='alert'>
                                           У нас нет вариантов с данными параметрами. 
                                           Попробуйте изменить фильтры слева.
                                         </h2>)

  const active = 'results__filter-item--active';    

  return (
      <div className='results'>
        <div
          onClick={onSort}
          className='results__filter'>
          <span
            value='cheapiest'
            className={`results__filter-item ${(sortingCriteria === 'cheapiest') && active}`}>
            Самый дешевый
          </span>
          <span
            value='fastest'
            className={`results__filter-item ${(sortingCriteria === 'fastest') && active}`}>
            Самый быстрый
          </span>
        </div>
        {
          visibleTickets.map((ticket) => {
            return (
                <TicketItem
                  key={ticket.id}
                  {...ticket} />
            )
          })
        }
      </div>      
  )
}

const mapStateToProps = ({ tickets, loading, sortingCriteria, stopsAmount, hasError }) => ({
    tickets,
    loading,
    sortingCriteria,
    stopsAmount,
    hasError,
})

const mapDispatchToProps = {
  changeSorting,
  ticketsRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);