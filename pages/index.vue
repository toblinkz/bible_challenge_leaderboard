<template>
  <div class="page-container">
    <div class="header">
      <div class="header-primary">
        <div class="header-primary--text">
          <p style="font-size: 24px; font-weight: 700; line-height: 120%">
            Challenge Leaderboard
          </p>
          <p>Monitor the leaderboard</p>
          <p>
            Check out those taking the lead; Not joined; Join the challenge to
            be a part of them
          </p>
        </div>
      </div>
    </div>

    <div class="body">
      <div class="spinner" v-if="isLoadingLeaderBoard">
        <div class="loader"></div>
      </div>

      <ScoreCard
        v-else
        v-for="(rank, index) in leaderBoard"
        :key="index"
        :position="rank.position"
        :avatar="rank.playerId"
        :name="rank.playerName"
        :score="rank.totalScore"
      />

      <!-- <ChallengeCard v-for="index in 20" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
import { getLeaderBoard } from "~/composables/useLeaderBoard";

const authStore = useAuthStore();
const isLoadingLeaderBoard = ref(false);
const leaderBoard = ref([]);

const getScoreBoard = async () => {
  // isLoadingLeaderBoard.value = true;
  try {
    let response = (await getLeaderBoard()) as unknown as any;
    leaderBoard.value = response.data as unknown as any;
    isLoadingLeaderBoard.value = false;
  } catch (e) {
    isLoadingLeaderBoard.value = false;
  }
};

let token = ref(
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzM0MzU1NDQ4LCJleHAiOjE3NTAwMjg0MDB9.vyhbV8IFHpDXV5lOAhoxHavRggTd7Kbca7-NX2_VUjaoOmYL9-iKZY5h5eJ4tId8cGgASNgDw-CG3J6tPaFThQ"
);

onMounted(() => {
  isLoadingLeaderBoard.value = true;
  localStorage.setItem("local", token.value);
  authStore.login(token.value);
  getJwtBodyAndSetNeededData(token.value);
  setInterval(() => {
    getScoreBoard();
  }, 5000);
});
</script>

<style scoped>
.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 4rem;
  background: #0b79d1;
}

.header {
  width: 100%;
}

.header-primary {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
}

.header-primary--text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.header-primary--text p:first-child {
  color: #0b79d1;
  color: #ffffff;
}

.header-primary--text p:nth-child(2) {
  background: rgb(139, 241, 139);
  color: #000000bc;
  font-weight: 600;
  padding: 12px;
  border-radius: 12px;
}

.header-primary--text p:nth-child(3) {
  font-weight: 600;
  font-size: 16px;
  color: #000000bc;
  color: #ffffff;
}

.body {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  padding: 2rem 7rem;
  /* margin: 2rem 10rem; */
  border-radius: 4px;
  width: 60%;
  background: #0b79d1;
}

.spinner {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 30%;
  background: linear-gradient(0deg, #ffffff 30%, #ffffff 0 70%, #ffffff 0) 50%/8%
      100%,
    linear-gradient(90deg, #ffffff 30%, #ffffff 0 70%, #ffffff 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes l23 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
