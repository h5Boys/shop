<template>
  <div>
    <head-top></head-top>
    <set-msg></set-msg>
    <more-app></more-app>
    <foot></foot>
  </div>
</template>
<script type="text/ecmascript-6">
  import headTop from '../components/setting/headTop.vue'
  import moreApp from '../components/setting/moreApp.vue'
  import setMsg from '../components/setting/setMsg.vue'
  import foot from '../components/setting/foot.vue'
  import ShopService from '../fetch/ShopService.js'
  export default {
    components: {
      headTop,
      moreApp,
      setMsg,
      foot
    },
    mounted() {
      ShopService.getShopCartListByUser(function(data){
            console.log(data);
      });
    }
  }
</script>

<style >
  @import '../assets/css/setting.css';
  @import '../assets/css/iconfont.css';
</style>
