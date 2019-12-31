import request from "@/router/axios"

export function getEmail (email, type = 'register') {
  return request.post(`/api/email`, {
    email,
    type
  })
}