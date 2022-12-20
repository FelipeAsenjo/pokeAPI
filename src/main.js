import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import router from './router'
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueLoaders)

app.mount('#app')
