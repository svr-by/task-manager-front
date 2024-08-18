/* eslint-disable no-useless-escape */
export const EMAIL_REGEX = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/;
export const RUS_NAME_REGEX = /^[а-яА-ЯёЁ0-9]+$/;
export const NAME_REGEX =
  /^(?=.*[a-zA-Zа-яА-Я0-9])[a-zA-Zа-яА-ЯёЁ0-9.,]+(?:\s[a-zA-Zа-яА-ЯёЁ0-9".,-]+){0,20}$/;
export const NUMBER_REGEX = /^[a-zA-Zа-яА-Я0-9.,\/\s-]+$/;
export const PHONE_REGEX = /^(\+375)\d{9}$/;
export const PRICE_REGEX = /^[0-9]+(?:\.[0-9]{1,2})?$/;

export const rusNameRules = {
  required: { value: true, message: 'Обязательное поле' },
  minLength: { value: 3, message: `Минимум 3 символа` },
  maxLength: { value: 20, message: `Максисум 20 символов` },
  pattern: { value: RUS_NAME_REGEX, message: 'Недопустимые символы' },
} as const;

export const nameRules = {
  required: { value: true, message: 'Обязательное поле' },
  minLength: { value: 3, message: `Минимум 3 символа` },
  maxLength: { value: 30, message: `Максисум 30 символов` },
  pattern: { value: NAME_REGEX, message: 'Недопустимые символы' },
} as const;

export const emailRules = {
  required: { value: true, message: 'Обязательное поле' },
  maxLength: { value: 30, message: `Максисум 30 символов` },
  pattern: { value: EMAIL_REGEX, message: 'Не корректный email' },
} as const;

export const passwordRules = {
  required: { value: true, message: 'Обязательное поле' },
  minLength: { value: 6, message: `Минимум 6 символов` },
  maxLength: { value: 20, message: `Максисум 20 символов` },
} as const;

export const descriptionRules = {
  maxLength: { value: 200, message: `Максисум 200 символов` },
} as const;
