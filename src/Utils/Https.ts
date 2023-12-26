import axios, { InternalAxiosRequestConfig } from "axios"
import store from "store"

const baseURL = "https://taskfly-api.peachblossoms.ng/api/v1/"

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.get('atk');
    console.log('requesttoken', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

const successHandler = (response: any) => {
  const token = response.data.accessToken;
  console.log('responsetoken', token);
  if (token) {
    store.set('atk', token);
  }
  return response;
};

const errorHandler = (error: any) => Promise.reject(error);
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
export default axiosInstance
