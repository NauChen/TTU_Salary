var dataset_myCultivationRoom = [
    {
        'id': '1',
        'startDate': '2023-07-01',
        'endDate': '2024-06-31',
        'building': '新德惠大樓',
        'room': '101',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-18',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-27'
    },
    {
        'id': '2',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '綜合大樓',
        'room': '104',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-19',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-28'
    },
    {
        'id': '3',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '105',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-17',
        'secondDeadline': '',
        'paymentDateSecond': ''
    },
    {
        'id': '4',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '實驗大樓',
        'room': '106',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-19',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-28'
    },
    {
        'id': '5',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '實驗大樓',
        'room': '201',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-18',
        'secondDeadline': '',
        'paymentDateSecond': ''
    },
    {
        'id': '6',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '北設工大樓',
        'room': '202',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-18',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-27'
    },
    {
        'id': '7',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '尚志大樓',
        'room': 'A4-102',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-19',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-28'
    },
    {
        'id': '8',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '新德惠大樓',
        'room': 'A4-103',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-18',
        'secondDeadline': '',
        'paymentDateSecond': ''
    },
    {
        'id': '9',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '綜合大樓',
        'room': '714',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-19',
        'secondDeadline': '2024-12-01',
        'paymentDateSecond': '2024-11-28'
    },
    {
        'id': '10',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '809',
        'firstDeadline': '2024-05-22',
        'paymentDateFirst': '2024-05-17',
        'secondDeadline': '',
        'paymentDateSecond': ''
    }
];






$(function () {
    const today = new Date();
    dataset_myCultivationRoom.forEach(item => {
        const endDate = new Date(item.endDate);
        const timeDiff = endDate.getTime() - today.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        item.diffDays = diffDays < 0 ? null : ((-1) * diffDays);
        console.log('id = ' + item.id + ' ，結束日期： ' + item.endDate + ' ，今日： 2024-06-18' + ' ，差： ' + item.diffDays);
    });

    $('#myRenewContracList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於車位到期前申請續約。</h6>';
                return provision;
            },
        },
        "data": dataset_myCultivationRoom,
        "columns": [
            { data: 'startDate', title: "進駐開始" }, // 0
            { data: 'endDate', title: "進駐結束", }, // 1
            { data: 'building', title: "所在區域", }, // 2
            { data: 'room', title: "室", }, // 3
            { data: 'firstDeadline', title: "第一階段<br>到期日", }, // 4
            { data: 'paymentDateFirst', title: "付款日", }, // 5
            { data: 'secondDeadline', title: "第二階段<br>到期日", }, // 6
            { data: 'paymentDateSecond', title: "付款日", }, // 7
            {
                data: 'id', title: "續約", // 8
                render: function (data, type, row) {
                    const diffDays = row.diffDays;
                    if (diffDays === null) {
                        return '<button type="button" class="btn btn-light rounded-circle btn-sm" title="續約時間已過"><i class="fa-solid fa-hourglass-end"></i></button>';
                    } else if (diffDays >= -10) {
                        return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./renewContractApply.html?id=' + data + '" title="立即續約"><i class="fa-solid fa-repeat"></i></a>';
                    } else {
                        return '<button type="button" class="btn btn-light rounded-circle btn-sm" title="續約時間未到"><i class="fa-solid fa-hourglass-half"></i></button>';
                    }
                },
            },
            { data: 'diffDays', visible: false },
        ],
        order: [[9, 'desc']],
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
            { className: "text-center", targets: [0, 1, 3, 4, 5, 6, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 1, 4, 5, 6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em').addClass('text-nowrap');
            });
            $('td:eq(8)', row).css('max-width', '70px');
            // [0, 1, 4, 5, 6, 7].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            // });
            // [7].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
        },
    });
    // $('[data-bs-toggle="tooltip"]').tooltip();
});

