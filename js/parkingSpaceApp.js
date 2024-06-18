var dataset_parkingSpaceApp = [
    {
        'createDate': '2024-07-01',
        'company': '好棒棒股份有限公司',
        'name': '孫小美',
        'carType': '汽車',
        'licensePlateNum': '8866-AB',
        'endDate': '2024-08-30',
        'paymentDate': '2024-07-01',
        'status': '已收件，待收費',
        'id': '1',
        'parkingSpaceNum': 'B1-01',
    },
    {
        'createDate': '2024-06-30',
        'company': '好棒棒股份有限公司',
        'name': '孫中美',
        'carType': '機車',
        'licensePlateNum': '8GR-000',
        'endDate': '2024-08-30',
        'paymentDate': '2024-01-01',
        'status': '已核准',
        'id': '2',
        'parkingSpaceNum': 'B3-01',
    }
];

$(function () {

    $('#parkingSpaceApplicationList').DataTable({
        ...commonSettingsTable,
        "data": dataset_parkingSpaceApp,
        "columns": [
            { data: 'createDate', title: "申請日期" },
            { data: 'company', title: "承租人企業", },
            { data: 'carType', title: "車位類型", },
            { data: 'licensePlateNum', title: "車牌號碼", },
            { data: 'parkingSpaceNum', title: "車位號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'paymentDate', title: "付款日", },
            { data: 'status', title: "審核進度", },
            {
                data: 'id', title: "檢閱",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpaceDetail_' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
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
                targets: [4],
                responsivePriority: 3,
            },
            {
                targets: [7],
                className: "text-start",
            },
            { searchable: false, orderable: false, targets: [8] },
            { className: "text-center", targets: [2, 3, 4, 5, 6] },
            { className: "text-nowrap", targets: [2, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(8)', row).css('min-width', '70px');
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });
});