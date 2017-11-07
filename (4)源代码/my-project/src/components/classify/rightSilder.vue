<template>
  <ul id="right_silder">

  </ul>
</template>

<script>
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    mounted() {
      var arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      var uls=document.getElementById('right_silder');
      for(var i=0;i<arr.length;i++){
        var lis=document.createElement('li');
        lis.innerHTML=arr[i];
        uls.appendChild(lis);

      }
      $('#right_silder li').click(function(){
        var indexs=$(this).index();
        var ulsCount=$('.pinpaiBox').children();
        var scops= $(ulsCount[indexs]).offset().top;
        var fscops= $('.menCount').offset().top;
        // var scrolls=$('.menCount').scrollTop();
        // var gfscops= $('.menbox').offset().top;
        // console.log(scops);
        $('.menCount').animate({
          top:fscops-scops
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/classify.css';
</style>
