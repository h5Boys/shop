<template>
    <div>

      <div class="clearing_per">
        <div class="clearing_perp01">
          <i class="iconfont icon-yibi" id=""></i>
        </div>
        <div class="clearing_perp02">
          <p><span class="names">小李</span><span class="phones">15709226666</span></p>
          <p class="dresss">北京市 东城区 东四北大街58号</p>
          <p class="clearing_elsdre" id="clearing_elsdre">其他地址<i class="iconfont icon-arrow-right" id="icon-arrow-right"></i></p>
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


  /*个人信息、地址等*/
  .clearing_per{
    width: 100%;
    padding: 0rem 0.5rem;
    box-sizing: border-box;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    font-size: 0.8rem;
    background-color: #ffffff;
    background-image: url(../../assets/images/img_clearing/bg_01.png);
    background-position: bottom;
    background-repeat: repeat-x;
  }
  .clearing_per .clearing_perp01{
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    text-align: center;
  }
  .clearing_per .clearing_perp01>i{
    font-size: 1.6rem;
    margin-bottom: 50%;
  }
  .clearing_per .clearing_perp02{
    flex: 7;
  }
  .clearing_per .clearing_perp02>p{
    width: 100%;
  }
  .clearing_per .clearing_perp02>p:nth-of-type(1){
    display: flex;
    justify-content: space-between;
  }
  .clearing_per .clearing_perp02>p:nth-of-type(2){
    text-align: left;
  }
  .clearing_per .clearing_perp02>p:nth-last-of-type(1){
    display: flex;
    justify-content: flex-end;
    color: #ff0000;
    font-size: 0.6rem;
    font-weight: 600;
  }
  .icon-arrow-right{
    margin-top: 0rem;
  }

</style>
