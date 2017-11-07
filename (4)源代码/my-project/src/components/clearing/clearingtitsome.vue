<template>
<div>

  <!--支付方式、配送及送货时间001-->
  <div class="clearing_pay">
    <div class="clearing_payti" id="clearing_payti">
      <p>支付方式</p>
      <p>
        <span class="clearing_porcel">在线支付(推荐)</span>
        <img class="clearing_porimg" id="clearing_porimg" src="../../assets/images/img_clearing/arrow_bottom.png" alt="">
      </p>
    </div>
    <div class="clearing_paytt" id="clearing_paytt">
      <p class="clearing_px">
        <span class="clearing_p">在线支付(推荐)</span>
        <img class="clearing_ptimg clearing_p01" src="../../assets/images/img_clearing/cartch_01.png" alt="">
        <img class="clearing_p02" style="display: none" src="../../assets/images/img_clearing/cartch_02.png" alt="">
      </p>
      <p class="clearing_px">
        <span class="clearing_p">货到付款</span>
        <img class="clearing_ptimg clearing_p01" src="../../assets/images/img_clearing/cartch_01.png" alt="">
        <img class="clearing_p02" style="display: none" src="../../assets/images/img_clearing/cartch_02.png" alt="">
      </p>
    </div>
  </div>
  <!--支付方式、配送及送货时间002-->
  <div class="clearing_pay">
    <div class="clearing_payti" id="clearing_payti02">
      <p>配送方式</p>
      <p>
        <span class="clearing_porcel02">普通快递：运费￥0.00</span>
        <img class="clearing_porimg" id="clearing_porimg02" src="../../assets/images/img_clearing/arrow_bottom.png" alt="">
      </p>
    </div>
    <div class="clearing_paytt" id="clearing_paytt02">
      <p class="clearing_px02">
        <span class="clearing_p02">普通快递：运费￥0.00</span>
        <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartch_02.png" alt="">
      </p>
      <p class="clearing_px02">
        <span class="clearing_p02">顺丰速运：运费￥5.00</span>
        <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartch_01.png" alt="">
      </p>
    </div>
  </div>
  <!--支付方式、配送及送货时间003-->
  <div class="clearing_pay">
    <div class="clearing_payti" id="clearing_payti03">
      <p>送货时间</p>
      <p>
        <span class="clearing_porcel">送货时间不限</span>
        <img class="clearing_porimg" id="clearing_porimg03" src="../../assets/images/img_clearing/arrow_bottom.png" alt="">
      </p>
    </div>
    <div class="clearing_paytt" id="clearing_paytt03">
      <p class="clearing_sm">快递公司会尽力按您选择的送货时间配送，如遇特殊情况(天气、环境等)无法按您的要求时间配送，还请您谅解。</p>
      <p>
        <span>送货时间不限</span>
        <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartch_02.png" alt="">
      </p>
      <p>
        <span>仅周一至周五送货</span>
        <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartch_01.png" alt="">
      </p>
      <p>
        <span>仅双休日/节假日送货</span>
        <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartch_01.png" alt="">
      </p>
    </div>
  </div>
</div>

</template>

<script>
export default {

  mounted(){



  }
}
</script>

<style scoped>

  .clearing_cen .clearing_pay{
    width: 100%;
    box-sizing: border-box;
    font-size: 0.8rem;
    background-color: #ffffff;
  }
  .clearing_cen .clearing_pay .clearing_payti{
    width: 95%;
    margin-left: 5%;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
  }
  .clearing_cen .clearing_pay .clearing_payti p{
    flex:1;
    text-align: left;
  }
  .clearing_cen .clearing_pay .clearing_payti p:nth-last-of-type(1){
    flex:2;
    text-align: right;
    padding-right: 0.5rem;
    box-sizing: border-box;
  }
  .clearing_cen .clearing_pay .clearing_payti p .clearing_porcel{
    font-size: 0.6rem;
  }
  .clearing_cen .clearing_pay .clearing_payti p .clearing_porimg{
    transform: rotate(0deg);
    transform-origin: center center;
    transition: all 0.5s;
  }
  .clearing_cen .clearing_pay .clearing_paytt{
    width: 100%;
    padding: 0.5rem 0 0;
    background: #e0e0e0;
    display: none;
  }
  .clearing_cen .clearing_pay .clearing_paytt .clearing_sm{
    text-align: left;
  }
  .clearing_cen .clearing_pay .clearing_paytt p{
    width: 95%;
    margin-left: 5%;
    padding: 0 1rem 1rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .clearing_cen .clearing_pay .clearing_paytt p{
    border-bottom: 1px solid #ffffff;
  }
  .clearing_cen .clearing_pay .clearing_paytt p span{
    width: 55%;
    text-align: left;
  }
  .clearing_cen .clearing_pay .clearing_paytt p:nth-last-of-type(1){
    border-bottom: none;
  }
  .clearing_pay .clearing_paytt p img{

  }
  .btn_chaimg{
    width: 0.8rem;
  }
  .clearing_porimg{
    width: 1rem;
  }
  .clearing_ptimg,.clearing_p02,.clearing_ptimg,.dre_qie,.dre_qie02{
    width: 1rem;
    height: 1rem;
  }


</style>
