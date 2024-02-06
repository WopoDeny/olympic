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
}

@media (max-width: 820px) {
  .logo {
    display: flex;
    justify-content: center;
    width: 80px;
    height: 80px;
    left: 20px;
    top: 0;
  }

  .logo-image {
    width: 60px;
  }
}
</style>
