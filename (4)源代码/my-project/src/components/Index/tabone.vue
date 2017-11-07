<template>

<div>
  <section class="core_section">
    <div class="core_section_up">
      <img src="../../assets/images/img_zyt/piss11.png" alt="">
    </div>
    <div class="core_section_tab">
      <div class="swiper-container tabtwo">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss21.png" alt=""><span class="core_title">Stussy</span></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss22.png" alt=""><span class="core_title">Vans</span></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss23.png" alt=""><span class="core_title">PUMA</span></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss24.png" alt=""><span class="core_title">Stussy</span></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss25.png" alt=""><span class="core_title">Stussy</span></div>
          <div class="swiper-slide"><img src="../../assets/images/img_zyt/piss26.png" alt=""><span class="core_title">Stussy</span></div>
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

      var myswiper = new Swiper('.tabtwo', {
        pagination: '.swiper-pagination',
        slidesPerView: 3.5,
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
