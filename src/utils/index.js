export const isLogin = () =>{
    console.log('Hello')
    if(localStorage.getItem('email')){
        return true;
    }
    return false;
}