<template>
<div>
  <section class="compile_section">
    <h4 class="compile_title">编辑推荐</h4>
    <div class="swiper-container tabone">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
        <div class="swiper-slide"><img src="../../assets/images/img_zyt/phsaufb.png" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <tabtwo></tabtwo>
    <!--<div class="core_section_tab_t">-->
      <!--<div class="swiper-container tabthree">-->
        <!--<div class="swiper-wrapper">-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
          <!--<div class="swiper-slide"><img src="../../assets/images/img_zyt/show1.png" alt=""></div>-->
        <!--</div>-->
        <!---->
      <!--</div>-->
    <!--</div>-->
  </section>
</div>
</template>

<script type="text/ecmascript-6">
  import "../../assets/js/jquery-1.8.3.min"
  import "../../assets/js/swiper.min.js"
  import "../../assets/js/youhuo.js"

  import tabtwo from "./tabtwo.vue"
  export default {
      components:{
        tabtwo
      }

  }

</script>

<style scoped>
  @import "../../assets/css/swiper.min.css";
  @import "../../assets/css/index.css";
</style>
