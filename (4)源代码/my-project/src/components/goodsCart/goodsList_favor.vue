<template>
  <section class="goodsList_favor">
  <div class="goodsList_favor_header"><p>猜你喜欢</p></div>
  <ul class="goodsList_favor_container">
    <goods-list-favor_item :item="n" v-for="(n,index) in reList" :key="n.id" v-if="index>29 && index<40">{{n}}</goods-list-favor_item>
  </ul>
</section>
</template>

<script type="text/ecmascript-6">

 import  goodsListFavor_item from './goodsListFavor_item.vue'

  export default {
    props:['reList'],
    components:{
      goodsListFavor_item
    },
    mounted(){
      $(".item_img").live("click",function () {
        $(this).find(".item_img_zzc_box").fadeToggle();
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
