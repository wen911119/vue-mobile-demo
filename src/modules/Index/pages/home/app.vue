<template>
    <app-layout class="app-page" @onScroll="onScroll">
        <div class="top-area" slot="layout-top">
            <magic-header @rightClick="toggleMenu=!toggleMenu" :title="'列表页'">
                <span slot="header-right" class="iconfont">{{toggleMenu?'&#xe629;':'&#xe628;'}}</span>
            </magic-header>
            <transition name="tabs-show">
                <base-tabs-menu class="tabs-menu" v-if="toggleMenu"></base-tabs-menu>
            </transition>
            <the-filters-bar @change="filtersChange"></the-filters-bar>
        </div>
        <base-scroller slot="layout-content" @onScroll="onScroll" @onBottom="onBottom" ref="goodsListScroller">
            <base-list ref="list" :url="url" :format="format">
                <home-list-item slot="item" slot-scope="props" :item="props.item" @click="goToDetail(props.item.productId)"></home-list-item>
            </base-list>
        </base-scroller>
    </app-layout>
</template>
<script>
    import MagicHeader from '@/components/MagicHeader.vue'
    import BaseTabsMenu from '@/components/BaseTabsMenu.vue'
    import TheFiltersBar from './components/TheFiltersBar.vue'
    import BaseList from '@/components/BaseList.vue'
    import BaseScroller from '@/components/BaseScroller.vue'
    import HomeListItem from './components/HomeListItem.vue'
    import { mapState, mapActions } from 'vuex'
    // import AppLayout from 'vue-app-layout'
    import AppLayout from '@/components/BaseLayout.vue'
    export default {
        data() {
            return {
                url: '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml',
                toggleMenu: false
            }
        },
        mounted() {
            this.$refs.list.doFilter({})
        },
        methods: {
            format: ret => ({
                list: ret.data.data.list,
                pageNum: ret.data.data.fpage.pageNum
            }),
            filtersChange(v) {
                let params = {
                    word: '',
                    discountRate: 'a',
                    ts: '',
                    controller: 'search',
                    suffix: '.shtml'
                }
                if (v.onlyStock) {
                    params.avn = 1
                } else {
                    params.avn = ''
                }
                params.sort = v.sort
                this.$refs.list.doFilter(params)
                this.$refs.goodsListScroller.scrollToTop()
            },
            goToDetail(pid) {
                this.$router.push(`goods/${pid}`)
            },
            onScroll(p) {
                console.log(p)
            },
            onBottom() {
                this.$refs.list.loadMore()
            }
        },
        components: {
            MagicHeader,
            BaseTabsMenu,
            TheFiltersBar,
            AppLayout,
            BaseList,
            HomeListItem,
            BaseScroller
        }
    }
</script>
<style scoped>
    .tabs-show-enter,
    .tabs-show-leave-to {
        height: 0 !important;
    }

    .tabs-show-enter-active,
    .tabs-show-leave-active {
        transition: height 0.2s;

    }
</style>