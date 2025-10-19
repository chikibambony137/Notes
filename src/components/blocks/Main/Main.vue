<template>
  <div class="main">
    <NoteTemplate
      class="main__note-template"
      v-if="noteStore.noteCount > 0"
      @openMenu="emit('openMenu')"></NoteTemplate>
    <h3 v-else>A gde? :/</h3>
  </div>
</template>

<script setup>
import { useNoteStore } from "../../../stores/useNoteStore";
import NoteTemplate from "./components/NoteTemplate.vue";

const noteStore = useNoteStore();

const emit = defineEmits('openMenu');
</script>

<style scoped lang="scss">
@use "../../../assets/var.scss";

.main {
  @include var.block;
  box-sizing: border-box;
  padding: 1vw 2vw;
  overflow: scroll;
}
</style>
