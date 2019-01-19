import * as actions from './actions';

const initialState = {
    username : '',
    loggedIn : false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...state,
                username: action.username,
            };
        case actions.REMOVE_USER:
            return {
                ...state,
                username: null,
            };
        case actions.LOG_IN:
            return {
                ...state,
                loggedIn: true,
            };
        case actions.LOG_OUT:
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