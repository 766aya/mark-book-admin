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
      }
    ]
  }
]