<template>
    <div>
        <div class="timer-cell">{{time.divMinutes}}:{{time.divSeconds}}</div>
    </div>
</template>
<script>
/* Предлагаю задавать время окончания написания олимпиады через пропсы таймера, если просто отсчет времени делать,
то при перезагрузке страницы таймер будет сбрачываться */
export default {
    name: 'timer',
    data(){ // оставшеея время
        return{
            time: {
                divMinutes: 0,
                divSeconds: 0,
            },
            timer: null
        }
    },
    mounted(){
        console.log(window.localStorage.getItem('endTime'))
        this.startTiming(window.localStorage.getItem('endTime'));
    },
    methods: {
        // реализация отсчета времени
        countTime(target){
            let now = Date.now(); // узнаем текущее время
            let diff = parseInt((target - now)/1000); // получим разность во времени в секундах
            if(diff>0){
            this.time.divMinutes =  parseInt((diff%(24*60*60))/(60*60))*60+parseInt((diff%(60*60)/60)); // считаем остаток минут
            this.time.divSeconds = diff%60;
            }else {
                clearTimeout(this.timer); // прекращение счета
            }

        },
        startTiming(endTimestamp){
            this.timer = setInterval(this.countTime,1000, endTimestamp);
            }
        }
}


</script>
<style>
.timer-cell{
    display: table-cell;
    width: 139px;
    text-align: center;
    vertical-align:middle;
    font-family: 'Roboto';
    font-size: 32px;
    color: #000000;
}

</style>
