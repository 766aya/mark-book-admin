import axios from "axios"
import NProgress from 'nprogress'
import Store from "@/store"
import Router from "@/router"
import { Message } from "element-ui"

NProgress.configure({ showSpinner: false })
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true


// HTTPrequest拦截
axios.interceptors.request.use(config => {
  NProgress.start()
  let token = Store.getters.accessToken
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  NProgress.done()
  const message = res.data.msg || ''
  const status = res.status
  if (status === 401) {
    Message({
      message: message,
      type: 'error'
    })
    Store.dispatch('FedLogOut').then(() => {
      Router.push({ path: '/signin' })
    })
    return
  }

  if (status !== 200 || res.data.code === 1) {
    Message({
      message: message,
      type: 'error'
    })
    return Promise.reject(new Error(message))
  }

  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

export default axios