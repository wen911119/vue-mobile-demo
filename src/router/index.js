import Vue from 'vue'
import Router from 'vue-router'
const demoList = () => import('@/modules/Demo/pages/demo-list/app.vue')
const vuexDemo = () => import('@/modules/Demo/pages/vuex-demo/app.vue')
const iconfontDemo = () => import('@/modules/Demo/pages/iconfont-demo/app.vue')
const i18nDemo = () => import('@/modules/Demo/pages/i18n-demo/app.vue')
const EleIndex = () => import('@/modules/Index/pages/home/app.vue')
const GoodsList = () => import('@/modules/Goods/pages/list/app.vue')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/demo',
            name: 'demo-list',
            component: demoList
        },
        {
            path: '/demo/vuex',
            name: 'vuex',
            component: vuexDemo
        },
        {
            path: '/demo/iconfont',
            name: 'iconfont',
            component: iconfontDemo
        },
        {
            path: '/demo/i18n',
            name: 'i18n',
            component: i18nDemo
        },
        {
            path: '/ele/home',
            name: 'ele',
            component: EleIndex
        },
        {
            path: '/banggo/list',
            name: 'ele',
            component: GoodsList
        },
        { path: '*', redirect: '/demo' }
    ]
})
