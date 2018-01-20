<template>
    <div class="app-page flex flex-column" :style="{backgroundColor:bgColor}">
        <div class="top">
            <slot name="page-top">
            </slot>
        </div>
        <div class="content flex-1">
            <cube-scroll :data="data" :options="options" @pulling-up="onPullingUp" @pulling-down="onPullingDown">
                <slot name="page-content">

                </slot>
            </cube-scroll>
        </div>
        <div class="bottom">
            <slot name="page-bottom">
            </slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
            bgColor: {
                type: String,
                default: '#fff'
            },
            status: {
                type: String,
                default: ''
            },
            data: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        data() {
            return {
                options: {
                    // scrollbar: {
                    //     fade: true
                    // },
                    pullUpLoad: {
                        threshold: 0,
                        txt: {
                            more: 'Load more',
                            noMore: 'No more data'
                        }
                    },
                    pullDownRefresh: {
                        threshold: 90,
                        stop: 40,
                        txt: 'Refresh success'
                    }
                }
            }
        },
        watch: {
            // status(nv) {
            //     if (nv === 'DONE') {
            //         setTimeout(() => {
            //             console.log('refresh')
            //             this.scroll.finishPullUp()
            //             this.scroll.refresh()
            //         }, 20)
            //     }
            // }
        },
        mounted() {
            // this.scroll = new BScroll('.content', {
            //     click: true,
            //     pullUpLoad: {
            //         threshold: 50
            //     }
            // })
            // this.scroll.on('pullingUp', () => {
            //     this.$emit('pullingUp')
            // })
        },
        methods: {  
            onPullingUp() {
                this.$emit('pullingUp')
            },
            onPullingDown() {
                this.$emit('pullingDown')
            }
        }
    }
</script>

<style scoped>
    .app-page {
        height: 100%;
    }

    .content {
        overflow: hidden;
    }
</style>