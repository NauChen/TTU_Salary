// var dataset_parkingSpaceAll = [
//     {
//         'id': '1',
//         'createDate': '2024-06-01',
//         'building': '校本部',
//         'basementNum': '10',
//         'rate': '3,000',
//         'carType': '汽車',
//         'status': '啟用',
//         'adminNote': '費用共用車號AB-1234',
//         'createBy': "AAA",

//         'company': '馳晶科技股份有限公司',
//         'startDate': '2024-06-01',
//         'endDate': '2024-07-01',
//         'name': '李大華',
//         'phone': '02-12345678',
//         'jobTitle': '工程師',
//         'ext': '101',
//         'licensePlateNum': '5678-AB',
//         'applicationFile': '',
//     },
//     {
//         'id': '2',
//         'createDate': '2024-06-02',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-20',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",
        
//         'company': '宏達電股份有限公司',
//         'name': '王小美',
//         'phone': '02-23456789',
//         'adminNote': '共用車號CD-5678',
//         'jobTitle': '經理',
//         'ext': '202',
//         'applicationFile': '',
//         'startDate': '2024-06-02',
//         'endDate': '2024-07-02',
//         'licensePlateNum': '1234-CD'
//     },
//     {
//         'id': '3',
//         'createDate': '2024-06-03',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-30',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'createBy': "CCC",
        
//         'company': '威盛電子股份有限公司',
//         'name': '張志明',
//         'phone': '02-34567890',
//         'adminNote': '',
//         'jobTitle': '助理',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '2024-06-03',
//         'endDate': '2024-07-03',
//         'licensePlateNum': '1CD-234'
//     },
//     {
//         'id': '4',
//         'createDate': '2024-06-04',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-05',
//         'company': '華碩電腦股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "EEE",

//         'name': '黃國強',
//         'phone': '02-45678901',
//         'adminNote': '費用共用車號EF-6789',
//         'jobTitle': '市場行銷',
//         'ext': '303',
//         'applicationFile': '',
//         'startDate': '2024-06-04',
//         'endDate': '2024-07-04',
//         'licensePlateNum': '3456-EF'
//     },
//     {
//         'id': '5',
//         'createDate': '2024-06-05',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-15',
//         'company': '',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",
        
//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '6',
//         'createDate': '2024-06-06',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-12',
//         'company': '聯發科技股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'createBy': "BBB",

//         'name': '陳美麗',
//         'phone': '02-56789012',
//         'adminNote': '',
//         'jobTitle': '設計師',
//         'ext': '404',
//         'applicationFile': '',
//         'startDate': '2024-06-06',
//         'endDate': '2024-07-06',
//         'licensePlateNum': '2EF-345'
//     },
//     {
//         'id': '7',
//         'createDate': '2024-06-07',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-21',
//         'company': '台積電股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '林小龍',
//         'phone': '02-67890123',
//         'adminNote': '費用共用車號GH-7890',
//         'jobTitle': '技術顧問',
//         'ext': '505',
//         'applicationFile': '',
//         'startDate': '2024-06-07',
//         'endDate': '2024-07-07',
//         'licensePlateNum': '7890-GH'
//     },
//     {
//         'id': '8',
//         'createDate': '2024-06-08',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-08',
//         'company': '廣達電腦股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '許志安',
//         'phone': '02-78901234',
//         'adminNote': '費用共用車號IJ-2345',
//         'jobTitle': '行銷經理',
//         'ext': '606',
//         'applicationFile': '',
//         'startDate': '2024-06-08',
//         'endDate': '2024-07-08',
//         'licensePlateNum': '2345-IJ'
//     },
//     {
//         'id': '9',
//         'createDate': '2024-06-09',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-13',
//         'company': '和碩聯合科技股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'createBy': "BBB",

//         'name': '周杰倫',
//         'phone': '02-89012345',
//         'adminNote': '',
//         'jobTitle': '產品經理',
//         'ext': '707',
//         'applicationFile': '',
//         'startDate': '2024-06-09',
//         'endDate': '2024-07-09',
//         'licensePlateNum': '3GH-456'
//     },
//     {
//         'id': '10',
//         'createDate': '2024-06-10',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-14',
//         'company': '',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '11',
//         'createDate': '2024-06-11',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-02',
//         'company': '友達光電股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '蔡依林',
//         'phone': '02-90123456',
//         'adminNote': '費用共用車號KL-5678',
//         'jobTitle': '行政助理',
//         'ext': '808',
//         'applicationFile': '',
//         'startDate': '2024-06-11',
//         'endDate': '2024-07-11',
//         'licensePlateNum': '5678-KL'
//     },
//     {
//         'id': '12',
//         'createDate': '2024-06-12',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-09',
//         'company': '聯合報股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'createBy': "BBB",

//         'name': '鄭中基',
//         'phone': '02-01234567',
//         'adminNote': '',
//         'jobTitle': '記者',
//         'ext': '909',
//         'applicationFile': '',
//         'startDate': '2024-06-12',
//         'endDate': '2024-07-12',
//         'licensePlateNum': '1IJ-890'
//     },
//     {
//         'id': '13',
//         'createDate': '2024-06-13',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-11',
//         'company': '中華電信股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '蕭敬騰',
//         'phone': '02-12345678',
//         'adminNote': '費用共用車號MN-1234',
//         'jobTitle': '客服專員',
//         'ext': '1010',
//         'applicationFile': '',
//         'startDate': '2024-06-13',
//         'endDate': '2024-07-13',
//         'licensePlateNum': '1234-MN'
//     },
//     {
//         'id': '14',
//         'createDate': '2024-06-14',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-06',
//         'company': '台灣大哥大股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'createBy': "BBB",

//         'name': '林宥嘉',
//         'phone': '02-23456789',
//         'adminNote': '費用共用車號OP-5678',
//         'jobTitle': '資深工程師',
//         'ext': '1111',
//         'applicationFile': '',
//         'startDate': '2024-06-14',
//         'endDate': '2024-07-14',
//         'licensePlateNum': '5678-OP'
//     },
//     {
//         'id': '15',
//         'createDate': '2024-06-15',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-07',
//         'company': '',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'createBy': "BBB",

//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '20',
//         'carateDate': '2019-01-01',
//         'building': '校本部',
//         'basementNum': '101',
//         'squareMeters': '10.0',
//         'rate': '100',
//         'closeDate': '2021-01-01',
//         'adminNote': '',
//         'status': '停用',
        
//         'createBy': "BBB",
//     },
//     {
//         'id': '21',
//         'carateDate': '2020-05-01',
//         'building': '新德惠大樓',
//         'basementNum': 'A4-102',
//         'squareMeters': '9.0',
//         'rate': '2,000',
//         'closeDate': '2021-05-01',
//         'adminNote': '心血來潮想說停用好惹',
//         'status': '停用',
//         'createBy': "BBB",
//     },
// ];

var dataset_parkingSpaceHistory = [
    {
        "createDate": "2019-01-19",
        "rate": "2,000",
        "startDate": "-",
        "endDate": "-",
        "company": "-",
        "licensePlateNum": "-",
        "remark": "啟用",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-01-20",
        "rate": "3,000",
        "startDate": "2020-03-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "licensePlateNum": "1234-MN",
        "remark": "-",
        "createBy": "王大明",
    },
    {
        "createDate": "2020-02-20",
        "rate": "2,500",
        "startDate": "2020-03-01",
        "endDate": "2020-09-30",
        "company": "冠陞企業管理顧問股份有限公司",
        "licensePlateNum": "1234-MN",
        "remark": "一位躺在大門財富也能體驗高速，起點他的。",
        "createBy": "王大明",
    },
];


$(function () {
    const dataset_parkingSpace_OpenList = dataset_parkingSpaceAll.filter(item => item.status === "啟用");
    const dataset_parkingSpace_CloseList = dataset_parkingSpaceAll.filter(item => item.status === "停用");

    $('#parkingSpaceHistoryList').DataTable({
        ...commonSettingsHistory,
        "data": dataset_parkingSpaceHistory,
        "columns": [
            { data: 'createDate', title: "紀錄日期" }, //0
            { data: 'licensePlateNum', title: "承租車牌", }, //1
            { data: 'rate', title: "服務費/月", }, //2
            { data: 'startDate', title: "承租開始", }, //3
            { data: 'endDate', title: "承租結束", }, //4
            { data: 'company', title: "承租企業", }, //5
            { data: 'remark', title: "操作紀錄", }, //6
            { data: 'createBy', title: "操作者", }, //7
        ],
    });

    $('#parkingSpace_OpenList').DataTable({
        ...commonSettingsTable,
        "data": dataset_parkingSpace_OpenList,
        "columns": [
            { data: 'building', title: "車位位置" }, // 0
            { data: 'basementNum', title: "車位號碼", className: 'text-center' }, // 1
            { data: 'rate', title: "預設<br class='d-none d-lg-block'>服務費/月" }, // 2
            { data: 'company', title: "承租公司" }, // 3
            { data: 'licensePlateNum', title: "車牌號碼" }, // 4
            { data: 'endDate', title: "承租到期日" }, // 5
            { data: 'adminNote', title: "管理備註" }, // 6
            {
                data: 'id', title: "詳情", // 7
                render: function (data, type, row) {
                    let icon = '';
                    if (row.carType === '汽車') {
                        icon = '<i class="fa-solid fa-car-side"></i>';
                    } else if (row.carType === '機車') {
                        icon = '<i class="fa-solid fa-motorcycle"></i>';
                    } else {
                        icon = '<i class="fa-solid fa-info"></i>';
                    }
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm car_icon" data-bs-toggle="modal" data-bs-target="#parkingSpace_DetailsModel" data-id="' + data + '">' + icon + '</button>';
                },
            },
            {
                data: 'id', title: "修改", //8
                render: function (data) {
                    // return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./parkingSpaceEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                      return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord btnThrottle" href="/ParkingSpace/Edit/' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                },
            },
            { data: 'carType', visible: false }, // 9
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
                targets: [3],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [7, 8] },
            { "className": "text-nowrap", "targets": [0, 1, 2, 4, 5] },
            { "className": "text-lg-center", "targets": [5, 7, 8] },
        ],
        "order": [[3, "asc"]],
        createdRow: function (row, data, dataIndex) {
            [7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            $('td:eq(2)', row).addClass('pe-3');
            [0, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95rem');
            });
        }
    });

    $('#parkingSpace_CloseList').DataTable({
        ...commonSettingsTable,
        "data": dataset_parkingSpace_CloseList,
        "columns": [
            { data: 'carateDate', title: "停車位<br class='d-none d-lg-block'>建立日期" }, // 0
            { data: 'building', title: "車位位置" }, // 1
            { data: 'room', title: "車位號碼", className: 'text-center' }, // 2
            { data: 'rate', title: "預設<br class='d-none d-lg-block'>服務費/月" }, // 3
            { data: 'adminNote', title: "管理備註" }, // 4
            { data: 'closeDate', title: "最後停用日" }, // 5
            {
                data: 'id', title: "歷史<br class='d-none d-lg-block'>紀錄", // 6
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpace_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-book"></i></button>'
                }
            },
            {
                data: 'id', title: "再次<br class='d-none d-lg-block'>上架", // 7
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
                targets: [5],
                responsivePriority: 3,
            },
            { "searchable": false, "orderable": false, "targets": [6, 7] },
            { "className": "text-nowrap", "targets": [0, 1, 2, 3, 5] },
            { "className": "text-lg-center", "targets": [0, 5, 6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            [6, 7].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [0, 3, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            $('td:eq(3)', row).addClass('pe-3');
        },
    });

    // 同步燈箱顯示資料
    $('#parkingSpace_DetailsModel').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let thisPSId = String(button.data('id'));
        // console.log('thisPS Id:', thisPSId);
        let parkingSpaceData = dataset_parkingSpaceAll.find(parkingSpace => parkingSpace.id === thisPSId);
        if (parkingSpaceData) {
            $('#venderBox').hide();
            $('#PS_building').text(parkingSpaceData.building);
            $('#PS_basementNum').text(parkingSpaceData.basementNum);
            $('#PS_rate').text(parkingSpaceData.rate);
            $('#PS_carType').text(parkingSpaceData.carType);
            $('#PS_adminNote').text(parkingSpaceData.adminNote);
            $('#PS_createBy').text(parkingSpaceData.createBy);
            $('#PS_createDate').text(parkingSpaceData.createDate);

            if (parkingSpaceData.status === "啟用") {
                $('#venderBox').show();
                $('#PS_companyName').text(parkingSpaceData.company);
                $('#PS_startDate').text(parkingSpaceData.startDate);
                $('#PS_endDate').text(parkingSpaceData.endDate);
                $('#PS_applicant').text(parkingSpaceData.name);
                $('#PS_licensePlateNum').text(parkingSpaceData.licensePlateNum);
            }

        } else {
            console.error('parkingSpaceData data not found for id:', thisPSId);
        };
    });

    //要加上用thisPSId去資料庫撈此id的歷史紀錄，放入dataset_parkingSpaceHistory
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


    // $('.cannotChange').click(function () {
    //     swalToastWarning('承租中不可修改歐！', 'top');
    // });


});