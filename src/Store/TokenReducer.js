
const initialToken = null

const tokenReducer = (token = initialToken , action) => {
    switch(action.type){
        case "GET_TOKEN":
            return token;
        case "SET_TOKEN":
            token = action.payload;
            return token;
        default:
            return token;
    }
}

export default tokenReducer;