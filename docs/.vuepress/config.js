const path = require('path')
module.exports = {
  base:'/Tutu-wheel/',
  title: 'Tutu-wheel UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: 'github', link: 'https://github.com/weite122/Tutu-wheel'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
          '/components/pager',
          '/components/cascader',
          '/components/nav',
          '/components/datepicker',
          '/components/sticky',
          '/components/scroll',
          // '/components/table',

        ]
      }
    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}