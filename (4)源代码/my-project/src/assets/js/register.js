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

// $('.button').on('click',function () {
//     if(checkAll('userCallNum',$('.phone')[0].value)==true&&checkAll('userCallNum',$('.phone')[0].value)){
//         //记录cookie
//         setCookie("userPhone",$(".password").val(),1)
//         setCookie("userPass",$(".phone").val(),1)
//         location.href="mine.html";
//     }else{
//         alert("用户名或者密码错误，注册失败！");
//     }
// });

function setCookie(key,sValue,iDay){
    var date=new Date();
    date.setDate(date.getDate()+iDay);
    document.cookie=key+'='+escape(sValue)+'; expires='+date.toGMTString();

};
//正则开始
function checkAll(type,value){
  var reg;
  switch(type){
    case "ip": reg = ipReg();break;
    case "userName": reg = userNameReg();break;
    case "date":reg = dateReg();break;
    case "userPass":reg=userPass();break;
    case "userEmail":reg=userEmail();break;
    case "userCallNum":reg=userCallNum();break;
    case "userId":reg=userId();break;
    default:;
  }

  if(reg.test(value)){
    return true;
  }else{
    return false;
  }
}

function ipReg(){
  return /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
}

function userNameReg(){
  return /^[a-zA-Z_]\w{5,14}$/;
}

function dateReg(){
  return /^\d{4}(-|\/|\.)(0[1-9]|1[0-2])(-|\/|\.)\d{2}$/;
}
function userPass(){
  return  /^[0-9]{6,20}$/;
}
function userEmail(){
  return/^[a-zA-Z0-9]{5,12}@[A-Za-z0-9]{2,}\.(com|cn|net)$/;
}
function userCallNum(){
  return /^1[3-5][0-9]{9}$/;
}
function userId(){
  return /^[1-9]\d{5}(18|19|2[0-9])\d{2}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[0-1])\d{3}\d|x$/;
}


