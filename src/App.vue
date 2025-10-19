<template>
  <div class="app">
    <Menu class="app__menu" @closeMenu="toggleMenu"></Menu>
    <Main class="app__main" @openMenu="toggleMenu"></Main>
  </div>
</template>

<script setup>
import Menu from "./components/blocks/Menu/Menu.vue";
import Main from "./components/blocks/Main/Main.vue";
import { ref, useTemplateRef } from "vue";

const menuIsOpen = ref(true);
function toggleMenu() {
  if (window.screen.width < 481) {
    const menu = document.querySelector(".app__menu");
    if (menuIsOpen.value == true) {
      menu.classList.remove("app__menu_open");
      menu.classList.add("app__menu_close");
    } else {
      menu.classList.remove("app__menu_close");
      menu.classList.add("app__menu_open");
    }
    menuIsOpen.value = !menuIsOpen.value;
  }
}
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
  transition: all 0.5s ease-in-out 0.1s;

  @media (max-width: 480px) {
    position: absolute;
    width: 90vw;
    height: 90dvh;
  }
}

.app__menu_close {
  top: -100vh;
}

.app__menu_open {
  top: 1vh;
}

.app__main {
  grid-column: 0;
}
</style>
