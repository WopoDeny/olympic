<template>
  <div class="app">
    <header-vue />
    <router-view />
  </div>
</template>

<script>
import headerVue from './components/header.vue'


export default {
  name: 'App',
  components :  {headerVue},
}
</script>
<style>
.app {
  z-index: -1;
  width: 100vw;
  min-height: 100vh;
  background: url("../src/assets/images/main-bg.png") no-repeat center center fixed;
  background-size: cover;
}
</style>
