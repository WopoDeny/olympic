<template>
    <div class="main-container">
        <!--Переход на главную-->
        <div class="home_href" @click="$router.push({ name: 'admin' })">
            <img src="../assets/images/favicon1.png" />
        </div>
        <addOlimpFormVue />
    </div>
</template>
<script>
import  addOlimpFormVue from '../old_components/addOlimpForm.vue'

export default {
    name:"addOlimp",
    components:  {addOlimpFormVue},
}
</script>
<style scoped>
.home_href {
  width: 79px;
  height: 79px;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>
