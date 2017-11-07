<template>
  <li class="item">
    <a  href="#" class="xianliang">限量</a>
    <div class="showImg">
      <img class="liImg" :src='item.pic' alt="">
      <div class="optimizeImg">
        <div class="hideImg">
          <a href="#" class="like">找相似</a>
          <a href="#" class="noLike">不喜欢</a>
        </div>
      </div>
    </div>
    <p>{{item.bens}}</p>
    <div class="monyList">
      <div class="mony"><span>￥</span><span>{{item.art}}</span></div>
      <i @click="getDoods()" class="icon iconfont icon-gengduo"></i>
    </div>
  </li>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  export default {
    props: ['item'],
    methods: {
      getDoods () {
         var id = document.querySelector('.icon-gengduo');
        this.$http.get('http://10.35.166.13:3000/tasks/api/:goodsapi')
          .then(res => {
            console.log(res.data)
            this.id = res.this.data;
            console.log(this.id)
          }).catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/mine.css';
</style>
