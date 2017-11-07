<template>
  <section class="goodsPrice">
    <div class="row price">￥<span>635</span>.00</div>
    <goods-price></goods-price>
    <div class="row info">
      <div class="info_item">
        <img src="../../assets/images/img_yxz/label.png" alt="">
        <span>品牌保障</span>
      </div>
      <div class="info_item">
        <img src="../../assets/images/img_yxz/label.png" alt="">
        <span>支持分期</span>
      </div>
      <div class="info_item">
        <img src="../../assets/images/img_yxz/label.png" alt="">
        <span>支持7天退换货</span>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import goodsPrice from './saleEvent.vue'
  export default {
    components:{
      goodsPrice
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
