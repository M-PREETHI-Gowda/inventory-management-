import {createStore, applyMiddleware} from 'redux';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSagas';
import allReducers from './reducers';

const sagaMiddleware = creatSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
console.log(store.getState());
sagaMiddleware.run(rootSaga);

export default store;
