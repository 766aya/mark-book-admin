import iconList from "./iconList"

export const mainSearchOption = [{
  label: "节点ID",
  prop: "id"
}, {
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
}, ]

export const mainTableOption = {
  header: false,
  index: true,
  border: false,
  indexLabel: "序号",
  selection: true,
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
    prop: "parentId",
    disabled: true,
    hide: true,
  }, {
    label: "名称",
    prop: "name"
  }, {
    label: "ID",
    prop: "id",
  }, {
    label: "类型",
    prop: "type",
    type: "select",
    dicData: [{
        label: "菜单",
        value: "0"
      },
      {
        label: "按钮",
        value: "1"
      },
    ],
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
  }, {
    label: "图标",
    prop: "icon",
    type: "icon-select",
    iconList: iconList,
    slot: true,
  }, {
    label: "排序",
    prop: "sort",
    hide: true,
    valueDefault: "0"
  }, {
    label: "前端组件",
    prop: "component",
    hide: true,
  }, {
    label: "前端地址",
    prop: "path",
    hide: true,
  }, {
    label: "权限标识",
    prop: "permission",
    display: false,
  }]
}

export const mainFormOption = {
  labelWidth: 120,
  menuBtn: false,
  column: [{
    label: "父级ID",
    prop: "parentId",
    disabled: true,
    hide: true,
  }, {
    label: "名称",
    prop: "name",
    rules: [{
      required: true,
      message: "名称不能为空",
      trigger: 'blur'
    }]
  }, {
    label: "ID",
    prop: "menuId",
    rules: [{
      required: true,
      message: "ID不能为空",
      trigger: 'blur'
    }]
  }, {
    label: "类型",
    prop: "type",
    type: "select",
    dicData: [{
        label: "菜单",
        value: "0"
      },
      {
        label: "按钮",
        value: "1"
      },
    ],
    rules: [{
      required: true,
      message: "类型不能为空",
      trigger: 'change'
    }]
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
    ],
  }, {
    label: "图标",
    prop: "icon",
    type: "icon-select",
    iconList: iconList,
    slot: true,
  }, {
    label: "排序",
    prop: "sort",
    hide: true,
    valueDefault: "0"
  }, {
    label: "前端组件",
    prop: "component",
    hide: true,
  }, {
    label: "前端地址",
    prop: "path",
    hide: true,
  }, {
    label: "权限标识",
    prop: "permission",
    display: false,
    rules: [{
      required: true,
      message: "权限标识不能为空",
      trigger: 'blur'
    }]
  }, {
    label: "首页展示",
    prop: "isShow",
    type: "select",
    valueDefault: "0",
    dicData: [{
        label: "是",
        value: "1"
      },
      {
        label: "否",
        value: "0"
      }
    ]
  }, {
    label: "别名",
    prop: "alias"
  }, {
    label: "图标",
    prop: "icon2",
    type: "input",
    // iconList: iconList,
    // slot: true,
  }, {
    label: "描述",
    prop: "description",
    type: "textarea",
    span: 24
  }]
}
