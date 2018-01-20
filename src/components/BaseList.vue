<template>
    <div>
        <ul class="base-list" v-infinite-scroll="loadMore" scroll-to-top-listen-for-event="scroll-top">
            <li v-for="(item,index) in list" :key="index">
                <slot name="item" :item="item">
                    <!-- 这里写入备用内容 -->
                </slot>
            </li>
            <li>
                <div class="loading flex flex-x-center" v-if="currentPage<pageNum">
                    <div class="loader text32"></div>
                    <span class="loading-text sub-text text30">正在加载中...</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import InfiniteScroll from '@/directives/infiniteScroll.js'
    import { mapState, mapActions } from 'vuex'
    export default {
        props: {
            url: {
                type: String,
                required: true
            },
            format: {
                type: Function,
                required: false
            }
        },
        computed: {
            ...mapState({
                currentPage: state => state.CommonList.info.currentPage,
                pageNum: state => state.CommonList.info.pageNum,
                list: state => state.CommonList.list
            })
        },
        created() {
            this.initList({ url: this.url, format: this.format })
        },
        methods: {
            ...mapActions({
                initList: "CommonList/initList",
                loadMore: "CommonList/loadMore",
                applyFilters: "CommonList/applyFilters"
            }),
            doFilter(p) {
                this.$emit('scroll-top')
                this.applyFilters(p)
            }
        },
        directives: {
            InfiniteScroll
        }
    }
</script>
<style scoped>
    .loading {
        height: 1.5rem;
    }

    .loading-text {
        margin-left: 0.2rem;
    }

    .loader {
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background: #ccc;
        background: -moz-linear-gradient(left, #ccc 10%, rgba(169, 162, 149, 0) 42%);
        background: -webkit-linear-gradient(left, #ccc 10%, rgba(169, 162, 149, 0) 42%);
        background: -o-linear-gradient(left, #ccc 10%, rgba(169, 162, 149, 0) 42%);
        background: -ms-linear-gradient(left, #ccc 10%, rgba(169, 162, 149, 0) 42%);
        background: linear-gradient(to right, #ccc 10%, rgba(169, 162, 149, 0) 42%);
        position: relative;
        -webkit-animation: load3 1.4s infinite linear;
        animation: load3 1.4s infinite linear;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    .loader:before {
        width: 50%;
        height: 50%;
        background: #ccc;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }

    .loader:after {
        background: #fff;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>