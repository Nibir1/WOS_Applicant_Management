import type { RouteObject } from 'react-router-dom';
 
import Page from './index';
import loginFormAction from './action';

const loginRoute:RouteObject = {
  path: '/login',
  element: <Page />,
  action: loginFormAction,
};
export default loginRoute;
