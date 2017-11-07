var tabsSwiper = new Swiper('.swiper-container',{
    speed:500,
    onSlideChangeStart: function(){
        $('.tabs .active').removeClass('active');
        $('.tabs a').eq(tabsSwiper.activeIndex).addClass('active')
    }
});
$('.tabs a').on('touchstart mousedown',function(e){
    e.preventDefault();
    $('.tabs .active').removeClass('active');
    $(this).addClass('active');
    tabsSwiper.swipeTo( $(this).index() )
});
$('.tabs a').click(function(e){
    e.preventDefault()
});
function ShowCountDown(day,divname) {
    var now = new Date();
    var endDate = new Date(day);
    var leftTime=endDate.getTime()-now.getTime();
    var leftsecond = parseInt(leftTime/1000);
    var day1=Math.floor(leftsecond/(60*60*24));
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
    var cc = document.getElementById(divname);
    cc.innerHTML = hour+"小时"+minute+"分"+second+"秒";
}
window.setInterval(function(){
    ShowCountDown(1,'timer');
}, 1000);



