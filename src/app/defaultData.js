/**
 * app/defaultData.js
 */
const authData = localStorage.getItem('AUTH_DATA');
export default {
  // App
  app: {
    __typename: 'App',
    appLoader: false,
    pageLoader: false,
  },
  // Auth
  auth: {
    __typename: 'Auth',
    status: !!authData,
    user: authData,
    token: authData ? authData.access_token : '',
  },
};
