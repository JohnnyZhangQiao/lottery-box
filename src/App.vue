<template>
  <Header></Header>
  <div class="app-body">
    <router-view />
  </div>
</template>

<script setup lang="ts" name="App">
import Header from './components/header/Header.vue';
</script>

<style lang="less">
.app-body {
  margin-top: 1.5rem;
}
</style>
