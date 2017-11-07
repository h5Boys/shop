$(function () {
    //手机邮箱号
    $('.phone').on('blur',function () {
        if(checkAll('userCallNum',$('.phone')[0].value)==true&&checkAll('userCallNum',$('.phone')[0].value)){
            $('.dui').css("display","block");
            $('.cuo').css("display","none");
        }else{
            $('.cuo').css("display","block");
            $('.dui').css("display","none");

        }if($('.phone')[0].value==""){
            $('.cuo').css("display","block");
            $('.dui').css("display","none");
        }
    });
    $('.phone').on('focus',function () {
        if($('.phone')[0].value==""){
            $('.cuo').css("display","block");
            $('.dui').css("display","none");
        }
    });
});

$('buttom').on('click',function () {
    if(checkAll('userCallNum',$('.phone')[0].value)==true&&checkAll('userCallNum',$('.phone')[0].value)){
        //记录cookie
        setCookie("userPhone",$(".password").val(),1)
        setCookie("userPass",$(".phone").val(),1)
        location.href="mine.html";
    }else{
        alert("用户名或者密码错误，注册失败！");
    }
});

function setCookie(key,sValue,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie=key+'='+escape(sValue)+'; expires='+date.toGMTString();

}
