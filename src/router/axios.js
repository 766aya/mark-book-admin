import axios from "axios"
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true


// HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  NProgress.done()
  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default axios