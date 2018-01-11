<template>
    <div class="app-page">
        <ul>
            <li v-for="item in list" :key="item.restaurant.id">
                {{item.restaurant.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                list:state=>state.CommonList.list
            })
        },
        created(){
            this.fetchListData('/restapi/shopping/v3/restaurants?latitude=31.19161900000001&longitude=121.5011301&offset=8&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=046aa9ad33c74af7b00876396c70b15d&terminal=h5')
        },
        methods:{
            ...mapActions({
                fetchListData:"CommonList/fetchListData"
            })
        }
    }
</script>
<style scoped>
</style>