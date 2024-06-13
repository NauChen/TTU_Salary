var dataset_myParkingSpaceHistory = [
    {
        'paymentDate': '2024-01-01',
        'type': '汽車',
        'parkingSpaceNum': 'B4-30',
        'name': '陳凱富',
        'licensePlateNum': 'REB-0869',
        'endDate': '2024-02-28',
        'remark': '-',
    },
    {
        'paymentDate': '2024-01-01',
        'type': '機車',
        'parkingSpaceNum': 'B5-1',
        'name': '陳昭嫺',
        'licensePlateNum': ' 8470-N8',
        'endDate': '2024-02-28',
        'remark': '-',
    }
];

$(function () {
    $('#myParkingSpaceList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於車位到期前申請續約。</h6>';
                return provision;
            },
        },
        "data": dataset_myParkingSpaceHistory,
        "columns": [
            { data: 'paymentDate', title: "付款日", },
            { data: 'type', title: "車位類型", },
            { data: 'parkingSpaceNum', title: "車位號碼", },
            { data: 'name', title: "登記使用人" },
            { data: 'licensePlateNum', title: "車牌號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'remark', title: "備註", },
        ],
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
            {
                targets: [6],
                className: "text-start",
            },
            { className: "text-center", targets: [0, 1, 2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [0, 1, 2, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            $('td:eq(6)', row).css('min-width', '200px');
        },
    });

});

