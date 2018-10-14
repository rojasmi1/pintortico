import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import globalReducer from './globalReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  home: homeReducer,
  global: globalReducer,
  contact: contactReducer
});
