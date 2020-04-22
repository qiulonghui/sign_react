import axios from 'axios'
import { Toast } from 'antd-mobile';
const http = axios.create({
  timeout: 12000, // 请求超时时间
})

// request拦截器
http.interceptors.request.use(
  config => {
    Toast.loading('请稍后...', 0) // duration = 0 loading 不会消失；隐藏 loading 需要手动调用 hide
    const ts = new Date().getTime()
    if (!config.params) config.params = {}
    config.params.ts = ts
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
http.interceptors.response.use(
  response => {
		const { code } = response.data
    if (code === '200') {
      return response.data
    } else {
      Toast.hide() // 移除loading
      return Promise.reject(response.data)
    }
  },
  error => {
    // http错误处理
    const { message, response } = error
    console.log('err', response) // for debug
    Toast.info(message)
    return Promise.reject(response)
  }
)

export default http
