
var mySwiper = new Swiper ('.swiper-container1', {
    // direction: 'vertical',//是否垂直
    loop: true,//是否可以循环拖动
    autoplay:2000,//是否自动播放
    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',

})

var mySwiper = new Swiper ('.swiper-container2', {
    slidesPerView: 0.7,
    paginationClickable: true,
    // spaceBetween:10,
    freeMode: true,
    // loop:true,
    calculateHeight:true,
    roundLengths:true,
    cssWidthAndHeight:true,
    visiblilityFullfit:true
})

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
