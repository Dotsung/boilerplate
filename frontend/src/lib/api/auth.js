import axios from 'axios';

export const checkEmailExists = (email) => axios.get('http://localhost:4000/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('http://localhost:4000/api/auth/exists/username/' + username);

export const localRegister = ({email, username, password}) => axios.post('http://localhost:4000/api/auth/register/local', { email, username, password });

export const localLogin = ({email, password}) => {
    axios.post('http://localhost:4000/api/auth/login/local', { email, password })
    .then((res) => {
        console.log('a');
        console.log(res);
    });
}

// TODO: 정상적 응답은 오지만 쿠키를 받아오지 못함.

export const checkStatus = () => axios.get('http://localhost:4000/api/auth/check');
export const logout = () => axios.post('http://localhost:4000/api/auth/logout');