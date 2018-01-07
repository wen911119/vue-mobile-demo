<template>
    <div class="login-page">
        demo-list
        <router-link to="/demo/vuex">vuex demo</router-link>
        <router-link to="/demo/iconfont">iconfont demo</router-link>
        <router-link to="/demo/i18n">i18n demo</router-link>
    </div>
</template>
<script>
    import { POST } from '@/interfaces/network'
    export default {
        data() {
            return {

            }
        },
        async mounted() {
            try {
                let ret = await POST('/test')
                console.log(ret, 99999)
            } catch (err) {
                console.log(err, 44444)
            }

        }
    }
</script>
<style>
</style>