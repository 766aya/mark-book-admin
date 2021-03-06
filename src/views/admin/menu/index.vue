<template>
  <div id="menu-view">
    <zSearchBar
      v-model="listQuery"
      :option="mainSearchOption"
      @search="handleFilter"
    />
    <zControlBar title="菜单管理列表" :total="pagination.total">
      <zButton type="create" @click="handleCreate"></zButton>
    </zControlBar>
    <avue-crud
      ref="menuTable"
      :option="mainTableOption"
      :data="mainTableData"
      :table-loading="tableLoading">
      <template slot="icon" slot-scope="scope">
        <span :class="scope.row.icon"></span>
      </template>
      <template slot="menu" slot-scope="scope">
        <z-button type="textcreate" @click="handleCreateChildren(scope.row)"></z-button>
        <z-button type="textview" @click="handleDetail(scope.row)"></z-button>
        <z-button type="textupdate" @click="handleUpdate(scope.row)"></z-button>
        <z-button type="textdelete" @click="handleDelete(scope.row)"></z-button>
      </template>
    </avue-crud>
    <mainDialog ref="mainDialog" @create="handleCreateSubmit" @update="handleUpdateSubmit"></mainDialog>
  </div>
</template>

<script>
import mixins from "@/mixins/index"
import {
  mainSearchOption,
  mainTableOption,
} from "./const/index"
import {
  getMenuTreeAll,
  deleteMenu,
  createMenu,
  updateMenu,
} from "@/api/menu"

import mainDialog from "./mainDialog"

export default {
  name: "menu",
  mixins: [mixins],
  components: {
    mainDialog
  },
  data () {
    return {
      mainSearchOption,
      mainTableOption,
      mainTableData: [],
    }
  },
  methods: {
    getList () {
      this.tableLoading = true
      getMenuTreeAll(this.listQuery).then(({ data }) => {
        this.mainTableData = data.data
        this.pagination.total = data.data.length
        this.tableLoading = false
      })
    },
    handleCreate () {
      this.$refs['mainDialog'].open({
        pid: 0
      }, 'create')
    },
    handleDetail (rowData) {
      this.$refs['mainDialog'].open(rowData, 'detail')
    },
    handleUpdate (rowData) {
      this.$refs['mainDialog'].open(rowData, 'update')
    },
    handleCreateChildren (rowData) {
      this.$refs['mainDialog'].open({
        pid: rowData.id
      }, 'create')
    },
    handleDelete (rowData) {
      this.$confirm(`是否确认删除菜单：${rowData.name}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteMenu(rowData.id)
      }).then(() => {
        this.$message.success("删除成功")
        this.handleFilter()
      }).catch(() => {})
    },
    handleCreateSubmit (formData) {
      createMenu(formData).then(() => {
        return this.$store.dispatch('GetUserMenuList')
      }).then(() => {
        this.$message.success("新增菜单成功")
        this.$refs['mainDialog'].close()
        this.handleFilter()
      })
    },
    handleUpdateSubmit (formData) {
      updateMenu(formData).then(() => {
        return this.$store.dispatch('GetUserMenuList')
      }).then(() => {
        this.$message.success("更新菜单成功")
        this.$refs['mainDialog'].close()
        this.handleFilter()
      })
    },
  }
}
</script>
