<template>
  <div class="note-list">
    <NoteListItem
      v-for="note in noteStore.notes"
      :key="note.id"
      :note="note"
      @closeMenu="emit('closeMenu')"></NoteListItem>
  </div>
</template>

<script setup>
import NoteListItem from "./NoteListItem.vue";
import { useNoteStore } from "../../../../stores/useNoteStore.js";

const noteStore = useNoteStore();

const emit = defineEmits('closeMenu');
</script>

<style scoped>
.note-list {
  display: flex;
  flex-direction: column;
  gap: 2vh;
}
</style>
