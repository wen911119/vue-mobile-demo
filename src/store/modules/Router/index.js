
const Router = {
    namespaced: true,
    state() {
        return {
            routerStack: []
        }
    },
    actions: {
        push({ commit }, { url }) {
            commit('ROUTER_PUSH', url)
        }
    },
    mutations: {
        ROUTER_PUSH(state, payload) {
            state.routerStack.push(payload)
        }
    }
}

export default Router