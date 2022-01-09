import { combineReducers } from "redux";
import loginReducer from './LoginReducer';
import tokenReducer from "./TokenReducer";

const reducers = combineReducers({
    login : loginReducer,
    token : tokenReducer
});

export default reducers;