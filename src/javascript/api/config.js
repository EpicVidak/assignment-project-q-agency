import { create } from 'axios'

// define baseUrl using .env
let baseURL = process.env.BASE_API_URL

const axiosInstance = create({
  baseURL
})

function handleRequestInterceptor (config) {
  // this is done to give an example of global authentication handling
  let token = localStorage.getItem('authorization');
  if (token) {
    // appends token to auth header if it exists
    config.headers.Authorization = token;
  }
  return config;
}

axiosInstance.interceptors.request.use(config => {
  config = handleRequestInterceptor(config)
  return config
})

axiosInstance.interceptors.response.use(
  // just a little something i picked up
  (res) => res,
  (e) => {
    // throw promise error
    return Promise.reject(e);
  }
)


export default axiosInstance