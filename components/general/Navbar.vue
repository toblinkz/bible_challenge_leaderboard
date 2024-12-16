<template>
  <div class="dashboard-navbar-container">
    <img src="~/assets/logos/Spirit_Game_Logo.png" class="logo" />

    <!-- <SearchBar class="search-bar" /> -->

    <div class="navbar-profile">
      <!-- <img
        src="https://res.cloudinary.com/dgdteyucq/image/upload/v1707955745/bible-game/navbar-icons/notification_nh4ujf.svg"
      /> -->

      NLWC Bible Boot Camp

      <!-- <div class="profile">
        <img
          src="https://res.cloudinary.com/dgdteyucq/image/upload/v1707955746/bible-game/navbar-icons/avatar_i0lxup.svg"
          class="profile-image"
        />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard-navbar-container {
  width: 100%;
  padding: 16px 8px 16px 70px;
  padding: 16px 7rem;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
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
  font-size: 28px;
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

.logo {
  height: 60px;
  width: 60px;
  object-fit: contain;
}
</style>
