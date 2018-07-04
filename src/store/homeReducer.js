import { API_CONFIG } from '../constants';

// ------------------------------------
// Constants
// ------------------------------------
const FETCHING_DATA = 'FETCHING_DATA';
const FETCH_DONE = 'FETCH_DONE';

// ------------------------------------
// Actions
// ------------------------------------
function fetchingData() {
  return {
    type: FETCHING_DATA
  };
}

function fetchDone(payload) {
  return {
    type: FETCH_DONE,
    payload
  };
}

function loadContent(page, locale) {
  return async dispatch => {
    dispatch(fetchingData());
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/content/page/${page}?locale=${locale}`
    );
    const body = await response.json();
    if (response.ok) {
      dispatch(fetchDone(body));
    }
  };
}

export const actions = {
  loadContent
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCHING_DATA]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [FETCH_DONE]: (state, action) => ({
    ...state,
    isLoading: false,
    content: action.payload
  })
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
