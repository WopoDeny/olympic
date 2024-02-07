<template>
  <div class="personal-page">
<!--    <headerVue />-->
    <div class="personal-page-container">
      <div class="personal-info-container">
        <img class="avatar" src="../assets/images/avatar.jpg">
        <div class="user-info-table">

          <strong>{{ name }}</strong> <!--Имя Фамилия-->
          <div v-if="class_">Класс <strong>{{ class_ }}</strong></div> <!--Класс-->
          <div v-if="school">Школа <strong>{{ school }}</strong></div> <!--Школа-->
        </div>
      </div>

      <div class="olympiad-info-container">
        <div>
          <h3>Доступные олимпиады</h3>
        </div>
        <div v-for="olimp in olimpiads" :key='olimp'>
          <div class="info-block">
            <div class="point">
              <img class="point" src="../assets/images/point.svg">
            </div>

            <div>
              <p class="olympic-name">
                {{ olimp.title }}
              </p>
            </div>

            <div>
              <p class="olympic-time">
                {{ olimp.timeString }}
              </p>
            </div>

            <div class="personal-page-buttons-wrapper">
              <div class="padding-top">
                <button class="olympic-result-button" @click="toLeaderBoard(olimp.id)">
                  <img class="olympic-result" src="../assets/images/olympic-result.svg">
                </button>
              </div>
              <div>
                <button class="olympic-sing-in-button" @click="startOlimp(olimp.id, olimp.isStarted)">
                  Начать
                </button>
              </div>
            </div>


          </div>
          <div class='popup-not-started' hidden=true>
            Олимпиада ещё не началась!
          </div>

          <div class='popup-ended' hidden=true>
            Олимпиада закончилась!
          </div>

          <div class='not-ended' hidden=true>
              Олимпиада ещё не закончилась!
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
// import headerVue from '../components/header.vue'

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric'
}

export default {
    name : 'Personal_Page',
    // components :  {headerVue},
    created(){
      if(window.localStorage.getItem('authFlag')=='false'){ // if not authorized -> redirect -> mainPage
        this.$router.push({name: 'mainPage'})
      }
    },
    async mounted(){
      try{
        const response = await this.$api.auth.getlk(window.localStorage.getItem('userId'))
        const names = response.data.user.split(' ');
        this.name = names[0] + ' ' + names[1][0] + '. ' + names[2][0] + '.'
        this.lastname = response.data.user.split(' ')[1]
        this.class_ = response.data.class
        this.school = response.data.school
        let time_end = response.data.list_time_end
        window.localStorage.setItem('list-end', time_end)// save for resultPage
        let titles = response.data.olimpiads
        let timeStrings =[]
        let olimpIds = response.data.list_id_olimpiad
        let isStarted = response.data.list_flag_time
        let work_times = response.data.list_time_work
        window.localStorage.setItem('getTime', false )
        for(let i=0;i<time_end.length; i++){
          timeStrings.push(this.convertTimeStemp2String(time_end[i] / 1000))
        }
        for(let i=0; i<titles.length; i++){
          this.olimpiads.push({
            id: olimpIds[i],
            title: titles[i],
            time_end: time_end[i],
            timeString: timeStrings[i],
            isStarted: isStarted[i],
            workTime: work_times[i]
          })
        }
      }catch(e){
        console.log(e)
      }

    },
    data(){
      return {
        class_: '',
        school: '',
        olimpiads: [],
        name: '',
        lastName: '',
      }
    },
    methods:{
      convertTimeStemp2String(timestamp){
        let date = new Date(timestamp)
        return date.toLocaleString('ru', options)

      },
      startOlimp(id, flag){
        if(!flag){
          let now = new Date().getTime()
          if( now<this.olimpiads[id-1].time_end ){
            if(window.localStorage.getItem('getTime') === 'false'){
            const now = new Date().getTime()
            window.localStorage.setItem('endTime', now + this.olimpiads[id-1].workTime)
            window.localStorage.setItem('getTime', true)
            }
            window.localStorage.setItem('olimId', id); // swith on olimpiad
             this.$router.push({name: 'olimpPage'})
          }else{// olimp is ended
              document.getElementsByClassName('popup-ended')[id-1].hidden = false // show popup
              setTimeout(()=>{document.getElementsByClassName('popup-ended')[id-1].hidden=true}, 2000)// wait 2 sec ahd hide
          }

        }else{
          document.getElementsByClassName('popup-not-started')[id-1].hidden = false // show popup
          setTimeout(()=>{document.getElementsByClassName('popup-not-started')[id-1].hidden=true}, 2000)// wait 2 sec ahd hide
        }
      },
      toLeaderBoard(id){
        let now = new Date().getTime()
        if(now > this.olimpiads[id-1].time_end){
          this.$router.push({name:'results'}) // go to leaderboard
        }else{
          document.getElementsByClassName('not-ended')[id-1].hidden= false // show popup
          setTimeout(()=>{document.getElementsByClassName('not-ended')[id-1].hidden=true}, 2000)// wait 2 sec ahd hide
        }
      }
    }
}
</script>

<style scoped>
.personal-page {
  padding-top: 90px;
}

h3 {
  padding: 10px;
}

.personal-info-container {
  display: flex;
  margin-left: 235px;
  margin-top:30px;
  margin-bottom: 30px;
}

.avatar {
  width:100px;
  height: 100px;
  margin-left: 6%;
  border-radius: 50%;
}

.olympiad-info-container {
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
  height: 63px;
  background: #f4f6ff;
  border-radius: 5px;
}

.user-info-table {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  flex-direction: column;
  justify-content: center;
}

.info-block {
  justify-content: center;
  align-content: center;
  display: grid;
  padding-left: 10px;
  background: #FBFBFB;
  border-radius: 5px;
  align-items: baseline;
  grid-template-columns: 0.1fr 2.5fr 1.2fr 1fr;

}


.olympic-result-button:hover {

  background: #D3E6CE;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.olympic-result-button:active {
  background: #899d84;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}


.olympic-sing-in-button:hover {

  background: #D3E6CE;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.olympic-time {
  margin-left: 10px;
}

.olympic-sing-in-button:active {
  background: #899d84;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}

.personal-page-buttons-wrapper {
  display: flex;
  gap: 10px;
}

@media (max-width: 820px) {
  .personal-info-container {
    justify-content: center;
    margin-left: 0;
  }

  .olympiad-info-container {
    margin: 0 5%;
  }

  .info-block {
    grid-template-columns: 0.1fr 2.5fr 1.2fr 1fr;
  }

  .personal-page-buttons-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: start;
  }
}

</style>
