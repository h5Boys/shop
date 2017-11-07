<template>
  <div>
    <classify-header></classify-header>
    <classify-section :shops="cartList"></classify-section>
    <footer-common></footer-common>
  </div>
</template>

<script type="text/ecmascript-6">
  import classifyHeader from '../components/classify/classifyHeader.vue'
  import classifySection from '../components/classify/classifySection.vue'
  import '../assets/js/swiper.min.js'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/classify.js'
  import ShopCartService from '../fetch/ShopService'
  import footerCommon from '../components/common/foot.vue'

  export default {
    data () {
      return {
        cartList:[]
      }
    },
    components: {
      classifyHeader,
      classifySection,
      footerCommon
    },
    methods: {
      initData: function () {
        ShopCartService.getShopCartListByUser((data) => {
          this.cartList=data;
          console.log(data)
//          console.log(data[0].size.split(',')[0])
        })

      }
    },
    created: function () {
      this.initData()
    }


  }
</script>
<style scoped>
  @import '../assets/css/classify.css';
  @import '../assets/css/swiper.min.css';
</style>
