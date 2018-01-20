const CommonListMutations = {
    INIT_LIST(state, payload) {
        state.url = payload.url
        state.format = payload.format
    },
    LOAD_MORE(state, payload) {
        const { format } = state
        const { list, pageNum } = format(payload)
        state.list = state.list.concat(list)
        state.info.pageNum = pageNum
        state.info.currentPage++
    },
    APPLY_FILTERS(state, payload) {
        state.info.currentPage = 0
        state.filters = payload
    },
    UPDATE_STATUS(state, payload) {
        state.status = payload
    }
}

export default CommonListMutations