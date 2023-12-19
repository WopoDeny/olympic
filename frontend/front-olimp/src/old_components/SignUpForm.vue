<template>
    <div>
      <!--Навигация-->
      <nav class="navigation">
        <!--Переход на главную-->
        <div class="home_href" @click="$router.push({name: 'home'})">
          <img src="../assets/images/favicon1.png" />
        </div>
        <!--Переход на Войти-->
        <div><div class="register_href" @click="$router.push({name: 'login'})">Войти</div></div>
      </nav>
      <!--Подпись-->
      <div class="title">Регистрация</div>
      <!--Форма-->
      <form class="sign-up" @submit.prevent="checkForm">
        <!--Логин-->
        <div class="form-group">
          <label for="login">Логин:</label>
          <input
            id="login"
            class="form-control"
            :class="$v.form.login.$error ? 'is-invalid' : ''"
            v-model.trim="form.login"
          >
          <!--Предупреждение о неправильном вводе-->
          <p v-if=" !$v.form.login.required" class="invalid-feedback">
            Обязательное поле
          </p>
        </div>
        <!--email-->
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            id="email"
            class="form-control"
            :class="$v.form.email.$error ? 'is-invalid' : ''"
            v-model.trim="form.email"
          >
          <!--Предупреждение о неправильном вводе-->
          <p v-if=" !$v.form.email.required" class="invalid-feedback">
            Обязательное поле
          </p>
          <!--Предупреждение о неправильном вводе-->
          <p v-if=" !$v.form.email.email" class="invalid-feedback">
            Некорректный email
          </p>
        </div>
        <!--Пароль-->
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input
            id="password"
            type="password"
            class="form-control"
            :class="$v.form.email.$error ? 'is-invalid' : ''"
            v-model.trim="form.password"
          >
          <!--Предупреждение о неправильном вводе-->
          <p v-if= "!$v.form.password.required" class="invalid-feedback">
            Обязательное поле
          </p>
          <p v-if="  !$v.form.password.minLength" class="invalid-feedback">
            Здесь должно быть больше 7-и символов
          </p>
        </div>
        <!--Подтверждение пароля-->
        <div class="form-group" >
          <label for="repeatPassword">Подтвердите пароль:</label>
          <input
          id="repeatPassword" 
          type="password"
          class="form-control" 
          :class="$v.form.repeatPassword.$error ? 'is-invalid' : ''" 
          
          v-model.trim="form.repeatPassword"/>
          <!--Предупреждение о неправильном вводе-->
          <p  v-if="!$v.form.repeatPassword.sameAsPassword" class="invalid-feedback">Пароли должны совпадать</p>
      </div>
        <button type="submit" class="sign-up-btn">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  import { validationMixin } from 'vuelidate' 
  import { required, minLength, sameAs, email} from 'vuelidate/lib/validators'
  import {mapMutations} from 'vuex'
  
  export default {
    name: "sign_UpForm",
    mixins: [validationMixin],
    data() {
      return {
        form: {
          login: '',
          password: '',
          repeatPassword: '',
          email: ''
        }
      }
    },
    // проверка формы

    validations: { 
      form: {
        login: { required },
        password: { required, minLength: minLength(7) },
        email:{required, email},
        repeatPassword: {sameAsPassword: sameAs('password')}
      }
    },
    methods: {
      // помецение в хранилище логина, пароля, почты
      ...mapMutations(['setLogin', 'setPassword', 'setEmail']),
      async checkForm() {
        this.$v.form.$touch()
        if (!this.$v.form.$error) {
            console.log('Валидация формы прошла успешно')
            // помещаем пароль, логин в хранилище
            this.setLogin(this.form.login)
            this.setPassword(this.form.password)
            this.setEmail(this.form.email)
            // запрос на сервер
            try{
              const payload = JSON.stringify({
                  username: this.form.login,
                  email: this.form.email,
                  password: this.form.password,
                  repeat_password : this.form.repeatPassword
                });
                const response = await this.$api.auth.register(payload)
                if(response.data.status == 'success')
                {
                  this.$store.state.authFlag = true //!!!! потом исправить
                  this.$router.push({name: 'home'})
                }
                
            }catch(e){
              console.log(e)
            }
          
        }
      }
    }
  }
  </script>
  
  <style lang="css" scoped>
  .form-control {
    width: 600px;
    font-size: 24px;
  }
  .navigation{
    justify-content: space-between;
    height: 100%;
    display:flex;
  }
  .home_href{
    width:79px;
    height: 79px;
    margin-top:8px;
    margin-bottom:8px;
  }
  .register_href{
    width: 200px;
    display:table-cell;
    vertical-align: middle;
    font-size: 24px;
    line-height: 100px;
    color: #ffffff;
    font-family:'Roboto';
    text-align: center;
    border: 1px solid #ffffff;
  }
  .title{
    font-family:'Roboto';
    color: #ffffff;
    font-size: 48px;
    margin-left: 79px
  }
  .sign-up{
    margin-left:79px;
    font-size: 24px;
    color: #ffffff;
    font-family:'Roboto';
  }
  .sign-up-btn{
    margin-top: 10px;
    width:260px;
    height: 70px;
    border-radius: 8px;
    background-color: #ffffff00;
    border-color: #ffffff;
    color: #ffffff;
  }
  </style>
  