<template>
  <div>
    <hang></hang>
    <partone></partone>
    <parttwo></parttwo>
    <partthree></partthree>
    <footer-common></footer-common>
  </div>
</template>

<script>
  import hang from "../components/hangOut/hang.vue"
  import partone from "../components/hangOut/partone.vue"
  import parttwo from "../components/hangOut/parttwo.vue"
  import partthree from "../components/hangOut/partthree.vue"
//  import "../assets/js/xuanxiangka.js"
  import footerCommon from '../components/common/foot.vue'

export default {

  components: {
    hang,
    partone,
    parttwo,
    partthree,
    footerCommon
  },
//  mounted() {
//      var lis=document.getElementById("topUL").getElementsByTagName("li");
////      console.log(lis)
//      var divs=document.getElementsByClassName("box");
//      console.log(divs)
//      for(let i=0;i<lis.length;i++){
////        lis[i].num=i;
////        console.log(i)
//        setTimeout(
//          lis[i].onclick=function(){
//            for(var j=0;j<lis.length;j++){
//              lis[j].className="";
//            }
//            lis[i].className="active";
//            for(var j=0;j<divs.length;j++){
//              divs[j].style.display="none";
//              divs[j].style.marginTop=0;
//            }
//            console.log(i);
//            divs[i].style.display="block";
//          }
//        ,1000)
//
//      }
//
//      document.addEventListener("keypress",function(event){
//        if((event.keyCode||event.which)==9){
//          for(var i=0;i<lis.length;i++){
//            if(lis[i].className=="active"){
//              if(i<lis.length-1){
//                lis[i+1].onclick();
//              }else if(i==lis.length-1){
//                lis[0].onclick();
//              }
//              break;
//            }
//          }
//
//        }
//      },false);
//    }
}
</script>

<style>

</style>
