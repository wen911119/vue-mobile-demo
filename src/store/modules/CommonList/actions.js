import { GET } from '@/interfaces/network'


const CommonListActions = {
    initList({ commit }, { url, format }) {
        commit('INIT_LIST', {
            url,
            format
        })
    },
    async loadMore({ commit, state, getters }) {
        const { url } = state
        const { params } = getters
        commit('UPDATE_STATUS', 'LOADING')
        try {
            let ret = await GET(url, params)
            commit('LOAD_MORE', ret)
            commit('UPDATE_STATUS', 'DONE')
        } catch (e) {
            commit('UPDATE_STATUS', 'ERROR')
        }

    },
    applyFilters({ commit }, filters) {
        console.log(filters, 3333333)
        commit('APPLY_FILTERS', filters)
    }
}

export default CommonListActions