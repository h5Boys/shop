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
      <show></show>
  </div>
    <footer-common></footer-common>
  </div>
</template>

<script>
  import show from "./show.vue"
//  import "../../assets/js/xuanxiangka.js"
  import footerCommon from '../common/foot.vue'
export default {

  components:{
      show,
    footerCommon
  },


}
</script>

<style>
  @import "../../assets/css/guang.css";
</style>
