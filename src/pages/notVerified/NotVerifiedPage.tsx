import { Navigate } from 'react-router-dom';
import Button from '@mui/material//Button';

import { PATHS } from '@/router/paths';
import { signOut } from '@/redux/slices/userSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Layout } from '@/components';
import './NotVerifiedPage.css';

export default function NotVerifiedPage() {
  const { account } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return !account ? (
    <Navigate to={PATHS.SIGN_IN} replace />
  ) : account?.isVerified ? (
    <Navigate to={PATHS.MAIN} replace />
  ) : (
    <Layout navMenu={false} header={false} footer={false}>
      <div className="not-verified-page">
        <h2 className="not-verified-page__title">Доступ запрещен.</h2>
        <h2 className="not-verified-page__title">Необходимо подтвердить email.</h2>
        <Button variant="contained" onClick={() => dispatch(signOut())}>
          Выйти
        </Button>
      </div>
    </Layout>
  );
}
