const CommonListMutations = {
    LOAD_MORE(state, payload) {
        state.info.currentPage++
        state.list = state.list.concat(payload.list)
    }
}

export default CommonListMutations