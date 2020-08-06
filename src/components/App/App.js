import React from 'react';

import Header from '../Header/Header.js';
import Filters from '../Filters/Filters.js';
import TicketsList from '../TicketsList/TicketsList.js';

import './app.scss';

const App = () => {
  return (
    <main role='main' className='main-container'>
      <Header />
      <div className='content-container'>
        <Filters />
        <TicketsList />
      </div>
    </main>
  )
}

export default App;