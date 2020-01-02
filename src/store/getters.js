const getters = {
  accessToken: state => state.user.accessToken,
  userInfo: state => state.user.userInfo,
  menus: state => state.user.menus,
  website: state => state.common.website,
  keyCollapse: state => state.common.keyCollapse
}

export default getters
