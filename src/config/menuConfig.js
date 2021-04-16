const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    public: true, // 公开的
  },
  {
    title: '手机日志',
    key: '/app-log',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: 'ANR',
        key: '/anr',
        icon: 'bars'
      },
      {
        title: 'APP内部异常',
        key: '/system-error',
        icon: 'tool'
      },
      {
        title: 'HTTP异常',
        key: '/http-error',
        icon: 'tool'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },
]

export default menuList