<template>
  <!--隐藏的选择地址-->
  <div class="clear_dress" id="clear_dress">
    <div class="clearing_to">
      <span class="clear_bac" id="clear_bac">く</span>
      <span>选择地址</span>
      <span>管理</span>
    </div>
    <div class="clear_drespar">
      <p><img class="dre_qie" src="../../assets/images/img_clearing/cartch_01.png" alt=""><img class="dre_qie02" src="../../assets/images/img_clearing/cartch_02.png" alt=""></p>
      <p>
        <span class="namesd">小李</span><br/>
        <span class="dresssd">北京市 东城区 东四北大街58号</span>
      </p>
      <p class="phonesd">15709226666</p>
    </div>
    <div class="clear_drespar">
      <p><img class="dre_qie" src="../../assets/images/img_clearing/cartch_01.png" alt=""><img class="dre_qie02" src="../../assets/images/img_clearing/cartch_02.png" alt=""></p>
      <p>
        <span class="namesd">多弗朗明哥</span><br/>
        <span class="dresssd">上海市 虹口区 飞虹路518号</span>
      </p>
      <p class="phonesd">18710012629</p>
    </div>
    <div class="clear_drespar">
      <p><img class="dre_qie" src="../../assets/images/img_clearing/cartch_01.png" alt=""><img class="dre_qie02" src="../../assets/images/img_clearing/cartch_02.png" alt=""></p>
      <p>
        <span class="namesd">阿凯</span><br/>
        <span class="dresssd">西安市 高新区 唐延路005号</span>
      </p>
      <p class="phonesd">18215162246</p>
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



  /*隐藏的选择地址*/
  .clear_dress{
    width: 100%;
    height: 100%;
    background: #edebeb;
    z-index: 30;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    font-size: 0.6rem;
  }
  .clear_dress .clear_drespar{
    width: 93%;
    margin-left: 5%;
    padding: 0.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid #9f9f9f;
    display: flex;
    justify-content: space-between;
  }
  .clear_dress .clear_drespar:nth-of-type(1){
    margin-top: 2rem;
  }
  .clear_dress .clear_drespar p{
    flex: 1;
    text-align: left;
  }
  .clear_dress .clear_drespar p:nth-of-type(1){
    flex: 2;
    display: flex;
    align-items: center;
  }
  .clear_dress .clear_drespar p:nth-of-type(1) img{
    width: 1rem;
    height:1rem;
    margin:0 auto;
  }
  .clear_dress .clear_drespar p:nth-of-type(1) .dre_qie02{
    display: none;
  }
  .clear_dress .clear_drespar p:nth-of-type(2){
    flex: 7;
  }
  .clear_dress .clear_drespar p:nth-of-type(2) span{
    /*line-height: 1.6rem;*/
  }
  .clear_dress .clear_drespar p:nth-of-type(2) span:nth-of-type(2){
    color: #a5a6a2;
  }
  .clear_dress .clear_drespar p:nth-of-type(3){
    flex: 3;
  }
  .clear_dress .clearing_to{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #3a3a3a;
    color: #ffffff;
  }
  .dre_qie,.dre_qie02{
    width: 1.5rem;
    height: 1.5rem;
  }

</style>
