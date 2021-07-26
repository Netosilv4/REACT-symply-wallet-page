const INITIAL_STATE = {
  user: localStorage.getItem('@symplyWallet/login') ? { ...JSON.parse(localStorage.getItem('@symplyWallet/login')) } : {},
  message: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'login':
      localStorage.setItem('@symplyWallet/login', JSON.stringify({ ...action.info }));
      return { ...state, message: '', user: { ...action.info } };
    case 'loginError':
      return { ...state, message: action.message };
    case 'logout':
      localStorage.clear();
      return { ...state, message: '', user: { } };
    default:
      return state;
  }
};

export default loginReducer;
