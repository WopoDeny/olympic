<template>
    <div class="main-container">
        <!--Переход на главную-->
        <div class="home_href" @click="$router.push({ name: 'admin' })">
            <img src="../assets/images/favicon1.png" />
        </div>
        <addTaskFormVue />
    </div>
</template>

<script>
import  addTaskFormVue  from '../old_components/addTaskForm.vue'

export default {
    name:"addOlimp",
    components:  {addTaskFormVue},
}
</script>
<style scoped>
.home_href {
  width: 79px;
  height: 79px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.main-container{
    width: 100vw;
    height: 110vh;
    background-size: cover;
    background-attachment: fixed;
    background-image: url(../assets/images/bg.jpg)
}
</style>
