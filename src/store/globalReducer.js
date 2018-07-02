import { API_CONFIG } from '../constants';

// ------------------------------------
// Constants
// ------------------------------------
const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------
function userAuthentication() {
  return {
    type: USER_AUTHENTICATION
  };
}

function userAuthenticationSuccess(user) {
  return {
    type: USER_AUTHENTICATION_SUCCESS,
    payload: user
  };
}

function authenticateUser(username, password) {
  return async dispatch => {
    dispatch(userAuthentication());
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/auth/login?locale=en_US`,
      {
        body: JSON.stringify({
          email: 'hugo.alvarez@possible.com',
          password: 'Hills123'
        }),
        method: 'POST'
      }
    );
    const user = await response.json();
    dispatch(userAuthenticationSuccess(user));
  };
}

export const actions = {
  authenticateUser
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [USER_AUTHENTICATION]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [USER_AUTHENTICATION_SUCCESS]: (state, action) => {
    const user = action.payload.user;
    user.id = action.payload.id;

    return {
      ...state,
      isLoading: false,
      user,
      isAuthenticated: !state.isAuthenticated
    };
  }
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
