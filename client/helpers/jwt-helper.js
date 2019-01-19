const JWT = "JWT";

export const getJwt = () => {
   return localStorage.getItem(JWT)
}

export const setJwt = (authToken) => {
    localStorage.setItem(JWT, authToken);
}

export const removeJwt = (authToken) => {
    localStorage.removeItem(JWT)
}