import axiosInstance from './axois.instance';


class LoginAPI {

    login = (username, password) => {

        return axiosInstance.post('/login', {
            username: username,
            password: password
          });


    }


}

export default LoginAPI