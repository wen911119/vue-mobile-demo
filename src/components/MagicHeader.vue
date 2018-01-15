<template>
    <div class="magic-header flex flex-row flex-v-center pd-0-30 bd-0-0-1-0" >
        <div class="header-left flex-1">
            <slot name="header-left">
                <span class="left-icon iconfont" @click="back">&#xe60c;</span>
            </slot>
        </div>
        <div class="header-title h-c text36">
            <slot>标题</slot>
        </div>
        <div class="header-right flex-1" @click="$emit('rightClick')">
            <slot name="header-right">
            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: '标题'
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>
    .magic-header {
        height: 1rem;
        background-color: #f5f5f5;
    }
    .header-right{
        text-align: right;
    }
</style>