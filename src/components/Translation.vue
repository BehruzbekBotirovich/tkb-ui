<template>
    <div class="flex items-center">
        <a-select ref="select" style="width: 140px" v-model:value="lang" @change="selectLang"
            class="hidden lg:block my-selector">
            <template #suffixIcon>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.5" cy="12" r="12" fill="white" />
                    <g clip-path="url(#clip0_54_1277)">
                        <path d="M7.5 10.5L12.5 15.5L17.5 10.5" stroke="black" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_54_1277">
                            <rect width="20" height="20" fill="black" transform="translate(2.5 3)" />
                        </clipPath>
                    </defs>
                </svg>
            </template>

            <a-select-option value="uz">
                <div class="flex items-center gap-2">
                    <span><img src="../assets/images/FlagUZ.svg" alt="" /></span>
                    <span>O'zbek</span>
                </div>
            </a-select-option>
            <a-select-option value="ru">
                <div class="flex items-center gap-2">
                    <span><img src="../assets/images/FlagRu.svg" alt="" /></span>
                    <span>Русский</span>
                </div>
            </a-select-option>
            <a-select-option value="en">
                <div class="flex items-center gap-2">
                    <span><img src="../assets/images/FlagEn.svg" alt="" /></span>
                    <span>English</span>
                </div>
            </a-select-option>
        </a-select>
      
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();


const lang = ref(localStorage.getItem('i18n') || 'uz');
const selectLang = (newLang) => {
    locale.value = newLang;
    localStorage.setItem('i18n', newLang);
    // location.reload()    
};

onMounted(() => {
    locale.value = localStorage.getItem('i18n') || 'uz'
})
</script>

<style>
.my-selector {
    border-radius: 10px;
    overflow: hidden;

    .ant-select-selector {
        background-color: #F5F6F7 !important;
        padding: 6px !important;
        height: 44px !important;
        border: none !important;
    }
}
</style>