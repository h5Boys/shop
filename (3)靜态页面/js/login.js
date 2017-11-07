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
//	密码
    $('.password').on('blur',function () {
        if(checkAll('userPass',$('.password')[0].value)==true||checkAll('userPass',$('.password')[0].value)){
            $('.yanj').css("display","block");
            $('.yna').css("display","none");

        }else{
            $('.yna').css("display","block");
            $('.yanj').css("display","none");
        }if($('.password')[0].value==""){
            $('.yna').css("display","block");
            $('.yanj').css("display","none");

        }
    });
    $('.password').on('focus',function () {
        if($('.password')[0].value==""){
            $('.yna').css("display","block");
            $('.yanj').css("display","none");
        }
    });

//	当点击登录按钮时
    $('buttom').click(function(){
        if(checkAll('userCallNum',$('.phone')[0].value)==true&&checkAll('userCallNum',$('.phone')[0].value)){
            //记录cookie
            setCookie("userPhone",$(".password").val(),1)
            setCookie("userPass",$(".phone").val(),1)
            location.href="mine.html";
        }else{
            alert("用户名或者密码错误，登录失败！");
        }

        // $.ajax({
        //     type:"POST",
        //     url:"blue.php",
        //     data:{
        //         "userPhone":$(".phone").val(),
        //         "userPass":$('.password').val()
        //     },
        //     success:function(data){
        //         if(str=="1"){
        //             //记录cookie
        //             setCookie("userPhone",$("#password").val(),1)
        //             setCookie("userPass",$("#phone").val(),1)
        //             location.href="index.html";
        //         }else{
        //             alert("用户名或者密码错误，登录失败！");
        //         }
        //     }
        // });

    });
});

function setCookie(key,sValue,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie=key+'='+escape(sValue)+'; expires='+date.toGMTString();

}