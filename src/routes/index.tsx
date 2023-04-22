import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import RootLayout from './RootLayout';

async function rootLoader() {
  // Say we check for user here
  return redirect('/login');
}

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [

        ]
      }
    ],
  }
]);

export default function Router() {
  return <RouterProvider router={browserRouter} />;
}