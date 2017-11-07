<template>
  <router-link to="/clearing">
  <div class="Orderdetail">
    <div class="Orderdetailtop">
      <p>订单编号：1770990440</p>
      <p>待付款</p>
    </div>
    <div class="OrderdetailMid">
      <img class="OrderdeLeft" src="../../assets/images/img-fb/mine1.jpg" alt="">
      <div class="OrderdeMid">
        <p>Life·After Life x 徐毛毛 撞色几何图形高领毛衣</p>
        <div class="life">颜色：白  尺码：L</div>
      </div>
      <div class="OrderdeRight">
        <span>￥499.00</span>
        <span>x1</span>
      </div>
    </div>
    <div class="Orderdetailtotol">
      共计<span>1</span>件商品实付<span>￥499.00</span>
    </div>
    <div class="Orderde">
      <div id="timer"></div>
      <div class="Orderdele">
        <a href="#">取消订单</a>
        <a href="#">立即付款</a>
      </div>
    </div>
  </div>
  </router-link>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/indent.js'
  export default {
    mounted() {
      function ShowCountDown(day, divname) {
        var now = new Date();
        var endDate = new Date(day);
        var leftTime = endDate.getTime() - now.getTime();
        var leftsecond = parseInt(leftTime / 1000);
        var day1 = Math.floor(leftsecond / (60 * 60 * 24));
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
        var cc = document.getElementById(divname);
        cc.innerHTML = hour + "小时" + minute + "分" + second + "秒";
      }
      window.setInterval(function () {
        ShowCountDown(1, 'timer');
      }, 1000);
    }
  }
</script>

<style>
  @import '../../assets/css/indent.css';
</style>
