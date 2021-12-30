<template>
  <div class="app-header">
    <span class="header-tool" @click="popupShow = !popupShow">≡</span>
    <div class="title" @click="router.push('/index')">
      <img class="header-logo" src="~@/assets/images/logo.png" alt="潮玩" />
      <span>潮玩盲盒</span>
    </div>
    <div class="user-site" @click="router.push('/user')">
      <span>Q仔</span>
    </div>
  </div>

  <nut-popup
    pop-class="header-list"
    position="left"
    v-model:visible="popupShow"
  >
    <nut-cell-group desc="潮玩盲盒">
      <nut-cell
        :key="key"
        :title="item.meta.navigation"
        @click="
          () => {
            router.push(item.path);
            popupShow = false;
          }
        "
        v-for="(item, key) in routes.filter(r => r.meta?.navigation)"
      ></nut-cell>
    </nut-cell-group>
  </nut-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@/router/index';

const router = useRouter();

const popupShow = ref<boolean>(false);
</script>

<style lang="less" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding: 0.2rem;
  width: 100%;
  height: 1.4rem;
  line-height: 1rem;
  font-size: 0.48rem;
  background-color: #fff;
  z-index: 99999;
  border-bottom: 0.01rem solid #f1f1f1;
  .header-tool {
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
  .title {
    flex: auto;
    font-weight: bold;
    .header-logo {
      margin-right: 0.1rem;
      vertical-align: middle;
      height: 1rem;
    }
  }
}
</style>

<style lang="less">
.header-list {
  margin-top: 1.4rem;
  width: 5rem;
  height: 100%;
}
</style>
