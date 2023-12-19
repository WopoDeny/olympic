<template>
  <div class="logo">
    <img class="logo-image" src="../assets/images/emblem.svg">
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
  top: 0px;

  background: linear-gradient(180deg, #830808 0%, #4F0C0B 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 100px 100px;
}
.logo-image {
  width: 103px;
  left: calc(50% - 103px/2);
  top: 0px;
  bottom: 13px;
}
</style>