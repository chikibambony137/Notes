<template>
  <div class="note-template">
    <p>
      <input
        class="note-template__input note-template__input_title"
        v-model="title"
        @keyup.enter="nameRef.focus()"
        placeholder="Title"
        ref="titleRef" />
    </p>
    <p>
      <input
        class="note-template__input note-template__input_name"
        v-model="name"
        @keyup.enter="contentRef.focus()"
        placeholder="Your name"
        ref="nameRef" />
    </p>
    <p>
      <textarea
        class="note-template__input note-template__content"
        v-model="content"
        placeholder="Write anything..."
        ref="contentRef"></textarea>
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

import { useNoteStore } from "../../../../stores/useNoteStore";

// pinia store
const noteStore = useNoteStore();

// inputs
const title = ref("");
const name = ref("");
const content = ref("");

// focus on input at first opening
onMounted(() => {
  focusFirstEmptyInput();
});

// ------ Focus on inputs ----------

const titleRef = ref(null);
const nameRef = ref(null);
const contentRef = ref(null);

function focusFirstEmptyInput() {
  if (title.value === "" && titleRef.value) {
    titleRef.value.focus();
  } else if (name.value === "" && nameRef.value) {
    nameRef.value.focus();
  } else if (content.value === "" && contentRef.value) {
    contentRef.value.focus();
  }
}

// ------ watchers ----------

watch(
  () => noteStore.currentNote,
  () => {
    // setting new values
    title.value = noteStore.currentNote?.title || "";
    name.value = noteStore.currentNote?.name || "";
    content.value = noteStore.currentNote?.content || "";

    // menu's select effect (visual)
    noteStore.selectNote(noteStore.currentNote);

    // focus on first empty input
    focusFirstEmptyInput();
  },
  { immediate: true }
);

// setting new values in pinia store
watch(title, () =>
  noteStore.setValue(noteStore.currentNote?.id, title.value, "title")
);
watch(name, () =>
  noteStore.setValue(noteStore.currentNote?.id, name.value, "name")
);
watch(content, () =>
  noteStore.setValue(noteStore.currentNote?.id, content.value, "content")
);
</script>

<style scoped lang="scss">
.note-template {
  width: 100%;
}

p {
  margin: 0;
}

.note-template__input {
  background-color: transparent;
  border: 0;
  color: white;
  margin-bottom: 1vh;
  width: 100%;

  outline: 0;
}

.note-template__input_title {
  font-size: 1.6rem;
  font-weight: 500;
}

.note-template__input_name {
  font-size: 0.8rem;
  margin-bottom: 2vh;
  font-style: italic;
}

.note-template__content {
  width: 100%;
  height: 80dvh;
  resize: none;
}
</style>
