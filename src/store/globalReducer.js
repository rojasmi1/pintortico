import { API_CONFIG } from '../constants';

// ------------------------------------
// Constants
// ------------------------------------
const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS';
const USER_AUTHENTICATION_FAIL = 'USER_AUTHENTICATION_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
const LOAD_SETTINGS = 'LOAD_SETTINGS';
const CHANGE_LOCALE = 'CHANGE_LOCALE';

// ------------------------------------
// Actions
// ------------------------------------
function userAuthentication() {
  return {
    type: USER_AUTHENTICATION
  };
}

function userAuthenticationSuccess(body) {
  return {
    type: USER_AUTHENTICATION_SUCCESS,
    payload: body
  };
}

function userAuthenticationFail(body) {
  return {
    type: USER_AUTHENTICATION_FAIL,
    payload: body
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

function login(email, password, locale) {
  return async dispatch => {
    dispatch(userAuthentication());
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/auth/login?locale=${locale}`,
      {
        body: JSON.stringify({ email, password }),
        method: 'POST'
      }
    );
    const body = await response.json();
    if (response.ok) {
      dispatch(userAuthenticationSuccess(body));
    } else {
      dispatch(userAuthenticationFail(body));
    }
  };
}

function logout(locale) {
  return async dispatch => {
    dispatch(userLogout());
    await fetch(`${API_CONFIG.BASE_URL}/auth/logout?locale=${locale}`);
    dispatch(userLogoutSuccess());
  };
}

function loadSettings(locale) {
  return async dispatch => {
    const settings = await (await fetch(
      `${API_CONFIG.BASE_URL}/content/settings?locale=${locale}`
    )).json();
    dispatch({
      type: LOAD_SETTINGS,
      payload: settings
    });
  };
}

function changeLocale(locale) {
  return async dispatch => {
    // Change current language in the state
    dispatch({
      type: CHANGE_LOCALE,
      payload: locale
    });

    // Reload settings data with the new language
    const settings = await (await fetch(
      `${API_CONFIG.BASE_URL}/content/settings?locale=${locale}`
    )).json();
    dispatch({
      type: LOAD_SETTINGS,
      payload: settings
    });
  };
}

export const actions = {
  login,
  logout,
  loadSettings,
  changeLocale
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
      isAuthenticated: true,
      hasErrors: false,
      errorMessage: null
    };
  },
  [USER_AUTHENTICATION_FAIL]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      hasErrors: true,
      errorMessage: action.payload.userMessage
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
  }),
  [LOAD_SETTINGS]: (state, action) => {
    return {
      ...state,
      settings: action.payload
    };
  },
  [CHANGE_LOCALE]: (state, action) => {
    return {
      ...state,
      currentLocale: action.payload
    };
  }
};

export default (state = {}, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
