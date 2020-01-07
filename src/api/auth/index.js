import request from "@/router/axios"

export function userRegister (formData) {
  return request.post(`/api/auth/register`, formData)
}

export function userLogin (formData) {
  return request.post(`/api/auth/login`, formData)
}

export function resetPwd (formData) {
  return request.post(`/api/auth/resetPwd`, formData)
}

export function userLogout () {
  return request.post(`/api/auth/logout`)
}