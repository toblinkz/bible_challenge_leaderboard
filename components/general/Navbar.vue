<template>
  <div class="dashboard-navbar-container">
    <SearchBar class="search-bar" />

    <div class="navbar-profile">
      <!-- <img
        src="https://res.cloudinary.com/dgdteyucq/image/upload/v1707955745/bible-game/navbar-icons/notification_nh4ujf.svg"
      /> -->

      BIBLE GAME LEADERBOARD

      <div class="profile">
        <img
          src="https://res.cloudinary.com/dgdteyucq/image/upload/v1707955746/bible-game/navbar-icons/avatar_i0lxup.svg"
          class="profile-image"
        />

        <div class="profile-text">
          <p class="primary-profile-text">{{ userName }}</p>
          <p class="secondary-profile-text">{{ userRole }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard-navbar-container {
  width: 100%;
  padding: 16px 8px 16px 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  background: #0b79d1;
}

.dashboard-navbar-container .search-bar {
  width: 30%;
}

.navbar-profile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  cursor: pointer;
  padding-left: 8rem;
  color: #ffffff;
  font-weight: 700;
}

.profile {
  display: flex;
  align-items: center;
  gap: 8px;
}
.profile-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: #222;
  font-family: Satoshi;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.3px;
}
.primary-profile-text {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.45px;
}
</style>
