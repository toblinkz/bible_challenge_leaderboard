<template>
  <div class="dashboard-container">
    <div class="dashboard-container--right-side">
      <div class="dashboard-container--navbar">
        <Navbar />
      </div>
      <div class="dashboard-container--main">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard-container {
  display: flex;
  width: 100%;
}

.dashboard-container--left-side {
  background: #ffff;
  width: 15%;
}

.dashboard-container--right-side {
  background: #ffff;
  width: 100%;
}

.dashboard-container--navbar {
  width: 100%;
  background: #ffff;
}

.dashboard-container--main {
  background: #f6f6f6;
  padding: 52px 48px 24px;
  overflow: hidden;
}
</style>
