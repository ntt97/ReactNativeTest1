import { all, fork } from 'redux-saga/effects';
import navigationRootSaga from './navigation.saga';
import productSaga from './product.saga';

export default function* rootSaga() {
  yield all([fork(navigationRootSaga), fork(productSaga)]);
}
