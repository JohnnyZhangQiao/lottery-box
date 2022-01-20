<template>
  <ul class="box-list" v-if="list.length > 0">
    <li
      :key="key"
      class="box-item"
      v-for="(item, key) in props.list"
      @click="router.push({ path: '/boxDetail', query: { bId: item.id } })"
    >
      <div class="box-img">
        <img :src="item.boxImg" :alt="item.title" />
        <div class="box-tag">
          {{
            ['未知', '在售中', '已售罄', '首发', '缺货', '私有'][item.status]
          }}
        </div>
      </div>
      <p class="box-title">{{ item.title }}</p>
      <div class="box-author">
        <img :src="item.authorPic" :alt="item.authorName" class="author-pic" />
        <span class="author-name">{{ item.authorName }}</span>
      </div>
    </li>
  </ul>
  <p class="loading-styl" v-if="props.loading">加载中...</p>
  <nut-empty
    description="暂无盲盒~"
    v-if="list.length === 0 && !props.loading"
  ></nut-empty>
</template>

<script setup lang="ts" name="BoxList">
import { defineProps, withDefaults } from 'vue';
import { useRouter } from 'vue-router';

import { TBox } from '@/types/index/box';

interface IProps {
  list: TBox[];
  loading?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  list: () => [],
  loading: false
});

const router = useRouter();
</script>

<style lang="less" scoped>
.box-list {
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  font-size: 0.42rem;
  text-align: left;
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
