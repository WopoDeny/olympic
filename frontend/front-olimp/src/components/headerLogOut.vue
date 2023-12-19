<template>
  <div class = "header">
    <logo/>
    <p class="title">Военно-космическая академия имени А.Ф. Можайского</p>

    <div class="side-bar">
      <p class="side-bar-title"> Личный кабинет</p>
      <div v-if="login" f>
        <button class="btn-logOut">
          Выйти
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import logo from './logo'
  export default {
    name: 'headerLogOut',
    components: {
      logo
    },
    data(){
      return {
        login: 1
      }
    }
  }

</script>
<style>

.header {
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.title {
  position: absolute;
  width: 662px;
  height: 31px;
  left: 167px;
  top: 20px;

  font-family: 'IBM Plex Serif';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}
.side-bar{
  display: grid;
  align-items: baseline;
  grid-template-columns: 10fr 1fr;
  justify-items: end;
  flex-direction: row;
  justify-content: flex-end;
  line-height: 65px;


}
.side-bar-title{
  display: flex;

}
.btn-logOut{
  display: flex;
  background: #3D3D3D;
  border-radius: 4px;
  color: #FFFFFF;
}

</style>
