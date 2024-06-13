var dataset_coopManufApp = [
    {
        'id': '1',
        'createDate': "2024-04-25",
        'company': "System Architect",
        'uniformNum': "23456780",
        'companyEmail': "abc@gmail.com",
        'status': "通過",
    },
    {
        'id': '2',
        'createDate': "2011-06-30",
        'company': "Garrett Winters",
        'uniformNum': "83456780",
        'companyEmail': "bcd@gmail.com",
        'status': "通過",
    },
    {
        'id': '3',
        'createDate': "2009-01-12",
        'company': "Ashton Cox",
        'uniformNum': "53456780",
        'companyEmail': "cde@gmail.com",
        'status': "通過",
    },
    {
        'id': '4',
        'createDate': "2012-03-29",
        'company': "Cedric Kelly",
        'uniformNum': "63456780",
        'companyEmail': "def@gmail.com",
        'status': "不通過",
    },
    {
        'id': '5',
        'createDate': "2008-11-28",
        'company': "Airi Satou",
        'uniformNum': "83456780",
        'companyEmail': "efg@gmail.com",
        'status': "待補件",
    },
    {
        'id': '6',
        'createDate': "2012-12-02",
        'company': "Brielle Williamson",
        'uniformNum': "63456780",
        'companyEmail': "fgh@gmail.com",
        'status': "待審核",
    },
    {
        'id': '7',
        'createDate': "2012-08-06",
        'company': "Herrod Chandler",
        'uniformNum': "63453780",
        'companyEmail': "ghi@gmail.com",
        'status': "待補件",
    },
    {
        'id': '8',
        'createDate': "2010-10-14",
        'company': "Rhona Davidson",
        'uniformNum': "63456780",
        'companyEmail': "hij@gmail.com",
        'status': "待補件",
    },
    {
        'id': '9',
        'createDate': "2009-09-15",
        'company': "Colleen Hurst",
        'uniformNum': "63443780",
        'companyEmail': "ijk@gmail.com",
        'status': "通過",
    },
    {
        'id': '10',
        'createDate': "2008-12-13",
        'company': "Sonya Frost",
        'uniformNum': "22443780",
        'companyEmail': "jkl@gmail.com",
        'status': "通過",
    },
    {
        'id': '11',
        'createDate': "2008-12-19",
        'company': "Jena Gaines",
        'uniformNum': "52443780",
        'companyEmail': "klm@gmail.com",
        'status': "待補件",
    },
    {
        'id': '12',
        'createDate': "2013-03-03",
        'company': "Quinn Flynn",
        'uniformNum': "11443780",
        'companyEmail': "lmn@gmail.com",
        'status': "待補件",
    },
    {
        'id': '13',
        'createDate': "2008-10-16",
        'company': "Charde Marshall",
        'uniformNum': "11445380",
        'companyEmail': "mno@gmail.com",
        'status': "待補件",
    },
    {
        'id': '14',
        'createDate': "2012-12-18",
        'company': "Haley Kennedy",
        'uniformNum': "11427380",
        'companyEmail': "nop@gmail.com",
        'status': "通過",
    },
    {
        'id': '15',
        'createDate': "2010-03-17",
        'company': "Tatyana Fitzpatrick",
        'uniformNum': "11445380",
        'companyEmail': "opq@gmail.com",
        'status': "通過",
    },

];

$(function () {
    $('#cooperativeManufacturersApplicationList').DataTable({
        ...commonSettingsTable,
        "data": dataset_coopManufApp,
        "columns": [
            { data: 'createDate', title: "申請日期", },
            { data: 'company', title: "公司名稱", },
            { data: 'uniformNum', title: "統一編號", },
            { data: 'companyEmail', title: "E-mail", },
            { data: 'status', title: "審核進度", },
            {
                data: 'id', title: "檢閱",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#firmDetail_' + data + '"><i class="fa-solid fa-paperclip"></i></button>'
                }, className: 'text-center text-nowrap'
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
                responsivePriority: 2,
            },
            { "searchable": false, "orderable": false, "targets": [5] },
            { "className": "text-nowrap", "targets": [0, 2, 3] },
            { "className": "text-center", "targets": [0, 2, 4, 5] },
        ],
    });

});
