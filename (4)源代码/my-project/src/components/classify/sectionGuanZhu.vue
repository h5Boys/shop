<template>
  <div class="guanzhu">
    <div class="tishi">
      <div class="tishi_left">
        <i></i>
        <p>
          <span>您还没有登录呢！</span>
          <span>登陆后立即开启您的有货</span>
        </p>
      </div>
      <div class="tishi_right">
        <router-link to="/login" href="#">马上登陆</router-link>
      </div>
    </div>
    <div class="tj">
      <a href="#"><img src="../../assets/images/classify-img/tj_1.png"/></a>
      <p>
        <span>dress lab</span>
        <span>10月24日</span>
      </p>
      <a href="#">推荐</a>
      <a href="#"><i></i></a>
    </div>
    <div class="tj">
      <a href="#"><img src="../../assets/images/classify-img/tj_2.png"/></a>
      <p>
        <span>LONGCHAMAP</span>
        <span>10月24日</span>
      </p>
      <a href="#">推荐</a>
      <a href="#"><i></i></a>
    </div>
    <div class="tj">
      <a href="#"><img src="../../assets/images/classify-img/tj_3.png"/></a>
      <p>
        <span>Reebok</span>
        <span>10月24日</span>
      </p>
      <a href="#">推荐</a>
      <a href="#"><i></i></a>
    </div>
    <ul class="tjuls">
      <li><a href="#"><img src="../../assets/images/classify-img/tj_4.png"><span>￥580</span></a></li>
      <li><a href="#"><img src="../../assets/images/classify-img/tj_4.png"><span>￥680</span></a></li>
      <li><a href="#"><img src="../../assets/images/classify-img/tj_4.png"><span>￥1280</span></a></li>
    </ul>
  </div>
</template>

<script>
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
