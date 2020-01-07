<template>
  <div>
    <ZUpload v-model="url" @success="handleSuccess"></ZUpload>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      url: ""
    };
  },
  methods: {
    handleSuccess (file) {
      console.log(file)
    }
  }
}
</script>