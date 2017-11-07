<template>
  <section class="goodsCartBox">
    <div class="goodsCartBox_header">
      <div class="goodsCartBox_header_pic">
        <img src="../../assets/images/img_yxz/028aab008f28b9899686033c5115873349 (1).PNG" alt="" >
      </div>
      <div class="goodsCartBox_header_info">
        <div class="goodsPrice">￥<span class="goodsPrice_num">635.00</span></div>
        <div class="goodsSelected">已选:&nbsp<span class="goodsSelected_detail"></span></div>
      </div>
      <span class="close">×</span>
    </div>
    <div class="goodsCartBox_goodsDetail">
      <div class="goodsDetail color">
        <span>颜色</span>
        <div class="detailTag color">
          <span class="selectedBtn color">小牛皮绿色</span>
        </div>
      </div>
      <div class="goodsDetail size">
        <span>尺码</span>
        <div class="detailTag size">
          <span class="selectedBtn size">35码</span>
          <span class="selectedBtn size">35 1/2码</span>
          <span class="selectedBtn size">36码</span>
          <span class="selectedBtn size">36 1/2码</span>
          <span class="selectedBtn size">37码</span>
          <span class="selectedBtn size">37 1/2码</span>
          <span class="selectedBtn size">38码</span>
          <span class="selectedBtn size">38 1/2码</span>
          <span class="selectedBtn size">39码</span>
          <span class="selectedBtn size">39 1/2码</span>
          <span class="selectedBtn size">40码</span>
          <span class="selectedBtn size">40 1/2码</span>
        </div>
      </div>
      <div class="goodsDetail num">
        <span>数量</span>
        <form class="calculate_forms" action="">
          <span class="calculate subtract" id="subtract">-</span>
          <input id="goodsNum" type="text" value="1">
          <span class="calculate add" id="add">+</span>
        </form>
      </div>
    </div>
    <div class="goodsCartBox_goodsAdd">加入购物车</div>
  </section>
</template>

<script type="text/ecmascript-6">

  export default {
    components: {},
    mounted () {
      var id = localStorage.getItem("id");
      console.log(id);

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
