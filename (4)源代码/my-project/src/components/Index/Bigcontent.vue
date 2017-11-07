<template>
<div>

  <section class="talcontent">
    <hide-box></hide-box>
    <v-top></v-top>
    <main-tab></main-tab>
    <pic></pic>
   <tabone></tabone>
    <hot-Sort></hot-Sort>
    <tabtwo></tabtwo>
    <compiletab></compiletab>
    <returnback></returnback>
    <love :list="cartList"></love>
    <foot></foot>

  </section>
</div>
</template>

<script type="text/ecmascript-6">
  import hideBox from '../Index/hideBox.vue';
  import VTop from '../common/head.vue';
  import mainTab from './mainTab.vue';
  import pic from './pic.vue';
  import tabone from './tabone.vue';
  import hotSort from './hotSort.vue';
  import tabtwo from './tabtwo.vue';
  import compiletab from './compiletab.vue';
  import love from './love.vue';
  import returnback from '../common/returnback.vue';
  import foot from '../common/foot.vue';
  import shopCartService from '../../fetch/ShopService';

  export default {
    data(){
      return{
        cartList:[]
      }
    },

    components:{
        hideBox,
        VTop,
        mainTab,
        pic,
        tabone,
        hotSort,
        tabtwo,
        compiletab,
        love,
        returnback,
        foot
    },

    methods:{
      initData:function(){
        shopCartService.getShopCartListByUser((data)=>{
          this.cartList = data;
        })
      }
    },

    created:function(){
      this.initData();
    }


  }

</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
