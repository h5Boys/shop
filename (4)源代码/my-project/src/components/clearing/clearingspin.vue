<template>
    <div>
      <div class="clear_spin">
        <div class="clear_spip clear_spip1">
          <img class="clearing_ptimg" src="../../assets/images/img_clearing/cartpr02.jpg" alt="">
        </div>
        <div class="clear_spip clear_spip2">
          <span>MLBHpmerun Battle棒球英豪系列男女潮流短袖T恤</span>
          <p>颜色：<span>白色</span>&nbsp;尺码：<span>S</span></p>
        </div>
        <div class="clear_spip clear_spip3">
          <p>￥<span>469.00</span></p>
          <p>x<span>1</span></p>
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

  /*要购买的商品*/
  .clear_spin{
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
    background: #ffffff;
    display: flex;
    margin: 0.3rem 0;
  }
  .clear_spin .clear_spip{
    flex: 1;
    font-size: 0.1rem;
  }
  .clear_spin .clear_spip1 img{
    width: 100%;
    height: 100%;
  }
  .clear_spin .clear_spip2{
    flex: 2;
    box-sizing: border-box;
    margin-left: 2%;
  }
  .clear_spin .clear_spip2 span{
    display: inline-block;
    margin: 0;
  }
  .clear_spin .clear_spip2 p{
    color: #999999;
    font-size: 0.6rem;
  }
  .clear_spin .clear_spip3{
    text-align: right;
  }
  .clear_spin .clear_spip3 p:nth-of-type(1){
    color: #ff0000;
    font-weight: 600;
  }
  .clear_spin .clear_spip3 p:nth-of-type(2){
    color: #999999;
    font-size: 0.6rem;
  }
</style>
