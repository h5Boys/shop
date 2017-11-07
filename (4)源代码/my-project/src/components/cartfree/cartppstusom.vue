<template>
  <div>
    <!--每一件加入购物车的商品-->
    <div class="cart_sentpross" >
      <div>
        <img class="cart_chexim01" id="cart_chexim01" src="../../assets/images/img_cart/cartch_01.png" alt="">
        <img class="cart_chexim02" id="cart_chexim02" src="../../assets/images/img_cart/cartch_02.png" alt="">
      </div>
      <!--<div><img src="../../assets/images/img_cart/cartpr01.jpg" alt=""></div>-->
      <div><img :src="item.pic" alt=""></div>
      <div>
        <p class="cart_xhsp">{{item.bens}}</p>
        <p class="cart_xhsp">颜色：<span>{{item.col}}</span><br/>尺码：<span>{{item.size}}</span></p>
        <div class="celsuan" id="celsuan">
          <p class="celsuanjian" id="celsuanjian">-</p>
          <span class="celsuannei" id="celsuannei">1</span>
          <p class="celsuanjia" id="celsuanjia">+</p>
          <span>
							<p>颜色：<span>彩色</span>&nbsp;尺码：<span>F</span></p><span>∨</span>
						</span>
        </div>
        <p>￥<span class="celsuanjiage" id="celsuanjiage">99.00</span></p>
      </div>
      <div id="cart_sentpross">x&nbsp;<span class="cart_sentprossw" id="cart_sentprossw">1</span></div>
    </div>


  </div>
</template>

<script>


  export default {
    props:["item"],

  components:{},

  mounted(){}
}
</script>

<style scoped>

  .cart_sentpross{
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .cart_sentpross .cart_chexim01{
    display: none;
  }
  .cart_sentpross>div:nth-of-type(1){
    display: flex;
    align-items: center;
  }
  .cart_sentpross>div:nth-of-type(2){
    flex: 1;
  }
  .cart_sentpross>div:nth-of-type(2)>img{
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
  }
  .cart_sentpross>div:nth-of-type(3){
    flex:2;
    margin: 0.5rem;
    display: flex;
    flex-flow: column;
    font-size: 0.2rem;
  }
  .cart_sentpross>div:nth-of-type(3)>p{
    margin-bottom: 2%;
    text-align: left;
  }
  .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(2){
    color: #bdbdc6;
  }
  .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(2)>span{
    margin-right: 0.5rem;
  }
  .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(3){
    color: #d0253b;
    font-weight: 600;
  }
  .cart_xhsp{
    /*----------------暂时隐藏暂时隐藏------------------------------*/
  }
  /*----------------隐藏的商品加减------------------------------*/
  .cart_sentpross>div:nth-of-type(3)>.celsuan{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #bfbfbf;
    box-sizing: border-box;
    display: none;
  }
  .cart_sentpross>div:nth-of-type(3)>.celsuan>p{
    width: 20%;
    height: 3rem;
    background: white;
    text-align: center;
    line-height: 3rem;
    font-size: 2.4rem!important;
  }
  .cart_sentpross>div:nth-of-type(3)>.celsuan>span{
    width: 60%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 2.4rem!important;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    box-sizing: border-box;
  }
  .cart_sentpross>div:nth-of-type(3)>.celsuan>span:nth-of-type(2){
    width: 100%;
    height: 3rem;
    border: none;
    border-top: 1px solid #bfbfbf;
    font-size: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  /*----------------隐藏的商品加减（结束）------------------------------*/

  .cart_sentpross>div:nth-of-type(4){
    font-size: 0.16rem;
    color: #c6c6c6;
    margin-top: 0.7rem;
  }
  .cart_chexim01,.cart_chexim02{
    width: 2rem!important;
  }

</style>
