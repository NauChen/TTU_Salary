var dataset_cultivationRoomAll = [
    {
        'id': '1',
        'building': '青創基地',
        'room': '101-A',
        'company': '馳晶科技股份有限公司',
        'rate': '80,000',
        'squareMeters': '12.5',
        'adminNote': '共用空間-A',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '郝有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '2',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'company': '羿安整合行銷股份有限公司',
        'rate': '12,000',
        'squareMeters': '10.5',
        'adminNote': '',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '張有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '3',
        'building': '挺生大樓培育區',
        'room': '714',
        'company': '博濟施生技股份有限公司',
        'rate': '6,000',
        'squareMeters': '10.0',
        'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '李有錢',
        'createBy': '王小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '4',
        'building': '產學實驗培育區',
        'room': '101',
        'company': '品庠醫藥生技股份有限公司',
        'rate': '30,000',
        'squareMeters': '17.4',
        'adminNote': '',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '周有錢',
        'createBy': '周小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '5',
        'building': '青創基地',
        'room': '101-B',
        'company': '馳晶科技股份有限公司',
        'rate': '80,000',
        'squareMeters': '12.5',
        'adminNote': '共用空間-B',
        'startDate': '2024-01-05',
        'endDate': '2025-01-05',
        'responsiblePerson': '吳有錢',
        'createBy': '孫小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '6',
        'building': '青創基地',
        'room': '501',
        'company': '',
        'rate': '80,000',
        'squareMeters': '12.5',
        'adminNote': '',
        'startDate': '',
        'endDate': '',
        'responsiblePerson': '',
        'createBy': '孫小明',
        'createDate': '2023-01-15',
        'status': '啟用',
    },
    {
        'id': '21',
        'createDate': '2019-01-01',
        'building': '青創基地',
        'room': '101',
        'squareMeters': '10.0',
        'rate': '80,000',
        'removeDate': '2021-01-01',
        'adminNote': '分區域A',
        'createBy': '孫小美',
        'removeBy': '李小光',
        'status': '停用',
    },
    {
        'id': '22',
        'createDate': '2020-05-01',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'squareMeters': '9.0',
        'rate': '12,000',
        'removeDate': '2021-05-01',
        'adminNote': '分區域A',
        'createBy': '孫小美',
        'removeBy': '李小光',
        'status': '停用',
    },
    {
        'id': '23',
        'createDate': '2020-05-01',
        'building': '綜合工廠培育區',
        'room': 'A4-102',
        'squareMeters': '9.0',
        'rate': '12,000',
        'removeDate': '2021-05-01',
        'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
        'createBy': '孫小美',
        'removeBy': '李小光',
        'status': '停用',
    },
];

var dataset_cultivationRoomHistory = [
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
]

$(function () {
    const dataset_cultivationRoom_OpenList = dataset_cultivationRoomAll.filter(item => item.status === "啟用");
    const dataset_cultivationRoom_CloseList = dataset_cultivationRoomAll.filter(item => item.status === "停用");
    $('#cultivationRoom_OpenList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoom_OpenList,
        "columns": [
            { data: 'building', title: "培育區域" }, // 0
            { data: 'room', title: "培育室" }, // 1
            { data: 'squareMeters', title: "坪數" }, // 2
            { data: 'rate', title: "預設<br class='d-none d-lg-block'>服務費/月" }, // 3
            { data: 'company', title: "培育企業" }, // 4
            { data: 'endDate', title: "培育到期日" }, // 5
            { data: 'adminNote', title: "管理備註" }, // 6
            {
                data: 'id', title: "詳情", // 7
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#cultivationRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
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
            { "className": "text-nowrap", "targets": [0, 1, 2, 3, 5] },
            { "className": "text-lg-center", "targets": [1, 5, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            [7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 2, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95rem');
            });
            $('td:eq(4)', row).css('min-width', '250px');
            [2, 3].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('pe-3');
            });
        }
    });
    $('#cultivationRoom_CloseList').DataTable({
        ...commonSettingsTable,
        "data": dataset_cultivationRoom_CloseList,
        "columns": [
            { data: 'createDate', title: "培育室<br class='d-none d-lg-block'>建立日期" },
            { data: 'building', title: "培育區域" },
            { data: 'room', title: "培育室" },
            { data: 'squareMeters', title: "坪數" },
            { data: 'rate', title: "預設<br class='d-none d-lg-block'>服務費/月" },
            { data: 'adminNote', title: "管理備註" },
            { data: 'removeDate', title: "最後<br class='d-none d-lg-block'>停用日" },
            {
                data: 'id', title: "歷史<br class='d-none d-lg-block'>紀錄",
                render: function (data) {
                    // return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-book"></i></button>'
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#cultivationRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-book"></i></button>'
                }
            },
            {
                data: 'id', title: "再次<br class='d-none d-lg-block'>上架",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-arrow-rotate-left"></i></button>'
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
                targets: [6],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [7, 8] },
            { "className": "text-nowrap", "targets": [0, 2, 3, 4, 6] },
            { "className": "text-lg-center", "targets": [0, 2, 6, 7, 8] },
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
                $('td:eq(' + colIdx + ')', row).addClass('pe-3');
            });

        },
    });
    $('#roomHistoryList').DataTable({
        ...commonSettingsHistory,
        "data": dataset_cultivationRoomHistory,
        "columns": [
            { data: 'createDate', title: "紀錄日期" }, //0
            { data: 'squareMeters', title: "坪數" }, //1
            { data: 'rate', title: "服務費/月", }, //2
            { data: 'startDate', title: "培育開始", }, //3
            { data: 'endDate', title: "培育結束", }, //4
            { data: 'company', title: "培育企業", }, //5
            { data: 'remark', title: "操作紀錄", }, //6
            { data: 'createBy', title: "操作者", }, //7
        ],
    });
    // 同步燈箱顯示資料
    $('#cultivationRoom_DetailsModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let thisRoomId = String(button.data('id'));
        // console.log('thisRoom Id:', thisRoomId);
        let thisRoomData = dataset_cultivationRoomAll.find(thisRoom => thisRoom.id === thisRoomId);
        if (thisRoomData) {
            $('#venderBox').hide();
            $('#CR_building').text(thisRoomData.building);
            $('#CR_room').text(thisRoomData.room);
            $('#CR_rate').text(thisRoomData.rate);
            $('#CR_squareMeters').text(thisRoomData.squareMeters);
            $('#CR_adminNote').text(thisRoomData.adminNote);
            $('#CR_createBy').text(thisRoomData.createBy);
            $('#CR_createDate').text(thisRoomData.createDate);

            if (thisRoomData.status === '啟用') {
                $('#venderBox').show();
                $('#CR_companyName').text(thisRoomData.company);
                $('#CR_startDate').text(thisRoomData.startDate);
                $('#CR_endDate').text(thisRoomData.endDate);
                $('#CR_responsiblePerson').text(thisRoomData.responsiblePerson);
            }

        } else {
            console.error('thisRoomData data not found for id:', thisRoomId);
        };

        // 要加上用thisRoomId去資料庫撈此id的歷史紀錄，放入dataset_cultivationRoomHistory
        // 使用 AJAX 發送請求到後端
        // $.ajax({
        //     url: '/your-endpoint', // 後端端點
        //     method: 'POST',
        //     data: { roomId: thisRoomId },
        //     success: function (response) {
        //         console.log('成功傳遞 roomId:', response);
        //     },
        //     error: function (jqXHR, textStatus, errorThrown) {
        //         console.error('傳遞 roomId 時出錯:', textStatus, errorThrown);
        //     }
        // });
    });

});