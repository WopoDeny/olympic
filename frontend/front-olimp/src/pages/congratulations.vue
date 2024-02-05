<template>
<div class='congrat-page'>
    <headerVue />
    <div class='content'>
        <div class='olimp-title'>Олимпиада</div>
        <div class='wrap-text'>
            Поздравляем {{username}} с окончанием теcтирования!<br>
            Вы набрали {{score}} из {{this.$store.state.maxScore}} баллов<br>
            Результаты можно будет узнать по <a class='link-wrap' @click="toLeaderBoard()">ссылке</a>, после окончания олимпиады
        </div>
    </div>
</div>
</template>
<script>
import headerVue from '../components/header'
export default{
    name: 'congratulations',
    components: {headerVue},
    created(){
      if(window.localStorage.getItem('authFlag')=='false'){ // if not authorized -> redirect -> mainPage
        this.$router.push({name: 'mainPage'})
      }
    },
    async mounted(){
        const response = await this.$api.task.getScore(window.localStorage.getItem('userId'), window.localStorage.getItem('olimId'))
        this.score = response.data.score_user
        this.username = response.data.user_name

    },
    data(){
        return {
            score: null,
            username: ''
        }

    },
    methods:{
        async toLeaderBoard(){
            const response= await this.$api.task.getLeaderBoard(window.localStorage.getItem('olimId'))
            console.log(response)
            if(response.data.flag){
                // save to store
                this.$store.state.leaderboard.users= response.data.list_users
                this.$store.state.leaderboard.scores= response.data.list_users_score
                this.$router.push({name: 'results'})
            }else{
                alert('Олимпиада ещё не закончилась, вы сможете узнать результаты позднее')
            }
        }
    }



}
</script>
<style scoped>
.congrat-page{
    width: 100%;
    height: 100%;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.olimp-title{
    margin-top: 200px;
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 47px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
}
.wrap-text{
    width: 1000px;
    height: 93px;
    font-family: 'IBM Plex Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    display: block;
    align-items: center;
    text-align: center;
    color: #000000;
}
.link-wrap{
    text-decoration: underline;
}
</style>
