import { createSlice, createAsyncThunk, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import userService from '@/api/services/userApiService';
import { setLocalValue, removeLocalValue } from '@/services/storageService';
import { showErrorMessage } from '@/services/errorServices';
import { IUser, TUserSigninReq, TUserSignupReq } from '@/types/userTypes';

export interface IUserSate {
  account: IUser | null;
  isLoading: boolean;
}

const initialState: IUserSate = {
  account: null,
  isLoading: false,
};

export const signUp = createAsyncThunk('user/signUp', async (user: TUserSignupReq) => {
  try {
    const response = await userService.signUp(user);
    if (response.isEmailSent) {
      toast.info('На email отправлено письмо для подтверждения адреса');
    } else {
      toast.error('Непредвиденая ошибка! Подтверждение не отправлено');
    }
  } catch (error) {
    showErrorMessage(error);
    throw error;
  }
});

export const signIn = createAsyncThunk('user/signIn', async (user: TUserSigninReq) => {
  try {
    const accountData = await userService.signIn(user);
    setLocalValue('token', accountData.token);
    return accountData.user;
  } catch (error) {
    showErrorMessage(error);
    throw error;
  }
});

export const refreshToken = createAsyncThunk('user/refresh', async () => {
  const userData = await userService.refresh();
  if (userData) {
    setLocalValue('token', userData.token);
    return userData.user;
  }
});

export const signOut = createAsyncThunk('user/signOut', async () => {
  try {
    await userService.signOut();
    removeLocalValue('token');
  } catch (error) {
    showErrorMessage(error);
    throw error;
  }
});

const accountSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.account = action.payload;
        state.isLoading = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.account = null;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(signUp.pending, signIn.pending, signOut.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(signUp.rejected, signIn.rejected, signOut.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export default accountSlice.reducer;
