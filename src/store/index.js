import Vue from 'vue'
import Vuex from 'vuex'
import Demo from './modules/demo/index'
import CommonList from './modules/CommonList/index'

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
        CommonList
    },
    strict: debug
})