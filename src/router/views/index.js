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
        path: '/admin/menu',
        name: "menu",
        component: () => import('@/views/admin/menu/index'),
        meta: {
          breadcrumbs: [
            {
              title: "首页",
              path: '/'
            }, {
              title: "菜单管理",
              path: '/admin/menu'
            }
          ]
        }
      }, {
        path: '/admin/user',
        name: "user",
        component: () => import('@/views/admin/user/index'),
        meta: {
          title: '用户管理'
        }
      }
    ]
  }
]