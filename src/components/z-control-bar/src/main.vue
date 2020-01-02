<template>
  <div class="z-control-bar">
    <titleBar :title="title" :total="total"></titleBar>
    <buttonBar>
      <slot></slot>
    </buttonBar>
  </div>
</template>

<script>
import titleBar from "../components/titleBar"
import buttonBar from "../components/buttonBar"

export default {
  name: "ZControlBar",
  components: {
    titleBar,
    buttonBar
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    total: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<style lang="scss">
.z-control-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
  > div {
    display: flex;
    flex: 1;
    align-items: center;
    &.z-button-bar {
      justify-content: flex-end;
    }
  }
}
</style>
