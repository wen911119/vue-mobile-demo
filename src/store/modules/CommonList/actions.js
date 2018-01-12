import { GET } from '@/interfaces/network'


const CommonListActions = {
    async fetchListData({ commit }, {url, format}){
        let ret = await GET(url)
        console.log(format)
        commit('LOAD',{
            list:format(ret)
        })
    }
}

export default CommonListActions