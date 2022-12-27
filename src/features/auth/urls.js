const AUTH_API_SERVICE = process.env.REACT_APP_AUTH_API_SERVICE;

// The proxy directive in package.json can be removed. We use env variables to set the API service urls
const auth_server = AUTH_API_SERVICE;

const urls = {
  login: auth_server + 'api/auth/login/',
  register: auth_server + 'api/auth/registration/',
  logout: auth_server + 'api/auth/logout/',
  forgotPassword: auth_server + 'api/auth/password/change/',
  resetPassword: auth_server + 'api/auth/password/reset/',
  verifyEmail: auth_server + 'api/auth/registration/verify-email/',
  refreshToken: auth_server + 'api/auth/token/refresh/',
  user: auth_server + 'api/auth/users/',
}

export default urls
