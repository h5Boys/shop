<template>

      <!--底下推荐商品-->
      <div class="cart_elseproduct">
        <!--001底下推荐商品的标题-->
        <div class="cart_elstit">
          <img src="../../assets/images/img_cart/cartpr01.jpg" alt="">
          <span>加购过此商品的人还买了</span>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr02.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p class="jiacenta">￥<span>780.00</span></p>
            <p class="jiacentz">￥<span>2780.00</span></p>
            <p><i class="iconfont icon-gouwuche1"></i>+</p>
          </div>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr03.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p>￥<span>239.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr04.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p>￥<span>123.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr05.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p class="jiacenta">￥<span>112.00</span></p>
            <p class="jiacentz">￥<span>323.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>


        <!--001底下推荐商品的标题-->
        <div class="cart_elstit">
          <img src="../../assets/images/img_cart/cartpr05.jpg" alt="">
          <span>看了此商品的人还买了</span>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr04.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p>￥<span>60.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr03.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p>￥<span>720.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>


        <!--001底下推荐商品的标题-->
        <div class="cart_elstit">
          <span>猜你喜欢</span>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr02.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p class="jiacenta">￥<span>299.00</span></p>
            <p class="jiacentz">￥<span>699.00</span></p>
            <p><i class="iconfont icon-gouwuche1" ></i>+</p>
          </div>
        </div>
        <!--002底下推荐商品的商品-->
        <div class="cart_elscon">
          <img src="../../assets/images/img_cart/cartpr01.jpg" alt="">
          <span>HASO x YOHOOD合作款联名迷彩卫衣</span>
          <div class="jiacent">
            <p class="jiacenta">￥<span>549.00</span></p>
            <p class="jiacentz">￥<span>672.00</span></p>
            <p><i class="iconfont icon-gouwuche1" id=""></i>+</p>
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
  font-size: 1.4rem!important;
  text-align: left;
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
  border-radius:1rem;
}



</style>
