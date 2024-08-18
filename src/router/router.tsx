import { createBrowserRouter, RouteObject } from 'react-router-dom';

import * as Pages from '@/pages';
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
];

const router = createBrowserRouter(ROUTES);
export default router;
