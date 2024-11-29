// var dataset_idCardAll = [
//     {
//         'id': '1',
//         'idCardNum': 'ID00000001',
//         'company': '超級棒股份有限公司',
//         'name': '孫小美',
//         'print': '1',
//         'status': '遺失',
//         'readLibrary': '開放',
//         'createDate': '2024-07-01',
//         'adminNote': '',
//         'deactivationDate': '2024-08-30',
//         'returnDate': 'X',
//     },
//     {
//         'id': '2',
//         'idCardNum': 'ID00000002',
//         'company': '智力科技有限公司',
//         'name': '王大明',
//         'print': '2',
//         'status': '停用',
//         'readLibrary': '不開放',
//         'createDate': '2024-07-02',
//         'adminNote': '',
//         'deactivationDate': '2024-07-03',
//         'returnDate': '',
//     },
//     {
//         'id': '3',
//         'idCardNum': 'ID00000003',
//         'company': '光速物流有限公司',
//         'name': '李志偉',
//         'print': '1',
//         'status': '停用',
//         'readLibrary': '開放',
//         'createDate': '2024-07-03',
//         'adminNote': '',
//         'deactivationDate': '2024-07-04',
//         'returnDate': '2024-07-06',
//     },
//     {
//         'id': '4',
//         'idCardNum': 'ID00000004',
//         'company': '鴻海電子有限公司',
//         'name': '劉敏勳',
//         'print': '3',
//         'status': '使用中',
//         'readLibrary': '不開放',
//         'createDate': '2024-07-04',
//         'adminNote': '',
//         'deactivationDate': '',
//         'returnDate': '',
//     },
//     {
//         'id': '5',
//         'idCardNum': 'ID00000005',
//         'company': '百思買有限公司',
//         'name': '周海媚',
//         'print': '2',
//         'status': '停用',
//         'readLibrary': '開放',
//         'createDate': '2024-07-05',
//         'adminNote': '',
//         'deactivationDate': '2023-12-01',
//         'returnDate': '2023-12-10',
//     }
// ];

$(function () {

    $('#idCard_List').DataTable({
        ...commonSettingsTable,
        "data": dataset_idCardAll,
        "columns": [
            { data: 'createDate', title: "建立日期" }, // 0
            { data: 'idCardNum', title: "識別證<br class='d-none d-lg-block'>號碼", className: 'text-center' }, // 1
            { data: 'company', title: "所屬公司" }, // 2
            { data: 'name', title: "使用者<br class='d-none d-lg-block'>姓名" }, // 3
            {
                data: 'print', title: "補發<br class='d-none d-lg-block'>次數", // 4
                render: function (data) {
                    let reprint = Number(data) - 1;
                    if (data == 1) {
                        return '-';
                    } else {
                        return reprint;
                    }
                }
            },
            { data: 'status', title: "狀態" }, // 5
            { data: 'readLibrary', title: "圖書館<br class='d-none d-lg-block'>閱覽", }, // 6
            { data: 'adminNote', title: "管理備註" }, // 7
            { data: 'returnDate', title: "收回日期" }, // 8
            {
                data: 'id', title: "修改", //9
                render: function (data) {
                    // return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./idCardEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>'
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="../ID_Card/Edit/' + data + '"><i class="fa-solid fa-wrench"></i></a>';
                },
            },
            {
                data: 'status', visible: false,  // 10
                render: function (data, type, row) {
                    if (data == "停用未收回") {
                        return '0';
                    } else if (data == "使用中") {
                        return '1';
                    } else if (data == "已收回") {
                        return "9"
                    } else {
                        return "6"
                    };
                },
            },
        ],
        "columnDefs": [
            {
                targets: [0],
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
            { "searchable": false, "orderable": false, "targets": [9, 10] },
            { "className": "text-nowrap", "targets": [0, 1, 4, 5, 6, 8] },
            { "className": "text-lg-center", "targets": [0, 1, 4, 8, 9] },
        ],
        "order": [[10, "asc"], [1, "desc"]],
        createdRow: function (row, data, dataIndex) {
            // if (data.status == "遺失") {
            //     $('td', row).css('color', '#999');
            // }
            // if (data.status == "停用" && (data.returnDate)) {
            //     $('td', row).css('color', '#999');
            // }
            if (data.status == "已收回" || data.status == "遺失"){
                $('td', row).css('color', '#999');
            }
                $('td:eq(9)', row).css('max-width', '70px');
            $('td:eq(2)', row).css('min-width', '180px');
            // [7, 8].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            // $('td:eq(2)', row).addClass('pe-3');
            [0, 4, 5, 6, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.85rem');
            });
        }
    });

});