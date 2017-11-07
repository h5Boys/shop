<template>
  <div class="pinpai">
      <pinpai-header></pinpai-header>
    <div class="pinpaimen">
      <form>
        <i></i>
        <input type="text" placeholder="搜索品牌" />
      </form>
        <right-silder></right-silder>
        <div class="menbox">
            <men-count>
            </men-count>
        </div>
        <div class="womenbox">
            <men-count>

            </men-count>
        </div>
        <div class="kidsbox">
            <men-count>

            </men-count>
        </div>
    </div>
  </div>
</template>

<script>
  import pinpaiHeader from './pinpaiHeader.vue'
  import menCount from './menCount.vue'
  import rightSilder from './rightSilder.vue'
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    components: {
      pinpaiHeader,
      menCount,
      rightSilder
    },
    mounted() {
      $('.ul_04 li').click(function(){
        $(this).css('color','#7f7f7f').siblings().css('color','#b4b4b4')
      })
      $('.li_01').click(function(){
        $('.pinpaiBox').show().next().hide().next().hide()
        $('#right_silder').show()
      })
      $('.li_02').click(function(){
        $('.newShopuls').show().next().hide().prev().prev().hide()
        $('#right_silder').hide()
      })
      $('.li_03').click(function(){
        $('.hotShop').show().prev().hide().prev().hide()
        $('#right_silder').hide()
      })
      $('.sp-04').click(function(){
        $('.menbox').show().next().hide().next().hide();
      })
      $('.sp-05').click(function(){
        $('.womenbox').show().prev().hide().next().next().hide();
      })
      $('.sp-06').click(function(){
        $('.kidsbox').show().prev().hide().prev().hide();
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
