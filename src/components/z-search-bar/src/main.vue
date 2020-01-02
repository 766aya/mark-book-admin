<template>
  <zCard class="z-search-bar" type="primary">
    <avue-form :option="searchOptions" v-model="formData" ref="searchForm"></avue-form>
    <el-button-group>
      <el-button icon="el-icon-search" type="primary" size="small" @click="handleSubmit">搜索</el-button>
      <el-button icon="el-icon-refresh" type="primary" size="small" @click="handleReset">重置</el-button>
    </el-button-group>
  </zCard>
</template>

<script>
import { isArray, isBoolean, isNumber, isPlainObject, isString } from "lodash"

export default {
  name: "ZSearchBar",
  data () {
    return {
      formData: {},
      searchOptions: {}
    }
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: () => {}
    },
    span: {
      type: Number,
      default: 4,
    },
    option: {
      type: Array,
      default: () => []
    },
    resetIgnore: {
      type: Array,
      default: () => ['current', 'size']
    },
    defaultOption: {
      type: Object,
      default: () => {
        return {
          menuBtn: false,
          labelWidth: 0,
          size: "small",
          column: []
        }
      }
    },
    isString: {
      type: Boolean,
      default: true,
    },
  },
  model: {
    prop: "value",
    event: "changeValue"
  },
  watch: {
    value () {
      this.formData = this.value || {}
    },
    formData () {
      this.$emit('changeValue', this.formData || {})
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      let OPTIONS = this.defaultOption
      let option = this.option.map(item => {
        if (!item.placeholder) {
          if (!item.type || item.type === 'text' || item.type === 'textarea') {
            item.placeholder = `请输入${item.label || item.prop}`
          } else {
            item.placeholder = `请选择${item.label || item.prop}`
          }
          if (!item.span) {
            item.span = this.span
          }
          delete item.label
        }
        return item
      })
      OPTIONS.column = [...this.defaultOption.column || [], ...option || []]
      this.searchOptions = OPTIONS || {}
    },
    handleSubmit () {
      this.$emit('search', this.value)
    },
    resetFormData (data = {}, string = this.isString, ignore = this.resetIgnore) {
      for (let key in data) {
        if (ignore.indexOf(key) > -1) {
          continue
        }
        let value = data[key]
        let result = string ? "" : undefined
        if (isBoolean(value) || isNumber(value) || isString(value)) {
          result = string ? "" : undefined
        } else if (isArray(value)) {
          result = []
        } else if (isPlainObject(value)) {
          result = {}
        } else {
          result = string ? "" : undefined
        }
        this.$set(data, key, result)
      }
    },
    handleReset () {
      this.resetFormData(this.formData)
      this.$emit("reset")
    },
  }
}
</script>

<style lang="scss">
.z-search-bar {
  display: flex;
  .avue-form {
    flex: 1;
    .el-form {
      .el-row {
        padding: 0;
        .avue-group__item {
          background: none;
          margin-bottom: 0;
          .el-col {
            padding: 0;
            .el-form-item {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
  .el-button-group {
    margin-left: 10px;
  }
}
</style>
