import { createApp } from 'vue';
import root from './app.vue';
import vFill from '../lib';

const app = createApp(root);
app.use(vFill);
app.mount('#app');
