var dataset_myParkingSpaceHistory = [
    {
        'id': '1',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B4-30',
        'licensePlateNum': '0869-RE',
        'name': '陳凱富',
        'endDate': '2024-01-18',
        'remark': '',
    },
    {
        'id': '2',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B5-1',
        'licensePlateNum': 'X-8470',
        'name': '陳昭嫺',
        'endDate': '2024-10-01',
        'remark': '',
    },
    {
        'id': '3',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B6-12',
        'licensePlateNum': '4823-JF',
        'name': '林雅惠',
        'endDate': '2024-09-18',
        'remark': '',
    },
    {
        'id': '4',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B7-5',
        'licensePlateNum': '2-9685',
        'name': '張文成',
        'endDate': '2024-09-17',
        'remark': '',
    },
    {
        'id': '5',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B8-21',
        'licensePlateNum': '7219-LK',
        'name': '許美玲',
        'endDate': '2024-09-30',
        'remark': '申請中',
    },
    {
        'id': '6',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B9-8',
        'licensePlateNum': '7-Y245',
        'name': '黃佩樺',
        'endDate': '2024-10-02',
        'remark': '',
    },
    {
        'id': '7',
        'carType': '汽車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B10-18',
        'licensePlateNum': '5390-ZP',
        'name': '劉建宏',
        'endDate': '2024-12-05',
        'remark': '',
    },
    {
        'id': '8',
        'carType': '機車',
        'building': '新德惠大樓',
        'parkingSpaceNum': 'B11-3',
        'licensePlateNum': '9-5012',
        'name': '吳明憲',
        'endDate': '2024-07-01',
        'remark': '',
    },
    {
        'id': '9',
        'carType': '機車',
        'building': '',
        'parkingSpaceNum': '',
        'licensePlateNum': '3AB-555',
        'name': '郝天天',
        'endDate': '',
        'remark': '申請中',
    },
];


$(function () {
    const today = new Date();
    dataset_myParkingSpaceHistory.forEach(item => {
        const endDate = new Date(item.endDate);
        const timeDiff = endDate.getTime() - today.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        item.diffDays = diffDays < 0 ? null : ((-1) * diffDays);
        console.log('id = ' + item.id + ' ，結束日期： ' + item.endDate + ' ，今日： 2024-09-06' + ' ，差： ' + item.diffDays);
    });

    $('#myParkingSpaceList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於車位到期的5~45天之前提出申請。</h6>';
                return provision;
            },
        },
        "data": dataset_myParkingSpaceHistory,
        "columns": [
            {
                data: 'carType', title: "類型", // 0
                render: function (data) {
                    if (data === "汽車") {
                        return '<i class="fa-solid fa-car-side"></i>';
                    } else if (data === "機車") {
                        return '<i class="fa-solid fa-motorcycle"></i>';
                    } else {
                        return '<i class="fa-solid fa-question"></i>';
                    }
                }
            }, 
            { data: 'building', title: "所在位置", }, // 1
            { data: 'parkingSpaceNum', title: "車位號碼", }, // 2
            { data: 'licensePlateNum', title: "車牌號碼", }, // 3
            { data: 'name', title: "登記<br class='d-none d-lg-block'>使用人" }, // 4
            { data: 'endDate', title: "到期日", }, // 5
            { data: 'remark', title: "備註", }, // 6
            {
                data: 'id', title: "操作", // 7
                render: function (data, type, row) {
                    if (row.remark == "申請中") {
                        return '<button type="button" class="btn btn-outline-danger rounded-circle btn-sm" title="取消申請"><i class="fa-solid fa-xmark"></i></button>';
                    } else {
                        if(row.diffDays){
                            if (row.diffDays >= -45) {
                                return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord renew-btn" href="./parkingSpaceRenew.html?id=' + data + '" title="立即續約" data-id=' + data + '><i class="fa-solid fa-repeat"></i></a>';
                            }else{
                                return '';
                            }
                        } else {
                            return '';
                        }
                    }
                },
            },

            { data: 'diffDays', visible: false }, // 8
            { data: 'carType', visible: false }, // 9
        ],
        order: [
            [6, 'desc'],
            [8, 'desc'],
            [5, 'desc']
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
                targets: [3],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [0, 7, 8] },
            { orderable: false, targets: [9] },
            { className: "text-lg-center", targets: [0, 2, 3, 4, 5, 7] },
        ],
        createdRow: function (row, data, dataIndex) {
            if(data.remark != "申請中"){
                if (!data.diffDays) {
                    $('td', row).css('color', '#999'); 
                }
            }
            $('td:eq(5)', row).css('font-size', '.95em').css('width', '110px');
            $('td:eq(6)', row).css('font-size', '.95em').css('min-width', '250px');
            [0, 1, 2, 3, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            [0, 7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
        },
    });
});

$(function () {
    $(document).on("click", ".renew-btn", function (event) {
        event.preventDefault();
        const renewId = $(this).data('id');
        const renewLink = './parkingSpaceRenew.html?id=' + renewId;

        swalConfirmNoToastSandId(
            '登記使用人是否變更呢?',
            '是',
            '否',
            function () {
                window.location.href = renewLink;
            },
            '已將收款帳戶資訊發至貴司的主要聯絡信箱。<br><br>點擊上方「填寫轉帳證明」：<br>可上傳轉帳憑證，或是閱覽大同大學帳戶資訊。',
            'top',
            renewId);
    });
});
