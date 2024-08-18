import { USER_ERR_MES, COMMON_ERR_MES } from './errorMessages';

export const ERROR_MES_RUS = {
  [USER_ERR_MES.EMAIL_EXIST]: 'Пользователь уже существует',
  [USER_ERR_MES.EMAIL_INVALID]: 'Не корректный email',
  [USER_ERR_MES.EMAIL_EPMTY]: 'Email не должен быть пустым',
  [USER_ERR_MES.EMAIL_NOT_FOUND]: 'Пользователь с таким email не найден',
  [USER_ERR_MES.PWD_INCORRECT]: 'Не верный пароль',
  [USER_ERR_MES.NOT_FOUND]: 'Пользователь не найден',
  [COMMON_ERR_MES.TITLE_STRING]: 'Залоговок должен быть строкой',
  [COMMON_ERR_MES.TITLE_LENGTH]: 'Не корректная длинна залоговка',
  [COMMON_ERR_MES.TITLE_CHARS]: 'Не корректные символы в залоговке',
  [COMMON_ERR_MES.DESC_STRING]: 'Описание должно быть строкой',
  [COMMON_ERR_MES.DESC_LENGTH]: 'Не корректная длинна описания',
};
