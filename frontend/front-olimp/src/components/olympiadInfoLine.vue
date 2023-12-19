<template>
  <div class="info-block">
    <div class="point">
      <img class="point" src="../assets/images/point.svg">
    </div>

    <div>
    <p class="olympic-name">
      {{this.props.title}}
    </p>
    </div>

    <div>
      <p class="olympic-time">
        {{this.props.timeStart}}
      </p>
    </div>
    <!--leaderboard-->
    <div>
      <button class="olympic-result-button">
        <img class="olympic-result" src="../assets/images/olympic-result.svg">
      </button>
    </div>

    <div>
      <button class="olympic-sing-in-button">
        Начать
      </button>

    </div>

  </div>
</template>

<script>

export default {
  name: 'olimpiadInfoLine',
  props: {
    title: String,
    timeStart: String
  },
}

</script>

<style>
.info-block {
  justify-content: center;
  align-content: center;
  display: grid;
  align-items: center;
  background: #FBFBFB;
  border-radius: 5px;
  align-items: baseline;
  grid-template-columns : 0.1fr 2.5fr 1.2fr 0.5fr 1fr;

}


.olympic-result-button:hover {

  background: #D3E6CE;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
.olympic-result-button:active {
  background: #899d84;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}


.olympic-sing-in-button:hover {

  background: #D3E6CE;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.olympic-sing-in-button:active {
  background: #899d84;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
}
</style>


