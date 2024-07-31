var dataset_rolesList = [
    {
        'id': '1',
        'createDate': "2024-04-25",
        'name': "王小明",
        'userId': "abc@gmail.com",
        'nowLevel': "系統管理員",
        'status': "啟用",
    },
    {
        'id': '2',
        'createDate': "2011-06-30",
        'name': "加瑞特·溫特斯貿易公司",
        'userId': "23456789",
        'nowLevel': "廠商商號",
        'status': "停用",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'name': "艾希頓·科克斯股份有限公司",
        'userId': "34567890",
        'nowLevel': "廠商商號",
        'status': "停用",
    },
    {
        'id': '4',
        'createDate': "2012-03-29",
        'name': "孫小美",
        'userId': "efg@gmail.com",
        'nowLevel': "系統專員",
        'status': "停用",
    },
    {
        'id': '5',
        'createDate': "2008-11-28",
        'name': "愛莉·砂藤貿易有限公司",
        'nowLevel': "廠商商號",
        'userId': "56789012",
        'status': "啟用",
    },
    {
        'id': '6',
        'createDate': "2012-12-02",
        'name': "布里耶爾·威廉姆森股份有限公司",
        'nowLevel': "廠商商號",
        'userId': "67890123",
        'status': "停用",
    },
    {
        'id': '7',
        'createDate': "2012-08-06",
        'name': "赫洛德·錢德勒公司",
        'nowLevel': "廠商商號",
        'userId': "78901234",
        'status': "啟用",
    },
    {
        'id': '8',
        'createDate': "2010-10-14",
        'name': "羅娜·戴維森貿易公司",
        'nowLevel': "廠商商號",
        'userId': "89012345",
        'status': "啟用",
    },
    {
        'id': '9',
        'createDate': "2009-09-15",
        'name': "科琳·赫斯特有限公司",
        'nowLevel': "廠商商號",
        'userId': "90123456",
        'status': "啟用",
    },
    {
        'id': '10',
        'createDate': "2008-12-13",
        'name': "索尼婭·弗羅斯特公司",
        'nowLevel': "廠商商號",
        'userId': "01234567",
        'status': "啟用",
    },
    {
        'id': '11',
        'createDate': "2008-12-19",
        'name': "珍娜·蓋恩斯股份有限公司",
        'nowLevel': "廠商商號",
        'userId': "12345012",
        'status': "啟用",
    },
    {
        'id': '12',
        'createDate': "2013-03-03",
        'name': "昆恩·弗林有限公司",
        'nowLevel': "廠商商號",
        'userId': "23456123",
        'status': "啟用",
    },
    {
        'id': '13',
        'createDate': "2008-10-16",
        'name': "查爾德·馬歇爾公司",
        'nowLevel': "廠商商號",
        'userId': "34567234",
        'status': "啟用",
    },
    {
        'id': '14',
        'createDate': "2012-12-18",
        'name': "海莉·肯尼迪貿易公司",
        'nowLevel': "廠商商號",
        'userId': "45678345",
        'status': "啟用",
    },
    {
        'id': '15',
        'createDate': "2010-03-17",
        'name': "塔蒂安娜·菲茨帕特里克有限公司",
        'nowLevel': "廠商商號",
        'userId': "56789456",
        'status': "啟用",
    }
];


$(function () {


    $('#rolesList').DataTable({
        ...commonSettingsTable,
        "data": dataset_rolesList,
        "columns": [
            { data: 'createDate', title: "建立日期", }, // 0
            { data: 'name', title: "使用者", }, // 1
            { data: 'userId', title: "登入帳號", }, // 2
            { data: 'nowLevel', title: "當前的權限", }, // 3
            {
                data: 'nowLevel', title: "調整權限為", // 4
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
                data: 'status', title: "啟用", // 5
                render: function (data) {
                    if (data == "啟用") {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" checked value="啟用"></div>';
                    } else {
                        return '<div class="form-check form-switch"><input class="form-check-input" type="checkbox" value="停用"></div>';
                    }
                },
            },
            {
                data: 'id', title: "儲存", // 6
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-floppy-disk"></i></button>';
                },
            },
            { data: 'status', visible: false }, // 7 仍可搜尋
        ],
        order: [[7, 'desc'], [3, 'desc']],
        "columnDefs": [
            {
                targets: [0],
                responsivePriority: 3,
            },
            {
                targets: [1],
                responsivePriority: 1,
            },
            {
                targets: [2],
                responsivePriority: 2,
            },
            { searchable: false, orderable: false, targets: [5, 6] },
            { className: "text-nowrap", targets: [0, 2, 3, 4] },
            { className: "text-lg-center", targets: [0, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            [5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
        }
    });

});