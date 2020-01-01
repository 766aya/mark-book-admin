<template>
  <el-form ref="loginForm" :model="formData" size="small" align="center" :rules="rules">
    <el-form-item prop="username">
      <el-input
        v-model="formData.username"
        placeholder="请输入用户名"
        prefix-icon="el-icon-user">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="formData.password"
        placeholder="请输入密码"
        type="password" prefix-icon="el-icon-lock">
      </el-input>
    </el-form-item>
    <el-form-item class="submit-form-item">
      <el-button class="signin-button" type="primary" @click="handleLogin">登陆</el-button>
    </el-form-item>
  </el-form> 
</template>

<script>
export default {
  name: "RegisterForm",
  data () {
    return {
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger:"blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger:"blur" }
        ]
      },
      formData: {
        username: "admin",
        password: "admin"
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginByUsername', this.formData).then(() => {
            this.$message.success('登陆成功')
            this.$refs['loginForm'].resetFields()
            this.$router.push({path: '/'})
          })
        }
      })
    }
  }
}
</script>