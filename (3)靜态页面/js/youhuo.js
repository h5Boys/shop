// ========轮播图效果
    var swiper = new Swiper('.tabone', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay:1000,
    });

    var swiper = new Swiper('.tabtwo', {
        pagination: '.swiper-pagination',
         slidesPerView: 3.5,
        paginationClickable: true,
        loop:true,
    });

    var swiper = new Swiper('.tabthree', {
        pagination: '.swiper-pagination',
         slidesPerView: 2.5,
        paginationClickable: true,
        loop:true,
    });

//===========顶部滚动
    $(window).scroll(function(){
        if($(window).scrollTop()>60){
            $(".header").addClass("active");
        }else{
            $(".header").removeClass("active");
        }
     })


// ===========侧边隐藏内容
  
    // $(".sidebutton").click(function(){
    //     if($(".talcontent").css("left","0")){
    //         $(".talcontent").animate({left:"80%"});
    //         $(".sideContent").animate({left:"0"});
    //     }else if($(".talcontent").css("left","80%")){
    //         $(".talcontent").animate({right:"0"});
    //         $(".sideContent").animate({left:"-80%"});
    //     }
    // })     
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


// ===========返回顶部
// 控制图标显示隐藏
     $(window).scroll(function(){
       var scr=$(window).scrollTop();
       if(scr>400){
            $(".fanhui").css("display","block");

        console.log(scr)
       }else{
            $(".fanhui").css("display","none");
       }
     })
//返回顶部
     $(".fanhui").live("click",function(){
       var sc=$(window).scrollTop();
       $('body,html').animate({scrollTop:0});
     })



// 底部导航栏变色

$('footer a').click(function () {
    $(this).siblings().removeClass('actives');
    $(this).addClass('actives');
})

$('.goods_list i.icon-gengduo').click(function(event) {
    $(this).parents('.imgs_dec').prev('.imgs').find('.zhao').toggle();
});


$('.goods_list i.icon-gengduo').click(function(event) {
    $('.goods_list').find('.zhao').hide();
    $(this).parents('.imgs_dec').prev('.imgs').find('.zhao').show();
});