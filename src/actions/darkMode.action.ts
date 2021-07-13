import { CHANGE_DARK_MODE } from '@constants/index';
import { PayloadAction } from '@types';

const changeDarkMode = (payload: boolean): PayloadAction<string, boolean> => {
  return {
    type: CHANGE_DARK_MODE,
    payload,
  };
};

export { changeDarkMode };
