<template>
    <form class="add-olimp" @submit.prevent="postOlimp">
        <!--Название олимпиады-->
        <div class="form-group">
            <label for="name-olimp" class="input-descr">Название олимпиады:</label>
            <input id="name-olimp" class="form-control" :class="$v.form.nameEvent.$error ? 'is-invalid' : ''"
            v-model.trim="form.nameEvent">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.nameEvent.required" class="invalid-feedback">
            Обязательное поле
            </p>
      </div>
    <!--Время начала-->
      <div class="form-group">
            <label for="date-start" class="input-descr">Время начала олимпиады</label>
            <input id="date-start" class="form-control" :class="$v.form.dateStart.$error ? 'is-invalid' : ''"
            v-model.trim="form.dateStart">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.dateStart.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="!$v.form.dateStart.dateValid" class="invalid-feedback">
                Введите дату в правильном формате</p>
      </div>
      <!--время выполнения-->
      <div class="form-group">
            <label for="time-exec" class="input-descr">Время выполнения олимпиады</label>
            <input id="time-exec" class="form-control" :class="$v.form.timeExecution.$error ? 'is-invalid' : ''"
            v-model.trim="form.timeExecution">
            <!--Предупреждение о неправильном вводе-->
            <p v-if="!$v.form.timeExecution.required" class="invalid-feedback">
            Обязательное поле
            </p>
            <p v-if="!$v.form.timeExecution.digitValid" class="invalid-feedback">
                Введите число</p>
      </div>
      <button type="submit" class="sign-up-btn">Добавить событие</button>
    </form>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
const notDigitPattern = /[^\d]/; // валидация для ввода стоимости задачи
const digitValid = (string) => !notDigitPattern.test(string);

const DatePattern = /\d{2}\.\d{2}\.\d{4}\s\d{2}:\d{2}/; // валидация для ввода даты
const dateValid = (string) => DatePattern.test(string);

export default {
    name: "addOlimpForm",
    mixins: [validationMixin],
    data(){
        return {
            form: {
                nameEvent: '', // название олимпиады
                dateStart: 'ДД.ММ.ГГГГ ЧЧ:ММ', // дата начала
                timeExecution: null // время вывполнения в минутах
            }
        }
    },
    // проверка формы 
    validations: {
        form: {
            nameEvent: {required},
            dateStart: {required, dateValid},
            timeExecution: {required, digitValid}
        }
    },
    methods: {
        //отправка на сервер
        async postOlimp(){
            this.$v.form.$touch()
            if (!this.$v.form.$error) { // если форма верна
                const payload = JSON.stringify({
                    "name_event": this.form.nameEvent,      // Название мероприятия
                    "date_start": this.parseTime(this.form.dateStart),      // Время начала (В unix time stamp)
                    "time_execution": Number(this.form.timeExecution)  // Время выполнения (в минутах) 
                });
                try{
                    const response = await this.$api.task.addOlimpiad(payload);
                    console.log(response);
                }catch(error){
                    console.log(error)
                }

            }
        },
        // конвкртирует строку в unix timestamp (sec)
        parseTime(timeString){
            let timeArray = timeString.split(' ');
            let date = timeArray[0].split('.');
            let hours = timeArray[1].split(':');
            let requireDate = new Date(date[2], date[1]-1, date[0],hours[0],hours[1],0,0);
            return requireDate /1000 // в секундах

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
    font-size: 18px;
    color: #ffffff;
}
.form-control {
  width: 600px;
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
