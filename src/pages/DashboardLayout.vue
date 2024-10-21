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
    <a-layout style="height: 100vh;">
        <a-layout-sider :style="siderStyle" class="shadow-md">
            <Aside></Aside>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="headerStyle">
                <Header></Header>
            </a-layout-header>
            <a-layout-content :style="contentStyle" class="overflow-auto p-4">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>



</template>

<style scoped>
:deep(.ant-layout .ant-layout-header) {
    height: 72px;
    line-height: 72px;
}
</style>
