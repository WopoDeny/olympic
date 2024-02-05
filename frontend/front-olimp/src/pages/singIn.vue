<template>
    <div class="back-container">
      <div class="container">
        <div class="title-p">Войти</div>
        <loginForm />
        <div class="title-end">
          Нет аккаунта?
          <div class="margin-left pointer" @click="$router.push({ name: 'register' })">Регистрация</div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import loginForm from "@/components/loginForm";

  export default {
    name: 'signInPage',
    components: {
      loginForm
    }
  }
  </script>

  <style scoped>
  .back-container {
    padding-top:  90px;
  }

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

  input {
    background: #fff;
    border: none;
    width: 300px;
    border-radius: 4px;
    padding-left: 4px;
    margin-left: 5px;
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
