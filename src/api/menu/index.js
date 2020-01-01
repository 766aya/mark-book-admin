import request from "@/router/axios"

export function getMenuList () {
  return request.get(`/api/menu/list`)
}