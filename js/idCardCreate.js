$(function () {
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
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為
        // 檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果有未填的必填項，直接返回
        }

        // 最後檢查 danger_ 開頭的元素
        if (checkDangerElements()) {
            // 如果返回 true，提交表單
            console.log('表單資料已送出');
            $('#formIdcardCreate').submit(); // 真正提交表單
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });

});