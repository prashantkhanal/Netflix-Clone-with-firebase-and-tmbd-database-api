import axios from 'axios';
import baseUrl from './baseUrl';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
