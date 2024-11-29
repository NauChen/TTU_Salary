// var userPersonalData =
// //  [
// {
//     'id': '21',
//     'name': "王小明",
//     'email': "abc@gmail.com",
//     'type': "研發處",
//     'status': "啟用",
//     'adminNote': '2024-07-31到職',
// };
// {
//     'id': '23',
//     'name': "孫小美",
//     'email': "efg@gmail.com",
//     'type': "學生",
//     'status': "停用",
//     'adminNote': '2011-07-31到職',
// },
// {
//     'id': '25',
//     'name': "哞小桑",
//     'email': "mo@gmail.com",
//     'type': "神秘客",
//     'status': "啟用",
//     'adminNote': '2011-07-31到職',
// },
// ];

$(function () {
    // const urlParams = new URLSearchParams(window.location.search);
    // const userId = String(urlParams.get('id'));

    // 確保 userId 存在
    // if (userId) {
    // console.log('User ID:', userId);
    // $('#checkEmail').attr('disabled', true);
    // $('#checkEmailResult').text('可以使用。');

    // let userPersonalData = dataset_userPersonalList.find(userPersonal => userPersonal.id === userId);
    // if (userPersonalData) {
    $('#userName').text(userPersonalData.name);
    $('#userEmail').text(userPersonalData.email);

    if (userPersonalData.type === "研發處") {
        $('#userType1').prop('checked', true);
    } else if (userPersonalData.type === "師長") {
        $('#userType2').prop('checked', true);
    } else if (userPersonalData.type === "學生") {
        $('#userType3').prop('checked', true);
    }

    if (userPersonalData.status === "啟用") {
        $('#userStatus1').prop('checked', true);
    } else if (userPersonalData.status === "停用") {
        $('#userStatus2').prop('checked', true);
    } else if (userPersonalData.status === "刪除") {
        $('#userStatus3').prop('checked', true);
    }

    $('#remark').val(userPersonalData.adminNote);
    // }
    // 載入完畢後，執行一次檢查email
    // checkRegisterEmail();

    // 當 #companyEmail 失去焦點時，再次執行檢查
    // $('#profilesPersonal_Email').on('blur', function () {
    //     checkRegisterEmail();
    // });


    // $('#profilesPersonal_Email').on('input change', function () {
    //     if ($('#profilesPersonal_Email').val() != userPersonalData.userId) {
    //         $('#checkEmail').attr('disabled', false);
    //         $('#checkEmailResult').text('-');
    //     } else {
    //         $('#checkEmail').attr('disabled', true);
    //         $('#checkEmailResult').text('可以使用。');
    //     }
    // });

    // 必填異動再次判斷
    // $('.thisRequired').on('input change', function () {
    //     checkThisRequiredElements.call(this);
    // });



    // 點擊 submitBtn 按鈕時
    // $('#submitBtn').click(function (event) {
    //     event.preventDefault(); // 防止表單預設提交行為

    //     //     // // 先檢查必填項
    //     //     // if (!checkRequiredElements()) {
    //     //     //     return; // 如果必填項有未填寫的，直接返回，不再繼續
    //     //     // }
    //     //     // if ($('#checkEmailResult') != '可以使用。') {
    //     //     //     swalToastWarning(' 請填上可以使用的電子郵件信箱！', 'top');
    //     //     // }

    //     //     // 最後檢查 danger_ 開頭元素的文字內容
    //     //     if (checkDangerElements()) {
    //     //         // 如果返回 true，送出表單資料
    //     //         $('#formPersonalEdit').submit(); // 提交表單
    //     //         console.log('表單資料已送出');
    //     //     } else {
    //     //         // 如果返回 false，顯示警告訊息
    //     //         swalToastWarning(' 請填上正確資料唷！', 'top');
    //     //     }
    //     if ($('#userStatus3').prop('checked')) {
    //         swalConfirm('確定要刪除此帳號嗎?', '確定', '取消', $('#formPersonalEdit').submit());
    //     }
    // });
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 檢查是否選擇刪除狀態
        if ($('#userStatus3').prop('checked')) {
            swalConfirm(
                '確定要刪除此帳號嗎?',
                '確定',
                '取消',
                function () {
                    $('#formPersonalEdit').submit(); // 確認後送出表單
                }
            );
        } else {
            $('#formPersonalEdit').submit(); // 非刪除狀態，直接送出表單
        }
    });


    // } else {
    //     console.error('User ID not found in URL');
    // }

    // 限定函式 - 檢查Email
    // function checkRegisterEmail() {
    //     // 接資料庫後改用此。
    //     // var email = $("#companyEmail").val();
    //     // $.ajax({
    //     //     url: '@Url.Action("CheckEmail", "Account")',
    //     //     type: "POST",
    //     //     data: { email: email },
    //     //     success: function (result) {
    //     //         var checkEmail = $("#checkEmailResults");
    //     //         var nextButton = $("#submitBtn");
    //     //         switch (result) {
    //     //             case "NoText":
    //     //                 checkEmail.text("檢查").removeClass("invalid").removeClass("valid");
    //     //                 nextButton.prop("disabled", true);
    //     //                 break;
    //     //             case false: //沒有相同
    //     //                 checkEmail.text("檢查").removeClass("invalid").addClass("valid");
    //     //                 nextButton.prop("disabled", false);
    //     //                 break;
    //     //             case true:
    //     //                 checkEmail.text("此Email已註冊過。").removeClass("valid").addClass("invalid");
    //     //                 nextButton.prop("disabled", true);
    //     //                 break;
    //     //             default:
    //     //                 checkEmail.text("Email格式不正確。").removeClass("valid").addClass("invalid");
    //     //                 nextButton.prop("disabled", true);
    //     //                 break;
    //     //         }
    //     //     },
    //     //     error: function (error) {
    //     //         console.log("發生錯誤！", error.responseText);
    //     //     }
    //     // });
    //     // 未接資料庫暫用此測試。
    //     var checkResult = $("#checkEmailResult");
    //     var nextButton = $("#submitBtn");
    //     var checkEmailValue = $('#profilesPersonal_Email').val();
    //     switch (checkEmailValue) {
    //         case "":
    //             checkResult.text("-");
    //             nextButton.prop("disabled", true);
    //             break;
    //         case userPersonalData.userId: //沒有相同
    //             checkResult.text("可以使用。");
    //             nextButton.prop("disabled", false);
    //             break;
    //         case 'a@gmail.com':
    //             checkResult.text("不能使用。");
    //             nextButton.prop("disabled", true);
    //             break;
    //         default:
    //             checkResult.text("Email格式不正確。");
    //             nextButton.prop("disabled", true);
    //             break;
    //     }
    // }

});