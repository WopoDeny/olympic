<template>
  <div class = "header">
    <logo/>
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
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #000000;
}
</style>