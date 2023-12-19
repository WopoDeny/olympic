<template>
 <div class="start-olympic-page">
   <header-vue/>
     <div class="start-olympic-page-container">
       <h1>{{title}}</h1>
       <p class="main-text">Задания расчитаны на учащихся 9-11 классов.
         Будут затронуты такие темы как: обьектно-ориентированное программирование, булевая алгербра, теория множеств, реляционная модель данных.<br>
         Тестирование идет 2 часа 30 минут.<br>
         Примеры тестовых заданий, можно увидеть по ссылке.<br>

         Будьте внимательны, после начала олимпиады, остановить ее уже будет нельзя.<br>

         Желаем удачи!<br> </p>
       <button class="start-button">
         <p class="start-button-text" @click="$router.push({name: 'olimpPage'})">НАЧАТЬ ОЛИМПИАДУ</p>
       </button>
     </div>

 </div>

</template>

<script>
import headerVue from '../components/header'

export default { 
  name : 'startOlympicPage',
   components : {headerVue},
   async mounted(){
    try{
      // set data to store
        const response = await this.$api.mainPage.getInfo()
        this.title = response.data.olimpiad[0].name_olimpiad;
        this.$store.state.startTime = response.data.olimpiad[0].date_start
        this.$store.state.endTime = response.data.olimpiad[0].date_end
        this.$store.state.duration = response.data.olimpiad[0].work_time
        this.$store.state.olimpId = response.data.olimpiad[0].id
    }catch(e){
        console.log(e)
    }
   },
   data(){
    return {
      title:'Olympiad'
    }
   },
   }

</script>

<style>
.start-olympic-page-container {
  margin-top: 120px;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  align-items: center

}

.main-text{
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}

.start-button {
  width: 573px;
  height: 101px;
  left: 285px;
  margin-top: 82px;

  background: #3D3D3D;
  border-radius: 4px;
}
.start-button:hover {
  width: 573px;
  height: 101px;
  left: 285px;
  margin-top: 82px;

  background: #D3E6CE;
  border-radius: 4px;
}
.start-button-text{
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #FFFFFF;
}
.start-olympic-page {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>