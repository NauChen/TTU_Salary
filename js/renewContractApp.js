// 生成10筆資料物件 dataset_renewContractApp，不要函式
// id是物件索引，從1開始。

// deadline是上一期的合約到期日，格式為YYYY-mm-DD。
// wantStartDate是預計起租日，格式為YYYY-mm-DD，值為deadline+1天。
// createDate是申請日期，格式為YYYY-mm-DD，值為deadline提早15天。
// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// companyEmail 是假的主要聯絡信箱。
// contactPerson是繁體中文的假主要聯絡人人名。
// jobTitle是假的繁體中文職位名稱。
// companyPhone是假的電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。
// ext是假的分機號碼，格式：數字1~6字元，可重複，可能為""。
// startDate是實際起租日，格式為YYYY-mm-DD，值等同wantStartDate
// paymentDate是付款日期，格式為YYYY-mm-DD，值為deadline提早12天。

// amount 是每月服務費用：
// 若type為"培育室"，amount金額落在30000~80000之間，要有千分位符號。
// 若type為汽車位，amount金額落在2500~3000之間，要有千分位符號。
// 若type為機車位，amount金額為100。

// type可能為[汽車位,機車位,培育室]。
// endDate是實際租賃結束日，格式為YYYY-mm-DD，若type是培育室：{endDate的值等同startDate往後1年，
// }若type是[汽車位,機車位]，{endDate的值等同startDate往後6個月。}

// adminNote是管理員備註，可能為''

// building是大樓名稱：
// 若type為"培育室"，building可能為[新德惠大樓,綜合大樓,挺生大樓,實驗大樓,北設工大樓,尚志大樓]；
// 若type為[汽車位,機車位],building可能為[新德惠大樓,校本部]。

// placeOrPrint是項目名：
// 若type='汽車位'或'機車位'，placeOrPrint的值為'B'+數字1字元+'-'+數字2字元，或是''；
// 若type='培育室'，placeOrPrint的值可能為[101,104,105,106,201,202,A4-102,A4-103,714,809,818]；


// 若type = [汽車位,機車位]{
// applicant是假的申請人人名。
// phone是假的申請人電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)。
// idNumber是假的身分證字號，格式為大寫英文1碼+數字1或是數字2+數字8碼。
// email是假的申請人電子郵件信箱。
// 
// licensePlateNum 是假的車牌號碼：
// 若type是"機車位"，licensePlateNum的格式為數字1字元+大寫英文2字元+'-'+數字3字元；
// 若type是"汽車位"，licensePlateNum的格式為數字4字元+'-'大寫英文2字元。

// squareMeters、responsiblePerson沒有值
// }

//若type = [培育室]{
// applicant、phone、idNumber、email、licensePlateNum，都沒有值
// squareMeters是坪數，格式為數字2字元+'.'+數字1字元，數字區間介於10.0~30.9之間。
// responsiblePerson是假的繁體中文公司負責人人名。
// }

// confirmPaymentItemId是停車位或培育室配置資料的id，從11開始。若此資料沒有值，則startDate是、都沒有值。
// startDate是實際起租日，格式為YYYY-mm-DD，若有值，則值等於wantStartDate。

// status是審核狀態，值有[待審核,通過,不通過,取消]



var dataset_renewContractApp = [
    {
        'id': 1,
        'deadline': '2024-07-01',
        'wantStartDate': '2024-07-02',
        'createDate': '2024-06-16',
        'company': '超級棒股份有限公司',
        'uniformNum': '12345678',
        'companyEmail': 'contact@supercompany.com',
        'contactPerson': '王大明',
        'jobTitle': '財務經理',
        'companyPhone': '02-86712345',
        'ext': '1234',
        'type': '汽車位',
        'adminNote': '',
        'building': '新德惠大樓',
        'placeOrPrint': 'B1-01',
        'startDate': '2024-07-02',
        'paymentDate': '2024-06-19',
        'amount': '2,800',
        'endDate': '2025-01-02',
        'applicant': '李小華',
        'phone': '0912-345678',
        'idNumber': 'A123456789',
        'email': 'xiaohua.li@example.com',
        'licensePlateNum': '1234-AB',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 11,
        'status': '待審核'
    },
    {
        'id': 2,
        'deadline': '2024-07-05',
        'wantStartDate': '2024-07-06',
        'createDate': '2024-06-20',
        'company': '最佳有限公司',
        'uniformNum': '23456789',
        'companyEmail': 'contact@bestcompany.com',
        'contactPerson': '陳小美',
        'jobTitle': '業務專員',
        'companyPhone': '0912-876543',
        'ext': '5678',
        'type': '機車位',
        'adminNote': '',
        'building': '校本部',
        'placeOrPrint': 'B2-01',
        'startDate': '2024-07-06',
        'paymentDate': '2024-06-23',
        'amount': '100',
        'endDate': '2025-01-06',
        'applicant': '張小龍',
        'phone': '02-87654321',
        'idNumber': 'B987654321',
        'email': 'xiaolong.zhang@example.com',
        'licensePlateNum': '3AB-123',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 12,
        'status': '通過'
    },
    {
        'id': 3,
        'deadline': '2024-07-10',
        'wantStartDate': '2024-07-11',
        'createDate': '2024-06-25',
        'company': '快樂企業股份有限公司',
        'uniformNum': '34567890',
        'companyEmail': 'contact@happyenterprise.com',
        'contactPerson': '林中華',
        'jobTitle': '技術主管',
        'companyPhone': '02-76543210',
        'ext': '2345',
        'type': '培育室',
        'adminNote': '',
        'building': '新德惠大樓',
        'placeOrPrint': '101',
        'startDate': '2024-07-11',
        'paymentDate': '2024-06-28',
        'amount': '45,000',
        'endDate': '2025-07-11',
        'applicant': '',
        'phone': '',
        'idNumber': '',
        'email': '',
        'licensePlateNum': '',
        'squareMeters': '20.5',
        'responsiblePerson': '張大偉',
        'confirmPaymentItemId': 13,
        'status': '待審核'
    },
    {
        'id': 4,
        'deadline': '2024-07-15',
        'wantStartDate': '2024-07-16',
        'createDate': '2024-06-30',
        'company': '幸福股份有限公司',
        'uniformNum': '45678901',
        'companyEmail': 'contact@happiness.com',
        'contactPerson': '陳美麗',
        'jobTitle': '行銷主管',
        'companyPhone': '02-65432109',
        'ext': '3456',
        'type': '汽車位',
        'adminNote': '',
        'building': '新德惠大樓',
        'placeOrPrint': 'B3-02',
        'startDate': '2024-07-16',
        'paymentDate': '2024-07-03',
        'amount': '2,900',
        'endDate': '2025-01-16',
        'applicant': '王小強',
        'phone': '0913-987654',
        'idNumber': 'C567890123',
        'email': 'xiaoqiang.wang@example.com',
        'licensePlateNum': '5678-CD',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 14,
        'status': '不通過'
    },
    {
        'id': 5,
        'deadline': '2024-07-20',
        'wantStartDate': '2024-07-21',
        'createDate': '2024-07-05',
        'company': '優秀有限公司',
        'uniformNum': '56789012',
        'companyEmail': 'contact@excellent.com',
        'contactPerson': '葉小勇',
        'jobTitle': '產品經理',
        'companyPhone': '0914-123456',
        'ext': '4567',
        'type': '機車位',
        'adminNote': '',
        'building': '校本部',
        'placeOrPrint': 'B4-01',
        'startDate': '2024-07-21',
        'paymentDate': '2024-07-08',
        'amount': '100',
        'endDate': '2025-01-21',
        'applicant': '趙小偉',
        'phone': '02-12345678',
        'idNumber': 'D678901234',
        'email': 'xiaowei.zhao@example.com',
        'licensePlateNum': '4CD-456',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 15,
        'status': '通過'
    },
    {
        'id': 6,
        'deadline': '2024-07-25',
        'wantStartDate': '2024-07-26',
        'createDate': '2024-07-10',
        'company': '卓越股份有限公司',
        'uniformNum': '67890123',
        'companyEmail': 'contact@outstanding.com',
        'contactPerson': '張大志',
        'jobTitle': '行政助理',
        'companyPhone': '02-34567890',
        'ext': '5678',
        'type': '培育室',
        'adminNote': '',
        'building': '實驗大樓',
        'placeOrPrint': 'A4-103',
        'startDate': '2024-07-26',
        'paymentDate': '2024-07-13',
        'amount': '70,000',
        'endDate': '2025-07-26',
        'applicant': '',
        'phone': '',
        'idNumber': '',
        'email': '',
        'licensePlateNum': '',
        'squareMeters': '30.0',
        'responsiblePerson': '王大豪',
        'confirmPaymentItemId': 16,
        'status': '取消'
    },
    {
        'id': 7,
        'deadline': '2024-07-30',
        'wantStartDate': '2024-07-31',
        'createDate': '2024-07-15',
        'company': '智慧科技有限公司',
        'uniformNum': '78901234',
        'companyEmail': 'contact@smarttech.com',
        'contactPerson': '吳大勇',
        'jobTitle': '研發工程師',
        'companyPhone': '0915-234567',
        'ext': '6789',
        'type': '汽車位',
        'adminNote': '',
        'building': '校本部',
        'placeOrPrint': 'B5-03',
        'startDate': '2024-07-31',
        'paymentDate': '2024-07-18',
        'amount': '3,000',
        'endDate': '2025-01-31',
        'applicant': '周小英',
        'phone': '02-98765432',
        'idNumber': 'E789012345',
        'email': 'xiaoying.zhou@example.com',
        'licensePlateNum': '8901-EF',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 17,
        'status': '待審核'
    },
    {
        'id': 8,
        'deadline': '2024-08-01',
        'wantStartDate': '2024-08-02',
        'createDate': '2024-07-17',
        'company': '創新股份有限公司',
        'uniformNum': '89012345',
        'companyEmail': 'contact@innovation.com',
        'contactPerson': '鄭小美',
        'jobTitle': '設計師',
        'companyPhone': '02-12345679',
        'ext': '',
        'type': '培育室',
        'adminNote': '',
        'building': '尚志大樓',
        'placeOrPrint': '202',
        'startDate': '2024-08-02',
        'paymentDate': '2024-07-20',
        'amount': '60,000',
        'endDate': '2025-08-02',
        'applicant': '',
        'phone': '',
        'idNumber': '',
        'email': '',
        'licensePlateNum': '',
        'squareMeters': '15.8',
        'responsiblePerson': '林大仁',
        'confirmPaymentItemId': 18,
        'status': '通過'
    },
    {
        'id': 9,
        'deadline': '2024-08-05',
        'wantStartDate': '2024-08-06',
        'createDate': '2024-07-21',
        'company': '科技創新有限公司',
        'uniformNum': '90123456',
        'companyEmail': 'contact@techinnovation.com',
        'contactPerson': '趙大強',
        'jobTitle': '產品經理',
        'companyPhone': '0916-345678',
        'ext': '123',
        'type': '機車位',
        'adminNote': '',
        'building': '新德惠大樓',
        'placeOrPrint': 'B6-02',
        'startDate': '2024-08-06',
        'paymentDate': '2024-07-24',
        'amount': '100',
        'endDate': '2025-02-06',
        'applicant': '陳大明',
        'phone': '02-23456789',
        'idNumber': 'F890123456',
        'email': 'daming.chen@example.com',
        'licensePlateNum': '5FG-678',
        'squareMeters': '',
        'responsiblePerson': '',
        'confirmPaymentItemId': 19,
        'status': '待審核'
    },
    {
        'id': 10,
        'deadline': '2024-08-10',
        'wantStartDate': '2024-08-11',
        'createDate': '2024-07-26',
        'company': '無限可能股份有限公司',
        'uniformNum': '01234567',
        'companyEmail': 'contact@infinite.com',
        'contactPerson': '曾大豪',
        'jobTitle': '專案經理',
        'companyPhone': '02-56789012',
        'ext': '',
        'type': '培育室',
        'adminNote': '',
        'building': '綜合大樓',
        'placeOrPrint': '818',
        'startDate': '2024-08-11',
        'paymentDate': '2024-07-29',
        'amount': '80,000',
        'endDate': '2025-08-11',
        'applicant': '',
        'phone': '02-26710000',
        'idNumber': '',
        'email': '',
        'licensePlateNum': '',
        'squareMeters': '28.9',
        'responsiblePerson': '李大海',
        'confirmPaymentItemId': 20,
        'status': '待審核',
        'businessCompliance': '否。有再增加新項目。',
        'violation': '否。',
        'academicCollaboration': '是。產學合作名稱AA。10人。',
        'usageCompliance': '是。',
        'feeCompliance': '是。',
        'participation': '是。',
        'counseling': '是。',
        'badgeReturn': '是。',
        'surveyForm': '是。',
        'cooperation': '是。',
        'extendYears': '2',
        'cumulativeYears': '3',
        'firstYearRevenue': '2,300',
        'currentRevenue': '3,300',
        'breakEven': '已達損益平衡',
        'firstYearEmployeeCount': '100',
        'currentEmployeeCount': '120',
        'extensionPeriod': '2025-12-31',
        'extensionReason': '',
        'otherAdvantages': '',
        'applicant': '申傾美',
        'jobTitle': '實習秘書',
    }
];

$(function () {
    $('#renewContractAppList').DataTable({
        ...commonSettingsTable,
        "data": dataset_renewContractApp,
        "columns": [
            { data: 'createDate', title: "申請日期" }, // 0
            { data: 'type', title: "續約類型", }, // 1
            { data: 'company', title: "申請人公司", }, // 2
            { data: 'building', title: "大樓", }, // 3
            { data: 'placeOrPrint', title: "號碼", }, // 4
            { data: 'deadline', title: "原合約<br class='d-none d-lg-block'>到期日", },  // 5
            { data: 'paymentDate', title: "新合約<br class='d-none d-lg-block'>付款日", },  // 6
            { data: 'status', title: "審核進度", }, // 7
            {
                data: 'id', title: "檢閱", // 8
                render: function (data, type, row) {
                    let icon = '';
                    let btnColor = '';
                    if (row.status == '通過' || row.status == "不通過") {
                        btnColor = 'outline-primary';
                    } else {
                        btnColor = 'info';
                    }
                    if (row.type === '汽車位' || row.type === '機車位') {
                        icon = 'renewContractParkingSpaceModel';
                    } else {
                        icon = 'renewContractRoomModel';
                    }
                    return '<button type="button" class="btn btn-' + btnColor + ' rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#' + icon + '" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
                }, className: 'text-lg-center text-nowrap'
            },
        ],
        "order": [[0, "desc"], [1, "asc"]],
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
                targets: [4],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [8] },
            { className: "text-lg-center", targets: [0, 1, 5, 6] },
            { className: "text-nowrap", targets: [0, 1, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            [0, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em').css('min-width', '110px');
            });
        }
    });

    $('#renewContractParkingSpaceModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        // console.log('Event relatedTarget:', button);
        let thisId = String(button.data('id'));
        console.log('thisId:', thisId); // 確認 psId 是否正確獲取
        // console.log('Button clicked, firmId:', firmId);

        // 解除先前綁定的點擊事件
        $('#renewPS_updateBtn').off('click');

        let parkingSpaceData = dataset_renewContractApp.find(perkingSpace => perkingSpace.id == thisId);

        if (parkingSpaceData) {
            var carType = '';
            // console.log('Job data found:', parkingSpaceData);
            $('#psApp_companyName').text(parkingSpaceData.company);
            $('#psApp_uniformNum').text(parkingSpaceData.uniformNum);
            $('#psApp_createDate').text(parkingSpaceData.createDate);
            $('#psApp_name').text(parkingSpaceData.applicant);
            $('#psApp_phoneNum').text(parkingSpaceData.phone);
            $('#psApp_ext').text(parkingSpaceData.ext);
            $('#psApp_idNumber').text(parkingSpaceData.idNumber);
            $('#psApp_email').text(parkingSpaceData.email);
            $('#psApp_jobTitle').text(parkingSpaceData.jobTitle);

            if (parkingSpaceData.type == '汽車位') {
                carType = '汽車';
            } else if (parkingSpaceData.type == '機車位') {
                carType = '機車';
            };
            $('#psApp_carType').text(carType);
            $('#psApp_licensePlateNum').text(parkingSpaceData.licensePlateNum);
            $('#psApp_wantStartDate').text(parkingSpaceData.wantStartDate);
            $('#paymentDate').text(parkingSpaceData.paymentDate);
            $('#psApp_building').text(parkingSpaceData.building);
            $('#psApp_parkingSpaceNum').text(parkingSpaceData.placeOrPrint);
            $('#psApp_startDate').text(parkingSpaceData.startDate);
            $('#psApp_adminNote').text(parkingSpaceData.adminNote);
            $('#psApp_status').val(parkingSpaceData.status);

            CustomInputHandlers.destroy();
            $('#psApp_jobTitle, #psApp_adminNote').removeClass('changeInput_items');
            $('#psApp_ext').removeClass('changeUniformNum_items');
            $('#psApp_phoneNum').removeClass('changePhone_items');
            $('#psApp_email').removeClass('changeEmail_items');
            $('#psApp_name, #psApp_jobTitle, #psApp_adminNote, #psApp_ext, #psApp_phoneNum, #psApp_email, #psApp_idNumber, #psApp_carType, #psApp_licensePlateNum, #psApp_wantStartDate').addClass('readOnly');
            $('#psApp_downloadFilesBox').hide();
            $('#psApp_supplementaryFilesBox').hide();
        } else {
            console.error('parkingSpaceData data not found for id:', thisId);
        };

        if (parkingSpaceData.status === "通過" || parkingSpaceData.status === "不通過") {
            $('#psApp_status').hide();
            $('#psApp_statusText').show().text(parkingSpaceData.status);
            $('#renewPS_updateBtn').hide();

        } else {
            $('#psApp_jobTitle, #psApp_adminNote').addClass('changeInput_items');
            $('#psApp_ext').addClass('changeUniformNum_items');
            $('#psApp_phoneNum').addClass('changePhone_items');
            $('#psApp_email').addClass('changeEmail_items');
            $('#psApp_jobTitle, #psApp_adminNote, #psApp_ext, #psApp_phoneNum, #psApp_email').removeClass('readOnly');
            CustomInputHandlers.init();
            $('#renewPS_updateBtn').show();
            $('#psApp_status').show();
            $('#psApp_statusText').hide();
        }

        $('#renewPS_updateBtn').on('click', function () {
            // console.log('thisId 2 :', thisId); // 確認 thisId 是否正確獲取
            // 清除上次的資料
            updatedData = {};
            // 獲取所有欄位的目前值
            updatedData.id = thisId;
            updatedData.phoneNum = $('#psApp_phoneNum').text();
            updatedData.ext = $('#psApp_ext').text();
            updatedData.email = $('#psApp_email').text();
            updatedData.jobTitle = $('#psApp_jobTitle').text();
            updatedData.adminNote = $('#psApp_adminNote').text();
            updatedData.status = $('#psApp_statusText').val();
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

    $('#renewContractRoomModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let thisId = String(button.data('id'));
        console.log('thisId:', thisId); // 確認 thisId 是否正確獲取


        // 解除先前綁定的點擊事件
        $('#renewCR_updateBtn').off('click');

        let cultivationRoomData = dataset_renewContractApp.find(cultivationRoom => cultivationRoom.id == thisId);

        if (cultivationRoomData) {

            // console.log('Job data found:', cultivationRoomData);

            $('#renewCR_building').text(cultivationRoomData.building);
            $('#renewCR_room').text(cultivationRoomData.placeOrPrint);
            $('#renewCR_squareMeters').text(cultivationRoomData.squareMeters);
            $('#renewCR_startDate').text(cultivationRoomData.startDate);
            $('#renewCR_endDate').text(cultivationRoomData.endDate);
            $('#renewCR_rate').text(cultivationRoomData.amount);
            $('#renewCR_companyName').text(cultivationRoomData.company);
            $('#renewCR_uniformNum').text(cultivationRoomData.uniformNum);
            $('#renewCR_responsiblePerson').text(cultivationRoomData.responsiblePerson);
            $('#renewCR_companyEmail').text(cultivationRoomData.companyEmail);
            $('#renewCR_companyPhone').text(cultivationRoomData.companyPhone);
            $('#renewCR_contactPerson').text(cultivationRoomData.contactPerson);
            $('#renewCR_adminNote').text(cultivationRoomData.adminNote);
            $('#renewCR_status').val(cultivationRoomData.status);

            $('#renewCR_status').val(cultivationRoomData.status);

        }

        if (cultivationRoomData.status == "通過" || cultivationRoomData.status == "不通過") {
            $('#renewCR_supplementaryFilesBox').hide();
            $('#renewCR_status').hide();
            $('#renewCR_statusText').show().text(cultivationRoomData.status);
            $('#renewCR_updateBtn').hide();

        } else {
            $('#renewCR_supplementaryFilesBox').show();
            $('#renewCR_status').show().val(cultivationRoomData.status);
            $('#renewCR_statusText').hide();
            $('#renewCR_updateBtn').show();
        }

    });

});