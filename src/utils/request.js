import axios from "axios";

// 会返回一个function
const service = axios.create({
  baseURL: "https://localhost:8080",
  // 超时时间
  timeout: 5000,
});
// 对响应的拦截器进行封装, .use插入自定义的拦截器
service.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
        return response.data
    } else {
        return Promise.reject(new Error('请求失败!'))
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
