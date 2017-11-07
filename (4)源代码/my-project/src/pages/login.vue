<template>
  <div>
    <head-top></head-top>
    <login-form></login-form>
    <presentation></presentation>
    <other-ways></other-ways>
  </div>
</template>
<script type="text/ecmascript-6">
  import headTop from '../components/login/headTop.vue'
  import loginForm from '../components/login/loginForm.vue'
  import otherWays from '../components/login/otherWays.vue'
  import presentation from '../components/login/presentation.vue'
  import '../assets/js/jquery-1.8.3.min.js'
  import '../assets/js/login.js'
  export default {
    components: {
      headTop,
      loginForm,
      otherWays,
      presentation
    }
  }
</script>

<style>
  @import '../assets/css/iconfont.css';
</style>
