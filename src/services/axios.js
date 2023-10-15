import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: 'http://127.0.0.1:3000',
});

export default axiosInstance;
