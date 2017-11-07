<template>
<div>
  <div class="clearing_fot">
    <p><span>实付金额：</span>￥<span>412.72</span></p>
    <p class="clearing_sub">确认</p>
  </div>
  <div class="clearing_sedre" id="clearing_sedre">
    <span>送至：</span>
    <span id="dresszon">北京市 东城区 东四北大街58号</span>
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


  /*底部*/
  .clearing_fot{
    width: 100%;
    background: #ffffff;
    position: fixed;
    /*bottom: 2rem;*/
    bottom: 0rem;
    z-index: 10;
    padding: 0 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    border-top: 1px solid #bababa;
    border-bottom: 1px solid #bababa;
  }
  .clearing_fot p{
    color: #ff0000;
  }
  .clearing_fot p:nth-of-type(1){
    font-weight: 600;
  }
  .clearing_fot p span:nth-of-type(1){
    color: #000000;
  }
  .clearing_fot .clearing_sub{
    padding: 0.5rem 1.5rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    background: red;
    border-radius: 0.2rem;
    color: #ffffff;
  }
  .clearing_sedre{
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #5c5a5a;
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    font-size: 0.6rem;
    color: #ffffff;
    z-index: 8;
    transition: all 0.5s;
  }


</style>
