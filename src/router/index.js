import Vue from 'vue'
import Router from 'vue-router'
const demoList = () => import('@/modules/Demo/pages/demo-list/app.vue')
const vuexDemo = () => import('@/modules/Demo/pages/vuex-demo/app.vue')
const iconfontDemo = () => import('@/modules/Demo/pages/iconfont-demo/app.vue')
const i18nDemo = () => import('@/modules/Demo/pages/i18n-demo/app.vue')
const EleIndex = () => import('@/modules/Index/pages/home/app.vue')
const GoodsDetail = () => import('@/modules/Goods/pages/detail/app.vue')
Vue.use(Router)

export default new Router({
    mode:'hash',
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
            path: '/banggo/goods',
            name: 'goodsList',
            component: EleIndex
        },
        {
            path: '/banggo/goods/:id',
            name: 'goodsDetail',
            component: GoodsDetail
        },
        { path: '*', redirect: '/demo' }
    ]
})
