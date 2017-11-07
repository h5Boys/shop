<template>

  <!-- ==========根部============= -->

  <footer>
      <router-link to="/"><i class="iconfont icon-home" style="font-size: 24px;"></i><span>首页</span></router-link>
      <router-link to="/classify"><i class="iconfont icon-fenlei" style="font-size: 24px;"></i><span>分类</span></router-link>
      <router-link to="/liu"><i class="iconfont icon-huojian" style="font-size: 24px;"></i><span>逛</span></router-link>
      <router-link to="/goodsCart"><i class="iconfont icon-gouwuche1" style="font-size: 24px;"></i><span>购物车</span></router-link>
      <router-link to="/mine"><i class="iconfont icon-wode-copy" style="font-size: 24px;"></i><span>我的</span></router-link>
  </footer>


</template>

<script type="text/ecmascript-6">

 export default {

     components:{

     },

//     mounted(){
//       $('footer a').click(function () {
//         $(this).siblings().removeClass('actives');
//         $(this).addClass('actives');
//       })
//     }
 }
</script>

<style scoped>
  @import'../../assets/css/iconfont.css';
  footer{
    margin-top: 3rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 0.07rem;
    padding-bottom: 0.1rem;
    display: flex;
    background: white;
    border-top: 1px solid #e6e6e6;
    z-index: 999;
  }
  footer a{
    display: block;
    flex: 1;
    font-size: 12px;
    color: #848484;
    text-align: center;
  }
  footer a .iconfont{
    display: block;
    font-size: 0.32rem;
    margin-bottom: 0.03rem;
  }
  .actives{
    color:#000;
  }
</style>
