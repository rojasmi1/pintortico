import { API_CONFIG } from '../constants';

// ------------------------------------
// Constants
// ------------------------------------
const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';

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

function userLogout() {
  return {
    type: USER_LOGOUT
  };
}

function userLogoutSuccess(user) {
  return {
    type: USER_LOGOUT_SUCCESS
  };
}

function login(email, password) {
  return async dispatch => {
    dispatch(userAuthentication());
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/auth/login?locale=en_US`,
      {
        body: JSON.stringify({ email, password }),
        method: 'POST'
      }
    );
    const user = await response.json();
    dispatch(userAuthenticationSuccess(user));
  };
}

function logout() {
  return async dispatch => {
    dispatch(userLogout());
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/auth/logout?locale=en_US`
    );
    dispatch(userLogoutSuccess());
  };
}

export const actions = {
  login,
  logout
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
      isAuthenticated: true
    };
  },
  [USER_LOGOUT]: (state, action) => ({
    ...state,
    isLoading: true
  }),
  [USER_LOGOUT_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    user: null,
    isAuthenticated: false
  })
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
