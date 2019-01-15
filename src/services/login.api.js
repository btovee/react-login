import axiosInstance from './axois.instance';
import {
    getJwt
} from '../helpers/jwt-helper';


class LoginAPI {

    login = (username, password) => {

        return axiosInstance.post('/login', {
            username: username,
            password: password
        });


    }

    verifyToken = () => {
        const jwt = getJwt();

        return axiosInstance.get('/verifyToken', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
    }

}

export default LoginAPI