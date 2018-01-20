<template>
    <div class="app-layout flex flex-column" :style="{backgroundColor:bgColor}">
        <div class="top">
            <slot name="layout-top">
            </slot>
        </div>
        <div class="content flex-1">
            <slot name="layout-content">

            </slot>
            
        </div>
        <div class="bottom" id="_bottom_area_">
            <slot name="layout-bottom">

            </slot>
        </div>
    </div>
</template>
<script>
    const throttle = require('lodash.throttle')
    function emit(e) {
        this.$emit('onScroll', e.target.scrollTop)
    }
    function bottomDetector() {
        let detector = null
        let viewportHeight = null
        let bottomHeight = null
        return function (e) {
            if (!detector) {
                detector = document.getElementById('_bottom_detector_')
            }
            if (!viewportHeight) {
                viewportHeight = document.body.clientHeight
            }
            if (!bottomHeight) {
                bottomHeight = document.getElementById('_bottom_area_').clientHeight
            }
            let bottomPosition = detector.getBoundingClientRect().top
            if (bottomPosition + bottomHeight < viewportHeight + 1) {
                this.$emit('onBottom')
            }
        }
    }
    export default {
        props: {
            bgColor: {
                type: String,
                default: '#fff'
            }
        },
        directives: {
            scroll: {
                bind(el, binding, vnode) {
                    const scrollBroadcast = throttle(emit.bind(vnode.context), 200)
                    const onBottomBroadcast = throttle(bottomDetector().bind(vnode.context), 200)
                    el.addEventListener('scroll', scrollBroadcast)
                    el.addEventListener('scroll', onBottomBroadcast)
                }
            }
        }
    }
</script>
<style scoped>
    .app-layout {
        height: 100%;
    }

    .flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    .flex-1 {
        flex: 1;
    }

    .content {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>