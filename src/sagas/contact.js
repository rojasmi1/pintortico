import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  SEND_CONTACT_MESSAGE,
  SEND_CONTACT_MESSAGE_SUCCESS,
  SEND_CONTACT_MESSAGE_FAIL
} from 'store/contactReducer';
import {
  SHOW_LOADING_INDICATOR,
  HIDE_LOADING_INDICATOR
} from 'store/globalReducer';
import EmailService from 'services/emailService';

const emailService = new EmailService();

/**
 * Workers
 */

function* sendMessage(action) {
  try {
    const { name, email, message } = action.payload;
    yield put({ type: SHOW_LOADING_INDICATOR });
    yield call(emailService.sendContactMessage, name, email, message);
    yield put({ type: SEND_CONTACT_MESSAGE_SUCCESS });
    yield put({ type: HIDE_LOADING_INDICATOR });
  } catch (e) {
    yield put({ type: HIDE_LOADING_INDICATOR });
    yield put({ type: SEND_CONTACT_MESSAGE_FAIL, payload: e.message });
  }
}

/**
 * Watchers
 */

function* sendMessageRequested() {
  yield takeLatest(SEND_CONTACT_MESSAGE, sendMessage);
}

function* contact() {
  yield all([sendMessageRequested()]);
}

export default contact;
