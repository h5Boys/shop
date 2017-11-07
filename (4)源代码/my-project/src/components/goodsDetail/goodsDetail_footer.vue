<template>
  <footer>
    <div class="footer_item">
      <i class="icon iconfont icon-gouwuche1"></i>
      <span>购物车</span>
      <span class="goodsCartNum">1</span>
    </div>
    <div style="padding-top: 0.04rem;" class="footer_item">
      <img style="margin-bottom: 0.02rem;" src="../../assets/images/img_yxz/店铺.png" alt="">
      <span>品牌店铺</span>
    </div>
    <div class="footer_item favor">
      <i class="icon iconfont icon-aixin gray"></i>
      <i class="icon iconfont icon-aixin red"></i>
      <span>收藏</span>
    </div>
    <div class="footer_item addBtn">
      <span class="goodsAddBtn">加入购物车</span>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">

  export default {
    mounted(){
      var count=0;
      $(".footer_item.favor").live("click",function () {
        count++;
        if(count%2==0){
          $(this).find(".icon.red").css("display","none");
          $(this).find(".icon.gray").css("display","block");
          $(this).find("span").text("收藏");
        }else{
          $(this).find(".icon.red").css("display","block");
          $(this).find(".icon.gray").css("display","none");
          $(this).find("span").text("已收藏");
        }

      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
