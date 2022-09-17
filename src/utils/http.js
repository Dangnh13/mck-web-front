import axios from 'axios';

// create an axios instance
const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// Add request interceptor
http.interceptors.request.use(function (config) {
    console.log('Interceptor before every request');
    return config;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

// Add response interceptor
http.interceptors.response.use(function (response) {
    console.log('Interceptor after every response');
    return response;
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export default http;