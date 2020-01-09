import request from "@/router/axios"

// 分页获取学员信息
export function getStudentData (params) {
  return request.get(`/api/dsms/student/page`, {
    params
  })
}

// 根据ID获取学员信息
export function getStudentById (id) {
  return request.get(`/api/dsms/student/${id}`)
}

// 新增学员
export function createStudent (formData) {
  return request.post(`/api/dsms/student`, formData)
}

// 修改学员信息
export function updateStudent (formData) {
  return request.put(`/api/dsms/student`, formData)
}

// 删除学员
export function deleteStudentById (id) {
  return request.delete(`/api/dsms/student/${id}`)
}