const initialState = {
    tickets: [],
    loading: true,
    sortingCriteria: 'cheapiest',
    stopsAmount: ['all', '0', '1', '2', '3'],
    hasError: false,
  }
  
export const inputs = initialState.stopsAmount;
  
const addFilter = ({ stopsAmount }, filterValue) => {
    if (!stopsAmount.includes(filterValue)) return [...stopsAmount, filterValue]
    
    return stopsAmount;
}
  
const removeFilter = ({ stopsAmount }, filterValue) => stopsAmount.filter(item => item !== filterValue);
  
const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'TICKETS_LOADED':
        return {
          ...state,
          tickets: action.payload,
          loading: false,
        }
  
      case 'CHANGE_SORTING':
        return {
          ...state,
          sortingCriteria: action.payload,
        }
  
      case 'ADD_FILTER':
        return {
          ...state,
          stopsAmount: addFilter(state, action.payload),
        }
  
      case 'CHECK_ALL_FILTER':
        return {
          ...state,
          stopsAmount: initialState.stopsAmount
        }   
  
      case 'REMOVE_FILTER':
          return {
            ...state,
            stopsAmount: removeFilter(state, action.payload),
          }
  
      case 'RESET_FILTER':
          return {
            ...state,
            stopsAmount: [],
        }
  
      case 'FETCH_TICKETS_FAILURE':
          return {
            ...state,
            loading: false,
            hasError: true
          };
  
      case 'RELOAD_ERROR':
          return {
            ...initialState
          }
  
      default:
        return state;
    }
}
  
export default reducer;