import request from "@/router/axios"

export function getUserData (params) {
  return request.get(`/api/user/page`, {
    params
  })
}

export function getUserById (id) {
  return request.get(`/api/user/${id}`)
}

export function createUser (formData) {
  return request.post(`/api/user`, formData)
}

export function updateUser (formData) {
  return request.put(`/api/user`, formData)
}

export function deleteUser (id) {
  return request.delete(`/api/user/${id}`)
}

export function getUserInfo () {
  return request.get(`/api/user/info`)
}