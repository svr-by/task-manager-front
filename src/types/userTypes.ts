import { IProject } from './projectTypes';
import { ITask } from './taskTypes';

export interface IUser {
  id: string;
  name: string;
  email: string;
  isVerified: boolean;
  projects?: IProject[];
  ownProjects?: IProject[];
  assigneeTasks?: ITask[];
  subscriberTasks?: ITask[];
}

export type TUserSignupReq = {
  name: string;
  email: string;
  password: string;
};

export type TUserSignupRes = {
  isEmailSent: string;
};

export type TUserSigninReq = {
  email: string;
  password: string;
};

export type TUserSigninRes = {
  token: string;
  user: IUser;
};

export type TUserUpdateReq = {
  name: string;
  password: string;
};
