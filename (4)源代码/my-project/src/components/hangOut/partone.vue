<template>
  <div>
    <div class="guang_top">
      <ul class="topUL" id="topUL">
        <li class="active"><router-link to="/partone">逛</router-link></li>
        <li><router-link to="/parttwo">社区</router-link></li>
        <li><a href="#"><router-link to="/partthree">ShOw</router-link></a></li>
      </ul>
    </div>

    <div class="box" style="display: block;">
    <hang></hang>
    <love></love>
    <tuijian></tuijian>
  </div>
    <footer-common></footer-common>
  </div>
</template>

<script>
  import hang from "./hang.vue"
  import love from "./love.vue"
  import tuijian from "./tuijian.vue"
//  import "../../assets/js/xuanxiangka.js"
  import footerCommon from '../common/foot.vue'

export default {

  components:{
    hang,
    love,
    tuijian,
    footerCommon
  },


}
</script>

<style>
  @import "../../assets/css/guang.css";
</style>
