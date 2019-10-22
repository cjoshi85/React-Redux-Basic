import { put, take , all, call } from 'redux-saga/effects';
import { constants as actions } from '../actions';
import history from '../history';

export function* rootSaga(){
    yield all([userLogin()])
}

export function* userLogin(){
    while(true){
        yield take(actions.USER_LOGIN);
        const user = {email:'cjoshi85@gmail.com',admin:true};
        yield put({type:actions.USER_LOGIN_SUCCESS,email:user.email});
        localStorage.setItem('email',user.email)
        //yield call(history.push,'/dahboard');
    }
}