<template>
  <div id="menu">
    <zSearchBar
      v-model="listQuery"
      :option="mainSearchOption"
      @search="handleFilter"
    />
    <zCard>
      <zControlBar title="菜单管理列表" :total="pagination.total">
        <zButton type="create" permission="sys_menu_add" @click="handleCreate"></zButton>
      </zControlBar>
      <avue-crud
        ref="menuTable"
        :option="mainTableOption"
        :data="mainTableData"
        :table-loading="tableLoading"
        :page="pagination"
        @size-change="sizeChange"
        @current-change="currentChange">
        <template slot="icon" slot-scope="scope">
          <span :class="scope.row.icon"></span>
        </template>
        <template slot="icon2" slot-scope="scope">
          <span :class="scope.row.icon"></span>
        </template>
        <template slot="menu" slot-scope="scope">
          <z-button type="textcreate" permission="sys_menu_add" @click="handleCreateChildren(scope.row)"></z-button>
          <z-button type="textview" @click="handleDetail(scope.row)"></z-button>
          <z-button type="textupdate" permission="sys_menu_edit" @click="handleUpdate(scope.row)"></z-button>
          <z-button type="textdelete" permission="sys_menu_del" @click="handleDelete(scope.row)"></z-button>
        </template>
      </avue-crud>
    </zCard>
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
        parentId: -1
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
        parentId: rowData.id
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
        this.$message.success("新增菜单成功")
        this.$refs['mainDialog'].close()
        this.handleFilter()
      })
    },
    handleUpdateSubmit (formData) {
      updateMenu(formData).then(() => {
        this.$message.success("更新菜单成功")
        this.$refs['mainDialog'].close()
        this.handleFilter()
      })
    },
  }
}
</script>
