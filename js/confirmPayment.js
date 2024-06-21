var dataset_confirmPaymentCultivationRoom = [
    {
        'id': '1',
        'paymentDate': '2024-05-10',
        'company': '超級棒股份有限公司',
        'amount': '40,000',
        'firstDeadline': '2024-05-20',
        'receivedDateFirst': '2024-05-18',
        'secondDeadline': '2024-06-20',
        'status': '已配置',
        'adminNote': '第一階段已確認付款',
        'receivedDateSecond': '2024-06-01'
    },
    {
        'id': '2',
        'paymentDate': '2024-05-12',
        'company': '巨峰科技股份有限公司',
        'amount': '30,000',
        'firstDeadline': '2024-05-22',
        'receivedDateFirst': '',
        'secondDeadline': '',
        'status': '未確認入帳',
        'adminNote': '等待第一階段付款確認',
        'receivedDateSecond': ''
    },
    {
        'id': '3',
        'paymentDate': '2024-05-15',
        'company': '百通電腦股份有限公司',
        'amount': '25,000',
        'firstDeadline': '2024-05-25',
        'receivedDateFirst': '2024-05-23',
        'secondDeadline': '',
        'status': '已配置',
        'adminNote': '第二階段未付款',
        'receivedDateSecond': ''
    },
    {
        'id': '4',
        'paymentDate': '2024-05-17',
        'company': '聯合電子股份有限公司',
        'amount': '35,000',
        'firstDeadline': '2024-05-27',
        'receivedDateFirst': '',
        'secondDeadline': '2024-06-27',
        'status': '未確認入帳',
        'adminNote': '等待第一階段付款確認',
        'receivedDateSecond': ''
    },
    {
        'id': '5',
        'paymentDate': '2024-05-20',
        'company': '大漢建設股份有限公司',
        'amount': '50,000',
        'firstDeadline': '2024-05-30',
        'receivedDateFirst': '2024-05-28',
        'secondDeadline': '2024-06-30',
        'status': '已配置',
        'adminNote': '',
        'receivedDateSecond': '2024-06-15'
    }
];

$(function () {


    $('#confirmPaymentCultivationRoomList').DataTable({
        ...commonSettingsTable,
        "data": dataset_confirmPaymentCultivationRoom,
        "columns": [
            { data: 'paymentDate', title: "廠商通知<br>付款日", }, // 0
            { data: 'company', title: "公司名稱", }, // 1
            { data: 'amount', title: "費用", }, // 2
            { data: 'firstDeadline', title: "一階段<br>到期日", }, // 3
            { data: 'receivedDateFirst', title: "一階段<br>入帳日", }, // 4
            { data: 'secondDeadline', title: "二階段<br>到期日", }, // 5
            { data: 'status', title: "配置培育室", }, // 6
            { data: 'adminNote', title: "管理備註", }, // 7
            {
                data: 'id', title: "檢閱", // 8
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }, className: 'text-center text-nowrap'
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
            { className: "text-center", targets: [0, 3, 4, 5, 8] },
            { className: "text-nowrap", targets: [0, 2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            [0, 3, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95em');
            });
            // [1, 4, 5].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            // });
        }
    });

});