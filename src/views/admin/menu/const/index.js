export const mainSearchOption = [{
  label: "菜单名称",
  prop: "name"
}, {
  label: "是否缓存",
  prop: "keepAlive",
  type: "select",
  dicData: [{
      label: "缓存",
      value: "0"
    },
    {
      label: "无缓存",
      value: "1"
    },
  ]
}]

export const mainTableOption = {
  header: false,
  index: true,
  border: true,
  indexLabel: "序号",
  selection: false,
  stripe: true,
  page: true,
  menu: true,
  addRowBtn: false,
  editBtn: false,
  delBtn: false,
  menuAlign: "center",
  align: "center",
  labelWidth: 120,
  tree: true,
  column: [{
    label: "父级ID",
    prop: "pid",
    disabled: true,
    hide: true,
  }, {
    label: "菜单名称",
    prop: "label"
  }, {
    label: "路由名称",
    prop: "name"
  }, {
    label: "类型",
    prop: "type",
    type: "select",
    dicData: [{
      label: "菜单",
      value: "1"
    }, {
      label: "按钮",
      value: "2"
    }],
  }, {
    label: "图标",
    prop: "icon",
    slot: true
  }, {
    label: "排序",
    prop: "sort",
    hide: true,
    valueDefault: "0"
  }, {
    label: "前端组件",
    prop: "component",
    align: "left",
  }, {
    label: "前端地址",
    prop: "path",
    align: "left",
  }]
}

export const mainFormOption = {
  labelWidth: 120,
  menuBtn: false,
  column: [{
    label: "菜单名称",
    prop: "label",
    rules: [{
      required: true,
      message: "类型不能为空",
      trigger: 'blur'
    }]
  }, {
    label: "路由名称",
    prop: "name",
  }, {
    label: "类型",
    prop: "type",
    type: "select",
    valueDefault: "1",
    dicData: [{
      label: "菜单",
      value: "1"
    }],
    rules: [{
      required: true,
      message: "类型不能为空",
      trigger: 'change'
    }]
  }, {
    label: "图标",
    prop: "icon",
  },{
    label: "页面路由",
    prop: "path",
  }, {
    label: "组件路径",
    prop: "component",
  }]
}
