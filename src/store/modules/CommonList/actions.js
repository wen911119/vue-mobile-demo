import { GET } from '@/interfaces/network'


const CommonListActions = {
    async fetchListData({ commit }, {url, params, format}){
        let ret = await GET(url, params)
        commit('LOAD',{
            list:format(ret)
        })
    }
}

export default CommonListActions