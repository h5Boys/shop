<template>

    <section>
      <div class="cart_sale">
        <span class="cart_sal"><i class="iconfont icon-yibi" id=""></i>已满足下单88折</span>
        <span class="cart_sar"><i class="iconfont icon-arrow-right" id=""></i></span>
      </div>
      <!--加入购物车的所有商品-->
      <div class="cart_pls">
        <div class="cart_sentpro">
          <p><img class="cart_sentprosome" src="../../assets/images/img_cart/cartsendpro.png" alt=""><span>再购399.00元立享满￥399赠护腕</span></p>
          <p>去凑单<i class="iconfont icon-arrow-right" id=""></i></p>
        </div>
        <!--每一件加入购物车的商品-->
        <cartppstusom :item="n" v-for="n in list" :key="id">{{n}}</cartppstusom>
      </div>
      <!--全场加价购-->
      <div class="cart_adsel">
        <span class="cart_adl"><i class="iconfont icon-huobi" id=""></i>全场加价购</span>
        <span class="cart_adr">去换购<i class="iconfont icon-arrow-right" id=""></i></span>
      </div>
      <!--已参与活动-->
      <div class="cart_join">
        <p>已参与活动</p>
        <p>•【秋潮来袭 型品集结】下单88折</p><br>
        <p>总计￥<span>412.72</span>=商品金额￥<span>469.00</span>-活动金额￥<span>56.28</span></p>
      </div>

    </section>

</template>

<script>

  import cartppstusom from "./cartppstusom.vue";

  export default {
    props:["list"],
    components:{
      cartppstusom

    },

    mounted(){




    }
  }
</script>

<style scoped>

  .hello222{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    position: fixed;
    top:0;
    left:0;
    overflow-y: scroll;
  }
  section{
    width: 100%;
    margin: 2.5rem 0 0;
    font-size: 1.2rem;
    margin-top: 6.3rem;
  }
  section .cart_002{
    width: 100%;
    height: 2rem;
    margin-bottom: 0.2rem;
    background: white;
  }
  .cart_sale{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    box-sizing: border-box;
    background: white;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.6rem;
  }
  .cart_sale .cart_sal{
    flex: 1;
    text-align: left;
  }
  .cart_sale .cart_sal>i{
    color: #d0253b;
    font-weight: 600;
    margin-right: 1%;
  }
  .cart_sale .cart_sar>i{
    color: #c6c6c6;
    vertical-align: middle;
  }
  .cart_pls{
    width: 100%;
    background: #ffffff;
  }
  .cart_pls .cart_sentpro{
    width: 90%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 0;
    box-sizing: border-box;
    font-size: 0.4rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .cart_pls .cart_sentpro>p:nth-of-type(1){
    color: #000000;
    text-align: left;
  }
  .cart_pls .cart_sentpro>p:nth-of-type(1) span{
    font-size: 1.4rem!important;
  }
  .cart_pls .cart_sentpro .cart_sentprosome{
    width: 2.6rem;
    height: 1.6rem;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
  .cart_pls .cart_sentpro>p:nth-last-of-type(1){
    color: #ff575c;
  }
  .cart_pls .cart_sentpro>p:nth-last-of-type(1)>i{
    color: #c6c6c6;
  }
  .cart_pls .cart_sentpross{
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .cart_pls .cart_sentpross .cart_chexim01{
    display: none;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(1){
    display: flex;
    align-items: center;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(2){
    flex: 1;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(2)>img{
    width: 100%;
    height: 100%;
    padding: 0.2rem 0.5rem;
    box-sizing: border-box;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3){
    flex:2;
    margin: 0.5rem;
    display: flex;
    flex-flow: column;
    font-size: 0.2rem;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>p{
    margin-bottom: 2%;
    text-align: left;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(2){
    color: #bdbdc6;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(2)>span{
    margin-right: 0.5rem;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>p:nth-of-type(3){
    color: #d0253b;
    font-weight: 600;
  }
  .cart_xhsp{
    /*----------------暂时隐藏暂时隐藏------------------------------*/
  }
  /*----------------隐藏的商品加减------------------------------*/
  .cart_pls .cart_sentpross>div:nth-of-type(3)>.celsuan{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #bfbfbf;
    box-sizing: border-box;
    display: none;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>.celsuan>p{
    width: 20%;
    height: 3rem;
    background: white;
    text-align: center;
    line-height: 3rem;
    font-size: 2.4rem!important;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>.celsuan>span{
    width: 60%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: 2.4rem!important;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    box-sizing: border-box;
  }
  .cart_pls .cart_sentpross>div:nth-of-type(3)>.celsuan>span:nth-of-type(2){
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

  .cart_pls .cart_sentpross>div:nth-of-type(4){
    font-size: 0.16rem;
    color: #c6c6c6;
    margin-top: 0.7rem;
  }
  /*全场加价购*/
  .cart_adsel{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    padding: 0.7rem 0.5rem;
    box-sizing: border-box;
    background: white;
    border-bottom: 1px solid #f0f0f0;
    font-size: 0.6rem;
  }
  .cart_adsel .cart_adl{
    flex: 1;
    text-align: left;
  }
  .cart_adsel .cart_adl>i{
    color: #000000;
    vertical-align: middle;
    font-weight: 600;
    margin-right: 1%;
  }
  .cart_adsel .cart_adr{
    color: #ff575c;
  }
  .cart_adsel .cart_adr>i{
    color: #c6c6c6;
    vertical-align: middle;
  }
  .cart_join{
    width: 100%;
    background: #ffffff;
    padding: 0.7rem 0.5rem;
    box-sizing: border-box;
    margin: 0 0 0.5rem 0;
  }
  .cart_join>p{
    width: 100%;
    font-size: 0.6rem;
    text-align: left;
  }
  .cart_elseproduct{
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .cart_elseproduct .cart_elstit{
    width: 100%;
    margin-top: 0.2rem;
    display: flex;
    align-items: center;
    padding: 1rem 0 2rem;
  }
  .cart_elseproduct .cart_elstit>img{
    width: 15%;
    height: 100%;
    margin-right: 0.5rem;
  }
  .cart_elseproduct .cart_elstit>span{
    font-size: 0.2rem;
    font-weight: 600;
  }
  .cart_elseproduct .cart_elscon{
    width: 48%;
    background: #fff;
    margin-top: 0.2rem;
  }
  .cart_elseproduct .cart_elscon>img{
    width: 100%;
  }
  .cart_elseproduct .cart_elscon>span{
    width: 100%;
    display: inline-block;
    font-size: 0.16rem;
    margin-bottom: 0.5rem;
  }
  .cart_elseproduct .cart_elscon .jiacent{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .cart_elseproduct .cart_elscon .jiacent>p{
    font-size: 0.16rem;
  }
  .cart_elseproduct .cart_elscon .jiacent>p:nth-of-type(1){
    font-weight: 600;
  }
  .cart_elseproduct .cart_elscon .jiacent>.jiacenta{
    color: #d1021c;
  }
  .cart_elseproduct .cart_elscon .jiacent>.jiacentz{
    text-decoration: line-through;
    color: #929090;
  }
  .cart_elseproduct .cart_elscon .jiacent>p:nth-last-of-type(1){
    background: #bfbfbf;
    padding: 0 0.3rem;
    border-radius:0.5rem;
  }

  .cart_chexim01,.cart_chexim02{
    width: 2rem!important;
  }


</style>
