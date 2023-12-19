<template>
  <div class="main-page">
    <header-vue/>
    <div class="main-page-container">
      <p class="main-text">Приглашаем вас принять участие в нашей олимпиаде. <br>
        <br> Проверьте свои знания и навыки в области информатики и математики</p>
      <button class="sign-up-button">
        <p class="sign-up-button-text" @click="$router.push({ name: 'register' })">Зарегистрироваться</p>
      </button>
    </div>
  </div>
</template>

<script>
import headerVue from "@/components/header";
export default {
  name: 'mainPage',
  components: {
    headerVue
  }
}
</script>

<style scoped>
.main-page-container {
  padding-left: 20%;
  padding-right: 20%;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center

}

.main-text{
  margin-top:100px;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}

.sign-up-button {
  padding: 10px;
  margin-top: 40px;
  border: none;
  background: #3D3D3D;
  border-radius: 4px;
}

.sign-up-button-text{
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}
.main-page {
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
