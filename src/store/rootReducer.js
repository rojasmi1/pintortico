import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import globalReducer from './globalReducer';

export default combineReducers({
  home: homeReducer,
  global: globalReducer
});
