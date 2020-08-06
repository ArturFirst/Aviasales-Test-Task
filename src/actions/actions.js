import ticketsRequestService from '../services/ticketsRequestService.js';

const ticketsLoaded = (newTickets) => ({
  	type: 'TICKETS_LOADED',
  	payload: newTickets,
})


const changeSorting = (sorting) => ({
  	type: 'CHANGE_SORTING',
  	payload: sorting,
})

const addFilter = (value) => ({
    type: 'ADD_FILTER',
    payload: value,
})

const checkAllFilter = () => ({
    type: 'CHECK_ALL_FILTER',
})

const removeFilter = (value) => ({
    type: 'REMOVE_FILTER',
    payload: value
})

const resetFilter = () => ({
    type: 'RESET_FILTER',
})

const ticketsError = (error) => ({
    type: 'FETCH_TICKETS_FAILURE',
    payload: error,
})

const reloadError = () => ({
  type: 'RELOAD_ERROR',
})

const ticketsRequest = () => async (dispatch) => {
    
  try {
    const ticketsData = await ticketsRequestService();
    dispatch(ticketsLoaded(ticketsData));
  } catch(e) {
      dispatch(ticketsError(e))
  }
  
}


export {
  ticketsRequest,
  changeSorting,
  addFilter,
  checkAllFilter,
  removeFilter,
  resetFilter,
  ticketsError,
  reloadError,
};