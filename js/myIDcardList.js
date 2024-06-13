var dataset_myIDcardHistory = [
    {
        'id': '1',
        'createDate': '2023-08-30',
        'name': '孫一美',
        'jobTitle': '工讀生',
        'startDate': '2023-09-10',
        'endDate': '2023-10-09',
        'place': '青創大樓-201',
        'library': '未申請',
        'status': '已選停用，請至研發處歸還。',
        'print': '1',
    },
    {
        'id': '2',
        'createDate': '2023-08-31',
        'name': '孫大美',
        'jobTitle': '專員',
        'startDate': '2023-09-10',
        'endDate': '2023-10-09',
        'place': '青創大樓-202',
        'library': '已開放',
        'status': '未到期。',
        'print': '-',
    },
    {
        'id': '3',
        'createDate': '2023-09-10',
        'name': '孫大帥',
        'jobTitle': '專員',
        'startDate': '2023-10-11',
        'endDate': '2023-11-30',
        'place': '青創大樓-202',
        'library': '已開放',
        'status': '未到期。',
        'print': '-',
    },
    {
        'id': '4',
        'createDate': '2023-09-10',
        'name': '孫二帥',
        'jobTitle': '專員',
        'startDate': '2023-10-11',
        'endDate': '2023-11-30',
        'place': '青創大樓-202',
        'library': '已開放',
        'status': '已到期，請至研發處延期或歸還。',
        'print': '3',
    },
];

$(function () {
    // $('#myIDcardList').DataTable({
    //     ...commonSettingsProvision,
    //     layout: {
    //         topStart: function () {
    //             let provision = document.createElement('div');
    //             provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>識別證停用後，需歸還至研發處。</h6>';
    //             return provision;
    //         },
    //     },
    //     "data": dataset_myIDcardHistory,
    //     "columns": [
    //         {
    //             data: 'id', title: "勾選", render: function (data, type, row, meta) {
    //                 return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
    //             },
    //         },
    //         { data: 'createDate', title: "申請日期" },
    //         { data: 'name', title: "姓名" },
    //         { data: 'jobTitle', title: "職稱", },
    //         { data: 'place', title: "培育室位置", },
    //         { data: 'startDate', title: "進駐開始", },
    //         { data: 'endDate', title: "進駐結束", },
    //         { data: 'library', title: "閱覽<br>圖書館", },
    //         { data: 'status', title: "狀態", },
    //         { data: 'print', title: "補發", },
    //     ],
    //     "order": [[1, "desc"]],
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
    //         { searchable: false, orderable: false, targets: [0] },
    //         { className: "text-center", targets: [0, 1, 2, 3, 4, 5, 6, 7, 9] },
    //     ],
    //     createdRow: function (row, data, dataIndex) {
    //         [1, 4, 5].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
    //         });
    //         [1, 2, 4, 5, 6].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
    //         });
    //         [1, 5, 6].forEach(function (colIdx) {
    //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
    //         });
    //         $('td:eq(7)', row).css('max-width', '130px');
    //     },
    // });

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
                data: 'id', title: "勾選", render: function (data, type, row, meta) {
                    return '<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value=' + data + '>'
                },
            },
            { data: 'createDate', title: "申請日期" },
            { data: 'name', title: "姓名" },
            { data: 'jobTitle', title: "職稱", },
            { data: 'place', title: "培育室位置", },
            { data: 'startDate', title: "進駐開始", },
            { data: 'endDate', title: "進駐結束", },
            { data: 'library', title: "閱覽<br>圖書館", },
            { data: 'status', title: "狀態", },
            { data: 'print', title: "補發", },
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
            {
                targets: [2],
                responsivePriority: 3,
            },
            { searchable: false, orderable: false, targets: [0] },
            { className: "text-center", targets: [0, 1, 2, 3, 4, 5, 6, 7, 9] },
        ],
        createdRow: function (row, data, dataIndex) {
            [1, 4, 5].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
            });
            [1, 2, 4, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
            });
            [1, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
            });
            $('td:eq(7)', row).css('max-width', '130px');
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
