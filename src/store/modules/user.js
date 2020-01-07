import {
  getStore,
  setStore
} from "@/util/store"
import { userLogin } from "@/api/auth"
import { getMenuList } from "@/api/menu"
import { getUserInfo } from "@/api/user"

export default {
  state: {
    accessToken: getStore({
      name: "accessToken"
    }) || '',
    userInfo: getStore({
      name: "userInfo"
    }) || {},
    menus: getStore({
      name: 'menus'
    }) || []
  },
  actions: {
    LoginByUsername({ commit }, formData) {
      return new Promise((resolve, reject) => {
        userLogin(formData).then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.data.access_token)
          return this.dispatch('GetUserInfo')
        }).then((data) => {
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
        commit('SET_MENU', [])
        resolve()
      })
    },
    GetUserMenuList({ commit }) {
      return new Promise((resolve, reject) => {
        getMenuList().then(({ data }) => {
          commit('SET_MENU', data.data)
          resolve(data.data)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(({ data }) => {
          commit('SET_USER_INFO', data.data)
          resolve(data.data)
        }).catch((err) => {
          reject(err)
        })
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
    },
    SET_MENU (state, menus) {
      state.menus = menus
      setStore({
        name: "menus",
        content: menus,
        type: "session"
      })
    }
  }
}