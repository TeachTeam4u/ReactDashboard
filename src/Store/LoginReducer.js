import {login} from './LoginAction';


const initialLoginState = {
    isLogedIn : false,
    logInMsg : ""
}

const loginReducer = (logedIn = initialLoginState , action) => {
    switch(action.type){
        case "LOG_IN":
            
            var token = login(action.payload.userId , action.payload.password);
            if(token.code != 0){
                logedIn.isLogedIn = false;
                logedIn.logInMsg = token.msg;
            }else{
                logedIn.isLogedIn = true;
                logedIn.logInMsg = "VALID";
            }
            return logedIn;
        case "IS_LOGED_IN":
            return logedIn.isLogedIn;
        default:
            return logedIn;
    }
}

export default loginReducer;