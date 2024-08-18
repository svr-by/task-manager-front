import { useForm, Controller } from 'react-hook-form';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material//Button';

import { TUserSignupReq } from '@/types/userTypes';
import { rusNameRules, emailRules, passwordRules } from '../validationRules';
import PasswordInput from '../passwordInput/PasswordInput';
import './SignUpForm.css';

type TSignInFormProps = {
  isLoading: boolean;
  onSubmit: (data: TUserSignupReq) => void;
};

interface ISignInFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignInForm({ isLoading, onSubmit }: TSignInFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInFormData>();

  const preHandleSubmit = (data: ISignInFormData) => {
    const { firstName, lastName, ...restData } = data;
    const name = `${firstName} ${lastName}`;
    onSubmit({ name, ...restData });
  };

  const isDisabledSubmitBtn = Object.keys(errors).length > 0 || isLoading;

  return (
    <Card className="signup-form">
      <CardContent className="signup-form__content">
        <div className="signup-form__header">
          <h4 className="signup-form__title">Task manager</h4>
          <p className="signup-form__desc">Заполните ваши даные для регистрации</p>
        </div>
        <form className="signup-form__form" noValidate onSubmit={handleSubmit(preHandleSubmit)}>
          <div className="signup-form__inputs">
            <Controller
              name="firstName"
              control={control}
              rules={rusNameRules}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ''}
                  label="Имя"
                  placeholder="Имя"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message || ''}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={rusNameRules}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ''}
                  label="Фамилия"
                  placeholder="Фамилия"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message || ''}
                />
              )}
            />
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
            {!isLoading ? 'Регистрация' : <CircularProgress color="inherit" size={24} />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
