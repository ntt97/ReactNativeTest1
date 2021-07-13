import { ParamsGetProduct, PayloadAction } from '@types';
import { GET_PRODUCT_WITH_SAGA } from '@actions/types';
import { call, takeLatest, put, delay } from 'redux-saga/effects';
import { getProductApi } from '../services/product.service';
import { getProductWithSagaSuccess, getProductWithSagaFailed } from '@actions/product.action';
import NavigationActionsService from 'navigation';
import { YellowBox } from 'react-native';

function* getProducts(action: PayloadAction<string, ParamsGetProduct>): any {
  // NavigationActionsService.showLoading();
  try {
    const res = yield call(getProductApi, action.payload);
    if (res.data) {
      yield delay(1000);
      yield put(getProductWithSagaSuccess({ newData: res.data, pagination: action.payload.pagination }));
    } else {
      yield put(getProductWithSagaFailed());
    }
    yield delay(1000);
  } catch (error) {
    yield put(getProductWithSagaFailed());
  }
  // NavigationActionsService.hideLoading();
}

function* navigationSaga() {
  yield takeLatest(GET_PRODUCT_WITH_SAGA, getProducts);
}

export default navigationSaga;
