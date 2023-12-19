<template>
    <div class="main-container">
      <headerVue/>
        <div class="logo-container"></div>
        <div class="company">Военная Космическая Академия имени А.Ф. Можайского</div>
        <div class="title">{{descr}}</div>
        <div class="days">До начала олимпиады осталось:</div>
        <mainPageTimerVue />
        <div v-if="!this.$store.state.authFlag" class='register-btn' @click="$router.push({name: 'register'})">Зарегистрироваться</div>
        <div v-if="!this.$store.state.authFlag" class='login-btn' @click="$router.push({name: 'login'})">Войти</div>
        <!--Авторизация через соцсети-->
        <yandexAuthVue v-if="!this.$store.state.authFlag"/>
        <!--Кнопка перехода к олимпиаде-->
        <div v-if="this.$store.state.authFlag && !this.$store.state.passOlimpFlag" 
        class='login-btn' @click="$router.push({name: 'event'})">Поехали</div> 
        <div v-if="this.$store.state.authFlag && this.$store.state.passOlimpFlag" class='company'>До новых встреч!</div>
    </div>
</template>
<script>
import  mainPageTimerVue from './old_components/mainPageTimer.vue'
import yandexAuthVue from './components/yandexAuth.vue'
import headerVue from './components/header.vue'

export default{
  name: "home",
  components: {  mainPageTimerVue, yandexAuthVue, headerVue},
  beforeEach(to, from, next){
    console.log('to', to)
    console.log('from', from)
    next()
  },
  async mounted() {
        await this.getData()
    },
  data(){ 
    return {
        descr: '',
    }
  },

  methods: {
    // получение данных с сервера
        async getData(){
            try{
                const responseInfo = await this.$api.mainPage.getInfo();
                this.descr = responseInfo.data.description;
            }catch(error){
                console.log(error)
            }

        }
  }  
}

</script>
<style scoped>
.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;

}
.logo-container{
    width: 262px;
    height: 296px;
    background-size: 100% 100%;
    background-image: url(./assets/images/logo.png);
    margin: 20px;
}
.company{
    text-align: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #FDF8F8;
    margin: 10px;
}
.title{
    text-align: center;
    font-family: 'Roboto';
    font-size: 36px;
    color: #FDF8F8;
    margin: 10px;
}
.days{
    text-align: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #FDF8F8;
    margin: 10px;
}
.register-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #D9D9D9;
    font-family: 'Roboto';
    margin: 5px;
}
.login-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #D9D9D9;
    font-family: 'Roboto';
    margin: 5px;
}
.event-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #D9D9D9;
    font-family: 'Roboto';
    margin: 5px;
}
</style>
