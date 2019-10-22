import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import {rootSaga} from '../sagas'

const sagaMiddleware = createSagaMiddleware();
const initialState = {
    email:'',
    admin:false
}

const middleware = () => applyMiddleware(sagaMiddleware);
const store = createStore(reducer,initialState,middleware());
sagaMiddleware.run(rootSaga);

export default store;