import type { RouteObject } from 'react-router-dom';
 
import Page from './index';

const loginRoute:RouteObject = {
  path: '/login',
  element: <Page />,
};
export default loginRoute;
