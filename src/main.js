import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App);
app.use(router)
app.use(VueApexCharts);
app.mount('#app')



// createApp(App).use(router).mount('#app')
