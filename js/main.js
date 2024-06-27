// const a = (x , y) =>  x * y;
// console.log(a(20 , 10));
// document.write('<script type="text/javascript" src="./js/sweetAlert.js"></script>');

// DataTable設定 - 搜尋左上，無自選顯示個數(預設10筆)
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

// DataTable設定 - 搜尋右上，無自選顯示個數(預設10筆)，左上標題"歷程記錄"，所有欄位已定好
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
        { data: 'createDate', title: "紀錄日期" }, //0
        { data: 'squareMeters', title: "坪數" }, //1
        { data: 'rate', title: "服務費", }, //2
        { data: 'startDate', title: "培育開始", }, //3
        { data: 'endDate', title: "培育結束", }, //4
        { data: 'company', title: "培育企業", }, //5
        { data: 'remark', title: "操作", }, //6
        { data: 'createBy', title: "操作者", }, //7
        // { data: 'responsiblePerson', title: "企業代表", },
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
        { orderable: false, targets: [1, 2, 3, 4, 6, 7] },
        { className: "text-center", targets: [0, 3, 4, 7] },
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
        [0, 1, 2, 3, 4, 5, 6, 7].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
        });
        [0, 1, 2, 4, 5].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
        });
        [5, 6].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
        });
        [0, 3, 4].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('min-width', '100px');
        });
        // $('td:eq(1)', row).css('min-width', '80px');
    },
};
// DataTable設定 - 搜尋右上，無自選顯示個數(預設10筆)，左上可再另行設定提示文字
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
























