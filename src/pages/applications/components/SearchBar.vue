<template>
    <div class="flex justify-between pb-4 ">
        <div class="flex items-center gap-3 mr-3">
            <button class="bg-blue rounded-full p-3" :class="{ activeBtn: activeSearch === 'search' }"
                @click="activeSearch = 'search'">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.9635 14.0242C10.3132 16.1468 6.43381 15.9798 3.97703 13.523C1.34099 10.8869 1.34099 6.61307 3.97703 3.97703C6.61307 1.34099 10.8869 1.34099 13.523 3.97703C15.9798 6.43381 16.1468 10.3132 14.0242 12.9635L19.1798 18.1191C19.4727 18.412 19.4727 18.8869 19.1798 19.1798C18.8869 19.4727 18.412 19.4727 18.1191 19.1798L12.9635 14.0242ZM5.03769 12.4623C2.98744 10.4121 2.98744 7.08794 5.03769 5.03769C7.08794 2.98744 10.4121 2.98744 12.4623 5.03769C14.5111 7.08644 14.5126 10.4072 12.4668 12.4578C12.4653 12.4593 12.4638 12.4608 12.4623 12.4623C12.4608 12.4638 12.4593 12.4653 12.4578 12.4668C10.4072 14.5126 7.08644 14.5111 5.03769 12.4623Z"
                        fill="white" />
                </svg>
            </button>



        </div>

        <div class="w-full flex items-center">
            <!-- search options -->
            <transition>
                <a-row v-if="activeSearch == 'search'" :gutter='12' class="w-full items-center">
                    <a-col :lg="6" :xl="5" :xxl="4">
                        <a-input v-model:value="value" size="large" :placeholder="t('search.byNumber')" />
                    </a-col>
                    <a-col :lg="6" :xl="5" :xxl="4">
                        <a-input v-model:value="value" size="large" :placeholder="t('search.byPnfl')" />
                    </a-col>
                    <a-col :lg="6" :xl="5" :xxl="4">
                        <a-input v-model:value="value" size="large" :placeholder="t('search.byName')" />
                    </a-col>
                </a-row>
            </transition>

            <!-- filter -->
            <transition>
                <a-row v-if="activeSearch == 'filter'" class="w-full" :gutter="12">
                    <a-col :lg="4">
                        <a-select v-model:value="status" size="large" show-search :placeholder="t('filter.byStatus')"
                            class="w-full" :options="statusOptions" :filter-option="filterOption"></a-select>
                    </a-col>

                    <a-col :lg="4">
                        <a-select v-model:value="region" size="large" show-search :placeholder="t('filter.byRegion')"
                            class="w-full" :options="regionOptions" :filter-option="filterOption"></a-select>
                    </a-col>
                    <a-col :lg="4">
                        <a-select v-model:value="bank" size="large" show-search :placeholder="t('filter.byBank')"
                            class="w-full" :options="banksOptions" :filter-option="filterOption"></a-select>
                    </a-col>

                    <a-col :lg="4">
                        <a-select v-model:value="univer" size="large" show-search :placeholder="t('filter.byUniver')"
                            class="w-full" :options="univerOptions" :filter-option="filterOption"></a-select>
                    </a-col>
                    <a-col :lg="3">
                        <a-select v-model:value="gender" size="large" show-search :placeholder="t('filter.byGender')"
                            class="w-full" :options="genderOptions" :filter-option="filterOption"></a-select>
                    </a-col>
                    <a-col :lg="5">
                        <a-range-picker v-model:value="date" :placeholder="['DD / MM / YY', 'DD / MM / YY']" />
                    </a-col>
                </a-row>
            </transition>

        </div>

        <div class="flex items-center gap-2 ">
            <!-- filter options -->


            <button :class="{ activeBtn: activeSearch === 'filter' }" @click="activeSearch = 'filter'"
                class="bg-blue rounded-full p-3">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.855 0.869287C15.7586 0.646669 15.5988 0.457367 15.3955 0.325009C15.1923 0.192651 14.9545 0.123101 14.7119 0.125039H1.28761C1.04544 0.125044 0.808483 0.195393 0.605543 0.327534C0.402603 0.459675 0.242416 0.647919 0.144449 0.869388C0.0464828 1.09086 0.0149559 1.33601 0.0537002 1.57506C0.0924446 1.81411 0.199792 2.03676 0.362695 2.21595L5.49976 7.86666V13.9572C5.4996 14.1835 5.56091 14.4056 5.67714 14.5998C5.79337 14.794 5.96016 14.953 6.15969 15.0597C6.35922 15.1665 6.58401 15.2171 6.81005 15.2061C7.03609 15.1951 7.2549 15.1229 7.44312 14.9972L9.94308 13.3307C10.1145 13.2167 10.255 13.0621 10.3521 12.8806C10.4493 12.6991 10.5 12.4964 10.4998 12.2906V7.86674L15.6369 2.21588C15.8015 2.03767 15.9099 1.81492 15.9487 1.57544C15.9875 1.33596 15.9549 1.09036 15.855 0.869287Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n(); const activeSearch = ref()

const statusOptions = [
    {
        value: 'Tasdiqlangan',
        label: 'Tasqdiqlangan',
    },
    {
        value: 'tasdiqlanmagan',
        label: 'tasdiqlanmagan',
    },
];

const regionOptions = [
    { value: 'andijan', label: 'Andijon viloyati' },
    { value: 'bukhara', label: 'Buxoro viloyati' },
    { value: 'fergana', label: 'Farg‘ona viloyati' },
    { value: 'jizzakh', label: 'Jizzax viloyati' },
    { value: 'namangan', label: 'Namangan viloyati' },
    { value: 'navoiy', label: 'Navoiy viloyati' },
    { value: 'qashqadaryo', label: 'Qashqadaryo viloyati' },
    { value: 'samarkand', label: 'Samarqand viloyati' },
    { value: 'sirdaryo', label: 'Sirdaryo viloyati' },
    { value: 'surkhandaryo', label: 'Surxondaryo viloyati' },
    { value: 'tashkent', label: 'Toshkent viloyati' },
    { value: 'karakalpakstan', label: 'Qoraqalpog‘iston Respublikasi' },
    { value: 'khorezm', label: 'Xorazm viloyati' },
    { value: 'tashkent_city', label: 'Toshkent shahri' },
];

const banksOptions = [
    { value: 'Hamkorbank', label: 'Hamkorbank' }
]

const univerOptions = ref([
    { value: 'tuit', label: 'Tuit' }
])
const genderOptions = ([
    { value: 'Erkak', label: 'Erkak' },
    { value: 'Ayol', label: 'Ayol' }
])

const status = ref(undefined);
const region = ref(undefined)
const bank = ref(undefined)
const univer = ref()
const gender = ref()
const date = ref()
</script>

<style lang="scss" scoped>
.activeBtn {
    border: 1px solid var(--main-blue);
    background: white;
    transition: all 0.3s;

    svg>path {
        fill: #005CE8
    }
}

.search-btn {
    border: 1px solid var(--main-blue);
    width: 100%;
    background: white;
    text-align: left;
    padding: 8px 16px;
    height: 40px;
}

:deep(.ant-picker) {
    padding: 9px 11px 6px 26px !important;
}

:deep(.ant-picker .ant-picker-suffix) {
    position: absolute;
    left: 4px;
    color: var(--main-blue);
    top: 12px;
}


.v-enter-active {
    transition: opacity 0.5s ease;
}

.v-leave-active {
    transition: opacity 0s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>