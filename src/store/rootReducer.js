import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import professionalReducer from './professionalReducer';
import globalReducer from './globalReducer';

export default combineReducers({
 home: homeReducer,
 professional: professionalReducer,
 global: globalReducer,
});