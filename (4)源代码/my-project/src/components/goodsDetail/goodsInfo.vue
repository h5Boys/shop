<template>
  <div>
    <goods-info_goods></goods-info_goods>
    <goods-info_size></goods-info_size>
    <goods-info_measurement></goods-info_measurement>
    <goods-info_details></goods-info_details>
  </div>
</template>

<script type="text/ecmascript-6">
  import goodsInfo_goods from './goodsInfo_goods.vue'
  import goodsInfo_size from './goodsInfo_size.vue'
  import goodsInfo_measurement from './goodsInfo_measurement.vue'
  import goodsInfo_details from './goodsInfo_details.vue'

  export default {
    components:{
      goodsInfo_goods,
      goodsInfo_size,
      goodsInfo_measurement,
      goodsInfo_details
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
