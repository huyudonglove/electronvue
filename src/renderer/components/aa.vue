<template>
    <div>
       222222222
       <button @click="readF">123</button>
    </div>
</template>
<script>
var fs=require('fs');
export default {
    name:'aa',
    methods:{
        readF(){
            fs.readFile('../../static/11.json','utf-8',function(err,data){
                console.log(err)
                console.log(data)
            })
        }
    }

}
</script>