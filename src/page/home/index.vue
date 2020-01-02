<template>
  <div class="home-layout">
    <div class="header-bar">
      <div class="content">
        <div class="logo">
          <img src="/images/logo-white.png">
        </div>
        <div class="title">书签/内容收藏管理系统</div>
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

export default {
  name: 'HomeLayout',
  components: {
    sidebarItem
  },
  computed: {
    ...mapGetters(['website', 'menus', 'keyCollapse']),
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
    }
  }
  > .main-bar {
    flex: 1;
    display: flex;
    flex-direction: row;
    > .menu-layout {
      min-width: 200px;
      height: 100%;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px #EEEEEE;
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
</style>