
//促销活动弹出框
$(".row.saleEvent").click(function () {
    $(".saleEventSlide").slideToggle("fast");
});

//footer收藏
var count=0;
$(".footer_item.favor").click(function () {
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


//关闭购物车弹窗
$(".close").click(function () {
    $(".goodsCartBox").slideToggle("fast");
});
$(".goodsAddBtn").click(function () {
    $(".goodsCartBox").slideToggle("fast");
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