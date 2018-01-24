export default function (router, store) {
    window.addEventListener('popstate', function (e) {
        // console.log(e, 22222)
        store.dispatch('VueRouterEnhancer/back')
    }, false)
    
    store.registerModule('VueRouterEnhancer', {
        namespaced: true,
        state() {
            return {
                routerStack: [],
                current: {
                    index: -1,
                    path: '',
                    enterType: ''
                }
            }
        },
        actions: {
            push({ commit }, { url }) {
                commit('ROUTER_PUSH', url)
            },
            back({ commit }) {
                commit('ROUTER_BACK')
            },
            saveMeta({ commit }, { meta = {} }) {
                commit('SAVE_META', meta)
            }
        },
        mutations: {
            ROUTER_PUSH(state, payload) {
                if (-1 < state.current.index && state.current.index < (state.routerStack.length - 1)) {
                    state.routerStack = state.routerStack.slice(0, state.current.index + 1)
                }
                state.routerStack.push({
                    path: payload,
                    meta: {}
                })
                state.current.path = payload
                state.current.index = state.routerStack.length - 1
                state.current.enterType = 'push'
            },
            ROUTER_BACK(state) {
                state.current.index = state.current.index - 1
                state.current.path = state.routerStack[state.current.index].path
                state.current.enterType = 'back'
            },
            SAVE_META(state, payload) {
                let oldMeta = state.routerStack[state.current.index].meta
                state.routerStack[state.current.index].meta = Object.assign(oldMeta, payload)
            }
        }
    })
    var firstPath = ''
    if (router.mode === 'hash') {
        firstPath = location.hash.replace('#', '')
    } else if (router.mode === 'history') {
        firstPath = location.pathname
    }
    store.dispatch('VueRouterEnhancer/push', { url: firstPath })
    var oldPush = router.push.bind(router)
    router.push = (p, onComplete, onAbort) => {
        var onCompleteWrap = function (routerInfo) {
            store.dispatch('VueRouterEnhancer/push', { url: routerInfo.fullPath })
            if (onComplete) {
                onComplete(routerInfo)
            }
        }
        oldPush(p, onCompleteWrap, onAbort)
    }
    return {
        install(Vue) {
            Vue.mixin({
                created: function () {
                    if (store.state.VueRouterEnhancer.current.enterType) {
                        this.enterType = store.state.VueRouterEnhancer.current.enterType
                    }
                }
            })
        }
    }
}