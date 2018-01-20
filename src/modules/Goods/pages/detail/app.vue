<template>
    <app-layout class="app-page">
        <magic-header :title="'详情页'" slot="layout-top">
        </magic-header>
    </app-layout>
</template>

<script>
    import AppLayout from 'vue-app-layout'
    import MagicHeader from '@/components/MagicHeader.vue'

    export default {
        components: {
            AppLayout,
            MagicHeader
        }
    }
</script>

<style>
</style>