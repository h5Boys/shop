<template>
  <div class="guang_top">
    <ul class="topUL" id="topUL">
      <li class="active"><a href="#"><router-link to="/partone">逛</router-link></a></li>
        <li><router-link to="/parttwo">社区</router-link></li>
          <li><a href="#"><router-link to="/partthree">ShOw</router-link></a></li>
    </ul>
  </div>
</template>

<script>
//  import "../../assets/js/xuanxiangka.js"
//  import HelloWorld from "./components/hang.vue"
export default {
  name: 'app',
//  components:{
//    hangOutHeader
//  },
}

</script>

<style scoped>
  @import "../../assets/css/guang.css";

</style>
