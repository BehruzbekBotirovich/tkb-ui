<template>
    <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Ariza ma'lumotlari">
            <section>
                <h2 class="section-title">{{ $t('applInfo.titleApp') }}</h2>
                <a-row class="details">
                    <a-col class="det" :span="6">{{ $t('applInfo.number') }}</a-col>
                    <a-col class="det" :span="6">49499 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.creditSumm') }} </a-col>
                    <a-col class="det" :span="6">12.075.000 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.status') }} </a-col>
                    <a-col class="det" :span="6">YANGI</a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.bankName') }}</a-col>
                    <a-col class="det" :span="6">Халқ банк Беруний БХМ</a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.comeDate') }} </a-col>
                    <a-col class="det" :span="6">2024-09-26 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.whereFrom') }}</a-col>
                    <a-col class="det" :span="6">MYGOV</a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.studyYear') }} </a-col>
                    <a-col class="det" :span="6">2024 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.mygovNumber') }}</a-col>
                    <a-col class="det" :span="6">13533545</a-col>
                </a-row>
            </section>

            <section>
                <h2 class="section-title">{{ $t('applInfo.titlePerson') }}</h2>
                <a-row class="details">
                    <a-col class="det" :span="6">{{ $t('appl.fio') }}</a-col>
                    <a-col class="det" :span="6">To’rayeva Nozima Ravshanjon qizi </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.birthday') }}</a-col>
                    <a-col class="det" :span="6">123213 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.pasport') }} </a-col>
                    <a-col class="det" :span="6">AD2584928 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.region') }} </a-col>
                    <a-col class="det" :span="6">AD2584928 </a-col>

                    <a-col class="det" :span="6">{{ $t('appl.code') }}</a-col>
                    <a-col class="det" :span="6">JSHSHIR (PINFL): </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.state') }}</a-col>
                    <a-col class="det" :span="6">qwqeqwe </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.gender') }} </a-col>
                    <a-col class="det" :span="6">Millati: </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.address') }} </a-col>
                    <a-col class="det" :span="6">Fuqaroligi:</a-col>

                    <a-col class="det" :span="6">{{ $t('nation') }} </a-col>
                    <a-col class="det" :span="6">Tug'ilgan sanasi: </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.currentAddress') }} </a-col>
                    <a-col class="det" :span="6">asdas </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.citizen') }} </a-col>
                    <a-col class="det" :span="6">asdas </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.reestr') }}</a-col>
                    <a-col class="det" :span="6">mavjud </a-col>

                </a-row>
            </section>

            <section>
                <h2 class="section-title">{{ $t('applInfo.titleUniver') }}</h2>
                <a-row class="details">
                    <a-col class="det" :span="6">{{ $t('applInfo.univerName') }}</a-col>
                    <a-col class="det" :span="6">To’rayeva Nozima Ravshanjon qizi </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.studyType') }}</a-col>
                    <a-col class="det" :span="6">123213 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.univerType') }}</a-col>
                    <a-col class="det" :span="6">AD2584928 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.studyTime') }} </a-col>
                    <a-col class="det" :span="6">AD2584928 </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.faculteti') }} </a-col>
                    <a-col class="det" :span="6">JSHSHIR (PINFL): </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.grade') }}</a-col>
                    <a-col class="det" :span="6">qwqeqwe </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.speciality') }}</a-col>
                    <a-col class="det" :span="6">Millati: </a-col>

                    <a-col class="det" :span="6">{{ $t('applInfo.doc') }}</a-col>
                    <a-col class="det" :span="6">Fuqaroligi:</a-col>

                </a-row>
            </section>
        </a-tab-pane>

        <a-tab-pane key="2" tab="Kafil ma'lumotlari">

            <a-table :columns="columns" :dataSource="dataSource" rowKey="id" :align="center" :pagination="false">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'status'">
                        <div>
                            <div v-if="record.status" class="prove">
                                {{ $t('prove') }}
                            </div>
                            <div v-else class="unprove">
                                {{ $t('denaed') }}
                            </div>
                        </div>

                    </template>
                </template>
            </a-table>
        </a-tab-pane>
    </a-tabs>
</template>

<script setup>import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();  //
const dataSource = reactive([
    {
        key: '1',
        type: 'Kafil',
        jshshir: '6100897*****18',
        status: true,
        confirmedTime: '19.09.2024 10:25:54',
    },
    {
        key: '2',
        type: 'Birgalikda qarz oluvchi',
        jshshir: '3121276*****21',
        status: false,
        confirmedTime: '12.12.2024',
    },
]);

const columns = reactive([
    {
        title: t('appl.memberType'),
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: t('appl.code'),
        dataIndex: 'jshshir',
        key: 'jshshir',
    },
    {
        title: t('status'),
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: t('appl.provedTime'),
        dataIndex: 'confirmedTime',
        key: 'confirmedTime',
    },
]);
const getStatus = (status) => (status === 'Tasdiqlangan' ? 'success' : 'error');
</script>
<style scoped>
.prove {
    padding: 5px;
    text-align: center;
    color: #11C848;
    border-radius: 8px;
    background: #11c8482a;
}

.unprove {
    padding: 5px;
    text-align: center;
    color: #D90004;
    border-radius: 8px;
    background: #d900042a;
}

.section-title {
    color: #333333;
    font-size: 14px;
    padding: 6px 10px;
    border-bottom: 1px solid #E5E7E8;
    margin-bottom: 6px;
}

.details {
    padding: 0 16px;
}

.details>.det {
    font-size: 14px;
    padding: 6px 0;
}

.details>.det:nth-child(even) {
    font-size: 14px;
    font-weight: 400;
}

.details>.det:nth-child(odd) {
    color: #959FA3;
}
</style>