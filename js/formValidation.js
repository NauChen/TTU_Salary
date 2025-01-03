// ================檢查整頁 .thisRequired 是否必填，沒有則加上錯誤訊息並回傳false
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
                        if (inputType === 'date') {
                            addDangerRequiredDateMessage($(this).attr('id'));
                        } else {
                            addDangerRequiredMessage($(this).attr('id'));
                        }
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
                        // 檢查是否為電子郵件類型，若是則再次驗證格式
                        if ($(this).hasClass('thisEmail')) {
                            var emailId = $(this).attr('id');
                            if (!validateEmail(value)) {
                                addDangerEmailMessage(emailId);
                                allFilled = false; // 如果格式不正確，設置 allFilled 為 false
                            } else {
                                $('#danger_' + emailId).text(''); // 清除錯誤訊息
                            }
                        }
                    }
                }
                break;
            case 'select':
                value = $(this).val() ? $(this).val().trim() : '';
                if (value === '') {
                    allFilled = false;
                    addDangerRequiredSelectMessage($(this).attr('id'));
                } else {
                    removeDangerMessage($(this).attr('id'));
                }
                break;
            case 'textarea':
                value = $(this).val() ? $(this).val().trim() : '';
                if (value === '') {
                    allFilled = false;
                    addDangerRequiredMessage($(this).attr('id'));
                } else {
                    removeDangerMessage($(this).attr('id'));
                }
                break;
            // value = $(this).val().trim();
            // if (value === '') {
            //     allFilled = false;
            //     addDangerRequiredMessage($(this).attr('id'));
            // } else {
            //     removeDangerMessage($(this).attr('id'));
            // }
            // break;
            default:
                break;
        }
    });

    return allFilled;
}
// ================檢查當下 .thisRequired 是否必填，沒有則加上錯誤訊息並回傳false
function checkThisRequiredElements() {
    var id = $(this).attr('id');
    var elementType = $(this).prop('tagName').toLowerCase();
    var value = '';
    var allFilled = true;

    switch (elementType) {
        case 'input':
            var inputType = $(this).attr('type').toLowerCase();
            if (inputType === 'checkbox' || inputType === 'radio') {
                if (!$(this).is(':checked')) {
                    allFilled = false;
                    addDangerRequiredMessage(id);
                } else {
                    removeDangerMessage(id);
                }
            } else if (inputType === 'file') {
                if ($(this).get(0).files.length === 0) {
                    allFilled = false;
                    addDangerRequiredFilesMessage(id);
                } else {
                    removeDangerMessage(id);
                }
            } else {
                value = $(this).val().trim();
                if (value === '') {
                    allFilled = false;
                    if (inputType === 'date') {
                        addDangerRequiredDateMessage(id);
                    } else {
                        addDangerRequiredMessage(id);
                    }
                } else {
                    removeDangerMessage(id);
                    // 檢查是否為電話號碼類型，若是則再次驗證格式
                    if ($(this).hasClass('thisPhone')) {
                        if (!validatePhone(value)) {
                            addDangerPhoneMessage(id);
                            allFilled = false; // 如果格式不正確，設置 allFilled 為 false
                        } else {
                            $('#danger_' + id).text(''); // 清除錯誤訊息
                        }
                    }
                    // 檢查是否為電子郵件類型，若是則再次驗證格式
                    if ($(this).hasClass('thisEmail')) {
                        if (!validateEmail(value)) {
                            addDangerEmailMessage(id);
                            allFilled = false; // 如果格式不正確，設置 allFilled 為 false
                        } else {
                            $('#danger_' + id).text(''); // 清除錯誤訊息
                        }
                    }
                }
            }
            break;
        case 'select':
            value = $(this).val() ? $(this).val().trim() : '';
            if (value === '') {
                allFilled = false;
                addDangerRequiredSelectMessage(id);
            } else {
                removeDangerMessage(id);
            }
            break;
        case 'textarea':
            value = $(this).val() ? $(this).val().trim() : '';
            if (value === '') {
                allFilled = false;
                addDangerRequiredMessage(id);
            } else {
                removeDangerMessage(id);
            }
            break;
        default:
            break;
    }

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

// ================檢查 .thisEmail 是否符合格式，沒有則加上錯誤訊息並回傳 false
function checkEmails() {
    var allValid = true;

    $('.thisEmail').each(function () {
        var emailValue = $(this).val().trim();
        var inputId = $(this).attr('id');

        if (emailValue === '') {
            // 當值為空，跳過檢查並繼續檢查下一個
            $('#danger_' + inputId).text('');
            return true;
        }

        if (!validateEmail(emailValue)) {
            addDangerEmailMessage(inputId);
            allValid = false;
        } else {
            $('#danger_' + inputId).text('');
        }
    });

    return allValid;
}

// ================檢查 指定checkbox 是否至少選一個，沒有則加上錯誤訊息並回傳 false
function checkAtLeastOneChecked(checkboxIds, errorMessageElementId) {
    var atLeastOneChecked = false;
    checkboxIds.forEach(function (checkboxId) {
        if ($('#' + checkboxId).is(':checked')) {
            atLeastOneChecked = true;
        }
        $('#' + checkboxId).off('change').on('change', function () {
            checkAtLeastOneChecked(checkboxIds, errorMessageElementId);
        });
    });
    if (!atLeastOneChecked) {
        addDangerChooseAtLeastOneMessage(errorMessageElementId);
        return false;
    } else {
        $('#danger_' + errorMessageElementId).html('');
        return true;
    }
}

//// ================檢查.thisPassword是否符合格式，沒有則加上錯誤訊息並回傳false
// function checkPasswords() {
//     var allValid = true;

//     $('.thisPassword').each(function () {
//         var passwordValue = $(this).val().trim();
//         var inputId = $(this).attr('id');

//         if (passwordValue === '') {
//             // 當值為空，跳過檢查並繼續檢查下一個
//             $('#danger_' + inputId).text('');
//             return true;
//         }

//         if (!validatePassword(passwordValue)) {
//             addDangerPasswordMessage(inputId);
//             allValid = false;
//         } else {
//             $('#danger_' + inputId).text('');
//         }
//     });

//     return allValid;
// }
// ================檢查.thisPassword是否符合格式，沒有則加上錯誤訊息並回傳false*
function checkPasswords() {
    let allValid = true;

    $('.thisPassword').each(function () {
        const passwordValue = $(this).val().trim();
        const inputId = $(this).attr('id');

        if (passwordValue === '') {
            // 若為空，清除錯誤訊息，並跳過
            $('#danger_' + inputId).text('');
            return true;
        }

        if (!validatePassword(passwordValue) && $('#danger_' + inputId).text() === '') {
            addDangerPasswordMessage(inputId);
            allValid = false;
        } else {
            $('#danger_' + inputId).text('');
        }
    });

    return allValid;
}

// ==========================??????
// 動態驗證密碼格式*
function validatePasswordDynamic(password) {
    // 條件
    const hasUpperCase = /[A-Z]/.test(password); // 大寫英文
    const hasLowerCase = /[a-z]/.test(password); // 小寫英文
    const hasNumber = /[0-9]/.test(password);   // 數字
    const isValidLength = password.length >= 8 && password.length <= 20; // 長度 8~20 碼
    const noConsecutiveNumbers = !/(?:012|123|234|345|456|567|678|789|890)/.test(password); // 無連續數字
    const noConsecutiveLetters = !/(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password); // 無連續字母

    // 更新 UI
    updateBadge('#uppercaseBadge', hasUpperCase);
    updateBadge('#lowercaseBadge', hasLowerCase);
    updateBadge('#numberBadge', hasNumber);
    updateBadge('#lengthBadge', isValidLength);
    updateBadge('#noConsecutiveNumbersBadge', noConsecutiveNumbers);
    updateBadge('#noConsecutiveLettersBadge', noConsecutiveLetters);
}

// 更新 badge 的 class
function updateBadge(selector, isValid) {
    $(selector).removeClass('bg-secondary bg-primary').addClass(isValid ? 'bg-primary' : 'bg-secondary');
}
// ==========================?????







// 添加 此為必填欄位 的警告訊息
function addDangerRequiredMessage(id) {
    $('#danger_' + id).text('此為必填欄位！');
}
// 添加 此為必選日期欄位 的警告訊息
function addDangerRequiredDateMessage(id) {
    $('#danger_' + id).text('此為必選日期欄位！');
}

// 添加 此為必選欄位 的警告訊息
function addDangerRequiredSelectMessage(id) {
    $('#danger_' + id).text('此為必選欄位！');
}

// 添加 ⤷此為必須上傳的檔案 的警告訊息
function addDangerRequiredFilesMessage(id) {
    $('#danger_' + id).html('&#10551;此為必須上傳的檔案！');
}

// 添加 至少選擇一項 的警告訊息
function addDangerChooseAtLeastOneMessage(id) {
    $('#danger_' + id).html('請至少選擇一項！');
}

// 添加 電話格式 的警告訊息
function addDangerPhoneMessage(id) {
    $('#danger_' + id).text('格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
}

// 添加 Email格式 的警告訊息
function addDangerEmailMessage(id) {
    $('#danger_' + id).text('請輸入有效的電子郵件地址！');
}

// // 添加 密碼格式 的警告訊息
// function addDangerPasswordMessage(id) {
//     // $('#danger_' + id).text('請依正確的格式輸入：至少8個字元、內含大寫英文、小寫英文、半形符號、不連續或重複字元(如zz或是678)');
//     $('#danger_' + id).text('請依正確的格式輸入：至少8個字元、內含大寫英文、小寫英文、數字、不連續字元(如zz或是678)');
// }
function addDangerPasswordMessage(id) {
    const message = `請使用半形英文、數字、符號輸入，並達成下列必備條件。`;
    $('#danger_' + id).html(message.replace(/\n/g, '<br>'));
}

// 刪除警告訊息
function removeDangerMessage(id) {
    $('#danger_' + id).text('');
}

// 驗證電話格式的函數
function validatePhone(phone) {
    var phoneRegex = /^\d{2,4}-\d{6,8}$/;
    return phoneRegex.test(phone);
}
// 驗證E-mail格式的函數
function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
// 驗證Line ID格式的函數
function validLineID(lineID) {
    // 允许的字符為半形英数字、(.)、(-)、(_)和@
    var validChars = /^[a-zA-Z0-9.@_-]+$/;
    return validChars.test(lineID);
}

// 驗證密碼格式是否正確*
function validatePassword(password) {
    // 檢查是否至少8個字元
    if (password.length < 8) return false;

    // 檢查是否包含至少一個大寫字母、小寫字母、數字以及符號
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /[0-9]/.test(password);
    // var hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // 檢查是否有重複字元，例如：aaa
    // var hasConsecutive = /(.)\1{2,}/.test(password); // 重複字元

    // 檢查是否有連續的數字或字母，不管幾個字母或數字連續都不行
    var hasSequentialNumbers = /(?:012|123|234|345|456|567|678|789|890)/.test(password); // 連續數字
    var hasSequentialLetters = /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/i.test(password); // 連續字母

    // return hasUpperCase && hasLowerCase && hasNumber && !hasConsecutive && !hasSequentialNumbers && !hasSequentialLetters;
    return hasUpperCase && hasLowerCase && hasNumber && !hasSequentialNumbers && !hasSequentialLetters;
}

// ※※ onblur函式 - 輸入完畢後用 ※※
//   添加警告訊息，調用函式-驗證電話格式
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
//   添加警告訊息，調用函式-驗證E-mail格式
function checkThisEmail() {
    var emailValue = $(this).val().trim();
    var emailId = $(this).attr('id');
    var warningBox = $('#danger_' + emailId);

    if (emailValue === '') {
        if (warningBox.text() != '此為必填欄位！') {
            warningBox.text('');
        }
    } else if (!validateEmail(emailValue)) {
        warningBox.text('請輸入有效的電子郵件地址');
    } else {
        warningBox.text('');
    }
}



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