<template>
    <div class="filters-menu-wrap">
        <div class="filters-menu flex flex-row flex-v-center flex-gap pd-0-30">
            <div class="index flex flex-v-center" :class="[filters.sort.indexOf('price')<0?'active':'']" @click="extend">
                <span class="sub-text text26">{{filters.sort==='date'?'新品':filters.sort==='sale'?'销量':'综合'}}</span>
                <i class="triangle" :class="[open?'triangle-up':'triangle-down']"></i>
            </div>
            <div class="goods flex flex-v-center" @click="sortByPrice">
                <span class="sub-text text26" :class="[filters.sort.indexOf('price')>-1?'active':'']">价格</span>
                <div class="arrow-group flex flex-column flex-gap">
                    <i class="triangle triangle-up" :class="[filters.sort==='priceUp'?'active-up':'']"></i>
                    <i class="triangle triangle-down" :class="[filters.sort==='priceDown'?'active-down':'']"></i>
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
        <transition name="fade">
            <div class="fold-layer" v-show="open" @click="open=false" @touchmove="touchmove">
                <transition name="down">
                    <ul class="sort-options pd-0-30 bg-w" v-if="open">
                        <li class="text26 sort-item" :class="[filters.sort==='default'?'active':'']" @click="filters.sort='default'">综合排序</li>
                        <li class="text26 sort-item" :class="[filters.sort==='date'?'active':'']" @click="filters.sort='date'">新品优先</li>
                        <li class="text26 sort-item" :class="[filters.sort==='sale'?'active':'']" @click="filters.sort='sale'">销量从高到低</li>
                    </ul>
                </transition>
            </div>
        </transition>
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
        watch: {
            filters: {
                handler: function (nv, ov) {
                    this.$emit('change', nv)
                },
                deep: true
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
            },
            touchmove(e) {
                e.preventDefault();
            }
        }
    }
</script>
<style scoped>
    .filters-menu {
        height: 1rem;
        background-color: #f5f5f5;
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

    .active>.triangle-up,
    .active-up {
        border-bottom-color: #f8584f !important;
    }

    .active>.triangle-down,
    .active-down {
        border-top-color: #f8584f !important;
    }

    .fold-layer {
        position: fixed;
        height: 1000px;
        width: 100%;
        background-color: rgba(0, 0, 0, .3);
        z-index: 1;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }

    .sort-item {
        height: 1rem;
        line-height: 1rem;
    }

    .arrow-group {
        height: 0.25rem;
    }

    .triangle {
        width: 0;
        height: 0;
        border-left: 0.08rem solid transparent;
        border-right: 0.08rem solid transparent;
        margin-left: 0.08rem;
    }

    .triangle-down {
        border-top: 0.08rem solid #919191;
    }

    .triangle-up {
        border-bottom: 0.08rem solid #919191;
    }

    .sort-options {
        height: 3rem;
        overflow: hidden;
    }

    .down-enter,
    .down-leave-to {
        height: 0;
    }

    .down-enter-active,
    .down-leave-active {
        transition: height .2s;
    }
</style>