<template>
    <div @click="signIn">
        <img class="doc-c-image doc-c-image"
         src="../assets/images/yandex.svg"/>
    </div>
</template>

<script>
const yandexAppId = 'e5684b66613f4cf1b3658e06514b4d75';
export default{
    name: "yandexAuth",
    data(){
        return{
            externalScript: null
        }
        
    },
    methods: {
        async signIn(){
            window.location.href=`https://oauth.yandex.ru/authorize?response_type=token&client_id=${yandexAppId}`

        }
    }
}
</script>

<style scoped>

</style>
