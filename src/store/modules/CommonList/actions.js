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
    async applyFilters({ commit, state, getters }, filters) {
        commit('APPLY_FILTERS', filters)
        const { url } = state
        const { params } = getters
        commit('UPDATE_STATUS', 'LOADING')
        try {
            let ret = await GET(url, params)
            commit('REFRESH_LIST', ret)
            commit('UPDATE_STATUS', 'DONE')
        } catch (e) {
            console.log(e)
            commit('UPDATE_STATUS', 'ERROR')
        }
    }
}

export default CommonListActions