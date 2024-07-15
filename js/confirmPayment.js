// 生成10筆資料物件 dataset_confirmPaymentCultivationRoom，不要函式
// building是培育室的大樓名稱，可能為[新德惠大樓,綜合大樓,挺生大樓,實驗大樓,北設工大樓,尚志大樓]。
// room是配置的培育室號碼，可能為[101,104,105,106,201,202,A4-102,A4-103,714,809,818]。
// squareMeters是坪數，格式為數字2字元+'.'+數字1字元，數字區間介於10.0~30.9之間。

// startDate是使用培育室的第一天，格式為YYYY-mm-DD。
// endDate是使用培育室的最後一天，格式為YYYY-mm-DD，值會是startDate往後一年。
// amount 是每月服務費用，金額落在30000~80000之間，要有千分位符號。

// 若startDate沒有值，company、uniformNum、responsiblePerson、companyEmail、contactPerson、companyPhone都沒有值。

// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// responsiblePerson是假的繁體中文公司負責人人名。
// companyEmail 是假的主要聯絡信箱。
// contactPerson是繁體中文的假主要聯絡人人名。
// companyPhone是假的電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。

// 若company沒有值，以下都沒有值：{
// deadline1是第一階段付款期限，值會是startDate往後三個月。
// deadline2是第二階段付款期限，值會是startDate往後六個月。
// deadline3是第三階段付款期限，值會是startDate往後九個月。
// deadline4是第四階段付款期限，值會是endDate往前10天。

// receiptNum1是第一階段付款收據號碼，值會是為"RM" + 6個數字組成。
// receiptNum3是第三階段付款收據號碼，值會是為"RM" + 6個數字組成。
// receiptNum2是第二階段付款收據號碼，值會是為"RM" + 6個數字組成。
// receiptNum4是第四階段付款收據號碼，值會是為"RM" + 6個數字組成。

// receivedDate1是第一階段實際付款日期，格式為YYYY-mm-DD，值會是deadline1往前1~3天。
// receivedDate3是第三階段實際付款日期，格式為YYYY-mm-DD，值會是deadline2往前1~3天。
// receivedDate2是第二階段實際付款日期，格式為YYYY-mm-DD，值會是deadline3往前1~3天。
// receivedDate4是第四階段實際付款日期，格式為YYYY-mm-DD，值會是deadline4往前1~3天。

// }

// adminNote是管理員備註，可能為''



// 續約 - 將可續約(不論有無點擊要續約)資料匯入

// 新進駐 - 將請進駐後，審核通過的匯入
var dataset_confirmPaymentCultivationRoom = [
    {
        'id': '1',
        'building': '新德惠大樓',
        'room': '101',
        'squareMeters': '15.4',
        'startDate': '2024-08-01',
        'endDate': '2025-07-31',
        'amount': '40,000',
        'company': '超級棒股份有限公司',
        'uniformNum': '12345678',
        'responsiblePerson': '王大明',
        'companyEmail': 'contact@supercompany.com',
        'contactPerson': '張偉',
        'companyPhone': '02-86710001',
        'deadline1': '2024-11-01',
        'deadline2': '2025-02-01',
        'deadline3': '2025-05-01',
        'deadline4': '2025-07-21',
        'receiptNum1': '',
        'receiptNum2': '',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '',
        'receivedDate2': '',
        'receivedDate3': '',
        'adminNote': ''
    },
    {
        'id': '2',
        'building': '綜合大樓',
        'room': '104',
        'squareMeters': '20.5',
        'startDate': '2023-09-01',
        'endDate': '2024-08-31',
        'amount': '50,000',
        'company': '大富翁科技有限公司',
        'uniformNum': '87654321',
        'responsiblePerson': '李四',
        'companyEmail': 'contact@bigmonopoly.com',
        'contactPerson': '林小華',
        'companyPhone': '0912-345678',
        'deadline1': '2023-12-01',
        'deadline2': '2024-03-01',
        'deadline3': '2024-06-01',
        'deadline4': '2024-08-21',
        'receiptNum1': 'RM000127',
        'receiptNum2': 'RM000145',
        'receiptNum3': 'RM000151',
        'receiptNum4': '',
        'receivedDate1': '2024-11-29',
        'receivedDate2': '2024-02-27',
        'receivedDate3': '2024-05-30',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '3',
        'building': '挺生大樓',
        'room': '105',
        'squareMeters': '18.7',
        'startDate': '2024-10-01',
        'endDate': '2025-09-30',
        'amount': '45,000',
        'company': '迅捷物流股份有限公司',
        'uniformNum': '23456789',
        'responsiblePerson': '陳小華',
        'companyEmail': 'contact@swiftlogistics.com',
        'contactPerson': '林大明',
        'companyPhone': '02-86710002',
        'deadline1': '2025-04-01',
        'deadline2': '2025-09-25',
        'deadline3': '',
        'deadline4': '',
        'receiptNum1': '',
        'receiptNum2': '',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '',
        'receivedDate2': '',
        'receivedDate3': '',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '4',
        'building': '實驗大樓',
        'room': '106',
        'squareMeters': '25.3',
        'startDate': '2023-07-01',
        'endDate': '2024-06-30',
        'amount': '55,000',
        'company': '綠能科技有限公司',
        'uniformNum': '34567890',
        'responsiblePerson': '林小強',
        'companyEmail': 'contact@greenenergy.com',
        'contactPerson': '張雅婷',
        'companyPhone': '02-86710003',
        'deadline1': '2023-10-01',
        'deadline2': '2024-01-01',
        'deadline3': '2024-04-01',
        'deadline4': '2024-06-20',
        'receiptNum1': 'RM000135',
        'receiptNum2': 'RM000136',
        'receiptNum3': 'RM000137',
        'receiptNum4': 'RM000138',
        'receivedDate1': '2023-09-29',
        'receivedDate2': '2023-12-30',
        'receivedDate3': '2024-03-29',
        'receivedDate4': '2024-06-18',
        'adminNote': ''
    },
    {
        'id': '5',
        'building': '北設工大樓',
        'room': '201',
        'squareMeters': '30.9',
        'startDate': '2024-08-15',
        'endDate': '2025-08-14',
        'amount': '70,000',
        'company': '全球股份有限公司',
        'uniformNum': '45678901',
        'responsiblePerson': '張偉',
        'companyEmail': 'contact@globalinc.com',
        'contactPerson': '王志豪',
        'companyPhone': '0912-345679',
        'deadline1': '2024-12-15',
        'deadline2': '2025-04-15',
        'deadline3': '2025-08-04',
        'deadline4': '',
        'receiptNum1': '',
        'receiptNum2': '',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '',
        'receivedDate2': '',
        'receivedDate3': '',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '6',
        'building': '尚志大樓',
        'room': '202',
        'squareMeters': '27.8',
        'startDate': '2023-09-15',
        'endDate': '2024-09-14',
        'amount': '65,000',
        'company': '宇宙科技有限公司',
        'uniformNum': '56789012',
        'responsiblePerson': '劉明',
        'companyEmail': 'contact@universe.com',
        'contactPerson': '李小明',
        'companyPhone': '02-86710004',
        'deadline1': '2023-12-15',
        'deadline2': '2024-03-15',
        'deadline3': '2024-06-15',
        'deadline4': '2024-09-04',
        'receiptNum1': 'RM000143',
        'receiptNum2': 'RM000144',
        'receiptNum3': 'RM000145',
        'receiptNum4': 'RM000146',
        'receivedDate1': '2023-12-13',
        'receivedDate2': '2024-03-13',
        'receivedDate3': '2024-06-13',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '7',
        'building': '新德惠大樓',
        'room': 'A4-102',
        'squareMeters': '16.5',
        'startDate': '',
        'endDate': '',
        'amount': '35,000',
        'company': '',
        'uniformNum': '',
        'responsiblePerson': '',
        'companyEmail': '',
        'contactPerson': '',
        'companyPhone': '',
        'deadline1': '',
        'deadline2': '',
        'deadline3': '',
        'deadline4': '',
        'receiptNum1': '',
        'receiptNum2': '',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '',
        'receivedDate2': '',
        'receivedDate3': '',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '8',
        'building': '綜合大樓',
        'room': 'A4-103',
        'squareMeters': '22.3',
        'startDate': '2023-11-01',
        'endDate': '2024-10-31',
        'amount': '55,000',
        'company': '光速科技有限公司',
        'uniformNum': '67890123',
        'responsiblePerson': '黃家豪',
        'companyEmail': 'contact@lightspeed.com',
        'contactPerson': '林小明',
        'companyPhone': '0912-345670',
        'deadline1': '2024-02-01',
        'deadline2': '2024-05-01',
        'deadline3': '2024-08-01',
        'deadline4': '2024-10-21',
        'receiptNum1': 'RM000147',
        'receiptNum2': 'RM000148',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '2024-01-30',
        'receivedDate2': '2024-04-29',
        'receivedDate3': '',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '9',
        'building': '挺生大樓',
        'room': '714',
        'squareMeters': '12.9',
        'startDate': '',
        'endDate': '',
        'amount': '30,000',
        'company': '',
        'uniformNum': '',
        'responsiblePerson': '',
        'companyEmail': '',
        'contactPerson': '',
        'companyPhone': '',
        'deadline1': '',
        'deadline2': '',
        'deadline3': '',
        'deadline4': '',
        'receiptNum1': '',
        'receiptNum2': '',
        'receiptNum3': '',
        'receiptNum4': '',
        'receivedDate1': '',
        'receivedDate2': '',
        'receivedDate3': '',
        'receivedDate4': '',
        'adminNote': ''
    },
    {
        'id': '10',
        'building': '實驗大樓',
        'room': '809',
        'squareMeters': '14.0',
        'startDate': '2023-07-15',
        'endDate': '2024-07-14',
        'amount': '60,000',
        'company': '宏達電子有限公司',
        'uniformNum': '78901234',
        'responsiblePerson': '張雅婷',
        'companyEmail': 'contact@htcelectronics.com',
        'contactPerson': '王志豪',
        'companyPhone': '02-86710005',
        'deadline1': '2023-11-15',
        'deadline2': '2024-03-15',
        'deadline3': '2024-07-04',
        'deadline4': '',
        'receiptNum1': 'RM000151',
        'receiptNum2': 'RM000152',
        'receiptNum3': 'RM000153',
        'receiptNum4': '',
        'receivedDate1': '2023-11-13',
        'receivedDate2': '2024-03-13',
        'receivedDate3': '2024-07-02',
        'receivedDate4': '',
        'adminNote': ''
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

// var dataset_confirmPaymentCultivationRoom2 = [
//     {
//         'id': '1',
//         'room': '新德惠大樓 101',
//         'amount': '40,000',
//         'company': '',
//         'uniformNum': '',
//         'contactPerson': '',
//         'companyPhone': '',
//         'companyEmail': '',
//         'firstDeadline': '',
//         'paymentDateFirst': '',
//         'receivedDateFirst': '',
//         'secondDeadline': '',
//         'paymentDateSecond': '',
//         'receivedDateSecond': '',
//         'receiptNumFirst': '',
//         'receiptDateFirst': '',
//         'receiptItemsFirst': '',
//         'receiptAmountFirst': '',
//         'receiptNumSecond': '',
//         'receiptDateSecond': '',
//         'receiptItemsSecond': '',
//         'receiptAmountSecond': '',
//         'remittanceFile': '20240510RM1',
//         'adminNote': '',
//     },

//     {
//         'id': '2',
//         'company': '優質科技股份有限公司',
//         'uniformNum': '87654321',
//         'contactPerson': '李小龍',
//         'companyPhone': '02-36710000',
//         'companyEmail': 'xyz@gmail.com',
//         'amount': '35,000',
//         'firstDeadline': '2024-05-13',
//         'paymentDateFirst': '2024-05-11',
//         'receivedDateFirst': '2024-05-12',
//         'secondDeadline': '2024-11-13',
//         'paymentDateSecond': '',
//         'receivedDateSecond': '',
//         'receiptNumFirst': 'A000125',
//         'receiptDateFirst': '2024-05-15',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '35,000',
//         'receiptNumSecond': '',
//         'receiptDateSecond': '',
//         'receiptItemsSecond': '',
//         'receiptAmountSecond': '',
//         'remittanceFile': '20240511RM1',
//         'adminNote': '',
//         'room': '綜合大樓 104'
//     },
//     {
//         'id': '3',
//         'company': '金鼎企業有限公司',
//         'uniformNum': '23456789',
//         'contactPerson': '張三豐',
//         'companyPhone': '02-46710000',
//         'companyEmail': 'jkl@gmail.com',
//         'amount': '50,000',
//         'firstDeadline': '2024-05-14',
//         'paymentDateFirst': '2024-05-12',
//         'receivedDateFirst': '2024-05-13',
//         'secondDeadline': '2024-11-14',
//         'paymentDateSecond': '2024-11-12',
//         'receivedDateSecond': '2024-11-13',
//         'receiptNumFirst': 'A000126',
//         'receiptDateFirst': '2024-05-16',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '50,000',
//         'receiptNumSecond': 'A000127',
//         'receiptDateSecond': '2024-11-15',
//         'receiptItemsSecond': '服務費',
//         'receiptAmountSecond': '50,000',
//         'remittanceFile': '20240512RM1',
//         'adminNote': '',
//         'room': '挺生大樓 105'
//     },
//     {
//         'id': '4',
//         'company': '龍騰科技股份有限公司',
//         'uniformNum': '34567890',
//         'contactPerson': '林曉月',
//         'companyPhone': '0912-345678',
//         'companyEmail': 'def@gmail.com',
//         'amount': '45,000',
//         'firstDeadline': '2024-05-15',
//         'paymentDateFirst': '2024-05-13',
//         'receivedDateFirst': '2024-05-14',
//         'secondDeadline': '2024-11-15',
//         'paymentDateSecond': '',
//         'receivedDateSecond': '',
//         'receiptNumFirst': 'A000128',
//         'receiptDateFirst': '2024-05-17',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '45,000',
//         'receiptNumSecond': '',
//         'receiptDateSecond': '',
//         'receiptItemsSecond': '',
//         'receiptAmountSecond': '',
//         'remittanceFile': '20240513RM1',
//         'adminNote': '',
//         'room': '實驗大樓 106'
//     },
//     {
//         'id': '5',
//         'company': '日月光股份有限公司',
//         'uniformNum': '45678901',
//         'contactPerson': '陳冠希',
//         'companyPhone': '02-56710000',
//         'companyEmail': 'ghi@gmail.com',
//         'amount': '55,000',
//         'firstDeadline': '2024-05-16',
//         'paymentDateFirst': '2024-05-14',
//         'receivedDateFirst': '2024-05-15',
//         'secondDeadline': '2024-11-16',
//         'paymentDateSecond': '2024-11-14',
//         'receivedDateSecond': '2024-11-15',
//         'receiptNumFirst': 'A000129',
//         'receiptDateFirst': '2024-05-18',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '55,000',
//         'receiptNumSecond': 'A000130',
//         'receiptDateSecond': '2024-11-17',
//         'receiptItemsSecond': '服務費',
//         'receiptAmountSecond': '55,000',
//         'remittanceFile': '20240514RM1',
//         'adminNote': '',
//         'room': '北設工大樓 201'
//     },
//     {
//         'id': '6',
//         'company': '巨匠科技有限公司',
//         'uniformNum': '56789012',
//         'contactPerson': '吳宗憲',
//         'companyPhone': '02-66710000',
//         'companyEmail': 'mno@gmail.com',
//         'amount': '60,000',
//         'firstDeadline': '2024-05-17',
//         'paymentDateFirst': '2024-05-15',
//         'receivedDateFirst': '2024-05-16',
//         'secondDeadline': '2024-11-17',
//         'paymentDateSecond': '2024-11-15',
//         'receivedDateSecond': '2024-11-16',
//         'receiptNumFirst': 'A000131',
//         'receiptDateFirst': '2024-05-19',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '60,000',
//         'receiptNumSecond': 'A000132',
//         'receiptDateSecond': '2024-11-18',
//         'receiptItemsSecond': '服務費',
//         'receiptAmountSecond': '60,000',
//         'remittanceFile': '20240515RM1',
//         'adminNote': '',
//         'room': '尚志大樓 202'
//     },
//     {
//         'id': '7',
//         'company': '光速科技股份有限公司',
//         'uniformNum': '67890123',
//         'contactPerson': '周杰倫',
//         'companyPhone': '02-76710000',
//         'companyEmail': 'pqr@gmail.com',
//         'amount': '70,000',
//         'firstDeadline': '2024-05-18',
//         'paymentDateFirst': '2024-05-16',
//         'receivedDateFirst': '2024-05-17',
//         'secondDeadline': '2024-11-18',
//         'paymentDateSecond': '',
//         'receivedDateSecond': '',
//         'receiptNumFirst': 'A000133',
//         'receiptDateFirst': '2024-05-20',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '70,000',
//         'receiptNumSecond': '',
//         'receiptDateSecond': '',
//         'receiptItemsSecond': '',
//         'receiptAmountSecond': '',
//         'remittanceFile': '20240516RM1',
//         'adminNote': '',
//         'room': '新德惠大樓 A4-102'
//     },
//     {
//         'id': '8',
//         'company': '太陽能科技股份有限公司',
//         'uniformNum': '78901234',
//         'contactPerson': '陳奕迅',
//         'companyPhone': '0912-456789',
//         'companyEmail': 'stu@gmail.com',
//         'amount': '65,000',
//         'firstDeadline': '2024-05-19',
//         'paymentDateFirst': '2024-05-17',
//         'receivedDateFirst': '2024-05-18',
//         'secondDeadline': '2024-11-19',
//         'paymentDateSecond': '2024-11-17',
//         'receivedDateSecond': '2024-11-18',
//         'receiptNumFirst': 'A000134',
//         'receiptDateFirst': '2024-05-21',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '65,000',
//         'receiptNumSecond': 'A000135',
//         'receiptDateSecond': '2024-11-20',
//         'receiptItemsSecond': '服務費',
//         'receiptAmountSecond': '65,000',
//         'remittanceFile': '20240517RM1',
//         'adminNote': '',
//         'room': '綜合大樓 A4-103'
//     },
//     {
//         'id': '9',
//         'company': '巨力科技有限公司',
//         'uniformNum': '89012345',
//         'contactPerson': '周星馳',
//         'companyPhone': '02-86710000',
//         'companyEmail': 'vwx@gmail.com',
//         'amount': '75,000',
//         'firstDeadline': '2024-05-20',
//         'paymentDateFirst': '2024-05-18',
//         'receivedDateFirst': '2024-05-19',
//         'secondDeadline': '2024-11-20',
//         'paymentDateSecond': '2024-11-18',
//         'receivedDateSecond': '2024-11-19',
//         'receiptNumFirst': 'A000136',
//         'receiptDateFirst': '2024-05-22',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '75,000',
//         'receiptNumSecond': 'A000137',
//         'receiptDateSecond': '2024-11-21',
//         'receiptItemsSecond': '服務費',
//         'receiptAmountSecond': '75,000',
//         'remittanceFile': '20240518RM1',
//         'adminNote': '',
//         'room': '挺生大樓 714'
//     },
//     {
//         'id': '10',
//         'company': '迅達科技股份有限公司',
//         'uniformNum': '90123456',
//         'contactPerson': '劉德華',
//         'companyPhone': '02-96710000',
//         'companyEmail': 'yz@gmail.com',
//         'amount': '80,000',
//         'firstDeadline': '2024-05-21',
//         'paymentDateFirst': '2024-05-19',
//         'receivedDateFirst': '2024-05-20',
//         'secondDeadline': '2024-11-21',
//         'paymentDateSecond': '',
//         'receivedDateSecond': '',
//         'receiptNumFirst': 'A000138',
//         'receiptDateFirst': '2024-05-23',
//         'receiptItemsFirst': '服務費',
//         'receiptAmountFirst': '80,000',
//         'receiptNumSecond': '',
//         'receiptDateSecond': '',
//         'receiptItemsSecond': '',
//         'receiptAmountSecond': '',
//         'remittanceFile': '20240519RM1',
//         'adminNote': '',
//         'room': '實驗大樓 809'
//     }
// ];

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

// 生成10筆資料物件 dataset_confirmPaymentAll，不要函式
// createDate是建立資料的日期，格式為YYYY-mm-DD。
// paymentDate是付款的日期，格式為YYYY-mm-DD。
// adminNote是管理員備註，可能為''
// status是狀態，可能為：''
// applicationNum是支付的項目id
// type是付款項目種類，可能是汽車位、機車位、識別證、培育室
// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// paymentPurpose是付款目的，可能是續約、補發、階段費用
// placeOrPrint是項目名，若type='汽車位'或'機車位'，placeOrPrint的值為'B'+數字1字元+'-'+數字2字元，或是''；若type='識別證'，placeOrPrint的值為'N0000'+數字2碼 或是 ''；若type='培育室'，placeOrPrint的值為'青創基地-201'；
// amount 是每月服務費用，要有千分位符號，若type是'汽車位'，amount的值為2500或3000；若type是'機車位'，amount的值為100；若type是'識別證'，amount的值為300；若type是'培育室'，amount的值為35000~50000；。
// paymentMethod是付款方式，可能是"現金"、"匯款"。
// last5AccountNo是付款帳號後五碼，若paymentMethod為匯款，此資料才有值，此值由隨機5個數字組成，數字可重複。
// remittanceFile是檔案名稱，由"YYYYmmDD_" + "MD" + 2個數字組成。
// receiptNum是收據號碼，為"RM" + 6個數字組成。
// companyEmail是公司主要聯繫的email。
// contactPerson是公司股要聯繫人的人名。
// companyPhone是公司股要聯繫用的電話，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。
var dataset_confirmPaymentAll = [
    {
        'id': '1',
        'createDate': '2024-07-15',
        'paymentDate': '2024-07-13',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '12',
        'type': '汽車位',
        'company': '超級棒股份有限公司',
        'uniformNum': '12345678',
        'paymentPurpose': '續約',
        'placeOrPrint': 'B1-15',
        'amount': '2,500',
        'paymentMethod': '匯款',
        'last5AccountNo': '01234',
        'remittanceFile': '20240713_MD23',
        'receiptNum': '',
        'companyEmail': 'contact@supercompany.com',
        'contactPerson': '王大明',
        'companyPhone': '02-86710001'
    },
    {
        'id': '2',
        'createDate': '2024-07-16',
        'paymentDate': '2024-07-14',
        'adminNote': '',
        'status': '取消',
        'applicationNum': '15',
        'type': '機車位',
        'company': '大富翁科技有限公司',
        'uniformNum': '87654321',
        'paymentPurpose': '新申請',
        'placeOrPrint': '',
        'amount': '100',
        'paymentMethod': '現金',
        'last5AccountNo': '',
        'remittanceFile': '',
        'receiptNum': '',
        'companyEmail': 'contact@bigmonopoly.com',
        'contactPerson': '李四',
        'companyPhone': '0912-345678'
    },
    {
        'id': '3',
        'createDate': '2024-07-17',
        'paymentDate': '2024-07-15',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '18',
        'type': '識別證',
        'company': '迅捷物流股份有限公司',
        'uniformNum': '23456789',
        'paymentPurpose': '補發',
        'placeOrPrint': 'N000034',
        'amount': '300',
        'paymentMethod': '匯款',
        'last5AccountNo': '56789',
        'remittanceFile': '20240715_MD45',
        'receiptNum': '',
        'companyEmail': 'contact@swiftlogistics.com',
        'contactPerson': '陳小華',
        'companyPhone': '02-86710002'
    },
    {
        'id': '4',
        'createDate': '2024-07-18',
        'paymentDate': '2024-07-16',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '20',
        'type': '培育室',
        'company': '綠能科技有限公司',
        'uniformNum': '34567890',
        'paymentPurpose': '階段費用',
        'placeOrPrint': '青創基地-201',
        'amount': '45,000',
        'paymentMethod': '匯款',
        'last5AccountNo': '67890',
        'remittanceFile': '20240716_MD67',
        'receiptNum': 'RM000126',
        'companyEmail': 'contact@greenenergy.com',
        'contactPerson': '林小強',
        'companyPhone': '02-86710003'
    },
    {
        'id': '5',
        'createDate': '2024-07-19',
        'paymentDate': '2024-07-17',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '22',
        'type': '汽車位',
        'company': '全球股份有限公司',
        'uniformNum': '45678901',
        'paymentPurpose': '續約',
        'placeOrPrint': '',
        'amount': '3,000',
        'paymentMethod': '現金',
        'last5AccountNo': '',
        'remittanceFile': '',
        'receiptNum': 'RM000127',
        'companyEmail': 'contact@globalinc.com',
        'contactPerson': '張偉',
        'companyPhone': '0912-345679'
    },
    {
        'id': '6',
        'createDate': '2024-07-20',
        'paymentDate': '2024-07-18',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '25',
        'type': '機車位',
        'company': '宇宙科技有限公司',
        'uniformNum': '56789012',
        'paymentPurpose': '續約',
        'placeOrPrint': 'B1-07',
        'amount': '100',
        'paymentMethod': '匯款',
        'last5AccountNo': '89012',
        'remittanceFile': '20240718_MD89',
        'receiptNum': 'RM000128',
        'companyEmail': 'contact@universe.com',
        'contactPerson': '劉明',
        'companyPhone': '02-86710004'
    },
    {
        'id': '7',
        'createDate': '2024-07-21',
        'paymentDate': '2024-07-19',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '28',
        'type': '識別證',
        'company': '光速科技有限公司',
        'uniformNum': '67890123',
        'paymentPurpose': '補發',
        'placeOrPrint': 'N000056',
        'amount': '300',
        'paymentMethod': '現金',
        'last5AccountNo': '',
        'remittanceFile': '',
        'receiptNum': 'RM000129',
        'companyEmail': 'contact@lightspeed.com',
        'contactPerson': '黃家豪',
        'companyPhone': '0912-345670'
    },
    {
        'id': '8',
        'createDate': '2024-07-22',
        'paymentDate': '2024-07-20',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '30',
        'type': '培育室',
        'company': '宏達電子有限公司',
        'uniformNum': '78901234',
        'paymentPurpose': '階段費用',
        'placeOrPrint': '青創基地-201',
        'amount': '40,000',
        'paymentMethod': '匯款',
        'last5AccountNo': '90123',
        'remittanceFile': '20240720_MD01',
        'receiptNum': 'RM000130',
        'companyEmail': 'contact@htcelectronics.com',
        'contactPerson': '張雅婷',
        'companyPhone': '02-86710005'
    },
    {
        'id': '9',
        'createDate': '2024-07-23',
        'paymentDate': '2024-07-21',
        'adminNote': '',
        'status': '待確認',
        'applicationNum': '32',
        'type': '汽車位',
        'company': '智能機械有限公司',
        'uniformNum': '89012345',
        'paymentPurpose': '續約',
        'placeOrPrint': 'B3-10',
        'amount': '2,500',
        'paymentMethod': '現金',
        'last5AccountNo': '',
        'remittanceFile': '',
        'receiptNum': 'RM000131',
        'companyEmail': 'contact@smartmachinery.com',
        'contactPerson': '王志豪',
        'companyPhone': '0912-345671'
    },
    {
        'id': '10',
        'createDate': '2024-07-24',
        'paymentDate': '2024-07-22',
        'adminNote': '',
        'status': '完成',
        'applicationNum': '35',
        'type': '機車位',
        'company': '聯合工業股份有限公司',
        'uniformNum': '90123456',
        'paymentPurpose': '新申請',
        'placeOrPrint': '',
        'amount': '100',
        'paymentMethod': '匯款',
        'last5AccountNo': '23456',
        'remittanceFile': '20240722_MD23',
        'receiptDate': '2024-07-31',
        'receiptAmount': '100',
        'receiptItems': '場地維護費',
        'receiptNum': 'RM000132',
        'companyEmail': 'contact@unitedindustries.com',
        'contactPerson': '許文',
        'companyPhone': '02-86710006'
    }
];

// 合格廠商
var companyData = [
    "超級棒股份有限公司",
    "大富翁科技有限公司",
    "迅捷物流股份有限公司",
    "綠能科技有限公司",
    "全球股份有限公司",
    "宇宙科技有限公司",
    "光速科技有限公司"
];
// 合格廠商的統編
// var uniformNumData = [
//     "01234567",
//     "12345678",
//     "23456789",
//     "34567890",
//     "45678912",
//     "56789123",
//     "67891234"
// ];
var parkingSpaceCarData = [
    "B1-01",
    "B1-02",
    "B2-03",
    "B3-04",
    "B2-05",
    "B2-07",
    "B3-11"
];
var parkingSpaceMotoData = [
    "B1-21",
    "B1-22",
    "B2-23",
    "B3-24",
    "B2-25",
    "B2-26",
    "B3-27"
];
var idCardData = [
    "N000030",
    "N000051",
    "N000040",
    "N000089",
    "N000012",
    "N000060",
    "N000070"
];

// 廠商所擁有的培育室
var roomData = [
    "新德惠大樓/101",
    "綜合大樓/201",
    "挺生大樓/714",
    "實驗大樓/101",
    "北設工大樓/713",
    "綜合大樓/A4-102",
    "挺生大樓/809"
];

// 支付目的
var selectOptionPaymentPurpose = [
    { 'option': '新申請' },
    { 'option': '補發' },
    { 'option': '續約' },
    { 'option': '階段費用' },
];
// 想購買的項目
var selectOptionPurchase = [
    { 'option': '汽車位' },
    { 'option': '機車位' },
    { 'option': '識別證' },
    { 'option': '培育室' },
];

var selectOptionStatus = [
    { 'option': '待確認' },
    { 'option': '完成' },
    { 'option': '取消' }, // 有付款但臨時取消
    { 'option': '刪除' }, // 錯誤輸入
];

$(function () {

    // 同步培育室已配置 / 新配置燈箱 顯示資料
    $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
        $('#cultivation_receiptNum1, #cultivation_receiptNum2, #cultivation_receiptNum3, #cultivation_receiptNum4, #cultivation_adminNote').addClass("changeInput_items");
        $('#cultivation_startDate, #cultivation_endDate, #cultivation_deadline1, #cultivation_deadline2, #cultivation_deadline3, #cultivation_deadline4').addClass("changeDate_items");
        $('#cultivation_rate').addClass("changeMoney_items");
        $('#cultivation_uniformNum').addClass("changeUniformNum_items");
        $('#cultivation_squareMeters').addClass("changeDecimal_items");
        CustomInputHandlers.init();

        let button = $(event.relatedTarget);
        let roomId = String(button.data('id'));

        if (!roomId.endsWith('_N')) {
            let openRoomData = dataset_confirmPaymentCultivationRoom.find(room => room.id === roomId);
            if (openRoomData) {
                $('#cultivation_deleteData').removeClass('d-none');

                $('#cultivation_building').text(openRoomData.building);
                $('#cultivation_room').text(openRoomData.room);
                $('#cultivation_squareMeters').text(openRoomData.squareMeters);

                $('#cultivation_startDate').text(openRoomData.startDate);
                $('#cultivation_endDate').text(openRoomData.endDate);
                $('#cultivation_rate').text(openRoomData.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。

                $('#cultivation_companyName').text(openRoomData.company);
                $('#cultivation_uniformNum').text(openRoomData.uniformNum);
                $('#cultivation_responsiblePerson').text(openRoomData.responsiblePerson);

                $('#cultivation_companyEmail').text(openRoomData.companyEmail);
                $('#cultivation_contactPerson').text(openRoomData.contactPerson);
                $('#cultivation_companyPhone').text(openRoomData.companyPhone);

                $('#cultivation_deadline1').text(openRoomData.deadline1);
                $('#cultivation_deadline2').text(openRoomData.deadline2);
                $('#cultivation_deadline3').text(openRoomData.deadline3);
                $('#cultivation_deadline4').text(openRoomData.deadline4);

                $('#cultivation_receiptNum1').text(openRoomData.receiptNum1);
                $('#cultivation_receiptNum2').text(openRoomData.receiptNum2);
                $('#cultivation_receiptNum3').text(openRoomData.receiptNum3);
                $('#cultivation_receiptNum4').text(openRoomData.receiptNum4);

                $('#cultivation_receivedDate1').text(openRoomData.receivedDate1);
                $('#cultivation_receivedDate2').text(openRoomData.receivedDate2);
                $('#cultivation_receivedDate3').text(openRoomData.receivedDate3);
                $('#cultivation_receivedDate4').text(openRoomData.receivedDate4);

                $('#cultivation_adminNote').text(openRoomData.adminNote);
            } else {
                console.error('openRoomData data not found for id:', roomId);
            }
        } else {
            // 去除最後兩個字元，然後使用新的 roomId 進行查找
            roomId_N = roomId.slice(0, -2);
            let openRoomData = dataset_confirmPaymentCultivationRoom.find(room => room.id === roomId_N);
            if (openRoomData) {
                $('#cultivation_building').text(openRoomData.building);
                $('#cultivation_room').text(openRoomData.room);
                $('#cultivation_squareMeters').text(openRoomData.squareMeters);
                $('#cultivation_rate').text(openRoomData.amount);

                $('#cultivation_deleteData').addClass('d-none');

            } else {
                console.error('openRoomData data not found for id:', roomId_N);
            }
        }


        $('#cultivation_updateBtn').on('click', function () {
            console.log('firmId 2 :', roomId); // 確認 psId 是否正確獲取
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

        // 解除先前綁定的點擊事件，不設定會造成重複傳遞先前點擊過的資料。
        $('#cultivation_deleteData').off('click');
        $('#cultivation_deleteData').on('click', function () {

            // 清除上次的資料
            deleteData = {};
            // 獲取所有欄位的目前值
            deleteData.id = roomId;
            swalConfirm(
                '確定要刪除嗎？',
                '是啊，這個沒用了...',
                '不！！我是誤按...',
                function () {
                    // YES按鈕點擊後開啟燈箱
                    console.log('deleteData 2 :', roomId); // 確認 psId 是否正確獲取
                })
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

    // 培育室配置廠商-增加緊急日期
    dataset_confirmPaymentCultivationRoom.forEach(item => {
        if (!item.company) {
            item.recentMaturityDate = '';
        } else {
            if (item.deadline4) {
                if (item.receivedDate4) {
                    item.recentMaturityDate = '0';
                } else {
                    if (item.receiptNum3) {
                        item.recentMaturityDate = item.deadline4;
                    } else {
                        item.recentMaturityDate = item.deadline3;
                    }
                }
            } else if (item.deadline3) {
                if (item.receivedDate3) {
                    item.recentMaturityDate = '0';
                } else {
                    if (item.receiptNum2) {
                        item.recentMaturityDate = item.deadline3;
                    } else {
                        item.recentMaturityDate = item.deadline2;
                    }
                }
            } else if (item.deadline2) {
                if (item.receivedDate2) {
                    item.recentMaturityDate = '0';
                } else {
                    if (item.receiptNum1) {
                        item.recentMaturityDate = item.deadline2;
                    } else {
                        item.recentMaturityDate = item.deadline1;
                    }
                }
            } else {
                if (item.receivedDate1) {
                    item.recentMaturityDate = '0';
                } else {
                    item.recentMaturityDate = item.deadline1;
                }
            }
        }
        // console.log('id = ' + item.id + ' ，期限狀態： ' + item.recentMaturityDate);
    });
    // 培育室配置廠商-表格
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
                    if (!data) {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'deadline1', title: "階段&#10102;", // 4
                render: function (data, type, row) {
                    const receivedDate1 = row.receivedDate1;
                    if (!receivedDate1) {
                        if (data) {
                            return '<i class="fa-regular fa-calendar-days"></i> ' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate1;
                    }
                }
            },
            {
                data: 'deadline2', title: "階段&#10103;", // 5
                render: function (data, type, row) {
                    const receivedDate2 = row.receivedDate2;
                    if (!receivedDate2) {
                        if (data) {
                            return '<i class="fa-regular fa-calendar-days"></i> ' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate2;
                    }
                }

            },
            {
                data: 'deadline3', title: "階段&#10104;", // 6
                render: function (data, type, row) {
                    const receivedDate3 = row.receivedDate3;
                    if (!receivedDate3) {
                        if (data) {
                            return '<i class="fa-regular fa-calendar-days"></i> ' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate3;
                    }
                }

            },
            {
                data: 'deadline4', title: "階段&#10105;", // 7
                render: function (data, type, row) {
                    const receivedDate4 = row.receivedDate4;
                    if (!receivedDate4) {
                        if (data) {
                            return '<i class="fa-regular fa-calendar-days"></i> ' + data;
                        } else {
                            return '-';
                        }
                    } else {
                        return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate4;
                    }
                }

            },
            {
                data: 'id', title: "操作", // 8
                render: function (data, type, row) {
                    const company = row.company;
                    if (!company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '_N" title="新增進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
            {
                data: 'id', title: "下期", // 9
                render: function (data, type, row) {
                    const company = row.company;
                    if (company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '_N" title="新增下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    }
                    return '';
                }, className: 'text-center text-nowrap'
            },
            { data: 'recentMaturityDate', visible: false }, // 10
        ],
        "order": [[10, "asc"], [0, "desc"]],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
                responsivePriority: 2,
            },
            {
                targets: [3],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8, 9] },
            { className: "text-center", targets: [1, 4, 5, 6, 7] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [2, 4, 5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });


    // 收款紀錄與收據-表格
    $('#confirmPaymentAllList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentAll,
        "columns": [
            { data: 'createDate', title: '通知日期' }, // 0
            { data: 'company', title: "通知公司" }, //1
            { data: 'paymentDate', title: "付款日" }, // 2
            {
                data: 'type', title: "項目", // 3
                render: function (data, type, row) {
                    const placeOrPrint = row.placeOrPrint;
                    if (placeOrPrint) {
                        return data + '：' + placeOrPrint;
                    } else {
                        return data;
                    }
                }
            },
            { data: 'paymentPurpose', title: "目的" },  // 4
            { data: 'amount', title: "付款金額" }, // 5
            { data: 'adminNote', title: "管理備註", }, // 6
            {
                data: 'id', title: "收據", // 7
                render: function (data, type, row) {
                    const receiptNum = row.receiptNum;
                    if (receiptNum == '' || receiptNum == null) {
                        return '<button type="button" class="btn btn-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '" title="新增進駐廠商"><i class="fa-solid fa-receipt"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '"><i class="fa-solid fa-receipt"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
        ],
        "order": [[0, "desc"], [2, "desc"], [3, "desc"]],
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
                targets: [4],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [7] },
            { className: "text-center", targets: [0, 2] },
            { className: "text-nowrap", targets: [0, 2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(7)', row).css('min-width', '70px');
            [0, 2].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
            [0, 2, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });

});

$(function () {
    // 同步 付款收據 燈箱顯示資料
    $('#confirmPaymentModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let paymentId = String(button.data('id'));

        // 解除先前綁定的點擊事件，不設定會造成重複傳遞先前點擊過的資料。
        $('#payment_updateBtn').off('click');
        $('#danger_paymentBox').text('');

        // console.log('openRoom Id:', paymentId);
        let paymentData = dataset_confirmPaymentAll.find(payment => payment.id === paymentId);
        if (paymentData) {
            $('#payment_companyName').text(paymentData.company);
            $('#payment_uniformNum').text(paymentData.uniformNum);
            $('#payment_paymentPurpose').text(paymentData.paymentPurpose);

            $('#payment_companyEmail').text(paymentData.companyEmail);
            $('#payment_contactPerson').text(paymentData.contactPerson);
            $('#payment_companyPhone').text(paymentData.companyPhone);

            $('#payment_paymentDate').text(paymentData.paymentDate);
            $('#payment_paymentAmount').text(paymentData.amount);
            $('#payment_paymentMethod').text(paymentData.paymentMethod);
            $('#payment_last5AccountNo').text(paymentData.last5AccountNo);

            $('#payment_type').text(paymentData.type);
            $('#payment_placeOrPrint').text(paymentData.placeOrPrint);
            $('#payment_downloadRemittanceFile').text(paymentData.remittanceFile);

            $('#payment_receiptDate').text(paymentData.receiptDate);
            $('#payment_receiptAmount').text(paymentData.receiptAmount);
            $('#payment_receiptItems').text(paymentData.receiptItems);
            $('#payment_receiptNum').text(paymentData.receiptNum);

            $('#payment_status').text(paymentData.status);
            $('#payment_adminNote').text(paymentData.adminNote);

        } else {
            console.error('paymentData data not found for id:', paymentId);
        };
        if (paymentData.status === "完成" || paymentData.status === "取消") {
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote').removeClass("changeInput_items");
            $('#payment_paymentDate, #payment_receiptDate').removeClass("changeDate_items");
            $('#payment_paymentAmount, #payment_receiptAmount').removeClass("changeMoney_items");
            $('#payment_paymentPurpose').removeClass("changeSelectPaymentPurpose_items");
            $('#payment_paymentMethod').removeClass("changeRadioPayMethod_items");
            $('#payment_last5AccountNo').removeClass("changeNumber5_items");
            $('#payment_type').removeClass("changeSelectPurchase_items");
            $('#payment_status').removeClass("changeSelectStatus_items");
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote, #payment_paymentDate, #payment_receiptDate, #payment_paymentAmount, #payment_receiptAmount, #payment_paymentPurpose, #payment_paymentMethod, #payment_last5AccountNo, #payment_type, #payment_status').addClass("readOnly");
            $('#payment_updateBtn').hide();
            // $('#statusText').show().text(paymentData.status);
        } else {
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote').addClass("changeInput_items");
            $('#payment_paymentDate, #payment_receiptDate').addClass("changeDate_items");
            $('#payment_paymentAmount, #payment_receiptAmount').addClass("changeMoney_items");
            $('#payment_paymentPurpose').addClass("changeSelectPaymentPurpose_items");
            $('#payment_paymentMethod').addClass("changeRadioPayMethod_items");
            $('#payment_last5AccountNo').addClass("changeNumber5_items");
            $('#payment_type').addClass("changeSelectPurchase_items");
            $('#payment_status').addClass("changeSelectStatus_items");
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote, #payment_paymentDate, #payment_receiptDate, #payment_paymentAmount, #payment_receiptAmount, #payment_paymentPurpose, #payment_paymentMethod, #payment_last5AccountNo, #payment_type, #payment_status').removeClass("readOnly");
            CustomInputHandlers.init();
            $('#payment_updateBtn').show();
            // $('#statusText').hide();
        }

        $('#payment_updateBtn').on('click', function () {
            // 確認當前的 paymentId
            console.log('當前的 paymentId:', paymentId);

            // 清除上次的資料，重新定義變量
            var payment_updatedData = {};

            // 獲取所有欄位的目前值
            payment_updatedData.id = paymentId;
            payment_updatedData.companyName = $('#payment_companyName').text();
            payment_updatedData.uniformNum = $('#payment_uniformNum').text();
            payment_updatedData.paymentPurpose = $('#payment_paymentPurpose').text();

            payment_updatedData.companyEmail = $('#payment_companyEmail').text();
            payment_updatedData.contactPerson = $('#payment_contactPerson').text();
            payment_updatedData.companyPhone = $('#payment_companyPhone').text();

            payment_updatedData.paymentDate = $('#payment_paymentDate').text();
            payment_updatedData.amount = $('#payment_paymentAmount').text();
            payment_updatedData.paymentMethod = $('#payment_paymentMethod').text();
            payment_updatedData.last5AccountNo = $('#payment_last5AccountNo').text();

            payment_updatedData.type = $('#payment_type').text();
            payment_updatedData.placeOrPrint = $('#payment_placeOrPrint').text();
            payment_updatedData.remittanceFile = $('#payment_downloadRemittanceFile').text();

            payment_updatedData.receiptDate = $('#payment_receiptDate').text();
            payment_updatedData.receiptAmount = $('#payment_receiptAmount').text();
            payment_updatedData.receiptItems = $('#payment_receiptItems').text();
            payment_updatedData.receiptNum = $('#payment_receiptNum').text();

            payment_updatedData.status = $('#payment_status').text();
            payment_updatedData.adminNote = $('#payment_adminNote').text();

            // 檢查是否為完成狀態，且收據資料是否完整
            if (payment_updatedData.status != '完成') {
                console.log(payment_updatedData);
                // 將更新的資料送到後端
                $.ajax({
                    url: '您的後端URL', // 替換成您的後端接收更新請求的URL
                    type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
                    contentType: 'application/json',
                    data: JSON.stringify(payment_updatedData),
                    success: function (response) {
                        // 處理成功回應
                        console.log('更新成功:', response);
                        // 根據需要執行其他操作，例如顯示成功訊息
                    },
                    error: function (xhr, status, error) {
                        // 處理錯誤情況
                        console.error('更新失敗:', error);
                        // 根據需要顯示錯誤訊息或執行其他操作
                    }
                });

            } else {
                if (!payment_updatedData.receiptDate || !payment_updatedData.receiptAmount || !payment_updatedData.receiptItems || !payment_updatedData.receiptNum) {
                    $('#danger_paymentBox').text('請填上完整的收據資料，才可以記為『完成』歐！');
                    return; // 如果有任一收據資料未填寫，返回，不再繼續
                } else {
                    console.log(payment_updatedData);
                    $.ajax({
                        url: '後端URL', // 替換成您的後端接收更新請求的URL
                        type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
                        contentType: 'application/json',
                        data: JSON.stringify(payment_updatedData),
                        success: function (response) {
                            // 處理成功回應
                            console.log('更新成功:', response);
                            // 根據需要執行其他操作，例如顯示成功訊息
                        },
                        error: function (xhr, status, error) {
                            // 處理錯誤情況
                            console.error('更新失敗:', error);
                            // 根據需要顯示錯誤訊息或執行其他操作
                        }
                    });
                }
            }



        });



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

$(function () {
    // 建議輸入
    $('#typeahead_company').typeahead({
        source: companyData
    });

    function updateTypeahead() {
        var selectedType = $('#type').val();
        var sourceData;

        switch (selectedType) {
            case '識別證':
                sourceData = idCardData;
                break;
            case '機車位':
                sourceData = parkingSpaceMotoData;
                break;
            case '汽車位':
                sourceData = parkingSpaceCarData;
                break;
            case '培育室':
                sourceData = roomData;
                break;
        }
        $('#typeahead_itemNum').typeahead('destroy'); // 清除之前的 typeahead 事件
        $('#typeahead_itemNum').typeahead({
            source: sourceData
        });
    }

    $('#type').change(updateTypeahead);
    updateTypeahead(); // 初始化

});
