import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initRem } from './utils/calcRem';
import nutUiList from './utils/nutuiImport';

// 初始化nutui样式
import '@nutui/nutui/dist/style.css';

// 初始化rem
initRem(window, document.documentElement);
window.calcRem(1080);

// 构建vue实例
const app = createApp(App);

// 按需加载nutui组件
Object.values(nutUiList).forEach(co => {
  app.use(co);
});
app.use(router).mount('#app');
