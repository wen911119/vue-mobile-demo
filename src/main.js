import Vue from 'vue'
import App from './App'
import store from './store'
// import vueRouterEnhancer from 'vue-router-enhancer'
import vueRouterEnhancer from '@/plugins/vue-router-enhancer.js'

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}
import router from './router'

Vue.use(vueRouterEnhancer(router, store))

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh-CN', // 默认中文
    messages: {
        'zh-CN': require('./i18n/lang/zh-CN.json'), // 中文语言包
        'en-US': require('./i18n/lang/en-US.json') // 英文语言包
    }
})
Vue.config.devTools = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    i18n,
    render: h => h(App)
})


