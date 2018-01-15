import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const CommonList = {
    namespaced: true,
    state() {
        return {
            list: [],
            info: {
                pageNum: 999,
                pageSize: 10,
                currentPage: 0
            }
        }
    },
    actions,
    getters,
    mutations,
    modules: {

    }
}

export default CommonList