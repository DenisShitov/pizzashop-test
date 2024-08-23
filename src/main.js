import { createApp } from 'vue'
import '@splidejs/vue-splide/css';
import './app/assets/styles/index.scss'
import {App} from "./app/index.js";
import {createPinia} from "pinia";
import VueSplide from '@splidejs/vue-splide';

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use( VueSplide )
app.mount('#app')
