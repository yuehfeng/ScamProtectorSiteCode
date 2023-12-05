import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://od.moi.gov.tw/';

const app = createApp(App).use(router)
app.config.globalProperties.$axios = axios;
app.mount('#app')
