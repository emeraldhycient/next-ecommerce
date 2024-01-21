import { globalBaseUrl } from '@/constants';
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: globalBaseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axiosClient;

