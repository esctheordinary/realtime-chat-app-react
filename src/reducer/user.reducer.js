import { userContants } from "../actions/constants";

const initState = {
    users: []
}

export default (state = initState, action) => {
    switch (action.type){
        case `${userContants.GET_REALTIME_USERS}_REQUEST}`: 
        break;
        case `${userContants.GET_REALTIME_USERS}_SUCCESS`: 
        state = {
            ...state,
            users: action.payload.users
        }
        break;
        case `${userContants.GET_REALTIME_USERS}_FAILURE}` : 
        break;
    }
    return state;
}