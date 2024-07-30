var dataset_idCardApp = [
    {
        'id': '1',
        'createDate': '2024-07-01',
        'company': '超級棒股份有限公司',
        'name': '孫小美',
        'startDate': '2023-08-30',
        'endDate': '2024-08-30',
        'place': '新德惠大樓 101',
        'paymentDate': '2023-06-01',
        'status': '不通過',
        'uniformNum': '12345678',
        'jobTitle': '財務經理',
        'phone': '02-81234567',
        'email': 'sunxiaomei@example.com',
        'idCardPhoto': '20240701ID1',
        'emergContact': '李小華',
        'ECPhone': '0912345678',
        'readLibrary': '申請',
        'adminNote': '資料不齊全',
        'print': '1',
        'receiptNum': 'RN000001',
    },
    {
        'id': '2',
        'createDate': '2024-07-02',
        'company': '智力科技有限公司',
        'name': '王大明',
        'startDate': '2023-09-01',
        'endDate': '2024-09-01',
        'place': '實驗大樓 202',
        'paymentDate': '2023-07-02',
        'status': '待審核',
        'uniformNum': '87654321',
        'jobTitle': '工程師',
        'phone': '02-82345678',
        'email': 'wangdameng@example.com',
        'idCardPhoto': '20240702ID2',
        'emergContact': '陳美麗',
        'ECPhone': '0918-765432',
        'readLibrary': '不申請',
        'adminNote': '需補充文件',
        'print': '2',
        'receiptNum': 'RN000005',
    },
    {
        'id': '3',
        'createDate': '2024-07-03',
        'company': '光速物流有限公司',
        'name': '李志偉',
        'startDate': '2023-10-01',
        'endDate': '2024-10-01',
        'place': '新德惠大樓 303',
        'paymentDate': '2023-08-01',
        'status': '通過',
        'uniformNum': '11223344',
        'jobTitle': '物流助理',
        'phone': '02-83456789',
        'email': 'lizhiwei@example.com',
        'idCardPhoto': '20240703ID3',
        'emergContact': '張建國',
        'ECPhone': '0912-341234',
        'readLibrary': '申請',
        'adminNote': '申請順利通過',
        'print': '1',
        'receiptNum': 'RN000004',
    },
    {
        'id': '4',
        'createDate': '2024-07-04',
        'company': '鴻海電子有限公司',
        'name': '劉敏',
        'startDate': '2023-11-01',
        'endDate': '2024-11-01',
        'place': '實驗大樓 404',
        'paymentDate': '2023-09-01',
        'status': '待補件',
        'uniformNum': '33445566',
        'jobTitle': '產品經理',
        'phone': '02-84567890',
        'email': 'liumin@example.com',
        'idCardPhoto': '20240704ID4',
        'emergContact': '林月嬌',
        'ECPhone': '0915-678901',
        'readLibrary': '不申請',
        'adminNote': '需補交簽名文件',
        'print': '3',
        'receiptNum': 'RN000003',
    },
    {
        'id': '5',
        'createDate': '2024-07-05',
        'company': '百思買有限公司',
        'name': '周海',
        'startDate': '2023-12-01',
        'endDate': '2024-12-01',
        'place': '新德惠大樓 505',
        'paymentDate': '2023-10-01',
        'status': '通過',
        'uniformNum': '55667788',
        'jobTitle': '市場行銷',
        'phone': '02-85678901',
        'email': 'zhouhai@example.com',
        'idCardPhoto': '20240705ID5',
        'emergContact': '趙雪芬',
        'ECPhone': '0916-789012',
        'readLibrary': '申請',
        'adminNote': '審核通過，發送通知',
        'print': '2',
        'receiptNum': 'RN000002',
    }
];

$(function () {

    $('#idCardApplicationList').DataTable({
        ...commonSettingsTable,
        "data": dataset_idCardApp,
        "columns": [
            { data: 'createDate', title: "申請日期" }, // 0
            { data: 'company', title: "申請人企業", }, // 1
            { data: 'name', title: "申請人姓名", }, // 2
            { data: 'place', title: '培育室位置', }, // 3
            { data: 'paymentDate', title: "付款日", }, // 4
            { data: 'readLibrary', title: "圖書館<br class='d-none d-lg-block'>閱覽", }, // 5
            {
                data: 'print', title: "補發<br class='d-none d-lg-block'>次數", // 6
                render: function (data) {
                    let reprint = Number(data) - 1;
                    if (data == 1) {
                        return '-';
                    } else {
                        return reprint;
                    }
                }
            },
            { data: 'status', title: "審核進度", }, // 7
            {
                data: 'id', title: "檢閱",
                render: function (data, type, row) { // 8
                    let btnColor = '';
                    if (row.status == '通過' || row.status == '不通過') {
                        btnColor = 'outline-primary';
                    } else {
                        btnColor = 'info';
                    }
                    return '<button type="button" class="btn btn-' + btnColor + ' rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#idCardDetailModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }
            },
        ],
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
            { className: "text-lg-center", targets: [0, 4, 6, 8] },
            { className: "text-nowrap", targets: [0, 2, 3, 4, 5, 6, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            [0, 3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
            [0, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        }
    });

    $('#idCardDetailModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        // console.log('Event relatedTarget:', button);
        let idCardId = String(button.data('id'));
        console.log('idCard Id:', idCardId); // 確認 psId 是否正確獲取
        // console.log('Button clicked, firmId:', firmId);

        // 解除先前綁定的點擊事件
        $('#idCardApp_updateBtn').off('click');

        let idCardApplyData = dataset_idCardApp.find(idCard => idCard.id === idCardId);

        if (idCardApplyData) {
            //     // console.log('Job data found:', idCardApplyData);
            $('#idcardApp_companyName').text(idCardApplyData.company);
            $('#idcardApp_uniformNum').text(idCardApplyData.uniformNum);
            $('#idcardApp_createDate').text(idCardApplyData.createDate);

            $('#idcardApp_name').text(idCardApplyData.name);
            $('#idcardApp_jobTitle').text(idCardApplyData.jobTitle);
            $('#idcardApp_receiptNum').text(idCardApplyData.receiptNum);
            $('#idcardApp_paymentDate').text(idCardApplyData.paymentDate);

            $('#idcardApp_phoneNum').text(idCardApplyData.phone);
            $('#idcardApp_email').text(idCardApplyData.email);
            $('#idcardApp_place').text(idCardApplyData.place);

            $('#idcardApp_startDate').text(idCardApplyData.startDate);
            $('#idcardApp_endDate').text(idCardApplyData.endDate);
            $('#idcardApp_emergContact').text(idCardApplyData.emergContact);
            $('#idcardApp_ECPhone').text(idCardApplyData.ECPhone);

            $('#idcardApp_readLibrary').text(idCardApplyData.readLibrary);
            $('#idcardApp_adminNote').text(idCardApplyData.adminNote);
            $('#idcardApp_status').val(idCardApplyData.status);

            CustomInputHandlers.destroy();
            $('#idcardApp_name, #idcardApp_jobTitle, #idcardApp_place, #idcardApp_emergContact, #idcardApp_adminNote').removeClass('changeInput_items');
            $('#idcardApp_receiptNum').removeClass('changeInputUpperNumber_items');
            $('#idcardApp_phoneNum, #idcardApp_ECPhone').removeClass('changePhone_items');
            $('#idcardApp_email').removeClass('changeEmail_items');
            $('#idcardApp_startDate, #idcardApp_endDate').removeClass('changeDate_items');
            $('#idcardApp_readLibrary').removeClass('changeRadioApply_items');

        } else {
            console.error('idCardApplyData data not found for id:', idCardId);
        };

        if (idCardApplyData.status === "通過" || idCardApplyData.status === "不通過") {
            $('#idcardApp_name, #idcardApp_jobTitle, #idcardApp_place, #idcardApp_emergContact, #idcardApp_adminNote, #idcardApp_receiptNum, #idcardApp_phoneNum, #idcardApp_ECPhone, #idcardApp_email, #idcardApp_startDate, #idcardApp_endDate, #idcardApp_readLibrary').addClass('readOnly');
            $('#idCardApp_updateBtn').hide();
            $('#idCard_supplementaryFilesBox').hide();
            $('#idcardApp_status').hide();
            $('#idcardApp_statusText').show().text(idCardApplyData.status);
        } else {
            $('#idcardApp_name, #idcardApp_jobTitle, #idcardApp_place, #idcardApp_emergContact, #idcardApp_adminNote, #idcardApp_receiptNum, #idcardApp_phoneNum, #idcardApp_ECPhone, #idcardApp_email, #idcardApp_startDate, #idcardApp_endDate, #idcardApp_readLibrary').removeClass('readOnly');
            $('#idcardApp_name, #idcardApp_jobTitle, #idcardApp_place, #idcardApp_emergContact, #idcardApp_adminNote').addClass('changeInput_items');
            $('#idcardApp_receiptNum').addClass('changeInputUpperNumber_items');
            $('#idcardApp_phoneNum, #idcardApp_ECPhone').addClass('changePhone_items');
            $('#idcardApp_email').addClass('changeEmail_items');
            $('#idcardApp_startDate, #idcardApp_endDate').addClass('changeDate_items');
            $('#idcardApp_readLibrary').addClass('changeRadioApply_items');
            CustomInputHandlers.init();
            $('#idCardApp_updateBtn').show();
            $('#idCard_supplementaryFilesBox').show();
            $('#idcardApp_status').show();
            $('#idcardApp_statusText').hide();
        }

        $('#idCardApp_updateBtn').on('click', function () {
            // console.log('idCardId 2 :', idCardId); // 確認 psId 是否正確獲取
            // 清除上次的資料
            updatedData = {};
            // 獲取所有欄位的目前值
            updatedData.id = idCardId;
            updatedData.companyName = $('#idcardApp_companyName').text();
            updatedData.uniformNum = $('#idcardApp_uniformNum').text();
            updatedData.createDate = $('#idcardApp_createDate').text();
            
            updatedData.name = $('#idcardApp_name').text();
            updatedData.jobTitle = $('#idcardApp_jobTitle').text();
            updatedData.receiptNum = $('#idcardApp_receiptNum').text();
            updatedData.paymentDate = $('#idcardApp_paymentDate').text();

            updatedData.phoneNum = $('#idcardApp_phoneNum').text();
            updatedData.email = $('#idcardApp_email').text();
            updatedData.place = $('#idcardApp_place').text();

            updatedData.startDate = $('#idcardApp_startDate').text();
            updatedData.endDate = $('#idcardApp_endDate').text();
            updatedData.emergContact = $('#idcardApp_emergContact').text();
            updatedData.ECPhone = $('#idcardApp_ECPhone').text();

            updatedData.readLibrary = $('#idcardApp_readLibrary').text();
            updatedData.adminNote = $('#idcardApp_adminNote').text();
            updatedData.status = $('#idcardApp_status').val();

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


});