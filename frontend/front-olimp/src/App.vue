<template>
  <div class="app">
    <router-view>
    </router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
.app {
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: url("../src/assets/images/main-bg.png");
  background-size: cover;
}
</style>
