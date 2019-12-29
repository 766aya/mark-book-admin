<template>
  <el-form ref="retrievePassword" :model="formData" size="small" align="center" :rules="rules">
    <el-form-item prop="email">
      <el-input
        v-model="formData.email"
        placeholder="请输入邮箱"
        :disabled="disabled"
        class="email-form"
        prefix-icon="el-icon-message">
        <el-button slot="suffix" type="text" :disabled="disabled" @click="handleGetCode">{{ codeText }}</el-button>
      </el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input
        v-model="formData.code"
        placeholder="请输入验证码"
        prefix-icon="el-icon-unlock">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        v-model="formData.password"
        placeholder="请输入新密码"
        type="password"
        prefix-icon="el-icon-lock">
      </el-input>
    </el-form-item>
    <el-form-item prop="repassword">
      <el-input
        v-model="formData.repassword"
        placeholder="请输入确认密码"
        type="password"
        prefix-icon="el-icon-lock">
      </el-input>
    </el-form-item>
    <el-form-item class="submit-form-item">
      <el-button class="signin-button" type="primary" @click="handleRegister">找回密码</el-button>
    </el-form-item>
  </el-form> 
</template>

<script>
export default {
  name: "RetrievePassword",
  data () {
    const repasswordValidator = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('确认密码不能为空'))
      }
      if (value !== this.formData.password) {
        return callback(new Error('两次输入的密码不一致'))
      }
      callback()
    }
    return {
      rules: {
        password: [
          { required: true, message: "密码不能为空", trigger:"blur" }
        ],
        repassword: [
          { required: true, validator: repasswordValidator, trigger:"blur" }
        ],
        email: [
          { required: true, pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: "请输入正确的邮箱地址", trigger:"blur" }
        ],
        code: [
          { required: true, min: 6, max: 6, message: "请输入正确的验证码", trigger: 'blur' }
        ]
      },
      formData: {},
      timer: undefined,
      time: 0
    }
  },
  computed: {
    disabled () {
      return !!this.time
    },
    codeText () {
      return this.disabled ? `${this.time}s后再次获取` : '发送验证码'
    }
  },
  methods: {
    handleGetCode () {
      if (this.time !== 0) {
        return
      }
      this.$refs['retrievePassword'].validateField('email', (valid) => {
        if (valid) { return }
        this.time = 60
        this.timer = setInterval(() => {
          if (this.time <= 1) {
            clearInterval(this.timer)
          }
          this.time -= 1
        }, 1000)
      })
    },
    handleRegister () {
      this.$refs['retrievePassword'].validate((valid) => {
        if (valid) {
          this.$message.success('注册成功')
        }
      })
    }
  }
}
</script>