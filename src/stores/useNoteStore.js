import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Создаем хранилище с помощью defineStore
export const useNoteStore = defineStore("notes", () => {
  const notes = ref(JSON.parse(localStorage.getItem("notes")) || []);

  const noteCount = computed(() => notes.value.length);

  const lastNote = computed(() => (notes.value.length ? notes.value[0] : null));
  const currentNote = ref(lastNote.value);

  const updateLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(notes.value));
  };

  // можно было реализовать с помощью radio bttns
  const selectNote = (note) => {
    notes.value.map((n) => (n.selected = false));
    note.selected = true;
  };

  const openNote = (id) => {
    const note = notes.value.filter((note) => note.id == id)[0];
    currentNote.value = note;
  };

  const addNote = () => {
    notes.value.unshift({
      id: Date.now(),
      title: "",
      name: "",
      content: "",
      selected: false,
    });
    updateLocalStorage();

    currentNote.value = lastNote.value;
  };

  const removeNote = (id) => {
    notes.value = notes.value.filter((note) => note.id != id);
    updateLocalStorage();
  };

  const setValue = (id, value, prop) => {
    const note = notes.value.filter((note) => note.id == id)[0];
    note[prop] = value;
    updateLocalStorage();
  };

  return {
    notes,
    noteCount,
    currentNote,
    selectNote,
    addNote,
    removeNote,
    openNote,
    setValue,
  };
});
