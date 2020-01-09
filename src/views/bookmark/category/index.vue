<template>
  <div class="bookmark-category-view">
    <ZSearchBar
      v-model="listQuery"
      :option="mainSearchOption"
      @search="handleFilter">
    </ZSearchBar>
    <zControlBar title="分类管理列表" :total="pagination.total">
      <zButton type="create" @click="handleCreate"></zButton>
    </zControlBar>
    <avue-crud
      ref="menuTable"
      :option="mainTableOption"
      :page="pagination"
      :data="mainTableData"
      :table-loading="tableLoading">
      <template slot="menu" slot-scope="scope">
        <z-button type="textview" @click="handleDetail(scope.row)"></z-button>
        <z-button type="textupdate" @click="handleUpdate(scope.row)"></z-button>
        <z-button type="textdelete" @click="handleDelete(scope.row)"></z-button>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog" @create="handleCreateSubmit" @update="handleUpdateSubmit"></mainDialog>
  </div>
</template>

<script>
import mainDialog from "./mainDialog"
import mixins from "@/mixins/index"
import {
  mainSearchOption,
  mainTableOption,
} from "./const"

export default {
  name: "BookmarkCategory",
  mixins: [mixins],
  components: {
    mainDialog
  },
  data () {
    return {
      mainSearchOption,
      mainTableOption,
      mainTableData: []
    }
  },
  methods: {
    getList () {

    },
    handleCreate () {

    },
    handleDetail () {

    },
    handleUpdate () {

    },
    handleDelete () {

    },
    handleCreateSubmit () {

    },
    handleUpdateSubmit () {

    },
  }
}
</script>

<style>

</style>