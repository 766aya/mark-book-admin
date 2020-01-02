<template>
  <zDialog
    :title="dialogStatus[status]"
    @closed="handleClosed"
    @handleSubmit="handleSubmit"
    :isBtnGroup="status !== 'detail'"
    ref="dialog">
      <avue-detail v-if="status === 'detail'" :option="detailOption" v-model="formData"></avue-detail>
      <avue-form v-else v-model="formData" :option="mainFormOption" ref="form"></avue-form>
  </zDialog>
</template>

<script>
import {
  getMenuById
} from "@/api/menu"
import {
  mainFormOption
} from "./const/index"

export default {
  name: "menuDialog",
  data () {
    return {
      mainFormOption,
      dialogStatus: {
        create: "新增菜单",
        update: "修改菜单",
        detail: "查看菜单"
      },
      status: "detail",
      formData: {}
    }
  },
  watch: {
    formData: {
      deep: true,
      handler () {
        if (this.formData.type === "0") {
          this.$set(this.mainFormOption.column[4], 'display', true)
          this.$set(this.mainFormOption.column[5], 'display', true)
          this.$set(this.mainFormOption.column[6], 'display', true)
          this.$set(this.mainFormOption.column[7], 'display', true)
          this.$set(this.mainFormOption.column[8], 'display', true)
          this.$set(this.mainFormOption.column[9], 'display', false)
          this.$set(this.mainFormOption.column[10], 'display', true)
          this.$set(this.mainFormOption.column[11], 'display', true)
          this.$set(this.mainFormOption.column[12], 'display', true)
          this.$set(this.mainFormOption.column[13], 'display', true)
        } else if (this.formData.type === "1") {
          this.$set(this.mainFormOption.column[4], 'display', false)
          this.$set(this.mainFormOption.column[5], 'display', false)
          this.$set(this.mainFormOption.column[6], 'display', false)
          this.$set(this.mainFormOption.column[7], 'display', false)
          this.$set(this.mainFormOption.column[8], 'display', false)
          this.$set(this.mainFormOption.column[9], 'display', true)
          this.$set(this.mainFormOption.column[10], 'display', false)
          this.$set(this.mainFormOption.column[11], 'display', false)
          this.$set(this.mainFormOption.column[12], 'display', false)
          this.$set(this.mainFormOption.column[13], 'display', false)
        } else {
          this.$set(this.mainFormOption.column[4], 'display', false)
          this.$set(this.mainFormOption.column[5], 'display', false)
          this.$set(this.mainFormOption.column[6], 'display', false)
          this.$set(this.mainFormOption.column[7], 'display', false)
          this.$set(this.mainFormOption.column[8], 'display', false)
          this.$set(this.mainFormOption.column[9], 'display', false)
          this.$set(this.mainFormOption.column[10], 'display', false)
          this.$set(this.mainFormOption.column[11], 'display', false)
          this.$set(this.mainFormOption.column[12], 'display', false)
          this.$set(this.mainFormOption.column[13], 'display', false)
        }
      }
    }
  },
  computed: {
    detailOption () {
      return {
        column: mainFormOption.column
      }
    }
  },
  methods: {
    open (formData, status) {
      this.status = status || 'detail'
      if (status !== 'create') {
        getMenuById(formData.id).then(({ data }) => {
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
    handleSubmit() {
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
    }
  }
}
</script>
