import { CHANGE_DARK_MODE } from '@constants/index';
import { PayloadAction } from '@types';
export interface DarkModeState {
  isDarkMode: boolean;
}

const defaultState: DarkModeState = {
  isDarkMode: false,
};
export default function darkMode(state: DarkModeState = defaultState, action: PayloadAction<string, any>) {
  switch (action.type) {
    case CHANGE_DARK_MODE: {
      return {
        ...state,
        isDarkMode: action.payload,
      };
    }
    default:
      return state;
  }
}
