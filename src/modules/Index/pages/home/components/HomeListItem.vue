<template>
    <div class="home-list-item flex bd-0-0-1-0">
        <img src="//fuss10.elemecdn.com/c/33/657805ddd94a7ec88995214674743png.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
            alt="" class="item-pic">
        <div class="item-right flex flex-column flex-gap">
            <div>{{item.name}}</div>
            <div>{{item.address}}</div>
            <div>{{item.phone}}</div>
        </div>
    </div>
</template>
<script>
    import panel from 'slots-panel'
    export default {
        props: {
            item: {
                type: Object,
                default: {}
            }
        },
        components: {
            panel
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
</style>