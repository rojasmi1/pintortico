import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  GET_BASE_IMAGES,
  GET_BASE_IMAGES_SUCCESS,
  GET_BASE_IMAGES_FAIL
} from '../store/globalReducer';
import CloudinaryService from '../services/cloudinaryService';

const cloudinaryService = new CloudinaryService();

/**
 * Workers
 */

function* getBaseImages(action) {
  try {
    const images = yield call(cloudinaryService.getBaseImages);
    yield put({ type: GET_BASE_IMAGES_SUCCESS, payload: images });
  } catch (e) {
    yield put({ type: GET_BASE_IMAGES_FAIL, payload: e.message });
  }
}

/**
 * Watchers
 */

function* baseImagesRequested() {
  yield takeLatest(GET_BASE_IMAGES, getBaseImages);
}

function* global() {
  yield all([baseImagesRequested()]);
}

export default global;
