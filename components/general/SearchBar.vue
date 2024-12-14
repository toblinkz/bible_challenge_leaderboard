<template>
  <div class="search-bar--container">
    <img src="~/assets/icons/general/search.svg" />
    <input
      type="text"
      placeholder="Search"
      v-model="searchInputText"
      class="input-check"
    />
  </div>
</template>

<script setup lang="ts">
const searchInputText = ref("");
</script>

<style scoped>
.search-bar--container {
  display: flex;
  padding: 0px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  cursor: pointer;
  position: relative;
}
.search-bar--container img {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 14px;
}
.search-bar--container input {
  border: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 0px 24px 0px 42px;
  border-radius: 8px;
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.32px;
}
.search-bar--container input:focus {
  border: 1px solid #42aaff;
  outline: none;
}
</style>
