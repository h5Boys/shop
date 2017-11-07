<template>
  <div class="goodsCartList">
    <div class="goodsCartList_item">
      <div class="goodsCheck">
        <input type="checkbox" class="goodsChecked" checked>
      </div>
      <a class="goodsItem">
        <div class="goodsItem_img">
          <img src="../../assets/images/img_yxz/025f0b1f62805ddeb8773c6e050965a9ad.PNG" alt="">
        </div>
        <div class="goodsItem_info">
          <div class="goodsItem_info_top">
            <h3 class="info_name">PUMA Clyde Moon Jungle NATUREL 低帮休闲鞋</h3>
            ×<span class="info_num">1</span>
          </div>
          <div class="goodsItem_info_center">
            颜色：<span class="info_color">多色-小牛皮原色</span>
            尺码:<span class="info_size">37码</span>
          </div>
          <div class="goodsCartList_num">
            <span>数量</span>
            <form class="calculate_forms" action="">
              <span class="cartListCalculate subtract">-</span>
              <input class="cartListNum" type="text" value="1">
              <span class="cartListCalculate add">+</span>
            </form>
          </div>
          <div class="goodsItem_info_bottom">￥<span class="info_price">689</span></div>
        </div>
      </a>
    </div>
    <div class="goodsCartFooter">
      <div class="goodsCheck allCheck">
        <input type="checkbox" id="allChecked" checked>
        <label for="allChecked">全选</label>
      </div>
      <div class="allInfo">
        <div class="allPrice">总计：￥<span class="allPriceNum">0</span></div>
        <div class="tipText">不含运费</div>
      </div>
      <div class="payBtn">结算</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
