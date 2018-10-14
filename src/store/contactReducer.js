/**
 * NOTE: Look inside the sagas folder for the Async actions' logic
 */

// ------------------------------------
// Constants
// ------------------------------------
const SEND_CONTACT_MESSAGE = 'SEND_CONTACT_MESSAGE';
const SEND_CONTACT_MESSAGE_SUCCESS = 'SEND_CONTACT_MESSAGE_SUCCESS';
const SEND_CONTACT_MESSAGE_FAIL = 'SEND_CONTACT_MESSAGE_FAIL';

export {
  SEND_CONTACT_MESSAGE,
  SEND_CONTACT_MESSAGE_SUCCESS,
  SEND_CONTACT_MESSAGE_FAIL
};

export const actions = {
  sendMessage
};

// ------------------------------------
// Actions
// ------------------------------------
function sendMessage(name, email, message) {
  return {
    type: SEND_CONTACT_MESSAGE,
    payload: { name, email, message }
  };
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEND_CONTACT_MESSAGE]: (state, action) => ({
    ...state,
    isSendingMessage: true,
    contactMessageError: ''
  }),
  [SEND_CONTACT_MESSAGE_SUCCESS]: (state, action) => {
    return {
      ...state,
      isSendingMessage: false
    };
  },
  [SEND_CONTACT_MESSAGE_FAIL]: (state, action) => {
    return {
      ...state,
      isSendingMessage: false,
      contactMessageError: action.payload
    };
  }
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
