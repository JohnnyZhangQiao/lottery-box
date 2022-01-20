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
    <div class="basic-info">
      <img :src="data.user.avatar" class="user-pic" />
      <p class="user-name">
        <span>{{ data.user.username }}</span>
        <nut-icon name="edit"></nut-icon>
      </p>
    </div>

    <nut-tabs
      v-model="data.tabChose"
      :background="'#fff'"
      :style="{ marginTop: '2.5rem' }"
    >
      <nut-tabpane title="我拥有" :pane-key="0">
        <BoxList class="my-box" :list="data.user.box"></BoxList>
      </nut-tabpane>
      <nut-tabpane title="我送出" :pane-key="1">
        <BoxList class="my-box" :list="[]"></BoxList>
      </nut-tabpane>
    </nut-tabs>
  </div>
</template>

<script setup lang="ts" name="User">
import { ref, reactive } from 'vue';
import request from '@/api/index';
import { TUser } from '@/types/user/info';
import BoxList from '@/components/box/BoxList.vue';

interface IData {
  user: Partial<TUser>;
  tabChose: number;
}
const loading = ref<boolean>(false);
const data = reactive<IData>({ user: {}, tabChose: 0 });

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
  background-color: #2c2c34;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
  border: 0.01rem solid #f7f7f9;
  box-shadow: 0 0.18rem 0.42rem rgb(1 0 95 / 10%);
  .basic-info {
    position: absolute;
    top: -1rem;
    width: 100%;
    .user-pic {
      width: 2rem;
      height: 2rem;
      background-color: #fff;
      border-radius: 50%;
    }
    .user-name {
      color: #fff;
    }
  }
  .my-box {
    background-color: #fff;
  }
}
</style>
