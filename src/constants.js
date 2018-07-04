exports.API_CONFIG = {
  BASE_URL: '',
  KEY: ''
};

exports.hasRouteAccess = (user, route) => {
  let hasAccess = false;

  if (user && user.securityroles) {
    for (let role of user.securityroles) {
      if (ROUTES_BY_ROLE[role].indexOf(route) !== -1) {
        hasAccess = true;
        break;
      }
    }
  }

  return hasAccess;
};

const ROUTES_BY_ROLE = {
  ROLE_USER: ['home', 'login'],
  ROLE_PROFESSIONAL: ['home', 'login', 'professional'],
  ROLE_VET: ['home', 'login']
};
