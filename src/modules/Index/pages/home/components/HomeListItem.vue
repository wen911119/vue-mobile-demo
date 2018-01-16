<template>
    <div class="home-list-item flex bd-0-0-1-0">
        <img :src="imgSrc" alt="" class="item-pic">
        <div class="item-right flex flex-column flex-gap">
            <div class="text24">{{item.productName}}</div>
            <div class="text24">{{item.brandName}}</div>
            <div class="text24">{{item.salesPrice}}</div>
        </div>
    </div>
</template>
<script>
    import { isIOS } from '@/utils/env'
    export default {
        props: {
            item: {
                type: Object,
                default: {}
            }
        },
        computed: {
            imgSrc() {
                return this.item.imgUrl_300_300.replace('banggo', 'ruiyun2015')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../../../style/import.scss';
    .item-pic {
        height: pxToRem(130px);
        width: pxToRem(130px);
        margin-right: pxToRem(20px);
    }

    .home-list-item {
        padding: pxToRem(20px);
    }
</style>