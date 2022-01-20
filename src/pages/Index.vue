<template>
  <div class="container" @scroll="scrollBottom($event)">
    <nut-swiper
      class="index-banner"
      :pagination-visible="true"
      auto-play="6000"
    >
      <nut-swiper-item
        :key="key"
        class="banner-item"
        v-for="(item, key) in banner"
        :style="{ backgroundImage: `url(${item.url})` }"
        @click="router.push(item.link)"
      >
      </nut-swiper-item>
    </nut-swiper>
    <BoxList :list="boxList" :loading="loading"></BoxList>
  </div>
</template>

<script setup lang="ts" name="Index">
import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import request from '../api/index';
import { useRouter } from 'vue-router';
import BoxList from '@/components/box/BoxList.vue';
import { TBox } from '@/types/index/box';

const router = useRouter();

// 商品列表
const boxList = reactive<TBox[]>([]);

// banner图
const banner = reactive([
  {
    url: 'https://www.ibox.art/file/oss/test/image/nft-goods/7c9fe383530645788c1a1240a6c84985.jpg',
    link: '#'
  },
  {
    url: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    link: '#'
  }
]);

// 页数
const page = ref<number>(0);

// 加载锁
const loading = ref<boolean>(false);

/**
 * 页底检查
 */
function scrollBottom(event: Event) {
  const target = event.target as HTMLElement;
  if (window.screen.height + target.scrollTop >= target.scrollHeight) {
    fetchList();
  }
}

watch(
  boxList,
  (state, prevState) => {
    console.log('懒加载数据');
  },
  { deep: true }
);

onMounted(() => {
  window.addEventListener('scroll', scrollBottom);
  fetchList();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollBottom);
});

/**
 * 加载盲盒
 */
function fetchList() {
  if (loading.value) return;

  loading.value = true;
  request.box
    .fetchList({
      data: {
        page,
        pageSize: 6
      }
    })
    .then(data => {
      if (Object.prototype.toString.call(data) === '[object Array]') {
        boxList.push(...data);
        page.value += 1;
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<style lang="less" scoped>
.container {
  height: calc(100vh - 1.5rem);
  overflow: scroll;
}
.index-banner {
  width: 100%;
  height: 4.5rem;
  .banner-item {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
</style>
