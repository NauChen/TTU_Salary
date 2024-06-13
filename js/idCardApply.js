document.write('<script type="text/javascript" src="./js/formComm.js"></script>');
document.write('<script type="text/javascript" src="./js/formPreview.js"></script>');

$(function () {
    //同步輸入框跟預覽td
    syncInputValue('idCardName', 'idCardName_td');
    syncInputValue('idCardJobName', 'idCardJobName_td');
    syncInputValue('idCardPhone', 'idCardPhone_td');
    syncInputValue('idCardEmail', 'idCardEmail_td');
    syncInputDate('idCard_Period1', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D');
    syncInputDate('idCard_Period2', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D');
    syncSelectValue('idCardCultRoom', 'idCardCultRoom_Building', 'idCardCultRoom_Room');
    syncInputValue('idCardEmergContact', 'ICE_Person');
    syncInputValue('idCardECPhone', 'ICE_Phone');

    //圖書館閱覽申請切換
    $('input[name="libraryRead"]').on('change', function () {
        if ($('#wantReadLibrary').is(':checked')) {
            theseAddClass(["d-none"], ['wantNo', 'dontWantYes']);
            theseRemoveClass(["d-none"], ['wantYes', 'dontWantNo']);
        } else if ($('#dontWantReadLibrary').is(':checked')) {
            theseAddClass(["d-none"], ['wantYes', 'dontWantNo']);
            theseRemoveClass(["d-none"], ['wantNo', 'dontWantYes']);
        }
    });
    // var allRequiredValid = true;


    $('#confirm_idCardApp').on('click', function (event) {
        if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {
            event.preventDefault();
            // alert("請填上所有欄位，並上傳證件照‧");
            swalToastWarning('請填上所有欄位，並上傳清晰證件照。', 'top');
            $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
        }
    });

    // if (allRequiredValid) {
    //     $('#confirm_idCardApp').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#idCardApp_pdf');
    // };
    // $('.checkPhone').on('input', function () {
    //     var val = $this.val();
    //     $this.val(val.replace(/[^0-9-]/g, '')); // 只允許輸入數字和 '-'
    // });

    // 驗證電話
    $('.checkPhone').on('blur input', checkThisPhone);


    // $(".requiredItem").blur(checkThisRequired);

    //限制截止日期不可小於開始日期。function來自formComm.js
    restrictEndDate('idCard_Period1', 'idCard_Period2');


    validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');

    checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');

    // if (allRequiredValid) {
    //     // 限制確認必填class是否都已有值，才可傳送。function來自formComm.js
    // };

});