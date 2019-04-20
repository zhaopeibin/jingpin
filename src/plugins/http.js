
import axios from 'axios'


const HttpTool = {}
HttpTool.install = (Vue) => {
  // axios
  axios.defaults.baseURL = 'http://192.168.0.118:8085'
  
  // 添加请求拦截器
  
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前
    // console.log(config); // headers
    const AUTH_TOKEN = sessionStorage.getItem('token')

    config.headers.common['Authorization'] = AUTH_TOKEN



    return config;
  }, function (error) {
    // 对请求错误
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(function (response) {
    // 对响应数据
    return response;
  }, function (error) {
    // 对响应错误
    return Promise.reject(error);
  });
  
  Vue.prototype.$http = axios
}

 export default HttpTool  
