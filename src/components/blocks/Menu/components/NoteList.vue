<template>
  <div class="note-list">
    <NoteListItem
      v-for="note in noteStore.notes"
      :key="note.id"
      :note="note"></NoteListItem>
  </div>
</template>

<script setup>
import NoteListItem from "./NoteListItem.vue";
import { useNoteStore } from "../../../../stores/useNoteStore.js";

const noteStore = useNoteStore();
</script>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}
</style>
