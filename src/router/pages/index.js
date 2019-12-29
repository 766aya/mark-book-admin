export default [
  {
    path: '/signin',
    name: "signin",
    component: () => import('@/page/signin')
  }, {
    path: '/',
    name: '首页',
    redirect: '/index'
  }
]