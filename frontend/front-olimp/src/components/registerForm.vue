<template>
  <form @submit.prevent="checkForm">
    <div class="string">
      <span>ФИО:</span>
      <input id="name" type="name" v-model="form.name">
    </div>
    
    <div class="string">
      <span>E-mail:</span>
      <input id="email" type="email" v-model="form.email">
    </div>
    <div class="string">
      <span>Школа:</span>
      <input id="school" type="text" v-model="form.school">
    </div>
    <div class="string">
      <span>Класс:</span>
      <input id="class" type="text" v-model="form.class">
    </div>
    <div class="string">
      <span>Пароль:</span>
      <input id="password" type="password" v-model="form.password">
    </div>
    <button class="btn" type="submit">Зарегистрироваться</button>
  </form>
</template>

<script>
import sha256 from '../api/crypt.js'
export default {
  name: 'registerForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        school: '',
        class: '',
        password: '',
      }
    }
  },
  methods: {
    async checkForm() {
      try {
        const encoded_password = sha256(this.form.password) // ultimate protect
        const payload = JSON.stringify({
          name: this.form.name,
          email: this.form.email,
          school: this.form.school,
          class: this.form.class,
          password: encoded_password,
        });
        const response = await this.$api.auth.register(payload)
        console.log(response)
        if (response.data.status == 'success') {
          window.localStorage.setItem('authFlag', true) //!!!! потом исправить
          this.$router.push({ name: 'login' })
        }

      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
  
  
<style scoped>
.btn {
  margin-top: 10px;
  border: none;
  background-color: #373636;
  color: #FFFFFF;
  border-radius: 5px;
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
  margin-bottom: 30px;
}

.back-container {
  position: absolute;
  width: 1512px;
  height: 982px;
  left: 0px;
  top: 0px;
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
  margin-top: 120px;
  width: 440px;
  height: 440px;
  background: #f4f6ff;
  border-radius: 5px;
}
</style>
  