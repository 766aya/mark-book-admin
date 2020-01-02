export const mainSearchOption = [{
  label: "用户名",
  prop: "username"
}, {
  label: "邮箱",
  prop: "email"
}]

export const mainTableOption = {
  header: false,
  index: true,
  border: true,
  indexLabel: "序号",
  selection: false,
  stripe: true,
  menu: true,
  addRowBtn: false,
  editBtn: false,
  delBtn: false,
  menuAlign: "center",
  align: "center",
  labelWidth: 120,
  column: [
    {
      label: "用户名",
      prop: "username"
    }, {
      label: "邮箱地址",
      prop: "email"
    }, {
      label: "是否管理员",
      prop: "adminFlag",
      type: "select",
      dicData: [
        {
          label: "是",
          value: "1"
        }, {
          label: "否",
          value: "0"
        }
      ]
    }
  ]
}