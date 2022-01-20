<template>
  <div class="back-icon" @click="router.back()">
    <nut-icon name="left" size="0.5rem" color="#fff"></nut-icon>
  </div>
  <div class="detail-container" v-if="!loading">
    <img src="~@/assets/images/light_bg.png" class="header-bg" />
    <div class="box-img">
      <img :src="info.boxImg" />
    </div>
    <section>
      <p class="section-title">{{ info.title }}</p>
      <div v-html="info.desc"></div>
    </section>
    <section>
      <p class="section-title">关于作者</p>
      <a>{{ info.authorName }}</a>
    </section>
    <section>
      <p class="section-title">售卖信息</p>
      <ul>
        <li class="info-item">
          <span class="info-title">售价：</span>
          <span class="info-tip">{{ `${info.price} ${info.priceUnit}` }}</span>
        </li>
        <li class="info-item">
          <span class="info-title">上架时间：</span>
          <span class="info-tip">{{
            momnent(info.onSaleTime).format('YYYY年M月D日 hh:mm:ss')
          }}</span>
        </li>
        <li class="info-item">
          <span class="info-title">剩余/总量：</span>
          <span class="info-tip">{{ `${info.onSale}/${info.sellLimit}` }}</span>
        </li>
        <li class="info-item">
          <span class="info-title">作者：</span>
          <span class="info-tip">{{ info.authorName }}</span>
        </li>
      </ul>
    </section>
  </div>
  <div class="loading" v-else>
    <nut-icon name="loading" size="24" color="#fa2c19"></nut-icon>
    <p>加载中</p>
  </div>
</template>

<script setup lang="ts" name="BoxDetail">
import { ref } from 'vue';
import momnent from 'moment';
import { useRouter, LocationQueryValue } from 'vue-router';
import request from '@/api/index';

const router = useRouter();
const loading = ref<boolean>(false);
const info = ref({
  id: 0,
  boxImg: '',
  title: '',
  authorPic: '',
  authorName: '-',
  desc: '',
  sellLimit: 0,
  onSale: 0,
  price: 0,
  priceUnit: '',
  onSaleTime: 0
});

function getBoxDetail(bId?: LocationQueryValue) {
  if (loading.value) return;

  loading.value = true;
  request.box
    .boxDetail({ data: { bId: +(bId || 0) } })
    .then(data => {
      Object.keys(data).forEach(key => {
        info.value[key] = data[key] || '-';
      });
    })
    .finally(() => {
      loading.value = false;
    });
}

const {
  currentRoute: {
    value: {
      query: { bId }
    }
  }
} = router;
getBoxDetail(bId as LocationQueryValue);
</script>

<style lang="less" scoped>
.back-icon {
  position: absolute;
  top: 1.8rem;
  left: 0.3rem;
  width: 1rem;
  height: 1rem;
  line-height: 1.2rem;
  text-align: center;
  background-color: rgb(255 255 255 / 20%);
  border-radius: 50%;
  z-index: 1;
}
.detail-container {
  padding: 0 0.5rem 1rem 0.5rem;
  position: relative;
  background-color: #2c2c34;
  color: #fff;
  box-shadow: 0 0 0 100rem #2c2c34;
  .header-bg {
    width: 100%;
  }
  .box-img {
    position: absolute;
    top: 2rem;
    left: 35%;
    width: 30%;
    height: 4rem;
    perspective: 10rem;
    text-align: center;
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 0.2rem;
      border: 0.1rem solid #d5d5d5;
      box-shadow: 0 0.05rem 0.15rem 0 #fff;
      animation: img-rotate 15s infinite;
    }
  }
  .section-title {
    margin: 1rem 0 0.3rem 0;
    font-size: 0.6rem;
    background-image: -webkit-linear-gradient(bottom, #ff3f01, #eb6d23, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .info-item {
    display: flex;
    .info-title {
      width: 2.5rem;
      flex-shrink: 0;
    }
    .info-tip {
      color: #c76241;
    }
  }
}
.loading {
  margin-top: 50vh;
  background-color: #2c2c34;
  color: #fff;
  text-align: center;
  box-shadow: 0 0 0 100rem #2c2c34;
}

@keyframes img-rotate {
  0% {
    transform: rotateY(0);
  }
  25% {
    transform: rotateY(30deg);
  }
  75% {
    transform: rotateY(-30deg);
  }
  100% {
    transform: rotateY(0);
  }
}
</style>
