<template>

  <div class="header active">
    <ul>
      <li class="sidebutton" id="sidebutton">
        <a href="javascript:;"><i class="iconfont icon-caidan" style="font-size: 20px;color:#fff;"></i></a>
      </li>
      <li class="li">
        <ul>
          <li><a href="javascript:;"><i class="iconfont icon-fangdajing" style="font-size: 20px;"></i></a></li>
          <li><input type="text" class="input" placeholder="棉羽先行"></li>
          <li><a href="javascript:;"><i class="iconfont icon-saoyisao" style="font-size: 20px;"></i></a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:;"><i class="iconfont icon-xiaoxi" style="font-size: 24px;color:#fff;"></i></a>
      </li>
    </ul>
  </div>


</template>

<script type="text/ecmascript-6">
 export default {

     components:{

     }
 }
</script>

<style scoped>
  @import'../../assets/css/iconfont.css';


  /*=============头部==============*/
  .header{
    width: 100%;
    z-index: 99;
    height: .48rem;
    /* background: pink;*/
    position: fixed;
    top:0;
    left:0;
  }
  .active{
    width:100%;
    height: .48rem;
    position: fixed;
    background: #000;
    top:0;
    left:0;
  }
  .header ul{
    width:100%;
    height: .48rem;
    padding:0.1rem 0;
    display: flex;
    justify-content: space-around;
    align-items:center;
    box-sizing: border-box;
  }
  .header ul li{
    display: block;
    height: .48rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header ul li a{
    color:#000;
    display:block;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header ul .li{
    width:70%;
    height:100%;
    /*padding:.2rem 0;*/
    border-radius: .06rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .header ul .li .input{
    border:none;
    outline: none;
  }
</style>
