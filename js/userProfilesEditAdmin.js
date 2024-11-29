var dataset_userList = [

    {
        'id': '1',
        'name': "南方科技有限公司",
        'createDate': "2024-07-25",
        'userId': "23456780",
        'type': "培育廠商",
        'editBy': "張小麵",
        'status': "啟用",

        'companyDetails': {
            'id':'1',
            'companyDescription': "專業提供高科技產品製造與銷售",
            'uniformNum': "23456780",
            'creationDate': "2010-12-03",
            'capitalAmount': "5,678,000",
            'employeesNum': "120",
            'responsiblePerson': "王大明",
            'referrer': "李小美",
            'phone': "02-87654321",
            'companyEmail': "abc@gmail.com",
            'lineId': "nftech123",
            'contactPerson': "張小華",
            'ext': "1234",
            'jobTitle': "製造總監",
            'companyAdd': "台北市中山區中山北路100號",
            'locationOfCompany': "台北市信義區信義路200號",
            'helpItems': "提升製造效率、品質控制",
            'tutoringProfessor': '黃飛鴻',
            'nurtureProgram': '中國傳統武術發揚光大',
            'adminNoteWithCompany': '副業：十三姨古典洋裝',
            'companyProof': "20240926095207_CP2.pdf",
            'businessProof': "20240829163435_BP1.pdf",
            'memoOfCooperation': "20240829163435_MOC1.pdf",
            'planConcept': "20240829163435_PC1.pdf",
            'entryForm': "20240829163435_EF1.pdf",
            'consentDoc': "20240829163435_CD1.pdf",
            'payProof': "20240829163435_PP1.pdf",

        },
        'entryContract': [
            {
                'FEC_Id' : "1",
                'FEC_FileName' : "20241126140126_EC1.pdf",
                'FEC_Note' : "20241126"
            },
            {
                'FEC_Id' : "2",
                'FEC_FileName' : "20241126140127_EC1.pdf",
                'FEC_Note' : "20241127"
            },
        ]
    },

    //     {
    //         'id': '21',
    //         'createDate': "2024-04-25",
    //         'name': "王小明",
    //         'userId': "abc@gmail.com",
    //         'type': "個人",
    //         'editBy': "-",
    //         'adminNote': '2024-07-31到職',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '2',
    //         'createDate': "2011-06-30",
    //         'name': "東方電子股份有限公司",
    //         'userId': "83456780",
    //         'type': "培育廠商",
    //         'editBy': "李小包",

    //         'companyDescription': "專業從事電子產品設計與製造",
    //         'creationDate': "2005-04-15",
    //         'capitalAmount': "12,345,000",
    //         'employeesNum': "300",
    //         'responsiblePerson': "陳小明",
    //         'referrer': "王大力",
    //         'phone': "02-86543210",
    //         'lineId': "eastern123",
    //         'contactPerson': "林小玲",
    //         'ext': "5678",
    //         'jobTitle': "研發總監",
    //         'companyAdd': "新北市板橋區文化路300號",
    //         'locationOfCompany': "新北市新店區中正路500號",
    //         'helpItems': "產品設計、市場拓展",
    //         'companyProof': "2024010102A1.pdf",
    //         'memoUpload': "2024010102B1.pdf",
    //         'consentDoc': "2024010102C1.pdf",
    //         'businessProof': "2024010102D1.pdf",
    //         'planUpload': "2024010102E1.pdf",
    //         'entryForm': "2024010102F1.pdf",
    //         'companyEmail': "bcd@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "停用",
    //     },
    //     {
    //         'id': '23',
    //         'createDate': "2012-03-29",
    //         'name': "孫小美",
    //         'userId': "efg@gmail.com",
    //         'type': "神秘客",
    //         'status': "停用",
    //         'editBy': "-",
    //         'adminNote': '2011-07-31到職',
    //     },
    //     {
    //         'id': '3',
    //         'createDate': "2009-01-12",
    //         'name': "中華服飾有限公司",
    //         'type': "培育廠商",
    //         'userId': "53456780",
    //         'editBy': "周小吐",

    //         'companyDescription': "專業生產高質素服飾產品",
    //         'creationDate': "2001-11-20",
    //         'capitalAmount': "8,900,000",
    //         'employeesNum': "250",
    //         'responsiblePerson': "張小華",
    //         'referrer': "李小美",
    //         'phone': "02-81234567",
    //         'lineId': "zhonghua456",
    //         'contactPerson': "王大志",
    //         'ext': "4321",
    //         'jobTitle': "行銷經理",
    //         'companyAdd': "台中市西區民權路700號",
    //         'locationOfCompany': "台中市北區三民路800號",
    //         'helpItems': "市場拓展、品牌建立",
    //         'companyProof': "2024010103A1.pdf",
    //         'memoUpload': "2024010103B1.pdf",
    //         'consentDoc': "2024010103C1.pdf",
    //         'businessProof': "2024010103D1.pdf",
    //         'planUpload': "2024010103E1.pdf",
    //         'entryForm': "2024010103F1.pdf",
    //         'companyEmail': "cde@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '4',
    //         'createDate': "2012-03-29",
    //         'name': "星際科技股份有限公司",
    //         'type': "培育廠商",
    //         'userId': "63456780",
    //         'editBy': "藍小司",

    //         'companyDescription': "專業提供航太科技產品解決方案",
    //         'creationDate': "2007-08-10",
    //         'capitalAmount': "15,600,000",
    //         'employeesNum': "180",
    //         'responsiblePerson': "劉大同",
    //         'referrer': "林小美",
    //         'phone': "02-80123456",
    //         'lineId': "stellar789",
    //         'contactPerson': "陳小菁",
    //         'ext': "6789",
    //         'jobTitle': "技術總監",
    //         'companyAdd': "台南市東區東門路900號",
    //         'locationOfCompany': "台南市南區南門路1000號",
    //         'helpItems': "技術開發、市場推廣",
    //         'companyProof': "2024010104A1.pdf",
    //         'memoUpload': "2024010104B1.pdf",
    //         'consentDoc': "2024010104C1.pdf",
    //         'businessProof': "2024010104D1.pdf",
    //         'planUpload': "2024010104E1.pdf",
    //         'entryForm': "2024010104F1.pdf",
    //         'companyEmail': "def@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '5',
    //         'createDate': "2008-11-28",
    //         'name': "綠意生活有限公司",
    //         'type': "培育廠商",
    //         'userId': "83456780",
    //         'editBy': "-",

    //         'companyDescription': "專業提供生態友善產品與服務",
    //         'creationDate': "2004-05-06",
    //         'capitalAmount': "6,700,000",
    //         'employeesNum': "150",
    //         'responsiblePerson': "林小明",
    //         'referrer': "-",
    //         'phone': "02-87891234",
    //         'lineId': "greenlife234",
    //         'contactPerson': "陳小華",
    //         'ext': "8901",
    //         'jobTitle': "營運經理",
    //         'companyAdd': "桃園市中壢區中正路1100號",
    //         'locationOfCompany': "桃園市龜山區文化路1200號",
    //         'helpItems': "生態保護計畫、社會企業發展",
    //         'companyProof': "2024010105A1.pdf",
    //         'memoUpload': "2024010105B1.pdf",
    //         'consentDoc': "2024010105C1.pdf",
    //         'businessProof': "2024010105D1.pdf",
    //         'planUpload': "2024010105E1.pdf",
    //         'entryForm': "2024010105F1.pdf",
    //         'companyEmail': "efg@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "停用",
    //     },
    //     {
    //         'id': '6',
    //         'createDate': "2022-10-15",
    //         'name': "晟霖實業股份有限公司",
    //         'type': "培育廠商",
    //         'userId': "63456780",
    //         'editBy': "-",

    //         'companyDescription': "專精於工業機械設備製造與銷售",
    //         'creationDate': "1998-04-20",
    //         'capitalAmount': "1,230,000",
    //         'employeesNum': "268",
    //         'responsiblePerson': "陳明華",
    //         'referrer': "蔡佳玲",
    //         'phone': "02-86712345",
    //         'lineId': "shenglin123",
    //         'contactPerson': "林美玲",
    //         'ext': "1234",
    //         'jobTitle': "行政經理",
    //         'companyAdd': "台北市中山區復興北路100號",
    //         'locationOfCompany': "台北市信義區忠孝東路四段200號",
    //         'helpItems': "生產製造流程優化",
    //         'companyProof': "2024010101A1.pdf",
    //         'memoUpload': "2024010101B1.pdf",
    //         'consentDoc': "2024010101C1.pdf",
    //         'businessProof': "2024010101D1.pdf",
    //         'planUpload': "2024010101E1.pdf",
    //         'entryForm': "2024010101F1.pdf",
    //         'companyEmail': "fgh@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '7',
    //         'createDate': "2022-03-20",
    //         'name': "德昌企業有限公司",
    //         'type': "培育廠商",
    //         'userId': "63453780",
    //         'editBy': "-",

    //         'companyDescription': "專業提供電子零件設計與製造服務",
    //         'creationDate': "2005-09-12",
    //         'capitalAmount': "980,000",
    //         'employeesNum': "153",
    //         'responsiblePerson': "王大明",
    //         'referrer': "張小芳",
    //         'phone': "02-86723456",
    //         'lineId': "techcorp456",
    //         'contactPerson': "張美麗",
    //         'ext': "5678",
    //         'jobTitle': "技術總監",
    //         'companyAdd': "台北市南港區園區二路75號",
    //         'locationOfCompany': "新北市中和區民富街三段90號",
    //         'helpItems': "新產品開發與市場推廣",
    //         'companyProof': "2024010102A1.pdf",
    //         'memoUpload': "2024010102B1.pdf",
    //         'consentDoc': "2024010102C1.pdf",
    //         'businessProof': "2024010102D1.pdf",
    //         'planUpload': "2024010102E1.pdf",
    //         'entryForm': "2024010102F1.pdf",
    //         'companyEmail': "ghi@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '8',
    //         'createDate': "2023-05-12",
    //         'name': "嘉強貿易股份有限公司",
    //         'type': "培育廠商",
    //         'userId': "63456780",
    //         'editBy': "-",

    //         'companyDescription': "專注於進口與銷售高品質農產品",
    //         'creationDate': "2010-11-28",
    //         'capitalAmount': "750,000",
    //         'employeesNum': "87",
    //         'responsiblePerson': "黃小強",
    //         'referrer': "吳美惠",
    //         'phone': "02-86734567",
    //         'lineId': "strongtrade67",
    //         'contactPerson': "吳美玲",
    //         'ext': "6789",
    //         'jobTitle': "市場經理",
    //         'companyAdd': "台北市大安區仁愛路三段150號",
    //         'locationOfCompany': "新北市板橋區文化路一段200號",
    //         'helpItems': "市場拓展與品牌推廣",
    //         'companyProof': "2024010103A1.pdf",
    //         'memoUpload': "2024010103B1.pdf",
    //         'consentDoc': "2024010103C1.pdf",
    //         'businessProof': "2024010103D1.pdf",
    //         'planUpload': "2024010103E1.pdf",
    //         'entryForm': "2024010103F1.pdf",
    //         'companyEmail': "hij@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '9',
    //         'createDate': "2024-02-28",
    //         'name': "百傑科技有限公司",
    //         'type': "培育廠商",
    //         'userId': "63443780",
    //         'editBy': "-",

    //         'companyDescription': "專業提供IT解決方案及服務",
    //         'creationDate': "2013-08-05",
    //         'capitalAmount': "1,500,000",
    //         'employeesNum': "312",
    //         'responsiblePerson': "劉文傑",
    //         'referrer': "張美玲",
    //         'phone': "02-86745678",
    //         'lineId': "besttech78",
    //         'contactPerson': "張小華",
    //         'ext': "3456",
    //         'jobTitle': "營運總監",
    //         'companyAdd': "台北市中正區羅斯福路一段50號",
    //         'locationOfCompany': "新北市新店區安和路二段300號",
    //         'helpItems': "系統開發與IT架構設計",
    //         'companyProof': "2024010104A1.pdf",
    //         'memoUpload': "2024010104B1.pdf",
    //         'consentDoc': "2024010104C1.pdf",
    //         'businessProof': "2024010104D1.pdf",
    //         'planUpload': "2024010104E1.pdf",
    //         'entryForm': "2024010104F1.pdf",
    //         'companyEmail': "ijk@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '10',
    //         'createDate': "2023-11-10",
    //         'name': "全新文創有限公司",
    //         'type': "培育廠商",
    //         'userId': "22443780",
    //         'editBy': "-",

    //         'companyDescription': "專注於文化創意產品開發與設計",
    //         'creationDate': "2018-06-22",
    //         'capitalAmount': "480,000",
    //         'employeesNum': "45",
    //         'responsiblePerson': "陳美惠",
    //         'referrer': "王小明",
    //         'phone': "02-86756789",
    //         'lineId': "creativexyz89",
    //         'contactPerson': "王大春",
    //         'ext': "4567",
    //         'jobTitle': "設計總監",
    //         'companyAdd': "台北市中山區民生東路三段80號",
    //         'locationOfCompany': "新北市三重區重新路四段500號",
    //         'helpItems': "產品設計與品牌推廣",
    //         'companyProof': "2024010105A1.pdf",
    //         'memoUpload': "2024010105B1.pdf",
    //         'consentDoc': "2024010105C1.pdf",
    //         'businessProof': "2024010105D1.pdf",
    //         'planUpload': "2024010105E1.pdf",
    //         'entryForm': "2024010105F1.pdf",
    //         'companyEmail': "jkl@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '11',
    //         'createDate': "2024-01-18",
    //         'name': "宏達國際有限公司",
    //         'type': "培育廠商",
    //         'userId': "52443780",
    //         'editBy': "-",

    //         'companyDescription': "專注於智慧型手機與通訊設備開發與製造",
    //         'creationDate': "2000-07-10",
    //         'capitalAmount': "1,800,000",
    //         'employeesNum': "380",
    //         'responsiblePerson': "王大明",
    //         'referrer': "張小華",
    //         'phone': "02-86778901",
    //         'lineId': "htcmobile901",
    //         'contactPerson': "張美玲",
    //         'ext': "6789",
    //         'jobTitle': "營運總監",
    //         'companyAdd': "台北市信義區松仁路100號",
    //         'locationOfCompany': "新北市板橋區新站路一段200號",
    //         'helpItems': "市場拓展與品牌推廣",
    //         'companyProof': "2024010106A1.pdf",
    //         'memoUpload': "2024010106B1.pdf",
    //         'consentDoc': "2024010106C1.pdf",
    //         'businessProof': "2024010106D1.pdf",
    //         'planUpload': "2024010106E1.pdf",
    //         'entryForm': "2024010106F1.pdf",
    //         'companyEmail': "klm@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "啟用",
    //     },
    //     {
    //         'id': '12',
    //         'createDate': "2023-09-25",
    //         'name': "美佳科技股份有限公司",
    //         'type': "培育廠商",
    //         'userId': "11443780",
    //         'editBy': "-",

    //         'companyDescription': "專業提供多媒體播放器與數位音訊解決方案",
    //         'creationDate': "2010-03-15",
    //         'capitalAmount': "1,200,000",
    //         'employeesNum': "260",
    //         'responsiblePerson': "張小強",
    //         'referrer': "王大明",
    //         'phone': "02-86789012",
    //         'lineId': "mjktech012",
    //         'contactPerson': "王美玲",
    //         'ext': "8901",
    //         'jobTitle': "技術總監",
    //         'companyAdd': "台北市大安區敦化南路二段150號",
    //         'locationOfCompany': "新北市三重區中正北路三段300號",
    //         'helpItems': "產品技術升級與客戶支援",
    //         'companyProof': "2024010107A1.pdf",
    //         'memoUpload': "2024010107B1.pdf",
    //         'consentDoc': "2024010107C1.pdf",
    //         'businessProof': "2024010107D1.pdf",
    //         'planUpload': "2024010107E1.pdf",
    //         'entryForm': "2024010107F1.pdf",
    //         'companyEmail': "lmn@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "停用",
    //     },
    //     {
    //         'id': '13',
    //         'createDate': "2023-07-08",
    //         'name': "新光電子有限公司",
    //         'type': "培育廠商",
    //         'userId': "11445380",
    //         'editBy': "新光電子有限公司",

    //         'companyDescription': "專業從事半導體元件設計與製造",
    //         'creationDate': "2005-11-30",
    //         'capitalAmount': "1,500,000",
    //         'employeesNum': "310",
    //         'responsiblePerson': "劉小明",
    //         'referrer': "陳大勇",
    //         'phone': "02-86790123",
    //         'lineId': "sunglight123",
    //         'contactPerson': "陳美華",
    //         'ext': "9012",
    //         'jobTitle': "研發主管",
    //         'companyAdd': "台北市中山區敬業三路200號",
    //         'locationOfCompany': "新北市永和區永利路四段400號",
    //         'helpItems': "技術研發與生產效率提升",
    //         'companyProof': "2024010108A1.pdf",
    //         'memoUpload': "2024010108B1.pdf",
    //         'consentDoc': "2024010108C1.pdf",
    //         'businessProof': "2024010108D1.pdf",
    //         'planUpload': "2024010108E1.pdf",
    //         'entryForm': "2024010108F1.pdf",
    //         'companyEmail': "mno@gmail.com",
    //         'tutoringProfessor': '黃飛鴻',
    //         'nurtureProgram': '中國傳統武術發揚光大',
    //         'adminNote': '副業：十三姨古典洋裝',
    //         'status': "停用",
    //     }

];

$(function () {

    $('#accountProfilesList').DataTable({
        ...commonSettingsTable,
        "data": dataset_userList,
        "columns": [
            { data: 'createDate', title: "建立日期", }, // 0
            { data: 'name', title: "使用者", }, // 1
            { data: 'userId', title: "登入帳號", }, // 2
            { data: 'type', title: "用戶類型", }, // 3
            {
                data: 'editBy', title: "最後改動者", // 4
                render: function (data, type, row) {
                    let who = "";
                    if (row.name == data) {
                        who = '自己'
                    } else {
                        who = data
                    }
                    return who;
                }
            },
            {
                data: 'id', title: "詳情", // 5
                render: function (data, type, row) {
                    let icon = "";
                    let modelId = "";
                    let btnColor = "";
                    if (row.type === "培育廠商") {
                        icon = '<i class="fa-solid fa-briefcase"></i>'
                        modelId = 'companyDetailModal'
                        btnColor = 'info'
                    } else {
                        modelId = 'personalDetailModal'
                        btnColor = 'primary'
                        if (row.type === "神秘客") {
                            icon = '<i class="fa-solid fa-skull"></i>'
                        } else {
                            icon = '<i class="fa-solid fa-user"></i>'
                        }
                    }
                    return '<button type="button" class="btn btn-outline-' + btnColor + ' btn-sm" data-bs-toggle="modal" data-bs-target="#' + modelId + '" data-id="' + data + '">' + icon + '</button>';
                }
            },
            {
                data: 'id', title: "修改", // 6
                render: function (data, type, row) {
                    linkPage = "";
                    let btnColor = "";
                    if (row.type === "培育廠商") {
                        // linkPage = 'profilesEditCompany.html'
                        linkPage = '../CoopManuf/Edit/'
                        btnColor = 'info'
                    } else {
                        // linkPage = 'profilesEditPersonal.html'
                        linkPage = '../User/Edit/'
                        btnColor = 'primary'
                    }
                    // return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./' + linkPage + '?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>';
                    return '<a class="btn btn-outline-' + btnColor + ' rounded-circle btn-sm oneWord" href="' + linkPage + data + '"><i class="fa-solid fa-wrench"></i></a>';
                }
            },
            {
                data: 'id', title: "訪視<br class='d-none d-lg-block'>紀錄", // 7
                render: function (data, type, row) {
                    if (row.type === "培育廠商") {
                        linkPage = 'profilesEditCompany.html'
                        // return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./profilesEditCompany.htm?id=' + data + '"><i class="fa-solid fa-user-secret"></i></a>';
                        return '<a class="btn btn-outline-info rounded-circle btn-sm oneWord" href="./siteVisitReport.html?id=' + data + '"><i class="fa-solid fa-user-secret"></i></a>';
                    } else {
                        return '';
                    }
                }
            },
            { data: 'status', visible: false } // 8
        ],
        order: [[8, "desc"], [0, 'desc'], [3, 'desc'],],
        "columnDefs": [
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            { searchable: false, orderable: false, targets: [5, 6, 7] },
            { className: "text-nowrap", targets: [0, 2, 3] },
            { className: "text-lg-center", targets: [0, 3, 5, 6, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            if (data.status == '停用') {
                $('td', row).css('color', '#999');
            }
            [5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            $('td:eq(3)', row).css('max-width', '100px');
            [0, 2, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
            if (data.status == '刪除') {
                $('td', row).css({
                    'color': '#999',
                    'text-decoration': 'line-through' // 加上刪除線
                });
            }
        }
    });

    // 同步廠商燈箱顯示資料
    $('#companyDetailModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let thisId = String(button.data('id'));
        console.log('this Id:', thisId);
        let companyData = dataset_userList.find(u => u.id === thisId);
        if (companyData) {
            $('#companyName').text(companyData.name);
            $('#createDate').text(companyData.createDate);

            $('#companyDescription').text(companyData.companyDetails.companyDescription);
            $('#uniformNum').text(companyData.companyDetails.uniformNum);
            $('#creationDate').text(companyData.companyDetails.creationDate);
            $('#capitalAmount').text(companyData.companyDetails.capitalAmount);
            $('#employeesNum').text(companyData.companyDetails.employeesNum);
            $('#responsiblePerson').text(companyData.companyDetails.responsiblePerson);
            $('#referrer').text(companyData.companyDetails.referrer);
            $('#phoneNum').text(companyData.companyDetails.phone);
            $('#companyEmail').text(companyData.companyDetails.companyEmail);
            $('#lineId').text(companyData.companyDetails.lineId);
            $('#contactPerson').text(companyData.companyDetails.contactPerson);
            $('#ext').text(companyData.companyDetails.ext);
            $('#jobTitle').text(companyData.companyDetails.jobTitle);
            $('#companyAdd').text(companyData.companyDetails.companyAdd);
            $('#locationOfCompany').text(companyData.companyDetails.locationOfCompany);
            $('#helpItems').text(companyData.companyDetails.helpItems);
            $('#tutoringProfessor').text(companyData.companyDetails.tutoringProfessor);
            $('#nurtureProgram').text(companyData.companyDetails.nurtureProgram);
            $('#adminNote').text(companyData.companyDetails.adminNoteWithCompany);

            // 動態生成下載連結
            let downloadLinks = '';
            let updateText = '<span class="mx-1 update">補</span>';

            // 簡化後的函數，用來生成下載連結

            function generateDownloadLink(fileKey, fileId, fileLabel, filePrefix) {
                if (!fileKey || !fileId) return '';
                let fileNo = extractSubstringBetween(fileKey, "_", ".");
                // console.log(`${filePrefix}1 = `, fileNo);
                if (fileNo === `${filePrefix}1`) {
                    return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i></a>`;
                } else {
                    return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i>${updateText}</a>`;
                }
            }

            // 公司相關下載連結
            let companyId = companyData.companyDetails.id;
            if (companyData.companyDetails) {
                // 使用生成函數創建各項下載連結
                if (companyData.companyDetails.companyProof) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.companyProof, companyId, '公司登記證', 'CP');
                }
                if (companyData.companyDetails.businessProof) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.businessProof, companyId, '營利事業登記證或預查名稱表影本', 'BP');
                }
                if (companyData.companyDetails.memoOfCooperation) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.memoOfCooperation, companyId, '企業與大同大學教職員簽訂之合作備忘錄', 'MOC');
                }
                if (companyData.companyDetails.planConcept) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.planConcept, companyId, '企業營運計畫構想書', 'PC');
                }
                if (companyData.companyDetails.entryForm) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.entryForm, companyId, '創新育成中心進駐申請書', 'EF');
                }
                if (companyData.companyDetails.consentDoc) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.consentDoc, companyId, '同意審查聲明書', 'CD');
                }
                if (companyData.companyDetails.payProof) {
                    downloadLinks += generateDownloadLink(companyData.companyDetails.payProof, companyId, '進駐審查費繳費證明', 'PP');
                }
            }
            // 合約相關下載連結
            if (companyData.entryContract && Array.isArray(companyData.entryContract)) {
                // console.log()
                companyData.entryContract.forEach(contract => {
                    if (contract.FEC_FileName) {
                        downloadLinks += generateDownloadLink(contract.FEC_FileName, `${companyId}_${contract.FEC_Id}`, `合約書(${contract.FEC_Note})`, 'EC');
                        // console.log('contract.FEC_FileName: ', contract.FEC_FileName);
                        // console.log('contract.FEC_Id: ', contract.FEC_Id);
                    }
                });
            }

            // 更新下載連結區域
            $('#downloadLinksContainer').html(downloadLinks);

        } else {
            console.error('companyData data not found for id:', thisCPId);
        };
    });
    // 同步個人燈箱顯示資料
    $('#personalDetailModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let thisPSId = String(button.data('id'));
        // console.log('thisPS Id:', thisPSId);
        let personalData = dataset_userList.find(u => u.id === thisPSId);
        if (personalData) {
            $('#personal_Name').text(personalData.name);
            $('#personal_createDate').text(personalData.createDate);
            $('#personal_userName').text(personalData.userId);
            $('#personal_adminNote').text(personalData.adminNote);
        } else {
            console.error('personalData data not found for id:', thisPSId);
        };
    });

});