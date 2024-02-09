<template>
  <div class="main-page">
    <div class="main-page-container">
      <p class="main-text">Приглашаем вас принять участие в нашей олимпиаде.<br>
        <br> Проверьте свои знания и навыки в области информатики и математики</p>
      <p>А вот это будет видно????</p>

      <div class="main-page-buttons-wrapper">
        <button class="sign-up-button">
          <p class="sign-up-button-text" @click="$router.push({ name: 'CongratsPage' })">Об олимпиаде</p>
        </button>

        <div class="main-page-login-buttons">
          <button class="sign-up-button">
            <p class="sign-up-button-text" @click="$router.push({ name: 'register' })">Регистрация</p>
          </button>

          <div class="main-page-auth-buttons">
            <button class="sign-up-button">
              <p class="sign-up-button-text" @click="$router.push({ name: 'login' })">Войти</p>
            </button>
            <button class="sign-up-button-yandex">
              <a class="sign-up-button-text" href="https://oauth.yandex.ru/authorize?response_type=token&client_id=e5684b66613f4cf1b3658e06514b4d75">
                <img class="main-page-yandex-icon" src="../assets/images/yandex-icon.png" alt="Войти через yandex">
                Яндекс ID
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage',
}
</script>

<style scoped>
.main-page-yandex-icon {
  margin-right: 10px;
}

.sign-up-button-yandex {
  background: black;
  border-radius: 12px;
  padding: 0 25px;
  transition: 200ms;
}

.sign-up-button-yandex:hover {
  background: #4d4c4c;
}

.sign-up-button-yandex p {
  font-size: 26px !important;
}

.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px
}

.main-page-buttons-wrapper {
  justify-content: space-between;
  margin-top: 40px;
  display: flex;
  align-items: start;
  gap: 20px;
}

.main-page-login-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px
}

.main-page-auth-buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
}

.main-page-container {
  padding-left: 20%;
  padding-right: 20%;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center

}

.main-text {
  margin-top: 120px;
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
  padding: 0px 10px;
  border: none;
  background: #0f204e;
  border-radius: 10px;
  transition: 200ms;
}

.sign-up-button p {
  font-size: 26px !important;
}

.sign-up-button:hover {
  background: #354d86;
}

p {
  margin: 0;
}

.sign-up-button-text {
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

a.sign-up-button-text:link,
a.sign-up-button-text:visited {
  font-size: 22px;
}

a.sign-up-button-text:hover {
  text-decoration: none;
}

.main-page {
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  display: flex;
}

/* Адаптив */
@media (max-width: 820px) {
  .main-text {
    font-size: 30px;
  }

  .main-page-buttons-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .main-page-container {
    padding: 0 5%;
  }
}

@media (max-width: 820px){
  .main-page-buttons-wrapper {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
