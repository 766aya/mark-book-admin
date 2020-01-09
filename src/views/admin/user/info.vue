<template>
  <div class="user-info-view">
    <div class="avatar">
      <ZUpload v-model="formData.avatar"></ZUpload>
    </div>
    <avue-form v-model="formData" :option="userFormOption" ref="form"></avue-form>
    <div class="btn-group">
      <el-button size="small" type="primary" @click="handleSubmit">保存</el-button>
      <el-button size="small" @click="handleClose">取消</el-button>
    </div>
  </div>
</template>

<script>
import { userFormOption } from "./const/index"
import { mapGetters } from "vuex"
import { updateUser } from "@/api/user/index"

export default {
  name: "UserInfoView",
  data () {
    return {
      userFormOption,
      formData: {}
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    handleSubmit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          updateUser(this.formData).then(() => {
            this.$store.dispatch('GetUserInfo').then(() => {
              this.$message.success('保存成功')
            })
          })
        }
      })
    },
    handleClose() {
      this.$router.replace({path: '/index'})
    }
  },
  created () {
    this.formData = this.userInfo
  }
}
</script>

<style lang="scss">
.user-info-view {
  .btn-group {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > .avatar {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    .el-upload {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      img {
        height: 100px;
        width: 100px;
      }
    }
  }
}
</style>