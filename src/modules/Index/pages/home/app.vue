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
        <base-list :filters="params" :url="url" :format="format" slot="layout-content">
            <home-list-item slot="item" slot-scope="props" :item="props.item"></home-list-item>
        </base-list>
    </app-layout>
</template>
<script>
    import MagicHeader from '@/components/MagicHeader.vue'
    import BaseTabsMenu from '@/components/BaseTabsMenu.vue'
    import TheFiltersBar from './components/TheFiltersBar.vue'
    import BaseList from '@/components/BaseList.vue'
    import HomeListItem from './components/HomeListItem.vue'
    import { mapState, mapActions } from 'vuex'
    import AppLayout from 'vue-app-layout'
    export default {
        data() {
            return {
                url: '/banggo/search/get-search-goods/a_a_a_a_a_a_a_a_a_a_a_a.shtml',
                params: {
                    word: '',
                    discountRate: 'a',
                    ts: '',
                    controller: 'search',
                    suffix: '.shtml',
                    avn: '',
                    sort: 'default'
                },
                toggleMenu: false
            }
        },
        methods: {
            format: ret => ({
                list: ret.data.data.list,
                pageNum: ret.data.data.fpage.pageNum
            }),
            filtersChange(v) {
                if (v.onlyStock) {
                    this.params.avn = 1
                } else {
                    this.params.avn = ''
                }
                this.params.sort = v.sort
                // this.$refs.list.refresh(Object.assign(this.params, v))
            }
        },
        components: {
            MagicHeader,
            BaseTabsMenu,
            TheFiltersBar,
            AppLayout,
            BaseList,
            HomeListItem
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