export const counterReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT' :
      return state + 1
    default :
    return state
  }
}
