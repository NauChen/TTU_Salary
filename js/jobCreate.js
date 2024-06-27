
$(function () {
    // #salaryType切換，調用 職缺函式 - handleSalaryChoose
    $('#salaryType').on('change', function () {
        var selectedOption = $(this).val();
        handleSalaryChoose(selectedOption);
    });

    //限制截止日期不可小於當日
    var today = new Date().toISOString().split('T')[0];
    $('#applicationDeadline').attr('min', today);
    // $('#applicationDeadline').val(jobData.applicationDeadline);

    // 切換工作待遇單選時，更改class = 'thisRequired' 為相應的輸入框。 
    $('input[name="salaryTypeItem"]').on("change", function () {
        var selectedValue = $(this).val();
        switch (selectedValue) {
            case "1":
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsInput").addClass("thisRequired");
                $('#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput').text(''); // 清除其他錯誤訊息
                break;
            case "2":
                $("#dollarsInput, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "3":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#moreThenDollarsInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "4":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#negotiableInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "5":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired");
                $("#dollarsPerCaseInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput").text(''); // 清除其他錯誤訊息
                break;
            default:
                break;
        }
    });

});


$(function () {

    // 當 .thisRequired 更改時，再次執行檢查
    // $('.thisRequired').on('input change', function () {

    // checkRequiredElements();
    // var id = $(this).attr('id');
    // var elementType = $(this).prop('tagName').toLowerCase();
    // var value = '';
    // switch (elementType) {
    //     case 'input':
    //         var inputType = $(this).attr('type').toLowerCase();
    //         if (inputType === 'checkbox' || inputType === 'radio') {
    //             if (!$(this).is(':checked')) {
    //                 allFilled = false;
    //                 addDangerRequiredMessage(id);
    //             }
    //         } else if (inputType === 'file') {
    //             if ($(this).get(0).files.length === 0) {
    //                 allFilled = false;
    //                 addDangerRequiredFilesMessage(id);
    //             } else {
    //                 removeDangerMessage(id);
    //             }
    //         } else {
    //             value = $(this).val().trim();
    //             if (value === '') {
    //                 allFilled = false;
    //                 addDangerRequiredMessage(id);
    //             } else {
    //                 removeDangerMessage(id);
    //                 // // 檢查是否為電話號碼類型，若是則再次驗證格式
    //                 // if ($(this).hasClass('thisPhone')) {
    //                 //     var phoneId = $(this).attr('id');
    //                 //     if (!validatePhone(value)) {
    //                 //         addDangerPhoneMessage(phoneId);
    //                 //         allFilled = false; // 如果格式不正確，設置 allFilled 為 false
    //                 //     } else {
    //                 //         $('#danger_' + phoneId).text(''); // 清除錯誤訊息
    //                 //     }
    //                 // }
    //             }
    //         }
    //         break;
    //     case 'select':
    //         value = $(this).val() ? $(this).val().trim() : '';
    //         if (value === '') {
    //             allFilled = false;
    //             addDangerRequiredSelectMessage(id);
    //         } else {
    //             removeDangerMessage(id);
    //         }
    //         break;
    //     case 'textarea':
    //         value = $(this).val() ? $(this).val().trim() : '';
    //         if (value === '') {
    //             allFilled = false;
    //             addDangerRequiredMessage(id);
    //         } else {
    //             removeDangerMessage(id);
    //         }
    //         break;
    //     default:
    //         break;
    // }
    // });

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





// // 切換工作待遇單選時，更改class = 'thisRequired' 為相應的輸入框。
// $('input[name="salaryTypeItem"]').on("change", function () {
//     // alert("Handler for `change` called.");
//     var selectedValue = $(this).val();
//     // console.log(selectedValue);
//     switch (selectedValue) {
//         case "1":
//             theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["dollarsInput"]);
//             break;
//         case "2":
//             theseRemoveClass(["thisRequired"], ['dollarsInput', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["dollarsToDollars_1Input", "dollarsToDollars_2Input"]);
//             break;
//         case "3":
//             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'negotiableInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["moreThenDollarsInput"]);
//             break;
//         case "4":
//             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["negotiableInput"]);
//             break;
//         case "5":
//             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']);
//             theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]);
//             break;
//         default:
//             break;
//     }
// });