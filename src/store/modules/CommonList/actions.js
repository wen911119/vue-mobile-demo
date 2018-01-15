import { GET } from '@/interfaces/network'


const CommonListActions = {
    async fetchListData({ commit }, { url, params, format, type }) {
        let ret = await GET(url, params)
        const { list, pageNum } = format(ret)
        if (type === 'load-more') {
            commit('LOAD_MORE', {
                list,
                pageNum
            })
        }
    }
}

export default CommonListActions