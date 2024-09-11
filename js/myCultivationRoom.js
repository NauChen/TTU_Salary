var dataset_myCultivationRoom = [
    {
        'id': '1',
        'startDate': '2023-10-01',
        'endDate': '2024-09-31',
        'building': '新德惠大樓',
        'room': '101',
        'thisTimeDeadline': '2024-09-30',
        'nextTimeDeadline': '',
        'paymentDate': '2024-03-31',
        'remark': '',
    },
    {
        'id': '2',
        'startDate': '2023-08-31',
        'endDate': '2024-08-30',
        'building': '綜合大樓',
        'room': '104',
        'thisTimeDeadline': '',
        'nextTimeDeadline': '',
        'paymentDate': '2024-08-31',
        'remark': '',
    },
    {
        'id': '3',
        'startDate': '2023-11-01',
        'endDate': '2024-10-30',
        'building': '挺生大樓',
        'room': '105',
        'thisTimeDeadline': '2024-11-01',
        'nextTimeDeadline': '',
        'paymentDate': '2024-09-01',
        'remark': '',
    },
    {
        'id': '4',
        'startDate': '2023-11-11',
        'endDate': '2024-11-10',
        'building': '實驗大樓',
        'room': '106',
        'thisTimeDeadline': '2024-11-10',
        'nextTimeDeadline': '',
        'paymentDate': '2024-09-05',
        'remark': '',
    },
    {
        'id': '5',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '實驗大樓',
        'room': '201',
        'thisTimeDeadline': '2024-12-31',
        'nextTimeDeadline': '2025-03-31',
        'paymentDate': '2024-09-25',
        'remark': '',
    },
    {
        'id': '6',
        'startDate': '2024-07-01',
        'endDate': '2025-06-31',
        'building': '北設工大樓',
        'room': '202',
        'thisTimeDeadline': '2025-10-31',
        'nextTimeDeadline': '2025-01-31',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '7',
        'startDate': '2024-09-01',
        'endDate': '2025-08-31',
        'building': '尚志大樓',
        'room': 'A4-102',
        'thisTimeDeadline': '2025-03-01',
        'nextTimeDeadline': '2025-08-31',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '8',
        'startDate': '2024-02-01',
        'endDate': '2025-01-31',
        'building': '新德惠大樓',
        'room': 'A4-103',
        'thisTimeDeadline': '2024-09-30',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '9',
        'startDate': '2023-06-01',
        'endDate': '2024-05-31',
        'building': '綜合大樓',
        'room': '714',
        'thisTimeDeadline': '',
        'nextTimeDeadline': '',
        'paymentDate': '2024-05-15',
        'remark': '',
    },
    {
        'id': '10',
        'startDate': '2024-08-01',
        'endDate': '2025-07-31',
        'building': '挺生大樓',
        'room': '809',
        'thisTimeDeadline': '2024-10-01',
        'nextTimeDeadline': '2025-01-01',
        'paymentDate': '',
        'remark': '',
    }
];


$(function () {
    const today = new Date();

    // 封裝日期差異計算的邏輯
    function calculateDateDiff(date1, date2) {
        const timeDiff = date1.getTime() - date2.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays < 0 ? null : diffDays;
    }

    dataset_myCultivationRoom.forEach(item => {
        const endDate = new Date(item.endDate);
        item.endDiffDays = calculateDateDiff(endDate, today);
        console.log(`id = ${item.id} ，結束日期： ${item.endDate} ，今日： 2024-09-06 ，差： ${item.endDiffDays}`);

        const thisTimeDeadline = new Date(item.thisTimeDeadline);
        const nextTimeDeadline = new Date(item.nextTimeDeadline);
        let deadLineDiffDays;

        if (isNaN(nextTimeDeadline.getTime())) {
            deadLineDiffDays = calculateDateDiff(thisTimeDeadline, today);
        } else {
            deadLineDiffDays = calculateDateDiff(nextTimeDeadline, today);
        }
        item.deadLineDiffDays = deadLineDiffDays;
        console.log(`id = ${item.id} ，期限日期： ${nextTimeDeadline.toString() === 'Invalid Date' ? item.thisTimeDeadline : item.nextTimeDeadline} ，今日： 2024-09-06 ，差： ${item.deadLineDiffDays}`);

        const paymentDate = new Date(item.paymentDate);
        item.payDiffDays = calculateDateDiff(paymentDate, today);
        console.log(`id = ${item.id} ，付款期限： ${item.paymentDate} ，差： ${item.payDiffDays}`);
    });


    $('#myRenewContracList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於到期前申請續約。</h6>';
                return provision;
            },
        },
        "data": dataset_myCultivationRoom,
        "columns": [
            { data: 'startDate', title: "進駐開始" }, // 0
            { data: 'endDate', title: "進駐結束", }, // 1
            { data: 'building', title: "進駐區域" }, // 2
            { data: 'room', title: "室", }, // 3
            { data: 'thisTimeDeadline', title: "本階段<br class='d-none d-lg-block'>到期日", 
                render: function (data) {
                    if (!data) {
                        return '-';
                    } else {
                        return data;
                    }
                }
            }, // 4
            {
                data: 'nextTimeDeadline', title: "下階段<br class='d-none d-lg-block'>到期日",
                render: function (data) {
                    if (!data) {
                        return '-';
                    } else {
                        return data;
                    }
                }
            }, // 5
            { data: 'paymentDate', title: "最新<br class='d-none d-lg-block'>付款日",
                render: function (data) {
                    if (!data) {
                        return '-';
                    } else {
                        return data;
                    }
                }
             }, // 6
            { data: 'remark', title: "備註", }, // 7
            {
                data: 'id', title: "續約", // 8
                render: function (data, type, row) {
                    if (!row.endDiffDays) {
                        return '';
                    } else {
                        if (row.endDiffDays < 50) {
                            return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./renewContractApply.html?id=' + data + '" title="立即續約"><i class="fa-solid fa-repeat"></i></a>';
                        } else {
                            return '<button type="button" class="btn btn-light rounded-circle btn-sm" title="續約時間未到"><i class="fa-solid fa-hourglass-half"></i></button>';
                        }
                    }
                }
            },
            {
                data: 'id', visible: false, // 9
                render: function (data, type, row) {
                    const { endDate, thisTimeDeadline, nextTimeDeadline } = row;
                    const endDateObj = new Date(endDate);

                    if (endDateObj < today) {
                        return '9999-99-99'; // 確保過期的項目排在最後
                    } else {
                        if (nextTimeDeadline && nextTimeDeadline !== '') {
                            return nextTimeDeadline;
                        } else {
                            return thisTimeDeadline;
                        }
                    }
                }
            },


        ],
        order: [[9, 'asc']],
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
            { className: "text-lg-center", targets: [0, 1, 3, 4, 5, 6, 8] },
            { className: "text-nowrap", targets: [0, 1, 3, 4, 5, 6, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            if (!data.endDiffDays) {
                $('td', row).css('color', '#999');
            }
            $('td:eq(8)', row).css('max-width', '70px');
            [0, 1, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        },
    });

    // 匯款憑證按鈕
    $('.uploadRemittance, .reuploadRemittance').click(function (event) {
        // 每次點擊都刪除舊有的資料與錯誤訊息
        clearValues(['danger_paymentDate', 'danger_paymentAmount', 'danger_last5AccountNo', 'paymentDate', 'paymentAmount', 'last5AccountNo', 'last5AccountNo', 'remittancePdf']);

        // 抓取要代進的資料
        let sessionData = session_userData;
        // 同步session跟燈箱
        $('#company').val(sessionData.company);

        let button = $(this);
        let roomId = button.data('id'); // 獲取按鈕的 data-id 屬性

        if (roomId) {
            let cultivationRoomData = dataset_myCultivationRoom.find(cultivationRoom => cultivationRoom.id == roomId);
            if (cultivationRoomData) {
                $('#dataId').val(cultivationRoomData.id);
                $('#type').val('培育室');
                $('#paymentPurpose').val('階段費用');
                $('#itemNum').val(cultivationRoomData.building + '-' + cultivationRoomData.room);

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

            } else {
                console.error('cultivationRoom data not found for id:', roomId);
                return;
            }
        } else {
            console.error('cultivationRoom ID not found in URL');
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
            // 如果返回 true，開啟燈箱
            // $('#formRemittance').submit(); // 提交表單
            console.log('表單資料已送出');
            var formData = $('#formRemittance').serializeArray();
            console.log('表單資料：', JSON.stringify(formData, null, 2));
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請填上正確資料唷！', 'top');
        }
        // $('#formRemittance').submit(); // 提交表單
    });


});
