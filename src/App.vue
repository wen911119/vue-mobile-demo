<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                transitionName: ''
            }
        },
        watch: {
            '$route'(to, from) {
                if (from.name) {
                    const toDepth = to.path.split('/').length
                    const fromDepth = from.path.split('/').length
                    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                }
            }
        },
    }
</script>

<style lang="scss">
    @import './style/common.scss';
    @font-face {
        font-family: 'iconfont';
        src: url('./assets/iconfont.ttf') format('truetype')
    }

    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        height: 100%;
    }

    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    i {
        font-style: normal;
    }

    a,
    div {
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    * {
        box-sizing: border-box;
    }


    .app-page {
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 10;
        left: 0;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        background-color: #fff;
    }

    .slide-left-enter-active,
    .slide-right-enter-active {
        transition: left .3s;
        z-index: 12;
    }

    .slide-left-leave-active,
    .slide-right-leave-active {
        z-index: 9;
        transition: left .5s;
    }

    .slide-left-leave {
        left: 0rem;
    }

    .slide-left-enter {
        left: 10rem;
    }

    .slide-right-leave {
        left: 0rem;
    }

    .slide-right-enter {
        left: -10rem;
    }
</style>