<template>
    <div class="filters-menu-wrap">
        <div class="filters-menu flex flex-row flex-v-center flex-gap pd-0-30">
            <div class="index flex flex-v-center" :class="[filters.sort.indexOf('price')<0?'active':'']" @click="extend">
                <span class="sub-text text26">{{filters.sort==='date'?'新品':filters.sort==='sale'?'销量':'综合'}}</span>
                <label class="iconfont">&#xe601;</label>
            </div>
            <div class="goods flex flex-v-center" @click="sortByPrice">
                <span class="sub-text text26" :class="[filters.sort.indexOf('price')>-1?'active':'']">价格</span>
                <div class="arrow-group flex flex-column">
                    <label class="iconfont" :class="[filters.sort==='priceUp'?'active':'']">&#xe602;</label>
                    <label class="iconfont" :class="[filters.sort==='priceDown'?'active':'']">&#xe601;</label>
                </div>
            </div>
            <div class="shop flex flex-v-center" :class="[filters.onlyStock?'active':'']" @click="toggleStock">
                <span class="sub-text text26">有货</span>
            </div>
            <div class="user flex flex-v-center">
                <span class="sub-text text26">筛选</span>
            </div>
            <div class="user flex flex-v-center">
                <span class="transform iconfont">&#xe627;</span>
            </div>
        </div>
        <div class="fold-layer" v-if="open" @click="open=false">
            <ul class="sort-options pd-20-30 bg-w">
                <li class="text26 sort-item" :class="[filters.sort==='default'?'active':'']" @click="filters.sort='default'">综合排序</li>
                <li class="text26 sort-item" :class="[filters.sort==='date'?'active':'']" @click="filters.sort='date'">新品优先</li>
                <li class="text26 sort-item" :class="[filters.sort==='sale'?'active':'']" @click="filters.sort='sale'">销量从高到低</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                filters: {
                    onlyStock: false,
                    sort: 'default' // default 综合， date 新品优先， sale 销量从高到低, priceUp 价格升序， priceDown 价格降序
                },
                open: false
            }
        },
        methods: {
            toggleStock() {
                this.filters.onlyStock = !this.filters.onlyStock
            },
            sortByPrice() {
                this.open = false
                if (this.filters.sort === 'priceUp') {
                    this.filters.sort = 'priceDown'
                } else {
                    this.filters.sort = 'priceUp'
                }
            },
            extend() {
                this.open = !this.open
            }
        }
    }
</script>
<style scoped>
    .filters-menu {
        height: 1rem;
        background-color: #f5f5f5;
    }

    label {
        margin-left: 0.1rem;
        font-size: 0.1rem;
    }

    .transform {
        font-size: 0.3rem;
    }

    .active {
        color: #f8584f;
    }

    .active>span {
        color: #f8584f !important;
    }

    .fold-layer {
        position: fixed;
        height: 1000px;
        width: 100%;
        background-color: rgba(0, 0, 0, .3);
    }

    .sort-item {
        height: 1rem;
        line-height: 1rem;
    }
</style>