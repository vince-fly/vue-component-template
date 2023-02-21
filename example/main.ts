import { createApp } from 'vue';
import AppRoot from './App.vue';
import MyComponent from '../lib/my-component';
import '../lib/style.css';
const app = createApp(AppRoot);
app.use(MyComponent);

app.mount('#app');
