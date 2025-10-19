<template>
  <div class="menu">
    <CreateNoteBttn class="menu__create-button" @click="noteStore.addNote()"
      >New Note</CreateNoteBttn>
    <hr class="menu__hr" />
    <NoteList></NoteList>
  </div>
</template>

<script setup>
import { useNoteStore } from "../../../stores/useNoteStore";
import CreateNoteBttn from "./components/CreateNoteBttn.vue";
import NoteList from "./components/NoteList.vue";

const noteStore = useNoteStore();
</script>

<style lang="scss">
@use "../../../assets/var.scss";

.menu {
  @include var.block;
  box-sizing: border-box;
  padding: 1vw;
  overflow: scroll;
}

.menu__hr {
  border-color: rgb(191, 191, 191);
}
</style>
