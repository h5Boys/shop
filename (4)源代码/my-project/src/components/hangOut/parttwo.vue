<template>
  <div>
    <div class="guang_top">
      <ul class="topUL" id="topUL">
        <li class="active"><a href="#"><router-link to="/partone">逛</router-link></a></li>
        <li><router-link to="/parttwo">社区</router-link></li>
        <li><a href="#"><router-link to="/partthree">ShOw</router-link></a></li>
      </ul>
    </div>

    <div class="box">
    <shequ></shequ>
    <fatie></fatie>
  </div>
    <footer-common></footer-common>
  </div>
</template>

<script>

  import shequ from "./shequ.vue"
  import fatie from "./fatie.vue"
  import footerCommon from '../common/foot.vue'
//  import "../../assets/js/xuanxiangka.js"
export default {

  components:{
    shequ,
    fatie,
    footerCommon

  },


}
</script>

<style>
  @import "../../assets/css/guang.css";
</style>
