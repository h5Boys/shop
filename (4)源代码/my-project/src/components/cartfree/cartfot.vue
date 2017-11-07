<template>

    <div class="cart_clos">
      <span class="cart_cheall">
        <!--<input class="cart_check" type="checkbox" checked/>-->
        <p class="cart_cheallimg01" id="cart_cheallimg01"><img src="../../assets/images/img_cart/cartch_01.png" alt=""></p>
        <p class="cart_cheallimg02" id="cart_cheallimg02"><img src="../../assets/images/img_cart/cartch_02.png" alt=""></p>
        <p>全选</p>
      </span>
        <span class="cart_change">
        <p class="cart_chaone" id="cart_chaone">总计：￥<span class="cart_monz" id="cart_monz">99.00</span>(<span class="cart_mons" id="cart_mons">1</span>件)</p>
        <span class="cart_chatwo" id="cart_chatwo">不含运费</span>
        <span class="cart_ensh" id="cart_ensh">移入收藏夹</span>
      </span>
      <!--<span class="cart_price" id="cart_price" onclick="window.open('clearing.html','_self')">结算</span>-->
      <router-link to="/" class="cart_price" id="cart_price">结算</router-link>
      <span class="cart_dele" id="cart_dele">删除</span>

  </div>

</template>

<script>
export default {

mounted(){


}
}
</script>

<style scoped>

/*底部-结算*/
.cart_clos{
width: 100%;
background: #ffffff;
position: fixed;
/*bottom: 2rem;*/
bottom: 0rem;
z-index: 10;
padding: 0.5rem;
box-sizing: border-box;
display: flex;
justify-content: space-between;
font-size: 0.8rem;
border-top: 1px solid #bababa;
border-bottom: 1px solid #bababa;
}
.cart_clos>span{
display: flex;
flex-flow: column;
}
.cart_clos .cart_cheall{
flex: 1;
text-align: center;
}
.cart_clos .cart_cheall .cart_check{
width: 1rem;
margin: 0 auto;
border-radius: 0.2rem;
}
/*全选-图片*/
.cart_cheallimg02{
display: none;
}
.cart_clos .cart_change{
flex: 6;
text-align: right;
padding-right: 2%;
}
.cart_clos .cart_change .cart_chaone{
color: #d1021c;
font-weight: 600;
}
.cart_clos .cart_change .cart_chatwo{
color: #b6b6b6;
font-weight: 600;
}
.cart_clos .cart_change .cart_ensh{
width: 50%;
padding: 0.5rem 0;
background: #444444;
color: #ffffff;
font-size: 1rem;
text-align: center;
border-radius: 0.3rem;
margin-left: 50%;
display: none;
}
.cart_clos .cart_price{
flex: 2;
padding: 1.5rem 0;
background: #d1021c;
color: #ffffff;
font-size: 1rem;
text-align: center;
border-radius: 0.3rem;
}
.cart_clos .cart_dele{
flex: 2;
padding: 1.5rem 0;
background: #d1021c;
color: #ffffff;
font-size: 1rem;
text-align: center;
border-radius: 0.3rem;
display: none;
}
.cart_cheallimg01 img,.cart_cheallimg02 img{
width: 2rem!important;
}


</style>
