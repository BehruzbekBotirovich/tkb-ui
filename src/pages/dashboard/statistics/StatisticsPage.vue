<script setup>
import { ref, reactive, computed } from 'vue';
import StatisticsTable from './components/StatisticsTable.vue'
import GenderDiagram from './components/GenderDiagram.vue'
//store
import { useDashboardStore } from '@/stores/dashboard.pinia.js'
const store = useDashboardStore();
//translate
import { useI18n } from "vue-i18n";
const { t } = useI18n();  //

const data1 = ref()
const data2 = ref()

const statCount = computed(() => {
    return [
        {
            title: t('all'),
            description: t('allDesc'),
            color: '#7C786B',
            count: 1111
        },
        {
            title: t('new'),
            description: t('newDesc'),
            color: '#747BFC',
            count: 1111
        },
        {
            title: t('inProcess'),
            description: t('inProcessDesc'),
            color: '#EABF39',
            count: 1111
        },
        {
            title: t('denaed'),
            description: t('denaedDesc'),
            color: '#4A0B0B',
            count: 1111
        },
        {
            title: t('rejected'),
            description: t('rejectedDesc'),
            color: '#E05523',
            count: 1111
        },
        {
            title: t('accepted'),
            description: t('acceptedDesc'),
            color: '#0B9C37',
            count: 1111
        },
        {
            title: t('succes'),
            description: t('succesDesc'),
            color: '#AF00CA',
            count: 1111
        },
        {
            title: t('autoReject'),
            description: t('autoRejectDesc'),
            color: '#707070',
            count: 1111
        },
    ]
})

</script>

<template>

    <div class="flex gap-2 items-center justify-end mb-2">
        <a-date-picker class="pl-10 w-64" v-model="data1" placeholder="DD / MM / YY" size="large" />
        <a-date-picker class="pl-10 w-64" v-model="data2" placeholder="DD / MM / YY" size="large" />
    </div>
    <!-- blocks statistisc -->
    <a-row class="mb-4" :gutter="[12, 12]">
        <a-col v-for="el  in   statCount" :key="el.id" :md="12" :lg="8" :xl="6" class="stat-block">
            <div class="bg-white py-4 px-6 rounded flex items-center justify-between h-full"
                :style="{ color: el.color }">
                <div>
                    <div class="font-bold uppercase">{{ el.title }}</div>
                    <div class="italic">{{ el.description }}</div>
                </div>
                <div> {{ el.count }}</div>
            </div>
        </a-col>
    </a-row>
    <!-- tables statistisc -->
    <a-row :gutter="[12, 12]">
        <a-col :xs="24" :md="12" :lg="8" :xl="6" class="stat-block">
            <statistics-table :title="`${t('statisticsTable.region')}`" :hasLink="true"
                :description="`${t('statisticsTable.regionName')}`" :data="store.regionalTable"> </statistics-table>
        </a-col>
        <a-col :xs="24" :md="12" :lg="8" :xl="6" class="stat-block">
            <statistics-table :title="`${t('statisticsTable.univer')}`" :hasLink="false"
                :description="`${t('statisticsTable.regionName')}`" :data="store.universityTable">
            </statistics-table>
        </a-col>
        <a-col :xs="24" :md="12" :lg="8" :xl="6" class="stat-block">
            <statistics-table :title="`${t('statisticsTable.banks')}`" :hasLink="false"
                :description="`${t('statisticsTable.banksName')}`" :data="store.bankTable">
            </statistics-table>
        </a-col>
        <a-col :xs="24" :md="12" :lg="8" :xl="6" class="stat-block">
            <gender-diagram></gender-diagram>
        </a-col>
    </a-row>
</template>
<style scoped>
:deep(.ant-picker .ant-picker-suffix) {
    color: #005CE8;
    position: absolute;
    left: -30px;
}
</style>