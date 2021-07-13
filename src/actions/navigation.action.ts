import { NAVIGATION_ROOT_WITH_SAGA, NAVIGATION_ROOT_SUCCESS, SELECTED_MENU } from '@constants/index';
import { PayloadAction } from '../@types/navigation';
import { PayloadNavigationRoot, PayloadSelectedMenuIndex } from './interfaces/navigation';

const navigationRootAction = (payload: PayloadNavigationRoot): PayloadAction<string, PayloadNavigationRoot> => {
  return {
    type: NAVIGATION_ROOT_WITH_SAGA,
    payload,
  };
};

const navigationRootSuccess = (payload: PayloadNavigationRoot): PayloadAction<string, PayloadNavigationRoot> => {
  return {
    type: NAVIGATION_ROOT_SUCCESS,
    payload,
  };
};

const selectMenuIndex = (payload: PayloadSelectedMenuIndex): PayloadAction<string, PayloadSelectedMenuIndex> => {
  return {
    type: SELECTED_MENU,
    payload,
  };
};

export { navigationRootAction, selectMenuIndex, navigationRootSuccess };
