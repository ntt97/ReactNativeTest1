import { SHOW_LOADING_WITH_SAGA, HIDE_LOADING_WITH_SAGA } from '@constants/index';
export interface LoadingState {
  isLoading: boolean;
}

const showLoadingWithSaga = () => {
  return {
    type: SHOW_LOADING_WITH_SAGA,
    payload: undefined,
  };
};

const hideLoadingWithSaga = () => {
  return {
    type: HIDE_LOADING_WITH_SAGA,
    payload: undefined,
  };
};

export { showLoadingWithSaga, hideLoadingWithSaga };
