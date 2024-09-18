$(function () {

    let data = [
        { id: 'CP1', type: '階段付款', description: '培育室(挺生大樓-202)', amount: '20,000元' },
        { id: 'CP2', type: '階段付款', description: '停車位(校本部-01)', amount: '2,000元' },
        { id: 'CA1', type: '新申請', description: '停車位(ABC-119)', amount: '費用待確認' },
        { id: 'BA1', type: '新申請', description: '識別證(王小明)', amount: '100元' },
        { id: 'BA2', type: '遺失補發', description: '識別證(王小明)', amount: '300元' }
    ];
    
    // 動態生成table內容
    let $table = $('#proofOfPayment_Table'); // 使用jQuery選擇table
    $table.empty(); // 清空現有內容
    
    $.each(data, function(index, item) {
        let row = `
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
        </tr>`;
        $table.append(row); // 使用 jQuery 將行追加到 table 中
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

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
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


        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，送出表單資料
            $('#formSendProofOfPayment').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning(' 請填上正確資料唷！', 'top');
        }
    });

});