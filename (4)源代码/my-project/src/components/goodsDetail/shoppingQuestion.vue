<template>
  <section class="shoppingQuestion">
    <div class="tabs">
      <a href="#" class="tabBtn active">晒单评价(5)</a> |
      <a href="#" class="tabBtn">购买咨询(2)</a>
    </div>
    <div class="swiper-container swiper-container3">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="content-slide">
            <a href="#" class="menuItem">
              <div class="customMsg">
                <img src="../../assets/images/img_yxz/custom.png" alt="">
                <span class="customName">人***Q</span>
              </div>
              <p>很好，超级喜欢这个颜色。</p>
              <img class="menuPic" src="../../assets/images/img_yxz/792528200.jpg" alt="">
              <p class="time">2017-10-24 11:04:06</p>
            </a>

          </div>
        </div>
        <div class="swiper-slide">
          <div class="content-slide">
            <div class="questionItem">
              <div class="item Q">
                <span class="questionLabel">Q</span>
                <P><span>脏了怎么清洁</span> <span class="time">2017-10-22 15:16:24</span> </P>
              </div>
              <div class="item A">
                <span class="questionLabel">A</span>
                <P>用柔软的潮湿抹布或专业洗涤剂轻拭，切勿用刷子猛刷，避免浸水、暴晒及火烤；洗后避免阳光直射。清洗时不可使用漂白剂,避免与锐利物、化学品接触.维持两双以上可替换的鞋子，让鞋子轮流休息。</P>
              </div>
            </div>
            <div class="questionItem">
              <div class="item Q">
                <span class="questionLabel">Q</span>
                <P><span>平常38码，要买什么码</span> <span class="time">2017-10-21 21:18:35</span> </P>
              </div>
              <div class="item A">
                <span class="questionLabel">A</span>
                <P>向您推荐38码供参考，建议您用尺子测量下“脚跟到脚尖的直线长度”，再参照此款商品“尺码信息”选择适合您的尺码。</P>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="readMore">
      <a href="#">查看更多 ></a>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">

  export default {
    props:['item'],
    mounted(){
      var tabsSwiper = new Swiper('.swiper-container3',{
        speed:500,
        onSlideChangeStart: function(){
          $(".tabs .active").removeClass('active');
          $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
        }
      });
      $(".tabs a").on('touchstart mousedown',function(e){
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        $(this).addClass('active');
        tabsSwiper.slideTo( $(this).index() );
      });
      $(".tabs a").click(function(e){
        e.preventDefault();
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
