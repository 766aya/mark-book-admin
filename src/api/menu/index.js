import request from "@/router/axios"

export function getMenuList () {
  return request.get(`/api/menu/list`)
}

export function getMenuById (id) {
  return request.get(`/api/menu/${id}`)
}

export function getMenuTreeAll (params) {
  return request.get(`/api/menu/listAll`, {
    params
  })
}

export function deleteMenu (id) {
  return request.delete(`/api/menu/${id}`)
}

export function createMenu (formData) {
  return request.post(`/api/menu`, formData)
}

export function updateMenu (formData) {
  return request.put(`/api/menu`, formData)
}