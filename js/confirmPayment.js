// 生成10筆資料
// building是培育室的大樓名稱，可能為[新德惠大樓,綜合大樓,挺生大樓,實驗大樓,北設工大樓,尚志大樓]。
// room是配置的培育室號碼，可能為[101,104,105,106,201,202,A4-102,A4-103,714,809,818]。
// amount 是每月服務費用，金額落在30000~80000之間，要有千分位符號。

// startDate是使用培育室的第一天，格式為YYYY-mm-DD。
// endDate是使用培育室的最後一天，格式為YYYY-mm-DD，值會是startDate往後一年。
// firstDeadline是第一階段付款期限，值會是startDate往前10天。
// secondDeadline是第二階段付款期限，值會是startDate往後半年。

// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// responsiblePerson是假的繁體中文公司負責人人名。

// companyEmail 是假的主要聯絡信箱。
// contactPerson是繁體中文的假主要聯絡人人名。
// companyPhone是假的電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。

// paymentDateFirst是第一階段付款日，此日期會比firstDeadline早2~3天。
// receivedDateFirst是第一階段收款日，此日期會等於 paymentDateFirst 或是 等於paymentDateFirst的下一個工作天。
// paymentDateSecond是第二階段付款日，此日期會比secondDeadline早2~3天或是等於''。
// receivedDateSecond是第二階段收款日，若paymentDateSecond沒有值，則此日期是''，若有值則會等於 paymentDateSecond 或是 paymentDateSecond的下一個工作天。

// receiptNumFirst是第一階段收據號碼，格式為A+000+3個字元數字，若receivedDateFirst沒有值，receiptNumFirst=''。
// receiptDateFirst是第一階段收據日期，此日期會比receivedDateFirst晚3天，若receivedDateFirst沒有值，receiptDateFirst=''。
// receiptItemsFirst是第一階段收據項目，值為'服務費'，若receivedDateFirst沒有值，receiptItemsFirst=''。
// receiptAmountFirst是第一階段收據金額，值與amount相同，若receivedDateFirst沒有值，receiptAmountFirst=''。

// receiptNumSecond是第二階段收據號碼，格式為A+000+3個字元數字，若receivedDateSecond沒有值，receiptNumSecond=''。
// receiptDateSecond是第二階段收據日期，此日期會比receivedDateSecond晚3天，若receivedDateSecond沒有值，receiptDateSecond=''。
// receiptItemSecond是第二階段收據項目，值為'服務費'，若receivedDateSecond沒有值，receiptItemsSecond=''。
// receiptAmountSecond是第二階段收據項目，值與amount相同，若receivedDateSecond沒有值，receiptAmountSecond=''。

// remittanceFile是檔案名稱，格式為YYYYmmDD + RM + 數字1字元
// adminNote是管理員備註，可能為''



// 續約 - 將可續約(不論有無點擊要續約)資料匯入

// 新進駐 - 將請進駐後，審核通過的匯入
var dataset_confirmPaymentCultivationRoom = [
    {
        'id': '1',
        'building': '新德惠大樓',
        'room': '101',
        'amount': '40,000',

        'startDate': '',
        'endDate': '',
        'firstDeadline': '',
        'secondDeadline': '',

        'company': '',
        'uniformNum': '',
        'responsiblePerson': '',

        'companyEmail': '',
        'contactPerson': '',
        'companyPhone': '',

        'paymentDateFirst': '',
        'receivedDateFirst': '',
        'paymentDateSecond': '',
        'receivedDateSecond': '',

        'receiptNumFirst': '',
        'receiptDateFirst': '',
        'receiptItemsFirst': '',
        'receiptAmountFirst': '',

        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',

        'remittanceFile': '',
        'adminNote': '',
    },
    {
        'id': '2',
        'building': '綜合大樓',
        'room': '104',
        'amount': '50,000',

        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'firstDeadline': '2023-12-26',
        'secondDeadline': '2024-07-05',

        'company': '優質科技股份有限公司',
        'uniformNum': '87654321',
        'responsiblePerson': '李美麗',

        'companyEmail': 'quality@example.com',
        'contactPerson': '陳英俊',
        'companyPhone': '02-56789012',

        'paymentDateFirst': '2023-12-24',
        'receivedDateFirst': '',
        'paymentDateSecond': '',
        'receivedDateSecond': '',

        'receiptNumFirst': '',
        'receiptDateFirst': '',
        'receiptItemsFirst': '',
        'receiptAmountFirst': '',

        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',

        'remittanceFile': '',
        'adminNote': '',
    },
    {
        'id': '3',
        'building': '挺生大樓',
        'room': '105',
        'amount': '60,000',

        'startDate': '2024-02-01',
        'endDate': '2025-02-01',
        'firstDeadline': '2024-01-22',
        'secondDeadline': '2024-08-01',

        'company': '金鼎企業有限公司',
        'uniformNum': '11223344',
        'responsiblePerson': '王大明',

        'companyEmail': 'golden@example.com',
        'contactPerson': '黃曉明',
        'companyPhone': '02-23456789',

        'paymentDateFirst': '2024-01-20',
        'receivedDateFirst': '2024-01-21',
        'paymentDateSecond': '',
        'receivedDateSecond': '',

        'receiptNumFirst': 'A000789',
        'receiptDateFirst': '2024-01-24',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '60,000',

        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',

        'remittanceFile': '20240120RM3',
        'adminNote': '第二階段尚未付款',
    },
    {
        'id': '4',
        'building': '實驗大樓',
        'room': '106',
        'amount': '70,000',

        'startDate': '2024-03-01',
        'endDate': '2025-03-01',
        'firstDeadline': '2024-02-20',
        'secondDeadline': '2024-09-01',

        'company': '龍騰科技股份有限公司',
        'uniformNum': '55667788',
        'responsiblePerson': '林小明',

        'companyEmail': 'dragon@example.com',
        'contactPerson': '張俊傑',
        'companyPhone': '02-34567890',

        'paymentDateFirst': '2024-02-18',
        'receivedDateFirst': '2024-02-19',
        'paymentDateSecond': '',
        'receivedDateSecond': '',

        'receiptNumFirst': 'A001012',
        'receiptDateFirst': '2024-02-22',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '70,000',

        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',

        'remittanceFile': '20240218RM4',
        'adminNote': '',
    },
    {
        'id': '5',
        'building': '尚志大樓',
        'room': '201',
        'amount': '80,000',

        'startDate': '2024-04-01',
        'endDate': '2025-04-01',
        'firstDeadline': '2024-03-22',
        'secondDeadline': '2024-10-01',

        'company': '日月光股份有限公司',
        'uniformNum': '33445566',
        'responsiblePerson': '陳英豪',

        'companyEmail': 'sunmoon@example.com',
        'contactPerson': '李建國',
        'companyPhone': '02-45678901',

        'paymentDateFirst': '2024-03-20',
        'receivedDateFirst': '2024-03-21',
        'paymentDateSecond': '',
        'receivedDateSecond': '',

        'receiptNumFirst': 'A001345',
        'receiptDateFirst': '2024-03-24',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '80,000',

        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',

        'remittanceFile': '20240320RM5',
        'adminNote': '',
    },
    {
        'id': '6',
        'building': '新德惠大樓',
        'room': '202',
        'amount': '35,000',

        'startDate': '2024-05-01',
        'endDate': '2025-05-01',
        'firstDeadline': '2024-04-21',
        'secondDeadline': '2024-11-01',

        'company': '大宇科技股份有限公司',
        'uniformNum': '66554433',
        'responsiblePerson': '吳大偉',

        'companyEmail': 'dayu@example.com',
        'contactPerson': '張中興',
        'companyPhone': '02-67890123',

        'paymentDateFirst': '2024-04-19',
        'receivedDateFirst': '2024-04-20',
        'paymentDateSecond': '2024-10-29',
        'receivedDateSecond': '2024-10-30',

        'receiptNumFirst': 'A001678',
        'receiptDateFirst': '2024-04-23',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '35,000',

        'receiptNumSecond': 'A002345',
        'receiptDateSecond': '2024-11-02',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '35,000',

        'remittanceFile': '20240419RM6',
        'adminNote': '',
    },
    {
        'id': '7',
        'building': '綜合大樓',
        'room': 'A4-102',
        'amount': '45,000',

        'startDate': '2024-06-01',
        'endDate': '2025-06-01',
        'firstDeadline': '2024-05-22',
        'secondDeadline': '2024-12-01',

        'company': '奇美電子有限公司',
        'uniformNum': '77889900',
        'responsiblePerson': '張大強',

        'companyEmail': 'chimei@example.com',
        'contactPerson': '劉建中',
        'companyPhone': '02-78901234',

        'paymentDateFirst': '2024-05-20',
        'receivedDateFirst': '2024-05-21',
        'paymentDateSecond': '2024-11-28',
        'receivedDateSecond': '2024-11-29',

        'receiptNumFirst': 'A001901',
        'receiptDateFirst': '2024-05-24',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '45,000',

        'receiptNumSecond': 'A002456',
        'receiptDateSecond': '2024-12-02',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '45,000',

        'remittanceFile': '20240520RM7',
        'adminNote': '',
    },
    {
        'id': '8',
        'building': '挺生大樓',
        'room': '714',
        'amount': '50,000',

        'startDate': '2024-07-01',
        'endDate': '2025-07-01',
        'firstDeadline': '2024-06-21',
        'secondDeadline': '2024-12-31',

        'company': '信輝企業有限公司',
        'uniformNum': '99887766',
        'responsiblePerson': '李佳蓉',

        'companyEmail': 'shining@example.com',
        'contactPerson': '高文中',
        'companyPhone': '02-89012345',

        'paymentDateFirst': '2024-06-19',
        'receivedDateFirst': '2024-06-20',
        'paymentDateSecond': '2024-12-28',
        'receivedDateSecond': '2024-12-30',

        'receiptNumFirst': 'A002012',
        'receiptDateFirst': '2024-06-23',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '50,000',

        'receiptNumSecond': 'A002567',
        'receiptDateSecond': '2024-12-31',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '50,000',

        'remittanceFile': '20240619RM8',
        'adminNote': '',
    },
    {
        'id': '9',
        'building': '尚志大樓',
        'room': '809',
        'amount': '55,000',

        'startDate': '2024-08-01',
        'endDate': '2025-08-01',
        'firstDeadline': '2024-07-22',
        'secondDeadline': '2025-01-31',

        'company': '宏達科技有限公司',
        'uniformNum': '88776655',
        'responsiblePerson': '陳曉陽',

        'companyEmail': 'macro@example.com',
        'contactPerson': '趙文雄',
        'companyPhone': '02-90123456',

        'paymentDateFirst': '2024-07-20',
        'receivedDateFirst': '2024-07-21',
        'paymentDateSecond': '2025-01-28',
        'receivedDateSecond': '2025-01-29',

        'receiptNumFirst': 'A002345',
        'receiptDateFirst': '2024-07-24',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '55,000',

        'receiptNumSecond': 'A002678',
        'receiptDateSecond': '2025-02-01',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '55,000',

        'remittanceFile': '20240720RM9',
        'adminNote': '',
    },
    {
        'id': '10',
        'building': '北設工大樓',
        'room': '818',
        'amount': '30,000',

        'startDate': '2024-09-01',
        'endDate': '2025-09-01',
        'firstDeadline': '2024-08-22',
        'secondDeadline': '2025-03-01',

        'company': '盛達企業有限公司',
        'uniformNum': '77665544',
        'responsiblePerson': '黃國強',

        'companyEmail': 'prosperous@example.com',
        'contactPerson': '陳秀美',
        'companyPhone': '02-01234567',

        'paymentDateFirst': '2024-08-20',
        'receivedDateFirst': '2024-08-21',
        'paymentDateSecond': '2025-02-27',
        'receivedDateSecond': '2025-02-28',

        'receiptNumFirst': 'A002678',
        'receiptDateFirst': '2024-08-24',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '30,000',

        'receiptNumSecond': 'A002789',
        'receiptDateSecond': '2025-03-03',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '30,000',

        'remittanceFile': '20240820RM10',
        'adminNote': '',
    }
];
// var selectOptionRoom = [
//     { 'optigroup': '新德惠大樓', 'option': '101' },
//     { 'optigroup': '新德惠大樓', 'option': '102' },
//     { 'optigroup': '新德惠大樓', 'option': '103' },
//     { 'optigroup': '新德惠大樓', 'option': '104' },
//     { 'optigroup': '新德惠大樓', 'option': '105' },
//     { 'optigroup': '新德惠大樓', 'option': '106' },
//     { 'optigroup': '新德惠大樓', 'option': '107' },
//     { 'optigroup': '青創大樓', 'option': '201' },
// ];

// 生成10筆資料
// carType是'汽車','機車','汽車'
// parkingSpaceNum是車位號碼或是補發次數，若carType='汽車'或是'機車'，parkingSpaceNum的值可能為'B'+數字1字元+'-'+數字2字元，或是''
// amount 是每月服務費用，要有千分位符號，若type是'汽車'，amount的值為2500或3000。若type是'機車'，amount的值為100。
// company是假的繁體中文公司名稱
// deadLine是付款期限，此日期會比paymentDate晚2~3天
// paymentDate是付款日，此日期會比deadLine早2~3天
// receivedDate是入帳日，此日期會等於 paymentDate 或是等於 paymentDate的下一個工作天
// adminNote是管理員備註，可能為''


// 車位與識別證 - 將可續約(不論有無點擊要續約) 與 新申請 資料匯入
var dataset_confirmPaymentCarOrCard = [
    {
        'id': '1',
        'deadLine': '2024-07-15',
        'company': '超級棒股份有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-13',
        'receivedDate': '2024-07-13',
        'placeOrPrint': 'B1-15',
        'adminNote': ''
    },
    {
        'id': '2',
        'deadLine': '2024-07-16',
        'company': '優質科技股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-14',
        'receivedDate': '2024-07-15',
        'placeOrPrint': 'B2-09',
        'adminNote': ''
    },
    {
        'id': '3',
        'deadLine': '2024-07-17',
        'company': '金鼎企業有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-15',
        'receivedDate': '2024-07-16',
        'placeOrPrint': '5',
        'adminNote': '補發第五次'
    },
    {
        'id': '4',
        'deadLine': '2024-07-18',
        'company': '龍騰科技股份有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-16',
        'receivedDate': '2024-07-16',
        'placeOrPrint': 'B1-07',
        'adminNote': ''
    },
    {
        'id': '5',
        'deadLine': '2024-07-19',
        'company': '日月光股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-17',
        'receivedDate': '2024-07-17',
        'placeOrPrint': '',
        'adminNote': '已空車位'
    },
    {
        'id': '6',
        'deadLine': '2024-07-20',
        'company': '巨匠科技有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-18',
        'receivedDate': '2024-07-19',
        'placeOrPrint': '3',
        'adminNote': ''
    },
    {
        'id': '7',
        'deadLine': '2024-07-21',
        'company': '光速科技股份有限公司',
        'amount': '3,000',
        'type': '汽車',
        'paymentDate': '2024-07-19',
        'receivedDate': '2024-07-19',
        'placeOrPrint': 'B2-12',
        'adminNote': ''
    },
    {
        'id': '8',
        'deadLine': '2024-07-22',
        'company': '太陽能科技股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-20',
        'receivedDate': '2024-07-21',
        'placeOrPrint': 'B3-08',
        'adminNote': ''
    },
    {
        'id': '9',
        'deadLine': '2024-07-23',
        'company': '巨力科技有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-21',
        'receivedDate': '2024-07-22',
        'placeOrPrint': '8',
        'adminNote': ''
    },
    {
        'id': '10',
        'deadLine': '2024-07-24',
        'company': '迅達科技股份有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-22',
        'receivedDate': '2024-07-23',
        'placeOrPrint': 'B1-10',
        'adminNote': '確認車位'
    }
];

var dataset_confirmPaymentCultivationRoom2 = [
    {
        'id': '1',
        'room': '新德惠大樓 101',
        'amount': '40,000',
        'company': '',
        'uniformNum': '',
        'contactPerson': '',
        'companyPhone': '',
        'companyEmail': '',
        'firstDeadline': '',
        'paymentDateFirst': '',
        'receivedDateFirst': '',
        'secondDeadline': '',
        'paymentDateSecond': '',
        'receivedDateSecond': '',
        'receiptNumFirst': '',
        'receiptDateFirst': '',
        'receiptItemsFirst': '',
        'receiptAmountFirst': '',
        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',
        'remittanceFile': '20240510RM1',
        'adminNote': '',
    },

    {
        'id': '2',
        'company': '優質科技股份有限公司',
        'uniformNum': '87654321',
        'contactPerson': '李小龍',
        'companyPhone': '02-36710000',
        'companyEmail': 'xyz@gmail.com',
        'amount': '35,000',
        'firstDeadline': '2024-05-13',
        'paymentDateFirst': '2024-05-11',
        'receivedDateFirst': '2024-05-12',
        'secondDeadline': '2024-11-13',
        'paymentDateSecond': '',
        'receivedDateSecond': '',
        'receiptNumFirst': 'A000125',
        'receiptDateFirst': '2024-05-15',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '35,000',
        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',
        'remittanceFile': '20240511RM1',
        'adminNote': '',
        'room': '綜合大樓 104'
    },
    {
        'id': '3',
        'company': '金鼎企業有限公司',
        'uniformNum': '23456789',
        'contactPerson': '張三豐',
        'companyPhone': '02-46710000',
        'companyEmail': 'jkl@gmail.com',
        'amount': '50,000',
        'firstDeadline': '2024-05-14',
        'paymentDateFirst': '2024-05-12',
        'receivedDateFirst': '2024-05-13',
        'secondDeadline': '2024-11-14',
        'paymentDateSecond': '2024-11-12',
        'receivedDateSecond': '2024-11-13',
        'receiptNumFirst': 'A000126',
        'receiptDateFirst': '2024-05-16',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '50,000',
        'receiptNumSecond': 'A000127',
        'receiptDateSecond': '2024-11-15',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '50,000',
        'remittanceFile': '20240512RM1',
        'adminNote': '',
        'room': '挺生大樓 105'
    },
    {
        'id': '4',
        'company': '龍騰科技股份有限公司',
        'uniformNum': '34567890',
        'contactPerson': '林曉月',
        'companyPhone': '0912-345678',
        'companyEmail': 'def@gmail.com',
        'amount': '45,000',
        'firstDeadline': '2024-05-15',
        'paymentDateFirst': '2024-05-13',
        'receivedDateFirst': '2024-05-14',
        'secondDeadline': '2024-11-15',
        'paymentDateSecond': '',
        'receivedDateSecond': '',
        'receiptNumFirst': 'A000128',
        'receiptDateFirst': '2024-05-17',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '45,000',
        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',
        'remittanceFile': '20240513RM1',
        'adminNote': '',
        'room': '實驗大樓 106'
    },
    {
        'id': '5',
        'company': '日月光股份有限公司',
        'uniformNum': '45678901',
        'contactPerson': '陳冠希',
        'companyPhone': '02-56710000',
        'companyEmail': 'ghi@gmail.com',
        'amount': '55,000',
        'firstDeadline': '2024-05-16',
        'paymentDateFirst': '2024-05-14',
        'receivedDateFirst': '2024-05-15',
        'secondDeadline': '2024-11-16',
        'paymentDateSecond': '2024-11-14',
        'receivedDateSecond': '2024-11-15',
        'receiptNumFirst': 'A000129',
        'receiptDateFirst': '2024-05-18',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '55,000',
        'receiptNumSecond': 'A000130',
        'receiptDateSecond': '2024-11-17',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '55,000',
        'remittanceFile': '20240514RM1',
        'adminNote': '',
        'room': '北設工大樓 201'
    },
    {
        'id': '6',
        'company': '巨匠科技有限公司',
        'uniformNum': '56789012',
        'contactPerson': '吳宗憲',
        'companyPhone': '02-66710000',
        'companyEmail': 'mno@gmail.com',
        'amount': '60,000',
        'firstDeadline': '2024-05-17',
        'paymentDateFirst': '2024-05-15',
        'receivedDateFirst': '2024-05-16',
        'secondDeadline': '2024-11-17',
        'paymentDateSecond': '2024-11-15',
        'receivedDateSecond': '2024-11-16',
        'receiptNumFirst': 'A000131',
        'receiptDateFirst': '2024-05-19',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '60,000',
        'receiptNumSecond': 'A000132',
        'receiptDateSecond': '2024-11-18',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '60,000',
        'remittanceFile': '20240515RM1',
        'adminNote': '',
        'room': '尚志大樓 202'
    },
    {
        'id': '7',
        'company': '光速科技股份有限公司',
        'uniformNum': '67890123',
        'contactPerson': '周杰倫',
        'companyPhone': '02-76710000',
        'companyEmail': 'pqr@gmail.com',
        'amount': '70,000',
        'firstDeadline': '2024-05-18',
        'paymentDateFirst': '2024-05-16',
        'receivedDateFirst': '2024-05-17',
        'secondDeadline': '2024-11-18',
        'paymentDateSecond': '',
        'receivedDateSecond': '',
        'receiptNumFirst': 'A000133',
        'receiptDateFirst': '2024-05-20',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '70,000',
        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',
        'remittanceFile': '20240516RM1',
        'adminNote': '',
        'room': '新德惠大樓 A4-102'
    },
    {
        'id': '8',
        'company': '太陽能科技股份有限公司',
        'uniformNum': '78901234',
        'contactPerson': '陳奕迅',
        'companyPhone': '0912-456789',
        'companyEmail': 'stu@gmail.com',
        'amount': '65,000',
        'firstDeadline': '2024-05-19',
        'paymentDateFirst': '2024-05-17',
        'receivedDateFirst': '2024-05-18',
        'secondDeadline': '2024-11-19',
        'paymentDateSecond': '2024-11-17',
        'receivedDateSecond': '2024-11-18',
        'receiptNumFirst': 'A000134',
        'receiptDateFirst': '2024-05-21',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '65,000',
        'receiptNumSecond': 'A000135',
        'receiptDateSecond': '2024-11-20',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '65,000',
        'remittanceFile': '20240517RM1',
        'adminNote': '',
        'room': '綜合大樓 A4-103'
    },
    {
        'id': '9',
        'company': '巨力科技有限公司',
        'uniformNum': '89012345',
        'contactPerson': '周星馳',
        'companyPhone': '02-86710000',
        'companyEmail': 'vwx@gmail.com',
        'amount': '75,000',
        'firstDeadline': '2024-05-20',
        'paymentDateFirst': '2024-05-18',
        'receivedDateFirst': '2024-05-19',
        'secondDeadline': '2024-11-20',
        'paymentDateSecond': '2024-11-18',
        'receivedDateSecond': '2024-11-19',
        'receiptNumFirst': 'A000136',
        'receiptDateFirst': '2024-05-22',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '75,000',
        'receiptNumSecond': 'A000137',
        'receiptDateSecond': '2024-11-21',
        'receiptItemsSecond': '服務費',
        'receiptAmountSecond': '75,000',
        'remittanceFile': '20240518RM1',
        'adminNote': '',
        'room': '挺生大樓 714'
    },
    {
        'id': '10',
        'company': '迅達科技股份有限公司',
        'uniformNum': '90123456',
        'contactPerson': '劉德華',
        'companyPhone': '02-96710000',
        'companyEmail': 'yz@gmail.com',
        'amount': '80,000',
        'firstDeadline': '2024-05-21',
        'paymentDateFirst': '2024-05-19',
        'receivedDateFirst': '2024-05-20',
        'secondDeadline': '2024-11-21',
        'paymentDateSecond': '',
        'receivedDateSecond': '',
        'receiptNumFirst': 'A000138',
        'receiptDateFirst': '2024-05-23',
        'receiptItemsFirst': '服務費',
        'receiptAmountFirst': '80,000',
        'receiptNumSecond': '',
        'receiptDateSecond': '',
        'receiptItemsSecond': '',
        'receiptAmountSecond': '',
        'remittanceFile': '20240519RM1',
        'adminNote': '',
        'room': '實驗大樓 809'
    }
];

var dataset_confirmPaymentParkingSpace = [
    {
        'id': '1',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': 'B1-12',
        'amount': '100',
        'company': '',
        'deadLine': '',
        'paymentDate': '',
        'receivedDate': '',
        'adminNote': ''
    },
    {
        'id': '2',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B1-50',
        'amount': '2,500',
        'company': '全球創新有限公司',
        'deadLine': '2024-09-15',
        'paymentDate': '2024-09-13',
        'receivedDate': '2024-09-14',
        'adminNote': ''
    },
    {
        'id': '3',
        'carType': '汽車',
        'building': '校本部',
        'parkingSpaceNum': 'B2-09',
        'amount': '3,000',
        'company': '華興貿易股份有限公司',
        'deadLine': '2024-10-17',
        'paymentDate': '2024-10-15',
        'receivedDate': '2024-10-15',
        'adminNote': ''
    },
    {
        'id': '4',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B2-45',
        'amount': '100',
        'company': '聯合科技有限公司',
        'deadLine': '2024-11-16',
        'paymentDate': '2024-11-14',
        'receivedDate': '2024-11-14',
        'adminNote': ''
    },
    {
        'id': '5',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B3-07',
        'amount': '2,500',
        'company': '',
        'deadLine': '',
        'paymentDate': '',
        'receivedDate': '',
        'adminNote': ''
    },
    {
        'id': '6',
        'carType': '汽車',
        'building': '校本部',
        'parkingSpaceNum': 'B6-10',
        'amount': '2,500',
        'company': '至尊企業有限公司',
        'deadLine': '2025-01-17',
        'paymentDate': '2025-01-15',
        'receivedDate': '2025-01-15',
        'adminNote': ''
    },
    {
        'id': '7',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B4-12',
        'amount': '2,500',
        'company': '新世紀科技股份有限公司',
        'deadLine': '2025-02-14',
        'paymentDate': '2025-02-12',
        'receivedDate': '2025-02-12',
        'adminNote': ''
    },
    {
        'id': '8',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B3-45',
        'amount': '100',
        'company': '卓越科技有限公司',
        'deadLine': '2025-03-18',
        'paymentDate': '2025-03-16',
        'receivedDate': '2025-03-16',
        'adminNote': ''
    },
    {
        'id': '9',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B5-08',
        'amount': '2,500',
        'company': '立欣資訊股份有限公司',
        'deadLine': '2025-04-15',
        'paymentDate': '2025-04-13',
        'receivedDate': '2025-04-13',
        'adminNote': ''
    },
    {
        'id': '10',
        'carType': '機車',
        'building': '校本部',
        'parkingSpaceNum': 'B2-10',
        'amount': '2,500',
        'company': '百勝企業有限公司',
        'deadLine': '2025-05-17',
        'paymentDate': '2025-05-15',
        'receivedDate': '2025-05-15',
        'adminNote': ''
    }
];

var dataset_confirmPaymentAll = [
    {
        'id': '1',
        'createDate': '2024-07-15',
        'company': '超級棒股份有限公司',
        'paymentDate': '2024-07-13',
        'amount': '2,500',
        'receivedDate': '2024-07-13',
        'adminNote': '',
        'status': '已開立收據',
        'type': '汽車',
        'placeOrPrint': 'B1-15',
        'last5AccountNo': '01234',
        'remittanceFile': '',
        'remark':'',
    },
    {
        'id': '2',
        'createDate': '2024-07-16',
        'company': '優質科技股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-14',
        'receivedDate': '2024-07-15',
        'placeOrPrint': 'B2-09',
        'adminNote': ''
    },
    {
        'id': '3',
        'createDate': '2024-07-17',
        'company': '金鼎企業有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-15',
        'receivedDate': '2024-07-16',
        'placeOrPrint': '5',
        'adminNote': '補發第五次'
    },
    {
        'id': '4',
        'createDate': '2024-07-18',
        'company': '龍騰科技股份有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-16',
        'receivedDate': '2024-07-16',
        'placeOrPrint': 'B1-07',
        'adminNote': ''
    },
    {
        'id': '5',
        'createDate': '2024-07-19',
        'company': '日月光股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-17',
        'receivedDate': '2024-07-17',
        'placeOrPrint': '',
        'adminNote': '已空車位'
    },
    {
        'id': '6',
        'createDate': '2024-07-20',
        'company': '巨匠科技有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-18',
        'receivedDate': '2024-07-19',
        'placeOrPrint': '3',
        'adminNote': ''
    },
    {
        'id': '7',
        'createDate': '2024-07-21',
        'company': '光速科技股份有限公司',
        'amount': '3,000',
        'type': '汽車',
        'paymentDate': '2024-07-19',
        'receivedDate': '2024-07-19',
        'placeOrPrint': 'B2-12',
        'adminNote': ''
    },
    {
        'id': '8',
        'createDate': '2024-07-22',
        'company': '太陽能科技股份有限公司',
        'amount': '100',
        'type': '機車',
        'paymentDate': '2024-07-20',
        'receivedDate': '2024-07-21',
        'placeOrPrint': 'B3-08',
        'adminNote': ''
    },
    {
        'id': '9',
        'createDate': '2024-07-23',
        'company': '巨力科技有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-21',
        'receivedDate': '2024-07-22',
        'placeOrPrint': '8',
        'adminNote': ''
    },
    {
        'id': '10',
        'createDate': '2024-07-24',
        'company': '迅達科技股份有限公司',
        'amount': '2,500',
        'type': '汽車',
        'paymentDate': '2024-07-22',
        'receivedDate': '2024-07-23',
        'placeOrPrint': 'B1-10',
        'adminNote': '確認車位'
    }
];

$(function () {

    // 同步燈箱顯示資料
    $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let firmId = String(button.data('id'));
        // console.log('openRoom Id:', firmId);
        let firmData = dataset_confirmPaymentCultivationRoom.find(firm => firm.id === firmId);
        if (firmData) {
            $('#companyName').text(firmData.company); //-
            $('#uniformNum').text(firmData.uniformNum); //-
            $('#contactPerson').text(firmData.contactPerson); //-

            $('#companyPhone').text(firmData.companyPhone); //-
            $('#companyEmail').text(firmData.companyEmail); //-
            $('#rate').text(firmData.amount);

            $('#firstDeadline').text(firmData.firstDeadline);
            $('#paymentDateFirst').text(firmData.paymentDateFirst);
            $('#receivedDateFirst').text(firmData.receivedDateFirst);

            $('#secondDeadline').text(firmData.secondDeadline);
            $('#paymentDateSecond').text(firmData.paymentDateSecond);
            $('#receivedDateSecond').text(firmData.receivedDateSecond);

            $('#receiptNumFirst').text(firmData.receiptNumFirst);
            $('#receiptDateFirst').text(firmData.receiptDateFirst);
            $('#receiptItemsFirst').text(firmData.receiptItemsFirst);
            $('#receiptAmountFirst').text(firmData.receiptAmountFirst);

            $('#receiptNumSecond').text(firmData.receiptNumSecond);
            $('#receiptDateSecond').text(firmData.receiptDateSecond);
            $('#receiptItemsSecond').text(firmData.receiptItemsSecond);
            $('#receiptAmountSecond').text(firmData.receiptAmountSecond);

            $('#adminNote').text(firmData.adminNote);
            $('#room').text(firmData.room);

        } else {
            console.error('firmData data not found for id:', firmId);
        };

        theseAddClass(["changeInput_items"], ['companyName', 'contactPerson', 'receiptNumFirst', 'receiptItemsFirst', 'receiptNumSecond', 'receiptItemsSecond', 'adminNote']);
        theseAddClass(["changeSelectRoom_items"], ['room']);
        theseAddClass(["changeNumber_items"], ['uniformNum']);
        theseAddClass(["changeDate_items"], ['firstDeadline', 'paymentDateFirst', 'receivedDateFirst', 'secondDeadline', 'paymentDateSecond', 'receivedDateSecond', 'receiptDateFirst', 'receiptDateSecond']);
        theseAddClass(["changeMoney_items"], ['rate', 'receiptAmountFirst', 'receiptAmountSecond']);
        theseAddClass(["changePhone_items"], ['companyPhone']);
        theseAddClass(["changeEmail_items"], ['companyEmail']);
        CustomInputHandlers.init();
        // $('#updateBtn').show();

        $('#updateBtn').on('click', function () {
            console.log('firmId 2 :', firmId); // 確認 psId 是否正確獲取
            // 清除上次的資料
            updatedData = {};
            // 獲取所有欄位的目前值
            updatedData.id = firmId;
            updatedData.companyName = $('#companyName').text();
            updatedData.uniformNum = $('#uniformNum').text();
            updatedData.contactPerson = $('#contactPerson').text();

            updatedData.companyPhone = $('#companyPhone').text();
            updatedData.companyEmail = $('#companyEmail').text();
            updatedData.amount = $('#rate').text();

            updatedData.firstDeadline = $('#firstDeadline').text();
            updatedData.paymentDateFirst = $('#paymentDateFirst').text();
            updatedData.receivedDateFirst = $('#receivedDateFirst').text();

            updatedData.secondDeadline = $('#secondDeadline').text();
            updatedData.paymentDateSecond = $('#paymentDateSecond').text();
            updatedData.receivedDateSecond = $('#receivedDateSecond').text();

            updatedData.receiptNumFirst = $('#receiptNumFirst').text();
            updatedData.receiptDateFirst = $('#receiptDateFirst').text();
            updatedData.receiptItemsFirst = $('#receiptItemsFirst').text();
            updatedData.receiptAmountFirst = $('#receiptAmountFirst').text();

            updatedData.receiptNumSecond = $('#receiptNumSecond').text();
            updatedData.receiptDateSecond = $('#receiptDateSecond').text();
            updatedData.receiptItemsSecond = $('#receiptItemsSecond').text();
            updatedData.receiptAmountSecond = $('#receiptAmountSecond').text();

            updatedData.adminNote = $('#adminNote').text();
            updatedData.room = $('#room').text();
            // updatedData.adminNote = $('#adminNote').text();

            console.log(updatedData);

            // 將更新的資料送到後端
            // $.ajax({
            //     url: '您的後端URL', // 替換成您的後端接收更新請求的URL
            //     type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
            //     contentType: 'application/json',
            //     data: JSON.stringify(updatedData),
            //     success: function (response) {
            //         // 處理成功回應
            //         console.log('更新成功:', response);
            //         // 根據需要執行其他操作，例如顯示成功訊息
            //     },
            //     error: function (xhr, status, error) {
            //         // 處理錯誤情況
            //         console.error('更新失敗:', error);
            //         // 根據需要顯示錯誤訊息或執行其他操作
            //     }
            // });
        });


    });

    // 車位
    $('#confirmPaymentParkingSpaceList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentParkingSpace,
        "columns": [
            { data: 'building', title: '大樓' }, // 0
            { data: 'carType', title: "類型", }, // 1
            { data: 'parkingSpaceNum', title: "車位號碼", }, // 2
            { data: 'amount', title: "費用", }, // 3
            {
                data: 'company', title: "承租公司", // 4
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'deadLine', title: "到期日",
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            }, // 5
            {
                data: 'receivedDate', title: "付款日",
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            }, // 6

            { data: 'adminNote', title: "管理備註", }, // 7
            {
                data: 'id', title: "檢閱", // 8
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }, className: 'text-lg-center text-nowrap'
            },
        ],
        "order": [[0, "asc"], [1, "desc"], [2, "asc"]],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [5],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8] },
            { className: "text-lg-center", targets: [0, 1, 2, 5, 6] },
            { className: "text-nowrap", targets: [0, 1, 2, 3, 5, 6] },
        ],

        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            [0, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95em');
            });
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            // [1, 4, 5].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            // });
        }
    });

    dataset_confirmPaymentCultivationRoom.forEach(item => {
        if (item.company == '' || item.company == null) {
            item.rentOut = '0';
        } else if (item.receivedDateFirst == '' || item.receivedDateFirst == null) {
            item.rentOut = '1';
        } else if (item.receivedDateSecond == '' || item.receivedDateSecond == null) {
            item.rentOut = '2';
        } else {
            item.rentOut = '9';
        }
        // console.log('id = ' + item.id + ' ，出租狀態： ' + item.rentOut);
    });
    $('#confirmPaymentCultivationRoomList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentCultivationRoom,
        "columns": [
            { data: 'building', title: '大樓' }, // 0
            { data: 'room', title: '室' }, // 1
            { data: 'amount', title: "費用", }, // 2
            {
                data: 'company', title: "配置公司", // 3 
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'firstDeadline', title: "第一階段", // 4
                render: function (data, type, row) {
                    const receivedDateFirst = row.receivedDateFirst;
                    if (receivedDateFirst == '' || receivedDateFirst == null) {
                        if (data != '' && data != null) {
                            return '到期：' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '入帳：' + receivedDateFirst;
                    }
                }
            },
            {
                data: 'secondDeadline', title: "第二階段", // 5
                render: function (data, type, row) {
                    const receivedDateSecond = row.receivedDateSecond;
                    if (receivedDateSecond === '' || receivedDateSecond === null) {
                        if (data != '' && data != null) {
                            return '到期：' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '入帳：' + receivedDateSecond;
                    }
                }

            },
            {
                data: 'paymentDateSecond', title: "廠商通知<br>付款日", // 6
                render: function (data, type, row) {
                    const paymentDateFirst = row.paymentDateFirst;
                    if (data == '' || data == null) {
                        if (paymentDateFirst != '' && paymentDateFirst != null) {
                            return paymentDateFirst;
                        } else {
                            return '-';
                        }
                    } else {
                        return data;
                    }
                }
            },

            { data: 'adminNote', title: "管理備註", }, // 7
            {
                data: 'id', title: "操作", // 8
                render: function (data, type, row) {
                    const company = row.company;
                    if (company == '' || company == null) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '" title="新增進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
            {
                data: 'id', title: "下期", // 9
                render: function (data, type, row) {
                    const company = row.company;
                    const receivedDateFirst = row.receivedDateFirst;
                    const receivedDateSecond = row.receivedDateSecond;
                    const secondDeadline = row.secondDeadline;
                    if (company && ((secondDeadline == '' || secondDeadline == null) && (receivedDateFirst != '' && receivedDateFirst != null)) ||
                        (secondDeadline && (receivedDateSecond != '' && receivedDateSecond != null))) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '" title="新增下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    }

                    return '';
                }, className: 'text-center text-nowrap'
            },
            { data: 'rentOut', visible: false }, // 10
        ],
        "order": [[10, "asc"], [5, "desc"], [4, "desc"]],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [3],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8, 9] },
            { className: "text-center", targets: [1, 4, 5, 6] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            $('td:eq(5)', row).css('min-width', '100px');
            [4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '146px');
            });
            [2, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
            // $('td:eq(8)', row).css('max-width', '70px');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
        }
    });

    $('#confirmPaymentAllList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentAll,
        "columns": [
            { data: 'createDate', title: '通知日期' }, // 0
            {
                data: 'company', title: "通知公司", // 1
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'paymentDate', title: "付款日", // 6
                render: function (data) {
                    if (data === null || data == '') {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            { data: 'amount', title: "付款金額", }, // 2

            { data: 'adminNote', title: "管理備註", }, // 7
            {
                data: 'id', title: "操作", // 8
                render: function (data, type, row) {
                    const company = row.company;
                    if (company == '' || company == null) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '" title="新增進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
        ],
        "order": [[10, "asc"], [5, "desc"], [4, "desc"]],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [3],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8, 9] },
            { className: "text-center", targets: [1, 4, 5, 6] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            $('td:eq(5)', row).css('min-width', '100px');
            [4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '146px');
            });
            [2, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
            // $('td:eq(8)', row).css('max-width', '70px');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
        }
    });

});


$(function () {
    var table1 = $('#confirmPaymentCultivationRoomList').DataTable();
    var table2 = $('#confirmPaymentParkingSpaceList').DataTable();
    var table4 = $('#confirmPaymentAllList').DataTable();
    // 監聽Bootstrap的切換事件
    $('input[type="radio"][name="btnradio"]').on('change', function () {
        setTimeout(function () {
            table1.columns.adjust().responsive.recalc();
            table2.columns.adjust().responsive.recalc();
            table4.columns.adjust().responsive.recalc();
        }, 200);
    });
});