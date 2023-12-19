<template>
    <div class="main-container">
        <nav class="navigation">
            <!--Переход на главную-->
            <div class="home_href" @click="$router.push({ name: 'home' })">
                <img src="../assets/images/favicon1.png" />
            </div>
            <div class="nav-text">
                Рейтинг участников
            </div>
        </nav>
        <div class = "title-leaderboard">
            <span class='congratulations'>Поздравляю, {{name}} вы набрали {{score}} из {{maxScore}} баллов, ждем на дне открытых дверей</span>
            <div class="show-btn" @click="getResults()">Показать рейтинг</div>
        </div>
            <div v-if="showboard" class="lider">
            <table>
                <thead>
                    <tr>
                        <th scope="col">Место</th>
                        <th scope="col">Фамилия Имя</th>
                        <th scope="col">Количество баллов</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in table" :key="row">
                        <th scope="row">{{row.id +1}}</th>
                        <td>{{row.name }}</td>
                        <td>{{row.score}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "leaderboard",
        mounted(){
        this.score = this.$store.state.score
        this.maxScore = this.$store.state.total
        this.name = this.$store.state.name
        this.showboard = false
    },
    data(){
        return {
            score: null,
            maxScore: null,
            name: '',
            showboard: false,
            table: []
        }
    },
    methods: {
        async getResults(){
            this.showboard = true
            const response = await this.$api.task.getResultBoard()
            let users = response.data.users_name
            let scores = response.data.score_user
            for(let i=0; i<users.length; i++){
                this.table.push({
                    id: i,
                    name: users[i],
                    score: scores[i]
                })
            }
            console.log(this.table)
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

}
.congratulations{
    text-align: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #FDF8F8;
    margin: 10px;
}
.show-btn{
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
.nav-text {
    margin: 0 auto;
    color: #ffffff;
    font-size: 48px;
}
.navigation {
  height: 100%;
  display: flex;
}
.lider {
    display: flex;
    align-items: center;
    justify-content: center;
}
table {
    margin-top: 100px;
    table-layout: fixed;
    border-collapse: collapse;
    border: 3px solid #ffffff;
}

thead th:nth-child(1) {
    border: 3px solid #ffffff;
    width: 15%;
}

thead th:nth-child(2) {
    border: 3px solid #ffffff;
    width: 35%;
}

thead th:nth-child(3) {
    border: 3px solid #ffffff;
    width: 30%;
}

thead th:nth-child(4) {
    border: 3px solid #ffffff;
    width: 20%;
}

th,
td {
    color: #ffffff;
    border: 3px solid #ffffff;
    padding: 20px;
}
</style>
