const typeDict = [
  { label: "普通机动车驾驶员培训", value: "1" },
  { label: "道路运输驾驶员从业资格培训", value: "2" },
  { label: "其他培训", value: "3" },
]

const trainTypeDict = [
  { label: "A1", value: "A1" },
  { label: "A2", value: "A2" },
  { label: "A3", value: "A3" },
  { label: "B1", value: "B1" },
  { label: "C1", value: "C1" },
  { label: "C2", value: "C2" },
  { label: "C3", value: "C3" },
  { label: "C4", value: "C4" },
  { label: "D", value: "D" },
  { label: "E", value: "E" },
  { label: "F", value: "F" },
  { label: "M", value: "M" },
  { label: "N", value: "N" },
  { label: "道路旅客运输", value: "T1" },
  { label: "道路货物运输", value: "T2" },
  { label: "道路危险货物运输", value: "T3" },
]
const status = [
  { label: "待付款", value: "1" },
  { label: "待体检", value: "2" },
  { label: "学习中", value: "3" },
  { label: "已结业", value: "4" },
]

export const mainSearchOption = [
  {
    label: "学员姓名",
    prop: "name"
  }, {
    label: "身份证号",
    prop: "cardNumber"
  }, {
    label: "入学时间",
    prop: "admissionTime",
    type: "date",
    valueFormat: "yyyy-MM-dd"
  }, {
    label: "状态",
    prop: "status",
    type: "select",
    dicData: [
      { label: "待付款", value: "1" },
      { label: "待体检", value: "2" },
      { label: "学习中", value: "3" },
      { label: "已结业", value: "4" },
    ]
  }
]

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
      label: "学员姓名",
      prop: "name"
    }, {
      label: "身份证号",
      prop: "cardNumber"
    }, {
      label: "联系方式",
      prop: "contactNumber"
    }, {
      label: "培训类别",
      prop: "type",
      type: "select",
      dicData: typeDict,
    }, {
      label: "申请类别/车型",
      prop: "trainType",
      type: "select",
      dicData: trainTypeDict,
    }, {
      label: "入学时间",
      prop: "admissionTime",
      type: "date"
    }, {
      label: "状态",
      prop: "status",
      type: "select",
      dicData: status,
    }
  ]
}