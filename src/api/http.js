import axios from 'axios';
import { useStore } from '@/stores/index';

// 创建一个 axios 实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const store = useStore(); 
      const token = store.token || '';
      if (token) {
        config.headers.Authorization = `${token}` // 在请求头中加入 token
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data //返回响应数据部分
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Token 失效，请重新登录')
      // 跳转到登录页面等
    }
    return Promise.reject(error)
  }
)

export default instance;