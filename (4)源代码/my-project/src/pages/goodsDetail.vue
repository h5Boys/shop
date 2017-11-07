<template>
  <div>
    <goods-detail_header></goods-detail_header>
    <goods-swiper></goods-swiper>
    <goods-price ></goods-price>
    <shopping-question ></shopping-question>
    <shop-enter></shop-enter>
    <goods-info></goods-info>
    <recommend :reList="recommendList"></recommend>
    <goods-detail_footer></goods-detail_footer>
    <goods-cart-box></goods-cart-box>
  </div>
</template>

<script type="text/ecmascript-6">
import goodsDetail_header from "../components/goodsDetail/goodsDetail_header.vue"
import goodsSwiper from "../components/goodsDetail/goodsSwiper.vue"
import goodsPrice from "../components/goodsDetail/goodsPrice.vue"
import shoppingQuestion from "../components/goodsDetail/shoppingQuestion.vue"
import shopEnter from "../components/goodsDetail/shopEnter.vue"
import goodsInfo from "../components/goodsDetail/goodsInfo.vue"
import recommend from "../components/goodsDetail/recommend.vue"
import goodsDetail_footer from "../components/goodsDetail/goodsDetail_footer.vue"
import goodsCartBox from "../components/goodsDetail/goodsCartBox.vue"
import  getGoodsList from '../fetch/ShopService.js'

export default {
  data(){
    return {
      id:0,
      recommendList: [],
    }
  },
  components:{
    goodsDetail_header,
    goodsSwiper,
    goodsPrice,
    shoppingQuestion,
    shopEnter,
    goodsInfo,
    recommend,
    goodsDetail_footer,
    goodsCartBox
  },
  methods: {
    initData:function () {
      getGoodsList.getShopCartListByUser((data) => {
        this.recommendList = data;
        console.log(data);


        this.id=this.$route.params.id;
        console.log('id: ' + this.$route.params.id);
            localStorage.setItem("goodsId",this.id);

            var length = data.length;
            for(var n=0;n<length;n++){
              if(data[n]._id==this.id){
                alert(n);
                console.log(data[n])
                return data[n];
          }
        }


      })
    }
  },
  created: function () {
    this.initData()
  },
  mounted(){



    //购物车弹出框按钮选择
// var str= $(".goodsSelected_detail").text();
    $(".detailTag.color .selectedBtn").click(function () {
      $(".detailTag.color .selectedBtn").each(function () {
        $(this).removeClass("selected");
      });
      $(this).addClass("selected");
      $(".goodsSelected_detail").text($(this).text());
    });
    $(".detailTag.size .selectedBtn").click(function () {

      $(".detailTag.size .selectedBtn").each(function () {
        $(this).removeClass("selected");
      });
      $(".goodsSelected_detail").text($(".selected").text());

      $(this).addClass("selected");

      $(".goodsSelected_detail").text($(".goodsSelected_detail").text()+$(this).text());
    });

// 加入购物车
    $(".goodsCartBox_goodsAdd").click(function () {
      var length = $(".goodsCartBox_goodsDetail .selected").length;
      if(length==2){
        $(".empty").hide();
        $(".goodsCartBox").hide();
        $(".goodsCartList").show();
      }
    });
    $("#subtract").click(function () {
      var num = $("#goodsNum").val();
      num--;
      if(num<1){
        $("#goodsNum").val(1);
      }else {
        $("#goodsNum").val(num);
      }
    });
    $("#add").click(function () {
      var num = $("#goodsNum").val();
      num++;
      $("#goodsNum").val(num);
    });

    $(".goodsCartBox_goodsAdd").click(function () {
      $(".goodsCartNum").text($("#goodsNum").val());
      $(".goodsCartNum").show();
    });

    //弹出、关闭购物车弹窗
    $(".close").live("click",function () {
      $(".goodsCartBox").slideToggle("fast");
    });
    $(".goodsAddBtn").live("click",function () {
      $(".goodsCartBox").slideToggle("fast");
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/goodsDetail.css';
</style>
