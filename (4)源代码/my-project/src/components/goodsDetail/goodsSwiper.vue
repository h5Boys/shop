<template>
  <section class="goodsPic">
    <div class="swiper-container swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../assets/images/img_yxz/028aab008f28b9899686033c5115873349 (1).PNG" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/img_yxz/028aab008f28b9899686033c5115873349 (1).PNG" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/img_yxz/028aab008f28b9899686033c5115873349 (1).PNG" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../assets/images/img_yxz/028aab008f28b9899686033c5115873349 (1).PNG" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="goodsPic_zzc">{{reList.des}}</div>
    <!--<div class="goodsPic_tag">NEW</div>-->
  </section>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['reList'],
    methods:{
      my(){

      }
    },
    mounted(){

      var mySwiper = new Swiper ('.swiper-container1', {
        loop: true,//是否可以循环拖动
        autoplay:2000,//是否自动播放
        pagination: '.swiper-pagination',
      })
      let id = localStorage.getItem("goodsId");
      console.log(id);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
