import { all } from 'redux-saga/effects';
import global from './global';

function* allSagas() {
  yield all([global()]);
}

export default allSagas;
