<template>
  <div class="app">
    <Menu class="app__menu"></Menu>
    <Main class="app__main"></Main>
  </div>
</template>

<script setup>
import Menu from "./components/blocks/Menu/Menu.vue";
import Main from "./components/blocks/Main/Main.vue";
</script>

<style scoped>
.app { 
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 98dvh;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  padding: 1vh;
  gap: 1vw;
}

.app__menu {

  @media (max-width: 480px) {
    display: none;
  }
}

.app__main {
  grid-column: 0;
}
</style>
