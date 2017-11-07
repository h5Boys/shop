<template>
<div>
  <section class="goods_lists">
    <h4>你可能喜欢</h4>
    <div class="goods_list dingbu">
      <ul class="goods_list_ul">
        <li class="goods_list_li" v-for="(item,index) in list" v-if="index<70">
          <a href="javascript:;">
            <div class="imgs">
              <img v-lazy="item.pic">
              <div class="zhao">
                <span class="a_up">找相似</span>
                <span class="a_down">不喜欢</span>
              </div>
            </div>
            <div class="imgs_dec">
              <h5 class="goods_title">{{item.bens}}</h5>
              <span class="goods_price">￥{{item.art}}
                  <i class="iconfont icon-gengduo zhe" style="font-size: 24px;"></i>
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</div>
</template>

<script type="text/ecmascript-6">
  import "../../assets/js/youhuo.js"
  export default {

    props:["list"],

  }

</script>

<style scoped>
  @import'../../assets/css/iconfont.css';
  @import "../../assets/css/index.css";
</style>
