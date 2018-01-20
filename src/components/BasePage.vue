<template>
    <div class="app-page flex flex-column" :style="{backgroundColor:bgColor}">
        <div class="top">
            <slot name="page-top">
            </slot>
        </div>
        <div class="content flex-1">
            <slot name="page-content">

            </slot>
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
            }
        },
        watch: {
            status(nv) {
                if (nv === 'DONE') {
                    setTimeout(() => {
                        console.log('refresh')
                        this.scroll.finishPullUp()
                        this.scroll.refresh()
                    }, 20)
                }
            }
        },
        mounted() {
            this.scroll = new BScroll('.content', {
                click: true,
                pullUpLoad: {
                    threshold: 50
                }
            })
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
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