var dataset_cultivationRoomOpen = [
    {
        'id': '1',
        'building': '青創基地',
        'room': '101-A',
        'company': '馳晶科技股份有限公司',
        'rate': '80,000',
        'status': '已培育',
        'squareMeters': '12.5',
        'adminNote': '共用空間-A',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '郝有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
    },
    {
        'id': '2',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'company': '羿安整合行銷股份有限公司',
        'rate': '12,000',
        'status': '啟用',
        'squareMeters': '10.5',
        'adminNote': '',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '張有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
    },
    {
        'id': '3',
        'building': '挺生大樓培育區',
        'room': '714',
        'company': '博濟施生技股份有限公司',
        'rate': '6,000',
        'status': '啟用',
        'squareMeters': '10.0',
        'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '李有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
    },
    {
        'id': '4',
        'building': '產學實驗培育區',
        'room': '101',
        'company': '品庠醫藥生技股份有限公司',
        'rate': '30,000',
        'status': '啟用',
        'squareMeters': '17.4',
        'adminNote': '',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '周有錢',
        'createBy': '周小明',
        'createDate': '2023-01-15',
    },
    {
        'id': '5',
        'building': '青創基地',
        'room': '101-B',
        'company': '馳晶科技股份有限公司',
        'rate': '80,000',
        'status': '啟用',
        'squareMeters': '12.5',
        'adminNote': '共用空間-B',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '吳有錢',
        'createBy': '孫小明',
        'createDate': '2023-01-15',
    },
    {
        'id': '6',
        'building': '青創基地',
        'room': '501',
        'company': '',
        'rate': '80,000',
        'status': '啟用',
        'squareMeters': '12.5',
        'adminNote': '',
        'startDate': '',
        'endDate': '',
        'responsiblePerson': '',
        'createBy': '孫小明',
        'createDate': '2023-01-15',
    },
];
var dataset_cultivationRoomClose = [
    {
        'id': '1',
        'createDate': '2019-01-01',
        'building': '青創基地',
        'room': '101',
        'squareMeters': '10.0',
        'rate': '80,000',
        'removeDate': '2021-01-01',
        'adminNote': '分區域A',
        'createBy': '孫小美',
        'removeBy': '李小光',
    },
    {
        'id': '2',
        'createDate': '2020-05-01',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'squareMeters': '9.0',
        'rate': '12,000',
        'removeDate': '2021-05-01',
        'adminNote': '分區域A',
        'createBy': '孫小美',
        'removeBy': '李小光',
    },
    {
        'id': '3',
        'createDate': '2020-05-01',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'squareMeters': '9.0',
        'rate': '12,000',
        'removeDate': '2021-05-01',
        'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
        'createBy': '孫小美',
        'removeBy': '李小光',
    },
];
var dataset_roomHistoryListOpen = [
    {
        "createDate": "2019-01-19",
        "squareMeters": "56.4",
        "rate": "30,000",
        "startDate": "",
        "endDate": "",
        "company": "",
        "remark": "啟用",
        "createBy": "王大明",
    },
    {
        "createDate": "2019-08-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2019-09-01",
        "endDate": "2020-08-31",
        "company": "冠陞企業管理顧問股份有限公司",
        "remark": "廠商進駐",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-08-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2020-09-01",
        "endDate": "2021-08-31",
        "company": "冠陞企業管理顧問股份有限公司",
        "remark": "廠商進駐",
        "createBy": "王大明",
    },
    {
        "createDate": "2021-10-20",
        "squareMeters": "20.2",
        "rate": "",
        "startDate": "",
        "endDate": "",
        "company": "",
        "remark": "改坪數",
        "createBy": "王大明",
    },
];
var dataset_roomHistoryListClose = [
    {
        "createDate": "2019-01-19",
        "squareMeters": "56.4",
        "rate": "30,000",
        "startDate": "",
        "endDate": "",
        "company": "",
        "remark": "啟用",
        "createBy": "王大明",
    },
    {
        "createDate": "2019-08-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2019-09-01",
        "endDate": "2020-08-31",
        "company": "冠陞企業管理顧問股份有限公司",
        "remark": "廠商進駐",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-08-20",
        "squareMeters": "56.4",
        "rate": "1,300,000",
        "startDate": "2020-09-01",
        "endDate": "2021-08-31",
        "company": "冠陞企業管理顧問股份有限公司",
        "remark": "廠商進駐",
        "createBy": "王大明",
    },
    {
        "createDate": "2021-10-20",
        "squareMeters": "20.2",
        "rate": "",
        "startDate": "",
        "endDate": "",
        "company": "",
        "remark": "改坪數",
        "createBy": "王大明",
    },
    {
        "createDate": "2022-10-20",
        "squareMeters": "20.2",
        "rate": "",
        "startDate": "",
        "endDate": "",
        "company": "",
        "remark": "停用",
        "createBy": "王大明",
    },
];

$(function () {
    $('#cultivationRoom_OpenList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomOpen,
        "columns": [
            { data: 'building', title: "培育區域" }, // 0
            { data: 'room', title: "培育室" }, // 1
            { data: 'squareMeters', title: "坪數" }, // 2
            { data: 'rate', title: "預設服務費/月" }, // 3
            { data: 'company', title: "培育企業" }, // 4
            { data: 'adminNote', title: "管理備註" }, // 5
            {
                data: 'company', title: "當前狀態", // 6
                render: function (data) {
                    if (data) {
                        return '培育中';
                    } else {
                        return '尚未培育';
                    }
                }
            },
            {
                data: 'id', title: "詳情", // 7
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#openRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
                },
            },
            {
                data: 'id', title: "修改", // 8
                render: function (data) {
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                }
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
            { "searchable": false, "orderable": false, "targets": [7, 8] },
            { "className": "text-nowrap", "targets": [0, 1, 2, 3, 6] },
            { "className": "text-lg-center", "targets": [1, 6, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            [7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [2, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95rem');
            });
            // $('td:eq(0)', row).addClass('ps-3');
            // $('td:eq(3)', row).addClass('pe-4');
            // [3, 5].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            // });
            // $('td:eq(0)', row).css('min-width', '180px');
            // $('td:eq(2)', row).css('min-width', '280px');
        }
    });


    $('#cultivationRoom_CloseList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoomClose,
        "columns": [
            { data: 'createDate', title: "培育室<br>建立日期" },
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'squareMeters', title: "坪數" },
            { data: 'rate', title: "服務費/月" },
            { data: 'adminNote', title: "管理備註" },
            { data: 'removeDate', title: "最後<br>停用日" },
            {
                data: 'id', title: "歷史<br>紀錄",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-book"></i></button>'
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
                targets: [6],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [7, 8] },
            { "className": "text-nowrap", "targets": [0, 2, 3, 4, 6] },
            { "className": "text-center", "targets": [0, 2, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(1)', row).addClass('ps-3').css('min-width', '180px');
            [0, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('pe-4');
            });

        },
    });

    $('#roomHistoryList').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryListOpen,
    });

    $('#roomHistoryList2').DataTable({
        ...commonSettingsHistory,
        "data": dataset_roomHistoryListClose
    });

    // 同步燈箱顯示資料
    $('#openRoom_DetailsModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let openRoomId = String(button.data('id'));
        // console.log('openRoom Id:', openRoomId);
        let openRoomData = dataset_cultivationRoomOpen.find(openRoom => openRoom.id === openRoomId);
        if (openRoomData) {
            $('#building').text(openRoomData.building);
            $('#room').text(openRoomData.room);
            $('#rate').text(openRoomData.rate);
            $('#squareMeters').text(openRoomData.squareMeters);
            $('#companyName').text(openRoomData.company);
            $('#startDate').text(openRoomData.startDate);
            $('#endDate').text(openRoomData.endDate);
            $('#responsiblePerson').text(openRoomData.responsiblePerson);
            $('#adminNote').text(openRoomData.adminNote);
            $('#createBy').text(openRoomData.createBy);
            $('#createDate').text(openRoomData.createDate);

            //要加上用openRoomId去資料庫撈此id的歷史紀錄，放入dataset_roomHistoryListOpen

        } else {
            console.error('openRoomData data not found for id:', openRoomId);
        };
    });

    $('#closeRoom_DetailsModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let closeRoomId = String(button.data('id'));
        // console.log('openRoom Id:', openRoomId);
        let closeRoomData = dataset_cultivationRoomClose.find(openRoom => openRoom.id === closeRoomId);
        if (closeRoomData) {
            $('#close_building').text(closeRoomData.building);
            $('#close_room').text(closeRoomData.room);
            $('#close_rate').text(closeRoomData.rate);
            $('#close_squareMeters').text(closeRoomData.squareMeters);
            $('#close_adminNote').text(closeRoomData.adminNote);
            $('#close_createDate').text(closeRoomData.createDate);
            $('#close_createBy').text(closeRoomData.createBy);
            $('#close_removeDate').text(closeRoomData.removeDate);
            $('#close_removeBy').text(closeRoomData.removeBy);

            //要加上用closeRoomId去資料庫撈此id的歷史紀錄，放入dataset_roomHistoryListClose

        } else {
            console.error('closeRoomData data not found for id:', closeRoomId);
        };
    });



});