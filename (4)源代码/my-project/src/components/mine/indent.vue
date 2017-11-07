<template>
  <div class="indent">
    <div class="default">
      <router-link to="/bulletin">我的订单</router-link>
      <router-link to="/bulletin">查看全部订单
        <img src="../../assets/images/img-fb/右箭.png" alt="">
      </router-link>
    </div>
    <div class="indentMid">
      <router-link to="/bulletin">
        <i class="icon iconfont icon-iconset0291"></i>
        <span>待付款</span>
      </router-link>
      <router-link to="/bulletin">
        <i class="icon iconfont icon-daifahuo"></i>
        <span>待发货</span>
      </router-link>
      <router-link to="/bulletin">
        <i class="icon iconfont icon-daifahuo1"></i>
        <span>待收货</span>
      </router-link>
      <a href="#" class="bian">
        <i class="icon iconfont icon-zhaoxiangji"></i>
        <span>待晒单</span>
      </a>
      <a href="#">
        <i class="icon iconfont icon-dianhua"></i>
        <span>退/换货</span>
      </a>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/mine.js'
  export default {
  }
</script>

<style  scoped>
  @import '../../assets/css/mine.css';
</style>
