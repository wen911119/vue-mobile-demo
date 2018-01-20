<template>
    <app-page @pullingUp="pullingUp" :status="status">
        <div slot="page-top">
            <magic-header :title="'列表页'" @rightClick="toggleMenu=!toggleMenu">
                <span slot="header-right" class="iconfont">{{toggleMenu?'&#xe629;':'&#xe628;'}}</span>
            </magic-header>
        </div>
        <ul slot="page-content">
            <li v-for="item in list" class="list-item">
                <goods-list-item :item="item"></goods-list-item>
            </li>
        </ul>
    </app-page>
</template>

<script>
    import AppPage from '@/components/BasePage.vue'
    import MagicHeader from '@/components/MagicHeader.vue'
    import GoodsListItem from './components/GoodsListItem.vue'

    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            return {
                toggleMenu: false
            }
        },
        computed: {
            ...mapState({
                list: state => state.CommonList.list,
                status: state => state.CommonList.status
            })
        },
        created() {
            const url = '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml'
            this.initList({ url, format: this.format })
            const filters = {
                word: '',
                discountRate: 'a',
                ts: '',
                controller: 'search',
                suffix: '.shtml',
                avn: '',
                sort: 'default'
            }
            this.applyFilters(filters)
            this.loadMore()
        },
        methods: {
            format: ret => ({
                list: ret.data.data.list,
                pageNum: ret.data.data.fpage.pageNum
            }),
            pullingUp() {
                console.log('next page')
                if (this.status === 'DONE') {
                    this.loadMore()
                }
            },
            ...mapActions({
                initList: "CommonList/initList",
                loadMore: "CommonList/loadMore",
                applyFilters: "CommonList/applyFilters"
            })
        },
        components: {
            AppPage,
            MagicHeader,
            GoodsListItem
        }
    }
</script>

<style scoped>
</style>