<template>
    <app-layout class="app-page">
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
    import { mapState } from 'vuex'
    import AppLayout from 'vue-app-layout'
    export default {
        data() {
            return {
                url: '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml',
                toggleMenu: false
            }
        },
        mounted() {
            console.log(this.enterType, 77776666655555)
            if (this.enterType === 'push') {
                this.$refs.list.doFilter({})
            } else if (this.enterType === 'back') {
                let state = this.$store.state.VueRouterEnhancer
                const p = state.routerStack[state.current.index].meta.position
                if (p) {
                    this.$refs.goodsListScroller.scrollTo(p)
                }
            }
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
                this.$refs.goodsListScroller.scrollTo(0)
            },
            goToDetail(pid) {
                this.$router.push(`goods/${pid}`)
            },
            onScroll(p) {
                this.$store.dispatch('VueRouterEnhancer/saveMeta', { meta: { position: p } })
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