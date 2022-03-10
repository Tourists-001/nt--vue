import axios from 'axios'
const request = axios.create({
  baseURL: 'https://open.duyiedu.com',
  params: {
    appkey: '0124107_1627715592717'
  }
})
// 添加请求拦截器
request.interceptors.response.use(function ({data}) {
  // 在发送请求之前做些什么
  return data.data
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default request
