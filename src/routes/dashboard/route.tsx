import type { RouteObject } from 'react-router-dom';

import DashboardLayout from './layout';

const dashboardRoute:RouteObject = {
  path: '/dashboard',
  element: <DashboardLayout />,
};
export default dashboardRoute;