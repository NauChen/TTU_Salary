"use strict";

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
      if ($(this).is('select')) {
        // 如果是 <select> 元素
        // console.log($(this).val());
        if ($(this).val() === null) {
          // 檢查選擇的值是否為預設值
          // console.log('請選擇');
          allFilled = false;
          return false; // 退出循環
        }
      } else {
        // 對於其他輸入框（input 和 textarea）
        if ($(this).val().trim() === '') {
          // 檢查值是否為空
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
    if ($(this).is('select')) {
      // 如果是 <select> 元素
      if ($(this).val() === null) {
        // 檢查選擇的值是否為預設值
        allFilled = false;
        return false; // 退出循環
      }
    } else if ($(this).is('input[type="file"]')) {
      // 如果是 <input type="file">
      if ($(this).get(0).files.length === 0) {
        // 檢查是否選擇了文件
        allFilled = false;
        return false; // 退出循環
      }
    } else {
      // 對於其他輸入框（input 和 textarea）
      if ($(this).val().trim() === '') {
        // 檢查值是否為空
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

// 限制僅能輸入 數字 的字符。 禁開頭是0
function restrictToNum(obj) {
  var inputValue = $(obj).val().replace(/\D/g, '');
  if (inputValue.startsWith('0')) {
    inputValue = inputValue.replace(/^0+/, '');
  }
  $(obj).val(inputValue);
}

//增加仟分號
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//刪除仟分號
function unformatNumber(str) {
  return str.replace(/,/g, '');
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
      theseRemoveClass(["choose"], ["dollarsItem", 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem']);
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
  $('.thisPhoneNum').each(function () {
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
  $('.thisEmail').each(function () {
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

// ================燈箱文字 切換輸入 審核區域 
// $(function () {
//     // ================ 文字切換輸入框
//     $('.changeInput_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input').length === 0) {
//             // 建立輸入框
//             var $input = $('<input type="text" class="form-control" />').val(currentText);

//             // 替換當前文本內容為輸入框
//             $this.html($input);

//             // 聚焦並選擇輸入框內的文本
//             $input.focus().select();

//             // 輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();
//                 $this.text(newText);
//             });

//             // 按下 Enter 鍵時也更新文本內容並失去焦點
//             $input.on('keypress', function (e) {
//                 if (e.which === 13) { // Enter 鍵的 keycode 是 13
//                     var newText = $input.val().trim();
//                     $this.text(newText);
//                 }
//             });
//         }
//     });

//     $('.changeRadio_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 檢查是否已經有單選選項，避免重複創建
//         if ($this.find('input[type="radio"]').length === 0) {
//             var radioOptions = `
//                 <div class="form-check form-check-inline">
//                     <input class="form-check-input" type="radio" name="parkingType" id="car" value="汽車" ${currentText === '汽車' ? 'checked' : ''}>
//                     <label class="form-check-label" for="car">汽車</label>
//                 </div>
//                 <div class="form-check form-check-inline">
//                     <input class="form-check-input" type="radio" name="parkingType" id="moto" value="機車" ${currentText === '機車' ? 'checked' : ''}>
//                     <label class="form-check-label" for="moto">機車</label>
//                 </div>`;

//             // 替換當前文本內容為單選選項
//             $this.html(radioOptions);

//             // 當選擇新選項並改變選項時，立即更新文本內容
//             $this.find('input[type="radio"]').on('change', function () {
//                 var newText = $(this).val().trim();
//                 $this.html(newText);
//             });

//             // 點擊外部時更新文本內容
//             $(document).on('click', function (e) {
//                 if (!$this.is(e.target) && $this.has(e.target).length === 0) {
//                     var checkedRadio = $this.find('input[type="radio"]:checked');
//                     if (checkedRadio.length) {
//                         var newText = checkedRadio.val().trim();
//                         $this.html(newText);
//                     }
//                     $(document).off('click'); // 解除事件綁定
//                 }
//             });
//         }
//     });

//     $('.changeDate_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         console.log('currentText:', currentText); // 打印 currentText 以確認是否成功抓取

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input[type="date"]').length === 0) {
//             // 建立日期輸入框
//             var $input = $('<input type="date" class="form-control" />').val(currentText);

//             // 替換當前文本內容為日期輸入框
//             $this.html($input);

//             // 聚焦日期輸入框
//             $input.focus();

//             // 日期輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();

//                 // console.log('newText:', newText);

//                 if (newText) {
//                     $this.text(newText);
//                 } else {
//                     $this.text(currentText);
//                 }
//             });

//             // 按下 Enter 鍵時也更新文本內容並失去焦點
//             $input.on('keypress', function (e) {
//                 if (e.which === 13) { // Enter 鍵的 keycode 是 13
//                     var newText = $input.val().trim();
//                     if (newText) {
//                         $this.text(newText);
//                     } else {
//                         $this.text(currentText);
//                     }
//                     $input.blur();
//                 }
//             });
//         }
//     });

//     $('.changeMoney_items').on('click', function () {
//         var $this = $(this);
//         var currentText = unformatNumber($this.text().trim());

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input').length === 0) {
//             // 建立數字輸入框
//             var $input = $('<input type="text" class="form-control" />').val(currentText);

//             // 替換當前文本內容為輸入框
//             $this.html($input);

//             // 聚焦並選擇輸入框內的文本
//             $input.focus().select();

//             // 限制輸入框只能輸入數字
//             $input.on('input', function () {
//                 this.value = this.value.replace(/[^0-9]/g, '');
//             });

//             // 輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = formatNumber($input.val().trim());
//                 if (newText) {
//                     $this.text(newText);
//                 } else {
//                     $this.text(formatNumber(currentText));
//                 }
//             });

//             // 按下 Enter 鍵時也更新文本內容並失去焦點
//             $input.on('keypress', function (e) {
//                 if (e.which === 13) { // Enter 鍵的 keycode 是 13
//                     var newText = formatNumber($input.val().trim());
//                     if (newText) {
//                         $this.text(newText);
//                     } else {
//                         $this.text(formatNumber(currentText));
//                     }
//                     $input.blur();
//                 }
//             });
//         }
//     });

//     $('.changeTextarea_lg_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.html().replace(/<br\s*[\/]?>/gi, '\n').trim();

//         // 檢查是否已經有textarea，避免重複創建
//         if ($this.find('textarea').length === 0) {
//             // 建立textarea
//             var $textarea = $('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(currentText);

//             // 替換當前文本內容為textarea
//             $this.html($textarea);

//             // 聚焦並選擇textarea內的文本
//             $textarea.focus().select();

//             // textarea失去焦點時更新文本內容
//             $textarea.on('blur', function () {
//                 var newText = $textarea.val().trim().replace(/\n/g, '<br>');
//                 $this.html(newText);
//             });

//             // 按下 Enter 鍵且同時按下 Ctrl 鍵時也更新文本內容並失去焦點
//             $textarea.on('keydown', function (e) {
//                 if (e.key === 'Enter' && e.ctrlKey) {
//                     var newText = $textarea.val().trim().replace(/\n/g, '<br>');
//                     $this.html(newText);
//                     $textarea.blur();
//                 }
//             });
//         }
//     });

//     $('.changeNumber_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input').length === 0) {
//             // 建立數字輸入框
//             var $input = $('<input type="text" class="form-control" />').val(currentText);

//             // 替換當前文本內容為輸入框
//             $this.html($input);

//             // 聚焦並選擇輸入框內的文本
//             $input.focus().select();

//             // 限制輸入框只能輸入數字
//             $input.on('input', function () {
//                 this.value = this.value.replace(/[^0-9]/g, '');
//             });

//             // 輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();
//                 $this.text(newText);
//             });

//             // 按下 Enter 鍵時也更新文本內容並失去焦點
//             // $input.on('keypress', function (e) {
//             //     if (e.which === 13) { // Enter 鍵的 keycode 是 13
//             //         var newText = formatNumber($input.val().trim());
//             //         if (newText) {
//             //             $this.text(newText);
//             //         } else {
//             //             $this.text(formatNumber(currentText));
//             //         }
//             //         $input.blur();
//             //     }
//             // });
//         }
//     });

//     $('.changePhone_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input').length === 0) {
//             // 建立輸入框
//             var $input = $('<input type="text" class="form-control" onkeyup="verifyPhone(this)">').val(currentText);

//             // 替換當前文本內容為輸入框
//             $this.html($input);

//             // 聚焦並選擇輸入框內的文本
//             $input.focus().select();

//             // 輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();
//                 if (validatePhone(newText)) {
//                     $this.text(newText);
//                 } else {
//                     $this.text(currentText); // 恢復原始文本
//                     // alert('電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX');
//                     swalToastWarning('電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX', 'top');
//                 }
//             });

//             // 限制輸入格式
//             $input.on('input', function () {
//                 var val = $input.val();
//                 $input.val(val.replace(/[^0-9-]/g, '')); // 只允許輸入數字和 '-'
//             });
//         }
//     });

//     $('.changeEmail_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 檢查是否已經有輸入框，避免重複創建
//         if ($this.find('input').length === 0) {
//             // 建立輸入框
//             var $input = $('<input type="email" class="form-control" onkeyup="verifyEmail(this)">').val(currentText);

//             // 替換當前文本內容為輸入框
//             $this.html($input);

//             // 聚焦並選擇輸入框內的文本
//             $input.focus().select();

//             // 輸入框失去焦點時更新文本內容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();
//                 newText = convertEmail(newText); // 轉換大寫字母為小寫

//                 if (validateEmail(newText)) {
//                     $this.text(newText);
//                 } else {
//                     $this.text(currentText); // 恢復原始文本
//                     // alert('請輸入有效的電子郵件地址！');
//                     swalToastWarning('請輸入有效的電子郵件地址！', 'top');
//                 }
//             });
//         }
//     });

//     $('.changeLineID_items').on('click', function () {
//         var $this = $(this);
//         var currentText = $this.text().trim();

//         // 检查是否已经有输入框，避免重复创建
//         if ($this.find('input').length === 0) {
//             var $input = $('<input type="text" class="form-control" onkeyup="verifyEmail(this)">').val(currentText);
//             $this.html($input);
//             $input.focus().select();

//             // 失去焦點時更新文本内容
//             $input.on('blur', function () {
//                 var newText = $input.val().trim();
//                 if (isValidLineID(newText)) {
//                     $this.text(newText);
//                 } else {
//                     $this.text(currentText); // 恢复原始文本
//                     // alert('請輸入有效的LINE ID！');
//                     swalToastWarning('請輸入有效的LINE ID！', 'top');
//                 }
//             });
//         }
//     });
// });

// ================燈箱文字 切換輸入 審核區域 

var CustomInputHandlers = {
  init: function init() {
    this.bindChangeInputItems();
    this.bindChangeRadioItems();
    this.bindChangeDateItems();
    this.bindChangeMoneyItems();
    this.bindChangeTextareaItems();
    this.bindChangeNumberItems();
    this.bindChangePhoneItems();
    this.bindChangeEmailItems();
    this.bindChangeLineIDItems();
    this.bindChangeSelectItems();
    this.bindChangeRadioApplyItems();
  },
  bindChangeInputItems: function bindChangeInputItems() {
    $('.changeInput_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input').length === 0) {
        var $input = $('<input type="text" class="form-control" />').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('blur', function () {
          var newText = $input.val().trim();
          $this.text(newText);
        });
        $input.on('keypress', function (e) {
          if (e.which === 13) {
            var newText = $input.val().trim();
            $this.text(newText);
          }
        });
      }
    });
  },
  bindChangeRadioItems: function bindChangeRadioItems() {
    $('.changeRadio_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input[type="radio"]').length === 0) {
        var radioOptions = "\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"parkingType\" id=\"car\" value=\"\u6C7D\u8ECA\" ".concat(currentText === '汽車' ? 'checked' : '', ">\n                        <label class=\"form-check-label\" for=\"car\">\u6C7D\u8ECA</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"parkingType\" id=\"moto\" value=\"\u6A5F\u8ECA\" ").concat(currentText === '機車' ? 'checked' : '', ">\n                        <label class=\"form-check-label\" for=\"moto\">\u6A5F\u8ECA</label>\n                    </div>");
        $this.html(radioOptions);
        $this.find('input[type="radio"]').on('change', function () {
          var newText = $(this).val().trim();
          $this.html(newText);
        });
        $(document).on('click', function (e) {
          if (!$this.is(e.target) && $this.has(e.target).length === 0) {
            var checkedRadio = $this.find('input[type="radio"]:checked');
            if (checkedRadio.length) {
              var newText = checkedRadio.val().trim();
              $this.html(newText);
            }
            $(document).off('click');
          }
        });
      }
    });
  },
  bindChangeRadioApplyItems: function bindChangeRadioApplyItems() {
    $('.changeRadioApply_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input[type="radio"]').length === 0) {
        var radioOptions = "\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"applyType\" id=\"radioYes\" value=\"\u7533\u8ACB\" ".concat(currentText === '申請' ? 'checked' : '', ">\n                        <label class=\"form-check-label\" for=\"radioYes\">\u7533\u8ACB</label>\n                    </div>\n                    <div class=\"form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"applyType\" id=\"radioNo\" value=\"\u4E0D\u7533\u8ACB\" ").concat(currentText === '不申請' ? 'checked' : '', ">\n                        <label class=\"form-check-label\" for=\"radioNo\">\u4E0D\u7533\u8ACB</label>\n                    </div>");
        $this.html(radioOptions);
        $this.find('input[type="radio"]').on('change', function () {
          var newText = $(this).val().trim();
          $this.html(newText);
        });
        $(document).on('click', function (e) {
          if (!$this.is(e.target) && $this.has(e.target).length === 0) {
            var checkedRadio = $this.find('input[type="radio"]:checked');
            if (checkedRadio.length) {
              var newText = checkedRadio.val().trim();
              $this.html(newText);
            }
            $(document).off('click');
          }
        });
      }
    });
  },
  bindChangeDateItems: function bindChangeDateItems() {
    $('.changeDate_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input[type="date"]').length === 0) {
        var $input = $('<input type="date" class="form-control" />').val(currentText);
        $this.html($input);
        $input.focus();
        $input.on('blur', function () {
          var newText = $input.val().trim();
          if (newText) {
            $this.text(newText);
          } else {
            $this.text(currentText);
          }
        });
        $input.on('keypress', function (e) {
          if (e.which === 13) {
            var newText = $input.val().trim();
            if (newText) {
              $this.text(newText);
            } else {
              $this.text(currentText);
            }
            $input.blur();
          }
        });
      }
    });
  },
  bindChangeMoneyItems: function bindChangeMoneyItems() {
    $('.changeMoney_items').on('click', function () {
      var $this = $(this);
      var currentText = unformatNumber($this.text().trim());
      if ($this.find('input').length === 0) {
        var $input = $('<input type="text" class="form-control" />').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('input', function () {
          this.value = this.value.replace(/[^0-9]/g, '');
        });
        $input.on('blur', function () {
          var newText = formatNumber($input.val().trim());
          if (newText) {
            $this.text(newText);
          } else {
            $this.text(formatNumber(currentText));
          }
        });
        $input.on('keypress', function (e) {
          if (e.which === 13) {
            var newText = formatNumber($input.val().trim());
            if (newText) {
              $this.text(newText);
            } else {
              $this.text(formatNumber(currentText));
            }
            $input.blur();
          }
        });
      }
    });
  },
  bindChangeTextareaItems: function bindChangeTextareaItems() {
    $('.changeTextarea_lg_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.html().replace(/<br\s*[\/]?>/gi, '\n').trim();
      if ($this.find('textarea').length === 0) {
        var $textarea = $('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(currentText);
        $this.html($textarea);
        $textarea.focus().select();
        $textarea.on('blur', function () {
          var newText = $textarea.val().trim().replace(/\n/g, '<br>');
          $this.html(newText);
        });
        $textarea.on('keydown', function (e) {
          if (e.key === 'Enter' && e.ctrlKey) {
            var newText = $textarea.val().trim().replace(/\n/g, '<br>');
            $this.html(newText);
            $textarea.blur();
          }
        });
      }
    });
  },
  bindChangeNumberItems: function bindChangeNumberItems() {
    $('.changeNumber_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input').length === 0) {
        var $input = $('<input type="text" class="form-control" />').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('input', function () {
          this.value = this.value.replace(/[^0-9]/g, '');
        });
        $input.on('blur', function () {
          var newText = $input.val().trim();
          $this.text(newText);
        });
      }
    });
  },
  bindChangePhoneItems: function bindChangePhoneItems() {
    $('.changePhone_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input').length === 0) {
        var $input = $('<input type="text" class="form-control" onkeyup="verifyPhone(this)">').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('blur', function () {
          var newText = $input.val().trim();
          if (validatePhone(newText)) {
            $this.text(newText);
          } else {
            $this.text(currentText);
            swalToastWarning('電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX', 'top');
          }
        });

        // $input.on('input', function () {
        //     var val = $input.val();
        //     $input.val(val.replace(/[^0-9-]/g, ''));
        // });
      }
    });
  },
  bindChangeEmailItems: function bindChangeEmailItems() {
    $('.changeEmail_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input').length === 0) {
        var $input = $('<input type="email" class="form-control" onkeyup="verifyEmail(this)">').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('blur', function () {
          var newText = $input.val().trim();
          newText = CconvertEmail(newText);
          if (validateEmail(newText)) {
            $this.text(newText);
          } else {
            $this.text(currentText);
            swalToastWarning('請輸入有效的電子郵件地址！', 'top');
          }
        });
      }
    });
  },
  bindChangeLineIDItems: function bindChangeLineIDItems() {
    $('.changeLineID_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('input').length === 0) {
        var $input = $('<input type="text" class="form-control" onkeyup="verifyEmail(this)">').val(currentText);
        $this.html($input);
        $input.focus().select();
        $input.on('blur', function () {
          var newText = $input.val().trim();
          if (isValidLineID(newText)) {
            $this.text(newText);
          } else {
            $this.text(currentText);
            swalToastWarning('請輸入有效的LINE ID！', 'top');
          }
        });
      }
    });
  },
  bindChangeSelectItems: function bindChangeSelectItems() {
    $('.changeSelect_items').on('click', function () {
      var $this = $(this);
      var currentText = $this.text().trim();
      if ($this.find('select').length === 0) {
        var selectOptions = "\n                    <select class=\"form-control form-select\">\n                    </select>";
        var $select = $(selectOptions);

        // var selectOption = [
        //     { 'optigroup': '新德惠大樓', 'option': 'B1-01' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B1-05' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B3-01' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B3-10' },
        //     { 'optigroup': '新德惠大樓', 'option': 'B2-05' },
        //     { 'optigroup': '青創大樓', 'option': 'B4-01' },
        // ];

        var groupedOptions = {};
        selectOption.forEach(function (item) {
          if (!groupedOptions[item.optigroup]) {
            groupedOptions[item.optigroup] = [];
          }
          groupedOptions[item.optigroup].push(item.option);
        });
        for (var group in groupedOptions) {
          var optgroup = $('<optgroup>').attr('label', group);
          groupedOptions[group].forEach(function (option) {
            var optionElement = $('<option>').attr('value', option).text(option);
            if (option === currentText) {
              optionElement.attr('selected', 'selected');
            }
            optgroup.append(optionElement);
          });
          $select.append(optgroup);
        }
        $this.html($select);
        $select.focus();
        $select.on('change', function () {
          var newText = $select.val();
          $this.html(newText);
        });
        $(document).on('click.select', function (e) {
          if (!$this.is(e.target) && $this.has(e.target).length === 0) {
            var newText = $select.val();
            $this.html(newText ? newText : currentText);
            $(document).off('click.select');
          }
        });
      }
    });
  }
};