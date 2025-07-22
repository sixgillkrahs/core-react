import axiosConfig from 'axios';

const axios = axiosConfig.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // bật cái này nếu ở backend có bật cờ Access-Control-Allow-Credentials: true
});

axios.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 403) {
        window.location.href = '/unauthorized';
      }
      if (error.response.status === 401) {
        window.location.href = '/login?redirect=' + window.location.pathname;
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
