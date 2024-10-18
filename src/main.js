import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/main.css';
import App from './App.vue';
import router from './router';
import Antd from 'ant-design-vue';
import './styles/tailwind.css';
import i18n from './utils/i18n'; // Import the i18n configuration
import VueApexCharts from "vue3-apexcharts";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(i18n); // Register Vue I18n with the app
app.use(VueApexCharts);





app.mount('#app');
