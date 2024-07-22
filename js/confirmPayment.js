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
        'roomId': '10',
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
        'roomId': '11',
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
        'roomId': '12',
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
        'roomId': '13',
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
        'roomId': '14',
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
        'roomId': '15',
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
        'roomId': '16',
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
        'roomId': '17',
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
        'roomId': '18',
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
        'roomId': '19',
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

// 生成10筆資料物件 dataset_confirmPaymentParkingSpace，不要函式
// id是將車位配置給廠商的資料id，由1開始
// psId是將可使用的車位資料id，由11開始
// building是停車位所在的大樓名稱，可能為[新德惠大樓,校本部]。
// carType是停車位類型，可能為[汽車,機車]。
// parkingSpaceNum是停車位號碼，若building是校本部，parkingSpaceNum格式為數字2字元；若building是新德惠大樓，parkingSpaceNum格式為'B'+數字1或2+'-'+數字2字元。

// startDate是使用停車位的第一天，格式為YYYY-mm-DD。
// endDate是使用停車位的最後一天，格式為YYYY-mm-DD，值會是startDate往後[一年,半年,3個月]。
// amount 是每月服務費用，若carType是"機車"，amount的值為100；若carType是"汽車"，amount的值為3000或是2500，要有千分位符號。

// 若startDate沒有值，company、uniformNum、responsiblePerson、companyEmail、contactPerson、companyPhone都沒有值。

// licensePlateNum 是假的車牌號碼，若carType是"機車"，licensePlateNum的格式為數字1字元+大寫英文2字元+'-'+數字3字元；若carType是"汽車"，licensePlateNum的格式為數字4字元+'-'大寫英文2字元。
// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// applicant是假的申請人人名。
// email是假的申請人電子郵件信箱。
// phone是假的申請人電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。

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

var dataset_confirmPaymentParkingSpace = [
    {
        'id': '1',
        'psId': '11',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B1-01',
        'startDate': '2024-07-01',
        'endDate': '2025-06-30',
        'amount': '3,000',
        'licensePlateNum': '1234-AB',
        'company': '偉大企業有限公司',
        'uniformNum': '12345678',
        'applicant': '張偉',
        'email': 'wei@awesome.com',
        'phone': '02-86711234',

        'deadline1': '2024-10-01',
        'deadline2': '2025-01-01',
        'deadline3': '2025-04-01',
        'deadline4': '2025-06-20',

        'receiptNum1': 'RM123456',
        'receiptNum2': 'RM234567',
        'receiptNum3': 'RM345678',
        'receiptNum4': 'RM456789',

        'receivedDate1': '2024-09-28',
        'receivedDate2': '2024-12-28',
        'receivedDate3': '2025-03-28',
        'receivedDate4': '2025-06-17',

        'adminNote': '',
    },
    {
        'id': '2',
        'psId': '12',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '05',
        'startDate': '2024-08-01',
        'endDate': '2025-01-31',
        'amount': '100',
        'licensePlateNum': '1AA-123',
        'company': '頂尖科技股份有限公司',
        'uniformNum': '23456789',
        'applicant': '李頂',
        'email': 'ting@toptech.com',
        'phone': '0912-345678',

        'deadline1': '2024-11-01',
        'deadline2': '2025-01-21',
        'deadline3': '2025-02-01',
        'deadline4': '',

        'receiptNum1': 'RM567890',
        'receiptNum2': 'RM678901',
        'receiptNum3': '',
        'receiptNum4': '',

        'receivedDate1': '2024-10-29',
        'receivedDate2': '2025-01-18',
        'receivedDate3': '',
        'receivedDate4': '',

        'adminNote': '',
    },
    {
        'id': '3',
        'psId': '13',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B2-12',
        'startDate': '2024-09-01',
        'endDate': '2025-02-28',
        'amount': '2,500',
        'licensePlateNum': '5678-CD',
        'company': '創意股份有限公司',
        'uniformNum': '34567890',
        'applicant': '林創',
        'email': 'chuang@creative.com',
        'phone': '02-86719876',

        'deadline1': '2024-12-01',
        'deadline2': '2025-02-18',
        'deadline3': '2025-03-01',
        'deadline4': '',

        'receiptNum1': 'RM789012',
        'receiptNum2': 'RM890123',
        'receiptNum3': '',
        'receiptNum4': '',

        'receivedDate1': '2024-11-28',
        'receivedDate2': '2025-02-15',
        'receivedDate3': '',
        'receivedDate4': '',

        'adminNote': '',
    },
    {
        'id': '4',
        'psId': '14',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '12',
        'startDate': '2024-07-15',
        'endDate': '2025-07-14',
        'amount': '100',
        'licensePlateNum': '2BB-456',
        'company': '華麗有限公司',
        'uniformNum': '45678901',
        'applicant': '周華',
        'email': 'hua@glamorous.com',
        'phone': '0912-876543',

        'deadline1': '2024-10-15',
        'deadline2': '2025-01-15',
        'deadline3': '2025-04-15',
        'deadline4': '2025-07-04',

        'receiptNum1': 'RM890124',
        'receiptNum2': 'RM901235',
        'receiptNum3': 'RM012346',
        'receiptNum4': 'RM123457',

        'receivedDate1': '2024-10-12',
        'receivedDate2': '2025-01-12',
        'receivedDate3': '2025-04-12',
        'receivedDate4': '2025-07-01',

        'adminNote': '',
    },
    {
        'id': '5',
        'psId': '15',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B3-03',
        'startDate': '2024-08-01',
        'endDate': '2025-07-31',
        'amount': '2,500',
        'licensePlateNum': '2345-EF',
        'company': '豪華國際股份有限公司',
        'uniformNum': '56789012',
        'applicant': '陳豪',
        'email': 'hao@luxury.com',
        'phone': '02-86713456',

        'deadline1': '2024-11-01',
        'deadline2': '2025-02-01',
        'deadline3': '2025-05-01',
        'deadline4': '2025-07-21',

        'receiptNum1': 'RM234568',
        'receiptNum2': 'RM345679',
        'receiptNum3': 'RM456780',
        'receiptNum4': 'RM567891',

        'receivedDate1': '2024-10-29',
        'receivedDate2': '2025-01-29',
        'receivedDate3': '2025-04-29',
        'receivedDate4': '2025-07-18',

        'adminNote': '',
    },
    {
        'id': '6',
        'psId': '16',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '21',
        'startDate': '',
        'endDate': '',
        'amount': '100',
        'licensePlateNum': '3CC-789',
        'company': '',
        'uniformNum': '',
        'applicant': '',
        'email': '',
        'phone': '',

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

        'adminNote': '',
    },
    {
        'id': '7',
        'psId': '17',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B1-09',
        'startDate': '2024-09-01',
        'endDate': '2024-11-30',
        'amount': '3,000',
        'licensePlateNum': '6789-GH',
        'company': '高效能股份有限公司',
        'uniformNum': '67890123',
        'applicant': '劉效',
        'email': 'xiao@efficient.com',
        'phone': '02-86717890',

        'deadline1': '2024-12-01',
        'deadline2': '2025-03-01',
        'deadline3': '2024-11-20',
        'deadline4': '',

        'receiptNum1': 'RM678912',
        'receiptNum2': 'RM789023',
        'receiptNum3': '',
        'receiptNum4': '',

        'receivedDate1': '2024-11-28',
        'receivedDate2': '2024-11-17',
        'receivedDate3': '',
        'receivedDate4': '',

        'adminNote': '',
    },
    {
        'id': '8',
        'psId': '18',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '31',
        'startDate': '2024-07-01',
        'endDate': '2025-06-30',
        'amount': '100',
        'licensePlateNum': '4DD-123',
        'company': '先進科技有限公司',
        'uniformNum': '78901234',
        'applicant': '周先',
        'email': 'xian@advancedtech.com',
        'phone': '0912-987654',

        'deadline1': '2024-10-01',
        'deadline2': '2025-01-01',
        'deadline3': '2025-04-01',
        'deadline4': '2025-06-20',

        'receiptNum1': 'RM890125',
        'receiptNum2': 'RM901236',
        'receiptNum3': 'RM012347',
        'receiptNum4': 'RM123458',

        'receivedDate1': '2024-09-28',
        'receivedDate2': '2024-12-28',
        'receivedDate3': '2025-03-28',
        'receivedDate4': '2025-06-17',

        'adminNote': '',
    },
    {
        'id': '9',
        'psId': '19',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B4-15',
        'startDate': '2024-08-01',
        'endDate': '2025-07-31',
        'amount': '2,500',
        'licensePlateNum': '3456-IJ',
        'company': '精英國際股份有限公司',
        'uniformNum': '89012345',
        'applicant': '吳精',
        'email': 'jing@elite.com',
        'phone': '02-86712345',

        'deadline1': '2024-11-01',
        'deadline2': '2025-02-01',
        'deadline3': '2025-05-01',
        'deadline4': '2025-07-21',

        'receiptNum1': 'RM123459',
        'receiptNum2': 'RM234570',
        'receiptNum3': 'RM345681',
        'receiptNum4': 'RM456792',

        'receivedDate1': '2024-10-29',
        'receivedDate2': '2025-01-29',
        'receivedDate3': '2025-04-29',
        'receivedDate4': '2025-07-18',

        'adminNote': '',
    },
    {
        'id': '10',
        'psId': '20',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '44',
        'startDate': '2024-09-01',
        'endDate': '2024-11-30',
        'amount': '100',
        'licensePlateNum': '5EE-456',
        'company': '新創有限公司',
        'uniformNum': '90123456',
        'applicant': '蔡新',
        'email': 'xin@newstartup.com',
        'phone': '0912-876543',

        'deadline1': '2024-12-01',
        'deadline2': '2024-11-20',
        'deadline3': '',
        'deadline4': '',

        'receiptNum1': 'RM678913',
        'receiptNum2': 'RM789024',
        'receiptNum3': '',
        'receiptNum4': '',

        'receivedDate1': '2024-11-28',
        'receivedDate2': '2024-11-17',
        'receivedDate3': '',
        'receivedDate4': '',

        'adminNote': '',
    }
];



// 付款資訊-合格廠商
var companyData = [
    "超級棒股份有限公司",
    "大富翁科技有限公司",
    "迅捷物流股份有限公司",
    "綠能科技有限公司",
    "全球股份有限公司",
    "宇宙科技有限公司",
    "光速科技有限公司"
];
// 付款資訊-可用汽車位
var parkingSpaceCarData = [
    "B1-01",
    "B1-02",
    "B2-03",
    "B3-04",
    "B2-05",
    "B2-07",
    "B3-11"
];
// 付款資訊-可用機車位
var parkingSpaceMotoData = [
    "B1-21",
    "B1-22",
    "B2-23",
    "B3-24",
    "B2-25",
    "B2-26",
    "B3-27"
];
// 付款資訊-已發識別證
var idCardData = [
    "N000030",
    "N000051",
    "N000040",
    "N000089",
    "N000012",
    "N000060",
    "N000070"
];
// 付款資訊-該合格廠商所擁有的培育室(若辦不到就用開放的培育室吧)
var roomData = [
    "新德惠大樓/101",
    "綜合大樓/201",
    "挺生大樓/714",
    "實驗大樓/101",
    "北設工大樓/713",
    "綜合大樓/A4-102",
    "挺生大樓/809"
];
// 付款資訊-支付目的
var selectOptionPaymentPurpose = [
    { 'option': '新申請' },
    { 'option': '補發' },
    { 'option': '續約' },
    { 'option': '階段費用' },
];
// 付款詳情-可修改的項目類型
var selectOptionPurchase = [
    { 'option': '汽車位' },
    { 'option': '機車位' },
    { 'option': '識別證' },
    { 'option': '培育室' },
];
// 付款資訊-想購買的項目類型
var selectOptionStatus = [
    { 'option': '待確認' },
    { 'option': '完成' },
    { 'option': '取消' }, // 有付款但臨時取消
    { 'option': '刪除' }, // 錯誤輸入
];

$(function () {



    // 車位配置廠商-增加緊急日期
    dataset_confirmPaymentParkingSpace.forEach(item => {
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

    // 車位配置廠商-表格
    $('#confirmPaymentParkingSpaceList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentParkingSpace,
        "columns": [
            { data: 'building', title: '大樓' }, // 0
            // { data: 'carType', title: "類型", }, // 1
            { data: 'parkingSpaceNum', title: "車位號碼", }, // 1
            { data: 'amount', title: "費用", }, // 2
            {
                data: 'company', title: "承租公司", // 3
                render: function (data) {
                    if (data === null || data == '') {
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
                    const psId = row.psId;
                    if (!company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + psId + '_N" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + data + '" title="修改"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
            {
                data: 'id', title: "下期", // 9
                render: function (data, type, row) {
                    const company = row.company;
                    const psId = row.psId;
                    if (company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + psId + '_N" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
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
                targets: [2],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8, 9, 10] },
            { className: "text-lg-center", targets: [0, 4, 5, 6, 7] },
            { className: "text-center", targets: [0, 1] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6,] },
        ],

        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 1, 2, 4, 5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
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
                    const roomId = row.roomId;
                    if (!company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + roomId + '_N" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '" title="修改"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
            {
                data: 'id', title: "下期", // 9
                render: function (data, type, row) {
                    const company = row.company;
                    const roomId = row.roomId;
                    if (company) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + roomId + '_N" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
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
            { searchable: false, orderable: false, targets: [8, 9, 10] },
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
                    const status = row.status;
                    if (status == '完成' || status == '取消') {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '"><i class="fa-solid fa-receipt"></i>';
                    } else {
                        return '<button type="button" class="btn btn-info rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '" title="登記收據資訊"><i class="fa-solid fa-receipt"></i>';
                    }
                }, className: 'text-center text-nowrap'
            },
            { data: 'status', visible: false }, // 8 仍可搜尋
        ],
        "order": [[8, "desc"], [0, "desc"], [2, "desc"], [3, "desc"]],
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
            CustomInputHandlers.destroy();
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote').removeClass("changeInput_items");
            // console.log('Initial class:', $('#payment_placeOrPrint').attr('class'));
            $('#payment_paymentDate, #payment_receiptDate').removeClass("changeDate_items");
            $('#payment_paymentAmount, #payment_receiptAmount').removeClass("changeMoney_items");
            $('#payment_paymentPurpose').removeClass("changeSelectPaymentPurpose_items");
            $('#payment_paymentMethod').removeClass("changeRadioPayMethod_items");
            $('#payment_last5AccountNo').removeClass("changeNumber5_items");
            $('#payment_type').removeClass("changeSelectPurchase_items");
            $('#payment_status').removeClass("changeSelectStatus_items");
            $('#payment_placeOrPrint, #payment_receiptItems, #payment_receiptNum, #payment_adminNote, #payment_paymentDate, #payment_receiptDate, #payment_paymentAmount, #payment_receiptAmount, #payment_paymentPurpose, #payment_paymentMethod, #payment_last5AccountNo, #payment_type, #payment_status').addClass("readOnly");
            $('#payment_updateBtn').hide();
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

    // 同步培育室已配置 / 新配置燈箱 顯示資料
    $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
        $('#cultivation_receiptNum1, #cultivation_receiptNum2, #cultivation_receiptNum3, #cultivation_receiptNum4, #cultivation_adminNote').addClass("changeInput_items");
        $('#cultivation_startDate, #cultivation_endDate, #cultivation_deadline1, #cultivation_deadline2, #cultivation_deadline3, #cultivation_deadline4').addClass("changeDate_items");
        $('#cultivation_rate').addClass("changeMoney_items");
        $('#cultivation_uniformNum').addClass("changeUniformNum_items");
        $('#cultivation_squareMeters').addClass("changeDecimal_items");
        CustomInputHandlers.init();

        let button = $(event.relatedTarget);
        let roomThisId = String(button.data('id'));
        console.log('roomId 1 :', roomThisId); // 確認 roomId 是否正確獲取

        if (!roomThisId.endsWith('_N')) { // 表示為已配置的紀錄id
            let openRoomData = dataset_confirmPaymentCultivationRoom.find(thisData => thisData.id === roomThisId);
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
        } else { // 表示為尚未配置的培育室id
            // 去除最後兩個字元，然後使用新的 roomId 進行查找
            roomId_N = roomThisId.slice(0, -2);
            let openRoomData = dataset_confirmPaymentCultivationRoom.find(room => room.roomId === roomId_N);
            if (openRoomData) {
                $('#cultivation_deleteData').addClass('d-none');

                $('#cultivation_building').text(openRoomData.building);
                $('#cultivation_room').text(openRoomData.room);
                $('#cultivation_squareMeters').text(openRoomData.squareMeters);

                $('#cultivation_startDate').text('');
                $('#cultivation_endDate').text('');
                $('#cultivation_rate').text(openRoomData.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。

                $('#cultivation_companyName').text('');
                $('#cultivation_uniformNum').text('');
                $('#cultivation_responsiblePerson').text('');

                $('#cultivation_companyEmail').text('');
                $('#cultivation_contactPerson').text('');
                $('#cultivation_companyPhone').text('');

                $('#cultivation_deadline1').text('');
                $('#cultivation_deadline2').text('');
                $('#cultivation_deadline3').text('');
                $('#cultivation_deadline4').text('');

                $('#cultivation_receiptNum1').text('');
                $('#cultivation_receiptNum2').text('');
                $('#cultivation_receiptNum3').text('');
                $('#cultivation_receiptNum4').text('');

                $('#cultivation_receivedDate1').text('');
                $('#cultivation_receivedDate2').text('');
                $('#cultivation_receivedDate3').text('');
                $('#cultivation_receivedDate4').text('');

                $('#cultivation_adminNote').text('');

            } else {
                console.error('openRoomData data not found for id:', roomId_N);
            }
        }

        $('#cultivation_updateBtn').off('click');
        $('#cultivation_updateBtn').on('click', function () {
            console.log('roomId 2 :', roomThisId); // 確認 roomId 是否正確獲取
            // 清除上次的資料
            updatedData = {};
            // 獲取所有欄位的目前值
            updatedData.id = roomThisId; // 後端再依照id是否有_N判斷為要修改原紀錄還是新增一筆配置紀錄
            updatedData.contactPerson = $('#cultivation_squareMeters').text();

            updatedData.startDate = $('#cultivation_startDate').text();
            updatedData.endDate = $('#cultivation_endDate').text();
            updatedData.amount = $('#cultivation_rate').text();

            updatedData.uniformNum = $('#cultivation_uniformNum').text();

            updatedData.deadline1 = $('#cultivation_deadline1').text();
            updatedData.deadline2 = $('#cultivation_deadline2').text();
            updatedData.deadline3 = $('#cultivation_deadline3').text();
            updatedData.deadline4 = $('#cultivation_deadline4').text();

            updatedData.receiptNum1 = $('#cultivation_receiptNum1').text();
            updatedData.receiptNum2 = $('#cultivation_receiptNum2').text();
            updatedData.receiptNum3 = $('#cultivation_receiptNum3').text();
            updatedData.receiptNum4 = $('#cultivation_receiptNum4').text();

            updatedData.adminNote = $('#cultivation_adminNote').text();

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
            deleteData.id = roomThisId;
            swalConfirm(
                '確定要刪除嗎？',
                '是啊，這個沒用了...',
                '不要阿 ~ 我是誤按！！',
                function () {
                    // YES按鈕點擊後傳遞deleteData id至後端
                    console.log(deleteData);
                })
        });

    });

    // 同步停車位已配置 / 新配置燈箱 顯示資料
    $('#confirmPaymentParkingSpaceModel').on('show.bs.modal', function (event) {
        $('#parkingSapce_receiptNum1, #parkingSapce_receiptNum2, #parkingSapce_receiptNum3, #parkingSapce_receiptNum4, #parkingSapce_adminNote').addClass("changeInput_items");
        $('#parkingSapce_startDate, #parkingSapce_endDate, #parkingSapce_deadline1, #parkingSapce_deadline2, #parkingSapce_deadline3, #parkingSapce_deadline4').addClass("changeDate_items");
        $('#parkingSapce_rate').addClass("changeMoney_items");
        $('#parkingSapce_licensePlateNum').addClass("changeInputUpperNumberHyphen_items");
        CustomInputHandlers.init();

        let button = $(event.relatedTarget);
        let psThisId = String(button.data('id'));
        console.log('parkingSpaceId 1 :', psThisId); // 確認 roomId 是否正確獲取

        if (!psThisId.endsWith('_N')) { // 表示為已配置的紀錄id
            let openRoomData = dataset_confirmPaymentParkingSpace.find(thisData => thisData.id === psThisId);
            if (openRoomData) {
                $('#parkingSapce_deleteData').removeClass('d-none');

                $('#parkingSapce_building').text(openRoomData.building);
                $('#parkingSapce_parkingSpaceNum').text(openRoomData.parkingSpaceNum);
                $('#parkingSapce_carType').text(openRoomData.carType);

                $('#parkingSapce_startDate').text(openRoomData.startDate);
                $('#parkingSapce_endDate').text(openRoomData.endDate);
                $('#parkingSapce_rate').text(openRoomData.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。

                $('#parkingSapce_companyName').text(openRoomData.company);
                $('#parkingSapce_uniformNum').text(openRoomData.uniformNum);
                $('#parkingSapce_licensePlateNum').text(openRoomData.licensePlateNum);

                $('#parkingSapce_email').text(openRoomData.email);
                $('#parkingSapce_phone').text(openRoomData.phone);
                $('#parkingSapce_applicant').text(openRoomData.applicant);

                $('#parkingSapce_deadline1').text(openRoomData.deadline1);
                $('#parkingSapce_deadline2').text(openRoomData.deadline2);
                $('#parkingSapce_deadline3').text(openRoomData.deadline3);
                $('#parkingSapce_deadline4').text(openRoomData.deadline4);

                $('#parkingSapce_receiptNum1').text(openRoomData.receiptNum1);
                $('#parkingSapce_receiptNum2').text(openRoomData.receiptNum2);
                $('#parkingSapce_receiptNum3').text(openRoomData.receiptNum3);
                $('#parkingSapce_receiptNum4').text(openRoomData.receiptNum4);

                $('#parkingSapce_receivedDate1').text(openRoomData.receivedDate1);
                $('#parkingSapce_receivedDate2').text(openRoomData.receivedDate2);
                $('#parkingSapce_receivedDate3').text(openRoomData.receivedDate3);
                $('#parkingSapce_receivedDate4').text(openRoomData.receivedDate4);

                $('#parkingSapce_adminNote').text(openRoomData.adminNote);
            } else {
                console.error('openRoomData data not found for id:', roomId);
            }
        } else { // 表示為尚未配置的培育室id
            // 去除最後兩個字元，然後使用新的 roomId 進行查找
            psId_N = psThisId.slice(0, -2);
            let openRoomData = dataset_confirmPaymentParkingSpace.find(parkingSpace => parkingSpace.psId === psId_N);
            if (openRoomData) {
                $('#parkingSapce_deleteData').addClass('d-none');

                $('#parkingSapce_building').text(openRoomData.building);
                $('#parkingSapce_parkingSpaceNum').text(openRoomData.parkingSpaceNum);
                $('#parkingSapce_carType').text(openRoomData.carType);

                $('#parkingSapce_startDate').text('');
                $('#parkingSapce_endDate').text('');
                $('#parkingSapce_rate').text(openRoomData.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。

                $('#parkingSapce_companyName').text('');
                $('#parkingSapce_uniformNum').text('');
                $('#parkingSapce_licensePlateNum').text('');

                $('#parkingSapce_email').text('');
                $('#parkingSapce_phone').text('');
                $('#parkingSapce_applicant').text('');

                $('#parkingSapce_deadline1').text('');
                $('#parkingSapce_deadline2').text('');
                $('#parkingSapce_deadline3').text('');
                $('#parkingSapce_deadline4').text('');

                $('#parkingSapce_receiptNum1').text('');
                $('#parkingSapce_receiptNum2').text('');
                $('#parkingSapce_receiptNum3').text('');
                $('#parkingSapce_receiptNum4').text('');

                $('#parkingSapce_receivedDate1').text('');
                $('#parkingSapce_receivedDate2').text('');
                $('#parkingSapce_receivedDate3').text('');
                $('#parkingSapce_receivedDate4').text('');

                $('#parkingSapce_adminNote').text('');

            } else {
                console.error('openRoomData data not found for id:', psId_N);
            }
        }

        $('#parkingSapce_updateBtn').off('click');
        $('#parkingSapce_updateBtn').on('click', function () {
            console.log('psId 2 :', psThisId); // 確認 roomId 是否正確獲取
            // 清除上次的資料
            updatedData = {};
            // 獲取所有欄位的目前值
            updatedData.id = psThisId; // 後端再依照id是否有_N判斷為要修改原紀錄還是新增一筆配置紀錄
            updatedData.contactPerson = $('#cultivation_squareMeters').text();

            updatedData.startDate = $('#parkingSapce_startDate').text();
            updatedData.endDate = $('#parkingSapce_endDate').text();
            updatedData.amount = $('#parkingSapce_rate').text();

            updatedData.licensePlateNum = $('#parkingSapce_licensePlateNum').text();

            updatedData.deadline1 = $('#parkingSapce_deadline1').text();
            updatedData.deadline2 = $('#parkingSapce_deadline2').text();
            updatedData.deadline3 = $('#parkingSapce_deadline3').text();
            updatedData.deadline4 = $('#parkingSapce_deadline4').text();

            updatedData.receiptNum1 = $('#parkingSapce_receiptNum1').text();
            updatedData.receiptNum2 = $('#parkingSapce_receiptNum2').text();
            updatedData.receiptNum3 = $('#parkingSapce_receiptNum3').text();
            updatedData.receiptNum4 = $('#parkingSapce_receiptNum4').text();

            updatedData.adminNote = $('#parkingSapce_adminNote').text();

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
        $('#parkingSapce_deleteData').off('click');
        $('#parkingSapce_deleteData').on('click', function () {

            // 清除上次的資料
            deleteData = {};
            // 獲取所有欄位的目前值
            deleteData.id = psThisId;
            swalConfirm(
                '確定要刪除嗎？',
                '是啊，這個沒用了...',
                '不要阿 ~ 我是誤按！！',
                function () {
                    // YES按鈕點擊後傳遞deleteData id至後端
                    console.log(deleteData);
                })
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
