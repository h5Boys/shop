<template>
  <div class="row saleEvent">
    <span class="discountTag">促</span>
    <span>【VANS】下单加¥19购防脱落专利宝宝袜</span>
    <i class="icon iconfont icon-arrow-right"></i>
    <sale-event-slide></sale-event-slide>
  </div>
</template>

<script type="text/ecmascript-6">
  import saleEventSlide from './saleEventSlide.vue'

  export default {
    components:{
      saleEventSlide
    },
    mounted(){
      $(".row.saleEvent").click(function () {
        $(".saleEventSlide").slideToggle("fast");
      });
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
