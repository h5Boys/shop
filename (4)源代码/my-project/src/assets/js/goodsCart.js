
//遮罩层
$(".item_img").on("click",function () {
    // $(".item_img_zzc_box").hide();
    $(this).find(".item_img_zzc_box").fadeToggle();
})

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
$(".close").click(function () {
    $(".goodsCartBox").slideToggle("fast");
});
$(".goodsCartBtn").click(function () {
    $(".goodsCartBox").slideToggle("fast");
    $("#goodsNum").val(1);
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
        // $(".info_num").text($("#cartListNum").val());
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

//单选、复选、反选
//jQuery插件
//单选、复选、反选
//jQuery插件
jQuery.fn.extend(
  {
    //根据传入的值，决定是选择，还是取消
    "checkAll":function(isCheck){
      this.each(function(){
        this.checked = isCheck;
      });
    },
    //反选
    "notCheck":function(){
      this.each(function(){
        this.checked = !this.checked;
      });
    }
  }
);
$(function(){
  $("#allChecked").live("click",function(){
    $(":checkbox").checkAll($("#allChecked").attr("checked"));
  });
  //反向控制的思路：
  //点击每一个复选框时，需要遍历所有的复选框，看看是否有没选中的。
  $(".goodsChecked").live("click",function(){
    var allChecked = true;
    for(var i=0;i<$(".goodsChecked").length;i++){
      if(!$(".goodsChecked")[i].checked){
        allChecked = false;
        break;
      }
    }
    $("#allChecked").attr("checked",allChecked);
  });
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
        console.log(goodsPrice);
        sumPrice = sumPrice + goodsPrice;
    }
    return sumPrice;
}

