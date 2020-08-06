import React from 'react';

import './ticketItem.scss';

const TicketItem = (ticket) => {
 
  const { price, carrier, flightDetails } = ticket;

  return (
    <div className='results__details'>
      <div className='results__title'>
        <p className="results__price">{price.toLocaleString('ru')} Р</p>
        <span className='results__carrier'>
          <img className='results__img' src={`http://pics.avs.io/99/36/${carrier}.png`} alt='Логотип авиакомпании' />
        </span>
      </div>  

      <div className='results__flight-details'>
        {
          flightDetails.map((details, idx) => {
            return (
              <ul className="results__list" key={idx}>
                <li className="results__item" >
                  <span className='results__item--transparent'>
                    {details.route}
                    <br />
                  </span>
                  {details.time.time}
                </li>
                <li className="results__item">
                  <span className='results__item--transparent'>
                    В пути
                    <br />
                  </span>
                  {details.time.duration}
                </li>
                <li className="results__item">
                  <span className='results__item--transparent'>
                    {details.stops.length ? details.stops.length : ''} {details.stopsTitle}
                    <br />
                  </span>
                  {details.stops.join(', ')}
                </li>
              </ul>
            )
          })
        }
      </div>
    </div>
    );
}

export default TicketItem;