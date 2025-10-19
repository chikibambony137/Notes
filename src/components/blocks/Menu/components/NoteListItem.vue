<template>
  <div class="item" :class="{ item_selected: note.selected }">
    <div class="item__title" @click="openNote">
      <h3>{{ note.title ? note.title : "New note" }}</h3>
    </div>
    <TrashButton
      class="item__trash-bttn"
      @click="noteStore.removeNote(note.id)"></TrashButton>
  </div>
</template>

<script setup>
import { useNoteStore } from "../../../../stores/useNoteStore";
import TrashButton from "../../../ui/buttons/TrashButton.vue";

const noteStore = useNoteStore();

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits('closeMenu');
function openNote() {
  noteStore.openNote(props.note.id);
  emit('closeMenu');
}
</script>

<style scoped lang="scss">
@use "../../../../assets/var.scss";

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6vh;

  padding: {
    left: 1vw;
    right: 1vw
  };
  gap: 1vw;
  box-sizing: border-box;

  background-color: rgb(44, 44, 44);
  border-radius: 10px;
  cursor: pointer;
}

.item:hover {
  background-color: rgb(51, 51, 51);
}

.item:active {
  background-color: rgb(37, 37, 37);
}

.item_selected {
  background-color: rgb(59, 59, 59);
}

.item__title {
  display: flex;
  align-items: center;
  justify-content: left;

  flex-grow: 1;
  height: 100%;

  background-color: transparent;
  overflow: hidden;

  h3 {
    font-size: var.$default-font-size;
    color: white;
    font-weight: 400;
    user-select: none;
    white-space: nowrap;
  }
}
</style>
