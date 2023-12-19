export default function(instance){
    return {
        // запрос на задание
        getTask(id){
            return instance.get(`/api/event/${id}`)
        },
        // отправка на сервер ответа
        postAnswerToServer(id, payload){
            return instance.post(`/api/event/${id}`, payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
        },
        //отправка всей олимпиады на сервер
        postAnswer(payload){
            return instance.post('api/end/',payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
        },
        addOlimpiad(payload){
            return instance.post('/api/add_olimp', payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
        },
        addTask(payload){
            return instance.post('/api/add_task', payload, {
                headers:{
                    'Content-Type': 'application/json'
                }
            });
        },
        getResultBoard(){
            return instance.get('/api/end')
        },
        getScore(user_id, olimp_id){
            return instance.get(`/api/end/result?id_user=${user_id}&id_olimpiad=${olimp_id}`)
        },
        getLeaderBoard(id){
            return instance.get(`/api/leader_board?id_olimp=${id}`)
        }
        
    }
}
