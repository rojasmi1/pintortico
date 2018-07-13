/**
 * NOTE: Look inside the sagas folder for the Async actions' logic
 */

// ------------------------------------
// Constants
// ------------------------------------
const GET_BASE_IMAGES = 'GET_BASE_IMAGES';
const GET_BASE_IMAGES_SUCCESS = 'GET_BASE_IMAGES_SUCCESS';
const GET_BASE_IMAGES_FAIL = 'GET_BASE_IMAGES_FAIL';

export { GET_BASE_IMAGES, GET_BASE_IMAGES_SUCCESS, GET_BASE_IMAGES_FAIL };

export const actions = {
  getBaseImages
};

// ------------------------------------
// Actions
// ------------------------------------
function getBaseImages() {
  return {
    type: GET_BASE_IMAGES
  };
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_BASE_IMAGES]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [GET_BASE_IMAGES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      baseImages: action.payload,
      hasErrors: false,
      errorMessage: null
    };
  },
  [GET_BASE_IMAGES_FAIL]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      hasErrors: true,
      errorMessage: action.payload
    };
  }
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
