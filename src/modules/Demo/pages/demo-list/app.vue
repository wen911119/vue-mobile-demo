<template>
    <div class="app-page">
        demo-list3
        <ul>
            <li>
                <router-link to="/demo/vuex" class="text36">vuex demo</router-link>
            </li>
            <li>
                <router-link to="/demo/iconfont" class="text36">iconfont demo</router-link>
            </li>
            <li>
                <router-link to="/demo/i18n" class="text36">i18n demo</router-link>
            </li>
            <li>
                <router-link to="/ele/home" class="text36">ele</router-link>
            </li>
        </ul>
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
                // let ret = await POST('/test')
                // console.log(ret, 99999)
            } catch (err) {
                console.log(err, 44444)
            }

        }
    }
</script>
<style>
</style>