<template>
  <nut-skeleton
    class="skeleton"
    width="7.5rem"
    height="0.45rem"
    avatar
    title
    animated
    v-if="loading"
    row="6"
  />
  <div class="user-info" v-else>
    <img :src="data.user.avatar" class="user-pic" />
    <BoxList :list="data.user.box"></BoxList>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import request from '@/api/index';
import { TUser } from '@/types/user/info';
import BoxList from '@/components/box/BoxList.vue';

interface IData {
  user: Partial<TUser>;
}
const loading = ref<boolean>(false);
const data = reactive<IData>({ user: {} });

/**
 * 获取用户信息
 * @param token
 */
function getUserInfo(token?: string) {
  loading.value = true;
  request.user
    .userInfo({
      data: {
        token
      }
    })
    .then(res => {
      data.user = res;
    })
    .finally(() => {
      loading.value = false;
    });
}

getUserInfo('123');
</script>

<style lang="less" scoped>
.skeleton {
  width: 100%;
  height: 6rem;
}
.user-info {
  position: relative;
  margin: 4rem auto 2rem auto;
  width: 94%;
  background-color: #fff;
  border-radius: 1rem 1rem 0 0;
  .user-pic {
    position: absolute;
    top: -1rem;
    left: 50%;
    width: 2rem;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    transform: translateX(-1rem);
  }
}
</style>
