$(function () {

    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);  // 假設這個函數存在並檢查必填欄位
    });

    // 當 .thisPassword 更改時，再次執行檢查
    $('.thisPassword').on('input change', function () {
        checkPasswords.call(this);  // 假設這個函數存在並檢查密碼欄位
    });

    // 檢查密碼一致性和格式
    $('#settingNewPasswordAgain, #settingNewPassword').on('input blur change', function () {
        var newPassword = $('#settingNewPassword').val().trim();
        var newPasswordAgain = $('#settingNewPasswordAgain').val().trim();

        // 檢查兩次密碼是否一致
        if (newPassword !== newPasswordAgain) {
            $('#danger_settingNewPasswordAgain').text('請輸入相同的新密碼。');
        } else {
            $('#danger_settingNewPasswordAgain').text(''); // 清除錯誤訊息
        }

        // 檢查密碼格式是否正確
        // if (!validatePassword(newPassword)) {
        //     $('#danger_settingNewPassword').text('密碼格式不正確，請包含大寫、小寫、數字、符號，並且避免連續或重複字元。');
        // } else {
        //     $('#danger_settingNewPassword').text(''); // 清除錯誤訊息
        // }
        // checkPasswords();aK5r.6gP
        // Qhi735r4
    });

    // 點擊 updateBtn 按鈕時
    $('#updateBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果有未填的必填項，直接返回
        }

        // 檢查密碼
        if (!checkPasswords()) {
            return; // 如果密碼有錯誤，直接返回
        }

        // 最後檢查 danger_ 開頭的元素是否存在錯誤訊息
        if (checkDangerElements()) {
            // 表單資料驗證成功，提交表單
            $('#formSetting').submit();
        } else {
            // 若有錯誤訊息，顯示警告提示
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });

});
