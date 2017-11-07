//第一层选项卡
$('header a').click(function(){
    $(this).css('borderBottom','0.02rem solid #fff').siblings().css('borderBottom','0')
 });
$('.a_01').click(function(){
    $('.sectionCount').animate({
        left: '0'
    },300)
})
$('.a_02').click(function(){
    $('.sectionCount').animate({
        left: '-3.75rem'
    },300)
})
$('.a_03').click(function(){
    $('.sectionCount').animate({
        left: '-7.5rem'
    },300)
})
//品类
$('.pinglei_header li span').click(function(){
    $(this).css('color','#696969').parent().siblings().find("span").css('color','#b0b0b0')
})
$('.left-silder li').click(function(){
    $(this).css({
        borderLeft: '0.04rem solid #444',
        backgroundColor: '#fff'
    })
    $(this).siblings().css({
        borderLeft: '0',
        backgroundColor: '#f0f0f0'
    })
})
$(".sp-01").click(function(){
    $('.men').show().siblings().hide();

})
$(".sp-02").click(function(){
    $('.women').show().siblings().hide();
})
$(".sp-03").click(function(){
    $('.kids').show().siblings().hide();
})
$('.left-silder li:nth-child(1)').click(function(){
    $('.shangyi').show().siblings('div').hide()
})
$('.left-silder li:nth-child(2)').click(function(){
    $('.kuzi').show().siblings('div').hide()
})
$('.left-silder li:nth-child(3)').click(function(){
    $('.xiexue').show().siblings('div').hide()
})
$('.left-silder li:nth-child(4)').click(function(){
    $('.baolei').show().siblings('div').hide()
})
$('.left-silder li:nth-child(5)').click(function(){
    $('.fupei').show().siblings('div').hide()
})
$('.left-silder li:nth-child(6)').click(function(){
    $('.meizhuang').show().siblings('div').hide()
})
$('.left-silder li:nth-child(7)').click(function(){
    $('.shuma').show().siblings('div').hide()
})
$('.left-silder li:nth-child(8)').click(function(){
    $('.wanju').show().siblings('div').hide()
})
$('.left-silder li:nth-child(9)').click(function(){
    $(location).attr('href', '#');
})
$('.left-silder li:nth-child(10)').click(function(){
    $('.neiyi').show().siblings('div').hide()
})
$('.left-silder li:nth-child(11)').click(function(){
    $('.chufang').show().siblings('div').hide()
})
$('.left-silder li:nth-child(12)').click(function(){
    $('.sports').show().siblings('div').hide()
})
$('.left-silder li:nth-child(13)').click(function(){
    $('.wenju').show().siblings('div').hide()
})
$('.left-silder li:nth-child(14)').click(function(){
    $('.dianqi').show().siblings('div').hide()
})
$('.left-silder li:nth-child(15)').click(function(){
    $('.qunlei').show().siblings('div').hide()
})
//品牌
// window.onload=function(){
//     var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     var uls=document.getElementById('right_silder');
//     for(var i=0;i<arr.length;i++){
//         var lis=document.createElement('li');
//         lis.innerHTML=arr[i];
//         uls.appendChild(lis);
//
//     }
//     $('#right_silder li').click(function(){
//         var indexs=$(this).index();
//         var ulsCount=$('.pinpaiBox').children();
//          var scops= $(ulsCount[indexs]).offset().top;
//         var fscops= $('.menCount').offset().top;
//         // var scrolls=$('.menCount').scrollTop();
//         // var gfscops= $('.menbox').offset().top;
//          // console.log(scops);
//         $('.menCount').animate({
//             top:fscops-scops
//         })
//     })
// }
$('.ul_04 li').click(function(){
    $(this).css('color','#7f7f7f').siblings().css('color','#b4b4b4')
})
$('.li_01').click(function(){
    $('.pinpaiBox').show().next().hide().next().hide()
    $('#right_silder').show()
})
$('.li_02').click(function(){
    $('.newShopuls').show().next().hide().prev().prev().hide()
    $('#right_silder').hide()
})
$('.li_03').click(function(){
    $('.hotShop').show().prev().hide().prev().hide()
    $('#right_silder').hide()
})
$('.sp-04').click(function(){
    $('.menbox').show().next().hide().next().hide();
})
$('.sp-05').click(function(){
    $('.womenbox').show().prev().hide().next().next().hide();
})
$('.sp-06').click(function(){
    $('.kidsbox').show().prev().hide().prev().hide();
})
//轮播图
var mySwiper = new Swiper (' .swiper-container', {
    loop: true,
    autoplay:3000,
    pagination: ' .swiper-pagination'
});
var caseSwiper = new Swiper (' .case', {
    loop: true,
    autoplay:2000,
    pagination: '.cass'
});
var bannerSwiper = new Swiper (' .banner', {
    loop: true,
    autoplay:2000,
    pagination: '.bannar'
});
// var scops=$('.ul_04').offset();
// console.log(scops.top);
