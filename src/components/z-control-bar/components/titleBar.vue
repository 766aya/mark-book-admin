<template>
  <div class="z-title-bar">
    <span class="title">{{ title }}</span>
    <span class="total" v-if="total">(共 <span class="total-number">{{ total }}</span> 条)</span>
  </div>
</template>

<script>
export default {
  name: "titleBar",
  props: {
    title: {
      default: "",
      type: String
    },
    total: {
      default: 0,
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss">
.z-title-bar {
  text-align: left;
  .title {
    font-size: 18px;
    color: #333333;
    font-weight: bold;
  }
  .total {
    margin-left: 10px;
    color: #666666;
    font-size: 14px;
    .total-number {
      color: #398DEB;
    }
  }
}
</style>
