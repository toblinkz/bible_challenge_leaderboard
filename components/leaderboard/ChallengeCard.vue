<template>
  <div class="score-card--container">
    <div class="number">1</div>

    <div class="player">
      <img src="~/assets/icons/general/leader.svg" class="leader" />

      <div class="player-section">
        <p>Arturo El</p>
      </div>
    </div>

    <div class="point">9690 points</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.score-card--container {
  display: flex;
  gap: 21px;
  align-items: center;
  font-family: "Mikado", sans-serif;
  background: #ffffff;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 6px;
  padding: 16px 21px;
}

.number {
  background: url("~/assets/icons/general/position.svg") no-repeat center;
  height: 50px;
  width: 50px;
  margin-bottom: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 8px;
  font-size: 20px;
  font-weight: 900;
  line-height: 26.94px;
  color: #ffffff;
}

.player {
  display: flex;
  gap: 12px;
  /* width: 40%; */
}

.player-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.player-section p:first-child {
  color: #0d468a;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.55px;
}

.player-details {
  display: flex;
  gap: 8px;
}

.player-detail {
  display: flex;
  gap: 2px;
}

.country {
  color: #082d5a !important;
  font-size: 13px;
  font-weight: 700;
  line-height: 17.51px;
}

.player-detail p {
  font-size: 13px;
  font-weight: 700;
  line-height: 17.51px;
  color: #5047c4;
}

.point {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #ffffff02;
  background: blue;
  border-radius: 8px;
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18.86px;
  color: #000000;
  width: 20%;
}
</style>
