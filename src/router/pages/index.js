export default [
  {
    path: '/signin',
    name: "signin",
    component: () => import('@/page/signin')
  }, {
    path: '/',
    redirect: '/index'
  }
]