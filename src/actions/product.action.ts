import { ParamsGetProduct } from '@types';
import {
  GET_PRODUCT_WITH_SAGA,
  GET_PRODUCT_WITH_SAGA_SUCCESS,
  GET_PRODUCT_WITH_SAGA_FAILED,
  REFRESH_PRODUCT_LIST,
} from './types';

const getProductWithSaga = (payload: ParamsGetProduct) => {
  return {
    type: GET_PRODUCT_WITH_SAGA,
    payload: payload,
  };
};

const getProductWithSagaSuccess = (payload: any) => {
  return {
    type: GET_PRODUCT_WITH_SAGA_SUCCESS,
    payload: payload,
  };
};

const getProductWithSagaFailed = () => {
  return {
    type: GET_PRODUCT_WITH_SAGA_FAILED,
    payload: undefined,
  };
};

const setRefreshProductList = (payload: boolean) => {
  return {
    type: REFRESH_PRODUCT_LIST,
    payload: payload,
  };
};

export { getProductWithSaga, getProductWithSagaSuccess, getProductWithSagaFailed, setRefreshProductList };
