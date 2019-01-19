import * as actionTypes from './actions';
import { removeJwt } from '../helpers/jwt-helper';

const initialState = {
    username : '',
    loggedIn : false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                username: action.username,
            };
        case actionTypes.REMOVE_USER:
            return {
                ...state,
                username: null,
            };
        case actionTypes.LOG_IN:
            return {
                ...state,
                loggedIn: true,
            };
        case actionTypes.LOG_OUT:
            removeJwt();
            return {
                ...state,
                username : null,
                loggedIn : false
            };
        default:
            return state;
    }
}

export default reducer;