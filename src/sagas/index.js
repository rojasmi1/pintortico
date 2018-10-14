import { all } from 'redux-saga/effects';
import global from './global';
import contact from './contact';

function* allSagas() {
  yield all([global(), contact()]);
}

export default allSagas;
