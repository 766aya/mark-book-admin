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

export const mainFormOption = {
  labelWidth: 120,
  menuBtn: false,
  column: [
    {
      label: "用户名",
      prop: "username",
      span: 12
    }, {
      label: "邮箱地址",
      prop: "email",
      span: 12
    }, {
      label: "密码",
      prop: "password",
      type: "password",
      span: 12
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
      ],
      span: 12
    }, {
      label: "头像",
      prop: "avatar",
      span: 12,
      formslot: true,
    }
  ]
}

export const userFormOption = {
  labelWidth: 120,
  menuBtn: false,
  column: [
    {
      label: "用户名",
      prop: "username"
    }, {
      label: "密码",
      prop: "password",
      type: "password",
      disabled: true
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
      ],
    }, {
      label: "证件类型",
      prop: "cardType",
      type: "select",
      dicData: [
        {
          label: "身份证",
          value: "1"
        }, {
          label: "护照",
          value: "2"
        }, {
          label: "军官证",
          value: "3"
        }
      ]
    }, {
      label: "证件号码",
      prop: "cardNumber",
    }, {
      label: "手机号",
      prop: "telphone",
    },
  ]
}