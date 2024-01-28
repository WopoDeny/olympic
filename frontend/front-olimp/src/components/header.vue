<template>
  <div class = "header">
    <logo/>
    <div class="logo-header"/>
    <div class="title">Военно-космическая академия имени А.Ф. Можайского</div>
  </div>
</template>

<script>
  import logo from './logo'
  export default {
    name: 'header',
    components: {
      logo
    }
  }
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background: #0f204e;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.logo-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background: url(../assets/images/page_bg1.png) 50% 30% no-repeat;
  color: #fff;
  box-shadow: inset 0 -2px 3px 0 rgba(0, 0, 0, 0.15)
}

.title {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  color: white;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>