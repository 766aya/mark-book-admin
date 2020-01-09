<template>
  <ZDialog
    ref="dialog"
    :title="dialogStatus[status]"
    @closed="handleClosed"
    @handleSubmit="handleSubmit"
    :isBtnGroup="status !== 'detail'">
      <avue-detail v-if="status === 'detail'" :option="mainFormOption" v-model="formData"></avue-detail>
      <avue-form v-else v-model="formData" :option="mainFormOption" ref="form" @submit="handleSubmit"></avue-form>
  </ZDialog>
</template>

<script>
import { getStudentById } from "@/api/dsms/student/index"
import fieldMixins from "./const/fieldMixin"

export default {
  name: "userDialog",
  mixins: [fieldMixins],
  data () {
    return {
      dialogStatus: {
        create: "新增学员",
        update: "修改学员",
        detail: "学员详情"
      },
      status: "detail",
      formData: {},
    }
  },
  watch: {
    "formData.type" (value) {
      switch (value) {
        case "1":
          this.trainDict = this.driverLicenseTypeDict
          this.trainTypeDisplay = true
          break;
        case "2":
          this.trainDict = this.trainTypeDict
          this.trainTypeDisplay = true
          break;
        default:
          this.trainDict = []
          this.trainTypeDisplay = false
          break;
      }
    }
  },
  methods: {
    open (formData, status) {
      this.status = status || 'detail'
      if (status !== 'create') {
        getStudentById(formData.id).then(({ data }) => {
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
    handleSubmit (formData, done = () => {}) {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          return this.$message.error("请完善必填字段后提交")
        }
        this.$emit(this.status, this.formData, done);
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
</style>