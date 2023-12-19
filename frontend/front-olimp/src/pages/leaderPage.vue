<template>
  <div>
    <headerVue />
    <div class='table-title'>Таблица результатов</div>
    <div class="lider">
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
            <th scope="row">{{ row.id + 1 }}</th>
            <td>{{ row.name }}</td>
            <td>{{ row.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import headerVue from '../components/header'
export default{
    name: 'leaderboard',
    components: {headerVue},
    created(){
      if(window.localStorage.getItem('authFlag')=='false'){ // if not authorized -> redirect -> mainPage
        this.$router.push({name: 'mainPage'})
      }
    },
    mounted(){
        for(let i=0; i<this.$store.state.leaderboard.users.length; i++){
            this.table.push({
                id: i,
                name: this.$store.state.leaderboard.users[i],
                score: this.$store.state.leaderboard.scores[i]
            })
        }
    },
    data(){
        return {
            table: []
        }
    }
}
</script>
<style scoped>
.table-title {
  margin-top: 40px;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lider {
  display: flex;
  align-items: center;
  justify-content: center;
}

table {
  margin-top: 50px;
  table-layout: fixed;
  border-collapse: collapse;
  border: 3px solid #000000;
}

thead th:nth-child(1) {
  border: 3px solid #000000;
  width: 15%;
}

thead th:nth-child(2) {
  border: 3px solid #000000;
  width: 35%;
}

thead th:nth-child(3) {
  border: 3px solid #000000;
  width: 30%;
}

thead th:nth-child(4) {
  border: 3px solid #000000;
  width: 20%;
}

th,
td {
  color: #000000;
  border: 3px solid #000000;
  padding: 20px;
}
</style>
