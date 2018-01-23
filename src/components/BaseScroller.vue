<template>
    <div class="scroller flex-1" v-onscroll v-onbottom ref="scroll">
        <slot>

        </slot>
        <div :id="uid"></div>
    </div>
</template>
<script>
    import { isWechat } from '@/utils/env'
    const throttle = require('lodash.throttle')
    function guid() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    }
    function emit(e) {
        this.$emit('onScroll', e.target.scrollTop)
    }
    function bottomDetector(id) {
        let detector = null
        let viewportHeight = null
        return function (e) {
            if (!detector) {
                detector = document.getElementById(this.uid)
            }
            if (!viewportHeight) {
                viewportHeight = document.body.clientHeight
            }
            const { top, height } = e.target.getBoundingClientRect()
            let detectorPosition = detector.getBoundingClientRect().top
            if ((top + height + 1) >= detectorPosition) {
                this.$emit('onBottom')
            }
        }
    }
    export default {
        props: {
            onScroll: {
                type: Function,
                required: false
            },
            onBottom: {
                type: Function,
                required: false
            }
        },
        data() {
            return {
                uid: guid()
            }
        },
        methods: {
            scrollTo(p) {
                this.$refs.scroll.scrollTop = p
            }
        },
        directives: {
            onscroll: {
                bind(el, binding, vnode) {
                    const scrollBroadcast = el._onscroll_listener = throttle(emit.bind(vnode.context), 200)
                    el.addEventListener('scroll', scrollBroadcast)
                },
                unbind(el) {
                    el.removeEventListener('scroll', el._onscroll_listener)
                }
            },
            onbottom: {
                bind(el, binding, vnode) {
                    const onBottomBroadcast = el._onbottom_listener = throttle(bottomDetector().bind(vnode.context), 200)
                    el.addEventListener('scroll', onBottomBroadcast)
                },
                unbind(el) {
                    el.removeEventListener('scroll', el._onbottom_listener)
                }
            }
        }
    }
</script>
<style scoped>
    .scroller {
        height: 100%;
        overflow: auto;
    }
</style>