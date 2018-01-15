<template>
    <ul class="base-list" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
        <li v-for="item in list">
            <slot name="item" :item="item">
                <!-- 这里写入备用内容 -->
            </slot>
        </li>
    </ul>
</template>
<script>
    import InfiniteScroll from '@/directives/infiniteScroll.js'
    import { mapState, mapActions } from 'vuex'
    export default {
        props: {
            list: {
                type: Array,
                default: []
            },
            url: {
                type: String,
                required: true
            },
            filters: {
                type: Object,
                required: false
            },
            format: {
                type: Function,
                required: false
            }
        },
        computed: {
            _filters() {
                return Object.assign({
                    pageSize: this.pageSize,
                    currentPage: this.currentPage + 1
                }, this.filters)
            },
            ...mapState({
                currentPage: state => state.CommonList.info.currentPage,
                pageSize: state => state.CommonList.info.pageSize,
            })
        },
        data() {
            return {

            }
        },
        methods: {
            ...mapActions({
                fetchListData: "CommonList/fetchListData"
            }),
            loadMore() {
                this.fetchListData({ url: this.url, params: this._filters, format: this.format, type: 'load-more' })
                console.log('load-more')
            }
        },
        directives: {
            InfiniteScroll
        }
    }
</script>
<style scoped>
</style>