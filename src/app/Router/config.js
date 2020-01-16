//
// Router config
//
import Dashboard from '../../pages/Dashboard/Loadable';
import Register from '../../pages/Register/Loadable';
import Login from '../../pages/Login/Loadable';
import ForgotPassword from '../../pages/ForgotPassword/Loadable';
import ResetPassword from '../../pages/ResetPassword/Loadable';

export default [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    exact: true,
    requiresAuth: true,
  },
  {
    name: 'Register',
    path: '/register',
    component: Register,
    exact: false,
    requiresAuth: false,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    exact: false,
    requiresAuth: false,
  },
  {
    name: 'ForgotPassword',
    path: '/forgot-password',
    component: ForgotPassword,
    exact: false,
    requiresAuth: false,
  },
  {
    name: 'ResetPassword',
    path: '/reset-password/:key',
    component: ResetPassword,
    exact: false,
    requiresAuth: false,
  },
];
