import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home'
const Editor = () => import(/* webpackChunkName: "editor" */ 'views/editor')
const Wangeditor = () => import(/* webpackChunkName: "wangeditor" */ 'views/editor/wangeditor')
const Simditor = () => import(/* webpackChunkName: "simditor" */ 'views/editor/simditor')
const Ckeditor5BuildClassic = () => import(/* webpackChunkName: "ckeditor5BuildClassic" */ 'views/editor/ckeditor5-build-classic')
const FlowChart = () => import(/* webpackChunkName: "flowChart" */ 'views/flowChart')
const Jsplump = () => import(/* webpackChunkName: "jsplump" */ 'views/flowChart/jsplump')

Vue.use(VueRouter)

export const routerMap = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor,
    children: [
      {
        path: '/',
        redirect: 'wangeditor',
      },
      {
        path: 'wangeditor',
        name: 'wangeditor',
        component: Wangeditor,
      },
      {
        path: 'simditor',
        name: 'simditor',
        component: Simditor,
      },
      {
        path: 'ckeditor5BuildClassic',
        name: 'ckeditor5BuildClassic',
        component: Ckeditor5BuildClassic,
      },
    ]
  },
  {
    path: '/flowChart',
    name: 'flowChart',
    component: FlowChart,
    children: [
      {
        path: '/',
        redirect: 'jsplump',
      },
      {
        path: 'jsplump',
        name: 'jsplump',
        component: Jsplump,
      },
    ]
  }
]

export default new VueRouter({
  // mode: 'history', // 后端支持可开
  routes: routerMap
})
