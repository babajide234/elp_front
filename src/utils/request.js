import '@/bootstrap';
import { Message } from 'element-ui';
import { isLogged } from '@/utils/auth';

// const BASE_URL_DEV = 'http://127.0.0.1:8000/api/';
const BASE_URL_LIVE = 'https://portablaze.com/api/';

// Create axios instance
const service = window.axios.create({
  // baseURL: BASE_URL_DEV,
  baseURL: BASE_URL_LIVE,
  timeout: 10000, // Request timeout
  headers: {
    'access-control-allow-origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Content-Type': 'application/json',
    'Accept': 'application/json',

  },
  crossdomain: true,
  withCredentials: false,
});

// Request intercepter
service.interceptors.request.use(

  config => {
    const token = isLogged();
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('Token');
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    // if (response.headers.authorization) {
    //   setLogged(response.headers.authorization);
    //   response.data.token = response.headers.authorization;
    // }
    // c onst message = response.data.message;
    // Message({
    //   message: `${message}`,
    //   type: 'success',
    //   duration: 5 * 1000,
    // });
    return response.data;
  },
  error => {
    let message = error.message;

    if (error.response.data && error.response.data.errors) {
      message = error.response.data.errors;
    } else if (error.response.data && error.response.data.error) {
      message = error.response.data.error;
    }

    const keys = Object.keys(error.response.data.errors);
    keys.forEach((key) => {
      console.log(`${key}:${message[key]}`);
      setTimeout(() => {
        Message({
          message: `${message[key]}`,
          type: 'error',
          duration: 5 * 1000,
        });
      }, 100);
    });
    return Promise.reject(error);
  }
);

export default service;
