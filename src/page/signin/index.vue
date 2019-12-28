<template>
  <div id="page-signin">
    <div class="login-content">
      <div class="login-form-layout">
        <img class="logo" src="/images/login/logo.png">
        <span class="title">书签/内容收藏管理系统</span>
        
      </div>
      <div class="login-bg-layout" :style="{ backgroundImage: `url(/images/login/bg.jpg)` }">
        <div class="title-layout">
          <h1 class="title">少壮不努力</h1>
          <h1 class="title">一生在内地</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.scss"

export default {
  name: "signin"
}
</script>