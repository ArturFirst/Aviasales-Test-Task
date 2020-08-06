import { TicketsParser } from './TicketsParser.js';

 const ticketsRequestService = async () => {
  const idBase = 'https://front-test.beta.aviasales.ru/search';
  const ticketsBase = 'https://front-test.beta.aviasales.ru/tickets?searchId=';
   
  const getId = async () => {
    const res = await fetch(idBase);

    if (!res.ok) {
      throw new Error(`Could not fetch ${idBase}
      , received ${res.status}`)
    }

    return await res.json()
                   .then(transformId);
  };

  const getData = async (id) => {
    const res = await fetch(`${ticketsBase}${id}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ticketsBase}
      , received ${res.status}`)
    }

    return await res.json();
  };

  const transformId = (data) => {
    return data.searchId;
  };

  
  const id = await getId();
   const { tickets } = await getData(id);
   return TicketsParser.parseTickets(tickets);
  
}

export default ticketsRequestService;
