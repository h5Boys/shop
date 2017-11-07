<template>
  <router-link to="/login">
    <mine-head-top></mine-head-top>
    <up-head-mid></up-head-mid>
    <mine-head-bottom></mine-head-bottom>
    <approve></approve>
    <empty></empty>
    <indent></indent>
    <empty></empty>
    <property></property>
    <optimize></optimize>
  </router-link>

</template>
<script type="text/ecmascript-6">
  import mineHeadTop from '../components/mine/upHeadTop.vue'
  import upHeadMid from '../components/mine/upHeadMid.vue'
  import mineHeadBottom from '../components/mine/mineHeadBottom.vue'
  import approve from '../components/mine/default.vue'
  import empty from '../components/mine/empty.vue'
  import indent from '../components/mine/indent.vue'
  import property from '../components/mine/property.vue'
  import optimize from '../components/mine/optimize.vue'
  import '../assets/js/mine.js'

  export default {
    components: {
      mineHeadTop,
      upHeadMid,
      mineHeadBottom,
      approve,
      empty,
      indent,
      property,
      optimize
    }
  }
</script>

<style scoped>
  @import '../assets/css/unLogin.css';
  @import '../assets/css/iconfont.css';
</style>
