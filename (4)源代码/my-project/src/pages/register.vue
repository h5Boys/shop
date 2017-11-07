<template>
  <div>
    <head-top></head-top>
    <login-form></login-form>
    <foots></foots>
  </div>

</template>
<script type="text/ecmascript-6">
  import headTop from '../components/register/headTop.vue'
  import foots from '../components/register/foots.vue'
  import loginForm from '../components/register/loginForm.vue'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/register.js'
  export default {
    components: {
      headTop,
      loginForm,
      foots
    }
  }
</script>

<style>
  @import '../assets/css/iconfont.css';
</style>
