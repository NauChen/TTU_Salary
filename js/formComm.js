// ※※※※※※=== 全表單 ===※※※※※※

// 表單-部分必填-檢驗
function validSomeRequiredForm(submitButtonId, formId) {
    $('#' + submitButtonId).on('click', function () {
        var allFilled = true;

        $('#' + formId + ' .thisRequired').each(function () {

            if ($(this).is('select')) {
                if ($(this).val() === null) {
                    allFilled = false;
                    return false;
                }
            } else {
                if ($(this).val().trim() === '') {
                    allFilled = false;
                    return false;
                }
            }

        });

        if (!allFilled) {
            swalToastWarning('請將必填欄位填上。', 'top');
        } else {
            // 所有欄位都有值，可以提交表單
            $('#' + formId).submit();
        }
    });
}
// 表單-全部必填-檢驗
function validAllRequiredForm(submitButtonId, formId) {
    $('#' + submitButtonId).on('click', function () {
        var allFilled = true;

        // 遍歷所有帶有 .thisRequired 類別的元素
        $('#' + formId + ' .thisRequired').each(function () {
            if ($(this).is('select')) { // 如果是 <select> 元素
                // console.log($(this).val());
                if ($(this).val() === null) { // 檢查選擇的值是否為預設值
                    // console.log('請選擇');
                    allFilled = false;
                    return false; // 退出循環
                }
            } else { // 對於其他輸入框（input 和 textarea）
                if ($(this).val().trim() === '') { // 檢查值是否為空
                    allFilled = false;
                    return false; // 退出循環
                }
            }
        });

        if (!allFilled) {
            swalToastWarning('請將所有欄位填上。', 'top');
        } else {
            // 所有必填字段都有值，可以提交表單
            console.log('所有欄位都已填寫，可以提交表單。');

            // 提交表單的程式碼
            $('#' + formId).submit();
        }
    });
}

// 表單預覽-全部必填-檢驗
// function validAllRequiredFormPreview(confirmButtonId, formId, model_id) {
//     $('#' + confirmButtonId).on('click', function () {
//         var allFilled = true;

//         // 遍歷所有帶有 .thisRequired 類別的元素
//         $('#' + formId + ' .thisRequired').each(function () {
//             if ($(this).is('select')) { // 如果是 <select> 元素
//                 // console.log($(this).val());
//                 if ($(this).val() === null) { // 檢查選擇的值是否為預設值
//                     let AAA = $(this).val();
//                     console.log(AAA);
//                     allFilled = false;
//                     return false; // 退出循環
//                 }
//             } else { // 對於其他輸入框（input 和 textarea）
//                 if ($(this).val().trim() === '') { // 檢查值是否為空
//                     let BBB = $(this).val().trim();
//                     console.log(BBB);
//                     allFilled = false;
//                     return false; // 退出循環
//                 }
//             }
//         });

//         if (!allFilled) {
//             // console.log('全部必填檢驗 allFilled ： ' + allFilled);
//             swalToastWarning('請將所有欄位填上。', 'top');
//             $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//         } else {
//             checkDangerElements(confirmButtonId, model_id);
//             // 所有必填字段都有值，可以提交表單
//             // console.log('所有欄位都已填寫，可以提交表單。');
//             // 預覽表單的程式碼
//             // $('#' + confirmButtonId).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#' + model_id);
//         }
//     });
// }

// 表單預覽-全部必填-檢驗
function validAllRequiredFormPreview(confirmButtonId, formId, model_id) {
    var allFilled = true;

    // 遍歷所有帶有 .thisRequired 類別的元素
    // $('#' + formId + ' .thisRequired').each(function () {
    //     if ($(this).is('select')) { // 如果是 <select> 元素
    //         if ($(this).val() === null) { // 檢查選擇的值是否為預設值
    //             allFilled = false;
    //             return false; // 退出循環
    //         }
    //     } else { // 對於其他輸入框（input 和 textarea）
    //         if ($(this).val().trim() === '') { // 檢查值是否為空
    //             allFilled = false;
    //             return false; // 退出循環
    //         }
    //     }
    // });
    $('#' + formId + ' .thisRequired').each(function () {
        if ($(this).is('select')) { // 如果是 <select> 元素
            if ($(this).val() === null) { // 檢查選擇的值是否為預設值
                allFilled = false;
                return false; // 退出循環
            }
        } else if ($(this).is('input[type="file"]')) { // 如果是 <input type="file">
            if ($(this).get(0).files.length === 0) { // 檢查是否選擇了文件
                allFilled = false;
                return false; // 退出循環
            }
        } else { // 對於其他輸入框（input 和 textarea）
            if ($(this).val().trim() === '') { // 檢查值是否為空
                allFilled = false;
                return false; // 退出循環
            }
        }
    });

    if (!allFilled) {
        swalToastWarning('請將所有欄位填上。', 'top');
        $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
    } else {
        $('#' + confirmButtonId).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#' + model_id);
    }
    return allFilled;
}

// 有錯誤訊息就不開燈箱
// function checkDangerElements(confirmButtonId, model_id) {
//     // var allFilled = false;
//     var allFilled = true;
//     $('[id^="danger_"]').each(function () {
//         if ($(this).text().trim() !== '') {
//             allFilled = false;
//             return false; // 終止遍歷
//         }
//     });

//     if (!allFilled) {
//         $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//     }
// }
function checkDangerElements(confirmButtonId, model_id) {
    var allFilled = true;
    $('[id^="danger_"]').each(function () {
        if ($(this).text().trim() !== '') {
            allFilled = false;
            return false; // 終止遍歷
        }
    });

    if (!allFilled) {
        $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
    }
    return allFilled;
}

//這個必填
// function checkThisRequired() {
//     var inputItem = $(this); // 當前失去焦點的 input 元素
//     var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
//     // var label = $("label[for='" + inputId + "']").text(); // 獲取與 input 元素相關聯的 label 的文本內容
//     var warningBox = $("#danger_" + inputId);
//     if (inputItem.val().trim() === '' || inputItem.val() === null) {
//         warningBox.text("(-`д´-) 這是必填欄位，請填上歐！").removeClass("d-none");
//         allRequiredValid = false;
//     } else {
//         warningBox.text("").addClass("d-none");
//     }
// }


// ※※※※※※=== 文字轉換 ===※※※※※※
// 將資料庫的文字內的 \n 轉成 <br>
function convertNewlinesToBreaks(text) {
    return text.replace(/\n/g, '<br>');
}
// 將 <br> 轉成 \n
function convertBreaksToNewlines(text) {
    return text.replace(/<br\s*[\/]?>/gi, '\n').trim();
}
// 限制僅能輸入符合 電話 格式的字符。 數字 & '-'
function verifyPhone(obj) {
    $(obj).val($(obj).val().replace(/[^\d-]/g, ""));
}

// 限制僅能輸入符合 email 格式的字符。 字母、數字、點、破折號、底線、@ 符號
function verifyEmail(obj) {
    $(obj).val($(obj).val().replace(/[^a-zA-Z0-9._@-]/g, ""));
}



// ※※※※※※=== 職缺 ===※※※※※※
// 職缺-根據薪資類型，顯示相應的金額輸入框 與 預選單選
function handleSalaryChoose(selectedOption) {
    switch (selectedOption) {
        case '時薪':
        case '日薪':
            theseAddClass(["choose"], ["dollarsItem"]);
            theseRemoveClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            document.getElementById('salaryTypeRadio1').checked = true; // #optionsRadios1 增加 checked 屬性
            theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
            theseAddClass(["thisRequired"], ["dollarsInput"]);
            break;
        case '月薪':
            theseAddClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem']);
            theseRemoveClass(["choose"], ['dollarsPerCaseItem']);
            // if (!document.getElementById('salaryTypeRadio2').checked && !document.getElementById('salaryTypeRadio3').checked && !document.getElementById('salaryTypeRadio4').checked) {
            //     document.getElementById('salaryTypeRadio1').checked = true; // #optionsRadios1 增加 checked 屬性
            // }
            document.getElementById('salaryTypeRadio1').checked = true; // #optionsRadios1 增加 checked 屬性
            theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
            theseAddClass(["thisRequired"], ["dollarsInput"]);
            break;
        case '按件計酬':
            theseAddClass(["choose"], ['dollarsPerCaseItem']);
            theseRemoveClass(["choose"], ["dollarsItem", 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem',]);
            document.getElementById('salaryTypeRadio5').checked = true; // #optionsRadios5 增加 checked 屬性
            break;
        case '請選擇':
            theseRemoveClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            document.getElementById('salaryTypeRadio1', 'salaryTypeRadio2', 'salaryTypeRadio3', 'salaryTypeRadio4', 'salaryTypeRadio5').checked = false; // #optionsRadios1 增加 checked 屬性
            theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']); // 移除必填class，用於formComm.js
            theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]); // 增加必填class，用於formComm.js
            break;
    }
}
// 職缺-串接薪資金額區間
function combineInputs() {
    // 檢查 optionsRadios2 是否被選中
    var dollarsToDollars = document.getElementById('optionsRadios2').checked;

    if (dollarsToDollars) {
        // 取得兩個 input 的值
        var firstValue = document.querySelector('.combineInputs:nth-child(1)').value;
        var secondValue = document.querySelector('.combineInputs:nth-child(2)').value;

        // 組合兩個值，用 '~' 連接
        var combinedValue = firstValue + '~' + secondValue;

        // 賦值給 JobSalaryData
        document.querySelector('[name="JobSalaryData"]').value = combinedValue;
    }
}



// ※※※※※※=== 電話 ===※※※※※※
// 驗證電話格式的函數
function validatePhone(phone) {
    var phoneRegex = /^\d{2,4}-\d{6,8}$/;
    return phoneRegex.test(phone);
}
// 驗證當前電話的函數
function checkThisPhone() {
    var inputItem = $(this); // 當前失去焦點的 input 元素
    var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
    var warningBox = $("#danger_" + inputId);
    var phoneValue = inputItem.val(); // 取得 input 元素的值
    var allFilled = true;

    if (validatePhone(phoneValue)) {
        warningBox.text("");
    } else {
        // allFilled = false;
        warningBox.text('電話/手機 的格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
    }
}



// ※※※※※※=== 日期 ===※※※※※※
//限制截止日期不可小於開始日期
function restrictEndDate(startDateId, endDateId) {
    $('#' + startDateId).on('change', function () {
        var startDate = $(this).val();
        $('#' + endDateId).attr('min', startDate);
    });
}



// ※※※※※※=== 時間 ===※※※※※※
// 將組合時間拆開
function splitJobTime(jobTime) {
    // 使用正則表達式將jobTime拆分為兩部分
    var timeParts = jobTime.split(" ~ ");

    // 檢查timeParts是否有兩個部分
    if (timeParts.length === 2) {
        return {
            jobTime1: timeParts[0].trim(),
            jobTime2: timeParts[1].trim()
        };
    } else {
        throw new Error("Invalid jobTime format. It should be in the format 'HH:mm ~ HH:mm'.");
    }
}



// ※※※※※※=== E-mail ===※※※※※※
// 轉換@之前的大寫字母為小寫
function convertEmail(email) {
    var atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        var localPart = email.substring(0, atIndex).toLowerCase();
        var domainPart = email.substring(atIndex);
        return localPart + domainPart;
    }
    return email;
}



// 驗證電子郵件地址的函數
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// ※※※※※※=== LINE ID ===※※※※※※
// 驗證Line ID格式是否有效
function isValidLineID(lineID) {
    // 允许的字符為半形英数字、(.)、(-)、(_)和@
    var validChars = /^[a-zA-Z0-9.@_-]+$/;
    return validChars.test(lineID);
}





// 新函式
// 驗證必填
function validateRequiredFields() {
    var isValid = true;

    $('.thisRequired').each(function () {
        var elementType = $(this).attr('type');

        if ((elementType === 'text' || elementType === 'email' || elementType === 'file' || elementType === 'date' || elementType === 'time') && !$(this).val()) {
            isValid = false;
            return false; // 退出each循環
        }

        if ($(this).is('textarea') && !$(this).val()) {
            isValid = false;
            return false; // 退出each循環
        }

        if ($(this).is('select') && !$(this).val()) {
            isValid = false;
            return false; // 退出each循環
        }
    });

    return isValid;
}
// 使用方法
// $('#submitButton').click(function(event) {
//     if (!validateRequiredFields()) {
//         event.preventDefault();
//         alert('請填寫所有必填欄位。');
//     }
// });

// 驗證電話
// function validatePhoneNumbers() {
//     var phoneRegex = /^\d{2,4}-\d{6,8}$/;
//     var isValid = true;

//     $('.thisPhoneNum').each(function() {
//         if (!phoneRegex.test($(this).val())) {
//             isValid = false;
//             return false; // 退出each循環
//         }
//     });

//     return isValid;
// }
// 使用方法
// $('#submitButton').click(function(event) {
//     if (!validatePhoneNumbers()) {
//         event.preventDefault(); // 阻止表單的默認提交行為
//         alert('請輸入有效的電話號碼。');
//     }
// });

function validatePhoneNumbers() {
    var phoneRegex = /^\d{2,4}-\d{6,8}$/;
    var isValid = true;

    $('.thisPhoneNum').each(function() {
        if (!phoneRegex.test($(this).val())) {
            var inputId = $(this).attr('id');
            var warningBox = $("#danger_" + inputId);
            warningBox.text('電話/手機的格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
            isValid = false;
            return false; // 退出each循環
        }
    });

    return isValid;
}

// $(document).ready(function() {
//     // 在 input 元素失去焦點時進行檢查
//     $('.thisPhoneNum').blur(function() {
//         validatePhoneNumbers();
//     });

//     // 在提交表單時進行檢查
//     $('#submitButton').click(function(event) {
//         if (!validatePhoneNumbers()) {
//             event.preventDefault(); // 阻止表單的默認提交行為
//         }
//     });
// });








// 驗證Email
function validateEmails() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;

    $('.thisEmail').each(function() {
        if (!emailRegex.test($(this).val())) {
            isValid = false;
            return false; // 退出each循環
        }
    });

    return isValid;
}
// 使用方法
// $('#submitButton').click(function(event) {
//     if (!validateEmails()) {
//         event.preventDefault(); // 阻止表單的默認提交行為
//         alert('請輸入有效的電子郵件地址。');
//     }
// });
