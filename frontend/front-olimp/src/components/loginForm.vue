<template>
  <form @submit.prevent="checkForm">
    <div class="string">
      <span>E-mail:</span>
      <input id="email" type="email" v-model="form.email">
    </div>
    <div class="string">
      <span>Пароль:</span>
      <input id="password" type="password" v-model="form.password">
    </div>
    <button class="btn" type="submit">Войти</button>
  </form>
</template>

<script>
import sha256 from '../api/crypt.js'
export default {
  name: 'loginForm',
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    async checkForm() {
      try {
        window.localStorage.setItem('getTime', false)
        const encoded_password = sha256(this.form.password) // ultimate protect
        const payload = JSON.stringify({
          "email": this.form.email,
          "token": encoded_password
        });
        const response = await this.$api.auth.login(payload);
        window.localStorage.setItem('authFlag', true); // !!!!!!!!!!! потом исправить
        window.localStorage.setItem('userId', response.data.id_user) // понадобиться для отправки решений задачи
        this.$router.push({ name: 'personalCabinet' })
        
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
  
  

<style scoped>
.btn {
  border: none;
  background-color: #373636;
  color: #FFFFFF;
  border-radius: 5px;
  margin-top: 10px;
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
  width: 100%;
  margin: 5px;
  padding: 10px;
  outline: 1px solid lightgray;
  border-radius: 6px;
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
  justify-content: center;
  margin-bottom: 30px;
}
</style>
  