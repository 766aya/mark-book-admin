import request from "@/router/axios"

export function userRegister (formData) {
  return request.post(`/api/auth/register`, formData)
}