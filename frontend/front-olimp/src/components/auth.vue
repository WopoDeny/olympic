<template>
  <div class='main-container'>
    <h1>Auth</h1>
    </div>  
</template>
<script>
export default {
    name: "Auth",
    async mounted(){
        window.localStorage.setItem('getTime', false)
        let Yatoken = /access_token=([^&]+)/.exec(document.location.href)[1];
        if(Yatoken != "")
        {
            window.localStorage.setItem('token', Yatoken);
            // get from document
            const textData = await this.$api.auth.yandexAuthGetInfo(Yatoken)
            // get email and login
            // post to server
            const payload = JSON.stringify({
              "username": textData.data.login,
              "first_name": textData.data.first_name,
              "last_name": textData.data.last_name,
              "email": textData.data.default_email,
              "token": Yatoken,
              "platorm": "yandex"
            });
            try {
                const response = await this.$api.auth.postYandexAuth(payload);
                window.localStorage.setItem('userId', response.data.id_user); // save to ls
                window.localStorage.setItem('authFlag',true); // save to ls
            }catch(e){
                console.log(e)
            }
        }
        this.$router.push({name:'personalCabinet'})
        
        
    },
    data(){
        return{
            token: ""
        }
    },

}
</script>
<style scoped>

</style>
