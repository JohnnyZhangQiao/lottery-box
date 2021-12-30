<template>
  <ul class="box-list">
    <li :key="key" class="box-item" v-for="(item, key) in list">
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
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { TBox } from '@/types/index/box';

defineProps({
  list: {
    type: Array as PropType<TBox[]>
  }
});
</script>

<style lang="less" scoped>
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
</style>
