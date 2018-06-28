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

function asyncAction() {
  return dispatch => {
    dispatch(fetchingData());
    setTimeout(() => {
      dispatch(fetchDone('<p style="color:black;">Done loading data!</p>'));
    }, 5000);
  };
}

export const actions = {
  asyncAction
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCHING_DATA]    : (state, action) => ({
    ...state,
    isLoading: true
  }),
  [FETCH_DONE] : (state, action) => ({
    ...state,
    isLoading: false,
    resultData: action.payload
  })
}

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
