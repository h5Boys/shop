
function $(id){
	return document.getElementById(id);
}


/*回到顶部------------------------------------------------------------------*/
/*$("header_backtop").onclick=function(){
		document.body.scrollTop=0;
}
*/
/*------------------------------------------------------*/
//window.onscroll=function(){
//	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
//	var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
//	/*回到顶部按钮*/
//	if(scrollTop<=100){
//		document.getElementById("header_backtop").style.display="none";
//	}else{
//		document.getElementById("header_backtop").style.display="block";
//	}

//}
//   cart_sentpross



$("cart_edit").onclick=function(){
	$("cart_edit").style.display="none";
	$("cart_selend").style.display="block";
	$("cart_chaone").style.display="none";
	$("cart_chatwo").style.display="none";
	$("cart_ensh").style.display="block";
	$("cart_price").style.display="none";
	$("cart_dele").style.display="block";
	//document.getElementsByClassName("cart_dele")[0].style.display="block";
	for(var i=0;i<document.getElementsByClassName("cart_xhsp").length;i++){
		document.getElementsByClassName("cart_xhsp")[i].style.display="none";
	}
	for(var i=0;i<document.getElementsByClassName("celsuan").length;i++){
		document.getElementsByClassName("celsuan")[i].style.display="flex";
	}
}
$("cart_selend").onclick=function(){
	$("cart_edit").style.display="block";
	$("cart_selend").style.display="none";
	$("cart_chaone").style.display="block";
	$("cart_chatwo").style.display="block";
	$("cart_ensh").style.display="none";
	$("cart_price").style.display="block";
	$("cart_dele").style.display="none";
	for(var i=0;i<document.getElementsByClassName("cart_xhsp").length;i++){
		document.getElementsByClassName("cart_xhsp")[i].style.display="block";
	}
	for(var i=0;i<document.getElementsByClassName("celsuan").length;i++){
		document.getElementsByClassName("celsuan")[i].style.display="none";
	}
}


//-------------------全选切换-----------------------------------------
$("cart_cheallimg01").onclick=function(){
	$("cart_cheallimg02").style.display="block";
	$("cart_cheallimg01").style.display="none";
	$("cart_chexim02").style.display="block";
	$("cart_chexim01").style.display="none";
		$("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
		$("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
}
$("cart_cheallimg02").onclick=function(){
	$("cart_cheallimg01").style.display="block";
	$("cart_cheallimg02").style.display="none";
	$("cart_chexim01").style.display="block";
	$("cart_chexim02").style.display="none";
		$("cart_monz").innerHTML=0;//-------------总价、单价、件数
		$("cart_mons").innerHTML=0;//-------------总价、单价、件数
}


if($("cart_cheallimg02").style.display="none"){
		$("cart_monz").innerHTML=0;//-------------总价、单价、件数
		$("cart_mons").innerHTML=0;//-------------总价、单价、件数
}


//-------------------单选切换------------------------------------

$("cart_chexim01").onclick=function(){
	$("cart_chexim02").style.display="block";
	$("cart_chexim01").style.display="none";
	$("cart_cheallimg02").style.display="block";
	$("cart_cheallimg01").style.display="none";
		$("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
		$("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
}
$("cart_chexim02").onclick=function(){
	$("cart_chexim01").style.display="block";
	$("cart_chexim02").style.display="none";
	$("cart_cheallimg01").style.display="block";
	$("cart_cheallimg02").style.display="none";
		$("cart_monz").innerHTML=0;//总价、单价、件数
		$("cart_mons").innerHTML=0;//总价、单价、件数
}

//-------------------------------------------------------------
	

//------------------------------------------------------------------------------------------------
//$("cart_sentpross").onclick=function(){
//	if(Number($("cart_sentprossw").innerHTML)+1<10){
//		$("cart_sentprossw").innerHTML=Number($("cart_sentprossw").innerHTML)+1;//-------------
//	}
//}
//-----------商品加减及价格计算----------------------------------
	
var n=Number($("celsuanjiage").innerHTML);
$("celsuanjian").onclick=function(){
	if(Number($("celsuannei").innerHTML)-1>0){
		$("celsuannei").innerHTML=Number($("celsuannei").innerHTML)-1;//-------------减
		$("cart_sentprossw").innerHTML=Number($("celsuannei").innerHTML);//-------------计件
		//$("celsuanjiage").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------每个商品总价
		$("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
		$("cart_mons").innerHTML=$("celsuannei").innerHTML;//总价、单价、件数
	}
}
$("celsuanjia").onclick=function(){
		$("celsuannei").innerHTML=Number($("celsuannei").innerHTML)+1;//-------------加
		$("cart_sentprossw").innerHTML=Number($("celsuannei").innerHTML);//-------------计件
		//$("celsuanjiage").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------每个商品总价
		$("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
		$("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
}
