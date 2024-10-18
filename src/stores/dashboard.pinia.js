import { defineStore } from 'pinia';

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    regionalTable: [
      { id: 1, name: 'Toshkent shahri', applications: '5,23123' },
      { id: 2, name: 'Andijon viloyati', applications: '23123' },
      { id: 3, name: 'Buxoro viloyati', applications: '23123' },
      { id: 4, name: 'Farg‘ona viloyati', applications: '23123' },
      { id: 5, name: 'Jizzax viloyati', applications: '23123' },
      { id: 6, name: 'Namangan viloyati', applications: '23123' },
      { id: 7, name: 'Navoiy viloyati', applications: '23123' },
      { id: 8, name: 'Qashqadaryo viloyati', applications: '23123' },
      { id: 9, name: 'Samarqand viloyati', applications: '23123' },
      { id: 10, name: 'Sirdaryo viloyati', applications: '23123' },
      { id: 11, name: 'Surxondaryo viloyati', applications: '23123' },
      { id: 12, name: 'Toshkent viloyati', applications: '23123' },
      { id: 13, name: 'Xorazm viloyati', applications: '23123' },
      { id: 14, name: 'Qoraqalpog‘iston respublikasi', applications: '23123' },
    ],
    universityTable: [
      { id: 1, name: 'Tashkent State Pedagogical University', applications: 123123123 },
      { id: 2, name: ' Tashkent State Institute of Oriental Studies', applications: 123123123 },
      { id: 3, name: ' Sharda University, Andijan, Uzbekistan', applications: 123123123 },
      { id: 4, name: ' Inha University in Tashkent', applications: 123123123 },
      { id: 5, name: ' Management Development Institute of Singapore in Tashkent', applications: 123123123 },
      { id: 6, name: ' Moscow State University in Tashkent named for M. V. Lomonosov', applications: 123123123 },
    ],
    bankTable: [
      {
        id: 1, name: 'Hamkorbank', applications: 123123, icon: "@/assets/images/hamkorbank.svg"
      }
    ],
    genderDiagram: [
      { name: "Ayol", count: 1231, color: '#E84646' },
      { name: "Erkak", count: 435, color: '#0E5FD9' }
    ]

  }),
  actions: {


  }
});
