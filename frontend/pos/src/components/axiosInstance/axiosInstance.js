import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const tokens = localStorage.getItem('authTokens');
        if (tokens) {
            const { access } = JSON.parse(tokens);
            config.headers['Authorization'] = `Bearer ${access}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && originalRequest.url === 'token/refresh/') {
            window.location.href = '/login/'; 
            return Promise.reject(error);
        }

        if (error.response.data.code === 'token_not_valid' && error.response.status === 401 && error.response.statusText === 'Unauthorized') {
            const tokens = localStorage.getItem('authTokens');

            if (tokens) {
                const { refresh } = JSON.parse(tokens);

                if (refresh) {
                    try {
                        const response = await axiosInstance.post('token/refresh/', { refresh });

                        localStorage.setItem('authTokens', JSON.stringify(response.data));
                        axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
                        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;

                        return axiosInstance(originalRequest);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
