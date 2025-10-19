import { createApp } from 'vue'
import './styles.scss'
import App from './App.vue'

import { createPinia } from "pinia";

const app = createApp(App);

// Создаем экземпляр Pinia
const pinia = createPinia();
// Подключаем Pinia к приложению
app.use(pinia);

app.mount("#app");
