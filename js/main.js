// const a = (x , y) =>  x * y;
// console.log(a(20 , 10));
// document.write('<script type="text/javascript" src="./js/sweetAlert.js"></script>');


let commonSettingsTable = {
    layout: {
        topStart: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        topEnd: null,
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "order": [[0, "desc"]],
    responsive: true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },
};
let commonSettingsHistory = {
    layout: {
        topStart: function () {
            let toolbar = document.createElement('div');
            toolbar.innerHTML = '<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>';
            return toolbar;
        },
        topEnd: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "columns": [
        { data: 'createDate', title: "紀錄日期" },
        { data: 'squareMeters', title: "坪數" },
        { data: 'rate', title: "服務費", },
        { data: 'startDate', title: "培育開始", },
        { data: 'endDate', title: "培育結束", },
        { data: 'company', title: "培育企業", },
        { data: 'responsiblePerson', title: "企業代表", },
        { data: 'remark', title: "備註", },
        { data: 'createBy', title: "操作者", },
    ],
    "order": [[0, "desc"]],
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
            targets: [5],
        },
        { orderable: false, targets: [1, 2, 3, 4, 5, 6, 7, 8] },
        { className: "text-center", targets: [0, 3, 4, 6, 8] },
    ],
    "responsive": true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },
    createdRow: function (row, data, dataIndex) {
        [0, 3, 4, 6, 8].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
        });
        [0, 1, 2, 3, 4].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
        });
        [5, 7].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
        });
        $('td:eq(1)', row).css('min-width', '80px');
    },
};
let commonSettingsProvision = {
    layout: {
        topEnd: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "order": [[0, "desc"]],
    "responsive": true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },

};

$(function () {


    var dataset_rolesList = [
        {
            'id': '1',
            'createDate': "2024-04-25",
            'company': "System Architect",
            'companyEmail': "abc@gmail.com",
            'nowLevel': "系統管理員",
            'status': "1",
        },
        {
            'id': '2',
            'createDate': "2011-06-30",
            'company': "Garrett Winters",
            'companyEmail': "bcd@gmail.com",
            'nowLevel': "廠商商號",
            'status': "0",
        },
        {
            'id': '3',
            'createDate': "2009-01-12",
            'company': "Ashton Cox",
            'companyEmail': "cde@gmail.com",
            'nowLevel': "廠商商號",
            'status': "0",
        },
        {
            'id': '4',
            'createDate': "2012-03-29",
            'company': "Cedric Kelly",
            'companyEmail': "def@gmail.com",
            'nowLevel': "系統專員",
            'status': "0",
        },
        {
            'id': '5',
            'createDate': "2008-11-28",
            'company': "Airi Satou",
            'nowLevel': "廠商商號",
            'companyEmail': "efg@gmail.com",
            'status': "1",
        },
        {
            'id': '6',
            'createDate': "2012-12-02",
            'company': "Brielle Williamson",
            'nowLevel': "廠商商號",
            'companyEmail': "fgh@gmail.com",
            'status': "0",
        },
        {
            'id': '7',
            'createDate': "2012-08-06",
            'company': "Herrod Chandler",
            'nowLevel': "廠商商號",
            'companyEmail': "ghi@gmail.com",
            'status': "1",
        },
        {
            'id': '8',
            'createDate': "2010-10-14",
            'company': "Rhona Davidson",
            'nowLevel': "廠商商號",
            'companyEmail': "hij@gmail.com",
            'status': "1",
        },
        {
            'id': '9',
            'createDate': "2009-09-15",
            'company': "Colleen Hurst",
            'nowLevel': "廠商商號",
            'companyEmail': "ijk@gmail.com",
            'status': "1",
        },
        {
            'id': '10',
            'createDate': "2008-12-13",
            'company': "Sonya Frost",
            'nowLevel': "廠商商號",
            'companyEmail': "jkl@gmail.com",
            'status': "1",
        },
        {
            'id': '11',
            'createDate': "2008-12-19",
            'company': "Jena Gaines",
            'nowLevel': "廠商商號",
            'companyEmail': "klm@gmail.com",
            'status': "1",
        },
        {
            'id': '12',
            'createDate': "2013-03-03",
            'company': "Quinn Flynn",
            'nowLevel': "廠商商號",
            'companyEmail': "lmn@gmail.com",
            'status': "1",
        },
        {
            'id': '13',
            'createDate': "2008-10-16",
            'company': "Charde Marshall",
            'nowLevel': "廠商商號",
            'companyEmail': "mno@gmail.com",
            'status': "1",
        },
        {
            'id': '14',
            'createDate': "2012-12-18",
            'company': "Haley Kennedy",
            'nowLevel': "廠商商號",
            'companyEmail': "nop@gmail.com",
            'status': "1",
        },
        {
            'id': '15',
            'createDate': "2010-03-17",
            'company': "Tatyana Fitzpatrick",
            'nowLevel': "廠商商號",
            'companyEmail': "opq@gmail.com",
            'status': "1",
        },

    ];


    var dataset_myContractList = [
        {
            'id': '1',
            'contractType': '培育室',
            'type': '青創',
            'num': '101',
            'endDate': '2024-08-31',
            'paymentDate': '2023-07-15',
            'status': '快到期，快來續約吧！',
        },
    ];

    // let commonSettingsTable = {
    //     layout: {
    //         topStart: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         topEnd: null,
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[0, "desc"]],
    //     responsive: true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    // };
    // let commonSettingsHistory = {
    //     layout: {
    //         topStart: function () {
    //             let toolbar = document.createElement('div');
    //             toolbar.innerHTML = '<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>';
    //             return toolbar;
    //         },
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "columns": [
    //         { data: 'createDate', title: "紀錄日期" },
    //         { data: 'squareMeters', title: "坪數" },
    //         { data: 'rate', title: "服務費", },
    //         { data: 'startDate', title: "培育開始", },
    //         { data: 'endDate', title: "培育結束", },
    //         { data: 'company', title: "培育企業", },
    //         { data: 'responsiblePerson', title: "企業代表", },
    //         { data: 'remark', title: "備註", },
    //         { data: 'createBy', title: "操作者", },
    //     ],
    //     "order": [[0, "desc"]],
    //     "columnDefs": [
    //         {
    //             targets: [0],
    //             responsivePriority: 1,
    //         },
    //         {
    //             targets: [1],
    //             responsivePriority: 2,
    //         },
    //         {
    //             targets: [2],
    //             responsivePriority: 3,
    //         },
    //         {
    //             targets: [5],
    //         },
    //         { orderable: false, targets: [1, 2, 3, 4, 5, 6, 7, 8] },
    //         { className: "text-center", targets: [0, 3, 4, 6, 8] },
    //     ],
    //     "responsive": true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    //     createdRow: function (row, data, dataIndex) {
    //         [0, 3, 4, 6, 8].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
    //         });
    //         [0, 1, 2, 3, 4].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
    //         });
    //         [5, 7].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //         $('td:eq(1)', row).css('min-width', '80px');
    //     },
    // };
    // let commonSettingsProvision = {
    //     layout: {
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[0, "desc"]],
    //     "responsive": true,
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },

    // };
    // let commonSettingCheckboxProvision = {
    //     layout: {
    //         topEnd: {
    //             search: {
    //                 placeholder: '關鍵字搜尋'
    //             }
    //         },
    //         bottomStart: 'info',
    //         bottomEnd: {
    //             paging: {
    //                 numbers: 5
    //             }
    //         }
    //     },
    //     "order": [[1, "desc"]],
    //     "responsive": true,
    //     responsive: {
    //         details: {
    //             type: 'column',
    //             target: 1
    //         }
    //     },
    //     language: {
    //         lengthMenu: "顯示 _MENU_ 筆",
    //         sProcessing: "處理中...",
    //         loadingRecords: "載入中...",
    //         sZeroRecords: "OOPS！没有匹配的结果",
    //         sInfo: "共有 _MAX_ 筆",
    //         sInfoEmpty: "共有 0 筆",
    //         sInfoFiltered: " ",
    //         sInfoPostFix: "",
    //         sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
    //         sUrl: "",
    //         sEmptyTable: "尚未有資料紀錄存在",
    //         sLoadingRecords: "載入中...",
    //         sInfoThousands: ",",
    //         oPaginate: {
    //             sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
    //             sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
    //             sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
    //             sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
    //         },
    //         oAria: {
    //             sSortAscending: ": 以升序排列此列",
    //             sSortDescending: ": 以降序排列此列",
    //         },
    //     },
    //     "headerCallback": function (thead, data, start, end, display) {
    //         $(thead).find('th').addClass('text-center text-nowrap align-middle');
    //     },
    //     // createdRow: function (row, data, dataIndex) {
    //     //     $('td:eq(1)', row).addClass('dtr-control');
    //     // },
    // }

    // $('#jobList').DataTable({
    //     ...commonSettingsTable,
    //     "data": dataset_jobList,
    //     "columns": [
    //         { data: 'createDate', title: "刊登日期", },
    //         { data: 'company', title: "公司名稱", },
    //         { data: 'jobTitle', title: "職務名稱", },
    //         { data: 'jobEmployment', title: "工作性質", },
    //         { data: 'jobTime', title: "工作時間", },
    //         { data: 'jobRemoveDate', title: "截止日期", },
    //         {
    //             data: 'id', title: "詳情",
    //             render: function (data) {
    //                 return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop_' + data + '"><i class="fa-solid fa-info px-1"></i></button>'
    //             }
    //         },
    //     ],
    //     "columnDefs": [
    //         {
    //             targets: [0],
    //             responsivePriority: 3,
    //         },
    //         {
    //             targets: [3],
    //             responsivePriority: 1,
    //         },
    //         {
    //             targets: [4],
    //             responsivePriority: 2,
    //         },
    //         { searchable: false, orderable: false, targets: [6] },
    //         { className: "text-nowrap ", targets: [0, 3, 4, 5] },
    //         { className: "text-center", targets: [0, 3, 4, 5, 6] },

    //     ],
    //     createdRow: function (row, data, dataIndex) {
    //         $('td:eq(6)', row).css('max-width', '70px');
    //         $('td:eq(0)', row).css('min-width', '130px');
    //         [4, 5].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //     }
    // });

    $('#rolesList').DataTable({
        ...commonSettingsTable,
        "data": dataset_rolesList,
        "columns": [
            { data: 'createDate', title: "建立日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'companyEmail', title: "E-mail", },
            { data: 'nowLevel', title: "當前角色", },
            {
                data: 'nowLevel', title: "調整角色",
                render: function (data) {
                    let choose = '';
                    switch (data) {
                        case "系統管理員":
                            choose = '<option value="系統管理員" selected disabled>系統管理員</option><option value="系統專員">系統專員</option><option value="廠商商號">廠商商號</option>';
                            break;
                        case "系統專員":
                            choose = '<option value="系統管理員">系統管理員</option><option value="系統專員" selected disabled>系統專員</option><option value="廠商商號">廠商商號</option>';
                            break;
                        case "廠商商號":
                            choose = '<option value="系統管理員">系統管理員</option><option value="系統專員">系統專員</option><option value="廠商商號" selected disabled>廠商商號</option>';
                            break;
                    }
                    return '<select class="form-select">' + choose + '</select>';
                },
            },
            {
                data: 'status', title: "啟用",
                render: function (data) {
                    if (data == "1") {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked value="1"></div>'
                    } else {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" value="0"></div>'
                    }
                },
            },
            {
                data: 'id', title: "儲存",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-floppy-disk"></i></button>'
                },
            },
        ],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 3,
            },
            {
                targets: [3],
                responsivePriority: 1,
            },
            {
                targets: [4],
                responsivePriority: 2,
            },
            { width: "70px", targets: [5, 6] },
            { searchable: false, orderable: false, targets: [4, 5, 6] },
            { className: "text-nowrap", targets: [0, 2, 3] },
            { className: "text-center", targets: [0, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(4)', row).css('min-width', '150px');
            [0, 3].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

    $('#myContractList').DataTable({
        ...commonSettingsTable,
        "data": dataset_myContractList,
        "columns": [
            // { data: 'createDate', title: "申請日期" },
            // { data: 'company', title: "承租人企業", },
            { data: 'contractType', title: "合約類型" },
            { data: 'type', title: "細項", },
            { data: 'num', title: "號碼", },
            { data: 'endDate', title: "到期日", },
            { data: 'paymentDate', title: "付款日", },
            { data: 'status', title: "狀態", },
            {
                data: 'id', title: "續約",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpaceDetail_' + data + '"><i class="fa-solid fa-handshake-simple"></i></button>'
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
            { searchable: false, orderable: false, targets: [6] },
            { className: "text-center", targets: [2, 3, 4, 5, 6] },
            { className: "text-nowrap", targets: [2, 3, 4, 5] },
        ],
        createdRow: function (row, data, dataIndex) {
            // $('td:eq(6)', row).css('min-width', '70px');
            $('td:eq(6)', row).css('max-width', '70px');
            // $('td:eq(3)', row).addClass('pe-5');
            // [5, 6].forEach(function (colIdx) {
            //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            // });
            [3, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

    $('#openRoom_Details').on('shown.bs.modal', function () {
        $('#roomHistoryList').DataTable().columns.adjust();
    });
    $('#closeRoom_Details').on('shown.bs.modal', function () {
        $('#roomHistoryList2').DataTable().columns.adjust();
    });



});


// 指定id群，加指定class
function theseAddClass(classNames, ids) {
    ids.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            classNames.forEach(function (className) {
                element.classList.add(className);
            });
        }
    });
}

//指定id群，移除指定class
function theseRemoveClass(classNames, ids) {
    ids.forEach(function (id) {
        var element = document.getElementById(id);
        if (element) {
            classNames.forEach(function (className) {
                element.classList.remove(className);
            });
        }
    });
}


// ※※※※※※===TOP 按鈕===※※※※※※
// window.addEventListener("scroll", function () {
//     let btnUp = document.querySelector(".top_button");
//     if (window.scrollY > 0) {
//         // 當畫面不在網頁最頂端時，加上 scroll-animation 類別來套用透明度變化的動畫
//         btnUp.classList.add("scroll-animation");
//         btnUp.classList.remove("d-none");
//     } else {
//         // 畫面在網頁最頂端時，移除 scroll-animation 類別
//         btnUp.classList.remove("scroll-animation");
//         btnUp.classList.add("d-none");
//     }
// });
// document.addEventListener("DOMContentLoaded", function () {
//     let btn_up_el = document.getElementById("btn_up");
//     if (btn_up_el) {
//         btn_up_el.addEventListener("click", function () {
//             let html_el = document.getElementsByTagName("html")[0];
//             html_el.scrollTo({
//                 top: 0,
//                 behavior: "smooth"
//             });
//         });
//     }
// });
$(function () {
    // 監聽滾動事件
    $(window).on("scroll", function () {
        let btnUp = $(".top_button");
        if ($(this).scrollTop() > 0) {
            // 當畫面不在網頁最頂端時，加上 scroll-animation 類別來套用透明度變化的動畫
            btnUp.addClass("scroll-animation").removeClass("d-none");
        } else {
            // 畫面在網頁最頂端時，移除 scroll-animation 類別
            btnUp.removeClass("scroll-animation").addClass("d-none");
        }
    });

    // 監聽 DOMContentLoaded 事件
    $("#btn_up").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "smooth");
    });
});























