import {combineReducers} from 'redux';

import getAllCurrencyReducer from './currency/getAllCurrencyReducer';
import addCurrencyReducer from './currency/addCurrencyReducer';

export default combineReducers({
  getAllCurrencyReducer,
  addCurrencyReducer,
});
