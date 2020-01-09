<template>
  <ZDialog
    ref="dialog"
    :title="dialogStatus[status]"
    @closed="handleClosed"
    @handleSubmit="handleSubmit"
    :isBtnGroup="status !== 'detail'">
      <avue-detail v-if="status === 'detail'" :option="mainFormOption" v-model="formData">
        <img slot="avatarForm" v-if="formData.avatar" class="avatar" :src="formData.avatar">
      </avue-detail>
      <avue-form v-else v-model="formData" :option="mainFormOption" ref="form">
        <ZUpload slot="avatar" v-model="formData.avatar"></ZUpload>
      </avue-form>
  </ZDialog>
</template>

<script>
import { mainFormOption } from "./const/index"

export default {
  name: "userDialog",
  data () {
    return {
      dialogStatus: {
        create: "新增分类",
        update: "修改分类",
        detail: "分类详情"
      },
      status: "detail",
      formData: {},
      mainFormOption,
    }
  },
  methods: {
    open (formData, status) {
      this.status = status || 'detail'
      this.formData = formData
      this.$refs['dialog'].open()
      this.$nextTick(() => {
        this.status !== 'detail' ? this.$refs['form'].clearValidate() : ""
      })
    },
    close () {
      this.$refs['dialog'].close()
    },
    handleSubmit () {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          return this.$message.error("请完善必填字段后提交")
        }
        this.$emit(this.status, this.formData);
      })
    },
    handleClosed () {
      this.formData = {}
      this.status !== 'detail' ? this.$refs['form'].resetForm() : ""
    },
  }
}
</script>

<style lang="scss" scope>
.avatar {
  width: 150px;
  height: 150px;
}
</style>