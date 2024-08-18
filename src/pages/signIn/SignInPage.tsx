import { Link, Navigate } from 'react-router-dom';

import { TUserSigninReq } from '@/types/userTypes';
import { PATHS } from '@/router/paths';
import { signIn } from '@/redux/slices/userSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { SignInForm, Layout } from '@/components';
import './SignInPage.css';

export default function SignInPage() {
  const { account, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleSubmit = async (userData: TUserSigninReq) => {
    dispatch(signIn(userData));
  };

  return account ? (
    <Navigate to={PATHS.MAIN} replace />
  ) : (
    <Layout navMenu={false} header={false} footer={false}>
      <div className="signin-page">
        <SignInForm onSubmit={handleSubmit} isLoading={isLoading} />
        <p>
          Новый пользователь? <Link to={PATHS.SIGN_UP}>Регистрация</Link>
        </p>
      </div>
    </Layout>
  );
}
