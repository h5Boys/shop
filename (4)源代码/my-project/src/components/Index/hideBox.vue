<template>
  <div>
    <div class="sideContent">
      <div class="sideContent_up">
        <a href="javascript:;">MEN</a>
        <a href="javascript:;">WOMEN</a>
      </div>
      <div class="sideContent_down">
        <router-link to="/classify">
        <ul>
          <li><h5>限定发售 LIMITED</h5><i class="iconfont icon-arrow-right" style="font-size: 24px;"></i></li>
          <li><h5>潮流优选 BLK</h5><i class="iconfont icon-arrow-right" style="font-size: 24px;"></i></li>
          <li><h5>激价 SALE</h5><i class="iconfont icon-arrow-right" style="font-size: 24px;"></i></li>
          <li><h5>潮童 KIDS</h5><i class="iconfont icon-arrow-right" style="font-size: 24px;"></i></li>
        </ul>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
//  import "../../assets/js/jquery-1.8.3.min"
//  import "../../assets/js/youhuo.js"
  export default {
        mounted(){

////
          $(".sidebutton").toggle(
            function(){
              $(".talcontent").animate({left:"80%"});
              $(".sideContent").animate({left:"0"});
              $(".active").animate({left:"80%"});
              $("footer").animate({left:"80%"});
            },
            function(){

              $(".talcontent").animate({left:"0"});
              $(".sideContent").animate({left:"-80%"});
              $(".active").animate({left:"0"});
              $("footer").animate({left:"0"});
            }
          )
//          $(".sidebutton").live("click",function(){
//            if($(".talcontent").css("left","0")){
//              $(".talcontent").animate({left:"80%"});
//              $(".sideContent").animate({left:"0"});
//            }else if($(".talcontent").css("left","80%")){
//              $(".talcontent").animate({right:"0"});
//              $(".sideContent").animate({left:"-80%"});
//            }
//          })

        }

  }


</script>
<style scoped>
  @import "../../assets/css/index.css";
  ul li {
    color: #000;
  }

</style>
