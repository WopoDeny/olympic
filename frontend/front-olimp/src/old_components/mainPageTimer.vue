<template>
    <div class="timer">
        <div class="timer-cell">{{divDays}}</div><span class="discr">Дней</span>
        <div class="timer-cell">{{divHours}}</div><span class="discr">Часов</span>
        <div class="timer-cell">{{divMinutes}}</div><span class="discr">Минут</span>
        <div class="timer-cell">{{divSeconds}}</div><span class="discr">Секунд</span> 
    </div>
</template>
<script>

export default {
    name: 'mainPageTimer',
    data(){ // оставшеея время
        return{
            divDays: 0,
            divHours: 0,
            divMinutes: 0,
            divSeconds: 0,
            timer: null
        }
    },

    async mounted(){
        const flag = await this.get_time()
        if(flag){
            this.startTiming();
        }
        
    },
    methods: {
        // реализация отсчета времени
        countTime(target){
            var now = new Date(); // узнаем текущее время
            var diff = parseInt((target - now)/1000); // получим разность во времени в секундах 
            if(diff>0){
                this.divDays = parseInt(diff/(24*60*60)); //  вычисляем оставшиеся дни, минуты, секунды
                this.divHours = parseInt((diff%(24*60*60))/(60*60));
                this.divMinutes = parseInt((diff%(60*60)/60));
                this.divSeconds = diff % 60;
            }else{
                clearTimeout(this.timer); // прекращение счета
            }
            
        },
        startTiming(){
            let target = this.$store.state.startTime; // timestamp
            this.timer = setInterval(this.countTime, 1000, target);
            },

        async get_time(){
            try{
                const response = await this.$api.mainPage.getTime();
                let time = new Date();
                time = time.getTime();
                const end = response.data.time*1000;
                if(time < end ) // если начало, записываем в store, прокидываем пропсы на большой таймер
                {
                    this.$store.state.startTime = end
                }else{
                    const milleseconds = response.data.time *1000; // для конструктора Date нужно миллисекунды
                    const date = new Date(milleseconds)
                    this.setEndTime(date); // записываем в стор, чтобы прокинуть пропсы мелкого таймера
                }
                return true
            }catch(error){
                console.log(error);
                return false
            }
        }
        }

}
</script>

<style scoped>
.timer{
    width: 633px;
    display: flex;
    margin: 20px;
}
.timer-cell{
    display: table-cell;
    width: 69px;
    height: 59px;
    border-radius: 10px;
    border: solid 3px;
    text-align: center;
    vertical-align:middle;
    font-family: 'Roboto';
    font-size: 32px;
    color: #FDF8F8; 
}
.discr{
    display: flex;
    width: 138px;
    height: 24px;
    margin-left: 5px;
    margin-top: 12px;
    text-align: center;
    font-family: 'Roboto';
    font-size: 20px;
    color: #FDF8F8; 
}
</style>