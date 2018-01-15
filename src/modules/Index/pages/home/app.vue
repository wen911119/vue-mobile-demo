<template>
    <div class="app-page">
        <base-list :list="list" :url="url" :filters="params" :format="format">
            <home-list-item slot="item" slot-scope="props" :item="props.item"></home-list-item>
        </base-list>
    </div>
</template>
<script>
    import BaseList from '@/components/BaseList.vue'
    import HomeListItem from './components/HomeListItem.vue'
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {
                url: '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml',
                params: {
                    word: ''
                }
            }
        },
        computed: {
            ...mapState({
                list: state => state.CommonList.list
            })
        },
        created() {
            // const url = '/restapi/shopping/v3/restaurants'
            const url = '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml'
            // const params = {
            //     'latitude': 31.19161900000001,
            //     'longitude': 121.5011301,
            //     'offset': 8,
            //     'limit': 8,
            //     'extras[]': 'activities',
            //     'extras[]': 'tags',
            //     'extra_filters': 'home',
            //     'rank_id': '046aa9ad33c74af7b00876396c70b15d',
            //     'terminal': 'h5'
            // }
            // const params = {
            //     word: '',
            //     pageSize: 10

            // }
            // const format = ret => ret.data.data.list
            // this.fetchListData({ url, params, format })
        },
        methods: {
            ...mapActions({
                fetchListData: "CommonList/fetchListData"
            }),
            format: ret => ({ 
                list: ret.data.data.list,
                pageNum:ret.data.data.fpage.pageNum
             })
        },
        components: {
            BaseList,
            HomeListItem
        }
    }
</script>
<style scoped>
</style>