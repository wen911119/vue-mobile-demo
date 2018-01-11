import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const CommonList = {
    namespaced: true,
    state() {
        return {
            list: []
        }
    },
    actions,
    getters,
    mutations,
    modules: {

    }
}

export default CommonList