<template>
    <ul class="base-list">
        <li v-for="item in list">
            <slot name="item" :item="item">
                <!-- 这里写入备用内容 -->
            </slot>
        </li>
    </ul>
</template>
<script>
    export default {
        props: {
            list: {
                type: Array,
                default: []
            }
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
</style>