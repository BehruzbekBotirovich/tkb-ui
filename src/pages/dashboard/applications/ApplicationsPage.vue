<script setup>
import { ref } from 'vue'
import { useI18n } from "vue-i18n";

import { useApplicationsStore } from '@/stores/applications.pinia.js'
import AppInfo from './components/AppInfo.vue';
import AppSteps from './components/AppSteps.vue'
import SearchBar from './components/SearchBar.vue'
const store = useApplicationsStore();

const { t } = useI18n();  //
const open = ref(false);
const showDrawer = () => {
    open.value = true;
};

const open2 = ref(false)
const showSteps = () => {
    open2.value = true
}


</script>

<template>
    <!-- poisk -->
    <search-bar></search-bar>
    <div class="overflow-auto" style="width:calc(100vw - 280px)">

        <a-table :dataSource="store.applsList" rowKey="id" :align="center">
            <template #title>Arizalar</template>

            <a-table-column key="applicationNumber" data-index="applicationNumber"
                :title="$t('appl.appNumber')"></a-table-column>
            <a-table-column key="fullName" data-index="fullName" :title="$t('appl.fio')"></a-table-column>

            <a-table-column key="jshshir" data-index="jshshir" :title="$t('appl.code')"></a-table-column>
            <a-table-column key="institution" data-index="institution"
                :title="$t('appl.statisticsTable.univer')"></a-table-column>
            <a-table-column key="date" data-index="date" :title="$t('appl.date')"></a-table-column>

            <a-table-column key="status" data-index="status" :title="$t('status')"></a-table-column>
            <a-table-column key="amount" data-index="amount" :title="$t('summ')"></a-table-column>
            <a-table-column key="action" widht="140"></a-table-column>

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'action'" class="w-fit">
                    <button class="action-btn mr-2" @click="showDrawer">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#F5F6F7" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M16 19.75C16 17.6789 17.6789 16 19.75 16C21.8211 16 23.5 17.6789 23.5 19.75C23.5 21.8211 21.8211 23.5 19.75 23.5C17.6789 23.5 16 21.8211 16 19.75ZM19.75 17.5C18.5074 17.5 17.5 18.5074 17.5 19.75C17.5 20.9926 18.5074 22 19.75 22C20.9926 22 22 20.9926 22 19.75C22 18.5074 20.9926 17.5 19.75 17.5Z"
                                fill="#191B1C" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.0734 18.3964C11.6543 19.0003 11.5 19.4727 11.5 19.75C11.5 20.0273 11.6543 20.4997 12.0734 21.1036C12.4786 21.6874 13.0808 22.3203 13.8427 22.905C15.3698 24.0771 17.4635 25 19.75 25C22.0365 25 24.1302 24.0771 25.6573 22.905C26.4192 22.3203 27.0214 21.6874 27.4266 21.1036C27.8457 20.4997 28 20.0273 28 19.75C28 19.4727 27.8457 19.0003 27.4266 18.3964C27.0214 17.8126 26.4192 17.1797 25.6573 16.595C24.1302 15.4229 22.0365 14.5 19.75 14.5C17.4635 14.5 15.3698 15.4229 13.8427 16.595C13.0808 17.1797 12.4786 17.8126 12.0734 18.3964ZM12.9294 15.405C14.6597 14.0771 17.066 13 19.75 13C22.434 13 24.8403 14.0771 26.5706 15.405C27.4374 16.0703 28.1532 16.8124 28.6589 17.5411C29.1506 18.2497 29.5 19.0273 29.5 19.75C29.5 20.4727 29.1506 21.2503 28.6589 21.9589C28.1532 22.6876 27.4374 23.4297 26.5706 24.095C24.8403 25.4229 22.434 26.5 19.75 26.5C17.066 26.5 14.6597 25.4229 12.9294 24.095C12.0626 23.4297 11.3468 22.6876 10.8411 21.9589C10.3494 21.2503 10 20.4727 10 19.75C10 19.0273 10.3494 18.2497 10.8411 17.5411C11.3468 16.8124 12.0626 16.0703 12.9294 15.405Z"
                                fill="#191B1C" />
                        </svg>
                    </button>
                    <button class="action-btn" @click="showSteps">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#F5F6F7" />
                            <path
                                d="M20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15V20C19.25 20.2586 19.3832 20.4989 19.6025 20.636L22.6025 22.511C22.9538 22.7305 23.4165 22.6238 23.636 22.2725C23.8555 21.9212 23.7487 21.4585 23.3975 21.239L20.75 19.5843V15Z"
                                fill="#191B1C" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M20 11.25C15.1675 11.25 11.25 15.1675 11.25 20C11.25 24.8325 15.1675 28.75 20 28.75C24.8325 28.75 28.75 24.8325 28.75 20C28.75 15.1675 24.8325 11.25 20 11.25ZM12.75 20C12.75 15.9959 15.9959 12.75 20 12.75C24.0041 12.75 27.25 15.9959 27.25 20C27.25 24.0041 24.0041 27.25 20 27.25C15.9959 27.25 12.75 24.0041 12.75 20Z"
                                fill="#191B1C" />
                        </svg>
                    </button>
                </template>

                <template v-if="column.key === 'status'">
                    <a-badge :status="record.status ? 'success' : 'error'"
                        :text="record.status ? `${t('prove')}` : `${t('denaed')}`" />
                </template>
            </template>
        </a-table>
    </div>



    <!-- city companies drawer -->
    <a-modal v-model:open="open" :footer="false" width="80vw" style="top: 20px">
        <app-info></app-info>
    </a-modal>
    <a-modal title="Ariza qadamlari" v-model:open="open2" :footer="false" width="460px"
        :style="{ top: '0', right: '0', height: '100vh', position: 'fixed', margin: '0', padding: '0' }"
        body-style="{ height: '100%', padding: '0' }">
        <app-steps></app-steps>
    </a-modal>


</template>
<style scoped>
button.action-btn:hover svg>path {
    fill: #4A5154
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

:deep(.ant-pagination .ant-pagination-item) {
    border-radius: 100px;

    a {
        font-weight: 600;
    }

}

:deep(.ant-pagination .ant-pagination-item-active) {
    background: #005CE8;

    a {
        color: white
    }
}
</style>