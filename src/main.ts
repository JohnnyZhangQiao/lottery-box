import { createApp } from 'vue';
import App from './App.vue';
import { initialize } from '@/utils/workflow';

// 构建vue实例
const app = createApp(App);

// 初始化总线
initialize(app);

app.mount('#app');
