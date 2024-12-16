<template>
  <div class="page-container">
    <div class="header">
      <div class="header-primary">
        <div class="header-primary--text">
          <p style="font-size: 24px; font-weight: 700; line-height: 120%">
            Welcome to Bible Boot Camp leaderboard
          </p>
          <p>Monitor the leader board</p>
        </div>
      </div>
    </div>

    <div class="body">
      <ScoreCard v-for="index in 20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScoreCard from "../components/leaderboard/ScoreCard.vue";
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2rem;
}

.header {
  width: 100%;
}

.header-primary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-primary--text {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: #000;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.body {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 2rem 7rem;
  /* margin: 2rem 10rem; */
  border-radius: 4px;
  /* width: 70%; */
  background: #0b79d1;
}
</style>
