<template>
  <div class="logo">
    <a href="/" style="z-index: 1000">
      <img style="z-index: 10" class="logo-image" src="../assets/images/emblem.svg">
    </a>
  </div>
</template>
<script>
export default {
  name: 'logo',
}
</script>
<style>
.logo {
  display: flex;
  justify-content: center;
  width: 129px;
  height: 129px;
  left: 20px;
  top: 0;
}

.logo-image {
  width: 103px;
  left: calc(50% - 103px / 2);
  top: 0;
  bottom: 13px;
}
</style>
