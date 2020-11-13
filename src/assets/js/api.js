import axios from 'axios';

const api = axios.create({
    baseUrl: '/',
    timeout: 1000 * 5,
});

export default api;
