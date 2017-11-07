<template>
  <ul class="loginForm">
    <li>
      <span class="mart">国家和地区</span>
      <div class="china">
        <span>中国</span>
        <img class="yna" src="../../assets/images/img-fb/右箭.png" alt="">
      </div>
    </li>
    <li>
      <span  class="mart">+86</span>
      <input class="phone" type="text">
      <img class="cuo" src="../../assets/images/img-fb/错.png" alt="">
      <img class="dui" src="../../assets/images/img-fb/对号.png" alt="">
    </li>
    <li>
      <span  class="mart">潮流口令</span>
      <input type="text">
    </li>
    <li>
      <div v-on:click="shower" class="button">下一步</div>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/register.js'
  export default {
    methods: {
      setCookie (key, sValue,iDay){
        const date = new Date();
        date.setDate(date.getDate() + iDay);
        document.cookie = key + '=' + escape(sValue) + '; expires=' + date.toGMTString();
      },
      checkAll (type, value) {
        var  reg;
        switch (type) {
          case 'userCallNum':reg = this.userCallNum();
            break;
          default:
            ;
        }
        if (reg.test(value)) {
          return true;
        } else {
          return false;
        }
      },
      userCallNum () {
        return /^1[3-5][0-9]{9}$/;
      },
      shower () {
        if (this.checkAll('userCallNum', $('.phone')[0].value) === true && this.checkAll('userCallNum', $('.phone')[0].value)) {
          this.setCookie('userPass', $(".phone").val(), 1)
          this.$router.push('/mine');
        } else {
          alert("用户名或者密码错误，登录失败！");
        }
      }
    }
  }
</script>

<style>
  @import '../../assets/css/register.css';
</style>
