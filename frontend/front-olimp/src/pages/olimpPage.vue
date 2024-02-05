<template>
  <div class="back-container">
    <div class="workspace">
      <div class="left-side">
        <div v-for="task in tasks" :key="task.id" class="task-container">
          <div class="task-header">
              <div class="number-task">
                Задание № {{task.id+1}}
              </div>
              <div class="ball-task">
                {{scores[task.id]}} балла
              </div>
          </div>
          <div class="question">
            {{task.question}}
          </div>
          <div class="answer">
            Выберите правильный ответ:
          </div>
            <div class="reply" v-if="task.type==1" >
              <div v-for="ans in task.answer" :key="ans">
                <input type="radio" v-bind:value="ans" v-model="user_answers[task.id]">
                <label>{{ans}}</label>
              </div>
            </div>
            <!--Тест с несколькими правильными вариантами-->
            <div class="reply" v-if="task.type==2">
              <div v-for="ans in task.answer" :key="ans">
                  <input type="checkbox" v-bind:value="ans" v-model="user_answers[task.id]">
                  <label>{{ans}}</label>
              </div>
            </div>
            <button class="hint-btn" @click="hintHandler(task.id)">Подсказка</button>
            <div class="hint" v-if="task.show_hint">{{task.hint}}</div>
        </div>

      </div>
      <div class="right-side">
        <div class="task-list">
          <div v-for="index in n_tasks" :key="index" class="square">
            {{index}}
          </div>
        </div>
        <div class="center">
          <button class="send" @click='postAnswers()'>
            Отправить результаты
          </button>
        </div>
        <timerVue class="timer" />
      </div>
    </div>
  </div>
</template>


<script>
import timerVue from '../old_components/timer.vue'
export default {
  name: 'olimpPage',
  components: {
    timerVue
  },
  created(){
      if(window.localStorage.getItem('authFlag')=='false'){ // if not authorized -> redirect -> mainPage
        this.$router.push({name: 'mainPage'})
      }
    },
  async mounted(){
    // get response
    const response = await this.$api.task.getTask(window.localStorage.getItem('olimId'))
    this.types = response.data.list_type
    this.answers = response.data.list_answers_all
    this.questions = response.data.name_questions
    this.list_id_questions = response.data.list_id_questions
    this.scores = response.data.list_score
    this.hints = response.data.list_discription
    this.$store.state.maxScore = this.scores.reduce((a,b)=>a+b,0)
    this.user_answers = this.questions.map(q=>[q])
    this.user_answers=[]
    this.n_tasks = this.questions.length;
    for(let i=0; i<this.questions.length; i++){ // init user_answers
      this.user_answers.push([])
    }

    for(let i=0; i<this.questions.length; i++){// init tasks
      this.tasks.push({
        id: i,
        type: this.types[i],
        question: this.questions[i],
        answer: this.answers[i],
        hint: this.hints[i],
        show_hint: false
      })
    }

  },
  data(){
    return {
      tasks: [],
      user_answers: [],
      types: [],
      answers: [],
      questions: [],
      list_id_questions: [],
      checked: [],
      scores: [],
      hints:['hint','hint','hint','hint','hint','hint','hint'],
      n_tasks: null,
    }
  },
  methods:{
    async postAnswers(){
      for(let i=0; i<this.questions.length; i++){
          let payload = {
          id_olimpiad:  window.localStorage.getItem('olimId'),
          id_user: window.localStorage.getItem('userId'),
          id_guestions: this.list_id_questions[i],
          user_answers: this.user_answers[i]
          }
          console.log(payload.user_answers)
          if(payload.user_answers.length!= 0){
            try{
                let response = await this.$api.task.postAnswer(payload)
                console.log(response)
            }catch(e){
              console.log(e)
            }
          } else{
            continue;
          }
      }
      this.$router.push({name: 'end'})
    },
    hintHandler(id){
      this.tasks[id].show_hint = this.tasks[id].show_hint == false ? true : false
    }
  },
}
</script>
<style scoped>

.hint-btn {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.hint {
  padding: 15px;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}

.timer {
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.send {
  background: #3D3D3D;
  border-radius: 5px;
  border: none;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 54px;

  color: #FFFFFF;
}

.square {
  background: #BBCDB7;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.right-side {
  position:fixed;
  left: 75vw;
  margin-right: 100px;
  width: 30%;
  max-width: 250px;
}

.task-list {
  display: grid;
  padding-top: 110px;
  grid-template-rows: repeat(auto-fill, 45px);
  grid-template-columns: repeat(auto-fill, 45px);
  grid-auto-columns: 100px;
  grid-auto-rows: 45px;
}

.workspace {
  display: flex;
}

.reply {
  margin: 5px;
}

.answer {
  margin: 20px;
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.question {
  display: flex;
  padding: 20px;
  background: #F9F9F9;
  box-shadow: 0px 6px 4px -3px rgba(0, 0, 0, 0.25);
  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  align-items: center;
  justify-content: center;

  color: #000000;
}

.number-task {
  width: 70%;
  margin-left: 20px;
}

.ball-task {
  width: 30%;
  display: flex;
  justify-content: center;
}

.task-header {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background: #D3E6CE;
  border-radius: 10px 10px 0 0;
}

.back-container {
  padding-top: 50px;
  width: 100%;
}

.task-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 120px 100px 100px;
}
</style>
