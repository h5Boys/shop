<template>

  <!--<div class="page_clearing">-->
  <router-link to="/">
    <div class="clearing_tit">
      <!--<span onclick="window.open('cartfree.html','_self')">く</span>-->
      <span>く</span>
      <span>确认订单</span>
    </div>
  </router-link>



</template>

<script>
export default {

  mounted(){



  }
}
</script>

<style scoped>
  /*顶部*/
  .clearing_tit{
    width: 100%;
    color: #ffffff;
    background: #4f4138;
    padding: 0.5rem;
    z-index: 10;
    display: flex;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
  }
  .clearing_tit span{
    margin-right: 5%;
    font-size: 1.2rem;
  }


</style>
