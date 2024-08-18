import {
  IUser,
  TUserSigninReq,
  TUserSigninRes,
  TUserSignupReq,
  TUserSignupRes,
  TUserUpdateReq,
} from '@/types/userTypes';
import { TWithId } from '@/types/commonTypes';
import { API, authAPI } from '../config';

async function signUp(user: TUserSignupReq): Promise<TUserSignupRes> {
  const res = await authAPI.post('/auth/signup', user);
  return res.data;
}

async function signIn(user: TUserSigninReq): Promise<TUserSigninRes> {
  const res = await authAPI.post('/auth/signin', user);
  return res.data;
}

async function refresh(): Promise<TUserSigninRes | void> {
  const res = await API.get('/auth/refresh', { withCredentials: true });
  return res.data;
}

async function signOut(): Promise<void> {
  const res = await API.post('/auth/signout', { withCredentials: true });
  return res.data;
}

async function getAllUsers(): Promise<IUser[]> {
  const res = await API.get('/user');
  return res.data;
}

async function getUser(id: string): Promise<IUser> {
  const res = await API.get(`/user/${id}`);
  return res.data;
}

async function updateUser(data: TWithId<TUserUpdateReq>): Promise<IUser> {
  const { id, ...update } = data;
  const res = await API.put(`/user/${id}`, update);
  return res.data;
}

async function deleteUser(id: string): Promise<void> {
  const res = await API.delete(`/user/${id}`);
  return res.data;
}

export default {
  signUp,
  signIn,
  refresh,
  signOut,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
