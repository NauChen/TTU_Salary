// var dataset_myIDcardHistory = [
//     {
//         'id': '1',
//         'createDate': '2023-08-30',
//         'place': '新德惠-101',
//         'name': '孫一美',
//         'jobTitle': '工讀生',
//         'library': '未申請',
//         'print': '1',

//         'startDate': '2023-09-10',
//         'endDate': '2023-10-09',
//         'status': '已選停用，請至研發處歸還。',
//         'idCardNum': 'ABC101',

//         'phone': '0912-345678',
//         'email': 'abc#gmail.com',
//         'emergContact': '孫大美',
//         'ECPhone': '0933-456789',
//     },
//     {
//         'id': '2',
//         'createDate': '2023-08-31',
//         'place': '綜合-202',
//         'name': '孫大美',
//         'jobTitle': '專員',
//         'library': '已開放',
//         'print': '-',

//         'startDate': '2023-09-10',
//         'endDate': '2023-10-09',
//         'status': '-',
//         'idCardNum': 'ABC102',
//         'phone': '0933-456789',
//         'email': 'abcd#gmail.com',
//         'emergContact': '孫一美',
//         'ECPhone': '0912-345678',
//     },
//     {
//         'id': '3',
//         'createDate': '2023-09-10',
//         'place': '產學-202',
//         'name': '孫大帥',
//         'jobTitle': '專員',
//         'library': '已開放',
//         'print': '-',

//         'startDate': '2023-10-11',
//         'endDate': '2023-11-30',
//         'status': '-',
//         'idCardNum': 'ABC103',

//         'phone': '0912-345678',
//         'email': 'abc#gmail.com',
//         'emergContact': '孫大美',
//         'ECPhone': '0933-456789',
//     },
//     {
//         'id': '4',
//         'createDate': '2023-09-10',
//         'place': '北設工-202',
//         'name': '孫二帥',
//         'jobTitle': '專員',
//         'library': '已開放',
//         'print': '3',

//         'startDate': '2023-10-11',
//         'endDate': '2023-11-30',
//         'status': '-',
//         'idCardNum': 'ABC104',

//         'phone': '0912-345678',
//         'email': 'abc#gmail.com',
//         'emergContact': '孫大美',
//         'ECPhone': '0933-456789',
//     },
// ];



$(function () {
    // 依照資料生成下拉選單
    populateSelect('idCardCultRoom', selectOptionLocation);

    // 預設本次申請為補發
    $('#typeFirst').prop({
        'checked': false,
        'disabled': true
    });
    $('#typeReissue').prop('checked', true);

    // 抓取要代進的資料
    const urlParams = new URLSearchParams(window.location.search);
    const idCard_Id = String(urlParams.get('id'));
    let sessionData = session_userData;

    // 確保 idCard_Id 存在
    if (idCard_Id) {
        console.log('ID Card ID:', idCard_Id);

        let myIdCardData = dataset_myIDcardHistory.find(idCard => idCard.id === idCard_Id);

        if (myIdCardData) {
            // console.log('My Id Card Data found:', myIdCardData);
            $('#idCardName').val(myIdCardData.name);
            $('#idCardJobTitle').val(myIdCardData.jobTitle);
            $('#idCardPhone').val(myIdCardData.phone);
            $('#idCardEmail').val(myIdCardData.email);
            $('#idCard_Period1').val(myIdCardData.startDate); // 僅代入進駐開始日，因是補發，結束日會是一樣或延長。

            // 將組合地點拆開，function來自formComm.js
            var splitLocation = splitHyphen(myIdCardData.place);
            // 大樓名 轉 培育區 後再組合代入
            var changeChar = changeCultivationRoomToBuilding(splitLocation.part1) + '-' + splitLocation.part2;
            // console.log('changeChar:', changeChar);
            $('#idCardCultRoom').val(changeChar);

            $('#idCardEmergContact').val(myIdCardData.emergContact);
            $('#idCardECPhone').val(myIdCardData.ECPhone);

            if (myIdCardData.library == '已開放') {
                $('#dontWantReadLibrary').prop('checked', false);
                $('#wantReadLibrary').prop('checked', true);
            } else {
                $('#wantReadLibrary').prop('checked', false);
                $('#dontWantReadLibrary').prop('checked', true);
            }
        } else {
            console.error('My Id Card Data not found for id:', idCard_Id);
        }

    } else {
        console.error('ID Card ID not found in URL');
    }


    setMinDateToToday('idCard_Period1');
    // 確保選擇開始日期之前不能選擇結束日期，且截止日期不可小於開始日
    enforceStartDateFirst('idCard_Period1', 'idCard_Period2');

    // 同步session跟燈箱
    $('#idCardCompany_td').text(sessionData.company);
    $('#idCardResponsiblePerson_td').text(sessionData.responsiblePerson);
    $('#idCardCompanyPhone_td').text(sessionData.companyPhone);

    // 同步輸入框跟預覽td
    syncInputValue('idCardName', 'idCardName_td');
    syncInputValue('idCardJobTitle', 'idCardJobTitle_td');
    syncInputValue('idCardPhone', 'idCardPhone_td');
    syncInputValue('idCardEmail', 'idCardEmail_td');
    syncInputDate('idCard_Period1', 'idCard_Period1_Y', 'idCard_Period1_m', 'idCard_Period1_D');
    syncInputDate('idCard_Period2', 'idCard_Period2_Y', 'idCard_Period2_m', 'idCard_Period2_D');
    syncSelectValue('idCardCultRoom', 'idCardCultRoom_Building', 'idCardCultRoom_Room');
    syncInputValue('idCardEmergContact', 'ICE_Person');
    syncInputValue('idCardECPhone', 'ICE_Phone');

    // 圖書館閱覽申請切換
    syncInputRadio('wantReadLibrary', 'dontWantReadLibrary', 'wantYes', 'dontWantYes');
    $('input[name="libraryRead"]').on('change', function () {
        syncInputRadio('wantReadLibrary', 'dontWantReadLibrary', 'wantYes', 'dontWantYes');
    });

    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    $('#confirm_idCardApply').click(function (event) {
        // 先檢查必填項
        if (!checkRequiredElements()) {
            swalToastWarning('請將所有欄位補上唷！', 'top');
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }
        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，開啟燈箱
            $('#idCardApp_pdf').modal('show');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning('請填上正確資料唷！', 'top');
        }
        $('#idCardApp_pdf').modal('show');
    });

    // 點擊 submitBtn 按鈕時
    $('#printAndSubmit').click(function (event) {
        // $('#formIdCardReissue').submit(); // 提交表單
        console.log('表單資料已送出');
        var formData = $('#formIdCardReissue').serializeArray();
        console.log('表單資料：', JSON.stringify(formData, null, 2));
    });























    // $('#confirm_idCardApp').on('click', function (event) {
    //     if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {
    //         event.preventDefault();
    //         swalToastWarning('請填上所有欄位，並上傳清晰證件照。', 'top');
    //     }
    // });

    // 驗證電話
    // $('.checkPhone').on('blur input', checkThisPhone);



    // 表單預覽-全部必填-檢驗
    // validAllRequiredFormPreview('confirm_idCardApp', 'createJobForm', 'idCardApp_pdf');

    // 有錯誤訊息就不開燈箱
    // checkDangerElements('confirm_idCardApp', 'idCardApp_pdf');
    //         })
    //         .fail(function() {
    //             console.error('Failed to load formPreview.js');
    //         });
    // })
    // .fail(function() {
    //     console.error('Failed to load formComm.js');
    // });
});



// function openFile(event) {
//     var input = event.target; //取得上傳檔案
//     var reader = new FileReader(); //建立FileReader物件
//     // var pic_Text = $('#output_text');

//     reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

//     reader.onload = function () { //FileReader取得上傳檔案後執行以下內容
//         var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
//         $('#output_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
//         $('#output_text').attr('src', dataURL).hide();
//         // $('#output_text').attr('src', dataURL).addClass('opa_0');
//     };
// }

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
// function checkElementsAndToggleModal(confirmButtonId, model_id, elementIds) {
//     var allFilled = true;

//     elementIds.forEach(function (id) {
//         var element = $('#' + id);
//         if (element.text().trim() === '') {
//             allFilled = false;
//             return false; // 退出循環
//         }
//     });

//     if (!allFilled) {
//         $('#' + confirmButtonId).removeAttr('data-bs-toggle').removeAttr('data-bs-target');
//         swalToastWarning('請將所有欄位填上。', 'top');
//     } else {
//         $('#' + confirmButtonId).attr('data-bs-toggle', 'modal').attr('data-bs-target', '#' + model_id);
//     }
// }