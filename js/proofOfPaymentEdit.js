// var pendingPaymentThisAllList = {
//     id: '1',
//     company: '超級棒股份有限公司',
//     last5AccountNo: '01234',
//     paymentDate: '2024-07-13',
//     amount: '2,500',
//     items: '1,2,4'
// };


// var pendingPaymentThisList = [
//     { id: '1', type: '階段付款', description: '培育室(挺生大樓-202)', amount: '20,000元' },
//     { id: '2', type: '階段付款', description: '停車位(校本部-01)', amount: '2,000元' },
//     { id: '3', type: '新申請', description: '停車位(ABC-119)', amount: '費用待確認' },
//     { id: '4', type: '新申請', description: '識別證(王小明)', amount: '100元' },
//     { id: '5', type: '遺失補發', description: '識別證(王小明)', amount: '300元' }
// ];

// var companyData = [
//     "超級棒股份有限公司",
//     "大富翁科技有限公司",
//     "迅捷物流股份有限公司",
//     "綠能科技有限公司",
//     "全球股份有限公司",
//     "宇宙科技有限公司",
//     "光速科技有限公司"
// ];



$(function () {

    if (pendingPaymentThisAllList) {
        console.log('顯示列表', pendingPaymentThisAllList);
        $('#proofOfPayment_companyName').val(pendingPaymentThisAllList.company);
        $('#proofOfPayment_last5AccountNo').val(pendingPaymentThisAllList.last5AccountNo);
        $('#proofOfPayment_Date').val(pendingPaymentThisAllList.paymentDate);
        $('#proofOfPayment_Money').val(pendingPaymentThisAllList.amount);
        renderCheckTable(pendingPaymentThisList, pendingPaymentThisAllList.items);  // 傳遞 items 給 renderTable 函式
    };

    $('#listPendingItemsBtn').click(function () {
        // 取得 input 欄位中的公司名稱
        let companyName = $('#proofOfPayment_companyName').val().trim();

        // 檢查是否輸入了公司名稱
        if (companyName === '') {
            swalToastWarning('請輸入公司名稱唷！', 'top');
            return;
        }

        // 根據公司名稱篩選出對應的待付項目
        pendingPaymentList = pendingPaymentAllList.filter(item => item.company === companyName);

        // 更新前端資料清單 (假設你已經有前端邏輯來處理這個資料)
        // console.log('篩選出的待付項目：', pendingPaymentList);
        renderTable(pendingPaymentList);
    });

    // 監聽輸入框的變化
    $('#proofOfPayment_companyName').on('change', function () {
        $('#proofOfPayment_Table').empty(); // 清空表格
    });


    function renderTable(pendingPaymentList) {
        const $table = $('#proofOfPayment_Table'); // 使用 jQuery 獲取表格元素
        $table.empty(); // 清空現有內容

        // 遍歷 pendingPaymentList 並生成表格內容
        $.each(pendingPaymentList, function (index, item) {
            const row = `
                <tr>
                    <td>
                        <input type="checkbox" class="form-check-input me-2 idCard-checkbox" id="${item.id}" name="proofOfPaymentItem">
                    </td>
                    <td>
                        <label for="${item.id}" class="col-lg col-form-label">
                            <span class="text-nowrap text-secondary">${item.type}</span>
                            <span class="text-nowrap">${item.description}</span>
                            <span class="text-nowrap text-danger">${item.amount}</span>
                        </label>
                    </td>
                </tr>
            `;
            // 將行追加到表格中
            $table.append(row);
        });
    }

    function renderCheckTable(pendingPaymentList, selectedItems) {
        const $table = $('#proofOfPayment_Table'); // 使用 jQuery 獲取表格元素
        $table.empty(); // 清空現有內容
        
        // const itemsArray = selectedItems.split(','); // 將選中的項目字串轉為陣列
        const itemsArray = (selectedItems && typeof selectedItems === 'string') ? selectedItems.split(',') : [];


        // 遍歷 pendingPaymentList 並生成表格內容
        $.each(pendingPaymentList, function (index, item) {
            const isChecked = itemsArray.includes(item.id) ? 'checked' : '';  // 判斷是否需要勾選
            
            const row = `
                <tr>
                    <td>
                        <input type="checkbox" class="form-check-input me-2 idCard-checkbox" id="${item.id}" name="proofOfPaymentItem" ${isChecked}>
                    </td>
                    <td>
                        <label for="${item.id}" class="col-lg col-form-label">
                            <span class="text-nowrap text-secondary">${item.type}</span>
                            <span class="text-nowrap">${item.description}</span>
                            <span class="text-nowrap text-danger">${item.amount}</span>
                        </label>
                    </td>
                </tr>
            `;
            // 將行追加到表格中
            $table.append(row);
        });
    }



    // 建議輸入
    $('#proofOfPayment_companyName').typeahead({
        source: companyData
    });

    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

     // 檢查 proofOfPayment_last5AccountNo 是否為5個字元
    $('#proofOfPayment_last5AccountNo').on('input change', function () {
        var inputVal = $(this).val();
        var dangerMessage = $('#danger_proofOfPayment_last5AccountNo'); // 獲取警告訊息的元素

        // 檢查輸入是否為5個字元
        if (inputVal.length !== 5) {
            // 如果不是5個字元，顯示錯誤訊息
            dangerMessage.text("請輸入帳號『後5碼』");
        } else {
            // 如果是5個字元，移除錯誤訊息
            dangerMessage.text("");
        }
    });

    // 點擊 submitBtn 按鈕時
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }


        // 再次檢查 proofOfPayment_last5AccountNo 是否為5個字元
        var proofOfPaymentValue = $('#proofOfPayment_last5AccountNo').val();
        var dangerMessage = $('#danger_proofOfPayment_last5AccountNo');

        if (proofOfPaymentValue.length !== 5) {
            dangerMessage.text("請輸入帳號『後5碼』");
            return; // 如果長度不是5個字元，終止表單提交
        } else {
            dangerMessage.text(""); // 移除錯誤訊息
        }

        let selectedIds = [];

        // 遍歷表格中的每個複選框，檢查是否被選中
        $('#proofOfPayment_Table .idCard-checkbox').each(function () {
            if ($(this).prop('checked')) {
                selectedIds.push($(this).attr('id')); // 添加選中的 ID
            }
        });

        // 如果没有選中任何行，提示用戶
        if (selectedIds.length === 0) {
            swalToastWarning('請勾選本次支付的項目。', 'top');
            return;
        }

        console.log(selectedIds);

        // 檢查 danger_ 開頭元素的文字內容
        if (!checkDangerElements()) {
            swalToastWarning('請填上正確資料唷！', 'top');
            return;
        }

        // 建立 FormData 對象，將表單數據傳送
        let formData = new FormData($('#formEditProofOfPayment')[0]);
        formData.append('selectedIds', selectedIds);

        // 檢查是否有上傳檔案
        let remittanceFile = $('#remittancePdf')[0].files[0];
        if (remittanceFile) {
            formData.append('remittancePdf', remittanceFile); // 如果有檔案則添加
        }

        let paymentEditUrl = '/Remittance/Edit/' + pendingPaymentThisAllList.id;
        // 送出表單資料到後端
        $.ajax({
            url: paymentEditUrl,
            type: 'POST',
            data: formData,
            processData: false, // 必須設置為 false 才能正確傳送 FormData
            contentType: false, // 必須設置為 false 以避免 jQuery 自動設置類型
            success: function (response) {
                // 處理成功的回應
                swalToastSuccess(response.message, 'top');// 2秒
                setTimeout(function () {
                    window.history.back(); // 返回上一頁
                }, 2300);  //2.3秒後
            },
            error: function (error) {
                // 處理錯誤的回應
                swalToastError('提交失敗，請稍後再試。', 'top');
            }
        });

    });

});