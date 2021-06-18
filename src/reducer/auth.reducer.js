import {authConstants} from '../actions/constants'

const initState = {
    firstName: '',
    lastName:'',
    email: '',
    authenticating: '',
    authenticated: '',
    error: null
}

export default (state = initState, action) => {
    console.log(action)
    switch(action.type) {
        case `${authConstants.USER_LOGIN}_REQUEST`: 
        state = {
            ...state,
            authenticating: true
        }
        break;
        case `${authConstants.USER_LOGIN}_SUCCESS`:
        state = {
            ...state,
            ...action.payload.user,
            authenticating:false,
            authenticated:true,
        }
        break;
        case `${authConstants.USER_LOGIN}_FAILURE`:
            state = {
                ...state,
                error: action.payload.error,
                authenticating:false,
                authenticated:false
            }
        break;
        case `${authConstants.USER_LOGOUT}_REQUEST`:
        break;
        case `${authConstants.USER_LOGOUT}_SUCCESS`:
            state = {
                initState
            }
        break;
        case `${authConstants.USER_LOGOUT}_FAILURE`:
            state = {
                ...state,
                error: action.payload.err
            }


    }
    return state;
}