<script setup>
import { ref } from 'vue';
import { useDashboardStore } from '@/stores/dashboard.pinia.js'
import { defineProps } from 'vue';
import { useI18n } from "vue-i18n";

const { t } = useI18n();  //
const store = useDashboardStore();
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    hasLink: {
        type: Boolean,
        required: true
    },
    data: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true
    }
});

const columns = [
    {
        title: props.description,
        dataIndex: 'name',
        key: 'name',
        align: 'left',
        fontWeight: 'bold',
    },
    {
        title: t('statisticsTable.appCount'),
        dataIndex: 'applications',
        key: 'applications',
        align: 'left',
        padding: 5,
    },
];


</script>

<template>
    <div class="bg-white rounded-lg overflow-hidden">
        <h2 class="uppercase text-center  p-3 font-semibold">
            {{ title }}
        </h2>
        <a-table :columns="columns" :data-source="data" :pagination="false" :loading="loading" row-key="id"
            class="custom-table">
            <template #bodyCell="{ column, record }">

                <template v-if="column.key === 'name'">
                    <router-link v-if="hasLink" :to="`?region_id=${record.id}&region_name=${record.name}`">
                        <span class="font-semibold"> {{ record[column.key] }}</span>
                    </router-link>

                    <span v-else class="flex items-center gap-2">
                        <img v-if="record.icon" :src="record.icon" class="w-5 h-5  rounded-full overflow-hidden">
                        <span class="font-semibold"> {{ record[column.key] }}</span>
                    </span>
                </template>

            </template>

        </a-table>
    </div>

</template>
<style scoped>
.ant-card .ant-card-body {
    padding: 10px !important;
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
    text-transform: uppercase;
}

:deep(.ant-table-wrapper .ant-table-container table>thead>tr>th) {
    border-radius: 0px !important;
}

:deep(.ant-table-wrapper .ant-table-thead>tr>th, .ant-table-wrapper .ant-table-tbody>tr>td) {
    padding: 12px 24px
}

:deep(.ant-table-wrapper .ant-table-tbody>tr>td) {
    padding: 12px 24px
}
</style>
