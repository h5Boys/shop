<template>
  <header>
    <i class="i-silder"></i>
    <div class="header-div">
      <a href="#" class="a_01">品类</a>
      <a href="#" class="a_02">品牌</a>
      <a href="#" class="a_03">关注</a>
    </div>
  </header>
</template>

<script>
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    mounted(){
      $('header a').click(function(){
        $(this).css('borderBottom','0.02rem solid #fff').siblings().css('borderBottom','0')
      });
      $('.a_01').click(function(){
        $('.sectionCount').animate({
          left: '0'
        },300)
      })
      $('.a_02').click(function(){
        $('.sectionCount').animate({
          left: '-100%'
        },300)
      })
      $('.a_03').click(function(){
        $('.sectionCount').animate({
          left: '-200%'
        },300)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
