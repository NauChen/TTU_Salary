
$(function () {
    // #salaryType切換，調用 職缺函式 - handleSalaryChoose
    $('#salaryStyle').on('change', function () {
        var selectedOption = $(this).val();
        handleSalaryChoose(selectedOption);
    });

    //限制截止日期不可小於當日
    var today = new Date().toISOString().split('T')[0];
    $('#applicationDeadline').attr('min', today);

    // 切換工作待遇單選時，更改class = 'thisRequired' 為相應的輸入框。 
    $('input[name="JobSalaryType"]').on("change", function () {
        var selectedValue = $(this).val();
        switch (selectedValue) {
            case "元":
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsInput").addClass("thisRequired");
                $('#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput').text(''); // 清除其他錯誤訊息
                break;
            case "元至元":
                $("#dollarsInput, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "元以上":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#moreThenDollarsInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "面議":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#negotiableInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "按件計酬":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired");
                $("#dollarsPerCaseInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput").text(''); // 清除其他錯誤訊息
                break;
            default:
                break;
        }
    });

});


// $(function () {
//     // 當 .thisRequired 更改時，再次執行檢查
//     $('.thisRequired').on('input change', function () {
//         checkThisRequiredElements.call(this);
//     });

//     // 點擊 resetBtn 按鈕時
//     $('#resetBtn').click(function () {
//         // 執行原有 reset 的功能
//         this.form.reset();
//         // 清空所有以 danger_ 開頭元素的內容
//         $('[id^="danger_"]').text('');
//     });

//     // 點擊 submitBtn 按鈕時
//     $('#submitCreateJob').click(function (event) {
//         event.preventDefault(); // 防止表單預設提交行為

//         // 先檢查必填項
//         if (!checkRequiredElements()) {
//             return; // 如果必填項有未填寫的，直接返回，不再繼續
//         }

//         // 最後檢查 danger_ 開頭元素的文字內容
//         if (checkDangerElements()) {
//             // 如果返回 true，送出表單資料
//             console.log('表單資料已送出');
//             $('#formJobCreate').submit(); // 提交表單
//         } else {
//             // 如果返回 false，顯示警告訊息
//             swalToastWarning(' 請填上正確資料唷！', 'top');
//         }
//     });
// });

$(function () {

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

        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，送出表單資料
            $('#formJobCreate').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning(' 請填上正確資料唷！', 'top');
        }
    });

});


