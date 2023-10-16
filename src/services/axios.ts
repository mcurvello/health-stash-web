import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: 'https://healthstash-node-pbwsem4ea-laerciodev.vercel.app',
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
