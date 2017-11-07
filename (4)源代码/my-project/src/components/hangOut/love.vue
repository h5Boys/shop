<template>
  <div class="swiper-container tabt">
    <div class="swiper-wrapper" style="width:100%;">
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo1.jpg" alt=""></div>

      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo3.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo4.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo5.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo6.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo7.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/img_wanglu/guang_lunbo8.jpg" alt=""></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import "../../assets/js/swiper.min.js"
export default {
//
    mounted(){
      var sswiper = new Swiper ('.tabt', {
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
  @import "../../assets/css/guang.css";

</style>
