const INITIAL_STATE = [];

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setCurrency':
      return [...action.data];
    default:
      return state;
  }
};

export default currencyReducer;
