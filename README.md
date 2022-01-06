# 项目介绍

本项目为个人vue3实践项目，采用Vue 3 + Typescript + Vite搭建，并采用单文件组件（sfc）加[组合式API](https://v3.cn.vuejs.org/api/composition-api.html)方式编译组件，使得应用具备更高性能，这种方式的好处可以从[这里](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)获取更多信息。



# 主要技术栈

- [vue3.x](https://v3.cn.vuejs.org/)
- [Typescript](https://www.tslang.cn/index.html)
- [Vite](https://cn.vitejs.dev/)
- [vue-router](https://router.vuejs.org/)
- [mockjs](http://mockjs.com/)
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [pinia（全局状态管理，比vuex更轻量，vue官方推荐）](https://pinia.vuejs.org/)
- [nutui](https://nutui.jd.com/)



# 工程目录

```bash
.
├── README.md
├── index.html           项目入口
├── mock                 mock目录
├── package.json
├── public
├── src
│   ├── App.vue          主应用
│   ├── api              请求中心
│   ├── assets           资源目录（图片、less、css等）
│   ├── components       项目组件
│   ├── constants        常量
│   ├── env.d.ts         全局声明
│   ├── main.ts          主入口
│   ├── pages            页面目录
│   ├── router           路由配置
│   ├── types            ts类型定义
│   ├── store            pinia状态管理
│   └── utils            基础工具包
├── test                 测试用例
├── tsconfig.json        ts配置
├── .eslintrc.js         eslint配置
├── .prettierrc.json     prettier配置
├── .gitignore           git忽略配置
└── vite.config.ts       vite配置

```



# 运行项目

1. 安装依赖

```r
npm i
```



2. 在你的开发环境配置eslint & prettier（略）



3. 本地运行项目

```bash
## 启用本地mock功能
npm run dev:mock

## 不启用mock（需要保证有服务器接入）
npm run dev
```



4. 打包构建

```bash
npm run build
```



# 写在最后

项目在不定期完善中，看时间而定吧...

**假如本项目对你有帮助，请给作者点个小星星，感谢！**
