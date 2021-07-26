const INITIAL_STATE = {
  payments: [],
};

const paymentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setNewPayment':
      return { ...state, payments: [...state.payments, action.paymentData] };
    default:
      return state;
  }
};

export default paymentsReducer;
