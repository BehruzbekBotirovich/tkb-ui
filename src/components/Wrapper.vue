<template>
    <a-row class="h-screen">
        <a-col :lg="4">
            <Aside></Aside>
        </a-col>

        <a-col :lg="20">
            <Header></Header>
            <slot > </slot>
        </a-col> 
    </a-row>
</template>

<script setup>
import Header from './Header.vue';
import Aside from './Aside.vue';
</script>

<style lang="scss" scoped></style>
