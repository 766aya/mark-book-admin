import {
  getStore,
  setStore
} from "@/util/store"
import { userLogin } from "@/api/auth"

export default {
  state: {
    accessToken: getStore({
      name: "accessToken"
    }) || '',
    userInfo: getStore({
      name: "userInfo"
    }) || {}
  },
  actions: {
    LoginByUsername({ commit }, formData) {
      return new Promise((resolve, reject) => {
        userLogin(formData).then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.data.access_token)
          commit('SET_USER_INFO', data.data)
          resolve(data.data)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    FedLogOut ({ commit }) {
      return new Promise((resolve) => {
        commit('SET_ACCESS_TOKEN', "")
        commit('SET_USER_INFO', {})
        resolve()
      })
    }
  },
  mutations: {
    SET_ACCESS_TOKEN (state, accessToken) {
      state.accessToken = accessToken
      setStore({
        name: 'accessToken',
        content: accessToken,
        type: "session"
      })
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
      setStore({
        name: 'userInfo',
        content: userInfo,
        type: "session"
      })
    }
  }
}