import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import PagesRoute from "./pages/index"
import ViewsRoute from "./views/index"

NProgress.configure({ showSpinner: false })
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...PagesRoute,
    ...ViewsRoute
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  console.log(`%c router afterEach ====> from ${from.path} to ${to.path}`, 'color: #35495E')
  NProgress.done()
})

export default router
