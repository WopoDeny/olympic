<template>
    <div class="solver_container">
        <div class="nav">
            <div class="home_href" @click="$router.push({name: 'home'})">
                <img src="../assets/images/favicon1.png" />
            </div> 
            <!--номер задания-->
            <div class="task-title">Задание № {{id+1}}</div>
            <timerVue class="timer" @endTime="timeHandler"></timerVue>
        </div>
        <!--прогрессбар-->
        <div class="progress-bar-task">
                <div v-for="index in N_tasks" :key="index" class="progress-bar-cell" @click="getTaskViaCell(index-1)">{{index}}</div>
        </div>
        <div class="task-title">{{title}}
            <span class="score">{{scores}} баллов </span>
        </div>
        <span class="task-descr">{{description}}</span>
        <!--описание задания-->
        <div class="descr">
            
            <span class="task-descr">{{text}}</span>
        </div>
        <div class="answer_input">
            <!--Тест с одним правильным вариантом-->
            <div class="test" v-if="this.type_answer==1">
                <div v-for="ans in answers" :key="ans">
                    <input type="radio" v-bind:value="ans" v-model="answer">
                    <label>{{ans}}</label>
                </div>
            </div>
            <!--Тест с несколькими правильными вариантами-->
            <div class="test" v-if="this.type_answer==0">
                <div v-for="ans in answers" :key="ans">
                    <input type="checkbox" v-bind:value="ans" v-model="answer">
                    <label>{{ans}}</label>
                </div>
            </div>
            <!--Ответ вводиться в форму-->
            <div class="custom-input" v-if="this.type_answer==2">
                <textarea class="custom-input" placeholder="Введите ответ" v-model="answer"></textarea>
            </div>  
            <!--Сопаставление колонок-->
            <div v-if="this.type_answer==3">
                <boardVue 
                id="this.id" 
                :answers="[{id:0, value:'red', column: 'left'},{id:1, value:'green', column: 'left'},{id:2, value:'blue', column: 'left'},
            {id:3, value:'1', column: 'right'},{id:4, value:'2', column: 'right'},{id:5, value:'3', column: 'right'}]"></boardVue>
            </div>
        </div>
        <div class="footer">
            <button type="submit" class="prev-btn" @click="getPrevTask"></button>
            <button type="submit" class="post-btn" @click="postAnswer">Сохранить решение</button>
            <button type="submit" class="next-btn" @click="getNextTask"></button>
            <button v-if="id == N_tasks - 1" class="finish-btn" @click="endOlimpHandler" type="submit">Закончить олимпиаду</button>
        </div>

    </div>
</template>

<script>
import boardVue from '../old_components/board.vue'
import timerVue from '../old_components/timer.vue'

export default ({
    name: "event",
    components: { boardVue, timerVue},
    // при создании -> запрос на сервер 
    created (){
        this.getTask(0)
    },
    // 0 - тест с несколькими ответами
    // 1 -тест с 1 ответом
    // 2 - ручной ввод
    data() {
        return {
            id: 0,
            task_id: null,
            title: "",                 // Название задачи
            text: "",                   // Текст задачи
            description: "",      // Пояснение к задаче
            image: null,                 // картинка
            scores: 0,               // Количество баллов, за решение задачи
            type_answer: null,     // Тип ответа (пояснение ниже)
            answers: null,             // Варианты ответа
            old_answer: null,       // текущий вариант ответа
            save: false,
            answer: null, // текуций ответ
            N_tasks: 4  // сколько всего задач
        }  

    },
    methods: { 
        // получаем задачку
        async getTask(id){
            try{
                const response = await this.$api.task.getTask(id)
                //this.title = response.data.title
                this.task_id = response.data.id_question
                this.text = response.data.question
                //this.image = response.data.image
                this.scores = response.data.score
                this.answers = response.data.answers
               // this.old_answer = response.data.old_answer
               // this.save = response.data.save
                this.type_answer = response.data.type_question
                // определяем описание
                switch(this.type_answer){
                    case 0:
                        this.description = 'Выберите несколько вариантов ответа'
                        break;
                    case 1:
                        this.description = 'Выберите один вариант ответа'
                        break;
                    case 2:
                        this.description = 'Введите ответ вручную'
                        break;
                }
                if(this.type_answer == 0 && !Array.isArray(this.answer)){ this.answer = [];} // для множественного выбора
            }catch(error){
                console.log(error)
            }
        },
        // запоминаем в стор ответ 
        saveAnswer(){
            this.$store.state.answers.set(this.id, this.answer) // костыль через store не получается  

        },
        // отправка ответа на сервер
        async postAnswer(){
            this.saveAnswer();
            try{
                const payload = JSON.stringify({
                    "id_task": this.task_id,
                    "answer": this.$store.state.answers.get(this.id), // костыль через store не получается
                    "type": this.type_answer,
                    "id_user": this.$store.state.userId
                })
                console.log(payload);
                await this.$api.task.postAnswerToServer(this.id,payload);
            }
            catch(error){
                console.log(error)
            }
            
        },
        // предыдущее задание
        async getPrevTask(){
            this.saveAnswer() // сохранение ответа
            try{
                if(this.id > 0){
                    this.id--;
                    // автополучение
                    this.answer = this.$store.state.answers.get(this.id)
                    await this.getTask(this.id);

                }else{
                    this.id = 0;
                    this.answer = this.$store.state.answers.get(this.id)
                    await this.getTask(this.id);
                    
            }

            }catch(error){
                console.log(error)
            } 
            
        },
        // следующие задание
        async getNextTask(){
            this.saveAnswer() // сохранение ответа
            if(this.id< this.N_tasks-1)
            {
            try{
                this.id++;
                this.answer = this.$store.state.answers.get(this.id)
                await this.getTask(this.id);

            }catch(error){
                console.log(error);
            }
        }else{
            this.id = this.N_tasks-1;
        }

        },
        //multipleAnswer(value){this.answer.push(value)}// для множественного выбора

        // переход на задачу с кнопки прогрессбара
        async getTaskViaCell(id){
            this.saveAnswer() // сохранение ответа
            try{
                this.id = id
                this.answer = this.$store.state.answers.get(this.id)
                console.log(this.answer)
                await this.getTask(this.id);
            }catch(error){
                console.log(error)
            }

        },
        // сдача на сервер всей олимпиады
        async postOlimpiad(){
            this.saveAnswer();
            var payload = Object.fromEntries(this.$store.state.answers); // выгружаем из стора все ответы
            payload.user_id = this.$store.state.userId
            const response =await this.$api.task.postAllAnswers(JSON.stringify(payload));
            this.$store.state.score = response.data.user_score
            this.$store.state.total= response.data.all_score
            this.$store.state.name= response.data.name_user
            
        },
        async endOlimpHandler(){
            await this.postOlimpiad() // постим на сервер 
            this.$store.state.passOlimpFlag = true // фиксируем прохождение олимпиады
            this.$router.push({name: 'results'}) // директ на домой
        },
        // если закончилось время отправляем олимпиаду и директим на резалтс
        async timeHandler(){
            await this.postOlimpiad()
            // директ на резалтс - будет когда сделаем резалтс    
        }
    }

})
</script>

<style scoped>
.task-title{
    width: 450px;
    height: 57px;
    left: 79px;
    top: 22px;
    margin-left: 50px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
}
.progress-bar-task{
    display:flex;
    margin:0;
    padding: 1px;
    margin-left: 50px;
   
}
.progress-bar-cell{
    margin-left: 5px;
    width: 48px;
    height: 45px;
    border: solid 1px;
    border-radius: 5px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 32px;
    color: #FDF8F8; 
}
.score{
    display: inline;
    font-size: 24px; 
}
.descr{
    margin-left: 50px;
    width: 900px;
    height: 230px;
    left: 100px;
    top: 181px;
    background: #FFFFFF;
    border-radius: 20px;
}
.task-descr{
    margin-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
}
.answer_input{
    margin-left: 50px; 
    margin-top:10px;
}
.custom-input{
    width: 731px;
    height: 72px;
    background: #FFFFFF;
    border-radius: 15px;
    font-family: 'Roboto';
    font-size: 24px;
}
.footer{
    height:95px;
    display: flex;
}
.prev-btn{
    display: inline;
    width: 105px;
    height: 95px;
    margin-left: 50px;
    margin-top: 40px;
    border-radius: 15px;
    background-image: url(../assets/images/prev.png);
}

.post-btn{
    display: inline;
    width: 300px;
    height: 95px;
    margin-top: 40px;
    margin-left: 20px;
    background: #FFFFFF;
    border-radius: 15px;
}
.next-btn{
    display: inline;
    width: 105px;
    height: 95px;
    margin-left: 50px;
    margin-top: 40px;
    border-radius: 15px;
    background-image: url(../assets/images/next.png);
}
.finish-btn{
    display: inline;
    width: 300px;
    height: 95px;
    margin-top: 40px;
    margin-left: 20px;
    background: #FFFFFF;
    border-radius: 15px;
}
.test{
    font-family: 'Roboto';
    font-size: 20px;
    color: #FDF8F8;
}
.timer{
    display:flex;
    width: 300px;
    height: 59px;
    top: 22px;
    left: 1000px;
}
</style>
