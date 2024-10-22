import { createI18n } from 'vue-i18n';

const messages = {

    uz: {
        application: 'Arizalar',
        all: 'Barchasi',
        allDesc: 'Barcha kelib tushgan arizalar',
        new: 'Yangi',
        newDesc: 'Yangi arizalar',
        inProcess: 'Jarayonda',
        inProcessDesc: 'Jarayonda bo\'lgan arizalar',
        denaed: 'Rad etilgan',
        denaedDesc: 'Bank skoringidan o\'tmagan',
        rejected: 'Bekor qilingan',
        rejectedDesc: 'Arizachi tomonidan',
        accepted: 'Qabul qilingan',
        acceptedDesc: 'Ijoyib hulosa berilgan',
        succes: 'Muvaffaqiyatli',
        succesDesc: 'Kredit ajratilgan',
        autoReject: 'Avto rad etilgan',
        autoRejectDesc: 'Shartlardan o\'tmagan',
        status: 'Holati',
        summ: 'Summa',
        prove: 'Tasqidlangan',
        man: 'Erkak',
        woman: 'Ayol',
        nation: 'Millati',

        statisticsTable: {
            region: 'hududlar',
            regionName: 'hudud nomi',
            univer: "Ta'lim muassasi",
            univerName: "Muassasa nomi",
            appCount: "Arizalar soni ",
            banks: "Banklar",
            banksName: "Bank nomi",
            genderName: 'Jins nomi'
        },

        appl: {
            memberType: 'Kafil turi',
            appNumber: 'Ariza raqami',
            fio: 'F.I.SH',
            code: 'JSHSHIR',
            date: "Sana",
            provedTime: 'Tasdiqlangan vaqti',
        },
        applInfo: {
            titleApp: 'Ariza haqida malumot',
            number: "Ariza raqami:",
            creditSumm: 'Kredit summasi',
            status: 'Ariza holati',
            bankName: 'Bank nomi',
            comeDate: 'Ariza kelib tushgan sa\'na',
            whereFrom: 'Qayerdan  tushgan',
            studyYear: "O'quv yili",
            mygovNumber: 'MyGov raqami',


            titlePerson: "Shaxsga doir ma'lumotlar",
            birthday: "Tug'ilgan sanasi",
            pasport: 'Pasport seriya raqami',
            region: 'Viloyat',
            state: 'Tuman',
            address: 'Manzili',
            currentAddress: 'Joriy manzil',
            citizen: 'Fuqaroligi',
            reestr: 'Ijtimoiy himoya reestrida',
            gender: "Jinsi",

            titleUniver: 'O\'qish joyi haqida ma’lumotlar',
            univerName: "Ta'lim muassasa nomi",
            studyType: "Ta'lim turi",
            univerType: 'Ta’lim muassasa turi',
            studyTime: 'Talim shakli',
            faculteti: 'Fakultet nomi',
            grade: 'Kursi',
            speciality: 'Mutaxasislik nomi',
            doc: 'Shartnoma'

        },
        search: {
            byNumber: 'Ariza raqami bo’yicha izlash',
            byPnfl: ' JSHSHIR raqami bo’yicha izlash',
            byName: '  F.I.Sh bo’yicha izlash',
        },
        filter: {
            byStatus: 'Ariza holatini tanlang',
            byRegion: 'Hududni tanlang',
            byBank: 'Bankni tanlang',
            byUniver: 'Ta’lim muassasasini tanlang',
            byGender: "Jinsni tanlang"

        },
        steps: {
            confirmedGuarantor: 'KAFIL TASDIQLANDI',
            coBorrowerConfirmed: 'BIRGALIKDA QARZ OLUVCHI TASDIQLADI',
            applicationSentToBank: 'ARIZA BANKKA JO’NATILDI',
            inProcess: 'JARAYONDA',
            accepted: 'QABUL QILINGAN',
            rejected: 'RAD QILINGAN',
            successful: 'Muvaffaqqatli',
            canceled: 'Bekor qilingan',
            new: 'YANGI',
        }
    },
    // russian ---------------------------------------------------->
    ru: {
        application: 'Заявки',
        all: 'Все',
        allDesc: 'Все входящие заявки',
        new: 'Новые',
        newDesc: 'Новые заявки',
        inProcess: 'В процессе',
        inProcessDesc: 'Заявки в процессе',
        denaed: 'Отклонено',
        denaedDesc: 'Отклоненные заявки',
        rejected: 'Отклонено',
        rejectedDesc: 'Отклоненные заявки',
        accepted: 'Принято',
        acceptedDesc: 'Принятые заявки',
        succes: 'Успешно',
        succesDesc: 'Успешные заявки',
        autoReject: 'Авто отклонено',
        autoRejectDesc: 'Автоматически отклоненные заявки',
        status: 'Состояние',
        summ: 'Сумма',
        prove: 'Подтвержденнo',
        man: 'Мужчина',
        woman: 'Женчина',
        nation: 'Национальность',

        statisticsTable: {
            region: 'Регионы',
            regionName: 'Название региона',
            univer: 'Учебное заведение',
            univerName: 'Название заведения',
            appCount: 'Количество заявок',
            banks: 'Банки',
            banksName: 'Название банка',
            genderName: 'Поль'

        },

        appl: {
            memberType: 'Тип поручителя',
            appNumber: 'Номер заявки',
            fio: 'Ф.И.О.',
            code: 'ПИНФЛ ',
            date: 'Дата',
            provedTime: 'Время подтверждения'
        },
        applInfo: {
            titleApp: 'Информация о заявке',
            number: 'Номер заявки:',
            creditSumm: 'Сумма кредита',
            status: 'Статус заявки',
            bankName: 'Название банка',
            comeDate: 'Дата поступления заявки',
            whereFrom: 'Получено от',
            studyYear: 'Учебный год',
            mygovNumber: 'Номер MyGov',

            titlePerson: 'Личная информация',
            birthday: 'Дата рождения',
            pasport: 'Серия и номер паспорта',
            region: 'Регион',
            state: 'Район',
            address: 'Адрес',
            currentAddress: 'Текущий адрес',
            citizen: 'Гражданство',
            reestr: 'В реестре социальной защиты',
            gender: 'Пол',

            titleUniver: 'Информация об учебном заведении',
            univerName: 'Название учебного заведения',
            studyType: 'Тип образования',
            univerType: 'Тип учебного заведения',
            studyTime: 'Форма обучения',
            faculteti: 'Название факультета',
            grade: 'Курс',
            speciality: 'Название специальности',
            doc: 'Договор'
        },

        search: {
            byNumber: 'Поиск по номеру заявки',
            byPnfl: 'Поиск по номеру JSHSHIR',
            byName: 'Поиск по Ф.И.О.',
        },
        filter: {
            byStatus: 'Выберите статус заявки',
            byRegion: 'Выберите регион',
            byBank: 'Выберите банк',
            byUniver: 'Выберите учебное заведение',
            byGender: 'Выберите пол',
        },
        steps: {
            confirmedGuarantor: 'Поручитель подтверждён',
            coBorrowerConfirmed: 'Созаемщик подтвердил',
            applicationSentToBank: 'Заявка отправлена в банк',
            inProcess: 'В процессе',
            accepted: 'Принята',
            rejected: 'Отклонена',
            successful: 'Успешно',
            canceled: 'Отменена',
            new: 'Новая',
        },

    },

    //english----------------------------------------------------------->
    en: {
        application: 'Applications',
        all: 'All',
        allDesc: 'All incoming applications',
        new: 'New',
        status: 'Status',
        newDesc: 'New applications',
        inProcess: 'In Process',
        inProcessDesc: 'Applications in process',
        denaed: 'Denied',
        denaedDesc: 'Denied applications',
        rejected: 'Rejected',
        rejectedDesc: 'Rejected applications',
        accepted: 'Accepted',
        acceptedDesc: 'Accepted applications',
        succes: 'Success',
        succesDesc: 'Successful applications',
        autoReject: 'Auto Rejected',
        autoRejectDesc: 'Automatically rejected applications',
        summ: 'Summ',
        prove: 'Confirmed',
        man: 'Male',
        woman: 'Female',
        nation: 'Nationality',

        statisticsTable: {
            region: 'regions',
            regionName: 'region name',
            univer: 'Educational institution',
            univerName: 'Institution name',
            appCount: 'Number of applications',
            banks: 'Banks',
            banksName: 'Bank name',
            genderName: 'Gender'

        },

        appl: {
            memberType: 'Guarantor type',
            appNumber: 'Application number',
            fio: 'Full name',
            code: 'Personal Identification Number (PIN)',
            date: 'Date',
            provedTime: 'Confirmation time'
        },
        applInfo: {
            titleApp: 'Application Information',
            number: 'Application number:',
            creditSumm: 'Loan amount',
            status: 'Application status',
            bankName: 'Bank name',
            comeDate: 'Application received date',
            whereFrom: 'Received from',
            studyYear: 'Academic year',
            mygovNumber: 'MyGov number',

            titlePerson: 'Personal Information',
            birthday: 'Date of birth',
            pasport: 'Passport serial number',
            region: 'Region',
            state: 'District',
            address: 'Address',
            currentAddress: 'Current address',
            citizen: 'Citizenship',
            reestr: 'In the Social Protection Register',
            gender: 'Gender',

            titleUniver: 'Information about the educational institution',
            univerName: 'Educational institution name',
            studyType: 'Education type',
            univerType: 'Type of educational institution',
            studyTime: 'Form of education',
            faculteti: 'Faculty name',
            grade: 'Course',
            speciality: 'Specialty name',
            doc: 'Contract'
        },
        search: {
            byNumber: 'Search by application number',
            byPnfl: 'Search by JSHSHIR number',
            byName: 'Search by full name',
        },
        filter: {
            byStatus: 'Select application status',
            byRegion: 'Select region',
            byBank: 'Select bank',
            byUniver: 'Select educational institution',
            byGender: 'Select gender',
        },

        steps: {
            confirmedGuarantor: 'Guarantor confirmed',
            coBorrowerConfirmed: 'Co-borrower confirmed',
            applicationSentToBank: 'Application sent to bank',
            inProcess: 'In process',
            accepted: 'Accepted',
            rejected: 'Rejected',
            successful: 'Successful',
            canceled: 'Canceled',
            new: 'New',
        }
    }


};

const i18n = createI18n({
    locale: 'uz', // Default 
    fallbackLocale: 'uz',
    messages,
});

export default i18n;
