const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        // results: [...state.results, { id: new Date(), value: state.counter }],
        results: state.results.concat({ id: Date.now(), value: state.counter }),
      };
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.filter((res) => res.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;