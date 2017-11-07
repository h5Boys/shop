<template>
  <div>
    <mine-head-top></mine-head-top>
    <mine-head-mid></mine-head-mid>
    <mine-head-bottom></mine-head-bottom>
    <approve></approve>
    <empty></empty>
    <indent></indent>
    <empty></empty>
    <property></property>
    <optimize :rList='reList'></optimize>
    <footer-common></footer-common>
  </div>
</template>
<script type="text/ecmascript-6">
  import mineHeadTop from '../components/mine/mineHeadTop.vue'
  import mineHeadMid from '../components/mine/mineHeadMid.vue'
  import mineHeadBottom from '../components/mine/mineHeadBottom.vue'
  import approve from '../components/mine/default.vue'
  import empty from '../components/mine/empty.vue'
  import indent from '../components/mine/indent.vue'
  import property from '../components/mine/property.vue'
  import optimize from '../components/mine/optimize.vue'
  import '../assets/js/mine.js'
  import ShopService from '../fetch/ShopService.js'
  import footerCommon from '../components/common/foot.vue'

  export default {
    data () {
      return {
        reList: []
      }
    },
    components: {
      mineHeadTop,
      mineHeadMid,
      mineHeadBottom,
      approve,
      empty,
      indent,
      property,
      optimize,
      footerCommon
    },
    methods: {
      initData: function () {
        ShopService.getShopCartListByUser((data) => {
          this.reList = data
//          console.log(data.data)
        })
      }
    },
    created: function () {
      this.initData()
    }
  }
</script>

<style scoped>
  @import '../assets/css/mine.css';
  @import '../assets/css/iconfont.css';
</style>
