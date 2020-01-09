import HomeLayout from "@/page/home/index"

export default [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/index',
        name: "index",
        component: () => import('@/page/main'),
        meta: {
          breadcrumbs: [
            {
              title: "首页",
              path: '/'
            }
          ]
        }
      }, {
        path: '/user/info',
        name: "userinfo",
        component: () => import('@/views/admin/user/info'),
        meta: {
          title: "用户信息"
        }
      }
    ]
  }
]