<template>
  <div class="page-container">
    <div class="header">
      <div class="header-primary">
        <div class="header-primary--text">
          <p style="font-size: 24px; font-weight: 700; line-height: 120%">
            Welcome to Global leaderboard
          </p>
          <p>Monitor the leader board</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
