<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
//store
import { useDashboardStore } from '@/stores/dashboard.pinia.js'
const store = useDashboardStore();

import { ref } from 'vue';

const columns = [
    {
        title: t('statisticsTable.genderName'),
        dataIndex: 'name',
        key: 'name',
        align: 'left',
        fontWeight: 'bold',
        width: '50%'
    },
    {
        title: t('statisticsTable.appCount'),
        dataIndex: 'count',
        key: 'count',
        align: 'left',
        padding: 5,
    },
];
const chartOptions = ref({
    chart: {
        type: 'donut',
        height: '100px'
    },
    plotOptions: {
        pie: {
            customScale: 0.8
        }
    },
    colors: ['#E84646', '#0E5FD9'],

    labels: [t('woman'), t('man')],
    legend: {
        position: 'bottom'
    },

    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 150
            },
            legend: {
                position: 'bottom'
            },

        }
    }]
});

const series = ref([1231, 435]);
</script>

<template>
    <div class="bg-white rounded-md overflow-hidden pb-4">
        <h1 class="text-center uppercase font-semibold py-3">Jins bo'yicha</h1>
        <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>

        <div class="flex justify-center">
            <a-table :columns="columns" :data-source="store.genderDiagram" :pagination="false" :loading="loading"
                row-key="id" class="custom-table w-4/5">
                <template #bodyCell="{ column, text, record }">
                    <span v-if="column.dataIndex === 'name'" class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: record.color }"> </div>
                        {{ text }}
                    </span>

                </template>
            </a-table>
        </div>


    </div>
</template>
<style scoped>
.ant-card .ant-card-body {
    padding: 10px !important;
}

:deep(.ant-table-tbody >tr:last-child>td) {
    border: none !important
}

:deep(.ant-table-wrapper .ant-table-container table>thead>tr>th) {
    border-radius: 0px !important;
}

.custom-table .ant-table-thead>tr>th {
    background-color: #f5f5f5;
    font-weight: bold;
}

.custom-table .ant-table-tbody>tr>td {
    padding: 8px;
}

:deep(.ant-table-wrapper .ant-table-thead >tr>th) {
    color: #4A5154;
    font-size: 12px;
}

:deep(.ant-table-wrapper .ant-table-thead>tr>th, .ant-table-wrapper .ant-table-tbody>tr>td) {
    padding: 12px 24px
}

:deep(.ant-table-wrapper .ant-table-tbody>tr>td) {
    padding: 12px 24px
}
</style>