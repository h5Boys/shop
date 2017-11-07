

function $q(id){
	return document.getElementById(id);
}


/*
$("#clearing_payti").mousedown(function(){
  	$("#clearing_paytt").slideToggle();
});
$("#clearing_payti02").mousedown(function(){
  	$("#clearing_paytt02").slideToggle();
});
$("#clearing_payti03").mousedown(function(){
  	$("#clearing_paytt03").slideToggle();
});
*/
$("#clearing_payti").toggle(
  function () {
    $("#clearing_paytt").slideToggle();
    $q("clearing_porimg").style.transform="rotate(-180deg)";
  },
  function () {
    $("#clearing_paytt").slideToggle();
    $q("clearing_porimg").style.transform="rotate(0deg)";
  }
);
$("#clearing_payti02").toggle(
  function () {
    $("#clearing_paytt02").slideToggle();
    $q("clearing_porimg02").style.transform="rotate(-180deg)";
  },
  function () {
    $("#clearing_paytt02").slideToggle();
    $q("clearing_porimg02").style.transform="rotate(0deg)";
  }
);
$("#clearing_payti03").toggle(
  function () {
    $("#clearing_paytt03").slideToggle();
    $q("clearing_porimg03").style.transform="rotate(-180deg)";
  },
  function () {
    $("#clearing_paytt03").slideToggle();
    $q("clearing_porimg03").style.transform="rotate(0deg)";
  }
);
/*
$("#section_elect").mousedown(function(){
  	$("#section_electtext").slideToggle();
});
*/


/*----------写法？？？？？--------------*/
$("#btn_cha01").toggle(
  function () {
    $("#btn_chaimg01").animate({left: '+60%'}, 100);
    $q("btn_cha01").style.background="#0af904";
  },
  function () {
    $("#btn_chaimg01").animate({left: '+0'}, 100);
    $q("btn_cha01").style.background="#5e6161";
  }
);
$("#btn_cha02").toggle(
  function () {
    $("#btn_chaimg02").animate({left: '+60%'}, 100);
    $q("btn_cha02").style.background="#0af904";
  },
  function () {
    $("#btn_chaimg02").animate({left: '+0'}, 100);
    $q("btn_cha02").style.background="#5e6161";
  }
);
$("#btn_cha03").toggle(
  function () {
    $("#btn_chaimg03").animate({left: '+60%'}, 100);
    $q("btn_cha03").style.background="#0af904";
  },
  function () {
    $("#btn_chaimg03").animate({left: '+0'}, 100);
    $q("btn_cha03").style.background="#5e6161";
  }
);
/*-------------------------*/





/*------------------底部灰色部分（送至：xxx xxx）的消失与重现-------------------*/
window.onscroll=function(){
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
	if(scrollTop>=10){
		document.getElementById("clearing_sedre").style.bottom="2.7rem";
	}else{
		document.getElementById("clearing_sedre").style.bottom="0";
	}

}



/*---------------地址选择页面切换------*/

$q("clearing_elsdre").onclick=function(){
	$q("clear_dress").style.display="block";
}
$q("clear_bac").onclick=function(){
	$q("clear_dress").style.display="none";
}
/*---------------地址选择的试验=============================------*/
document.getElementsByClassName("dre_qie")[0].style.display="none";
document.getElementsByClassName("dre_qie02")[0].style.display="block";
var n=document.getElementsByClassName("clear_drespar");
for(var i=0;i<n.length;i++){
	n[i].onclick=(function(i){
    return function() {
			$q("clear_dress").style.display="none";
			document.getElementsByClassName("names")[0].innerHTML=document.getElementsByClassName("namesd")[i].innerHTML;
			document.getElementsByClassName("phones")[0].innerHTML=document.getElementsByClassName("phonesd")[i].innerHTML;
			document.getElementsByClassName("dresss")[0].innerHTML=document.getElementsByClassName("dresssd")[i].innerHTML;
			$q("dresszon").innerHTML=document.getElementsByClassName("dresssd")[i].innerHTML;

			for(var op=0;op<document.getElementsByClassName("dre_qie").length;op++){
				document.getElementsByClassName("dre_qie")[op].style.display="block";
				document.getElementsByClassName("dre_qie02")[op].style.display="none";
			}
			document.getElementsByClassName("dre_qie")[i].style.display="none";
			document.getElementsByClassName("dre_qie02")[i].style.display="block";
    } 
	})(i);
}




//        n[i].onclick = (function(i){
//                  return function() {
//                     console.log(i);
//                  }
//        })(i);



/*------------------------支付方式的切换------------------------------*/
document.getElementsByClassName("clearing_p01")[0].style.display="none";
document.getElementsByClassName("clearing_p02")[0].style.display="block";
var n2=document.getElementsByClassName("clearing_px");
for(var j=0;j<n2.length;j++){
  n2[j].onclick=(function(j){
    return function() {
      document.getElementsByClassName("clearing_porcel")[0].innerHTML=document.getElementsByClassName("clearing_p")[j].innerHTML;

      for(var op2=0;op2<document.getElementsByClassName("clearing_p").length;op2++){
        document.getElementsByClassName("clearing_p01")[op2].style.display="block";
        document.getElementsByClassName("clearing_p02")[op2].style.display="none";
      }
      document.getElementsByClassName("clearing_p01")[j].style.display="none";
      document.getElementsByClassName("clearing_p02")[j].style.display="block";
    } 

  })(j);
}