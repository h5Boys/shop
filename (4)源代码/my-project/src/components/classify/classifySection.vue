<template>
   <section>
      <div class="sectionCount">
          <section-pin-lei :item="shops"></section-pin-lei>
          <section-pin-pai></section-pin-pai>
          <section-guan-zhu></section-guan-zhu>
      </div>
   </section>
</template>

<script type="text/ecmascript-6">
  import sectionPinLei from './sectionPinLei.vue'
  import sectionPinPai from './sectionPinPai.vue'
  import sectionGuanZhu from './sectionGuanZhu.vue'
  import '../../assets/js/swiper.min.js'
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/classify.js'
  export default {
    props:['shops'],
    data(){
      return{
//        shops:[]

      }
    },
    components: {
      sectionPinLei,
      sectionPinPai,
      sectionGuanZhu
    },
    mounted() {
//      console.log(shops);
    }
  }
</script>
<style scoped>
  @import '../../assets/css/classify.css';
</style>
