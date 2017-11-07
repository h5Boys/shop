<template>
  <div>
    <goods-cart_header></goods-cart_header>
    <goods-cart-section></goods-cart-section>
    <goods-list_favor :reList="recommendList"></goods-list_favor>
    <goods-cart-box :rList="recommendList"></goods-cart-box>
    <footer-common></footer-common>
  </div>
</template>

<script type="text/ecmascript-6">

import goodsCart_header from '../components/goodsCart/goodsCart_header.vue'
import goodsCartSection from '../components/goodsCart/goodsCartSection.vue'
import goodsList_favor from '../components/goodsCart/goodsList_favor.vue'
import goodsCartBox from '../components/goodsDetail/goodsCartBox.vue'
import footerCommon from '../components/common/foot.vue'
import getGoodsList from '../fetch/ShopService'

export default {
  data(){
    return {
      recommendList: []
    }
  },
  components:{
    goodsCart_header,
    goodsCartSection,
    goodsList_favor,
    goodsCartBox,
    footerCommon
  },
  methods: {
    initData:function () {
      getGoodsList.getShopCartListByUser((data) => {
        this.recommendList = data;
        console.log(data);
      })
    }
  },
  created: function () {
    this.initData()
  },
  mounted(){
    var that = this;
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
//弹出、关闭购物车弹窗
    $(".close").live("click",function () {
      $(".goodsCartBox").slideToggle("fast");
    });
    $(".goodsCartBtn").live("click",function () {
      $(".goodsCartBox").slideToggle("fast");
      $("#goodsNum").val(1);

      //带着当前ID从数据库获取响应商品信息
      var _index = $(".goodsCartBtn").index(this);
      var goodsId = that.recommendList[_index]["_id"];
//      localStorage.setItem("id",goodsId);
        that.$http({
          method:'GET',
          url:'http://10.35.166.13:3000/tasks/api/:goodsapi',
          data:{'id':goodsId}
        }).then(function(goodsData){

          console.log(goodsData.data);
//            console.log(goodsData.data.data);
          console.log(goodsId);

        })
    });

// 加入购物车
    $(".goodsCartBox_goodsAdd").click(function () {
      var length = $(".goodsCartBox_goodsDetail .selected").length;
      if(length==2){
        $(".empty").hide();
        $(".goodsCartBox").hide();
        $(".goodsCartList").show();
        $(".goodsCartList").append("<div class=\"goodsCartList_item\">\n" +
          "            <div class=\"goodsCheck\">\n" +
          "                <input type=\"checkbox\" class=\"goodsChecked\" checked>\n" +
          "            </div>\n" +
          "            <a class=\"goodsItem\">\n" +
          "                <div class=\"goodsItem_img\">\n" +
          "                    <img src=\"images/img_yxz/025f0b1f62805ddeb8773c6e050965a9ad.PNG\" alt=\"\">\n" +
          "                </div>\n" +
          "                <div class=\"goodsItem_info\">\n" +
          "                    <div class=\"goodsItem_info_top\">\n" +
          "                        <h3 class=\"info_name\">PUMA Clyde Moon Jungle NATUREL 低帮休闲鞋</h3>\n" +
          "                        ×<span class=\"info_num\">"+$("#goodsNum").val()+"</span>\n" +
          "                    </div>\n" +
          "                    <div class=\"goodsItem_info_center\">\n" +
          "                        颜色：<span class=\"info_color\">多色-小牛皮原色</span>\n" +
          "                        尺码:<span class=\"info_size\">37码</span>\n" +
          "                    </div>\n" +
          "                    <div class=\"goodsCartList_num\">\n" +
          "                        <span>数量</span>\n" +
          "                        <form class=\"calculate_forms\" action=\"\">\n" +
          "                            <span class=\"cartListCalculate subtract\">-</span>\n" +
          "                            <input class=\"cartListNum\" type=\"text\" value=\"1\">\n" +
          "                            <span class=\"cartListCalculate add\">+</span>\n" +
          "                        </form>\n" +
          "                    </div>\n" +
          "                    <div class=\"goodsItem_info_bottom\">￥<span class=\"info_price\">839</span></div>\n" +
          "                </div>\n" +
          "\n" +
          "            </a>\n" +
          "        </div>");

        $(".goodsList_favor").css("marginBottom","1.1rem");
        $(".cartListNum").each(function () {
          $(this).val($(this).parents(".goodsCartList_num").siblings(".goodsItem_info_top").find(".info_num").text());
        });
        $(".allPriceNum").text(cal());
      }else{
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
//购物车清单功能
    $(".cartListCalculate.subtract").live("click",function () {
      var n = $(this).siblings(".cartListNum").val();
      n--;
      if(n<1){
        $(this).siblings(".cartListNum").val(1);
      }else{
        $(this).siblings(".cartListNum").val(n);
      }
      $(this).parents(".goodsCartList_num").siblings(".goodsItem_info_top").find(".info_num").text($(this).siblings(".cartListNum").val());
      $(".allPriceNum").text(cal());
    });
    $(".cartListCalculate.add").live("click",function () {
      var n =  $(this).siblings(".cartListNum").val();
      n++;
      $(this).siblings(".cartListNum").val(n);
      $(this).parents(".goodsCartList_num").siblings(".goodsItem_info_top").find(".info_num").text($(this).siblings(".cartListNum").val());
      $(".allPriceNum").text(cal());
    });
//购物车计算函数
    function cal() {
      var length = $(".goodsCartList_item").length;
      var sumPrice = 0;
      for(var nn=0;nn<length;nn++){
        var perPrice = $(".info_price").eq(nn).text();
        var num = $(".info_num").eq(nn).text();
        var goodsPrice = perPrice*num;
        sumPrice = sumPrice + goodsPrice;
      }
      return sumPrice;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/goodsCart.css';
</style>
