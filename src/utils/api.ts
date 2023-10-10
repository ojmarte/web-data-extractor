import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Define your API base URL and any other configuration options you want to set globally for your API requests.
const apiConfig: AxiosRequestConfig = {
    baseURL: 'https://your-api-url.com',
    timeout: 10000,  // Set a timeout for requests (10 seconds in this example).
    headers: {
        'Content-Type': 'application/json',
        // ...any other headers you want to set globally
    },
};

// Create and export an Axios instance with your API configuration.
const api: AxiosInstance = axios.create(apiConfig);

// Optionally, you can set up interceptors to run your code or modify the request or response before the request is sent or after the response is received.
// For example, logging or adding authentication headers to every request:

api.interceptors.request.use(
    (config) => {
        // Do something before the request is sent, like adding an authorization header:
        // config.headers.Authorization = `Bearer ${yourAuthToken}`;
        return config;
    },
    (error) => {
        // Do something with the request error
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    (response) => {
        // Do something with the response data
        return response;
    },
    (error) => {
        // Do something with the response error
        return Promise.reject(error);
    },
);

export default api;
