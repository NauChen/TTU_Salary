
$(function () {
    // ※※※ 辦理公司登記勾選時，切換 成立日期、統編輸入框、公司登記證 。限制僅可選擇當日以前的日期※※※
    var $creationDate = $("#creationDate");
    var $creationDateYet = $("#creationDateYet");
    var today = new Date().toISOString().split('T')[0];
    $creationDate.attr('max', today);
    var $uniformNum = $('#uniformNum');

    $creationDateYet.change(function () {
        if ($creationDateYet.is(":checked")) {
            $creationDate.val("").prop('disabled', true);
            $uniformNum.val("").prop('placeholder', "後補").prop('disabled', true);
            $creationDateYet.attr('asp-for', 'CreationDate');
            $creationDate.removeAttr('asp-for');
            theseRemoveClass(['thisRequired'], ['creationDate', 'uniformNum','companyProof']);
            removeDangerMessage('creationDate');
            removeDangerMessage('uniformNum');
            $('#companyProofBox').addClass('d-none');
        } else {
            $creationDate.prop('disabled', false);
            $uniformNum.prop('placeholder', "").prop('disabled', false);
            $creationDate.attr('asp-for', 'CreationDate');
            $creationDateYet.removeAttr('asp-for');
            theseAddClass(['thisRequired'], ['creationDate', 'uniformNum','companyProof']);
            $('#companyProofBox').removeClass('d-none');
        }
    });




    // ※※※ 通訊地址同上勾選時，切換 通訊地址輸入框※※※
    var $creationAdd = $("#companyAdd");
    var $creationLocalAdd = $("#locationOfCompany");
    var $sameAdd = $('#sameAdd');

    // 初始狀態檢查
    $creationAdd.on('input', function () {
        checkSameAddStatus();
    });

    // 監聽同上勾選狀態變化
    $sameAdd.change(function () {
        if ($sameAdd.is(":checked")) {
            $creationLocalAdd.val($creationAdd.val());
            $('#danger_locationOfCompany').text('');
        }
    });

    // ※※※ 通訊地址輸入框異動時，同上不勾選※※※
    $creationLocalAdd.change(function () {
        $sameAdd.prop('checked', false);
        checkSameAddStatus();
    });

    // 檢查同上勾選狀態函式
    function checkSameAddStatus() {
        if ($creationAdd.val().trim() === '') {
            $sameAdd.prop('checked', false);
            $sameAdd.prop('disabled', true);
        } else {
            $sameAdd.prop('disabled', false);
        }
    }

});


// ================檢查Email
function checkTheEmail() {
    // 接資料庫後改用此。
    // var email = $("#companyEmail").val();
    // $.ajax({
    //     url: '@Url.Action("CheckEmail", "Account")',
    //     type: "POST",
    //     data: { email: email },
    //     success: function (result) {
    //         var checkEmail = $("#checkEmailResults");
    //         var nextButton = $("#submitBtn");
    //         switch (result) {
    //             case "NoText":
    //                 checkEmail.text("檢查").removeClass("invalid").removeClass("valid");
    //                 nextButton.prop("disabled", true);
    //                 break;
    //             case false: //沒有相同
    //                 checkEmail.text("檢查").removeClass("invalid").addClass("valid");
    //                 nextButton.prop("disabled", false);
    //                 break;
    //             case true:
    //                 checkEmail.text("此Email已註冊過。").removeClass("valid").addClass("invalid");
    //                 nextButton.prop("disabled", true);
    //                 break;
    //             default:
    //                 checkEmail.text("Email格式不正確。").removeClass("valid").addClass("invalid");
    //                 nextButton.prop("disabled", true);
    //                 break;
    //         }
    //     },
    //     error: function (error) {
    //         console.log("發生錯誤！", error.responseText);
    //     }
    // });
    // 未接資料庫暫用此測試。
    var checkEmail = $("#checkEmailResults");
    var nextButton = $("#submitBtn");
    var checkEmailText = checkEmail.text();
    switch (checkEmailText) {
        case "檢查":
            checkEmail.text("檢查").removeClass("invalid").removeClass("valid");
            nextButton.prop("disabled", true);
            break;
        case '相異': //沒有相同
            checkEmail.text("檢查").removeClass("invalid").addClass("valid");
            nextButton.prop("disabled", false);
            break;
        case '此Email已註冊過。':
            checkEmail.text("此Email已註冊過。").removeClass("valid").addClass("invalid");
            nextButton.prop("disabled", true);
            break;
        default:
            checkEmail.text("Email格式不正確。").removeClass("valid").addClass("invalid");
            nextButton.prop("disabled", true);
            break;
    }
}

// ================檢查.thisRequired是否必填，沒有則加上錯誤訊息並回傳false
function checkRequiredElements() {
    var allFilled = true;

    $('.thisRequired').each(function () {
        var elementType = $(this).prop('tagName').toLowerCase();
        var value = '';

        switch (elementType) {
            case 'input':
                var inputType = $(this).attr('type').toLowerCase();
                if (inputType === 'checkbox' || inputType === 'radio') {
                    if (!$(this).is(':checked')) {
                        allFilled = false;
                        addDangerRequiredMessage($(this).attr('id'));
                    }
                } else if (inputType === 'file') {
                    if ($(this).get(0).files.length === 0) {
                        allFilled = false;
                        addDangerRequiredFilesMessage($(this).attr('id'));
                    } else {
                        removeDangerMessage($(this).attr('id'));
                    }
                } else {
                    value = $(this).val().trim();
                    if (value === '') {
                        allFilled = false;
                        addDangerRequiredMessage($(this).attr('id'));
                    } else {
                        removeDangerMessage($(this).attr('id'));
                        // 檢查是否為電話號碼類型，若是則再次驗證格式
                        if ($(this).hasClass('thisPhone')) {
                            var phoneId = $(this).attr('id');
                            if (!validatePhone(value)) {
                                addDangerPhoneMessage(phoneId);
                                allFilled = false; // 如果格式不正確，設置 allFilled 為 false
                            } else {
                                $('#danger_' + phoneId).text(''); // 清除錯誤訊息
                            }
                        }
                    }
                }
                break;
            case 'select':
            case 'textarea':
                value = $(this).val().trim();
                if (value === '') {
                    allFilled = false;
                    addDangerRequiredMessage($(this).attr('id'));
                } else {
                    removeDangerMessage($(this).attr('id'));
                }
                break;
            default:
                break;
        }
    });

    return allFilled;
}
// ================檢查.thisPhone是否符合格式，沒有則加上錯誤訊息並回傳false
function checkPhoneNumbers() {
    var allValid = true;

    $('.thisPhone').each(function () {
        var phoneValue = $(this).val().trim();
        var inputId = $(this).attr('id');

        if (phoneValue === '') {
            // 當值為空，跳過檢查並繼續檢查下一個
            $('#danger_' + inputId).text('');
            return true;
        }

        if (!validatePhone(phoneValue)) {
            addDangerPhoneMessage(inputId);
            allValid = false;
        } else {
            $('#danger_' + inputId).text('');
        }
    });

    return allValid;
}

// 添加 必填的警告訊息
function addDangerRequiredMessage(id) {
    $('#danger_' + id).text('此為必填欄位！');
}

// 添加 必上傳的警告訊息
function addDangerRequiredFilesMessage(id) {
    $('#danger_' + id).text('此為必須上傳的檔案！');
}

// 添加電話格式的警告訊息
function addDangerPhoneMessage(id) {
    $('#danger_' + id).text('格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
}

// 刪除警告訊息
function removeDangerMessage(id) {
    $('#danger_' + id).text('');
}

// onkeyup 限制僅能輸入  數字 & '-'
function restrictToNumberHyphen(obj) {
    $(obj).val($(obj).val().replace(/[^\d-]/g, ""));
}
// onkeyup 限制僅能輸入 數字 的字符。 禁開頭是0
function restrictToNum(obj) {
    var inputValue = $(obj).val().replace(/\D/g, '');
    if (inputValue.startsWith('0')) {
        inputValue = inputValue.replace(/^0+/, '');
    }
    $(obj).val(inputValue);
}

// 增加千分號
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 刪除千分號
function unformatNumber(str) {
    return str.replace(/,/g, '');
}

// 當元素聚焦時，移除千分號
function unformatOnFocus(obj) {
    var value = $(obj).val();
    $(obj).val(unformatNumber(value));
}

// 當元素失去焦點時，增加千分號
function formatOnBlur(obj) {
    var value = $(obj).val();
    if (value !== '') {
        $(obj).val(formatNumber(value));
    }
}

// onkeyup 限制僅能輸入數字，且最多8個字元
function restrictToUniformNum(obj) {
    var inputValue = $(obj).val().replace(/\D/g, ''); // 移除所有非數字字符
    if (inputValue.length > 8) {
        inputValue = inputValue.slice(0, 8); // 截取前8個字符
    }
    $(obj).val(inputValue);
}

// onkeyup 限制僅能輸入 字母、數字、點、破折號、底線、@ 符號
function restrictToValidChars(obj) {
    $(obj).val($(obj).val().replace(/[^a-zA-Z0-9._@-]/g, ""));
}

// 驗證電話格式的函數
function validatePhone(phone) {
    var phoneRegex = /^\d{2,4}-\d{6,8}$/;
    return phoneRegex.test(phone);
}

// onblur 驗證當前電話的函數
// function checkThisPhone() {
//     var inputItem = $(this); // 當前失去焦點的 input 元素
//     var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
//     var warningBox = $("#danger_" + inputId);
//     var phoneValue = inputItem.val(); // 取得 input 元素的值

//     if (validatePhone(phoneValue)) {
//         warningBox.text("");
//     } else {
//         warningBox.text('格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
//     }
// }
function checkThisPhone() {
    var phoneValue = $(this).val().trim();
    var phoneId = $(this).attr('id');
    var warningBox = $('#danger_' + phoneId);

    if (phoneValue === '') {
        warningBox.text('');
    } else if (!validatePhone(phoneValue)) {
        warningBox.text('格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
    } else {
        warningBox.text('');
    }
}




// ================必傳通知
function checkUpload() {
    var inputItem = $(this); // 當前失去焦點的 input 元素
    var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
    var fileName = $("." + inputId).text(); // 獲取與 input 元素相關聯的 div 的文本內容
    var warningBox = $("#errorBox");
    if (inputItem.val().trim() === '') {
        // warningBox.text(fileName + " 是必需上傳的資料，請點擊檔案唷！").addClass("show");
        swalToastWarning(fileName + " 是必需上傳的資料，請點擊檔案唷！", 'top');
        // } else {
        //     warningBox.text("").removeClass("show");
    }
}
// ================頁檢查
function checkRequiredGroup(groupClass, nextBtn) {
    var allFilled = true;
    var submitButton = $(".registerSubmit");
    var nextButton = $("." + nextBtn);

    $("." + groupClass).each(function () {
        if ($(this).val().trim() === '') {
            allFilled = false;
            return false;
        }
    });

    if (allFilled) {
        submitButton.prop("disabled", false);
        nextButton.prop("disabled", false);
    } else {
        submitButton.prop("disabled", true);
        nextButton.prop("disabled", true);
    }
}
// ================第一頁檢查
// function CreateYetRequired() {
//     var allFilled = true;
//     var submitButton = $(".registerSubmit");
//     var nextButton = $(".partOneBtn");

//     if ($("#creationDateYet").is(":checked")) {
//         $(".partOne:not(#creationDate, #uniformNum)").each(function () {
//             if ($(this).val().trim() === '') {
//                 allFilled = false;
//                 return false;
//             }
//         });
//     } else {
//         $(".partOne").each(function () {
//             if ($(this).val().trim() === '') {
//                 allFilled = false;
//                 return false;
//             }
//         });
//     }

//     if (allFilled) {
//         submitButton.prop("disabled", false);
//         nextButton.prop("disabled", false);
//     } else {
//         submitButton.prop("disabled", true);
//         nextButton.prop("disabled", true);
//     }
// }
// ================最後頁檢查
// function checkFilesRequiredGroup(groupClass) {
//     var allFilled = true;
//     var submitButton = $(".registerSubmit");

//     $("." + groupClass).each(function () {
//         if ($(this).text().trim() === '') {
//             allFilled = false;
//             return false;
//         }
//     });

//     if (allFilled) {
//         submitButton.prop("disabled", false);
//     } else {
//         submitButton.prop("disabled", true);
//     }
// }
// $(document).ready(function () {

//     $(".requiredItem").blur(checkRequired);
//     $(".requiredFile").blur(checkUpload);


//     $(".partTwo").blur(function () {
//         checkRequiredGroup("partTwo", "partTwoBtn");
//     });
//     $(".partThree").blur(function () {
//         checkRequiredGroup("partThree", "partThreeBtn");
//     });
//     if ($(".partThree").val() !== "") {
//         checkRequiredGroup("partThree", "partThreeBtn");
//     }


//     $("#creationDateYet").change(function () {
//         CreateYetRequired();
//     });

//     $(".partOne").blur(function () {
//         CreateYetRequired();
//     });
//     $(".requiredFile").blur(function () {
//         checkFilesRequiredGroup("fileInfo");
//     });

// });


// ※※※ 檢查 danger_ 開頭元素的文字內容是否為空的函數※※※
function checkDangerElements() {
    var dangerElements = $('[id^="danger_"]');

    for (var i = 0; i < dangerElements.length; i++) {
        if ($(dangerElements[i]).text().trim() !== '') {
            return false; // 如果有任何一個元素有文字，回傳 false
        }
    }

    return true; // 若都沒有文字，回傳 true
}

$(function () {
    // 載入完畢後，執行一次檢查email
    checkTheEmail();

    // 當 #companyEmail 失去焦點時，再次執行檢查
    $('#companyEmail').on('blur', function () {
        checkTheEmail();
    });

    $('.thisRequired').on('input change', function () {
        var id = $(this).attr('id');
        var elementType = $(this).prop('tagName').toLowerCase();
        var value = '';

        switch (elementType) {
            case 'input':
                var inputType = $(this).attr('type').toLowerCase();
                if (inputType === 'checkbox' || inputType === 'radio') {
                    if ($(this).is(':checked')) {
                        removeDangerMessage(id);
                    }
                } else {
                    value = $(this).val().trim();
                    if (value !== '') {
                        removeDangerMessage(id);
                    }
                }
                break;
            case 'select':
            case 'textarea':
                value = $(this).val().trim();
                if (value !== '') {
                    removeDangerMessage(id);
                }
                break;
            default:
                break;
        }
    });




    // // 點擊 submitBtn 按鈕時的事件處理
    // $('#submitBtn').click(function (event) {
    //     checkRequiredElements();
    //     checkPhoneNumbers();
    //     // 檢查 danger_ 開頭元素的文字內容
    //     if (checkDangerElements()) {
    //         // 如果返回 true，送出表單資料
    //         // 這裡可以添加表單送出的相關程式碼，例如：
    //         // $('#myForm').submit();
    //         console.log('表單資料已送出');
    //     } else {
    //         // 如果返回 false，顯示警告訊息
    //         swalToastWarning(' 請填上正確資料唷！', 'top');
    //     }

    //     // 防止表單預設提交行為
    //     event.preventDefault();
    // });

    // 提交按鈕點擊事件處理
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }

        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，送出表單資料
            $('#myForm').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning(' 請填上正確資料唷！', 'top');
        }
    });
});


