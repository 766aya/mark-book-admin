<template>
  <ZDialog
    ref="dialog"
    :title="dialogStatus[status]"
    @closed="handleClosed"
    @handleSubmit="handleSubmit"
    :isBtnGroup="status !== 'detail'">
      <avue-detail v-if="status === 'detail'" :option="mainFormOption" v-model="formData"></avue-detail>
      <avue-form v-else v-model="formData" :option="mainFormOption" ref="form"></avue-form>
  </ZDialog>
</template>

<script>
import { getUserById } from "@/api/user"
import { mainFormOption } from "./const/index"

export default {
  name: "userDialog",
  data () {
    return {
      dialogStatus: {
        create: "新增用户",
        update: "修改用户",
        detail: "用户详情"
      },
      status: "detail",
      formData: {},
      mainFormOption,
    }
  },
  methods: {
    open (formData, status) {
      this.status = status || 'detail'
      if (status !== 'create') {
        getUserById(formData.id).then(({ data }) => {
          this.formData = data.data
          this.$nextTick(() => {
            this.status !== 'detail' ? this.$refs['form'].clearValidate() : ""
          })
        })
      } else {
        this.formData = formData
      }
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

<style>

</style>