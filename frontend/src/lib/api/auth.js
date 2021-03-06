import axios from 'axios';

export const checkEmailExists = (email) => axios.get('http://localhost:4000/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('http://localhost:4000/api/auth/exists/username/' + username);

export const localRegister = ({email, username, password}) => axios.post('http://localhost:4000/api/auth/register/local', { email, username, password });

export const localLogin = ({email, password}) => axios.post('http://localhost:4000/api/auth/login/local', { email, password });

export const checkStatus = () => axios.get('http://localhost:4000/api/auth/check');
export const logout = () => axios.post('http://localhost:4000/api/auth/logout');