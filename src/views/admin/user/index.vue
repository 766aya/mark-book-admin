<template>
  <div id="user-view">
    <ZSearchBar
      v-model="listQuery"
      :option="mainSearchOption"
      @search="handleFilter">
    </ZSearchBar>
  </div>
</template>

<script>
export default {
  name: "UserView"
}
</script>