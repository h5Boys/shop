<template>
    <header>
      <div class="cart_tit">
        <span class="cart_maintit">购物车</span>
        <span class="cart_edit" id="cart_edit">编辑</span>
        <span class="cart_selend" id="cart_selend">完成</span>
      </div>
      <div class="cart_free">
        <span>购物满299.00已免运费（不含顺丰速运）</span>
        <span><i class="iconfont icon-arrow-right" id=""></i></span>
      </div>

    </header>

</template>

<script>
export default {

  mounted(){



  }
}
</script>

<style scoped>


header{
  width: 100%;
  position: fixed;
  z-index: 10;
  font-size: 1.2rem;
}
.cart_tit{
  width: 100%;
  color: #ffffff;
  background: #4f4138;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.cart_tit .cart_maintit{
  flex: 1;
  font-size: 2rem!important;
  text-align: center;
  text-indent: 10%;
}
.cart_tit .cart_edit{
  width: 10%;
  font-size: 0.6rem;
  line-height: 3rem;
}
.cart_tit .cart_selend{
  width: 10%;
  font-size: 0.6rem;
  line-height: 3rem;
  display: none;
}
.cart_free{
  width: 100%;
  background: #ff7f81;
  font-size: 0.4rem;
  color: #ffffff;
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

</style>
