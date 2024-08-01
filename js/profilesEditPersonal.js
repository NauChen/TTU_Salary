var dataset_userPersonalList = [
    {
        'id': '21',
        'createDate': "2024-04-25",
        'name': "王小明",
        'userId': "abc@gmail.com",
        'type': "個人",
        'editBy': "-",
        'adminNote': '2024-07-31到職',
    },
    {
        'id': '23',
        'createDate': "2012-03-29",
        'name': "孫小美",
        'userId': "efg@gmail.com",
        'type': "神秘客",
        'status': "停用",
        'editBy': "-",
        'adminNote': '2011-07-31到職',
    },
];

$(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = String(urlParams.get('id'));

    // 確保 userId 存在
    if (userId) {
        // console.log('User ID:', userId);
        $('#checkEmail').attr('disabled', true);
        $('#checkEmailResult').text('可以使用。');

        let userPersonalData = dataset_userPersonalList.find(userPersonal => userPersonal.id === userId);
        if (userPersonalData) {
            $('#profilesPersonal_Name').val(userPersonalData.name);
            $('#profilesPersonal_Email').val(userPersonalData.userId);
            $('#profilesPersonal_AdminNote').val(userPersonalData.adminNote);
        }
        // 載入完畢後，執行一次檢查email
        checkRegisterEmail();

        // 當 #companyEmail 失去焦點時，再次執行檢查
        $('#profilesPersonal_Email').on('blur', function () {
            checkRegisterEmail();
        });


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
        $('.thisRequired').on('input change', function () {
            checkThisRequiredElements.call(this);
        });



        // 點擊 submitBtn 按鈕時
        $('#submitBtn').click(function (event) {
            event.preventDefault(); // 防止表單預設提交行為

            // 先檢查必填項
            if (!checkRequiredElements()) {
                return; // 如果必填項有未填寫的，直接返回，不再繼續
            }
            if ($('#checkEmailResult') != '可以使用。') {
                swalToastWarning(' 請填上可以使用的電子郵件信箱！', 'top');
            }

            // 最後檢查 danger_ 開頭元素的文字內容
            if (checkDangerElements()) {
                // 如果返回 true，送出表單資料
                $('#formPersonalEdit').submit(); // 提交表單
                console.log('表單資料已送出');
            } else {
                // 如果返回 false，顯示警告訊息
                swalToastWarning(' 請填上正確資料唷！', 'top');
            }
        });


    } else {
        console.error('User ID not found in URL');
    }

    // 限定函式 - 檢查Email
    function checkRegisterEmail() {
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
        var checkResult = $("#checkEmailResult");
        var nextButton = $("#submitBtn");
        var checkEmailValue = $('#profilesPersonal_Email').val();
        switch (checkEmailValue) {
            case "":
                checkResult.text("-");
                nextButton.prop("disabled", true);
                break;
            case userPersonalData.userId: //沒有相同
                checkResult.text("可以使用。");
                nextButton.prop("disabled", false);
                break;
            case 'a@gmail.com':
                checkResult.text("不能使用。");
                nextButton.prop("disabled", true);
                break;
            default:
                checkResult.text("Email格式不正確。");
                nextButton.prop("disabled", true);
                break;
        }
    }

});