var dataset_myCultivationRoom = [
    {
        'id': '1',
        'startDate': '2023-07-01',
        'endDate': '2024-06-31',
        'building': '新德惠大樓',
        'room': '101',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '2024-05-20',
        'remark': '已到期未續約',
    },
    {
        'id': '2',
        'startDate': '2023-07-14',
        'endDate': '2024-07-15',
        'building': '綜合大樓',
        'room': '104',
        'thisTimeDeadline': '2024-04-15',
        'nextTimeDeadline': '2024-07-15',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '3',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '105',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '4',
        'startDate': '2024-06-01',
        'endDate': '2026-05-31',
        'building': '實驗大樓',
        'room': '106',
        'thisTimeDeadline': '2025-05-01',
        'nextTimeDeadline': '2026-05-01',
        'paymentDate': '2024-11-28',
        'remark': '',
    },
    {
        'id': '5',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '實驗大樓',
        'room': '201',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '',
    },
    {
        'id': '6',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '北設工大樓',
        'room': '202',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-12-01',
        'paymentDate': '2024-11-27',
        'remark': '',
    },
    {
        'id': '7',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '尚志大樓',
        'room': 'A4-102',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-07-01',
        'paymentDate': '',
        'remark': '下階段款項已逾期，如若已付款請提供匯款資訊。',
    },
    {
        'id': '8',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '新德惠大樓',
        'room': 'A4-103',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '本階段為最末段，請準備續約。',
    },
    {
        'id': '9',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '綜合大樓',
        'room': '714',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-07-01',
        'paymentDate': '2024-11-28',
        'remark': '下階段已付款',
    },
    {
        'id': '10',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '809',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '本階段為最末段，請準備續約。',
    }
];






$(function () {
    const today = new Date();

    dataset_myCultivationRoom.forEach(item => {
        const endDate = new Date(item.endDate);
        const timeDiff = endDate.getTime() - today.getTime();
        item.endDiffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        const thisTimeDeadline = new Date(item.thisTimeDeadline);
        const nextTimeDeadline = new Date(item.nextTimeDeadline);

        if (isNaN(nextTimeDeadline.getTime())) {
            const deadLineDiff = thisTimeDeadline.getTime() - today.getTime();
            item.deadLineDiffDays = Math.ceil(deadLineDiff / (1000 * 3600 * 24));
        } else {
            const deadLineDiff = nextTimeDeadline.getTime() - today.getTime();
            item.deadLineDiffDays = Math.ceil(deadLineDiff / (1000 * 3600 * 24));
        }

        const paymentDate = new Date(item.paymentDate);
        const payDiff = paymentDate.getTime() - today.getTime();
        item.payDiffDays = Math.ceil(payDiff / (1000 * 3600 * 24));
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
            { data: 'building', title: "所在區域", }, // 2
            { data: 'room', title: "室", }, // 3
            { data: 'thisTimeDeadline', title: "本階段<br>到期日", }, // 4
            { data: 'nextTimeDeadline', title: "下階段<br>到期日", }, // 5
            { data: 'paymentDate', title: "已通知<br>付款日", }, // 6
            { data: 'remark', title: "備註", }, // 7
            {
                data: 'id', title: "通知<br>匯款", // 8
                render: function (data, type, row) {
                    const endDiffDays = row.endDiffDays;
                    const paymentDate = row.paymentDate;
                    if (endDiffDays < 0) {
                        return '';
                    } else {
                        if (paymentDate) {
                            return '<button type="button" class="btn btn-light rounded-circle remittance_voucher align_center reuploadRemittance" title="再次上傳匯款憑證" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
                        } else {
                            return '<button type="button" class="btn btn-outline-primary rounded-circle remittance_voucher align_center uploadRemittance" title="上傳匯款憑證" data-bs-toggle="modal" data-bs-target="#remittanceModal" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
                        }
                    }
                }, className: 'text-center text-nowrap'
            },
            {
                data: 'id', title: "續約", // 9
                render: function (data, type, row) {
                    const endDiffDays = row.endDiffDays;
                    if (endDiffDays < 0) {
                        return '';
                    } else {
                        if (endDiffDays < 50) {
                            return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./renewContractApply.html?id=' + data + '" title="立即續約"><i class="fa-solid fa-repeat"></i></a>';
                        } else {
                            return '<button type="button" class="btn btn-light rounded-circle btn-sm" title="續約時間未到"><i class="fa-solid fa-hourglass-half"></i></button>';
                        }
                    }
                }
            },
            {
                data: 'id', visible: false, //10
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
        order: [[10, 'asc']],
        "columnDefs": [
            {
                targets: [2],
                responsivePriority: 1,
            },
            {
                targets: [3],
                responsivePriority: 2,
            },
            {
                targets: [8],
                responsivePriority: 3,
            },

            { searchable: false, orderable: false, targets: [8, 9] },
            { className: "text-center", targets: [0, 1, 3, 4, 5, 6, 8] },
            { className: "text-nowrap", targets: [0, 1, 3, 4, 5, 6, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('max-width', '70px');
            [0, 1, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.9em');
            });
        },
    });

    $('.uploadRemittance, .reuploadRemittance').click(function (event) {
        // 每次點擊都刪除舊有的錯誤訊息
        $('#danger_last5AccountNo').text('');
        $('#danger_paymentDate').text('');

        let button = $(this);
        let roomId = button.data('id'); // 獲取按鈕的 data-id 屬性

        if (!roomId) {
            console.error('cultivationRoom ID not found in URL');
            return;
        }

        let cultivationRoomData = dataset_myCultivationRoom.find(cultivationRoom => cultivationRoom.id == roomId);

        if (!cultivationRoomData) {
            console.error('cultivationRoom data not found for id:', roomId);
            return;
        }

        $('#building').val(cultivationRoomData.building);
        $('#room').val(cultivationRoomData.room);

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
            // $('#parkingSpaceRenew_pdf').modal('show');
            $('#formRemittance').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請上傳行照圖檔，並裁剪成指定大小唷！', 'top');
        }
        $('#formRemittance').submit(); // 提交表單
    });




    // $('[data-bs-toggle="tooltip"]').tooltip();
    // $('.uploadRemittance').click(function (event) {
    //     let button = $(this);
    //     let roomId = button.data('id'); // 獲取按鈕的 data-id 屬性

    //     if (roomId) {
    //         // console.log('room ID:', roomId);
    //         let cultivationRoomData = dataset_myCultivationRoom.find(cultivationRoom => cultivationRoom.id == roomId);
    //         // console.log('cultivationRoomData:', cultivationRoomData);
    //         if (cultivationRoomData) {
    //             $('#building').val(cultivationRoomData.building);
    //             $('#room').val(cultivationRoomData.room);

    //         } else {
    //             console.error('cultivationRoom data not found for id:', roomId);
    //         }
    //     } else {
    //         console.error('cultivationRoom ID not found in URL');
    //     }


    // });


    // $('.reuploadRemittance').click(function (event) {
    //     event.preventDefault(); // 阻止默認行為

    //     let button = $(this);
    //     let roomId = button.data('id'); // 獲取按鈕的 data-id 屬性

    //     swalConfirm(
    //         '曾填過匯款通知，要再填一次嗎?', // 顯示的問題
    //         '對，我要重新填寫上傳。', // YES按鈕的文字
    //         '不，回到上一步。', // NO按鈕的文字
    //         function () {
    //             // YES按鈕點擊後開啟燈箱
    //             $('#remittanceModal').modal('show');
    //             if (roomId) {
    //                 // console.log('room ID:', roomId);
    //                 let cultivationRoomData = dataset_myCultivationRoom.find(cultivationRoom => cultivationRoom.id == roomId);
    //                 // console.log('cultivationRoomData:', cultivationRoomData);
    //                 if (cultivationRoomData) {
    //                     $('#building').val(cultivationRoomData.building);
    //                     $('#room').val(cultivationRoomData.room);

    //                 } else {
    //                     console.error('cultivationRoom data not found for id:', roomId);
    //                 }
    //             } else {
    //                 console.error('cultivationRoom ID not found in URL');
    //             }
    //         }
    //     );
    // });
});


// $('#remittanceModal').data('id', roomId); // 可以選擇傳遞 data-id 到燈箱中