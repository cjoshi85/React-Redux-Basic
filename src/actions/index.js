const USER_LOGIN = 'USER/LOGIN'
const USER_LOGIN_SUCCESS = 'USER/LOGIN_SUCCESS'
const USER_LOGIN_ERROR  = 'USER/LOGIN_ERROR'

export const constants = {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
}

export function login(username,password){
    return{
        type: USER_LOGIN,
        username,
        password
    }
}