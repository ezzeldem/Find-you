import Vue from 'vue'
import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");

