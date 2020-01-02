import Vue from 'vue'
import App from './App.vue'
import Axios from "@/router/axios"
import Avue from '@smallwei/avue'
import VueAxios from "vue-axios"
import ElementUI from "element-ui"
import router from '@/router'
import store from '@/store'
import ZUI from "@/components/componentRegister"
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/common.scss'

Vue.config.productionTip = false

Vue.use(VueAxios, Axios)
Vue.use(ElementUI)
Vue.use(Avue)
Vue.use(ZUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
