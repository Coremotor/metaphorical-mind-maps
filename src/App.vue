<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav">
      <RouterLink class="link" active-class="active" to="/">Колоды</RouterLink>
      <RouterLink class="link" active-class="active" to="/cards">Выбранные карты</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.nav {
  display: flex;
  margin-bottom: 30px;
}
.link {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: transparent;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 20px;
  margin-right: 20px;
}
.active {
  color: white;
  background-color: deepskyblue;
}
</style>
