<template>
  <div class="score-card--container">
    <div class="number">1</div>

    <div class="player">
      <img src="~/assets/icons/general/leader.svg" class="leader" />

      <div class="player-section">
        <p>Jesulademi</p>

        <div class="player-details">
          <div class="player-detail">
            <img src="~/assets/icons/general/UK.svg" class="leader" />
            <p class="country">UKG</p>
          </div>

          <div class="player-detail">
            <img src="~/assets/icons/general/badge.svg" class="leader" />
            <p>Child</p>
          </div>
        </div>
      </div>
    </div>

    <div class="coin">
      <img src="~/assets/icons/general/coin.svg" class="leader" />
      1,000,000
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.score-card--container {
  display: flex;
  gap: 21px;
  /* justify-content: space-between; */
  align-items: center;
  font-family: "Mikado", sans-serif;
  background: linear-gradient(193.12deg, #f9edbb -46.66%, #fbf7ac 109.69%);
  border: 1px solid #f4ffce;
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

.coin {
  display: flex;
  gap: 6px;
  background: #fffdeb;
  border-radius: 26px;
  box-shadow: 0px 2px 1px 0px #00000040 inset;
  box-shadow: 0px 1px 0px 0px #7f6f15;
  border: 1px solid #9d9446;
  /* width: 30%; */
  padding: 12px 18px;
  font-size: 14px;
  font-weight: 700;
  line-height: 18.86px;
  text-align: left;
  color: #554a0c;
}
</style>
