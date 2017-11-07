<template>
  <div>
    <div id="banner">
      <img src="../../assets/images/img_wanglu/shequbanner.jpg"/>
    </div>
    <div class="swiper-container tabone">
      <div class="swiper-wrapper">
        <div class="swiper-slide tab">
          <div class="huadong1">
            <div class="huadong">
              <span>爱享潮物</span>
              <ul><li><p>帖子5642</p></li><li><p>回复886</p></li><li><p>赞3W+</p></li></ul>
            </div>
            <p class="guihun">#鬼混Hallween#</p>
            <div class="photo">
              <img src="../../assets/images/img_wanglu/xiaoimg1.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg2.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg3.jpg" >
            </div>
            <span>147条更新 ></span>
          </div>
        </div>
        <div class="swiper-slide tab">
          <div class="huadong1">
            <div class="huadong">
              <span>爱享潮物</span>
              <ul><li><p>帖子5642</p></li><li><p>回复886</p></li><li><p>赞3W+</p></li></ul>
            </div>
            <p class="guihun">#鬼混Hallween#</p>
            <div class="photo">
              <img src="../../assets/images/img_wanglu/xiaoimg1.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg2.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg3.jpg" >
            </div>
            <span>147条更新 ></span>
          </div>
        </div>
        <div class="swiper-slide tab">
          <div class="huadong1">
            <div class="huadong">
              <span>爱享潮物</span>
              <ul><li><p>帖子5642</p></li><li><p>回复886</p></li><li><p>赞3W+</p></li></ul>
            </div>
            <p class="guihun">#鬼混Hallween#</p>
            <div class="photo">
              <img src="../../assets/images/img_wanglu/xiaoimg1.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg2.jpg" >
              <img src="../../assets/images/img_wanglu/xiaoimg3.jpg" >
            </div>
            <span>147条更新 ></span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import "../../assets/js/swiper.min.js"
  export default {
//
    mounted(){
      var swiper = new Swiper('.tabone', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 100,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        slidesPerView: 2,
        loop:true,
      });


    }
  }

</script>

<style>
@import "../../assets/css/swiper.min.css";
  @import "../../assets/css/guang.css";
</style>
