import { LANGUAGE_STORAGE } from '@constants/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setDefaultLanguage = async (language: string) => {
  return AsyncStorage.setItem(LANGUAGE_STORAGE, language);
};

const getDefaultLanguage = async () => {
  return AsyncStorage.getItem(LANGUAGE_STORAGE);
};

const getErrorMessage = (error?: any, message = 'Something went wrong!') => {
  try {
    const result =
      error && error.data && error.data.message && typeof error.data.message === 'string'
        ? error.data.message
        : message;
    return result;
  } catch (e) {
    return message;
  }
};

const setIsLogin = async (isLog: boolean) => {
  if (isLog) {
    return AsyncStorage.setItem('@Login', 'OK');
  }
  return AsyncStorage.removeItem('@Login');
};

const isLogin = async () => {
  return AsyncStorage.getItem('@Login');
};

const addToCart = async (data: any) => {
  await AsyncStorage.setItem('@cart', JSON.stringify(data));
};

const getCart = async () => {
  try {
    const value = await AsyncStorage.getItem('@cart');
    if (value !== null) {
      return JSON.parse(value);
    }
    return {
      listCart: [],
    };
  } catch (error) {
    return {
      listCart: [],
    };
  }
};

const setIsDarkModeTheme = async (isDarkMode: boolean) => {
  if (isDarkMode) {
    return AsyncStorage.setItem('@isDarkMode', 'OK');
  }
  return AsyncStorage.removeItem('@isDarkMode');
};

const getIsDarkModeTheme = async () => {
  return AsyncStorage.getItem('@isDarkMode');
};

export {
  setDefaultLanguage,
  getDefaultLanguage,
  getErrorMessage,
  setIsLogin,
  isLogin,
  addToCart,
  getCart,
  setIsDarkModeTheme,
  getIsDarkModeTheme,
};
