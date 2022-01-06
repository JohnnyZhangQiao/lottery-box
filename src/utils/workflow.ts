/**
 * 项目初始化总线
 */

// 初始化nutui样式
import '@nutui/nutui/dist/style.css';

import { initRem } from '@/utils/calcRem';
import nutUiList from '@/utils/nutuiImport';
import router from '@/router';
import { createPinia } from 'pinia';
import { registerStore } from '@/store';

export const initialize = async (app: any) => {
  // 初始化rem
  initRem(window, document.documentElement);
  window.calcRem(1080);

  // 按需加载nutui组件
  Object.values(nutUiList).forEach(co => {
    app.use(co);
  });

  // 挂载路由
  app.use(router);

  // 注册pinia状态管理库
  app.use(createPinia());
  registerStore();
};
