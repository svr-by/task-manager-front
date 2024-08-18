import { useState, forwardRef, ForwardRefRenderFunction } from 'react';

import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

type TPasswordInputProps = {
  label: string;
  value: string;
  error: boolean;
  errorMes: string;
};

const PasswordInput: ForwardRefRenderFunction<OutlinedInputProps, TPasswordInputProps> = (
  props,
  ref,
) => {
  const { label, value, error, errorMes, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl fullWidth error={error}>
      <InputLabel htmlFor="auth-login-password">{label}</InputLabel>
      <OutlinedInput
        {...rest}
        label={label}
        value={value}
        inputRef={ref}
        id="auth-login-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText error>{errorMes}</FormHelperText>
    </FormControl>
  );
};

export default forwardRef(PasswordInput);
