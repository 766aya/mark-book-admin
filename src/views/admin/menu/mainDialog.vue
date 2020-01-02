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
