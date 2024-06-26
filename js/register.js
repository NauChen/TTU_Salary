
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
            theseRemoveClass(['thisRequired'], ['creationDate', 'uniformNum', 'companyProof']);
            removeDangerMessage('creationDate');
            removeDangerMessage('uniformNum');
            $('#companyProofBox').addClass('d-none');
        } else {
            $creationDate.prop('disabled', false);
            $uniformNum.prop('placeholder', "").prop('disabled', false);
            $creationDate.attr('asp-for', 'CreationDate');
            $creationDateYet.removeAttr('asp-for');
            theseAddClass(['thisRequired'], ['creationDate', 'uniformNum', 'companyProof']);
            $('#companyProofBox').removeClass('d-none');
        }
    });

    // ※※※ 通訊地址同上勾選時，切換 通訊地址輸入框※※※
    var $creationAdd = $("#companyAdd");
    var $creationLocalAdd = $("#locationOfCompany");
    var $sameAdd = $('#sameAdd');

    // ※※※ 檢查初始 ※※※
    $creationAdd.on('input', function () {
        checkSameAddStatus();
    });

    // ※※※ 同上勾選變化 ※※※
    $sameAdd.change(function () {
        if ($sameAdd.is(":checked")) {
            $creationLocalAdd.val($creationAdd.val());
            $('#danger_locationOfCompany').text('');
        }
    });

    // ※※※ 通訊地址輸入框異動時，同上不勾選 ※※※
    $creationLocalAdd.change(function () {
        $sameAdd.prop('checked', false);
        checkSameAddStatus();
    });

    // 限定函式 - 同上勾選狀態變更
    function checkSameAddStatus() {
        if ($creationAdd.val().trim() === '') {
            $sameAdd.prop('checked', false);
            $sameAdd.prop('disabled', true);
        } else {
            $sameAdd.prop('disabled', false);
        }
    }
});

// 限定函式 - 檢查Email
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



$(function () {
    // 載入完畢後，執行一次檢查email
    checkTheEmail();

    // 當 #companyEmail 失去焦點時，再次執行檢查
    $('#companyEmail').on('blur', function () {
        checkTheEmail();
    });
    // 當 .thisRequired 更改時，再次執行檢查
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
            $('#myForm').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning(' 請填上正確資料唷！', 'top');
        }
    });
});






// ================必傳通知
// function checkUpload() {
//     var inputItem = $(this); // 當前失去焦點的 input 元素
//     var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
//     var fileName = $("." + inputId).text(); // 獲取與 input 元素相關聯的 div 的文本內容
//     var warningBox = $("#errorBox");
//     if (inputItem.val().trim() === '') {
//         // warningBox.text(fileName + " 是必需上傳的資料，請點擊檔案唷！").addClass("show");
//         swalToastWarning(fileName + " 是必需上傳的資料，請點擊檔案唷！", 'top');
//         // } else {
//         //     warningBox.text("").removeClass("show");
//     }
// }
// ================頁檢查
// function checkRequiredGroup(groupClass, nextBtn) {
//     var allFilled = true;
//     var submitButton = $(".registerSubmit");
//     var nextButton = $("." + nextBtn);

//     $("." + groupClass).each(function () {
//         if ($(this).val().trim() === '') {
//             allFilled = false;
//             return false;
//         }
//     });

//     if (allFilled) {
//         submitButton.prop("disabled", false);
//         nextButton.prop("disabled", false);
//     } else {
//         submitButton.prop("disabled", true);
//         nextButton.prop("disabled", true);
//     }
// }
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