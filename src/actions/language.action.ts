import { CHANGE_LANGUAGE, LANGUAGE_WITH_SAGA_SUCCESS } from '@constants/index';
import { PayloadAction } from '@types';
import { PayloadLanguageList } from './interfaces/language';

const languageWithSagaSuccess = (payload: PayloadLanguageList[]): PayloadAction<string, PayloadLanguageList[]> => {
  return {
    type: LANGUAGE_WITH_SAGA_SUCCESS,
    payload,
  };
};

const handleChangeLanguage = (payload: string): PayloadAction<string, string> => {
  return {
    type: CHANGE_LANGUAGE,
    payload,
  };
};

export { handleChangeLanguage, languageWithSagaSuccess };
