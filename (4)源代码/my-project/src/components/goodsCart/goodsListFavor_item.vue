<template>
  <li class="goodsList_favor_container_item">
    <span class="item_tag">NEW</span>
    <a class="item_img">
      <div class="item_img_pic">
        <img :src="item.pic" alt="">
      </div>
      <div class="item_img_zzc_box">
        <div class="item_img_zzc">
          <span class="zzc_btn relative">找相似</span>
          <span class="zzc_btn dislike">不喜欢</span>
        </div>
      </div>
    </a>
    <a class="item_txt">
      <p class="item_txt_name">{{item.bens}}</p>
      <div class="item_txt_info">
        <div class="item_txt_price">
          <span class="price_discount" v-if="item.meb!=''">￥<span>{{item.meb}}</span>.00</span>
          <span class="price_original" v-if="item.art!==item.meb">￥<span>{{item.art}}</span>.00</span>
        </div>
        <div class="goodsCartBtn">
          <i class="icon iconfont icon-gouwuche1">+</i>
        </div>
      </div>
    </a>
  </li>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['item'],
    methods:{

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
