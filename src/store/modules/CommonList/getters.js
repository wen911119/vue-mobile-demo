const CommonListGetters = {
    params: state => {
        return Object.assign({
            pageSize: state.info.pageSize,
            currentPage: state.info.currentPage + 1
        }, state.filters)
    }
}

export default CommonListGetters