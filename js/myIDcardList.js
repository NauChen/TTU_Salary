var dataset_myIDcardHistory = [
    {
        'id': '1',
        'createDate': '2023-08-30',
        'place': '新德惠大樓-101',
        'name': '孫一美',
        'jobTitle': '工讀生',
        'library': '未申請',
        'print': '1',

        'startDate': '2023-09-10',
        'endDate': '2023-10-09',
        'status': '已選停用，請至研發處歸還。',
        'idCardNum': 'ABC101',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
    {
        'id': '2',
        'createDate': '2023-08-31',
        'place': '綜合工廠大樓-202',
        'name': '孫大美',
        'jobTitle': '專員',
        'library': '已開放',
        'print': '-',

        'startDate': '2023-09-10',
        'endDate': '2023-10-09',
        'status': '-',
        'idCardNum': 'ABC102',
        'phone': '0933-456789',
        'email': 'abcd#gmail.com',
        'emergContact': '孫一美',
        'ECPhone': '0912-345678',
    },
    {
        'id': '3',
        'createDate': '2023-09-10',
        'place': '挺生大樓-202',
        'name': '孫大帥',
        'jobTitle': '專員',
        'library': '已開放',
        'print': '-',

        'startDate': '2023-10-11',
        'endDate': '2023-11-30',
        'status': '-',
        'idCardNum': 'ABC103',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
    {
        'id': '4',
        'createDate': '2023-09-10',
        'place': '實驗大樓-202',
        'name': '孫二帥',
        'jobTitle': '專員',
        'library': '已開放',
        'print': '3',

        'startDate': '2023-10-11',
        'endDate': '2023-11-30',
        'status': '-',
        'idCardNum': 'ABC104',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
    {
        'id': '5',
        'createDate': '2023-09-10',
        'place': '尚志大樓-202',
        'name': '孫二帥',
        'jobTitle': '專員',
        'library': '已開放',
        'print': '3',

        'startDate': '2023-10-11',
        'endDate': '2023-11-30',
        'status': '-',
        'idCardNum': 'ABC104',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
    {
        'id': '6',
        'createDate': '2024-09-10',
        'place': '尚志大樓-202',
        'name': '關二爺',
        'jobTitle': '經理',
        'library': '申請中',
        'print': '-',

        'startDate': '-',
        'endDate': '-',
        'status': '申請中',
        'idCardNum': 'ABC104',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
    {
        'id': '7',
        'createDate': '2024-09-12',
        'place': '尚志大樓-202',
        'name': '張三爺',
        'jobTitle': '協理',
        'library': '申請中',
        'print': '1',

        'startDate': '-',
        'endDate': '-',
        'status': '申請中',
        'idCardNum': 'ABC104',

        'phone': '0912-345678',
        'email': 'abc#gmail.com',
        'emergContact': '孫大美',
        'ECPhone': '0933-456789',
    },
];

$(function () {
    let table = $('#myIDcardList').DataTable({
        ...commonSettingsProvision,
        layout: {
            topStart: function () {
                let provision = document.createElement('div');
                provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>識別證停用後，需歸還至研發處。</h6>';
                return provision;
            },
        },
        "data": dataset_myIDcardHistory,
        "columns": [
            {
                data: 'id', title: '<i class="fa-regular fa-square-check"></i>',
                 render: function (data, type, row, meta) { // 0
                    return '<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value=' + data + '>'
                },
            },
            { data: 'createDate', title: "申請日期" }, // 1
            {
                data: 'place', title: "培育室位置",
            }, // 2
            { data: 'name', title: "姓名" }, // 3
            { data: 'jobTitle', title: "職稱", }, // 4
            { data: 'library', title: "閱覽<br class='d-none d-lg-block'>圖書館", }, // 5
            { data: 'print', title: "補發<br class='d-none d-lg-block'>次數", }, // 6
            { data: 'status', title: "備註", }, // 7
            {
                data: 'id', title: "申請<br class='d-none d-lg-block'>補發", // 8
                render: function (data, type, row) {
                    if(row.status != "申請中"){
                        return '<a class="btn btn-outline-primary rounded-circle noOutline" href="./idCardReissue.html?id=' + data + '"><i class="fa-regular fa-face-sad-tear"></i></a>';
                    }else{
                        return "";
                    }
                },
            },
        ],
        "order": [[1, "desc"]],
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
            { searchable: false, orderable: false, targets: [0, 8] },
            { className: "text-lg-center", targets: [0, 1, 3, 4, 5, 6, 8] },
            { className: "text-nowrap", targets: [0, 1, 3, 4, 5, 6] },
        ],
        createdRow: function (row, data, dataIndex) {
            [1,].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
            });
            $('td:eq(8)', row).css('max-width', '70px');
        },
    });

    $('#deleteTheseIdCard').click(function () {
        let selectedIds = [];

        table.rows().every(function () {
            let row = this.node();
            let checkbox = $(row).find('.idCard-checkbox');

            // 如果複選框被選中，獲取該行的ID
            if (checkbox.prop('checked')) {
                let rowData = this.data();
                selectedIds.push(rowData.id);
            }
        });

        // 如果没有選中任何行，提示用戶
        if (selectedIds.length === 0) {
            swalToastWarning('請先勾選欲停用的識別證。', 'top');
            return;
        }

        console.log(selectedIds);

        // let requestData = {
        //     ids: selectedIds
        // };

        // 向後端發送删除請求
        // $.ajax({
        //     url: 'asp.net的東西',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify(requestData),
        //     success: function (response) {
        //         console.log('Delete request successful', response);
        //     },
        //     error: function (xhr, status, error) {
        //         console.error('Error deleting jobs', error);
        //     }
        // });

    });

});
