<template>
<div>
  <section class="core_section_t">
    <div class="core_section_up_t">
      <img src="../../assets/images/img_zyt/wejlg.png" alt="">
    </div>
    <div class="core_section_tab_t">
      <div class="swiper-container tabthree">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </section>
</div>
</template>

<script type="text/ecmascript-6">
//  import "../../assets/js/jquery-1.8.3.min"
//  import "../../assets/js/swiper.min.js"
//  import "../../assets/js/youhuo.js"
  export default {
      mounted(){
          var myswiper = new Swiper('.tabthree', {
            pagination: '.swiper-pagination',
            slidesPerView: 2.5,
            paginationClickable: true,
            loop:true,
          });
      }

  }

</script>

<style scoped>
  @import "../../assets/css/swiper.min.css";
  @import "../../assets/css/index.css";
</style>
