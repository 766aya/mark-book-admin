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
        
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout'
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
    > .container {
      margin: 15px;
      padding: 10px;
      width: 100%;
      background: #FFFFFF;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #EEEEEE;
    }
  }
}
</style>