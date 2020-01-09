<template>
  <div class="dsms-student-view">
    <ZSearchBar
      v-model="listQuery"
      :option="mainSearchOption"
      @search="handleFilter">
    </ZSearchBar>
    <zControlBar title="学员管理列表" :total="pagination.total">
      <zButton type="create" @click="handleCreate"></zButton>
    </zControlBar>
    <avue-crud
      ref="menuTable"
      :option="mainTableOption"
      :data="mainTableData"
      :page="pagination"
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
import {
  mainSearchOption,
  mainTableOption,
} from "./const/index"
import mixins from "@/mixins/index"
import {
  getStudentData,
  createStudent,
  updateStudent,
  deleteStudentById
} from "@/api/dsms/student/index"
import mainDialog from "./mainDialog"

export default {
  name: "DsmsStudentView",
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
      getStudentData(this.listQuery).then(({ data }) => {
        this.mainTableData = data.data.records
        this.pagination.total = data.data.total
        this.tableLoading = false
      })
    },
    handleCreate () {
      this.$refs['mainDialog'].open({}, 'create')
    },
    handleDetail (rowData) {
      this.$refs['mainDialog'].open(rowData, 'detail')
    },
    handleUpdate (rowData) {
      this.$refs['mainDialog'].open(rowData, 'update')
    },
    handleDelete (rowData) {
      this.$confirm(`是否确认删除学员：${rowData.name}`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return deleteStudentById(rowData.id)
      }).then(() => {
        this.$message.success("删除成功")
        this.handleFilter()
      }).catch(() => {})
    },
    handleCreateSubmit (formData, done) {
      createStudent(formData).then(() => {
        this.$message.success('新增学员成功')
        this.handleFilter()
        this.$refs['mainDialog'].close()
        done()
      }).catch(() => {
        done()
      })
    },
    handleUpdateSubmit (formData, done) {
      updateStudent(formData).then(() => {
        this.$message.success('编辑学员成功')
        this.handleFilter()
        this.$refs['mainDialog'].close()
        done()
      }).catch(() => {
        done()
      })
    }
  }
}
</script>

<style>

</style>