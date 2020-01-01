import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import PagesRoute from "./pages/index"
import ViewsRoute from "./views/index"
import openUrl from "@/const/openUrl"
import Store from "@/store"

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
  if (openUrl.includes(to.path) || Store.getters.accessToken) {
    next()
  } else {
    next({path: '/signin'})
  }
})

router.afterEach((to, from) => {
  console.log(`%c router afterEach ====> from ${from.path} to ${to.path}`, 'color: #35495E')
  if (to.meta) {
    let breadcrumbs = to.meta.breadcrumbs || []
    let defaultTitle = '书签/内容收藏管理系统'
    if (breadcrumbs.length !== 0) {
      document.title = `${breadcrumbs[breadcrumbs.length - 1].title}-${defaultTitle}`
    }
  }
  NProgress.done()
})

export default router
