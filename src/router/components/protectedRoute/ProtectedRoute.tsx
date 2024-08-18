import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '@/redux/hooks';
import { PATHS } from '@/router/paths';

type TProtectedRouteProps = {
  children?: React.ReactElement;
};

export default function ProtectedRoute({ children }: TProtectedRouteProps) {
  const { account } = useAppSelector((state) => state.user);

  if (!account) {
    return <Navigate to={PATHS.SIGN_IN} replace />;
  }

  if (!account.isVerified) {
    return <Navigate to={PATHS.NOT_VERIFIED} replace />;
  }

  return children ? children : <Outlet />;
}
