<template>
    <div class="app-page">
        demo-list-20180123
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
                <router-link to="/banggo/goods" class="text36">ele</router-link>
            </li>
            <!-- <li>
                <div class="download" @click="download">下载</div>
            </li> -->
        </ul>
    </div>
</template>
<script>
    import { POST } from '@/interfaces/network'
    import XLSX from 'xlsx'
    var FileSaver = require('file-saver');
    export default {
        data() {
            return {
                test: [
                    ["aaaaa", "bbbbb", "ccccc","ddddd","eeee","ffffff","ggggg","hhhhhh"]
                ]
            }
        },
        async mounted() {
            try {
                // let ret = await POST('/test')
                // console.log(ret, 99999)
            } catch (err) {
                console.log(err, 44444)
            }
        },
        methods: {
            download() {
                let temp = []
                temp.push(["aaaaa", "bbbbb", "ccccc","ddddd","eeee","ffffff","ggggg","hhhhhh"])
                for(let i=0;i<10000;i++){
                    const arr = [i,i+1,i+2,i+3,i+4,i+5,i+6,i+7]
                    temp.push(arr)
                }
                console.time('excel')
                var worksheet = XLSX.utils.aoa_to_sheet(temp);
                var new_workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
                var wopts = { bookType: 'xlsx', bookSST: false, type: 'array' };
                var wbout = XLSX.write(new_workbook, wopts);
                FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), "testwww2.xlsx");
                console.timeEnd('excel')
                
            }
        }
    }
</script>
<style>
    .download{
        height: 20rem;
    }
</style>