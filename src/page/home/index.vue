<template>
  <div class="home-layout">
    <div class="header-bar">
      <div class="content">
        <div class="logo">
          <img src="/images/logo-white.png">
        </div>
        <div class="title">通用管理系统</div>
        <div style="flex: 1;"></div>
        <div class="info-layout">
          <div class="userinfo">
            <div class="avatar">
              <img :src="userInfo.avatar">
            </div>
            <div class="username">{{ userInfo.username }}</div>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                更多操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="userinfo-menu-item" command="userinfo">个人信息</el-dropdown-item>
                <el-dropdown-item class="userinfo-menu-item" command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="main-bar">
      <div class="menu-layout">
        <el-menu
          :default-active="nowTagValue"
          :show-timeout="200"
          :collapse="keyCollapse"
          unique-opened
          mode="vertical">
          <sidebarItem
            :menu="menus"
            :props="website.menu.props"
            :collapse="keyCollapse"
            first/>
        </el-menu>
      </div>
      <div class="main-layout">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="item in breadcrumbList"
            :key="item.title"
            :to="{path: item.path}">
            {{ item.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view class="container"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from "./menuItem"
import {
  userLogout
} from "@/api/auth"

export default {
  name: 'HomeLayout',
  components: {
    sidebarItem
  },
  computed: {
    ...mapGetters(['website', 'menus', 'keyCollapse', 'userInfo']),
    breadcrumbList () {
      if (this.$route.meta) {
        let breadcrumbs = this.$route.meta.breadcrumbs || []
        if (breadcrumbs.length !== 0) {
          return breadcrumbs
        }
      }
      if (this.$route.meta.title || this.$route.name) {
        return [
          {
            path: '/',
            title: "首页"
          }, {
            path: this.$route.path,
            query: this.$route.query,
            title: this.$route.meta.title || this.$route.name || ''
          }
        ]
      } else {
        return [
          {
            path: '/',
            title: "首页"
          }
        ]
      }
    },
    nowTagValue: function() {
      return this.$router.$avueRouter.getValue(this.$route)
    }
  },
  methods: {
    handleCommand (key) {
      switch (key) {
        case 'userinfo':
          this.$router.push({
            path: "/user/info"
          })
          break;
        case 'logout':
          userLogout().then(() => {
            this.$store.dispatch('FedLogOut')
            this.$router.push({ path: '/signin' })
          }).catch(() => {
            this.$store.dispatch('FedLogOut')
            this.$router.push({ path: '/signin' })
          })
          break;
        default:
          break;
      }
    }
  },
  created () {
    this.$store.dispatch('GetUserMenuList').then(data => {
      if (data.length === 0) return
      this.$router.$avueRouter.formatRoutes(data, true)
    })
  }
}
</script>

<style lang="scss">
.home-layout {
  height: 100vh;
  width: 100%;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  > .header-bar {
    width: 100%;
    height: 50px;
    display: flex;
    background: #4285FF;
    user-select: none;
    z-index: 1;
    > .content {
      padding: 0 50px;
      display: flex;
      flex: 1;
      > .logo {
        height: 100%;
        width: 50px;
        img {
          width: 100%;
        }
      }
      > .title {
        color: #FFFFFF;
        font-size: 25px;
        line-height: 50px;
        margin-left: 10px;
      }
      .info-layout {
        display: flex;
        align-items: center;
        .userinfo {
          display: flex;
          align-items: center;
          > .avatar {
            height: 40px;
            width: 40px;
            overflow: hidden;
            border-radius: 50%;
            background: #FFFFFF;
            img {
              width: 100%;
            }
          }
          .username {
            margin-left: 10px;
            color: #FFFFFF;
            user-select: none;
          }
          .el-dropdown-link {
            cursor: pointer;
            color: #FFFFFF;
            font-size: 12px;
            margin-left: 10px;
          }
          .el-icon-arrow-down {
            font-size: 12px;
          }
        }
      }
    }
  }
  > .main-bar {
    flex: 1;
    display: flex;
    flex-direction: row;
    > .menu-layout {
      min-width: 200px;
      height: 100%;
      background: #4285FF;
      box-shadow: 0px 0px 10px #EEEEEE;
      overflow: hidden;
      .el-menu {
        background: transparent;
        overflow: hidden;
        border-right: none;
        .el-submenu__title {
          i {
            margin-right: 5px;
          }
          i, span {
            color: #FFFFFF;
          }
        }
        .el-menu-item {
          i {
            margin-right: 5px;
          }
          i, span {
            color: #FFFFFF;
          }
        }
        .el-menu-item, .el-submenu__title {
          border-left: 3px solid transparent;
          &.is-active, &:hover {
            background: #004e9c;
          }
          &.is-active {
            border-left: 3px solid #FFFFFF;
          }
        }
      }
    }
    > .main-layout {
      margin: 15px;
      width: calc(100vw - 200px - 30px);
      display: flex;
      flex-direction: column;
      > .container {
        height: calc(100vh - 110px - 14px);
        overflow-y: scroll;
        margin-top: 10px;
        padding: 10px;
        background: #FFFFFF;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #EEEEEE;
      }
    }
  }
}
.userinfo-menu-item {
  font-size: 12px;
}
</style>