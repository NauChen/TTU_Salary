"use strict";

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
  // $('#danger_' + id).text('&#10551;此為必須上傳的檔案！');
  $('#danger_' + id).html('&#10551;此為必須上傳的檔案！');
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