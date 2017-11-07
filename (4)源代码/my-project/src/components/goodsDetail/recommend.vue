<template>
  <section class="recommend">
    <div class="recommend_header">店铺推荐</div>
    <ul class="recommend_list">
      <recommend_list :item="n" v-for="(n,index) in reList" :key="n.id" v-if="(index>16 && index<27) "></recommend_list>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">
import recommend_list from './recommend_list.vue'
export default {
  props:['reList'],
  components:{
    recommend_list
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
