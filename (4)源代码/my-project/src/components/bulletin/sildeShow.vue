<template>
  <!--切换效果-->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="content-slide">
          <order-detail></order-detail>
          <order-detail></order-detail>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="content-slide">
          <pagar></pagar>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="content-slide">
         <payment></payment>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="content-slide">
         <payment></payment>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import payment from './payment.vue'
  import OrderDetail from './OrderDetail.vue'
  import pagar from './pagar.vue'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/indent.js'
  import '../../assets/js/idangerous.swiper.min.js'
  export default {
    components: {
      payment,
      OrderDetail,
      pagar
    },
    mounted(){
      var tabsSwiper = new Swiper('.swiper-container',{
        speed:500,
        onSlideChangeStart: function(){
          $('.tabs .active').removeClass('active');
          $('.tabs a').eq(tabsSwiper.activeIndex).addClass('active')
        }
      });
      $('.tabs a').on('touchstart mousedown',function(e){
        e.preventDefault();
        $('.tabs .active').removeClass('active');
        $(this).addClass('active');
        tabsSwiper.slideTo( $(this).index() )
      })
      $('.tabs a').click(function(e){
        e.preventDefault()
      })
    }
  }
</script>

<style scoped>
  @import '../../assets/css/indent.css';
  @import '../../assets/css/idangerous.swiper.css';
</style>
