<template>
    <div class="home-list-item flex bd-0-0-1-0">
        <img :src="imgSrc"
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
        computed:{
            imgSrc(){
                const reg = this.item.image_path.match(/(.{1})(.{2})(.{29})(.+)/)
                return `//fuss10.elemecdn.com/${reg[1]}/${reg[2]}/${reg[3]}${reg[4]}.${reg[4]}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
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
    .home-list-item{
        padding: pxToRem(20px);
    }
</style>