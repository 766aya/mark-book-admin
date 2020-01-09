const typeDict = [
  { label: "普通机动车驾驶员培训", value: "1" },
  { label: "道路运输驾驶员从业资格培训", value: "2" },
  { label: "其他培训", value: "3" },
]

const sexDict = [
  {label: "男", value: "1"},
  {label: "女", value: "2"},
]

export default {
  data () {
    return {
      trainDict: [],
      trainTypeDisplay: true,
      driverLicenseTypeDict: [
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
      ],
      trainTypeDict: [
        { label: "道路旅客运输", value: "T1" },
        { label: "道路货物运输", value: "T2" },
        { label: "道路危险货物运输", value: "T3" },
      ]
    }
  },
  computed: {
    mainFormOption () {
      return {
        labelWidth: 120,
        menuBtn: false,
        column: [
          {
            label: "学员姓名",
            prop: "name",
            rules: [
              { required: true, message: "不能为空", trigger: "blur" }
            ],
            span: 12,
          }, {
            label: "性别",
            prop: "sex",
            type: "select",
            dicData: sexDict,
            rules: [
              { required: true, message: "不能为空", trigger: "change" }
            ],
            span: 12,
          }, {
            label: "身份证号",
            prop: "cardNumber",
            rules: [
              { required: true, message: "不能为空", trigger: "blur" }
            ],
            span: 12,
            blur: () => {
              
            }
          }, {
            label: "生日",
            prop: "birthday",
            type: "date",
            valueFormat: "yyyy-MM-dd",
            span: 12,
          }, {
            label: "联系方式",
            prop: "contactNumber",
            span: 12,
            rules: [
              { required: true, message: "不能为空", trigger: "blur" }
            ],
          }, {
            label: "原准驾车型",
            prop: "oldDriverLicense",
            type: "select",
            dicData: this.driverLicenseTypeDict,
            span: 12,
          }, {
            label: "培训车型或类别",
            prop: "type",
            type: "select",
            dicData: typeDict,
            span: 12,
            change: ({ value }) => {
              switch (value) {
                case "1":
                  this.trainDict = this.driverLicenseTypeDict
                  this.trainTypeDisplay = true
                  break;
                case "2":
                  this.trainDict = this.trainTypeDict
                  this.trainTypeDisplay = true
                  break;
                default:
                  this.trainDict = []
                  this.trainTypeDisplay = false
                  break;
              }
            }
          }, {
            label: "申请培训类型",
            prop: "trainType",
            type: "select",
            dicData: this.trainDict,
            span: 12,
            display: this.trainTypeDisplay
          }, {
            label: "其他培训",
            prop: "otherTrain",
            span: 12,
            display: !this.trainTypeDisplay,
          }, {
            label: "住址",
            prop: "address",
            type: "textarea",
            span: 24,
          },
        ]
      }
    }
  }
}