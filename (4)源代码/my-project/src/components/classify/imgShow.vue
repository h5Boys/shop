<template>
  <router-link :to="{name:'goodsDetail',params:{id:ims._id}}">
    <img :src="ims.pic"/>
  </router-link>
</template>

<script>
  import ShopCartService from '../../fetch/ShopService'
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    props: ['ims'],
//    data(){
//        return{
//          ims:[]
//        }
//    },
    mounted(){

    }



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
