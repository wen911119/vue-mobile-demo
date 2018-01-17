const CommonListMutations = {
    LOAD_MORE(state, payload) {
        state.info.currentPage++
        state.list = state.list.concat(payload.list)
        state.info.pageNum = payload.pageNum
    },
    REFRESH(state, payload) {
        state.info.currentPage = 1
        state.list = payload.list
        state.info.pageNum = payload.pageNum
    }
}

export default CommonListMutations