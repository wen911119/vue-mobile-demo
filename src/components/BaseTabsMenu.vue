<template>
    <div class="tabs-menu flex flex-row flex-v-center flex-gap pd-0-30">
        <div class="index flex flex-v-center">
            <span class="left-icon iconfont">&#xe622;</span>
            <label>首页</label>
        </div>
        <div class="goods flex flex-v-center">
            <span class="left-icon iconfont">&#xe625;</span>
            <label>商品</label>
        </div>
        <div class="shop flex flex-v-center">
            <span class="left-icon iconfont">&#xe61e;</span>
            <label>购物袋</label>
        </div>
        <div class="user flex flex-v-center">
            <span class="left-icon iconfont">&#xe623;</span>
            <label>我的</label>
        </div>
    </div>
</template>
<script>
    export default {
        props: {

        }
    }
</script>
<style scoped>
    .tabs-menu {
        height: 1rem;
        background-color: #f5f5f5;
    }
    label{
        margin-left: 0.1rem;
    }
</style>