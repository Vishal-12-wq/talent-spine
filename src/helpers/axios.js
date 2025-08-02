import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://pathmover-be-production.up.railway.app/v1',
    // baseURL: 'http://localhost:3004/v1',
    timeout: 10000, // Set a timeout if desired
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
