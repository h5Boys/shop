<template>
  <div>
    <head-top></head-top>
    <souffler></souffler>
    <emeny></emeny>
    <tabs></tabs>
    <silde-show></silde-show>
  </div>
</template>
<script type="text/ecmascript-6">
  import headTop from '../components/bulletin/headTop.vue'
  import emeny from '../components/bulletin/emeny.vue'
  import tabs from '../components/bulletin/tabs.vue'
  import sildeShow from '../components/bulletin/sildeShow.vue'
  import souffler from '../components/bulletin/souffler.vue'
  import '../assets/js/indent.js'
  import '../assets/js/idangerous.swiper.min.js'
  export default {
    components: {
      headTop,
      emeny,
      tabs,
      souffler,
      sildeShow
    }
  }
</script>

<style>
  @import '../assets/css/indent.css';
  @import '../assets/css/iconfont.css';
  @import '../assets/css/idangerous.swiper.css';
</style>
