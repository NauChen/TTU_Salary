var dataset_rolesList = [
    {
        'id': '1',
        'createDate': "2024-04-25",
        'company': "系統架構師有限公司",
        'companyEmail': "abc@gmail.com",
        'nowLevel': "系統管理員",
        'status': "1",
        'uniformNum': "12345678"
    },
    {
        'id': '2',
        'createDate': "2011-06-30",
        'company': "加瑞特·溫特斯貿易公司",
        'companyEmail': "bcd@gmail.com",
        'nowLevel': "廠商商號",
        'status': "0",
        'uniformNum': "23456789"
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'company': "艾希頓·科克斯股份有限公司",
        'companyEmail': "cde@gmail.com",
        'nowLevel': "廠商商號",
        'status': "0",
        'uniformNum': "34567890"
    },
    {
        'id': '4',
        'createDate': "2012-03-29",
        'company': "塞德里克·凱利公司",
        'companyEmail': "def@gmail.com",
        'nowLevel': "系統專員",
        'status': "0",
        'uniformNum': "45678901"
    },
    {
        'id': '5',
        'createDate': "2008-11-28",
        'company': "愛莉·砂藤貿易有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "efg@gmail.com",
        'status': "1",
        'uniformNum': "56789012"
    },
    {
        'id': '6',
        'createDate': "2012-12-02",
        'company': "布里耶爾·威廉姆森股份有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "fgh@gmail.com",
        'status': "0",
        'uniformNum': "67890123"
    },
    {
        'id': '7',
        'createDate': "2012-08-06",
        'company': "赫洛德·錢德勒公司",
        'nowLevel': "廠商商號",
        'companyEmail': "ghi@gmail.com",
        'status': "1",
        'uniformNum': "78901234"
    },
    {
        'id': '8',
        'createDate': "2010-10-14",
        'company': "羅娜·戴維森貿易公司",
        'nowLevel': "廠商商號",
        'companyEmail': "hij@gmail.com",
        'status': "1",
        'uniformNum': "89012345"
    },
    {
        'id': '9',
        'createDate': "2009-09-15",
        'company': "科琳·赫斯特有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "ijk@gmail.com",
        'status': "1",
        'uniformNum': "90123456"
    },
    {
        'id': '10',
        'createDate': "2008-12-13",
        'company': "索尼婭·弗羅斯特公司",
        'nowLevel': "廠商商號",
        'companyEmail': "jkl@gmail.com",
        'status': "1",
        'uniformNum': "01234567"
    },
    {
        'id': '11',
        'createDate': "2008-12-19",
        'company': "珍娜·蓋恩斯股份有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "klm@gmail.com",
        'status': "1",
        'uniformNum': "12345012"
    },
    {
        'id': '12',
        'createDate': "2013-03-03",
        'company': "昆恩·弗林有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "lmn@gmail.com",
        'status': "1",
        'uniformNum': "23456123"
    },
    {
        'id': '13',
        'createDate': "2008-10-16",
        'company': "查爾德·馬歇爾公司",
        'nowLevel': "廠商商號",
        'companyEmail': "mno@gmail.com",
        'status': "1",
        'uniformNum': "34567234"
    },
    {
        'id': '14',
        'createDate': "2012-12-18",
        'company': "海莉·肯尼迪貿易公司",
        'nowLevel': "廠商商號",
        'companyEmail': "nop@gmail.com",
        'status': "1",
        'uniformNum': "45678345"
    },
    {
        'id': '15',
        'createDate': "2010-03-17",
        'company': "塔蒂安娜·菲茨帕特里克有限公司",
        'nowLevel': "廠商商號",
        'companyEmail': "opq@gmail.com",
        'status': "1",
        'uniformNum': "56789456"
    }
];


$(function () {


    $('#rolesList').DataTable({
        ...commonSettingsTable,
        "data": dataset_rolesList,
        "columns": [
            { data: 'createDate', title: "建立日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'companyEmail', title: "E-mail", },
            { data: 'uniformNum', title: "統一編號", },
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
                targets: [4],
                responsivePriority: 1,
            },
            {
                targets: [5],
                responsivePriority: 2,
            },
            { width: "70px", targets: [6, 7] },
            { searchable: false, orderable: false, targets: [5, 6, 7] },
            { className: "text-nowrap", targets: [0, 2, 4] },
            { className: "text-center", targets: [0, 3, 4, 5, 6, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            $('td:eq(5)', row).css('min-width', '150px');
            [0, 4].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
        }
    });

});