import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/loginReducer';
import currencyReducer from '../reducers/currencyReducer';
import paymentsReducer from '../reducers/paymentsReducer';

const rootReducer = combineReducers({ loginReducer, currencyReducer, paymentsReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
