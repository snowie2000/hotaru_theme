import { createApp } from 'vue';
import App from './App.vue';

//@ts-ignore noop
const req = require.context('./assets/img/client', true, /\.svg$/);
req.keys().map(req);

createApp(App).mount('#app');
