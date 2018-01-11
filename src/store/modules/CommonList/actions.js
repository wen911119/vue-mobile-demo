import { GET } from '@/interfaces/network'


const CommonListActions = {
    async fetchListData({ commit }, url){
        let ret = await GET(url)
        console.log(ret)
        commit('LOAD',{
            list:ret.data.items
        })
    }
}

export default CommonListActions