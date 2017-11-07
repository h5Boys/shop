<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><a href="#"><img src="../../assets/images/classify-img/08-32-31-01483352a4f8afb420bcb2342076d399b6.jpg"/></a></div>
      <div class="swiper-slide"><a href="#"><img src="../../assets/images/classify-img/08-32-36-01572a695b7af42b8dacc825d28a2ccac9.jpg"/></a></div>
      <div class="swiper-slide"><a href="#"><img src="../../assets/images/classify-img/08-32-40-016184ca6b0cd2dd47e8877b6f1c93e1b2.jpg"/></a></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    mounted(){
      setTimeout(function () {
        let mySwiper = new Swiper (' .swiper-container', {
          loop: true,
          autoplay:3000,
          pagination: ' .swiper-pagination'
        });
      },100)

    }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
  @import '../../assets/css/swiper.min.css';
</style>
