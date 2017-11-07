<template>

  <section class="secone">
    <div class="swiper-container tabone">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/lunbo11.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/aghsufyk.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/ghafy.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/aghsufyk.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/ghafy.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/lunbo11.png" alt=""></div>
      </div>
      <!--<div class="swiper-pagination"></div>-->
    </div>
  </section>

</template>
<script type="text/ecmascript-6">
//  import "../../assets/js/jquery-1.8.3.min"
//  import "../../assets/js/swiper.min.js"
//  import "../../assets/js/youhuo.js"
  export default {
    data () {
      return {

      }
    },
    mounted(){

      var swiper = new Swiper('.tabone', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:1000,
      });

    }

  }
</script>

<style scoped>
  @import "../../assets/css/swiper.min.css";
  @import "../../assets/css/index.css";
</style>
