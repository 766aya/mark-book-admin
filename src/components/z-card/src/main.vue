<template>
  <div class="z-card" :class="TYPE" :style="STYLE">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZCard",
  props: {
    type: {
      default: "default",
      type: String
    },
    backgroundColor: {
      default: "",
      type: String
    },
    borderColor: {
      default: "",
      type: String
    }
  },
  computed: {
    TYPE () {
      switch (this.type) {
        case "primary":
          return this.type
        default:
          return 'default'
      }
    },
    STYLE () {
      let obj = {}
      this.backgroundColor ? obj.backgroundColor = this.backgroundColor : ''
      this.borderColor ? obj.borderColor = this.borderColor : ''
      return obj
    }
  }
}
</script>

<style lang="scss">
.z-card {
  margin: 20px 20px 0px 20px;
  background: #FFFFFF;
  width: calc(100% - 80px);
  border: 1px solid;
  padding: 20px;
  border-radius: 4px;
  &.primary {
    background-color: #F0F8FF;
    border-color: #A3D0FD;
  }
  &.default {
    border-color: #D8DBE3;
    background-color: #FFFFFF;
  }
}
</style>
