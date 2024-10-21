<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';



const headerStyle = {
  backgroundColor: '#ffffff',
};
const contentStyle = {
  backgroundColor: '#',
};
const siderStyle = {
  backgroundColor: '#ffffff',
};

</script>

<template>
  <router-view />
</template>

<style scoped>
:deep(.ant-layout .ant-layout-header) {
  height: 72px;
  line-height: 72px;
}
</style>
