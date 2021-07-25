const INITIAL_STATE = {
  user: {

  },
  message: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, message: '', user: { ...action.info } };
    case 'loginError':
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default loginReducer;
