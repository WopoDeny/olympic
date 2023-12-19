<template>
    <form class="add-olimp" @submit.prevent="postTask">
        <!--Название задачи-->
        <div class="form-group">
            <label for="title" class="input-descr">Название задачи</label>
            <input id="title" class="form-control" :class="$v.form.title.$error ? 'is-invalid' : ''"
            v-model.trim="form.title">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.title.required" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>
    <!--текст-->
      <div class="form-group">
            <label for="text" class="input-descr" >Текст задачи</label>
            <input id="text" class="form-control" :class="$v.form.text.$error ? 'is-invalid' : ''"
            v-model.trim="form.text">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.text.required" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>
      <!--пояснение-->
      <div class="form-group">
            <label for="descr" class="input-descr">Пояснение к задаче</label>
            <input id="descr" class="form-control" :class="$v.form.descr.$error ? 'is-invalid' : ''"
            v-model.trim="form.descr">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.descr.required" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>
      <div class="form-group">
            <label for="image" class="input-descr">Пояснение к задаче</label>
            <input id="image" class="form-control" :class="$v.form.image.$error ? 'is-invalid' : ''"
            v-model.trim="form.image">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.image.required" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>      
      <!--стоимость-->
      <div class="form-group">
            <label for="scores" class="input-descr">Количество баллов, за решение задачи</label>
            <input id="scores" class="form-control"  :class="$v.form.scores.$error ? 'is-invalid' : ''"
            v-model.trim="form.scores">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.scores.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="!$v.form.scores.digitValid" class="invalid-feedback">
            Введите число
            </p>
      </div>
      <!--тип задачи-->
      <div class="form-group">
            <span class="input-descr">Тип ответа</span><br>
            <input type="radio" v-model="form.typeAnswer" value="expanded" /><label class="input-vars">Ручной ввод ответа</label><br>
            <input type="radio" v-model="form.typeAnswer" value="test" /><label class="input-vars">Тест с одним вариантом ответа</label><br>
            <input type="radio" v-model="form.typeAnswer" value="stest" /><label class="input-vars">Тест с несколькими вариантами ответа</label><br>
            <input type="radio" v-model="form.typeAnswer" value="board" /><label class="input-vars">Задание с сопаставлением колонок</label><br>
            <!--Предупреждение о неправильном вводе-->
            <p v-if="$v.form.typeAnswer.$error" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>
      <!--варианты ответа-->
      <div class="form-group">
            <label for="answers" class="input-descr">Варианты ответа</label>
            <input id="answers" class="form-control" :class="$v.form.answers.$error ? 'is-invalid' : ''"
            v-model.trim="form.answers">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.answers.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="$v.form.answers.$error" class="invalid-feedback">
            Введите в правильной форме
            </p>
      </div>
      <!--правильный ответ-->
      <div class="form-group">
            <label for="correctAnswers" class="input-descr">Правильный вариант ответа</label>
            <input id="correctAnswers" class="form-control"  :class="$v.form.correctAnswers.$error ? 'is-invalid' : ''"
            v-model.trim="form.correctAnswers">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.correctAnswers.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="$v.form.correctAnswers.$error" class="invalid-feedback">
            Введите в правильной форме
            </p>
      </div>
      <button type="submit" class="sign-up-btn">Добавить задание</button>
    </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
/// для валидации ручного ввода
const expandAnsversValid = (string)=>{
    if(string != ''){
        return false
    }else{
        return true
    }
};
const notDigitPattern = /[^\d]/; // валидация для ввода стоимости задачи
const digitValid = (string) => !notDigitPattern.test(string);

const testAnswerPattern = /(\w,)+\w/; // валидация вариантов ответа для теста
const testAnswerValid = (string)=> testAnswerPattern.test(string);

const boardAnswerPattern = /((\w:)+\w);((\w:)+\w)/; // валидация вариантов ответа для cоответствия колонок
const boardAnswerValid= (string) => boardAnswerPattern.test(string);

export default {
    name: "addTaskForm",
    mixins: [validationMixin],
    data(){
        return {
            form: {
                title: '', // название олимпиады
                text: '',
                descr: '',
                image: '', // ссылка
                scores: '',
                typeAnswer: '',
                answers: 'a,b,c - для теста a:b:c;1:2:3 -для соответствия колонок',
                correctAnswers: 'a,b,c - для теста a:b:c;1:2:3 -для соответствия колонок'

            }
        }
    },
    // проверка формы 
    validations() {
        if(this.form.typeAnswer == 'expanded')
        {
        return{
            form: {
                title: {required},
                text: {required},
                descr: {required},
                image:{required},
                scores: {required, digitValid},
                typeAnswer: {required},
                answers: {expandAnsversValid},
                correctAnswers: {required}
            }
        }
        }else if(this.form.typeAnswer  == 'stest'){
            return {
                form:{
                    title: {required},
                    text: {required},
                    descr: {required},
                    image:{required},
                    scores: {required, digitValid},
                    typeAnswer: {required},
                    answers: {required, testAnswerValid},
                    correctAnswers: {required, testAnswerValid}
                }
            }
        }else if (this.form.typeAnswer  == 'test'){
            return {
                form:{
                    title: {required},
                    text: {required},
                    descr: {required},
                    image:{required},
                    scores: {required, digitValid},
                    typeAnswer: {required},
                    answers: {required, testAnswerValid},
                    correctAnswers: {required}
                }
            }

        }else if(this.form.typeAnswer  == 'board'){
            return{
                form: {
                    title: {required},
                    text: {required},
                    descr: {required},
                    image:{required},
                    scores: {required, digitValid},
                    typeAnswer: {required},
                    answers: {required, boardAnswerValid},
                    correctAnswers: {required, boardAnswerValid}
                }
            }
        }else{
            return{
                form:{
                    title: {required},
                    text: {required},
                    descr: {required},
                    image:{required},
                    scores: {required, digitValid},
                    typeAnswer: {required},
                    answers: {required},
                    correctAnswers: {required}
                }
            }
        }
    },
    methods: {
        //отправка на сервер
        async postTask(){
            this.$v.form.$touch()
            if (!this.$v.form.$error) { // если форма верна
                const payload = JSON.stringify({
                    "title": this.form.title,                 // Название задачи
                    "text": this.form.text,                   // Текст задачи
                    "description": this.form.descr,      // Пояснение к задаче
                    "image": this.form.image,                 // картинка
                    "scores": Number(this.form.scores),                // Количество баллов, за решение задачи
                    "type_answer": this.form.typeAnswer,      // Тип ответа (пояснение ниже)
                    "answers": this.getCorrectAnswerForm(this.form.answers),              // Варианты ответа
                    "correct_answer": this.getCorrectAnswerForm(this.form.correctAnswers) // Правильный вариант ответа
                });
                try{
                    const response = await this.$api.task.addTask(payload);
                    console.log(response);
                }catch(error){
                    console.log(error)
                }

            }
        },
        getCorrectAnswerForm(answer){
            if(this.form.typeAnswer == 'test' || this.form.typeAnswer == 'stest'){
                return this.getTestAnswer(answer);
            } else if (this.form.typeAnswer == 'board'){
                return this.getBoardAnswer(answer);
            } else if(this.form.typeAnswer == 'expanded'){
                return answer;
            }
        },
        // приведение введенного ответа к нужному виду
        getTestAnswer(answer){ 
             // на выходе массив из строк, получается сплитом ,
             return answer.split(',');
        },
        // приведение введенного ответа к нужному виду
        getBoardAnswer(answer){ 
            // на выходе обьект, колонки получаются сплитом ;  а их варианты - сплитом ,
            let columns = answer.split(';');
            let leftColumn = columns[0].split(':');
            let rightColumn =  columns[1].split(':');
            return {
                "columnsLeft": leftColumn,
                "columnsRight": rightColumn
            }
        }

    }

}
</script>

<style scoped>
form{
    padding-left:30px;
}
.input-descr{
    font-family: 'Roboto';
    font-size: 24px;
    color: #ffffff;
}
.input-vars{
    font-family: 'Roboto';
    font-size: 18px;
    color: #ffffff;
}
.form-control {
  width: 900px;
  font-size: 24px;
}
.sign-up-btn {
  width: 260px;
  height: 70px;
  border-radius: 8px;
  background-color: #ffffff00;
  border-color: #ffffff;
  color: #ffffff;
}

</style>
