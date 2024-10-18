// var idCardData =
// {
//     'id': '1',
//     'idCardNum': 'ID00000001',
//     'name': '孫小美',
//     'building': '新德惠大樓',
//     'room': '201',
//     'company': '超級棒股份有限公司',
//     'readLibrary': '開放',
//     'print': '5',
//     'status': '已收回',
//     'returnDate': '2024-11-12',
//     'adminNote': '',

//     'deactivationDate': '2024-08-30',
//     'createDate': '2024-07-01',
// };

$(function () {
    $("#idCardNumber").val(idCardData.idCardNum);
    $("#idCardName").val(idCardData.name);
    $("#idCardBuilding").val(idCardData.building);
    $("#idCardRoom").val(idCardData.room);
    $("#idCardCompany").val(idCardData.company);
    if (idCardData.readLibrary === "開放") {
        $('#canReadLibrary').prop('checked', true);
    } else if (idCardData.readLibrary === "不開放") {
        $('#cannotReadLibrary').prop('checked', true);
    }
    if (idCardData.print == "1") {
        $('#initial').prop('checked', true);
        $('#reissue').prop('disabled', true);
    } else {
        $('#reissue').prop('checked', true);
        $('#initial').prop('disabled', true);
    }
    $("#idCardStatus").val(idCardData.status);
    if (idCardData.returnDate !== "") {
        $("#returnDate").val(idCardData.returnDate);
        $('#idCardStatus').val('已收回').attr('disabled', true);
        $('#returnDateStart').removeClass('d-none')
    };
    $("#idCardRemark").val(idCardData.adminNote);

    // 限制收回日期不可大於今日
    setMaxDateToToday('returnDate');

    // 如果使用者選擇了日期，將狀態設定為 "已收回"，並禁用其他選項
    $('#returnDate').on('change', function () {
        if ($(this).val() !== "") {
            $('#idCardStatus').val('已收回').attr('disabled', true);
            $('#returnDateStart').removeClass('d-none')
        } else {
            $('#idCardStatus').val('使用中').removeAttr('disabled');
            $('#returnDateStart').addClass('d-none');
        }
    });

    // 如果狀態選擇了 "已收回"，需要讓收回日期成為必填項
    $('#idCardStatus').on('change', function () {
        if ($(this).val() === '已收回') {
            $('#returnDate').addClass('thisRequired');
            $('#returnDateStart').removeClass('d-none');
        } else {
            $('#returnDate').removeClass('thisRequired');
            $('#returnDateStart').addClass('d-none');
        }
    });

    // 建議輸入
    $('#idCardCompany').typeahead({
        source: companyData
    });

    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    // 點擊 resetBtn 按鈕時
    $('#resetBtn').click(function () {
        // 執行原有 reset 的功能
        this.form.reset();
        // 清空所有以 danger_ 開頭元素的內容
        $('[id^="danger_"]').text('');
    });


    // 點擊 submitBtn 按鈕時
    $('#updateBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為
        // 檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果有未填的必填項，直接返回
        }

        // 最後檢查 danger_ 開頭的元素
        if (checkDangerElements()) {
            console.log('表單資料已送出');
            // 如果返回 true，提交表單
            $('#formIdCardEdit').submit(); // 真正提交表單
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });


});