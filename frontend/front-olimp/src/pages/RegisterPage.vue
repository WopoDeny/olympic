<template>
  <div class="back-container">
    <div class="container">
      <div class="title-p">Регистрация</div>
      <registerForm />
      <div class="title-end">
        Уже зарегистрированы?
        <div class="margin-left pointer" @click="$router.push({ name: 'login' })">Войти</div>
      </div>
    </div>
  </div>
</template>

<script>
import registerForm from "@/components/registerForm";


export default {
  name: 'registerPage',
  components: {
    registerForm
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.margin-left {
  margin-left: 5px;
}

.title-end {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.padding {
  padding-bottom: 10px;
}

.media-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  background: #fff;
  border: none;
  width: 300px;
  border-radius: 4px;
  padding-left: 4px;
  margin-left: 5px;
}

.string {
  margin: 5px;
}

span {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  color: #696969;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.back-container {
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 90px;
  width: 100vw;
  height: 100vh;
}

.title-p {
  margin: 20px;
  padding-top: 20px;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 26px;
  align-items: center;
  text-align: center;

  color: #373636;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  background: #f4f6ff;
  border-radius: 5px;
}
</style>
