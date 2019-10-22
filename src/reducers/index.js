import { constants as actions } from '../actions';

const reducer = (state={},action) => {
    switch(action.type){
        case actions.USER_LOGIN_SUCCESS: return{ ...state, email:action.email};
        default: return state;
    }
}

export default reducer;