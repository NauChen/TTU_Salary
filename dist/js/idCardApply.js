"use strict";

// document.write('<script type="text/javascript" src="./js/formComm.js"></script>');
// document.write('<script type="text/javascript" src="./js/formPreview.js"></script>');

// $(function () {

//     // $.getScript('./js/formComm.js', function () {
//     //     // formComm.js 加載完成後的回調函數
//     //     $.getScript('./js/formPreview.js', function () {
//     //         // formPreview.js 加載完成後的回調函數

//     var allFilled = true;

//     console.log('start allFilled ： ' + allFilled);
//     //同步輸入框跟預覽td
//     syncInputValue('idCardName', 'idCardName_td');
//     syncInputValue('idCardJobName', 'idCardJobName_td');
//     syncInputValue('idCardPhone', 'idCardPhone_td');
//     syncInputValue('idCardEmail', 'idCardEmail_td');
//     syncInputDate('idCard_Period1', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D');
//     syncInputDate('idCard_Period2', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D');
//     syncSelectValue('idCardCultRoom', 'idCardCultRoom_Building', 'idCardCultRoom_Room');
//     syncInputValue('idCardEmergContact', 'ICE_Person');
//     syncInputValue('idCardECPhone', 'ICE_Phone');

//     // console.log('同步輸入框 allFilled ： ' + allFilled);

//     // 驗證電話
//     $('.checkPhone').on('blur input', checkThisPhone);

//     console.log('驗證電話 allFilled ： ' + allFilled);

//     //限制截止日期不可小於開始日期。function來自formComm.js
//     restrictEndDate('idCard_Period1', 'idCard_Period2');

//     console.log('限制截止日期 allFilled ： ' + allFilled);

//     //圖書館閱覽申請切換
//     $('input[name="libraryRead"]').on('change', function () {
//         if ($('#wantReadLibrary').is(':checked')) {
//             theseAddClass(["d-none"], ['wantNo', 'dontWantYes']);
//             theseRemoveClass(["d-none"], ['wantYes', 'dontWantNo']);
//         } else if ($('#dontWantReadLibrary').is(':checked')) {
//             theseAddClass(["d-none"], ['wantYes', 'dontWantNo']);
//             theseRemoveClass(["d-none"], ['wantNo', 'dontWantYes']);
//         }
//     });

//     console.log('圖書館申請切換 allFilled ： ' + allFilled);

//     $('#confirm_idCardApp').on('click', function (event) {
//         // 表單預覽-全部必填-檢驗。function來自formComm.js
//         validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');
//         // console.log('全部必填檢驗 allFilled ： ' + allFilled);

//         // 有錯誤訊息就不開燈箱。function來自formComm.js
//         // checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');

//         // console.log('錯誤訊息檢驗 allFilled ： ' + allFilled);

//         if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {

//             // console.log('沒有燈箱屬性 allFilled ： ' + allFilled);

//             // event.preventDefault();
//             // console.log('停止預設 allFilled ： ' + allFilled);

//             swalToastWarning('請依指定格式填上所有欄位，並上傳清晰證件照。', 'top');
//             // console.log('通知 allFilled ： ' + allFilled);

//             // $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//         }
//     });
//     // });
//     // });
// });

// $(function () {
//     // 同步輸入框和預覽td
//     syncInputValue('idCardName', 'idCardName_td');
//     syncInputValue('idCardJobName', 'idCardJobName_td');
//     syncInputValue('idCardPhone', 'idCardPhone_td');
//     syncInputValue('idCardEmail', 'idCardEmail_td');
//     syncInputDate('idCard_Period1', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D');
//     syncInputDate('idCard_Period2', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D');
//     syncSelectValue('idCardCultRoom', 'idCardCultRoom_Building', 'idCardCultRoom_Room');
//     syncInputValue('idCardEmergContact', 'ICE_Person');
//     syncInputValue('idCardECPhone', 'ICE_Phone');

//     // 限制截止日期不可小於開始日期。function來自formComm.js
//     restrictEndDate('idCard_Period1', 'idCard_Period2');

//     // 驗證電話。function來自formComm.js
//     $('.checkPhone').on('blur input', checkThisPhone);

//     // 圖書館閱覽申請切換
//     $('input[name="libraryRead"]').on('change', function () {
//         if ($('#wantReadLibrary').is(':checked')) {
//             theseAddClass(["d-none"], ['wantNo', 'dontWantYes']);
//             theseRemoveClass(["d-none"], ['wantYes', 'dontWantNo']);
//         } else if ($('#dontWantReadLibrary').is(':checked')) {
//             theseAddClass(["d-none"], ['wantYes', 'dontWantNo']);
//             theseRemoveClass(["d-none"], ['wantNo', 'dontWantYes']);
//         }
//     });

//     $('#confirm_idCardApp').on('click', function (event) {
//         // 表單預覽-全部必填-檢驗。function來自formComm.js
//         validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');
//         // console.log('全部必填檢驗 allFilled ： ' + allFilled);

//         // 有錯誤訊息就不開燈箱。function來自formComm.js
//         // checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');

//         // console.log('錯誤訊息檢驗 allFilled ： ' + allFilled);

//         if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {

//             // console.log('沒有燈箱屬性 allFilled ： ' + allFilled);

//             // event.preventDefault();
//             // console.log('停止預設 allFilled ： ' + allFilled);

//             swalToastWarning('請依指定格式填上所有欄位，並上傳清晰證件照。', 'top');
//             // console.log('通知 allFilled ： ' + allFilled);

//             // $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//         }
//     });

//     // $('#confirm_idCardApp').on('click', function (event) {
//     //     // 表單預覽-全部必填-檢驗。function來自formComm.js
//     //     var allRequiredFilled = validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');

//     //     // 有錯誤訊息就不開燈箱。function來自formComm.js
//     //     // var noDangerMessages = checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');

//     //     // if (!allRequiredFilled || !noDangerMessages) {
//     //     //     event.preventDefault();
//     //     //     swalToastWarning('請依指定格式填上所有欄位，並上傳清晰證件照。', 'top');
//     //     // }
//     // });

//     // var elementIds = ['idCardName_td', 'idCardJobName_td', 'idCardPhone_td', 'idCardEmail_td', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D', 'idCardCultRoom_Building', 'idCardCultRoom_Room', 'ICE_Person', 'ICE_Phone']; // 替換為你的元素ID

//     // $('#confirm_idCardApp').on('click', function () {
//     //     checkElementsAndToggleModal('confirm_idCardApp', 'idCardApp_pdf', elementIds);
//     // });

//     // 表單預覽-全部必填-檢驗
//     // function validAllRequiredFormPreview(confirmButtonId, formId, model_id) {
//     //     var allFilled = true;

//     //     // 遍歷所有帶有 .thisRequired 類別的元素
//     //     $('#' + formId + ' .thisRequired').each(function () {
//     //         if ($(this).is('select')) { // 如果是 <select> 元素
//     //             if ($(this).val() === null) { // 檢查選擇的值是否為預設值
//     //                 allFilled = false;
//     //                 return false; // 退出循環
//     //             }
//     //         } else { // 對於其他輸入框（input 和 textarea）
//     //             if ($(this).val().trim() === '') { // 檢查值是否為空
//     //                 allFilled = false;
//     //                 return false; // 退出循環
//     //             }
//     //         }
//     //     });

//     //     if (!allFilled) {
//     //         swalToastWarning('請將所有欄位填上。', 'top');
//     //         $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//     //     } else {
//     //         $('#' + confirmButtonId).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#' + model_id);
//     //     }
//     //     return allFilled;
//     // }

//     // 有錯誤訊息就不開燈箱
//     // function checkDangerElements(confirmButtonId, model_id) {
//     //     var allFilled = true;
//     //     $('[id^="danger_"]').each(function () {
//     //         if ($(this).text().trim() !== '') {
//     //             allFilled = false;
//     //             return false; // 終止遍歷
//     //         }
//     //     });

//     //     if (!allFilled) {
//     //         $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//     //     }
//     //     return allFilled;
//     // }

//     // 驗證電話格式的函數
//     // function validatePhone(phone) {
//     //     var phoneRegex = /^\d{2,4}-\d{6,8}$/;
//     //     return phoneRegex.test(phone);
//     // }

//     // 驗證當前電話的函數
//     // function checkThisPhone() {
//     //     var inputItem = $(this); // 當前失去焦點的 input 元素
//     //     var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
//     //     var warningBox = $("#danger_" + inputId);
//     //     var phoneValue = inputItem.val(); // 取得 input 元素的值

//     //     if (validatePhone(phoneValue)) {
//     //         warningBox.text("");
//     //     } else {
//     //         warningBox.text('電話/手機 的格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX');
//     //     }
//     // }
// });

// idCardApply.js
$(function () {
  // $.getScript('./js/formComm.js')
  //     .done(function() {
  //         // formComm.js 加載完成後加載 formPreview.js
  //         $.getScript('./js/formPreview.js')
  //             .done(function() {
  // formPreview.js 加載完成後執行主邏輯
  // 同步輸入框跟預覽td
  syncInputValue('idCardName', 'idCardName_td');
  syncInputValue('idCardJobName', 'idCardJobName_td');
  syncInputValue('idCardPhone', 'idCardPhone_td');
  syncInputValue('idCardEmail', 'idCardEmail_td');
  syncInputDate('idCard_Period1', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D');
  syncInputDate('idCard_Period2', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D');
  syncSelectValue('idCardCultRoom', 'idCardCultRoom_Building', 'idCardCultRoom_Room');
  syncInputValue('idCardEmergContact', 'ICE_Person');
  syncInputValue('idCardECPhone', 'ICE_Phone');

  // 圖書館閱覽申請切換
  $('input[name="libraryRead"]').on('change', function () {
    if ($('#wantReadLibrary').is(':checked')) {
      theseAddClass(["d-none"], ['wantNo', 'dontWantYes']);
      theseRemoveClass(["d-none"], ['wantYes', 'dontWantNo']);
    } else if ($('#dontWantReadLibrary').is(':checked')) {
      theseAddClass(["d-none"], ['wantYes', 'dontWantNo']);
      theseRemoveClass(["d-none"], ['wantNo', 'dontWantYes']);
    }
  });
  $('#confirm_idCardApp').on('click', function (event) {
    if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {
      event.preventDefault();
      swalToastWarning('請填上所有欄位，並上傳清晰證件照。', 'top');
    }
  });

  // 驗證電話
  $('.checkPhone').on('blur input', checkThisPhone);

  // 限制截止日期不可小於開始日期
  restrictEndDate('idCard_Period1', 'idCard_Period2');

  // 表單預覽-全部必填-檢驗
  validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');

  // 有錯誤訊息就不開燈箱
  checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');
  //         })
  //         .fail(function() {
  //             console.error('Failed to load formPreview.js');
  //         });
  // })
  // .fail(function() {
  //     console.error('Failed to load formComm.js');
  // });
});
function openFile(event) {
  var input = event.target; //取得上傳檔案
  var reader = new FileReader(); //建立FileReader物件
  // var pic_Text = $('#output_text');

  reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

  reader.onload = function () {
    //FileReader取得上傳檔案後執行以下內容
    var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
    $('#output_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
    $('#output_text').attr('src', dataURL).hide();
    // $('#output_text').attr('src', dataURL).addClass('opa_0');
  };
}

// function openFile2(event) {
//     var input = event.target; //取得上傳檔案
//     var reader = new FileReader(); //建立FileReader物件

//     reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

//     reader.onload = function () { //FileReader取得上傳檔案後執行以下內容
//         var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
//         $('#vehicleRegistratio_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
//     };
// }

// 確認td欄位有沒有填上
function checkElementsAndToggleModal(confirmButtonId, model_id, elementIds) {
  var allFilled = true;
  elementIds.forEach(function (id) {
    var element = $('#' + id);
    if (element.text().trim() === '') {
      allFilled = false;
      return false; // 退出循環
    }
  });
  if (!allFilled) {
    $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
    swalToastWarning('請將所有欄位填上。', 'top');
  } else {
    $('#' + confirmButtonId).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#' + model_id);
  }
}