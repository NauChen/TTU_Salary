var dataset_cultivationRoomOpen = [
    {
        'id': '1',
        'building': '青創基地',
        'room': '101',
        'company': '馳晶科技股份有限公司',
        'rate': '80,000',
        'status': '已培育',
    },
    {
        'id': '2',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'company': '羿安整合行銷股份有限公司',
        'rate': '12,000',
        'status': '已培育',
    },
    {
        'id': '3',
        'building': '挺生大樓培育區',
        'room': '714',
        'company': '博濟施生技股份有限公司',
        'rate': '6,000',
        'status': '已培育',
    },
    {
        'id': '4',
        'building': '產學實驗培育區',
        'room': '101',
        'company': '品庠醫藥生技股份有限公司',
        'rate': '30,000',
        'status': '已培育',
    },
];
var dataset_cultivationRoomClose = [
    {
        'id': '1',
        'carateDate': '2019-01-01',
        'building': '青創基地',
        'room': '101',
        'squareMeters': '10.0',
        'rate': '80,000',
        'closeDate': '2021-01-01',
    },
    {
        'id': '2',
        'carateDate': '2020-05-01',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'squareMeters': '9.0',
        'rate': '12,000',
        'closeDate': '2021-05-01',
    },
];
var dataset_roomHistoryList1 = [
    {
        "createDate": "2019-01-19",
        "squareMeters": "56.4",
        "rate": "30,000",
        "startDate": "-",
        "endDate": "-",
        "company": "-",
        "responsiblePerson": "-",
        "remark": "啟用",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-01-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2020-03-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "responsiblePerson": "陳智揚",
        "remark": "-",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-02-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2020-03-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "responsiblePerson": "陳智揚",
        "remark": "一位躺在大門財富也能體驗高速，起點他的。",
        "createBy": "王大明",
    },
];
var dataset_roomHistoryList2 = [
    {
        "createDate": "2019-01-19",
        "squareMeters": "56.4",
        "rate": "30,000",
        "startDate": "-",
        "endDate": "-",
        "company": "-",
        "responsiblePerson": "-",
        "remark": "啟用",
        "createBy": "王大明",
    },
    {
        "createDate": "2019-01-20",
        "squareMeters": "56.4",
        "rate": "30,000",
        "startDate": "2020-03-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "responsiblePerson": "陳智揚",
        "remark": "-",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-05-18",
        "squareMeters": "15.28",
        "rate": "30,000",
        "startDate": "2019-10-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "responsiblePerson": "陳智揚",
        "remark": "-",
        "createBy": "王大明",
    },
];

$(function () {
    $('#cultivationRoom_OpenList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomOpen,
        "columns": [
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'company', title: "培育企業" },
            { data: 'rate', title: "服務費&ensp;/&ensp;月" },
            { data: 'status', title: "當前狀態" },
            {
                data: 'id', title: "詳情",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#openRoom_Details" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
                },
            },
            {
                data: 'id', title: "修改",
                render: function (data) {
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                },
            },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            {
                targets: [5],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [5, 6] },
            { "className": "text-nowrap", "targets": [0, 1, 4] },
            { "className": "text-center", "targets": [1, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(0)', row).addClass('ps-3');
            $('td:eq(3)', row).addClass('pe-5');
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
        }
    });

    $('#cultivationRoom_CloseList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomClose,
        "columns": [
            { data: 'carateDate', title: "培育室<br>建立日期" },
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'squareMeters', title: "可用坪數" },
            { data: 'rate', title: "服務費&ensp;/&ensp;月" },
            { data: 'closeDate', title: "最後停用日" },
            {
                data: 'id', title: "歷史<br>紀錄",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_Details" data-id="' + data + '"><i class="fa-solid fa-clock-rotate-left"></i></button>'
                }, className: 'text-center'
            },
            {
                data: 'id', title: "再次<br>上架",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-arrow-rotate-left"></i></button>'
                }, className: 'text-center'
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
                targets: [5],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [0, 2, 3, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 2, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-center');
            });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('pe-5');
            });
            $('td:eq(1)', row).addClass('ps-3').css('min-width', '160px');
        },
    });

    $('#roomHistoryList').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryList1,
    });

    $('#roomHistoryList2').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryList2
    });
});