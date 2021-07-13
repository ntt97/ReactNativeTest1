import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const sagaMiddleware = createSagaMiddleware();
const store = (function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  return store;
})();
sagaMiddleware.run(rootSaga);

export function reduxProvider(Component: any) {
  return (props: any) => (
    <Provider store={store}>
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    </Provider>
  );
}
export { store };
