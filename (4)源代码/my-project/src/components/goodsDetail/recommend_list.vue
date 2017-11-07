<template>

    <li class="recommend_item">
      <a href="#">
        <img :src="item.pic" alt="">
        <div class="recommend_item_txt">
          <p class="goodsName">{{item.bens}}</p>
          <p class="goodsPrice">¥<span>{{item.art}}</span>.00</p>
        </div>
      </a>
    </li>
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/0284bac0aaa5db640e3354487ec0b9a693.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool M</p>-->
          <!--<p class="goodsPrice">¥595.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/01c5ca98b7e49b8eb3dc20706a84451fba.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool DX</p>-->
          <!--<p class="goodsPrice">¥765.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/02a94666b0fd4a2d8e38690cd5ec044c7b.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool</p>-->
          <!--<p class="goodsPrice">¥595.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/01230be263de34179c98f45f11d84deb5c.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool M</p>-->
          <!--<p class="goodsPrice">¥565.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/0111b1f74e53667d7eddd1041ca2fd3f9f.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool M</p>-->
          <!--<p class="goodsPrice">¥635.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/01b7cec324b20e9dfa101f288defa23d1b.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool</p>-->
          <!--<p class="goodsPrice">¥535.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->
    <!--<li class="recommend_item">-->
      <!--<a href="#">-->
        <!--<img src="../../assets/images/img_yxz/02e95d75fba9d4f35c54f820fe5111be73.jpg" alt="">-->
        <!--<div class="recommend_item_txt">-->
          <!--<p class="goodsName">VANS Old Skool U</p>-->
          <!--<p class="goodsPrice">¥565.00</p>-->
        <!--</div>-->
      <!--</a>-->
    <!--</li>-->

</template>

<script type="text/ecmascript-6">

  export default {
    props:['item']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
