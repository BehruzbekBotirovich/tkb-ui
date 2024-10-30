<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
//store
import { useDashboardStore } from '@/stores/dashboard.pinia.js'
const store = useDashboardStore();

import { ref } from 'vue';

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
            <a-table :data-source="store.genderDiagram" :pagination="false" :loading="loading" row-key="id"
                class="custom-table w-4/5">

                <a-table-column key="name" data-index="name" :title="$t('statisticsTable.genderName')"
                    class="text-left font-bold w-1/2"></a-table-column>
                <a-table-column key="count" data-index="count" :title="$t('statisticsTable.appCount')"></a-table-column>

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