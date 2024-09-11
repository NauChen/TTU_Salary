var dataset_thisVisitReport = [
    {
        'id': '1',
        'visitDate': '2023-07-15',
        'fileName': '20230830153244_V1',
        'remark': '原檔案有錯，重新上傳。',
        'createBy': '孫一美',
        'createDate': '2023-08-30',
    },
    {
        'id': '2',
        'visitDate': '2023-08-28',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '孫大美',
        'createDate': '2023-08-31',
    },
    {
        'id': '3',
        'visitDate': '2023-09-08',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '孫大帥',
        'createDate': '2023-09-10',
    },
    {
        'id': '4',
        'visitDate': '2023-09-09',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '孫二帥',
        'createDate': '2023-09-10',
    },
    {
        'id': '5',
        'visitDate': '2023-09-16',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '劉二傻',
        'createDate': '2023-09-15',
    },
    {
        'id': '6',
        'visitDate': '2024-09-01',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '關二爺',
        'createDate': '2024-09-10',
    },
    {
        'id': '7',
        'visitDate': '2024-09-11',
        'fileName': '20230830153244_V1',
        'remark': '',
        'createBy': '張三爺',
        'createDate': '2024-09-12',
    },
];


$(function () {
    let table = $('#visitReportList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>上傳後不可修改，僅可刪除後重新上傳。</h6>';
                return provision;
            },
        },
        "data": dataset_thisVisitReport,
        "columns": [
            {
                data: 'id', title: '<i class="fa-regular fa-square-check"></i>',
                render: function (data, type, row, meta) { // 0
                    if (row.remark == "X" || row.remark == "已選停用，請至研發處歸還。") {
                        return '';
                    } else {
                        return '<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value=' + data + '>'
                    }
                },
            },
            { data: 'visitDate', title: "訪視日期" }, // 0
            {
                data: 'fileName', title: "紀錄<br class='d-none d-lg-block'>下載", // 1
                render: function (data, type, row) {
                    if (row.remark != "申請中" && row.remark != "X" && row.remark != "已選停用，請至研發處歸還。") {
                        return '<a class="" href="./.html?id=' + data + '"><i class="fa-solid fa-download"></i></a>';
                    } else {
                        return "";
                    }
                },
            },
            { data: 'remark', title: "備註", }, // 2
            {
                data: 'createBy', title: "上傳者", // 3
            },
            {
                data: 'createDate', title: "上傳日期", // 4
            },


        ],
        "order": [[1, "desc"]],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 1,
            },
            {
                targets: [1],
                responsivePriority: 2,
            },

            { searchable: false, targets: [0, 2] },
            { orderable: false, targets: [0, 2, 4, 5] },
            { className: "text-center", targets: [0, 1] },
            { className: "text-lg-center", targets: [2, 4, 5] },
            { className: "text-nowrap", targets: [0, 1, 2, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            // if (data.remark == "X") {
            //     $('td', row).css('color', '#999');
            // }
            [1, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '110px').css('font-size', '.9em');
            });
            // [3, 4].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('font-size', '.8em');
            // });
            $('td:eq(5)', row).css('font-size', '.8em').css('max-width', '100px');
            $('td:eq(2)', row).css('max-width', '70px');
        },
    });
});