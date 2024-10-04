// 付款資訊-合格廠商
// var companyData = [
//     "超級棒股份有限公司",
//     "大富翁科技有限公司",
//     "迅捷物流股份有限公司",
//     "綠能科技有限公司",
//     "全球股份有限公司",
//     "宇宙科技有限公司",
//     "光速科技有限公司"
// ];

// let pendingPaymentList = [
//     { id: 'CP1', type: '階段付款', description: '培育室(挺生大樓-202)', amount: '20,000元' },
//     { id: 'CP2', type: '階段付款', description: '停車位(校本部-01)', amount: '2,000元' },
//     { id: 'CA1', type: '新申請', description: '停車位(ABC-119)', amount: '費用待確認' },
//     { id: 'BA1', type: '新申請', description: '識別證(王小明)', amount: '100元' },
//     { id: 'BA2', type: '遺失補發', description: '識別證(王小明)', amount: '300元' }
// ];

$(function () {
    // 動態生成table內容
    // let $table = $('#proofOfPayment_Table');
    // $table.empty(); // 清空現有內容

    // $.each(pendingPaymentList, function (index, item) {
    //     let row = `
    //     <tr>
    //         <td>
    //             <input type="checkbox" class="form-check-input me-2 idCard-checkbox" id="${item.id}" name="proofOfPaymentItem">
    //         </td>
    //         <td>
    //             <label for="${item.id}" class="col-lg col-form-label">
    //                 <span class="text-nowrap text-secondary">${item.type}</span>
    //                 <span class="text-nowrap">${item.description}</span>
    //                 <span class="text-nowrap text-danger">${item.amount}</span>
    //             </label>
    //         </td>
    //     </tr>`;
    //     $table.append(row); // 將行追加到 table 中
    // });

    if(pendingPaymentList != null){
        renderTable(pendingPaymentList); 
    };

    console.log('篩選出的待付項目：', pendingPaymentAllList);

    // $('#listPendingItemsBtn').click(function () {
    //     // 取得 input 欄位中的公司名稱
    //     let companyName = $('#proofOfPayment_companyName').val().trim();

    //     // 檢查是否輸入了公司名稱
    //     if (companyName === '') {
    //         alert('請輸入公司名稱');
    //         return;
    //     }

    //     // 根據公司名稱篩選出對應的待付項目
    //     var pendingPaymentList = pendingPaymentAllList.filter(item => item.company === companyName);

    //     // 更新前端資料清單 (假設你已經有前端邏輯來處理這個資料)
    //     console.log('篩選出的待付項目：', pendingPaymentList);
    //     // window.pendingPaymentList = pendingPaymentList;  // 更新全局變數
    //     renderTable(pendingPaymentList); 
    // });


        // 動態生成table內容
    function renderTable(pendingPaymentList) {
        const table = document.getElementById('proofOfPayment_Table'); // 獲取表格元素
        table.innerHTML = ''; // 清空現有內容
    
        pendingPaymentList.forEach(item => {
            // 創建新的行
            const row = document.createElement('tr');
    
            // 生成行的內容
            row.innerHTML = `
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
            `;
    
            // 將行追加到表格中
            table.appendChild(row);
        });
    }


    // 建議輸入
    $('#proofOfPayment_companyName').typeahead({
        source: companyData
    });

    if (last5Num) {
        $('#proofOfPayment_last5AccountNo').text(last5Num);
    }



    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    $('#proofOfPayment_last5AccountNo').on('input change', function () {
        var inputVal = $(this).val(); // 獲取輸入的值
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
        let formData = new FormData($('#formSendProofOfPayment')[0]);
        formData.append('selectedIds', selectedIds);

        // 檢查是否有上傳檔案
        let remittanceFile = $('#remittancePdf')[0].files[0];
        if (remittanceFile) {
            formData.append('remittancePdf', remittanceFile); // 如果有檔案則添加
        }

        // 送出表單資料到後端
        $.ajax({
            url: paymentUrl,  
            type: 'POST',
            data: formData,
            processData: false, // 必須設置為 false 才能正確傳送 FormData
            contentType: false, // 必須設置為 false 以避免 jQuery 自動設置類型
            success: function (response) {
                // 處理成功的回應
                // swalToastSuccess('資料已成功提交！', 'top');
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

        // // 最後檢查 danger_ 開頭元素的文字內容
        // if (checkDangerElements()) {
        //     // 如果返回 true，送出表單資料
        //     // $('#formSendProofOfPayment').submit(); // 提交表單
        //     // console.log('表單資料已送出');
        //     $.ajax({
        //         url: paymentUrl, 
        //         method: 'POST',
        //         data: formData,
        //         success: function (response) {
        //             if (response.success) {
        //                 swalToastSuccess('匯款證明提交成功！', 'top');
        //                 // 根據需要，跳轉到其他頁面或刷新頁面
        //             } else {
        //                 swalToastWarning(response.message, 'top');
        //             }
        //         },
        //         error: function (xhr, status, error) {
        //             swalToastError('提交匯款證明時發生錯誤。', 'top');
        //         }
        //     });
        // } else {
        //     // 如果返回 false，顯示警告訊息
        //     swalToastWarning(' 請填上正確資料唷！', 'top');
        // }
    });

});