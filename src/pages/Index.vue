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
    <BoxList :list="boxList"></BoxList>
    <p class="loading-styl" v-if="loading">加载中...</p>
    <nut-empty
      description="无数据"
      v-if="boxList.length === 0 && !loading"
    ></nut-empty>
  </div>
</template>

<script setup lang="ts">
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

.box-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  font-size: 0.42rem;
  .box-item {
    margin: 0.5rem 2.5% 0 2.5%;
    width: 45%;
    overflow: hidden;
    border-radius: 0.2rem;
    box-shadow: 0 6px 14px rgb(1 0 95 / 10%);
    .box-img {
      position: relative;
      width: 100%;
      > img {
        max-width: 100%;
        max-height: 100%;
      }
      .box-tag {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 0.3rem;
        background-color: #ff3f00;
        color: #fff;
        border-radius: 0.2rem 0;
      }
    }
    .box-title {
      padding: 0.1rem 0.2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .box-author {
      padding: 0.1rem 0.2rem;
      font-size: 0.36rem;
      .author-pic {
        margin-right: 0.1rem;
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
      .author-name {
        vertical-align: super;
      }
    }
  }
}

.loading-styl {
  margin: 0.5rem auto;
  font-size: 0.42rem;
  text-align: center;
}
</style>
