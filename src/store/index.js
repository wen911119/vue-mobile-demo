import Vue from 'vue'
import Vuex from 'vuex'
import Demo from './modules/demo/index'
import CommonList from './modules/CommonList/index'
import Router from './modules/Router/index'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {

    },
    actions: {},
    getters: {},
    mutations: {},
    modules: {
        Demo,
        CommonList,
        Router
    },
    strict: debug
})