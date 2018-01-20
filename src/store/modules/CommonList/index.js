import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const CommonList = {
    namespaced: true,
    state() {
        return {
            url: '',
            format: data => data,
            filters: {},
            list: [],
            info: {
                pageNum: 0,
                pageSize: 10,
                currentPage: 0
            },
            status: 'DONE'
        }
    },
    actions,
    getters,
    mutations,
    modules: {

    }
}

export default CommonList