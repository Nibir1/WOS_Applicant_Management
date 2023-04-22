import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import RootLayout from './RootLayout';

import applicationRoutes from './routes';

/**
 * Used by the root router path "/" to exactly match if we are at the index
 * page.
 * 
 * If so, it will perform a quick auth check and redirect to the login if no
 * session. Or, to the dashboard if we are logged in.
 * 
 * The pathname check is required to prevent infinite-loop.
 */
async function rootLoader({ request }:LoaderFunctionArgs) {
  const url = new URL(request.url);

  // Redirect the root path to the login or dashboard
  if(url.pathname === '/') {
    // TODO: Session logic
    return redirect('/login');
  }

  return {};
}

/**
 * The master router object defining all the routes available.
 */
const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: applicationRoutes,
      }
    ],
  }
]);

/**
 * Implements the `RouterProvider` to display the correct routes
 * 
 * @returns Router provider
 */
export default function Router() {
  return <RouterProvider router={browserRouter} />;
}