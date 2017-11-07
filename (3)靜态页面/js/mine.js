$(function () {
    $('.optimizeList .monyList i').on('click',function () {
        $(this).parents().siblings('.showImg').find('.optimizeImg').fadeToggle('3000')
    });
    $('.showImg .liImg').on('click',function () {
        $(this).siblings('.optimizeImg').hide();
        $(this).siblings('.optimizeImg').fadeToggle('3000')
    });
    $('.showImg .optimizeImg').on('click',function () {
        $(this).fadeToggle('3000')
    });
});