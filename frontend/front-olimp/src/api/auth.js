
export default function(instance){
    return {
        // запрос на задание
        register(payload){
            return instance.post('/api/reqister',payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
        },
        login(payload){
            return instance.post('/api/auth',payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            });
        },
        postYandexAuth(payload){
            return instance.post('api/yandexAuth',payload, {
                headers:{
                    "Content-Type": "application/json"
                }
            } );
        },
        // регистрация через яндекс -Ю возвращает токен
        yandexAuthGetInfo(token){
            return instance.get(`https://login.yandex.ru/info?format=json&oauth_token=${token}`);
        },
        getlk(id_user){
            return instance.get(`/api/lk?id_user=${id_user}`)
        }
    }
}
