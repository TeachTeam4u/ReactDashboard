
import {useDispatch} from 'react-redux';
import * as actionCreaters  from './ActionCreator/ActionCreator';
import { bindActionCreators } from 'redux';

export function login(userId , password){
    //TO DO CALL USER LOGIN API AND GET TOKEN
    const dispatch = useDispatch();
    const { setToken } = bindActionCreators(dispatch , actionCreaters);
    setToken("TOKEN");
    return 0;
}

