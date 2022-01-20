<template>
  <div class="login-container">
    <nut-button
      class="login-styl"
      type="primary"
      @click="handlerLogin"
      :loading="loading"
      >一键登录</nut-button
    >
    <p class="login-desc">App自动授权，无需填充账号密码</p>
  </div>
</template>

<script setup lang="ts" name="Login">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
import { login } from '@/utils/userLogin';
import { useRouter } from 'vue-router';

const router = useRouter();
const loading = ref<boolean>(false);

function handlerLogin() {
  if (loading.value) return;

  loading.value = true;
  login('Q仔', '123456')
    .then(res => {
      if (res) {
        Toast.success('登录成功');
        const path = router.currentRoute.value?.query?.redirect || '/index';
        router.push(path);
      }
    })
    .finally(() => {
      loading.value = false;
    });
}
</script>

<style lang="less" scoped>
.login-container {
  position: relative;
  margin-top: 7rem;
  text-align: center;
  .login-styl {
    width: 80%;
  }
  .login-desc {
    margin-top: 0.5rem;
    font-size: 0.36rem;
    color: #999;
  }
}
</style>
