import { removeJwt } from "../helpers/jwt-helper";

export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const handleUsernameChange = (username) => {
    return { type: SET_USER, username: username }
};
export const onAuthorisedToken = () => {
    return { type: LOG_IN }
};
export const onUnauthorisedToken = () => { 
    removeJwt();
    return { type: LOG_OUT }
};
