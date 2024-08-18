import { createBrowserRouter, RouteObject } from 'react-router-dom';

import * as Pages from '@/pages';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import { PATHS } from './paths';

const ROUTES: RouteObject[] = [
  {
    path: PATHS.SIGN_IN,
    element: <Pages.SignInPage />,
    errorElement: <Pages.ErrorPage />,
  },
  {
    path: PATHS.SIGN_UP,
    element: <Pages.SignUpPage />,
    errorElement: <Pages.ErrorPage />,
  },
  {
    path: PATHS.NOT_FOUND,
    element: <Pages.NotFoundPage />,
    errorElement: <Pages.ErrorPage />,
  },
  {
    path: PATHS.MAIN,
    element: <ProtectedRoute />,
    errorElement: <Pages.ErrorPage />,
    children: [
      {
        index: true,
        element: <Pages.MainPage />,
        errorElement: <Pages.ErrorPage />,
      },
      {
        path: '*',
        element: <Pages.NotFoundPage />,
        errorElement: <Pages.ErrorPage />,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);
export default router;
