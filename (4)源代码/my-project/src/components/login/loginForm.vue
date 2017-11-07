<template>
  <ul class="loginForm">
    <li>
      <img class="youh" src="../../assets/images/img-fb/yoh.png" alt="">
      <input class="phone" type="text" >
      <img class="cuo" src="../../assets/images/img-fb/错.png" alt="">
      <img class="dui" src="../../assets/images/img-fb/对号.png" alt="">
    </li>
    <li>
      <input class="password"  type="text" >
      <img class="yna" src="../../assets/images/img-fb/不点开-眼睛.png" alt="">
      <img class="yanj" src="../../assets/images/img-fb/眼睛.png" alt="">
    </li>
    <li>
      <div v-on:click="shower" class="button">登录</div>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
  import '../../assets/js/jquery-1.8.3.min.js'
  export default {
    methods: {
      setCookie (key, sValue,iDay){
        const date = new Date();
        date.setDate(date.getDate() + iDay);
        document.cookie = key + '=' + escape(sValue) + '; expires=' + date.toLocaleTimeString();
      },
      checkAll (type, value) {
        var  reg;
        switch (type) {
          case 'userPass':reg = this.userPass();
            break;
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
      userPass () {
        return /^[0-9]{6,20}$/;
      },
      userCallNum () {
        return /^1[3-5][0-9]{9}$/;
      },
      shower () {
        if (this.checkAll('userCallNum', $('.phone')[0].value) === true && this.checkAll('userCallNum', $('.phone')[0].value)) {
          this.setCookie('userPhone', $('.password').val(), 1)
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
  @import '../../assets/css/login.css';
</style>
