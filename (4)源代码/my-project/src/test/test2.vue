<template>
  <comm :vari="msg"></comm>
</template>

<script type="text/ecmascript-6">
  import comm from "./comm.vue"

  export default {
    data(){
      return{
        msg:"test2"
      }
    },
    components:{
      comm
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
