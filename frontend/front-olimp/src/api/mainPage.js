export default function(instance){
    return {
        // запрос на время
        getTime(){
            return instance.get('http://localhost:3000/api/time')
        },
        // запрос на описание
        getInfo(){
            return instance.get('http://localhost:3000/api/index')
        }
    }
}



