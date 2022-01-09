export const logIn = (user) => {
    return (dispatch) => {
        dispatch({
            type : "LOG_IN",
            payload : user
        })
    }
}

export const islogedIn = () => {
    return (dispatch) => {
        dispatch({
            type : "IS_LOGED_IN",
            payload : null
        })
    }
}


export const getToken = () => {
    return (dispatch) => {
        dispatch({
            type : "GET_TOKEN",
            payload : null
        })
    }
}

export const setToken = (token) => {
    return (dispatch) => {
        dispatch({
            type : "SET_TOKEN",
            payload : token
        })
    }
}