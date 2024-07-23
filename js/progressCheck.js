// status 在後端先將 審核進度 跟 給廠商的話 做字串串接再傳來
var dataset_progressCheck = [
    {
        'id': '1',
        'createDate': '2024-07-01',
        'type': '汽車位',
        'name': '孫小美',
        'isReprint': '',
        'isRenew': '續約',
        // 'isPartialCharges': '',
        'itemNum': 'B1-01',
        'paymentDate': '2024-07-07',
        'status': '',
        'remittanceFile': '20240710RF2',
    },
    {
        'id': '2',
        'createDate': '2024-06-15',
        'type': '機車位',
        'name': '孫中美',
        'isReprint': '',
        'isRenew': '',
        'itemNum': 'B2-05',
        'paymentDate': '',
        'status': '待補件。匯款證明',
        'remittanceFile': '20240710RF1',
    },
    {
        'id': '3',
        'createDate': '2024-06-25',
        'type': '識別證',
        'name': '孫大美',
        'isReprint': '補發',
        'isRenew': '',
        'itemNum': 'AB0001',
        'paymentDate': '2024-07-02',
        'status': '通過',
        'remittanceFile': '20240710RF3',
    },
    {
        'id': '4',
        'createDate': '2024-07-10',
        'type': '汽車位',
        'name': '王小明',
        'isReprint': '',
        'isRenew': '',
        'itemNum': '',
        'paymentDate': '',
        'status': '不通過。使用者取消。',
        'remittanceFile': '',
    },
    {
        'id': '5',
        'createDate': '2024-07-03',
        'type': '機車位',
        'name': '陳美麗',
        'isReprint': '',
        'isRenew': '續約',
        'itemNum': 'B3-01',
        'paymentDate': '2024-07-09',
        'status': '已到帳，待審核',
        'remittanceFile': '20240710RF2',
    },
    {
        'id': '6',
        'createDate': '2024-06-20',
        'type': '識別證',
        'name': '李美麗',
        'isReprint': '',
        'isRenew': '',
        'itemNum': '',
        'paymentDate': '2024-06-26',
        'status': '通過',
        'remittanceFile': '20240710RF1',
    },
    {
        'id': '7',
        'createDate': '2024-06-28',
        'type': '培育室',
        'name': '好棒棒股份有限公司',
        'isReprint': '',
        'isRenew': '續約',
        'itemNum': '青創基地-301',
        'paymentDate': '',
        'status': '待補件。繳費證明',
        'remittanceFile': '20240710RF5',
    }
];

$(function () {
    // 抓取要代進的資料
    let sessionData = session_userData;
    // 同步session跟燈箱
    $('#company').val(sessionData.company);

    let table = $('#progressCheckList').DataTable({
        ...commonSettingsTable,
        "data": dataset_progressCheck,
        "columns": [
            {
                data: 'id', title: '<i class="fa-regular fa-square-check"></i>', render: function (data, type, row, meta) { // 0
                    return '<input type="checkbox" class="form-check-input border-info application-checkbox" value=' + data + '>'
                },
            },
            { data: 'createDate', title: "申請日期", className: 'text-center' }, // 1
            { data: 'name', title: "申請人姓名", }, // 2
            { data: 'type', title: "項目", }, // 3
            {
                data: 'itemNum', title: "項目註記", // 4
                render: function (data, type, row) {
                    const isReprint = row.isReprint;
                    const isRenew = row.isRenew;
                    if (isReprint) {
                        return isReprint;
                    } else if (isRenew) {
                        return isRenew + '：' + data;
                    } else {
                        return '-';
                    }
                },
            },
            { data: 'paymentDate', title: "付帳日", }, // 5
            { data: 'status', title: "審核進度", }, // 6
            {
                data: 'id', title: '通知<br class="d-none d-lg-black">匯款',
                render: function (data, type, row) {
                    const paymentDate = row.paymentDate;
                    if (paymentDate) {
                        return '<button type="button" class="btn btn-light rounded-circle remittance_voucher align_center reuploadRemittance" title="再次上傳匯款憑證" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
                    } else {
                        return '<button type="button" class="btn btn-info rounded-circle remittance_voucher align_center uploadRemittance" title="上傳匯款憑證" data-bs-toggle="modal" data-bs-target="#remittanceModal" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
                    }
                }
            },
        ],
        "order": [[1, "desc"]],
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
            { searchable: false, orderable: false, targets: [0, 7] },
            { className: "text-lg-center", targets: [0, 3, 5, 6] },
            { className: "text-nowrap", targets: [0, 1, 2, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            $('td:eq(6)', row).css('min-width', '200px');
            [1, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px').css('font-size', '.95em');
            });
        }
    });

    // 取消申請
    $('#deleteTheseApplication').click(function () {
        let selectedIds = [];

        // 遍歷每一行，檢查第一列複選框是否選中
        table.rows().every(function () {
            let row = this.node();
            let checkbox = $(row).find('.application-checkbox');

            // 如果複選框被選中，獲取該行的ID
            if (checkbox.prop('checked')) {
                let rowData = this.data();
                selectedIds.push(rowData.id);
            }
        });

        // 如果没有選中任何行，提示用戶
        if (selectedIds.length === 0) {
            swalToastWarning('請先勾選欲取消的申請紀錄。', 'top');
            return;
        }

        console.log(selectedIds);

        // let requestData = {
        //     ids: selectedIds
        // };

        // 向後端發送删除請求
        // $.ajax({
        //     url: 'asp.net的東西',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify(requestData),
        //     success: function (response) {
        //         console.log('Delete request successful', response);
        //     },
        //     error: function (xhr, status, error) {
        //         console.error('Error deleting jobs', error);
        //     }
        // });

    });


    // 匯款憑證按鈕
    $('.uploadRemittance, .reuploadRemittance').click(function (event) {
        // 每次點擊都刪除舊有的資料與錯誤訊息
        clearValues(['danger_paymentDate', 'danger_paymentAmount', 'danger_last5AccountNo', 'paymentDate', 'paymentAmount', 'last5AccountNo', 'last5AccountNo', 'remittancePdf']);

        let button = $(this);
        let progressId = button.data('id'); // 獲取按鈕的 data-id 屬性

        if (progressId) {
            let progressData = dataset_progressCheck.find(progress => progress.id == progressId);
            if (progressData) {
                $('#dataId').val(progressData.id);
                $('#type').val(progressData.type);

                if (progressData.isReprint != '' || progressData.isReprint != null) {
                    $('#paymentPurpose').val('補發');
                } else if (progressData.isRenew != '' || progressData.isRenew != null) {
                    $('#paymentPurpose').val('續約');
                } else {
                    $('#paymentPurpose').val('');
                }

                $('#itemNum').val(progressData.itemNum);
            } else {
                console.error('progress data not found for id:', progressId);
            }
        } else {
            console.error('progress ID not found in URL');
        }

        // $('#type').val(progressData.type);
        // $('#dataId').val(progressData.id);

        if (button.hasClass('reuploadRemittance')) {
            event.preventDefault(); // 阻止默認行為
            swalConfirm(
                '曾填過匯款通知，要再填一次嗎?', // 顯示的問題
                '對，我要重新填寫上傳。', // YES按鈕的文字
                '不，回到上一步。', // NO按鈕的文字
                function () {
                    // YES按鈕點擊後開啟燈箱
                    $('#remittanceModal').modal('show');
                }
            );
        }
    });

    // 必填異動再次判斷
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });


    // 點擊送出匯款資料
    $('#remittanceSubmit').click(function (event) {
        // 先檢查必填項
        if (!checkRequiredElements()) {
            swalToastWarning('請將必填欄位填上正確資料唷！', 'top');
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }
        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {

            // 列出表單資料
            // var formData = $('#formRemittance').serializeArray();
            // console.log('表單資料：', JSON.stringify(formData, null, 2));

            // $('#formRemittance').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });
});