<template>
    <div class="main-container">
        <div class="logo-container"></div>
        <button class="add-olimp-btn" @click="$router.push({name: 'addOlimp'})">Добавить событие</button>
        <button class="add-task-btn" @click="$router.push({name:'addTask'})">Добывить задание</button>
    </div>
</template>
<script>

export default {
    name: 'admin',
}
</script>
<style scoped>
.main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.logo-container{
    width: 262px;
    height: 296px;
    background-size: 100% 100%;
    background-image: url(../assets/images/logo.png);
    margin: 20px;
}
.add-olimp-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #000000;
    font-family: 'Roboto';
    margin: 5px;
}
.add-task-btn{
    width:184px;
    height: 42px;
    padding-top:8px;
    border: solid 1px;
    text-align: center;
    border-radius: 8px;
    color: #000000;
    font-family: 'Roboto';
    margin: 5px;
}
</style>
