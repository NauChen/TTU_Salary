$(function () {
    // 抓取要代進的資料
    let sessionData = session_userData;
    // 同步session跟燈箱
    $('#parkingSpaceCompany_td').text(sessionData.company);

    // 確保起租日期不可小於當日+5天
    setMinDateToSomeDaysLater('parkingSpaceStartDate', 5);

    // 同步輸入框跟預覽td
    syncInputValue('parkingSpaceName', 'parkingSpaceName_td');
    syncInputValue('parkingSpaceJobTitle', 'parkingSpaceJobTitle_td');
    syncInputValue('parkingSpaceExt', 'parkingSpaceExt_td');

    syncInputValue('licensePlateNum', 'licensePlateNum_td');
    syncInputValue('parkingSpaceStartDate', 'parkingSpaceStartDate_td');

    syncInputValue('parkingSpaceIDNum', 'parkingSpaceIDNum_td');
    syncInputValue('parkingSpacePhone', 'parkingSpacePhone_td');
    syncInputValue('parkingSpaceEmail', 'parkingSpaceEmail_td');

    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    $('#confirm_parkingSpaceApply').click(function (event) {
        // 先檢查必填項
        if (!checkRequiredElements()) {
            swalToastWarning('請將必填欄位填上正確資料唷！', 'top');
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }
        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，開啟燈箱
            $('#parkingSpaceApply_pdf').modal('show');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請上傳行照圖檔，並裁剪成指定大小唷！', 'top');
        }
        // $('#parkingSpaceApply_pdf').modal('show');
    });

    // 點擊 submitBtn 按鈕時
    $('#printAndSubmit').click(function (event) {
        // $('#formParkingSpaceApply').submit(); // 提交表單
        console.log('表單資料已送出');
        var formData = $('#formParkingSpaceApply').serializeArray();
        console.log('表單資料：', JSON.stringify(formData, null, 2));
    });
});