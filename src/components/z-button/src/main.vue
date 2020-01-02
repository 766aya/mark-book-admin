<template>
  <el-button
    :size="size"
    :type="buttonType"
    :plain="defaultType ? false : plain"
    :round="defaultType ? false : round"
    :circle="defaultType ? false : circle"
    :loading="defaultType ? false : loading"
    :disabled="defaultType ? false : disabled"
    class="gov-button"
    @click="handleClick">
      <template v-if="defaultType">
        <i class="icon iconfont" v-if="buttonIcon" :class="buttonIcon"></i>
        <span>{{ context }}</span>
      </template>
      <template v-else>
        <slot>
          <i class="icon iconfont" v-if="buttonIcon" :class="buttonIcon"></i>
          <span>{{ context }}</span>
        </slot>
      </template>
  </el-button>
</template>

<script>
export default {
  name: "ZButton",
  data () {
    return {
      defaultType: false,
    }
  },
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "default",
    },
    // 按钮文本
    text: {
      type: String,
      default: "",
    },
    // 图标
    icon: {
      type: String,
      default: "",
    },
    // large/medium/small/mini
    size: {
      type: String,
      default: "small",
    },
    // 是否禁用状态
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否加载中状态
    loading: {
      type: Boolean,
      default: false,
    },
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false,
    },
    // 是否圆形按钮
    circle: {
      type: Boolean,
      default: false,
    },
    // 是否朴素按钮
    plain: {
      type: Boolean,
      default: false,
    },
    // 权限
    permission: {
      type: String,
      default: "",
    },
  },
  computed: {
    buttonType () {
      let outputText
      switch (this.type) {
        case "create": outputText = "success"; break
        case "delete": outputText = "danger"; break
        case "import": outputText = "default"; break
        case "export": outputText = "default"; break
        case "textcreate": outputText = "text"; break
        case "textview": outputText = "text"; break
        case "textupdate": outputText = "text"; break
        case "textdelete": outputText = "text"; break
        default: outputText = this.type || "default"; break
      }
      return outputText
    },
    buttonIcon () {
      let outputText
      switch (this.type) {
        case "create": outputText = ""; break
        case "delete": outputText = ""; break
        case "import": outputText = ""; break
        case "export": outputText = ""; break
        case "textcreate": outputText = ""; break
        case "textview": outputText = ""; break
        case "textupdate": outputText = ""; break
        case "textdelete": outputText = ""; break
        default: outputText = this.icon; break
      }
      return outputText
    },
    context () {
      let outputText = ""
      if (this.text && this.text !== "") {
        outputText = this.text
      } else {
        switch (this.type) {
          case "create": outputText = "新增"; break
          case "delete": outputText = "删除"; break
          case "import": outputText = "导入"; break
          case "export": outputText = "导出"; break
          case "textcreate": outputText = "新增"; break
          case "textview": outputText = "详情"; break
          case "textupdate": outputText = "编辑"; break
          case "textdelete": outputText = "删除"; break
          default: outputText = this.text; break
        }
      }
      return outputText
    },
  },
  methods: {
    handleClick () {
      this.$emit("click")
    },
    isDefaultType () {
      let type = ["create", "delete", "import", "export", "textcreate", "textview", "textupdate", "textdelete"]
      type.forEach(item => {
        if (this.type === item) {
          this.defaultType = true
        }
      })
    },
  },
  created () {
    this.isDefaultType()
  },
}
</script>

<style lang="scss" scope>
.gov-button {
  .icon {
    padding-right: 5px;
    font-size: inherit;
    line-height: inherit;
  }
  i {
    font-size: inherit;
    margin-right: 5px;
  }
}
</style>
