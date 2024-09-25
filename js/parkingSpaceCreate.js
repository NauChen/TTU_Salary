


$(function () {
    toggleRadioItems('originalBuilding', 'newBuilding', 'originalBuildingBox', 'newBuildingBox');

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

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }


        // 檢查 danger_ 開頭元素的文字內容
        if (!checkDangerElements()) {
            swalToastWarning('請填上正確資料唷！', 'top');
            return;
        }

        // 建立 FormData 對象，將表單數據傳送
        // let formData = new FormData($('#formSendProofOfPayment')[0]);
        // formData.append('selectedIds', selectedIds);


        $('#formParkingSpaceCreate').submit(); // 提交表單
        // console.log('表單資料已送出');
        // // 送出表單資料到後端
        // $.ajax({
        //     url: paymentUrl,  // 替換為後端處理的 URL
        //     type: 'POST',
        //     data: formData,
        //     processData: false, // 必須設置為 false 才能正確傳送 FormData
        //     contentType: false, // 必須設置為 false 以避免 jQuery 自動設置類型
        //     success: function (response) {
        //         // 處理成功的回應
        //         // swalToastSuccess('資料已成功提交！', 'top');
        //         swalToastSuccess(response.message, 'top');// 2秒
        //         setTimeout(function () {
        //             window.history.back(); // 返回上一頁
        //         }, 2300);  //2.3秒後
        //     },
        //     error: function (error) {
        //         // 處理錯誤的回應
        //         swalToastError('提交失敗，請稍後再試。', 'top');
        //     }
        // });
    });

});

