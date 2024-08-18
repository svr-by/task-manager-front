import { Link, Navigate } from 'react-router-dom';

import { TUserSignupReq } from '@/types/userTypes';
import { PATHS } from '@/router/paths';
import { signUp } from '@/redux/slices/userSlice';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { SignUpForm, Layout } from '@/components';
import './SignUpPage.css';

export default function SignUpPage() {
  const { account, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleSubmit = async (userData: TUserSignupReq) => {
    dispatch(signUp(userData));
  };

  return account ? (
    <Navigate to={PATHS.MAIN} replace />
  ) : (
    <Layout navMenu={false} header={false} footer={false}>
      <div className="signup-page">
        <SignUpForm onSubmit={handleSubmit} isLoading={isLoading} />
        <p>
          Уже зарегистрированы? <Link to={PATHS.SIGN_IN}>Войти</Link>
        </p>
      </div>
    </Layout>
  );
}
