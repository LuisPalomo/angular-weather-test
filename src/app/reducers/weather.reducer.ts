/** Weather reducer */
export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_WEATHER':
      return [...action.payload];
    default:
        return state;
  }
}
