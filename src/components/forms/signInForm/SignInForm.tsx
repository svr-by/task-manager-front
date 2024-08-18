import { useForm, Controller } from 'react-hook-form';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material//Button';

import { TUserSigninReq } from '@/types/userTypes';
import { emailRules, passwordRules } from '../validationRules';
import PasswordInput from '../passwordInput/PasswordInput';
import './SignInForm.css';

type TSignInFormProps = {
  isLoading: boolean;
  onSubmit: (data: TUserSigninReq) => void;
};

export default function SignInForm({ isLoading, onSubmit }: TSignInFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserSigninReq>();

  const isDisabledSubmitBtn = Object.keys(errors).length > 0 || isLoading;

  return (
    <Card className="signin-form">
      <CardContent className="signin-form__content">
        <div className="signin-form__header">
          <h4 className="signin-form__title">Task manager</h4>
          <p className="signin-form__desc">Введите ваши даные для входа</p>
        </div>
        <form className="signin-form__form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-form__inputs">
            <Controller
              name="email"
              control={control}
              rules={emailRules}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ''}
                  label="Email"
                  placeholder="Email"
                  error={!!errors.email}
                  helperText={errors.email?.message || ''}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={passwordRules}
              render={({ field }) => (
                <PasswordInput
                  {...field}
                  value={field.value || ''}
                  label="Пароль"
                  error={!!errors.password}
                  errorMes={errors.password?.message || ''}
                />
              )}
            />
          </div>
          <Button fullWidth type="submit" variant="contained" disabled={isDisabledSubmitBtn}>
            {!isLoading ? 'Войти' : <CircularProgress color="inherit" size={24} />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
