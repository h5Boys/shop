<template>
    <div>


      <!--优惠券、发票、留言等-->
      <div class="clearing_pay">
        <div class="clearing_payti" id="clearing_payti02">
          <div>
            <span class="clearing_you">优惠券/优惠券码</span>
            <span class="clearing_ysd">2张可用</span>
          </div>
          <div>
            <span class="clearing_porcel clearing_youd">未使用</span>
            <i class="iconfont icon-arrow-right clearing_youd" id=""></i>
          </div>
        </div>
      </div>
      <div class="clearing_pay">
        <div class="clearing_payti" id="clearing_payti02">
          <div class="clearing_youd">
            <span class="clearing_you">使用货币</span>
            共有
            <span>0</span>
            个货币，满
            <span>100</span>
            可用
            <i class="iconfont icon-yibi" id=""></i>
          </div>
          <!--滑块-->
          <div class="btn_chashe">
						<span class="btn_cha" id="btn_cha01">
							<img class="btn_chaimg" id="btn_chaimg01" src="../../assets/images/img_clearing/bthcha01.png" alt="">
						</span>
          </div>
        </div>
      </div>
      <div class="clearing_pay">
        <div class="clearing_payti" id="clearing_payti02">
          <div>
            <span class="clearing_you">发票</span>
          </div>
          <!--滑块-->
          <div class="btn_chashe">
						<span class="btn_cha" id="btn_cha02">
							<img class="btn_chaimg" id="btn_chaimg02" src="../../assets/images/img_clearing/bthcha01.png" alt="">
						</span>
          </div>
        </div>
      </div>
      <div class="clearing_pay">
        <input class="clearing_msg" type="text" placeholder="留言">
        <div class="clearing_payti" id="clearing_payti02">
          <div>
              <span class="clearing_you">不打印价格</span>
              <span class="clearing_youd">(送朋友的商品可不打印价格哦)</span>
          </div>
          <!--滑块-->
          <div class="btn_chashe">
						<span class="btn_cha" id="btn_cha03">
							<img class="btn_chaimg" id="btn_chaimg03" src="../../assets/images/img_clearing/bthcha01.png" alt="">
						</span>
          </div>
        </div>
      </div>
      <!--商品金额、运费、活动金额-->
      <div class="clearing_elsell">
        <div class="clearing_elsee">
          <p>商品金额</p>
          <p>￥<span>469.00</span></p>
        </div>
        <div class="clearing_elsee">
          <p>运费</p>
          <p>+￥<span>0.00</span></p>
        </div>
        <div class="clearing_elsee">
          <p>活动金额</p>
          <p>-￥<span>56.28</span></p>
        </div>
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


  .clearing_youd{
    color: #7a7a8c;
    font-size: 0.6rem;
  }
  .clearing_you{
    color: #000000;
    font-weight: 600;
  }
  .btn_chashe{
    text-align: right;
  }
  .btn_cha{
    display: inline-block;
    width: 2rem;
    height: 1rem;
    border-radius: 1rem;
    background: #5e6161;
    position: relative;
    transition: all 1.5s;
  }
  .btn_cha img{
    width:0.9rem;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;
  }

  /*中部*/
  .clearing_cen{
    width: 100%;
    margin: 2.5rem 0;
    font-size: 1.2rem;
    margin-top: 2.7rem;
  }
  /*个人信息、地址等*/
  .clearing_cen .clearing_per{
    width: 100%;
    padding: 1.5rem 0.5rem 1.5rem;
    box-sizing: border-box;
    margin-top: 4.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    font-size: 0.8rem;
    background-color: #ffffff;
    background-image: url(../../assets/images/img_clearing/bg_01.png);
    background-position: bottom;
    background-repeat: repeat-x;
  }
  .clearing_cen .clearing_per .clearing_perp01{
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }
  .clearing_cen .clearing_per .clearing_perp01>i{
    font-size: 1.6rem;
    margin-bottom: 50%;
  }
  .clearing_cen .clearing_per .clearing_perp02{
    flex: 7;
  }
  .clearing_cen .clearing_per .clearing_perp02>p{
    width: 100%;
  }
  .clearing_cen .clearing_per .clearing_perp02>p:nth-of-type(1){
    display: flex;
    justify-content: space-between;
  }
  .clearing_cen .clearing_per .clearing_perp02>p:nth-last-of-type(1){
    display: flex;
    justify-content: flex-end;
    color: #ff0000;
    font-size: 0.6rem;
    font-weight: 600;
  }
  /*支付方式*/

  /*要购买的商品*/
  .clearing_cen .clear_spin{
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    margin: 0.3rem 0;
  }
  .clearing_cen .clear_spin .clear_spip{
    flex: 1;
    font-size: 0.1rem;
  }
  .clearing_cen .clear_spin .clear_spip1 img{
    width: 100%;
    height: 100%;
  }
  .clearing_cen .clear_spin .clear_spip2{
    flex: 2;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  .clearing_cen .clear_spin .clear_spip2 span{
    display: inline-block;
    margin: 0.2rem 0;
  }
  .clearing_cen .clear_spin .clear_spip2 p{
    color: #999999;
    font-size: 0.6rem;
  }
  .clearing_cen .clear_spin .clear_spip3{
    text-align: right;
    padding: 0.7rem 0 0;
  }
  .clearing_cen .clear_spin .clear_spip3 p:nth-of-type(1){
    color: #ff0000;
    font-weight: 600;
  }
  .clearing_cen .clear_spin .clear_spip3 p:nth-of-type(2){
    color: #999999;
    font-size: 0.6rem;
  }
  .clearing_msg{
    width: 90%;
    margin: 0.5rem 5%;
    border: 1px solid #c7c8c3;
    border-spacing: 50%;
    border-radius: 0.2rem;
    padding: 1rem 0.5rem;
    box-sizing: border-box;
  }


  /*商品金额、运费、活动金额*/
  .clearing_elsell{
    width: 100%;
    margin: 0.3rem 0;
  }
  .clearing_elsell .clearing_elsee{
    width: 100%;
    background: #ffffff;
    padding: 0 1rem;
    font-size: 0.6rem;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  /*----2张可用----*/
  .clearing_ysd{
    font-size: 0.16rem!important;
    color: #ffbfe5;
    padding: 0.2rem;
    background: #ff575c;
  }

  /*
  .clearing_cen .clearing_cens{
      width: 100%;
      height: 6rem;
      margin-bottom: 0.5rem;
      background: #ffffff;
  }
  */
  .clearing_pay{
    width: 100%;
    box-sizing: border-box;
    font-size: 0.8rem;
    background-color: #ffffff;
  }
  .clearing_pay .clearing_payti{
    width: 95%;
    margin-left: 5%;
    padding: 0.5rem 0.5rem 0.5rem 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;

  }
  .clearing_pay .clearing_payti p:nth-last-of-type(1){
    text-align: right;
    padding-right: 0.5rem;
    box-sizing: border-box;
  }
  .clearing_pay .clearing_payti p .clearing_porcel{
    font-size: 0.6rem;
  }

  .btn_chaimg{
    width: 1rem;
  }

</style>
