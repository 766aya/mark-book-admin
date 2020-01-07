<template>
  <div class="z-upload">
    <el-upload
      :action="action"
      :headers="headers"
      :show-file-list="false"
      :on-preview="handlePreview"
      :on-success="handleSuccess">
      <img v-if="imageUrl" :src="imageUrl" class="image">
      <i v-else class="upload-icon el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl">
    </el-dialog>
  </div>
</template>

<script>
import store from "@/store"

export default {
  name: "ZUpload",
  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
    }
  },
  model: {
    prop: "imageUrl",
    event: "change"
  },
  props: {
    imageUrl: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      default: "/api/file/upload"
    },
    // text/picture/picture-card
    listType: {
      type: String,
      default: "picture-card"
    },
    headers: {
      type: Object,
      default: () => {
        return { "Authorization": store.getters.accessToken }
      },
    }
  },
  methods: {
    handlePreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess ({ data }) {
      this.$emit('change', data.url)
      this.$emit('success', data)
    }
  }
}
</script>

<style lang="scss">
.z-upload {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409EFF;
    }
  }
  .upload-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .image {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>