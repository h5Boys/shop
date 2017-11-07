<template>
  <div class="optimize">
    <p>为您选新品</p>
    <ul class="optimizeList">
      <optimize-list  :item="n"  v-if="index<=5" v-for="(n,index) in rList"  :key="n.id">
      {{n}}
    </optimize-list>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  import '../../assets/js/mine.js'
  import optimizeList from './optimizeList.vue'
  export default {
    props: ['rList'],
    components: {
      optimizeList
    },
    mounted() {
      $('.optimizeList .monyList i').live('click', function () {
        $(this).parents().siblings('.showImg').find('.optimizeImg').fadeToggle('3000');

      })
      $('.showImg .liImg').live('click', function () {
        $(this).siblings('.optimizeImg').hide();
        $(this).siblings('.optimizeImg').fadeToggle('3000')
      })
      $('.showImg .optimizeImg').live('click', function () {
        $(this).fadeToggle('3000')
      })
    }
  }
</script>

<style scoped>
  @import '../../assets/css/mine.css';
</style>
