<template>
  <div id="page-signin">
    <div class="login-content">
      <div class="login-form-layout">
        <img class="logo" src="/images/login/logo.png">
        <span class="title">书签/内容收藏管理系统</span>
        <div class="form">
          <LoginForm v-if="routeType === 'login'"></LoginForm>
          <RegisterForm v-if="routeType === 'register'"></RegisterForm>
          <RetrievePassword v-if="routeType === 'retrievePassword'"></RetrievePassword>
        </div>
        <div class="menu">
          <el-button type="text" v-if="routeType !== 'register'" @click="handleChange('register')">用户注册</el-button>
          <el-button type="text" v-if="routeType !== 'login'" @click="handleChange('login')">用户登陆</el-button>
          <el-button type="text" v-if="routeType !== 'retrievePassword'" @click="handleChange('retrievePassword')">找回密码</el-button>
        </div>
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
import LoginForm from "./loginForm"
import RegisterForm from "./registerForm"
import RetrievePassword from "./retrievePassword"

export default {
  name: "Signin",
  components: {
    LoginForm,
    RegisterForm,
    RetrievePassword
  },
  data () {
    return {
      type: ""
    }
  },
  computed: {
    routeType: {
      get () {
        return this.type || this.$route.query.type || 'login'
      },
      set (val) {
        this.type = val
        this.$router.push({
          path: '',
          query: {
            type: val
          }
        })
      }
    }
  },
  methods: {
    handleChange (type) {
      this.routeType = type
    }
  }
}
</script>