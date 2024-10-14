// 收據data done
var dataset_confirmPaymentReceipt = [
    {
        'id': 'R1',
        'createDate': '2024-08-01',
        'receiptNum': 'AE123456',
        'receiptDate': '2024-08-02',
        'item': '服務費',
        'amount': '35,000',
        'company': '頂尖科技有限公司',
        'uniformNum': '12345678',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王小明',
    },
    {
        'id': 'R2',
        'createDate': '2024-08-03',
        'receiptNum': 'AE234567',
        'receiptDate': '2024-08-04',
        'item': '場地維護費',
        'amount': '2,500',
        'company': '創新股份有限公司',
        'uniformNum': '23456789',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王二明',
    },
    {
        'id': 'R3',
        'createDate': '2024-08-05',
        'receiptNum': 'AE345678',
        'receiptDate': '2024-08-06',
        'item': '服務費',
        'amount': '50,000',
        'company': '宏達有限公司',
        'uniformNum': '34567890',
        'adminNote': '',
        'status': '作廢收回',
        'createBy': '王三明',
    },
    {
        'id': 'R4',
        'createDate': '2024-08-07',
        'receiptNum': 'AE456789',
        'receiptDate': '2024-08-08',
        'item': '場地維護費',
        'amount': '15,000',
        'company': '光明股份有限公司',
        'uniformNum': '45678901',
        'adminNote': '',
        'status': '作廢收回',
        'createBy': '王小明',
    },
    {
        'id': 'R5',
        'createDate': '2024-08-09',
        'receiptNum': 'AE567890',
        'receiptDate': '2024-08-10',
        'item': '服務費',
        'amount': '40,000',
        'company': '威士達有限公司',
        'uniformNum': '56789012',
        'adminNote': '',
        'status': '作廢收回',
        'createBy': '王四明',
    },
    {
        'id': 'R6',
        'createDate': '2024-08-11',
        'receiptNum': 'AE678901',
        'receiptDate': '2024-08-12',
        'item': '場地維護費',
        'amount': '12,000',
        'company': '佳利科技有限公司',
        'uniformNum': '67890123',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王小明',
    },
    {
        'id': 'R7',
        'createDate': '2024-08-13',
        'receiptNum': 'AE789012',
        'receiptDate': '2024-08-14',
        'item': '服務費',
        'amount': '5,000',
        'company': '世紀股份有限公司',
        'uniformNum': '78901234',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王五明',
    },
    {
        'id': 'R8',
        'createDate': '2024-08-15',
        'receiptNum': 'AE890123',
        'receiptDate': '2024-08-16',
        'item': '場地維護費',
        'amount': '25,000',
        'company': '聯合股份有限公司',
        'uniformNum': '89012345',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王小明',
    },
    {
        'id': 'R9',
        'createDate': '2024-08-17',
        'receiptNum': 'AE901234',
        'receiptDate': '2024-08-18',
        'item': '服務費',
        'amount': '10,000',
        'company': '智遠有限公司',
        'uniformNum': '90123456',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王小明',
    },
    {
        'id': 'R10',
        'createDate': '2024-08-19',
        'receiptNum': 'AE012345',
        'receiptDate': '2024-08-20',
        'item': '場地維護費',
        'amount': '18,000',
        'company': '遠見科技有限公司',
        'uniformNum': '01234567',
        'adminNote': '',
        'status': '使用中',
        'createBy': '王六明',
    }
];
// 匯款data done
var dataset_confirmPaymentAll = [
    {
        'id': '1',
        'createDate': '2024-07-15',
        'paymentDate': '2024-07-13',
        'adminNote': '',
        'status': '待確認',
        'company': '超級棒股份有限公司',
        'uniformNum': '12345678',
        'amount': '2,500',
        'last5AccountNo': '01234',
        'remittanceFile': '20240713_MD231.pdf',
        'companyEmail': 'contact@supercompany.com',
        'contactPerson': '王大明',
        'companyPhone': '02-86710001',
        'items': [
            { id: 'CP1', type: '階段付款', description: '培育室(挺生大樓-202)', amount: '20,000元' },
            { id: 'CP2', type: '階段付款', description: '停車位(校本部-01)', amount: '2,000元' },
            { id: 'CA1', type: '新申請', description: '停車位(ABC-119)', amount: '費用待確認' },
            { id: 'BA1', type: '新申請', description: '識別證(王小明)', amount: '100元' },
            { id: 'BA2', type: '遺失補發', description: '識別證(王小明)', amount: '300元' }
        ],
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
// 培育室data done
var dataset_confirmPaymentCultivationRoom = [
    {
        'roomId': '10',
        'building': '新德惠大樓',
        'room': '101',
        'defaultSquareMeters': '15.4',
        'defaultAmount': '40,000',
        'recentMaturityDate': '2024-07-29',
        'now': {
            'id': '1',
            'squareMeters': '15.4',
            'amount': '40,000',
            'startDate': '2024-08-01',
            'endDate': '2025-07-31',
            'period': '4',
            'company': '超級棒股份有限公司',
            'uniformNum': '12345678',
            'responsiblePerson': '王大明',
            'companyEmail': 'contact@supercompany.com',
            'companyPhone': '02-86710001',
            'contactPerson': '張偉',
            'deadline1': '2024-07-29',
            'deadline2': '2025-02-01',
            'deadline3': '2025-05-01',
            'deadline4': '2025-07-21',
            'receivableAmount1': '36,000',
            'receivableAmount2': '38,000',
            'receivableAmount3': '42,000',
            'receivableAmount4': '44,000',
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
        'next': {
            'id': '',
            'squareMeters': '15.4',
            'amount': '40,000',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'responsiblePerson': '',
            'companyEmail': '',
            'companyPhone': '',
            'contactPerson': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }
    },
    // {
    //     'id': '2',
    //     'roomId': '11',
    //     'building': '綜合大樓',
    //     'room': '104',
    //     'squareMeters': '20.5',
    //     'startDate': '2023-09-01',
    //     'endDate': '2024-08-31',
    //     'amount': '50,000',
    //     'company': '大富翁科技有限公司',
    //     'uniformNum': '87654321',
    //     'responsiblePerson': '李四',
    //     'companyEmail': 'contact@bigmonopoly.com',
    //     'contactPerson': '林小華',
    //     'companyPhone': '0912-345678',
    //     'deadline1': '2023-12-01',
    //     'deadline2': '2024-03-01',
    //     'deadline3': '2024-06-01',
    //     'deadline4': '2024-08-21',
    //     'receiptNum1': 'RM000127',
    //     'receiptNum2': 'RM000145',
    //     'receiptNum3': 'RM000151',
    //     'receiptNum4': '',
    //     'receivedDate1': '2024-11-29',
    //     'receivedDate2': '2024-02-27',
    //     'receivedDate3': '2024-05-30',
    //     'receivedDate4': '',
    //     'adminNote': ''
    // },
    // {
    //     'id': '3',
    //     'roomId': '12',
    //     'building': '挺生大樓',
    //     'room': '105',
    //     'squareMeters': '18.7',
    //     'startDate': '2024-10-01',
    //     'endDate': '2025-09-30',
    //     'amount': '45,000',
    //     'company': '迅捷物流股份有限公司',
    //     'uniformNum': '23456789',
    //     'responsiblePerson': '陳小華',
    //     'companyEmail': 'contact@swiftlogistics.com',
    //     'contactPerson': '林大明',
    //     'companyPhone': '02-86710002',
    //     'deadline1': '2025-04-01',
    //     'deadline2': '2025-09-25',
    //     'deadline3': '',
    //     'deadline4': '',
    //     'receiptNum1': '',
    //     'receiptNum2': '',
    //     'receiptNum3': '',
    //     'receiptNum4': '',
    //     'receivedDate1': '',
    //     'receivedDate2': '',
    //     'receivedDate3': '',
    //     'receivedDate4': '',
    //     'adminNote': ''
    // },
    // {
    //     'id': '4',
    //     'roomId': '13',
    //     'building': '實驗大樓',
    //     'room': '106',
    //     'squareMeters': '25.3',
    //     'startDate': '2023-07-01',
    //     'endDate': '2024-06-30',
    //     'amount': '55,000',
    //     'company': '綠能科技有限公司',
    //     'uniformNum': '34567890',
    //     'responsiblePerson': '林小強',
    //     'companyEmail': 'contact@greenenergy.com',
    //     'contactPerson': '張雅婷',
    //     'companyPhone': '02-86710003',
    //     'deadline1': '2023-10-01',
    //     'deadline2': '2024-01-01',
    //     'deadline3': '2024-04-01',
    //     'deadline4': '2024-06-20',
    //     'receiptNum1': 'RM000135',
    //     'receiptNum2': 'RM000136',
    //     'receiptNum3': 'RM000137',
    //     'receiptNum4': 'RM000138',
    //     'receivedDate1': '2023-09-29',
    //     'receivedDate2': '2023-12-30',
    //     'receivedDate3': '2024-03-29',
    //     'receivedDate4': '2024-06-18',
    //     'adminNote': ''
    // },
    // {
    //     'id': '5',
    //     'roomId': '14',
    //     'building': '北設工大樓',
    //     'room': '201',
    //     'squareMeters': '30.9',
    //     'startDate': '2024-08-15',
    //     'endDate': '2025-08-14',
    //     'amount': '70,000',
    //     'company': '全球股份有限公司',
    //     'uniformNum': '45678901',
    //     'responsiblePerson': '張偉',
    //     'companyEmail': 'contact@globalinc.com',
    //     'contactPerson': '王志豪',
    //     'companyPhone': '0912-345679',
    //     'deadline1': '2024-12-15',
    //     'deadline2': '2025-04-15',
    //     'deadline3': '2025-08-04',
    //     'deadline4': '',
    //     'receiptNum1': '',
    //     'receiptNum2': '',
    //     'receiptNum3': '',
    //     'receiptNum4': '',
    //     'receivedDate1': '',
    //     'receivedDate2': '',
    //     'receivedDate3': '',
    //     'receivedDate4': '',
    //     'adminNote': ''
    // },
    // {
    //     'id': '6',
    //     'roomId': '15',
    //     'building': '尚志大樓',
    //     'room': '202',
    //     'squareMeters': '27.8',
    //     'startDate': '2023-09-15',
    //     'endDate': '2024-09-14',
    //     'amount': '65,000',
    //     'company': '宇宙科技有限公司',
    //     'uniformNum': '56789012',
    //     'responsiblePerson': '劉明',
    //     'companyEmail': 'contact@universe.com',
    //     'contactPerson': '李小明',
    //     'companyPhone': '02-86710004',
    //     'deadline1': '2023-12-15',
    //     'deadline2': '2024-03-15',
    //     'deadline3': '2024-06-15',
    //     'deadline4': '2024-09-04',
    //     'receiptNum1': 'RM000143',
    //     'receiptNum2': 'RM000144',
    //     'receiptNum3': 'RM000145',
    //     'receiptNum4': 'RM000146',
    //     'receivedDate1': '2023-12-13',
    //     'receivedDate2': '2024-03-13',
    //     'receivedDate3': '2024-06-13',
    //     'receivedDate4': '',
    //     'adminNote': ''
    // },
    {
        'roomId': '16',
        'building': '新德惠大樓',
        'room': 'A4-102',
        'defaultSquareMeters': '16.4',
        'defaultAmount': '35,000',
        'recentMaturityDate': '9999-99-99',
        'now': {
            'id': '',
            'squareMeters': '16.4',
            'amount': '35,000',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'responsiblePerson': '',
            'companyEmail': '',
            'companyPhone': '',
            'contactPerson': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
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
        'next': {
            'id': '',
            'squareMeters': '16.4',
            'amount': '35,000',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'responsiblePerson': '',
            'companyEmail': '',
            'companyPhone': '',
            'contactPerson': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }
    },
    {
        'id': '8',
        'roomId': '17',
        'building': '綜合大樓',
        'room': 'A4-103',
        'defaultSquareMeters': '22.3',
        'defaultAmount': '55,000',
        'recentMaturityDate': '2024-08-01',
        'now': {
            'id': '4',
            'squareMeters': '22.3',
            'amount': '55,000',
            'startDate': '2023-11-01',
            'endDate': '2024-10-31',
            'period': '4',
            'company': '光速科技有限公司',
            'uniformNum': '67890123',
            'responsiblePerson': '黃家豪',
            'companyEmail': 'contact@lightspeed.com',
            'companyPhone': '0912-345670',
            'contactPerson': '林小明',
            'deadline1': '2024-02-01',
            'deadline2': '2024-05-01',
            'deadline3': '2024-08-01',
            'deadline4': '2024-10-21',
            'receivableAmount1': '51,000',
            'receivableAmount2': '53,000',
            'receivableAmount3': '57,000',
            'receivableAmount4': '59,000',
            'receiptNum1': 'RM000147',
            'receiptNum2': 'RM000148',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '2024-01-30',
            'receivedDate2': '2024-04-29',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': '',
        },
        'next': {
            'id': '',
            'squareMeters': '16.4',
            'amount': '35,000',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'responsiblePerson': '',
            'companyEmail': '',
            'companyPhone': '',
            'contactPerson': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }
    },
    // {
    //     'id': '9',
    //     'roomId': '18',
    //     'building': '挺生大樓',
    //     'room': '714',
    //     'squareMeters': '12.9',
    //     'startDate': '',
    //     'endDate': '',
    //     'amount': '30,000',
    //     'company': '',
    //     'uniformNum': '',
    //     'responsiblePerson': '',
    //     'companyEmail': '',
    //     'contactPerson': '',
    //     'companyPhone': '',
    //     'deadline1': '',
    //     'deadline2': '',
    //     'deadline3': '',
    //     'deadline4': '',
    //     'receiptNum1': '',
    //     'receiptNum2': '',
    //     'receiptNum3': '',
    //     'receiptNum4': '',
    //     'receivedDate1': '',
    //     'receivedDate2': '',
    //     'receivedDate3': '',
    //     'receivedDate4': '',
    //     'adminNote': ''
    // },
    {
        'id': '10',
        'roomId': '19',
        'building': '實驗大樓',
        'room': '809',
        'defaultSquareMeters': '14.0',
        'defaultAmount': '60,000',
        'recentMaturityDate': '9999-99-99',
        'now': {
            'id': '8',
            'squareMeters': '14.3',
            'amount': '60,000',
            'startDate': '2023-07-15',
            'endDate': '2024-07-14',
            'period': '3',
            'company': '宏達電子有限公司',
            'uniformNum': '78901234',
            'responsiblePerson': '張雅婷',
            'companyEmail': 'contact@htcelectronics.com',
            'companyPhone': '02-86710005',
            'contactPerson': '王志豪',
            'deadline1': '2023-11-15',
            'deadline2': '2024-03-15',
            'deadline3': '2024-07-04',
            'deadline4': '',
            'receivableAmount1': '200,000',
            'receivableAmount2': '240,000',
            'receivableAmount3': '280,000',
            'receivableAmount4': '',
            'receiptNum1': 'RM000151',
            'receiptNum2': 'RM000152',
            'receiptNum3': 'RM000153',
            'receiptNum4': '',
            'receivedDate1': '2023-11-13',
            'receivedDate2': '2024-03-13',
            'receivedDate3': '2024-07-02',
            'receivedDate4': '',
            'adminNote': 'AAA'
        },
        'next': {
            'id': '',
            'squareMeters': '16.4',
            'amount': '35,000',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'responsiblePerson': '',
            'companyEmail': '',
            'companyPhone': '',
            'contactPerson': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }
    }
];

// 停車位data 
var dataset_confirmPaymentParkingSpace = [
    {
        'parkingSpaceId': '1',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B1-01',
        'defaultAmount': '2,500',
        'recentMaturityDate': '9999-99-99',
        'now': {
            'id': '1',
            'amount': '3,000',
            'startDate': '2024-07-01',
            'endDate': '2025-06-30',
            'period': '4',
            'company': '偉大企業有限公司',
            'uniformNum': '12345678',
            'licensePlateNum': '1234-AB',
            'applicant': '張偉',
            'email': 'wei@awesome.com',
            'phone': '02-86711234',
            'deadline1': '2024-10-01',
            'deadline2': '2025-01-01',
            'deadline3': '2025-04-01',
            'deadline4': '2025-06-20',
            'receivableAmount1': '9,000',
            'receivableAmount2': '9,000',
            'receivableAmount3': '9,000',
            'receivableAmount4': '9,000',
            'receiptNum1': 'RM123456',
            'receiptNum2': 'RM234567',
            'receiptNum3': 'RM345678',
            'receiptNum4': 'RM456789',
            'receivedDate1': '2024-09-28',
            'receivedDate2': '2024-12-28',
            'receivedDate3': '2025-03-28',
            'receivedDate4': '2025-06-17',
            'adminNote': ''
        },
        'next': {
            'id': '',
            'amount': '',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'licensePlateNum': '',
            'applicant': '',
            'email': '',
            'phone': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }

    },
    {
        'parkingSpaceId': '2',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '05',
        'defaultAmount': '100',
        'recentMaturityDate': '2024-11-01',
        'now': {
            'id': '2',
            'amount': '100',
            'startDate': '2024-08-01',
            'endDate': '2025-01-31',
            'period': '3',
            'company': '頂尖科技股份有限公司',
            'uniformNum': '23456789',
            'licensePlateNum': '1AA-123',
            'applicant': '李頂',
            'email': 'ting@toptech.com',
            'phone': '0912-345678',
            'deadline1': '2024-11-01',
            'deadline2': '2025-01-21',
            'deadline3': '2025-02-01',
            'deadline4': '',
            'receivableAmount1': '300',
            'receivableAmount2': '300',
            'receivableAmount3': '300',
            'receivableAmount4': '',
            'receiptNum1': 'RM567890',
            'receiptNum2': 'RM678901',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '2024-10-29',
            'receivedDate2': '2025-01-18',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        },
        'next': {
            'id': '',
            'amount': '',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'licensePlateNum': '',
            'applicant': '',
            'email': '',
            'phone': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }

    },
    {
        'parkingSpaceId': '3',
        'building': '新德惠大樓',
        'carType': '汽車',
        'parkingSpaceNum': 'B2-12',
        'defaultAmount': '2,500',
        'recentMaturityDate': '9999-99-99',
        'now': {
            'id': '',
            'amount': '',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'licensePlateNum': '',
            'applicant': '',
            'email': '',
            'phone': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
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
        'next': {
            'id': '',
            'amount': '',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'licensePlateNum': '',
            'applicant': '',
            'email': '',
            'phone': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': '',
            'receiptNum2': '',
            'receiptNum3': '',
            'receiptNum4': '',
            'receivedDate1': '',
            'receivedDate2': '',
            'receivedDate3': '',
            'receivedDate4': '',
            'adminNote': ''
        }

        // 'startDate': '2024-09-01',
        // 'endDate': '2025-02-28',
        // 'amount': '2,500',
        // 'licensePlateNum': '5678-CD',
        // 'company': '創意股份有限公司',
        // 'uniformNum': '34567890',
        // 'applicant': '林創',
        // 'email': 'chuang@creative.com',
        // 'phone': '02-86719876',

        // 'deadline1': '2024-12-01',
        // 'deadline2': '2025-02-18',
        // 'deadline3': '2025-03-01',
        // 'deadline4': '',

        // 'receiptNum1': 'RM789012',
        // 'receiptNum2': 'RM890123',
        // 'receiptNum3': '',
        // 'receiptNum4': '',

        // 'receivedDate1': '2024-11-28',
        // 'receivedDate2': '2025-02-15',
        // 'receivedDate3': '',
        // 'receivedDate4': '',

        // 'adminNote': '',
    },
    {
        'parkingSpaceId': '4',
        'building': '校本部',
        'carType': '機車',
        'parkingSpaceNum': '12',
        'defaultAmount': '100',
        'recentMaturityDate': '2025-01-15',
        'now': {
            'id': '6',
            'amount': '100',
            'startDate': '2024-07-15',
            'endDate': '2025-07-14',
            'period': '4',
            'company': '華麗有限公司',
            'uniformNum': '45678901',
            'licensePlateNum': '2BB-456',
            'applicant': '周華',
            'email': 'hua@glamorous.com',
            'phone': '0912-876543',
            'deadline1': '2024-10-15',
            'deadline2': '2025-01-15',
            'deadline3': '2025-04-15',
            'deadline4': '2025-07-04',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
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
        'next': {
            'id': '',
            'amount': '',
            'startDate': '',
            'endDate': '',
            'period': '',
            'company': '',
            'uniformNum': '',
            'licensePlateNum': '',
            'applicant': '',
            'email': '',
            'phone': '',
            'deadline1': '',
            'deadline2': '',
            'deadline3': '',
            'deadline4': '',
            'receivableAmount1': '',
            'receivableAmount2': '',
            'receivableAmount3': '',
            'receivableAmount4': '',
            'receiptNum1': 'RM890124',
            'receiptNum2': 'RM901235',
            'receiptNum3': 'RM012346',
            'receiptNum4': 'RM123457',
            'receivedDate1': '2024-10-12',
            'receivedDate2': '2025-01-12',
            'receivedDate3': '2025-04-12',
            'receivedDate4': '2025-07-01',
            'adminNote': ''
        }
    },
    // {
    //     'id': '5',
    //     'psId': '15',
    //     'building': '新德惠大樓',
    //     'carType': '汽車',
    //     'parkingSpaceNum': 'B3-03',
    //     'startDate': '2024-08-01',
    //     'endDate': '2025-07-31',
    //     'amount': '2,500',
    //     'licensePlateNum': '2345-EF',
    //     'company': '豪華國際股份有限公司',
    //     'uniformNum': '56789012',
    //     'applicant': '陳豪',
    //     'email': 'hao@luxury.com',
    //     'phone': '02-86713456',

    //     'deadline1': '2024-11-01',
    //     'deadline2': '2025-02-01',
    //     'deadline3': '2025-05-01',
    //     'deadline4': '2025-07-21',

    //     'receiptNum1': 'RM234568',
    //     'receiptNum2': 'RM345679',
    //     'receiptNum3': 'RM456780',
    //     'receiptNum4': 'RM567891',

    //     'receivedDate1': '2024-10-29',
    //     'receivedDate2': '2025-01-29',
    //     'receivedDate3': '2025-04-29',
    //     'receivedDate4': '2025-07-18',

    //     'adminNote': '',
    // },
    // {
    //     'id': '6',
    //     'psId': '16',
    //     'building': '校本部',
    //     'carType': '機車',
    //     'parkingSpaceNum': '21',
    //     'startDate': '',
    //     'endDate': '',
    //     'amount': '100',
    //     'licensePlateNum': '3CC-789',
    //     'company': '',
    //     'uniformNum': '',
    //     'applicant': '',
    //     'email': '',
    //     'phone': '',

    //     'deadline1': '',
    //     'deadline2': '',
    //     'deadline3': '',
    //     'deadline4': '',

    //     'receiptNum1': '',
    //     'receiptNum2': '',
    //     'receiptNum3': '',
    //     'receiptNum4': '',

    //     'receivedDate1': '',
    //     'receivedDate2': '',
    //     'receivedDate3': '',
    //     'receivedDate4': '',

    //     'adminNote': '',
    // },
    // {
    //     'id': '7',
    //     'psId': '17',
    //     'building': '新德惠大樓',
    //     'carType': '汽車',
    //     'parkingSpaceNum': 'B1-09',
    //     'startDate': '2024-09-01',
    //     'endDate': '2024-11-30',
    //     'amount': '3,000',
    //     'licensePlateNum': '6789-GH',
    //     'company': '高效能股份有限公司',
    //     'uniformNum': '67890123',
    //     'applicant': '劉效',
    //     'email': 'xiao@efficient.com',
    //     'phone': '02-86717890',

    //     'deadline1': '2024-12-01',
    //     'deadline2': '2025-03-01',
    //     'deadline3': '2024-11-20',
    //     'deadline4': '',

    //     'receiptNum1': 'RM678912',
    //     'receiptNum2': 'RM789023',
    //     'receiptNum3': '',
    //     'receiptNum4': '',

    //     'receivedDate1': '2024-11-28',
    //     'receivedDate2': '2024-11-17',
    //     'receivedDate3': '',
    //     'receivedDate4': '',

    //     'adminNote': '',
    // },
    // {
    //     'id': '8',
    //     'psId': '18',
    //     'building': '校本部',
    //     'carType': '機車',
    //     'parkingSpaceNum': '31',
    //     'startDate': '2024-07-01',
    //     'endDate': '2025-06-30',
    //     'amount': '100',
    //     'licensePlateNum': '4DD-123',
    //     'company': '先進科技有限公司',
    //     'uniformNum': '78901234',
    //     'applicant': '周先',
    //     'email': 'xian@advancedtech.com',
    //     'phone': '0912-987654',

    //     'deadline1': '2024-10-01',
    //     'deadline2': '2025-01-01',
    //     'deadline3': '2025-04-01',
    //     'deadline4': '2025-06-20',

    //     'receiptNum1': 'RM890125',
    //     'receiptNum2': 'RM901236',
    //     'receiptNum3': 'RM012347',
    //     'receiptNum4': 'RM123458',

    //     'receivedDate1': '2024-09-28',
    //     'receivedDate2': '2024-12-28',
    //     'receivedDate3': '2025-03-28',
    //     'receivedDate4': '2025-06-17',

    //     'adminNote': '',
    // },
    // {
    //     'id': '9',
    //     'psId': '19',
    //     'building': '新德惠大樓',
    //     'carType': '汽車',
    //     'parkingSpaceNum': 'B4-15',
    //     'startDate': '2024-08-01',
    //     'endDate': '2025-07-31',
    //     'amount': '2,500',
    //     'licensePlateNum': '3456-IJ',
    //     'company': '精英國際股份有限公司',
    //     'uniformNum': '89012345',
    //     'applicant': '吳精',
    //     'email': 'jing@elite.com',
    //     'phone': '02-86712345',

    //     'deadline1': '2024-11-01',
    //     'deadline2': '2025-02-01',
    //     'deadline3': '2025-05-01',
    //     'deadline4': '2025-07-21',

    //     'receiptNum1': 'RM123459',
    //     'receiptNum2': 'RM234570',
    //     'receiptNum3': 'RM345681',
    //     'receiptNum4': 'RM456792',

    //     'receivedDate1': '2024-10-29',
    //     'receivedDate2': '2025-01-29',
    //     'receivedDate3': '2025-04-29',
    //     'receivedDate4': '2025-07-18',

    //     'adminNote': '',
    // },
    // {
    //     'id': '10',
    //     'psId': '20',
    //     'building': '校本部',
    //     'carType': '機車',
    //     'parkingSpaceNum': '44',
    //     'startDate': '2024-09-01',
    //     'endDate': '2024-11-30',
    //     'amount': '100',
    //     'licensePlateNum': '5EE-456',
    //     'company': '新創有限公司',
    //     'uniformNum': '90123456',
    //     'applicant': '蔡新',
    //     'email': 'xin@newstartup.com',
    //     'phone': '0912-876543',

    //     'deadline1': '2024-12-01',
    //     'deadline2': '2024-11-20',
    //     'deadline3': '',
    //     'deadline4': '',

    //     'receiptNum1': 'RM678913',
    //     'receiptNum2': 'RM789024',
    //     'receiptNum3': '',
    //     'receiptNum4': '',

    //     'receivedDate1': '2024-11-28',
    //     'receivedDate2': '2024-11-17',
    //     'receivedDate3': '',
    //     'receivedDate4': '',

    //     'adminNote': '',
    // }
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

// ========= 建議輸入(改從後端抓資料) ========
// 可用廠商data done
// var companyData = [
//     "超級棒股份有限公司",
//     "大富翁科技有限公司",
//     "迅捷物流股份有限公司",
//     "綠能科技有限公司",
//     "全球股份有限公司",
//     "宇宙科技有限公司",
//     "光速科技有限公司"
// ];

// ======= 燈箱切換輸入的選項(保留) =======
// 收據狀態選項 done*
var selectOptionStatus2 = [
    { 'option': '使用中' },
    { 'option': '作廢收回' },
    { 'option': '刪除' },
];
// 付款通知-處理進度選項 done*
var selectOptionStatus = [
    { 'option': '待確認' },
    { 'option': '完成' },
    { 'option': '取消' }, // 有付款但臨時取消
    { 'option': '刪除' }, // 錯誤輸入
];
// 分期數選項 done*
var selectOption = [
    { 'option': '1' },
    { 'option': '2' },
    { 'option': '3' },
    { 'option': '4' },
]



$(function () {

    // 收據紀錄-表格 done*
    $('#confirmPaymentReceiptList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentReceipt,
        "columns": [
            { data: 'createDate', title: '建立日期' }, // 0
            { data: 'receiptNum', title: "收據號碼", }, // 1
            { data: 'receiptDate', title: "收據日期", className: 'text-center' }, // 2
            { data: 'item', title: "收據項目", }, // 3
            { data: 'amount', title: "收據<br class='d-none d-lg-block'>總額" }, // 4
            { data: 'company', title: "收據抬頭" }, //5
            { data: 'uniformNum', title: "收據統編" }, //6

            { data: 'adminNote', title: "管理備註", }, // 7
            {
                data: 'id', title: "操作", // 8
                render: function (data, type, row) {
                    const status = row.status;
                    if (!status == '使用中' || status == '作廢收回') {
                        // return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '"><i class="fa-solid fa-receipt"></i>';
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentReceiptModel" data-id="' + data + '"><i class="fa-solid fa-wrench"></i>';
                    } else {
                        // return '<button type="button" class="btn btn-info rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '" title="登記收據資訊"><i class="fa-solid fa-receipt"></i>';
                        return '<button type="button" class="btn btn-info rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentReceiptModel" data-id="' + data + '" title="登記收據資訊"><i class="fa-solid fa-wrench"></i>';
                    }
                }, className: 'text-nowrap'
            },
            { data: 'status', visible: false }, // 9 不顯示，仍可搜尋
        ],
        "order": [[1, "desc"]],
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
            { searchable: false, orderable: false, targets: [8] },
            { className: "text-lg-center", targets: [0, 2, 6, 8] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 6, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            [0, 2].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
            [0, 2, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });

    // 付款通知-表格 done*
    $('#confirmPaymentAllList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentAll,
        "columns": [
            { data: 'createDate', title: '通知日期' }, // 0
            { data: 'company', title: "通知公司" }, //1
            { data: 'paymentDate', title: "付款日", className: 'text-center' }, // 2
            { data: 'amount', title: "付款金額" }, // 3
            { data: 'adminNote', title: "管理備註", }, // 4
            {
                data: 'id', title: "操作", // 5
                render: function (data, type, row) {
                    const status = row.status;
                    if (status == '完成' || status == '取消') {
                        // return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '"><i class="fa-solid fa-receipt"></i>';
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i>';
                    } else {
                        // return '<button type="button" class="btn btn-info rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '" title="登記收據資訊"><i class="fa-solid fa-receipt"></i>';
                        return '<button type="button" class="btn btn-info rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentModel" data-id="' + data + '" title="登記收據資訊"><i class="fa-solid fa-info px-1"></i>';
                    }
                }
            },
            { data: 'status', visible: false }, // 6 不顯示，仍可搜尋
        ],
        "order": [[6, "desc"], [0, "desc"], [2, "desc"]],
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
            { searchable: false, orderable: false, targets: [5] },
            { className: "text-lg-center", targets: [0, 2, 5] },
            { className: "text-nowrap", targets: [0, 2, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(5)', row).css('min-width', '70px');
            $('td:eq(1)', row).css('min-width', '150px');
            [0, 2, 3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });

    // 培育室配置廠商-表格
    $('#confirmPaymentCultivationRoomList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentCultivationRoom,
        "columns": [
            { data: 'building', title: '大樓' }, // 0
            { data: 'room', title: '室' }, // 1
            { data: 'defaultAmount', title: "預設<br class='d-none d-lg-block'>費用" }, // 2
            { // 第四欄 - 配置公司
                title: '配置公司',
                data: function (row) {
                    return row.now.company ? row.now.company : '-';
                }
            },
            { // 第五欄 - 階段①
                title: '階段&#10102;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline1);
                    if (row.now.receivedDate1) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate1 + '</span>';
                    } else {
                        if (row.now.deadline1) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline1 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline1 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            { // 第六欄 - 階段②
                title: '階段&#10103;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline2);
                    if (row.now.receivedDate2) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate2 + '</span>';
                    } else {
                        if (row.now.deadline2) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline2 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline2 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            { // 第七欄 - 階段③
                title: '階段&#10104;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline3);
                    if (row.now.receivedDate3) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate3 + '</span>';
                    } else {
                        if (row.now.deadline3) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline3 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline3 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            { // 第八欄 - 階段④
                title: '階段&#10105;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline4);
                    if (row.now.receivedDate4) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate4 + '</span>';
                    } else {
                        if (row.now.deadline4) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline4 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline4 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            { // 第九欄 - 操作
                title: '操作',
                data: function (row) {
                    if (row.now.id) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="now_' + row.roomId + '" title="修改"><i class="fa-solid fa-wrench"></i></button>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="def_' + row.roomId + '" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i></button>';
                    }
                }
            },
            { // 第十欄 - 下期
                title: '下期',
                data: function (row) {
                    if (row.now.id) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="next_' + row.roomId + '" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i></button>';
                    } else {
                        return '';
                    }
                }
            },
            { data: 'recentMaturityDate', visible: false } // 隱藏欄位，用於排序
        ],
        "order": [[10, "asc"], [0, "desc"]], // 先依 recentMaturityDate 排序，再依 building 排序
        "columnDefs": [
            { targets: [0], responsivePriority: 1 },
            { targets: [1], responsivePriority: 2 },
            { targets: [3], responsivePriority: 3 },
            { searchable: false, orderable: false, targets: [8, 9, 10] },
            { className: "text-lg-center", targets: [1, 4, 5, 6, 7, 8, 9] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6, 7, 8, 9] },
        ],
        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 1, 2, 3, 4, 5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });





    // 車位配置廠商-增加緊急日期
    // dataset_confirmPaymentParkingSpace.forEach(item => {
    //     if (!item.company) {
    //         item.recentMaturityDate = '';
    //     } else {
    //         if (item.deadline4) {
    //             if (item.receivedDate4) {
    //                 item.recentMaturityDate = '0';
    //             } else {
    //                 if (item.receiptNum3) {
    //                     item.recentMaturityDate = item.deadline4;
    //                 } else {
    //                     item.recentMaturityDate = item.deadline3;
    //                 }
    //             }
    //         } else if (item.deadline3) {
    //             if (item.receivedDate3) {
    //                 item.recentMaturityDate = '0';
    //             } else {
    //                 if (item.receiptNum2) {
    //                     item.recentMaturityDate = item.deadline3;
    //                 } else {
    //                     item.recentMaturityDate = item.deadline2;
    //                 }
    //             }
    //         } else if (item.deadline2) {
    //             if (item.receivedDate2) {
    //                 item.recentMaturityDate = '0';
    //             } else {
    //                 if (item.receiptNum1) {
    //                     item.recentMaturityDate = item.deadline2;
    //                 } else {
    //                     item.recentMaturityDate = item.deadline1;
    //                 }
    //             }
    //         } else {
    //             if (item.receivedDate1) {
    //                 item.recentMaturityDate = '0';
    //             } else {
    //                 item.recentMaturityDate = item.deadline1;
    //             }
    //         }
    //     }
    //     // console.log('id = ' + item.id + ' ，期限狀態： ' + item.recentMaturityDate);
    // });
    // 車位配置廠商-表格
    $('#confirmPaymentParkingSpaceList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentParkingSpace,
        "columns": [
            { data: 'building', title: '大樓' }, // 0
            { data: 'parkingSpaceNum', title: "車位<br class='d-none d-lg-block'>號碼", }, // 1
            { data: 'defaultAmount', title: "費用", }, // 2
            {
                title: '承租公司',
                data: function (row) {
                    return row.now.company ? row.now.company : '-';
                }
            },
            {
                title: '階段&#10102;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline1);
                    if (row.now.receivedDate1) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate1 + '</span>';
                    } else {
                        if (row.now.deadline1) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline1 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline1 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            {
                title: '階段&#10103;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline2);
                    if (row.now.receivedDate2) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate2 + '</span>';
                    } else {
                        if (row.now.deadline2) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline2 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline2 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }

            },
            {
                title: '階段&#10104;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline3);
                    if (row.now.receivedDate3) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate3 + '</span>';
                    } else {
                        if (row.now.deadline3) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline3 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline3 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }

            },
            {
                title: '階段&#10105;',
                data: function (row) {
                    const today = new Date();
                    const deadline = new Date(row.now.deadline4);
                    if (row.now.receivedDate4) {
                        return '<span><i class="fa-solid fa-sack-dollar"></i> ' + row.now.receivedDate4 + '</span>';
                    } else {
                        if (row.now.deadline4) {
                            if (deadline < today) {
                                return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline4 + '</span>';
                            } else {
                                return '<span><i class="fa-regular fa-calendar-days"></i> ' + row.now.deadline4 + '</span>';
                            }
                        } else {
                            return '-';
                        }
                    }
                }
            },
            {

                title: '操作',
                data: function (row) {
                    if (row.now.id) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="now_' + row.parkingSpaceId + '" title="修改"><i class="fa-solid fa-wrench"></i></button>';
                    } else {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="def_' + row.parkingSpaceId + '" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i></button>';
                    }
                }
            },
            {


                title: '下期',
                data: function (row) {
                    if (row.now.id) {
                        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="next_' + row.parkingSpaceId + '" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i></button>';
                    } else {
                        return '';
                    }
                }
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
            { className: "text-lg-center", targets: [0, 4, 5, 6, 7, 8, 9] },
            { className: "text-center", targets: [0, 1] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6, 7, 8, 9] },
            { className: "p-1", targets: [4, 5, 6, 7] },
        ],

        createdRow: function (row, data, dataIndex) {
            [8, 9].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 1, 2, 4, 5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
            $('td:eq(3)', row).css('min-width', '150px');
        }
    });




});

$(function () {
    // 新增收據 燈箱 done*
    $('#receiptCreateSubmit').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }

        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，送出表單資料
            $('#formReceiptCreate').submit(); // 提交表單
            // console.log('表單資料已送出');
            swalToastSuccess('收據新增成功，請靜待畫面更新！', 'top');
            setTimeout(function () {
                location.reload();
            }, 2300);  //2.3秒後重新載入頁面
        } else {
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });

    // 同步 收據 燈箱顯示資料 done*
    $('#confirmPaymentReceiptModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let receiptId = String(button.data('id'));

        // 解除先前綁定的點擊事件，不設定會造成重複傳遞先前點擊過的資料。
        $('#receipt_updateBtn').off('click');
        $('#danger_receiptBox').text('');

        // console.log('receipt Id:', receiptId);
        let receiptData = dataset_confirmPaymentReceipt.find(receipt => receipt.id === receiptId);
        if (receiptData) {
            $('#receipt_receiptNum').text(receiptData.receiptNum);
            $('#receipt_receiptDate').text(receiptData.receiptDate);
            $('#receipt_receiptItem').text(receiptData.item);
            $('#receipt_receiptAmount').text(receiptData.amount);

            $('#receipt_companyName').text(receiptData.company);
            $('#receipt_uniformNum').text(receiptData.uniformNum);
            $('#receipt_status').text(receiptData.status);
            $('#receipt_adminNote').text(receiptData.adminNote);

            $('#receipt_createDate').text(receiptData.createDate);
            $('#receipt_createBy').text(receiptData.createBy);
            // console.log('receipt Id:', receiptId);
        } else {
            console.error('資料找不到ID：', receiptId);
        };
        if (receiptData.status === "使用中") {
            $('#receipt_receiptNum').addClass("changeInputUpperNumber_items");
            $('#receipt_receiptDate').addClass("changeDate_items");
            $('#receipt_receiptItem, #receipt_companyName, #receipt_adminNote').addClass("changeInput_items");
            $('#receipt_receiptAmount').addClass("changeMoney_items");
            $('#receipt_uniformNum').addClass("changeUniformNum_items");
            $('#receipt_receiptNum, #receipt_receiptDate, #receipt_receiptItem, #receipt_companyName, #receipt_adminNote, #receipt_receiptAmount, #receipt_uniformNum').removeClass("readOnly");
            $('#receipt_status').addClass("changeSelectStatus2_items");
            CustomInputHandlers.init();
            $('#receipt_updateBtn').show();
        } else {
            CustomInputHandlers.destroy();
            $('#receipt_receiptNum').removeClass("changeInputUpperNumber_items");
            $('#receipt_receiptDate').removeClass("changeDate_items");
            $('#receipt_receiptItem, #receipt_companyName, #receipt_adminNote').removeClass("changeInput_items");
            $('#receipt_receiptAmount').removeClass("changeMoney_items");
            $('#receipt_uniformNum').removeClass("changeUniformNum_items");
            $('#receipt_receiptNum, #receipt_receiptDate, #receipt_receiptItem, #receipt_companyName, #receipt_adminNote, #receipt_receiptAmount, #receipt_uniformNum').addClass("readOnly");
            $('#receipt_status').removeClass("changeSelectStatus2_items");
            $('#receipt_updateBtn').hide();
        };

        $('#receipt_updateBtn').on('click', function () {
            // console.log('當前的 receiptId:', receiptId);

            // 清除上次的資料，重新定義變量
            var receipt_updatedData = {
                id: receiptId,
                receiptNum: $('#receipt_receiptNum').text(),
                receiptDate: $('#receipt_receiptDate').text(),
                receiptItem: $('#receipt_receiptItem').text(),
                amount: $('#receipt_receiptAmount').text(),
                companyName: $('#receipt_companyName').text(),
                uniformNum: $('#receipt_uniformNum').text(),
                status: $('#receipt_status').text(),
                adminNote: $('#receipt_adminNote').text()
            };

            // 驗證必要欄位是否完整
            if (!receipt_updatedData.receiptNum || !receipt_updatedData.receiptDate || !receipt_updatedData.receiptItem || !receipt_updatedData.amount || !receipt_updatedData.companyName || !receipt_updatedData.uniformNum) {
                $('#danger_receiptBox').text('請留下完整的資料，才可以儲存修改歐！');
                return; // 如果有資料缺失，停止操作
            } else {
                $('#danger_receiptBox').text('');
            }

            // 檢查結果並發送 AJAX 請求
            // console.log(receipt_updatedData);
            $.ajax({
                url: receiptEditUrl,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(receipt_updatedData),
                success: function (response) {
                    swalToastSuccess(response.message, 'top'); // 成功提示
                    setTimeout(function () {
                        location.reload(); // 2.3秒後重新加載頁面
                    }, 2300);
                },
                error: function (xhr, status, error) {
                    console.error('Error:', error);
                    swalToastWarning('儲存修改時發生錯誤，請稍後再試。', 'top'); // 錯誤提示
                }
            });
        });
    });

    // 同步 付款通知 燈箱顯示資料 done*
    $('#confirmPaymentModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let paymentId = String(button.data('id'));

        // 解除先前綁定的點擊事件，不設定會造成重複傳遞先前點擊過的資料。
        $('#payment_updateBtn').off('click');
        $('#danger_paymentBox').text('');

        // 清空之前的動態列表項目
        $('#payment_items').html('');

        // console.log('openRoom Id:', paymentId);
        let paymentData = dataset_confirmPaymentAll.find(payment => payment.id === paymentId);
        if (paymentData) {
            $('#payment_companyName').text(paymentData.company);
            $('#payment_uniformNum').text(paymentData.uniformNum);
            if (paymentData.remittanceFile != "-") {
                let lengthText = paymentData.remittanceFile.length;
                if (paymentData.remittanceFile.substring((lengthText - 5), (lengthText - 4)) != "1") {
                    // $('#payment_downloadRemittanceFile').html('<a class="d-inline me-3 text-nowrap" href="#">下載&ensp;<i class="fa-solid fa-download"></i><span class="mx-1 update">補</span></a>');
                    $('#payment_downloadRemittanceFile').html(`<a class="d-inline me-3 text-nowrap" href="/download_T/T_${paymentData.id}">下載&ensp;<i class="fa-solid fa-download"></i><span class="mx-1 update">補</span></a>`);
                } else {
                    // $('#payment_downloadRemittanceFile').html('<a class="d-inline me-3 text-nowrap" href="#">下載&ensp;<i class="fa-solid fa-download"></i></a>');
                    $('#payment_downloadRemittanceFile').html(`<a class="d-inline me-3 text-nowrap" href="/download_T/T_${paymentData.id}">下載&ensp;<i class="fa-solid fa-download"></i>`);
                }
            } else {
                $('#payment_downloadRemittanceFile').text("-").addClass('readOnly');
            }

            $('#payment_companyEmail').text(paymentData.companyEmail);
            $('#payment_contactPerson').text(paymentData.contactPerson);
            $('#payment_companyPhone').text(paymentData.companyPhone);

            $('#payment_paymentDate').text(paymentData.paymentDate);
            $('#payment_paymentAmount').text(paymentData.amount);
            $('#payment_last5AccountNo').text(paymentData.last5AccountNo);

            // 遍歷 items，動態生成列表項目
            paymentData.items.forEach(function (item) {
                let listItem = `
                <li>
                    <span class="text-nowrap text-secondary">${item.type}</span>
                    <span class="text-nowrap">${item.description}</span>
                    <span class="text-nowrap text-danger">${item.amount}</span>
                </li>`;

                // 將每個 listItem 添加到 #payment_items
                $('#payment_items').append(listItem);
            });

            // #gotoEditRemittance是a標籤，修改屬性href="/Remittance/Edit/' + id值 + '"
            $('#gotoEditRemittance').attr('href', `/Remittance/Edit/${paymentData.id}`);

            $('#payment_adminNote').text(paymentData.adminNote);

            $('#payment_status').text(paymentData.status);

        } else {
            console.error('paymentData not found for id:', paymentId);
        };

        if (paymentData.status === "完成" || paymentData.status === "取消") {
            CustomInputHandlers.destroy();
            $('#payment_adminNote').removeClass("changeInput_items");
            $('#payment_status').removeClass("changeSelectStatus_items");
            $('#payment_adminNote, #payment_status').addClass("readOnly");
            $('#payment_updateBtn, #gotoEditRemittance').hide(); // gotoEditRemittance
            // $('#gotoEditRemittance').hide();

        } else {
            $('#payment_adminNote').addClass("changeInput_items");
            $('#payment_status').addClass("changeSelectStatus_items");
            $('#payment_adminNote, #payment_status').removeClass("readOnly");
            CustomInputHandlers.init();
            $('#payment_updateBtn, #gotoEditRemittance').show();
            // $('#gotoEditRemittance').show();
        }

        $('#payment_updateBtn').on('click', function () {
            // console.log('當前的 paymentId:', paymentId);

            // 清除上次的資料，重新定義變量
            var payment_updatedData = {};

            // 獲取所有欄位的目前值
            payment_updatedData.id = paymentId;
            payment_updatedData.adminNote = $('#payment_adminNote').text();
            payment_updatedData.status = $('#payment_status').text();
            // console.log(payment_updatedData);
            // 將更新的資料送到後端
            $.ajax({
                url: paymentStatusEditUrl,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(payment_updatedData),
                success: function (response) {
                    swalToastSuccess(response.message, 'top');
                    setTimeout(function () {
                        $('#confirmPaymentModel').modal('hide'); // 隱藏燈箱
                        // 使用 location.replace() 重新載入此頁面
                        // location.replace(location.href);
                        location.reload(); // 2.3秒後重新加載頁面
                    }, 2300);
                },
                error: function (xhr, status, error) {
                    swalToastError('提交失敗，請稍後再試。', 'top');
                }
            });

        });



    });




    $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget); // 獲取觸發模態框的按鈕
        let catchId = String(button.data('id')); // 從按鈕獲取數據 ID
        let thisRoomId = "";

        // 根據 ID 的前綴來確定房間 ID
        switch (catchId.substring(0, 4)) {
            case 'now_':
                thisRoomId = catchId.substring(4);
                break;
            case 'def_':
                thisRoomId = catchId.substring(4);
                break;
            default:
                thisRoomId = catchId.substring(5);
                break;
        }
        console.log('catchId:', catchId); // 輸出房間 ID

        // 從數據集中查找相應的房間資料
        let roomData = dataset_confirmPaymentCultivationRoom.find(r => r.roomId == thisRoomId);

        // 定義元素的選擇器
        const receiptNumElements = ['#cultivation_receiptNum1', '#cultivation_receiptNum2', '#cultivation_receiptNum3', '#cultivation_receiptNum4'];
        const deadlineElements = ['#cultivation_deadline1', '#cultivation_deadline2', '#cultivation_deadline3', '#cultivation_deadline4'];
        const labelReceiptElements = ['#cultivation_label_receiptNum1', '#cultivation_label_receiptNum2', '#cultivation_label_receiptNum3', '#cultivation_label_receiptNum4'];
        const labelDeadlineElements = ['#cultivation_label_deadline1', '#cultivation_label_deadline2', '#cultivation_label_deadline3', '#cultivation_label_deadline4'];
        const labelInstallmentAmountElements = ['#cultivation_label_installmentAmount1', '#cultivation_label_installmentAmount2', '#cultivation_label_installmentAmount3', '#cultivation_label_installmentAmount4'];
        const installmentAmountElements = ['#cultivation_installmentAmount1', '#cultivation_installmentAmount2', '#cultivation_installmentAmount3', '#cultivation_installmentAmount4'];
        const pinkBG = "pinkBG"; // 粉色背景
        const grayBG = "grayBG"; // 灰色背景

        $('#cultivation_adminNote').addClass("changeInput_items");
        $('#cultivation_startDate, #cultivation_endDate').addClass("changeDate_items");
        $('#cultivation_uniformNum').addClass("changeUniformNum_items");
        $('#cultivation_squareMeters').addClass("changeDecimal_items");

        if (roomData) {
            // 顯示房間的基本資料
            $('#cultivation_building').text(roomData.building);
            $('#cultivation_room').text(roomData.room);

            let currentData = null;
            let isCurrent = catchId.startsWith('now_');
            let isNext = catchId.startsWith('next_');

            if (isCurrent) {
                currentData = roomData.now;
            } else if (isNext) {
                currentData = roomData.next;
            }
            console.log('currentData:', currentData);

            // 顯示刪除和提醒按鈕
            if (currentData && currentData.id) {
                $('#cultivation_deleteData, #cultivation_reminder').removeClass('d-none');
            } else {
                $('#cultivation_deleteData, #cultivation_reminder').addClass('d-none');
            }

            // 設定金額
            $('#cultivation_inputRate').val(currentData?.amount || roomData.defaultAmount);

            // 顯示面積和日期
            $('#cultivation_squareMeters').text(currentData?.squareMeters || roomData.defaultSquareMeters);
            $('#cultivation_startDate').text(currentData?.startDate || formatDate(new Date(new Date().setDate(new Date().getDate() + 1))));
            $('#cultivation_endDate').text(currentData?.endDate || formatDate(new Date(new Date().setFullYear(new Date().getFullYear() + 1))));

            // 期間設置
            let periodNumValue = currentData?.period || "1";
            // console.log("periodNumValue", periodNumValue);
            $('#cultivation_selectPeriod').val(periodNumValue);

            // 顯示公司和聯絡人資訊
            $('#cultivation_companyName').text(currentData?.company || "");
            $('#cultivation_uniformNum').text(currentData?.uniformNum || "");
            $('#cultivation_responsiblePerson').text(currentData?.responsiblePerson || "");
            $('#cultivation_companyEmail').text(currentData?.companyEmail || "");
            $('#cultivation_contactPerson').text(currentData?.contactPerson || "");
            $('#cultivation_companyPhone').text(currentData?.companyPhone || "");

            // 顯示截止日期
            $('#cultivation_deadline1').text(currentData?.deadline1 || "");
            $('#cultivation_deadline2').text(currentData?.deadline2 || "");
            $('#cultivation_deadline3').text(currentData?.deadline3 || "");
            $('#cultivation_deadline4').text(currentData?.deadline4 || "");

            // 顯示應收金額
            let rateNum = parseFloat($('#cultivation_rate').text().replace(/,/g, ''));
            // 顯示應收金額和收據
            if (currentData) {
                for (let i = 1; i <= 4; i++) {
                    // 檢查每期應收金額
                    if (currentData[`receivableAmount${i}`]) {
                        // 如果有值，顯示該值
                        $(`#cultivation_installmentAmount${i}`).text(currentData[`receivableAmount${i}`]);
                    } else if (periodNumValue >= i) {
                        // 如果沒有值，計算金額並顯示
                        const calculatedAmount = ((rateNum * 12) / periodNumValue).toLocaleString();
                        $(`#cultivation_installmentAmount${i}`).text(calculatedAmount);
                    }

                    // 顯示收據號碼和收到日期
                    $(`#cultivation_receiptNum${i}`).text(currentData[`receiptNum${i}`] || "");
                    $(`#cultivation_receivedDate${i}`).text(currentData[`receivedDate${i}`] || "");
                }
            }

            $('#cultivation_adminNote').text(currentData?.adminNote || "");

            // 更新應收金額
            // if (currentData) {
            //     updateInstallmentAmounts(periodNumValue, rateNum);
            // }

            handleContentChange();
            // 清理顏色和樣式
            // CustomInputHandlers.destroy();
            // resetStyles();
            // // 根據期數為相關元素添加背景顏色
            // if (periodNumValue) {
            //     applyBackgroundColors(periodNumValue);
            // }
            // CustomInputHandlers.init();

            // 監聽 cultivation_inputRate 的值變動
            $('#cultivation_inputRate').on('input', function () {
                const rateValue = $(this).val().trim();
                console.log('Rate changed:', rateValue);
                handleContentChange();
            });

            // 監聽 cultivation_selectPeriod 的值變動
            $('#cultivation_selectPeriod').on('change', function () {
                // CustomInputHandlers.destroy();
                const periodValue = $(this).val();
                console.log('Period changed:', periodValue);
                handleContentChange();
                // CustomInputHandlers.init();
            });

            // 這是處理變動後的邏輯
            function handleContentChange() {
                CustomInputHandlers.destroy();
                const period = $('#cultivation_selectPeriod').val();  // 取得選擇的期數
                const rate = parseFloat($('#cultivation_inputRate').val().replace(/,/g, '')); // 取得輸入的金額並移除逗號

                if (!isNaN(period) && !isNaN(rate)) {
                    console.log('Valid values: Period -', period, 'Rate -', rate);
                    // 更新應收金額並重新應用樣式
                    resetStyles();
                    updateInstallmentAmounts(period, rate);
                    applyBackgroundColors(period);
                    CustomInputHandlers.init();
                } else {
                    console.log('Invalid values for period or rate.');
                }
            }


            function updateInstallmentAmounts(period, rate) {
                // 計算應收總額
                const totalAmount = rate * 12;

                let totalReceivableAmount = 0; // 紀錄已有的應收金額總和
                let remainingPeriods = period; // 剩餘未計入歷史數據的期數
                // console.log('totalAmount:',totalAmount);

                // 遍歷每個分期付款的 HTML 元素
                installmentAmountElements.forEach((el, index) => {
                    let receivableAmount = null;

                    // 確保 currentData 存在，並且有對應的應收金額
                    if (currentData && currentData[`receivableAmount${index + 1}`]) {
                        // 將應收金額字符串轉換為數字
                        receivableAmount = parseFloat(currentData[`receivableAmount${index + 1}`].replace(/,/g, ''));
                        // console.log('receivableAmountA:',receivableAmount);
                    }
                    // console.log('receivableAmountB:',receivableAmount);

                    if (!isNaN(receivableAmount) && index < period && receivableAmount != null) {
                        // 如果有歷史數據，顯示 currentData 的值
                        // $(el).text(receivableAmount.toLocaleString());
                        // console.log('receivableAmount != NAN null:',receivableAmount);
                        // 如果有歷史數據，顯示 currentData 的值
                        if (receivableAmount != null) {
                            $(el).text(receivableAmount.toLocaleString());
                        } else {
                            $(el).text(''); // 或者設定為空值
                        }
                        totalReceivableAmount += receivableAmount; // 累加歷史數據的應收金額
                        remainingPeriods--; // 減少剩餘的期數
                    } else if (index < period) {
                        // 如果沒有歷史數據，顯示剩餘金額的平均值
                        const remainingAmount = totalAmount - totalReceivableAmount;

                        // 確保剩餘期數不為零，以避免除以零的錯誤
                        const averageRemainingAmount = remainingPeriods > 0 ? (remainingAmount / remainingPeriods) : 0;

                        // 格式化為帶千分位的字符串
                        $(el).text(averageRemainingAmount.toLocaleString());
                    } else {
                        // 超過期數的部分顯示為空白
                        $(el).text('');
                    }
                });
            }
            // function updateInstallmentAmounts(period, rate) {
            //     const amount = (rate * 12) / period; // 根據期數計算每期應收金額

            //     installmentAmountElements.forEach((el, index) => {
            //         let receivableAmount = null;

            //         // 確保 currentData 存在，並且有對應的應收金額
            //         if (currentData && currentData[`receivableAmount${index + 1}`]) {
            //             receivableAmount = parseFloat(currentData[`receivableAmount${index + 1}`]);
            //         }

            //         if (!isNaN(receivableAmount) && index < period) {
            //             // 如果有值，顯示 currentData 的值
            //             $(el).text(receivableAmount.toLocaleString());
            //         } else if (index < period) {
            //             // 否則顯示計算出的金額
            //             $(el).text(amount.toLocaleString());
            //         } else {
            //             // 超過期數的部分顯示為空白
            //             $(el).text('');
            //         }
            //     });
            // }

            // 函式 - 清理樣式
            function resetStyles() {
                // 清除原本的背景色等樣式
                labelReceiptElements.forEach((el, index) => {
                    $(el).removeClass(pinkBG).removeClass(grayBG);
                    $(labelInstallmentAmountElements[index]).removeClass(pinkBG).removeClass(grayBG);
                    $(labelDeadlineElements[index]).removeClass(pinkBG).removeClass(grayBG);
                    $(receiptNumElements[index]).removeClass("changeInput_items");
                    $(installmentAmountElements[index]).removeClass("changeMoney_items");
                    $(deadlineElements[index]).removeClass("changeDate_items");
                });
            }

            // 函式 - 根據期數為相關元素添加背景顏色
            function applyBackgroundColors(periodNum) {
                for (let j = 0; j < periodNum; j++) {
                    $(labelReceiptElements[j]).addClass(pinkBG);
                    $(labelInstallmentAmountElements[j]).addClass(pinkBG);
                    $(labelDeadlineElements[j]).addClass(pinkBG);
                    $(receiptNumElements[j]).addClass("changeInput_items");
                    $(installmentAmountElements[j]).addClass("changeMoney_items");
                    $(deadlineElements[j]).addClass("changeDate_items");
                }
            }
        }



        $('#cultivation_updateBtn').off('click');

        $('#cultivation_deleteData').off('click');
        $('#cultivation_deleteData').on('click', function () {
            console.log("使用Id", catchId);
            let deleteId = "";
            switch (catchId.substring(0, 4)) {
                case 'now_':
                    deleteId = roomData.now.id;
                    break;
                case 'next':
                    deleteId = roomData.next.id;
                    break;
                default:
                    deleteId = "add";
                    break;
            }

            // console.log("刪除Id",deleteId);
            // 將更新的資料送到後端
            $.ajax({
                url: deleteRoomRecordsUrl, // 替換成您的後端接收更新請求的URL
                type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
                contentType: 'application/json',
                data: JSON.stringify(deleteId),
                success: function (response) {
                    // 處理成功回應
                    // console.log('刪除成功:', response);
                    // 根據需要執行其他操作，例如顯示成功訊息
                    swalToastSuccess(response.message, 'top');// 2秒
                    setTimeout(function () {
                        location.reload();
                    }, 2300);  //2.3秒後
                },
                error: function (xhr, status, error) {
                    // 處理錯誤情況
                    // console.error('刪除失敗:', error);
                    swalToastWarning('刪除配置紀錄時發生錯誤。', 'top');
                }
            });

        });

        $('#cultivation_updateBtn').on('click', function () {
            console.log('roomId Btn :', catchId); // 確認 roomId 是否正確獲取
            // let formType = "";
            let formTypeId = "";

            // 根據 ID 的前綴來確定房間 ID
            switch (catchId.substring(0, 4)) {
                case 'now_':
                    // formType = "now";
                    formTypeId = roomData.now.id;
                    break;
                case 'next_':
                    // formType = "add";
                    formTypeId = roomData.next.id;
                    break;
                default:
                    formTypeId = "add";
                    // formType = "next";
                    break;
            }

            var roomUpdatedData = {
                roomId: thisRoomId,
                id: formTypeId,
                squareMeters: $('#cultivation_squareMeters').text(),
                // amount: $('#cultivation_rate').text(),
                amount: $('#cultivation_inputRate').val(),
                startDate: $('#cultivation_startDate').text(),
                endDate: $('#cultivation_endDate').text(),
                // period: $('#cultivation_period').text(),
                period: $('#cultivation_selectPeriod').val(),
                uniformNum: $('#cultivation_uniformNum').text(),
                deadline1: $('#cultivation_deadline1').text(),
                deadline2: $('#cultivation_deadline2').text(),
                deadline3: $('#cultivation_deadline3').text(),
                deadline4: $('#cultivation_deadline4').text(),
                receivableAmount1: $('#cultivation_installmentAmount1').text(),
                receivableAmount2: $('#cultivation_installmentAmount2').text(),
                receivableAmount3: $('#cultivation_installmentAmount3').text(),
                receivableAmount4: $('#cultivation_installmentAmount4').text(),
                receiptNum1: $('#cultivation_receiptNum1').text(),
                receiptNum2: $('#cultivation_receiptNum2').text(),
                receiptNum3: $('#cultivation_receiptNum3').text(),
                receiptNum4: $('#cultivation_receiptNum4').text(),
                adminNote: $('#receipt_adminNote').text()
            };

            console.log('roomUpdatedData:', roomUpdatedData);
            // 驗證必要欄位是否完整
            if (!roomUpdatedData.startDate || !roomUpdatedData.endDate || !roomUpdatedData.period || !roomUpdatedData.uniformNum || !roomUpdatedData.deadline1 || !roomUpdatedData.receivableAmount1 || !roomUpdatedData.amount) {
                $('#danger_roomBox').text('請留下完整的資料，才可以儲存修改歐！');
                return; // 如果有資料缺失，停止操作
            } else {
                $('#danger_roomBox').text('');
                // 將更新的資料送到後端
                $.ajax({
                    url: editRoomRecordsUrl, // 替換成您的後端接收更新請求的URL
                    type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
                    contentType: 'application/json',
                    data: JSON.stringify(roomUpdatedData),
                    success: function (response) {
                        // 處理成功回應
                        console.log('更新成功:', response);
                        // 根據需要執行其他操作，例如顯示成功訊息
                        swalToastSuccess(response.message, 'top');// 2秒
                        setTimeout(function () {
                            location.reload();
                        }, 2300);  //2.3秒後
                    },
                    error: function (xhr, status, error) {
                        // 處理錯誤情況
                        console.error('更新失敗:', error);
                        swalToastWarning('刪除配置紀錄時發生錯誤。', 'top');
                        // 根據需要顯示錯誤訊息或執行其他操作
                    }
                });
            }

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
        console.log('parkingSpaceId 1 :', psThisId); // 確認 parkingSpaceId 是否正確獲取

        if (!psThisId.endsWith('_N')) { // 表示為已配置的紀錄id
            let openRoomData = dataset_confirmPaymentParkingSpace.find(thisData => thisData.parkingSpaceId === psThisId);
            if (openRoomData) {
                $('#parkingSapce_deleteData, #parkingSapce_reminder').removeClass('d-none');

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
                console.error('openRoomData data not found for id:', parkingSpaceId);
            }
        } else { // 表示為尚未配置的培育室id
            // 去除最後兩個字元，然後使用新的 roomId 進行查找
            psId_N = psThisId.slice(0, -2);
            let openRoomData = dataset_confirmPaymentParkingSpace.find(parkingSpace => parkingSpace.psId === psId_N);
            if (openRoomData) {
                $('#parkingSapce_deleteData, #parkingSapce_reminder').addClass('d-none');

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

// 調整表格
$(function () {

    var table1 = $('#confirmPaymentReceiptList').DataTable();
    var table2 = $('#confirmPaymentAllList').DataTable();
    var table3 = $('#confirmPaymentCultivationRoomList').DataTable();
    var table4 = $('#confirmPaymentParkingSpaceList').DataTable();

    // 監聽Bootstrap的切換事件
    $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("bs-target"); // 獲取當前顯示的 tab 目標
        var table;

        switch (target) {
            case '#pills-one"':
                table = table1;
                break;
            case '#pills-two':
                table = table2;
                break;
            case '#pills-three':
                table = table3;
                break;
            case '#pills-four':
                table = table4;
                break;
        }
        if (table) {
            setTimeout(function () {
                table.columns.adjust().responsive.recalc();
            }, 30);
        }
    });

});

$(function () {
    // 建議輸入
    $('#typeahead_company, #typeahead_receiptCompanyAdd').typeahead({
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




// 去除最後兩個字元，然後使用新的 roomId 進行查找

// roomId_N = roomThisId.slice(0, -2);
// let openRoomData = dataset_confirmPaymentCultivationRoom.find(room => room.roomId === roomId_N);
// if (openRoomData) {
//     $('#cultivation_deleteData, #cultivation_reminder').addClass('d-none');

//     $('#cultivation_building').text(openRoomData.building);
//     $('#cultivation_room').text(openRoomData.room);
//     $('#cultivation_squareMeters').text(openRoomData.squareMeters);

//     // $('#cultivation_startDate').text('');
//     // $('#cultivation_endDate').text('');
//     // 取得今日的日期
//     let today = new Date();

//     // 計算明天的日期
//     let tomorrow = new Date();
//     tomorrow.setDate(today.getDate() + 1);

//     // 計算一年後的日期
//     let nextYear = new Date();
//     nextYear.setFullYear(today.getFullYear() + 1);

//     // 格式化日期為 yyyy-MM-dd
//     function formatDate(date) {
//         let year = date.getFullYear();
//         let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份補零
//         let day = date.getDate().toString().padStart(2, '0'); // 天數補零
//         return `${year}-${month}-${day}`;
//     }

//     // 將日期放入相應的 div 中
//     $('#cultivation_startDate').text(formatDate(tomorrow));
//     $('#cultivation_endDate').text(formatDate(nextYear));

//     $('#cultivation_rate').text(openRoomData.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。

//     $('#cultivation_companyName').text('');
//     $('#cultivation_uniformNum').text('');
//     $('#cultivation_responsiblePerson').text('');

//     $('#cultivation_companyEmail').text('');
//     $('#cultivation_contactPerson').text('');
//     $('#cultivation_companyPhone').text('');

//     $('#cultivation_deadline1').text('');
//     $('#cultivation_deadline2').text('');
//     $('#cultivation_deadline3').text('');
//     $('#cultivation_deadline4').text('');

//     $('#cultivation_receiptNum1').text('');
//     $('#cultivation_receiptNum2').text('');
//     $('#cultivation_receiptNum3').text('');
//     $('#cultivation_receiptNum4').text('');

//     $('#cultivation_receivedDate1').text('');
//     $('#cultivation_receivedDate2').text('');
//     $('#cultivation_receivedDate3').text('');
//     $('#cultivation_receivedDate4').text('');

//     $('#cultivation_adminNote').text('');

// } else {
//     console.error('openRoomData data not found for id:', roomId_N);
// }


// ===== 調整必填顯示 =====
// 獲取週期數
// let periodNumValue = $('#cultivation_period').text();
// console.log("periodNum：", periodNumValue);

// 定義需要的元素和樣式
// const receiptNumElements = ['#cultivation_receiptNum1', '#cultivation_receiptNum2', '#cultivation_receiptNum3', '#cultivation_receiptNum4'];
// const deadlineElements = ['#cultivation_deadline1', '#cultivation_deadline2', '#cultivation_deadline3', '#cultivation_deadline4'];
// const labelReceiptElements = ['#cultivation_label_receiptNum1', '#cultivation_label_receiptNum2', '#cultivation_label_receiptNum3', '#cultivation_label_receiptNum4'];
// const labelDeadlineElements = ['#cultivation_label_deadline1', '#cultivation_label_deadline2', '#cultivation_label_deadline3', '#cultivation_label_deadline4'];
// const labelInstallmentAmountElements = ['#cultivation_label_installmentAmount1', '#cultivation_label_installmentAmount2', '#cultivation_label_installmentAmount3', '#cultivation_label_installmentAmount4'];
// const installmentAmountElements = ['#cultivation_installmentAmount1', '#cultivation_installmentAmount2', '#cultivation_installmentAmount3', '#cultivation_installmentAmount4'];



// 函式 - 設定樣式



// var table1 = $('#confirmPaymentCultivationRoomList').DataTable();
// var table2 = $('#confirmPaymentParkingSpaceList').DataTable();
// var table4 = $('#confirmPaymentAllList').DataTable();
// // 監聽Bootstrap的切換事件
// $('input[type="radio"][name="btnradio"]').on('change', function () {
//     setTimeout(function () {
//         table1.columns.adjust().responsive.recalc();
//         table2.columns.adjust().responsive.recalc();
//         table4.columns.adjust().responsive.recalc();
//     }, 20);
// });

// // 培育室配置廠商-增加緊急日期
// dataset_confirmPaymentCultivationRoom.forEach(item => {
//     if (!item.company) {
//         item.recentMaturityDate = '';
//     } else {
//         if (item.deadline4) {
//             if (item.receivedDate4) {
//                 item.recentMaturityDate = '0';
//             } else {
//                 if (item.receiptNum3) {
//                     item.recentMaturityDate = item.deadline4;
//                 } else {
//                     item.recentMaturityDate = item.deadline3;
//                 }
//             }
//         } else if (item.deadline3) {
//             if (item.receivedDate3) {
//                 item.recentMaturityDate = '0';
//             } else {
//                 if (item.receiptNum2) {
//                     item.recentMaturityDate = item.deadline3;
//                 } else {
//                     item.recentMaturityDate = item.deadline2;
//                 }
//             }
//         } else if (item.deadline2) {
//             if (item.receivedDate2) {
//                 item.recentMaturityDate = '0';
//             } else {
//                 if (item.receiptNum1) {
//                     item.recentMaturityDate = item.deadline2;
//                 } else {
//                     item.recentMaturityDate = item.deadline1;
//                 }
//             }
//         } else {
//             if (item.receivedDate1) {
//                 item.recentMaturityDate = '0';
//             } else {
//                 item.recentMaturityDate = item.deadline1;
//             }
//         }
//     }
//     // console.log('id = ' + item.id + ' ，期限狀態： ' + item.recentMaturityDate);
// });

// console.log('id = ' + item.id + ' ，期限狀態： ' + item.recentMaturityDate);
// });

// // 培育室配置廠商-表格
// $('#confirmPaymentCultivationRoomList').DataTable({
//     ...commonSettingsTable,
//     "data": dataset_confirmPaymentCultivationRoom,
//     "columns": [
//         { data: 'building', title: '大樓' }, // 0
//         { data: 'room', title: '室' }, // 1
//         { data: 'defaultAmount', title: '預設<br class="d-none d-lg-black">費用', }, // 2
//         {
//             data: 'company', title: "配置公司", // 3
//             render: function (data) {
//                 if (!data) {
//                     return '-';
//                 } else {
//                     return data;
//                 }
//             }
//         },
//         {
//             data: 'deadline1', title: "階段&#10102;", // 4
//             render: function (data, type, row) {
//                 const receivedDate1 = row.receivedDate1;
//                 const today = new Date();
//                 const dataDate = new Date(data);
//                 if (!receivedDate1) {
//                     if (data) {
//                         if (dataDate < today) {
//                             return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         } else {
//                             return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         }
//                     } else {
//                         return '-';
//                     }
//                 } else {
//                     return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate1 + '</span>';
//                 }
//             }
//         },
//         {
//             data: 'deadline2', title: "階段&#10103;", // 5
//             render: function (data, type, row) {
//                 const receivedDate2 = row.receivedDate2;
//                 const today = new Date();
//                 const dataDate = new Date(data);
//                 if (!receivedDate2) {
//                     if (data) {
//                         if (dataDate < today) {
//                             return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         } else {
//                             return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         }
//                     } else {
//                         return '-';
//                     }
//                 } else {
//                     return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate2 + '</span>';
//                 }
//             }

//         },
//         {
//             data: 'deadline3', title: "階段&#10104;", // 6
//             render: function (data, type, row) {
//                 const receivedDate3 = row.receivedDate3;
//                 const today = new Date();
//                 const dataDate = new Date(data);
//                 if (!receivedDate3) {
//                     if (data) {
//                         if (dataDate < today) {
//                             return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         } else {
//                             return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         }
//                     } else {
//                         return '-';
//                     }
//                 } else {
//                     return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate3 + '</span>';
//                 }
//             }

//         },
//         {
//             data: 'deadline4', title: "階段&#10105;", // 7
//             render: function (data, type, row) {
//                 const receivedDate4 = row.receivedDate4;
//                 const today = new Date();
//                 const dataDate = new Date(data);
//                 if (!receivedDate4) {
//                     if (data) {
//                         if (dataDate < today) {
//                             return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         } else {
//                             return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                         }
//                     } else {
//                         return '-';
//                     }
//                 } else {
//                     return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate4 + '</span>';
//                 }
//             }

//         },
//         {
//             data: 'id', title: "操作", // 8
//             render: function (data, type, row) {
//                 const company = row.company;
//                 const roomId = row.roomId;
//                 if (!company) {
//                     return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + roomId + '_N" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i>';
//                 } else {
//                     return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '" title="修改"><i class="fa-solid fa-wrench"></i>';
//                 }
//             }
//         },
//         {
//             data: 'id', title: "下期", // 9
//             render: function (data, type, row) {
//                 const company = row.company;
//                 const roomId = row.roomId;
//                 if (company) {
//                     return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + roomId + '_N" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
//                 }
//                 return '';
//             }
//         },
//         { data: 'recentMaturityDate', visible: false }, // 10
//     ],
//     "order": [[10, "asc"], [0, "desc"]],
//     "columnDefs": [
//         {
//             targets: [0],
//             responsivePriority: 1,
//         },
//         {
//             targets: [1],
//             responsivePriority: 2,
//         },
//         {
//             targets: [3],
//             responsivePriority: 3,
//         },
//         { searchable: false, orderable: false, targets: [8, 9, 10] },
//         { className: "text-lg-center", targets: [1, 4, 5, 6, 7, 8, 9] },
//         { className: "text-nowrap", targets: [0, 1, 2, 4, 5, 6, 7, 8, 9] },
//     ],
//     createdRow: function (row, data, dataIndex) {
//         [8, 9].forEach(function (colIdx) {
//             $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
//         });
//         [2, 4, 5, 6, 7].forEach(function (colIdx) {
//             $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
//         });
//     }
// });


// // ===== 配燈箱資料 =====
// if (roomData) {
//     // 顯示房間的基本資料
//     $('#cultivation_building').text(roomData.building);
//     $('#cultivation_room').text(roomData.room);

//     if (catchId.startsWith('now_')) { // 表示為這一期
//         if (roomData.now.id) {
//             $('#cultivation_deleteData, #cultivation_reminder').removeClass('d-none'); // 顯示刪除和提醒按鈕
//         }

//         // 設定金額
//         if (roomData.now.amount) {
//             $('#cultivation_rate').text(roomData.now.amount);
//         } else {
//             $('#cultivation_rate').text(roomData.defaultAmount);
//         }

//         // 顯示面積和日期
//         $('#cultivation_squareMeters').text(roomData.now.squareMeters);
//         $('#cultivation_startDate').text(roomData.now.startDate);
//         $('#cultivation_endDate').text(roomData.now.endDate);

//         // 期間設置
//         if (roomData.now.period) {
//             $('#cultivation_period').text(roomData.now.period);
//             periodNumValue = roomData.now.period;
//         } else {
//             $('#cultivation_period').text("1");
//             periodNumValue = "1";
//         }

//         // 顯示公司和聯絡人資訊
//         $('#cultivation_companyName').text(roomData.now.company);
//         $('#cultivation_uniformNum').text(roomData.now.uniformNum);
//         $('#cultivation_responsiblePerson').text(roomData.now.responsiblePerson);
//         $('#cultivation_companyEmail').text(roomData.now.companyEmail);
//         $('#cultivation_contactPerson').text(roomData.now.contactPerson);
//         $('#cultivation_companyPhone').text(roomData.now.companyPhone);

//         // 顯示截止日期
//         $('#cultivation_deadline1').text(roomData.now.deadline1);
//         $('#cultivation_deadline2').text(roomData.now.deadline2);
//         $('#cultivation_deadline3').text(roomData.now.deadline3);
//         $('#cultivation_deadline4').text(roomData.now.deadline4);

//         // 顯示應收金額
//         let thisPeriodNum = parseInt(periodNumValue, 10);
//         if (roomData.now.receivableAmount1) {
//             $('#cultivation_installmentAmount1').text(roomData.now.receivableAmount1);
//         }

//         if (roomData.now.receivableAmount2 && thisPeriodNum >= 2) {
//             $('#cultivation_installmentAmount2').text(roomData.now.receivableAmount2);
//         }

//         if (roomData.now.receivableAmount3 && thisPeriodNum >= 3) {
//             $('#cultivation_installmentAmount3').text(roomData.now.receivableAmount3);
//         }

//         if (roomData.now.receivableAmount4 && thisPeriodNum == 4) {
//             $('#cultivation_installmentAmount4').text(roomData.now.receivableAmount4);
//         }

//         // 顯示收據號碼和收到日期
//         $('#cultivation_receiptNum1').text(roomData.now.receiptNum1);
//         $('#cultivation_receiptNum2').text(roomData.now.receiptNum2);
//         $('#cultivation_receiptNum3').text(roomData.now.receiptNum3);
//         $('#cultivation_receiptNum4').text(roomData.now.receiptNum4);
//         $('#cultivation_receivedDate1').text(roomData.now.receivedDate1);
//         $('#cultivation_receivedDate2').text(roomData.now.receivedDate2);
//         $('#cultivation_receivedDate3').text(roomData.now.receivedDate3);
//         $('#cultivation_receivedDate4').text(roomData.now.receivedDate4);
//         $('#cultivation_adminNote').text(roomData.now.adminNote);

//     } else if (catchId.startsWith('next_')) { // 表示為下一期
//         if (roomData.next.id) {
//             $('#cultivation_deleteData, #cultivation_reminder').removeClass('d-none');
//         }

//         // 設定金額
//         if (roomData.next.amount) {
//             $('#cultivation_rate').text(roomData.next.amount);
//         } else {
//             $('#cultivation_rate').text(roomData.defaultAmount);
//         }

//         // 顯示面積和日期
//         $('#cultivation_squareMeters').text(roomData.next.squareMeters);
//         $('#cultivation_startDate').text(roomData.next.startDate);
//         $('#cultivation_endDate').text(roomData.next.endDate);

//         // 期數設置
//         if (roomData.next.period) {
//             $('#cultivation_period').text(roomData.next.period);
//             periodNumValue = roomData.next.period;
//         } else {
//             $('#cultivation_period').text("1");
//             periodNumValue = "1";
//         }

//         // 顯示公司和聯絡人資訊
//         $('#cultivation_companyName').text(roomData.next.company);
//         $('#cultivation_uniformNum').text(roomData.next.uniformNum);
//         $('#cultivation_responsiblePerson').text(roomData.next.responsiblePerson);
//         $('#cultivation_companyEmail').text(roomData.next.companyEmail);
//         $('#cultivation_contactPerson').text(roomData.next.contactPerson);
//         $('#cultivation_companyPhone').text(roomData.next.companyPhone);

//         // 顯示截止日期
//         $('#cultivation_deadline1').text(roomData.next.deadline1);
//         $('#cultivation_deadline2').text(roomData.next.deadline2);
//         $('#cultivation_deadline3').text(roomData.next.deadline3);
//         $('#cultivation_deadline4').text(roomData.next.deadline4);

//         // 顯示應收金額
//         let periodNum = parseInt(periodNumValue, 10);
//         if (roomData.next.receivableAmount1) {
//             $('#cultivation_installmentAmount1').text(roomData.next.receivableAmount1);
//         }

//         if (roomData.next.receivableAmount2 && periodNum >= 2) {
//             $('#cultivation_installmentAmount2').text(roomData.next.receivableAmount2);
//         }

//         if (roomData.next.receivableAmount3 && periodNum >= 3) {
//             $('#cultivation_installmentAmount3').text(roomData.next.receivableAmount3);
//         }

//         if (roomData.next.receivableAmount4 && periodNum == 4) {
//             $('#cultivation_installmentAmount4').text(roomData.next.receivableAmount4);
//         }

//         // 顯示收據號碼和收到日期
//         $('#cultivation_receiptNum1').text(roomData.next.receiptNum1);
//         $('#cultivation_receiptNum2').text(roomData.next.receiptNum2);
//         $('#cultivation_receiptNum3').text(roomData.next.receiptNum3);
//         $('#cultivation_receiptNum4').text(roomData.next.receiptNum4);
//         $('#cultivation_receivedDate1').text(roomData.next.receivedDate1);
//         $('#cultivation_receivedDate2').text(roomData.next.receivedDate2);
//         $('#cultivation_receivedDate3').text(roomData.next.receivedDate3);
//         $('#cultivation_receivedDate4').text(roomData.next.receivedDate4);
//         $('#cultivation_adminNote').text(roomData.next.adminNote);
//     } else {
//         $('#cultivation_deleteData, #cultivation_reminder').addClass('d-none');
//         $('#cultivation_rate').text(roomData.defaultAmount);

//         // 顯示面積和日期
//         $('#cultivation_squareMeters').text(roomData.defaultSquareMeters);
//         $('#cultivation_startDate').text(roomData.next.startDate);
//         $('#cultivation_endDate').text(roomData.next.endDate);

//         let today = new Date();  // 今日
//         let tomorrow = new Date();
//         tomorrow.setDate(today.getDate() + 1); // 計算明日

//         let nextYear = new Date();
//         nextYear.setFullYear(today.getFullYear() + 1);  // 計算一年後的日期
//         // 函式 - 格式化日期為 yyyy-MM-dd
//         function formatDate(date) {
//             let year = date.getFullYear();
//             let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份補零
//             let day = date.getDate().toString().padStart(2, '0'); // 天數補零
//             return `${year}-${month}-${day}`;
//         }

//         // 預設起為明日，迄為明日的一年後
//         $('#cultivation_startDate').text(formatDate(tomorrow));
//         $('#cultivation_endDate').text(formatDate(nextYear));
//         // 期數設置
//         $('#cultivation_period').text("1");

//         // 顯示公司和聯絡人資訊
//         $('#cultivation_companyName').text("");
//         $('#cultivation_uniformNum').text("");
//         $('#cultivation_responsiblePerson').text("");
//         $('#cultivation_companyEmail').text("");
//         $('#cultivation_contactPerson').text("");
//         $('#cultivation_companyPhone').text("");

//         // 顯示截止日期
//         $('#cultivation_deadline1').text("");
//         $('#cultivation_deadline2').text("");
//         $('#cultivation_deadline3').text("");
//         $('#cultivation_deadline4').text("");

//         let rateNum = parseFloat($('#cultivation_rate').text().replace(/,/g, '')); // 去掉千分位符號並轉為數字
//         updateInstallmentAmounts(periodNumValue, rateNum);

//     }

//     // 清理顏色和樣式
//     CustomInputHandlers.destroy();
//     let labelReceiptElementsLength = labelReceiptElements.length;
//     for (let i = 0; i < labelReceiptElementsLength; i++) {
//         $(labelReceiptElements[i]).removeClass(pinkBG);
//         $(labelReceiptElements[i]).removeClass(grayBG);
//         $(labelInstallmentAmountElements[i]).removeClass(pinkBG);
//         $(labelInstallmentAmountElements[i]).removeClass(grayBG);
//         $(labelDeadlineElements[i]).removeClass(pinkBG);
//         $(labelDeadlineElements[i]).removeClass(grayBG);

//         $(receiptNumElements[i]).removeClass("changeInput_items");
//         $(installmentAmountElements[i]).removeClass("changeMoney_items");
//         $(deadlineElements[i]).removeClass("changeDate_items");
//     }

//     // 根據期數為相關元素添加背景顏色
//     if (periodNumValue) {
//         for (let j = 0; j < periodNumValue; j++) {
//             $(labelReceiptElements[j]).addClass(pinkBG);
//             $(labelInstallmentAmountElements[j]).addClass(pinkBG);
//             $(labelDeadlineElements[j]).addClass(pinkBG);

//             $(receiptNumElements[j]).addClass("changeInput_items");
//             $(installmentAmountElements[j]).addClass("changeMoney_items");
//             $(deadlineElements[j]).addClass("changeDate_items");
//         }
//     }
//     CustomInputHandlers.init();

// }

// // 函式 - 計算建議金額並更新顯示
// function updateInstallmentAmounts(period, rate) {
//     const amount = (rate * 12) / period;
//     installmentAmountElements.forEach((el, index) => {
//         if (index < period) {
//             $(el).text(amount.toLocaleString());
//         } else {
//             $(el).text(''); // 清空不顯示的元素
//         }
//     });
// }
// 同步培育室已配置 / 新配置燈箱 顯示資料
// $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
// $('#cultivation_adminNote').addClass("changeInput_items");
// $('#cultivation_startDate, #cultivation_endDate').addClass("changeDate_items");
// $('#cultivation_rate').addClass("changeMoney_items");
// $('#cultivation_uniformNum').addClass("changeUniformNum_items");
// $('#cultivation_squareMeters').addClass("changeDecimal_items");
// $('#cultivation_period').addClass("changeSelect_items");
// $('#cultivation_deleteData, #cultivation_reminder').addClass('d-none');

//     let button = $(event.relatedTarget);
//     let catchId = String(button.data('id'));
//     // console.log('roomId 1 :', catchId);
//     console.log('substringId:', catchId.substring(0, 4));
//     let thisRoomId = "";
//     switch (catchId.substring(0, 4)) {
//         case 'now_':
//             thisRoomId = catchId.substring(4);
//             break
//         case 'def_':
//             thisRoomId = catchId.substring(4);
//             break
//         default:
//             thisRoomId = catchId.substring(5);
//             break
//     }
//     // const roomId = catchId.substring(4);
//     console.log('thisRoomId:', thisRoomId);
//     let roomData = dataset_confirmPaymentCultivationRoom.find(r => r.roomId == thisRoomId);
//     let periodNumValue = ""; // 不直接用數字是因為若要帶入資料會是字串，要轉

//     const receiptNumElements = ['#cultivation_receiptNum1', '#cultivation_receiptNum2', '#cultivation_receiptNum3', '#cultivation_receiptNum4'];
//     const deadlineElements = ['#cultivation_deadline1', '#cultivation_deadline2', '#cultivation_deadline3', '#cultivation_deadline4'];
//     const labelReceiptElements = ['#cultivation_label_receiptNum1', '#cultivation_label_receiptNum2', '#cultivation_label_receiptNum3', '#cultivation_label_receiptNum4'];
//     const labelDeadlineElements = ['#cultivation_label_deadline1', '#cultivation_label_deadline2', '#cultivation_label_deadline3', '#cultivation_label_deadline4'];
//     const labelInstallmentAmountElements = ['#cultivation_label_installmentAmount1', '#cultivation_label_installmentAmount2', '#cultivation_label_installmentAmount3', '#cultivation_label_installmentAmount4'];
//     const installmentAmountElements = ['#cultivation_installmentAmount1', '#cultivation_installmentAmount2', '#cultivation_installmentAmount3', '#cultivation_installmentAmount4'];
//     const pinkBG = "pinkBG";
//     const grayBG = "grayBG";

//     // ===== 配燈箱資料 =====
//     if (roomData) {
//         $('#cultivation_building').text(roomData.building);
//         $('#cultivation_room').text(roomData.room);

//         if (catchId.startsWith('now_')) { // 表示為這一期
//             if (roomData.now.id) {
//                 $('#cultivation_deleteData, #cultivation_reminder').removeClass('d-none');
//             }

//             if (roomData.now.amount) {
//                 $('#cultivation_rate').text(roomData.now.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。
//             } else {
//                 $('#cultivation_rate').text(roomData.defaultAmount);
//             }

//             $('#cultivation_squareMeters').text(roomData.now.squareMeters);
//             $('#cultivation_startDate').text(roomData.now.startDate);
//             $('#cultivation_endDate').text(roomData.now.endDate);

//             if (roomData.now.period) {
//                 $('#cultivation_period').text(roomData.now.period);
//                 periodNumValue = roomData.now.period;
//             } else {
//                 $('#cultivation_period').text("1");
//                 periodNumValue = "1";
//             }

//             $('#cultivation_companyName').text(roomData.now.company);
//             $('#cultivation_uniformNum').text(roomData.now.uniformNum);
//             $('#cultivation_responsiblePerson').text(roomData.now.responsiblePerson);

//             $('#cultivation_companyEmail').text(roomData.now.companyEmail);
//             $('#cultivation_contactPerson').text(roomData.now.contactPerson);
//             $('#cultivation_companyPhone').text(roomData.now.companyPhone);

//             $('#cultivation_deadline1').text(roomData.now.deadline1);
//             $('#cultivation_deadline2').text(roomData.now.deadline2);
//             $('#cultivation_deadline3').text(roomData.now.deadline3);
//             $('#cultivation_deadline4').text(roomData.now.deadline4);

//             let thisPeriodNum = parseInt(periodNumValue, 10);
//             if (roomData.now.receivableAmount1) {
//                 $('#cultivation_installmentAmount1').text(roomData.now.receivableAmount1);
//             }

//             if (roomData.now.receivableAmount2 && thisPeriodNum >= 2) {
//                 $('#cultivation_installmentAmount2').text(roomData.now.receivableAmount2);
//             }

//             if (roomData.now.receivableAmount3 && thisPeriodNum >= 3) {
//                 $('#cultivation_installmentAmount3').text(roomData.now.receivableAmount3);
//             }

//             if (roomData.now.receivableAmount4 && thisPeriodNum == 4) {
//                 $('#cultivation_installmentAmount4').text(roomData.now.receivableAmount4);
//             }

//             $('#cultivation_receiptNum1').text(roomData.now.receiptNum1);
//             $('#cultivation_receiptNum2').text(roomData.now.receiptNum2);
//             $('#cultivation_receiptNum3').text(roomData.now.receiptNum3);
//             $('#cultivation_receiptNum4').text(roomData.now.receiptNum4);

//             $('#cultivation_receivedDate1').text(roomData.now.receivedDate1);
//             $('#cultivation_receivedDate2').text(roomData.now.receivedDate2);
//             $('#cultivation_receivedDate3').text(roomData.now.receivedDate3);
//             $('#cultivation_receivedDate4').text(roomData.now.receivedDate4);

//             $('#cultivation_adminNote').text(roomData.now.adminNote);

//         } else if (catchId.startsWith('next_')) { // 表示為下一期
//             if (roomData.next.id) {
//                 $('#cultivation_deleteData, #cultivation_reminder').removeClass('d-none');
//             }

//             if (roomData.next.amount) {
//                 $('#cultivation_rate').text(roomData.next.amount); // 修改金額不會回存培育室預設的數字，避免兩個期數不同價格，資料庫混亂。
//             } else {
//                 $('#cultivation_rate').text(roomData.defaultAmount);
//             }
//             $('#cultivation_squareMeters').text(roomData.next.squareMeters);

//             $('#cultivation_startDate').text(roomData.next.startDate);
//             $('#cultivation_endDate').text(roomData.next.endDate);

//             if (roomData.next.period) {
//                 $('#cultivation_period').text(roomData.next.period);
//                 periodNumValue = roomData.next.period;
//             } else {
//                 $('#cultivation_period').text("1");
//                 periodNumValue = "1";
//             }

//             $('#cultivation_companyName').text(roomData.next.company);
//             $('#cultivation_uniformNum').text(roomData.next.uniformNum);
//             $('#cultivation_responsiblePerson').text(roomData.next.responsiblePerson);

//             $('#cultivation_companyEmail').text(roomData.next.companyEmail);
//             $('#cultivation_contactPerson').text(roomData.next.contactPerson);
//             $('#cultivation_companyPhone').text(roomData.next.companyPhone);

//             $('#cultivation_deadline1').text(roomData.next.deadline1);
//             $('#cultivation_deadline2').text(roomData.next.deadline2);
//             $('#cultivation_deadline3').text(roomData.next.deadline3);
//             $('#cultivation_deadline4').text(roomData.next.deadline4);

//             // console.log("periodNumValue", periodNumValue);
//             let periodNum = parseInt(periodNumValue, 10);
//             // let rate = parseFloat($('#cultivation_rate').text().replace(/,/g, ''));
//             if (roomData.next.receivableAmount1) {
//                 $('#cultivation_installmentAmount1').text(roomData.next.receivableAmount1);
//             }

//             if (roomData.next.receivableAmount2 && periodNum >= 2) {
//                 $('#cultivation_installmentAmount2').text(roomData.next.receivableAmount2);
//             }

//             if (roomData.next.receivableAmount3 && periodNum >= 3) {
//                 $('#cultivation_installmentAmount3').text(roomData.next.receivableAmount3);
//             }

//             if (roomData.next.receivableAmount4 && periodNum == 4) {
//                 $('#cultivation_installmentAmount4').text(roomData.next.receivableAmount4);
//             }

//             $('#cultivation_receiptNum1').text(roomData.next.receiptNum1);
//             $('#cultivation_receiptNum2').text(roomData.next.receiptNum2);
//             $('#cultivation_receiptNum3').text(roomData.next.receiptNum3);
//             $('#cultivation_receiptNum4').text(roomData.next.receiptNum4);

//             $('#cultivation_receivedDate1').text(roomData.next.receivedDate1);
//             $('#cultivation_receivedDate2').text(roomData.next.receivedDate2);
//             $('#cultivation_receivedDate3').text(roomData.next.receivedDate3);
//             $('#cultivation_receivedDate4').text(roomData.next.receivedDate4);

//             $('#cultivation_adminNote').text(roomData.next.adminNote);
//         } else { // 表示為預設
//             $('#cultivation_deleteData, #cultivation_reminder').addClass('d-none');
//             periodNumValue = "1";

//             // 今日
//             let today = new Date();
//             // 計算明日
//             let tomorrow = new Date();
//             tomorrow.setDate(today.getDate() + 1);
//             // 計算一年後的日期
//             let nextYear = new Date();
//             nextYear.setFullYear(today.getFullYear() + 1);
//             // 函式 - 格式化日期為 yyyy-MM-dd
//             function formatDate(date) {
//                 let year = date.getFullYear();
//                 let month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份補零
//                 let day = date.getDate().toString().padStart(2, '0'); // 天數補零
//                 return `${year}-${month}-${day}`;
//             }

//             $('#cultivation_squareMeters').text(roomData.defaultSquareMeters);
//             $('#cultivation_rate').text(roomData.defaultAmount);

//             // 預設起為明日，迄為明日的一年後
//             $('#cultivation_startDate').text(formatDate(tomorrow));
//             $('#cultivation_endDate').text(formatDate(nextYear));
//             $('#cultivation_period').text("1");

//             $('#cultivation_companyName').text('');
//             $('#cultivation_uniformNum').text('');
//             $('#cultivation_responsiblePerson').text('');

//             $('#cultivation_companyEmail').text('');
//             $('#cultivation_contactPerson').text('');
//             $('#cultivation_companyPhone').text('');

//             $('#cultivation_deadline1').text('');
//             $('#cultivation_deadline2').text('');
//             $('#cultivation_deadline3').text('');
//             $('#cultivation_deadline4').text('');

//             $('#cultivation_installmentAmount1').text(roomData.now.receivableAmount1);

//             $('#cultivation_receiptNum1').text('');
//             $('#cultivation_receiptNum2').text('');
//             $('#cultivation_receiptNum3').text('');
//             $('#cultivation_receiptNum4').text('');

//             $('#cultivation_receivedDate1').text('');
//             $('#cultivation_receivedDate2').text('');
//             $('#cultivation_receivedDate3').text('');
//             $('#cultivation_receivedDate4').text('');

//             $('#cultivation_adminNote').text('');
//         }

//         updateStyles();
//         // console.log("periodNumValue", periodNumValue);
//     } else { // 表示為下一期
//         console.error('找不到相符的培育室ID:', thisRoomId);
//     }


//     function setStyles(indices) {
//         receiptNumElements.forEach((el, index) => $(el).toggleClass("changeInput_items", indices.includes(index)));
//         deadlineElements.forEach((el, index) => $(el).toggleClass("changeDate_items", indices.includes(index)));
//         installmentAmountElements.forEach((el, index) => $(el).toggleClass("changeMoney_items", indices.includes(index)));

//         [labelReceiptElements, labelDeadlineElements, labelInstallmentAmountElements].forEach((labels) => {
//             labels.forEach((el, index) => {
//                 $(el).toggleClass(pinkBG, indices.includes(index));
//                 $(el).toggleClass(grayBG, !indices.includes(index));
//             });
//         });
//     }

//     // 函式 - 計算建議金額並更新顯示
//     function updateInstallmentAmounts(period, rate) {
//         const amount = (rate * 12) / period;
//         installmentAmountElements.forEach((el, index) => {
//             if (index < period) {
//                 $(el).text(amount.toLocaleString());
//             } else {
//                 $(el).text(''); // 清空不顯示的元素
//             }
//         });
//     }

//     // 函式 - 依分期數 調用 設定樣式的函式
//     function updateStyles() {
//         CustomInputHandlers.destroy();
//         console.log("updateStyles periodNumValue", periodNumValue);
//         const periodNum = parseInt(periodNumValue, 10);
//         console.log("updateStyles periodNum", periodNum);
//         const rate = parseFloat($('#cultivation_rate').text().replace(/,/g, '')); // 去掉千分位符號並轉為數字
//         if (isNaN(rate)) return; // 確保 rate 是有效數字

//         const indices = Array.from({ length: periodNum }, (_, i) => i); // 生成從 0 到 periodNum - 1 的數組
//         setStyles(indices); // 設定樣式
//         console.log("updateStyles 設定樣式", indices);
//         updateInstallmentAmounts(periodNum, rate); // 計算建議金額並更新顯示

//         CustomInputHandlers.init();
//     }

//     // 函式 - 用 MutationObserver 監聽 分期數 #cultivation_period 和 月租額 #cultivation_rate 的變化，回乎指定函式
//     function observeElementChanges(targetNode, callback) {
//         const observer = new MutationObserver(callback);
//         observer.observe(targetNode, { childList: true, subtree: true, characterData: true });
//     }

//     // 調用監聽函式 並指定回呼 設定樣式的函式
//     observeElementChanges(document.getElementById('cultivation_period'), updateStyles);
//     observeElementChanges(document.getElementById('cultivation_rate'), updateStyles);

// $('#cultivation_updateBtn').off('click');
// 初始要調用一次
// updateStyles();

// ===== 調整必填顯示 END =====

// $('#cultivation_updateBtn').off('click');
// $('#cultivation_updateBtn').on('click', function () {
//     console.log('roomId 2 :', roomThisId); // 確認 roomId 是否正確獲取
//     // 清除上次的資料
//     updatedData = {};
//     // 獲取所有欄位的目前值
//     updatedData.id = roomThisId; // 後端再依照id是否有_N判斷為要修改原紀錄還是新增一筆配置紀錄
//     updatedData.contactPerson = $('#cultivation_squareMeters').text();

//     updatedData.startDate = $('#cultivation_startDate').text();
//     updatedData.endDate = $('#cultivation_endDate').text();
//     updatedData.amount = $('#cultivation_rate').text();

//     updatedData.uniformNum = $('#cultivation_uniformNum').text();

//     updatedData.deadline1 = $('#cultivation_deadline1').text();
//     updatedData.deadline2 = $('#cultivation_deadline2').text();
//     updatedData.deadline3 = $('#cultivation_deadline3').text();
//     updatedData.deadline4 = $('#cultivation_deadline4').text();

//     updatedData.receiptNum1 = $('#cultivation_receiptNum1').text();
//     updatedData.receiptNum2 = $('#cultivation_receiptNum2').text();
//     updatedData.receiptNum3 = $('#cultivation_receiptNum3').text();
//     updatedData.receiptNum4 = $('#cultivation_receiptNum4').text();

//     updatedData.adminNote = $('#cultivation_adminNote').text();

//     console.log(updatedData);

//     // 將更新的資料送到後端
//     // $.ajax({
//     //     url: '您的後端URL', // 替換成您的後端接收更新請求的URL
//     //     type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
//     //     contentType: 'application/json',
//     //     data: JSON.stringify(updatedData),
//     //     success: function (response) {
//     //         // 處理成功回應
//     //         console.log('更新成功:', response);
//     //         // 根據需要執行其他操作，例如顯示成功訊息
//     //     },
//     //     error: function (xhr, status, error) {
//     //         // 處理錯誤情況
//     //         console.error('更新失敗:', error);
//     //         // 根據需要顯示錯誤訊息或執行其他操作
//     //     }
//     // });
// });

//     // // 解除先前綁定的點擊事件，不設定會造成重複傳遞先前點擊過的資料。
//     // $('#cultivation_deleteData').off('click');
//     // $('#cultivation_deleteData').on('click', function () {

//     //     // 清除上次的資料
//     //     deleteData = {};
//     //     // 獲取所有欄位的目前值
//     //     deleteData.id = roomThisId;
//     //     swalConfirm(
//     //         '確定要刪除嗎？',
//     //         '是啊，這個沒用了...',
//     //         '不要阿 ~ 我是誤按！！',
//     //         function () {
//     //             // YES按鈕點擊後傳遞deleteData id至後端
//     //             console.log(deleteData);
//     //         })
//     // });
//     console.log('*****資料結束****');
// });





// // 函式 - 依分期數 調用 設定樣式的函式
// function updateStyles() {
//     // console.log("updateStyles periodNumValue", periodNumValue);
//     const periodNum = parseInt(periodNumValue, 10);
//     // console.log("updateStyles periodNum", periodNum);
//     // const rate = parseFloat($('#cultivation_rate').text().replace(/,/g, '')); // 去掉千分位符號並轉為數字
//     if (isNaN(rateNum)) return; // 確保 rate 是有效數字

//     CustomInputHandlers.destroy();
//     resetStyles();
//     applyBackgroundColors(periodNumValue);
//     // const indices = Array.from({ length: periodNum }, (_, i) => i); // 生成從 0 到 periodNum - 1 的數組
//     // setStyles(indices); // 設定樣式
//     // console.log("updateStyles 設定樣式", indices);
//     updateInstallmentAmounts(thisPeriodNum, rateNum);// 計算建議金額並更新顯示

//     CustomInputHandlers.init();
// }

// // 函式 - 用 MutationObserver 監聽 分期數 #cultivation_period 和 月租額 #cultivation_rate 的變化，回乎指定函式
// function observeElementChanges(targetNode, callback) {
//     const observer = new MutationObserver(callback);
//     observer.observe(targetNode, { childList: true, subtree: true, characterData: true });
// }

// // 調用監聽函式 並指定回呼 設定樣式的函式
// observeElementChanges(document.getElementById('cultivation_period'), updateStyles);
// observeElementChanges(document.getElementById('cultivation_rate'), updateStyles);



// 函式 - 更新分期付款金額顯示
// function updateInstallmentAmounts(period, rate) {
//     const amount = (rate * 12) / period; // 根據期數計算每期應收金額
//     installmentAmountElements.forEach((el, index) => {
//         const receivableAmount = parseFloat(currentData[`receivableAmount${index + 1}`]); // 檢查 currentData 是否有應收金額
//         if (!isNaN(receivableAmount) && index < period) {
//             $(el).text(receivableAmount.toLocaleString()); // 如果有值，顯示 currentData 的值
//         } else if (index < period) {
//             $(el).text(amount.toLocaleString()); // 否則顯示計算出的金額
//         } else {
//             $(el).text(''); // 超過期數的部分顯示為空白
//         }
//     });
// }

// 函式 - 更新分期付款金額顯示
// function updateInstallmentAmounts(period, rate) {
//     const amount = (rate * 12) / period; // 根據期數計算每期應收金額
//     installmentAmountElements.forEach((el, index) => {
//         $(el).text(index < period ? amount.toLocaleString() : '');
//     });
// }

// // 函式 - 計算建議金額並更新顯示
// function updateInstallmentAmounts(period, rate) {
//     const amount = (rate * 12) / period;
//     installmentAmountElements.forEach((el, index) => {
//         $(el).text(index < period ? amount.toLocaleString() : '');
//     });
// }

// // 函式 - 清理樣式
// function resetStyles() {
//     labelReceiptElements.forEach((el, index) => {
//         $(el).removeClass(pinkBG).removeClass(grayBG);
//         $(labelInstallmentAmountElements[index]).removeClass(pinkBG).removeClass(grayBG);
//         $(labelDeadlineElements[index]).removeClass(pinkBG).removeClass(grayBG);
//         $(receiptNumElements[index]).removeClass("changeInput_items");
//         $(installmentAmountElements[index]).removeClass("changeMoney_items");
//         $(deadlineElements[index]).removeClass("changeDate_items");
//     });
// }

// // 函式 - 為元素添加背景顏色
// function applyBackgroundColors(periodNum) {
//     for (let j = 0; j < periodNum; j++) {
//         $(labelReceiptElements[j]).addClass(pinkBG);
//         $(labelInstallmentAmountElements[j]).addClass(pinkBG);
//         $(labelDeadlineElements[j]).addClass(pinkBG);
//         $(receiptNumElements[j]).addClass("changeInput_items");
//         $(installmentAmountElements[j]).addClass("changeMoney_items");
//         $(deadlineElements[j]).addClass("changeDate_items");
//     }
// }

// // 定義監聽 DOM 內容變化的函式
// function observeContentChanges(elementId, callback) {
//     const targetNode = document.querySelector(elementId);
//     if (!targetNode) return;

//     const config = { childList: true, subtree: true, characterData: true };

//     const observer = new MutationObserver((mutationsList) => {
//         for (let mutation of mutationsList) {
//             if (mutation.type === 'childList' || mutation.type === 'characterData') {
//                 callback();
//                 break;
//             }
//         }
//     });

//     observer.observe(targetNode, config);
//     return observer; // 可以根據需要返回 observer 以便後續管理
// }

// // 監聽到 period 和 rate 改變後要執行的函式
// function handleContentChange() {
//     CustomInputHandlers.destroy();
//     const period = parseInt($('#cultivation_period').text(), 10);
//     const rate = parseFloat($('#cultivation_rate').text().replace(/,/g, ''));

//     if (!isNaN(period) && !isNaN(rate)) {
//         resetStyles();
//         updateInstallmentAmounts(period, rate);
//         applyBackgroundColors(period);
//     }
//     CustomInputHandlers.init();
// }

// // 監聽 period 和 rate 的內容變化
// observeContentChanges('#cultivation_period', handleContentChange);
// observeContentChanges('#cultivation_rate', handleContentChange);

// data: 'deadline1', title: "階段&#10102;", // 4
// render: function (data, type, row) {
//     const receivedDate1 = row.receivedDate1;
//     const today = new Date();
//     const dataDate = new Date(data);
//     if (!receivedDate1) {
//         if (data) {
//             if (dataDate < today) {
//                 return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             } else {
//                 return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             }
//         } else {
//             return '-';
//         }
//     } else {
//         return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate1 + '</span>';
//     }
// if (!receivedDate1) {
//     if (data) {
//         return '<i class="fa-regular fa-calendar-days"></i> ' + data;
//     } else {
//         return '-';
//     }
// } else {
//     return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate1;
// }
// }

// if (!receivedDate2) {
//     if (data) {
//         return '<i class="fa-regular fa-calendar-days"></i> ' + data;
//     } else {
//         return '-';
//     }
// } else {
//     return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate2;
// }

// data: 'company', title: "承租公司", // 3
// render: function (data) {
//     if (data === null || data == '') {
//         return '-';
//     } else {
//         return data;
//     }
// }
// data: 'deadline2', title: "階段&#10103;", // 5
// render: function (data, type, row) {
//     const receivedDate2 = row.receivedDate2;
//     const today = new Date();
//     const dataDate = new Date(data);
//     if (!receivedDate2) {
//         if (data) {
//             if (dataDate < today) {
//                 return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             } else {
//                 return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             }
//         } else {
//             return '-';
//         }
//     } else {
//         return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate2 + '</span>';
//     }
// }
// data: 'deadline3', title: "階段&#10104;", // 6
// render: function (data, type, row) {
//     const receivedDate3 = row.receivedDate3;
//     const today = new Date();
//     const dataDate = new Date(data);
//     if (!receivedDate3) {
//         if (data) {
//             if (dataDate < today) {
//                 return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             } else {
//                 return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//             }
//         } else {
//             return '-';
//         }
//     } else {
//         return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate3 + '</span>';
//     }
//     // if (!receivedDate3) {
//     //     if (data) {
//     //         return '<i class="fa-regular fa-calendar-days"></i> ' + data;
//     //     } else {
//     //         return '-';
//     //     }
//     // } else {
//     //     return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate3;
//     // }
// }
// data: 'deadline4', title: "階段&#10105;", // 7
//     render: function (data, type, row) {
//         const receivedDate4 = row.receivedDate4;
//         // if (!receivedDate4) {
//         //     if (data) {
//         //         return '<i class="fa-regular fa-calendar-days"></i> ' + data;
//         //     } else {
//         //         return '-';
//         //     }
//         // } else {
//         //     return '<i class="fa-solid fa-sack-dollar"></i> ' + receivedDate4;
//         // }
//         const today = new Date();
//         const dataDate = new Date(data);
//         if (!receivedDate4) {
//             if (data) {
//                 if (dataDate < today) {
//                     return '<span class="text-danger"><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                 } else {
//                     return '<span><i class="fa-regular fa-calendar-days"></i> ' + data + '</span>';
//                 }
//             } else {
//                 return '-';
//             }
//         } else {
//             return '<span><i class="fa-solid fa-sack-dollar"></i> ' + receivedDate4 + '</span>';
//         }
//     }
// data: 'id', title: "操作", // 8
// render: function (data, type, row) {
//     const company = row.company;
//     const psId = row.psId;
//     if (!company) {
//         return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + psId + '_N" title="配置進駐廠商"><i class="fa-regular fa-keyboard"></i>';
//     } else {
//         return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + data + '" title="修改"><i class="fa-solid fa-wrench"></i>';
//     }
// }

// data: 'id', title: "下期", // 9
// render: function (data, type, row) {
//     const psId = row.psId;
//     if (row.company) {
//         return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentParkingSpaceModel" data-id="' + psId + '_N" title="配置下期進駐廠商"><i class="fa-regular fa-keyboard"></i>';
//     }
//     return '';
// }