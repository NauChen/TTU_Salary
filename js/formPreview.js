// ================列印畫面
$(document).on("click", "#printAndSubmit", function () {
    const section = $("section");
    const printBody = $("#printWrapper").detach();
    section.append(printBody);
    window.print();
    section.empty();
    $("#returnThisBox").append(printBody);

});

// ================預覽燈箱
//同步input text
function syncInputValue(inputId, tdId) {
    $('#' + inputId).on('blur', function () {
        var inputValue = $(this).val();
        $('#' + tdId).text(inputValue);
    });
}
//同步input date
function syncInputDate(inputId, tdId_Y, tdId_m, tdId_D) {
    $('#' + inputId).on('blur', function () {
        var inputValue = $(this).val();

        var parts = inputValue.split('-');
        var year = parts[0];
        var month = parts[1];
        var day = parts[2];

        $('#' + tdId_Y).text(year);
        $('#' + tdId_m).text(month);
        $('#' + tdId_D).text(day);
    });
}
//同步input select
function syncSelectValue(selectId, tdgroupId, tdvalueId) {
    $('#' + selectId).on('blur change', function () {
        var selectedOption = $(this).find('option:selected');
        var optionValue = selectedOption.val();
        var optgroupLabel = selectedOption.closest('optgroup').attr('label');

        var changedRoomName = changeRoomName(optgroupLabel);

        $('#' + tdgroupId).text(changedRoomName);
        $('#' + tdvalueId).text(optionValue);
    });
}
//同步input radio
function syncInputRadio(yesRadioId, noRadioId, yesTdId, noTdId) {
    if ($('#' + yesRadioId).is(':checked')) {
        $('#' + yesTdId).html('&#9745;');
        $('#' + noTdId).html('&#9744;');
    } else if ($('#' + noRadioId).is(':checked')) {
        $('#' + yesTdId).html('&#9744;');
        $('#' + noTdId).html('&#9745;');
    }
}
//同步input radio後 yes要同步文字
function syncInputRadioYesValue(yesRadioId, noRadioId, yesTdId, noTdId, yesReason, yesReasonTd) {
    if ($('#' + yesRadioId).is(':checked')) {
        $('#' + yesTdId).html('&#9745;');
        $('#' + noTdId).html('&#9744;');
        var inputValue = $('#' + yesReason).val();
        $('#' + yesReasonTd).text(inputValue);
        syncInputValue(yesReason, yesReasonTd);
    } else if ($('#' + noRadioId).is(':checked')) {
        $('#' + yesTdId).html('&#9744;');
        $('#' + noTdId).html('&#9745;');
        $('#' + yesReasonTd).text('');
    }
}
//同步input radio後 no要同步文字
function syncInputRadioNoValue(yesRadioId, noRadioId, yesTdId, noTdId, noReason, noReasonTd) {
    if ($('#' + noRadioId).is(':checked')) {
        $('#' + noTdId).html('&#9745;');
        $('#' + yesTdId).html('&#9744;');
        var inputValue = $('#' + noReason).val();
        $('#' + noReasonTd).text(inputValue);
        syncInputValue(noReason, noReasonTd);
    } else if ($('#' + yesRadioId).is(':checked')) {
        $('#' + noTdId).html('&#9744;');
        $('#' + yesTdId).html('&#9745;');
        $('#' + noReasonTd).text('');
    }
}
//同步input checkbox
function syncInputCheckbox(checkboxId, tdId) {
    $('#' + checkboxId).on('change', function () {
        if ($('#' + checkboxId).is(':checked')) {
            $('#' + tdId).html('&#9745;');
        } else {
            $('#' + tdId).html('&#9744;');
        }
    });
}
//同步input 加上仟分號
function syncNumberWithCommas(inputId, tdId) {
    $('#' + inputId).on('blur', function () {
        var inputValue = $(this).val();
        if (inputValue) {
            var formattedValue = Number(inputValue).toLocaleString('en');
            $('#' + tdId).text(formattedValue);
        }
    });
}
//同步證件照
function openFile(event) {
    var input = event.target; //取得上傳檔案
    var reader = new FileReader(); //建立FileReader物件
    // var pic_Text = $('#output_text');

    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串

    reader.onload = function () { //FileReader取得上傳檔案後執行以下內容
        var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
        $('#output_img').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
        $('#output_text').attr('src', dataURL).hide();
        // $('#output_text').attr('src', dataURL).addClass('opa_0');
    };
}



// 上傳圖片、預覽、裁切
$(function () {
    /* ::::::::::::::::::::::::::::: 裁切上傳圖片 */
    var car_width_crop = 529; // 汽車裁切寬度
    var car_height_crop = 360; // 汽車裁切高度
    var bike_width_crop = car_width_crop / 2; // 機車裁切寬度為汽車裁切寬度的一半
    var bike_height_crop = car_height_crop; // 機車裁切高度與汽車相同
    var croppieContainer = $('#croppie-container');
    $("#croppie-container").hide();
    $('#crop_img').hide();

    var croppie = null;
    var currentMode = null; // 初始模式為空

    // 初始化 Croppie 實例
    function initializeCroppie(width_crop, height_crop) {
        croppie = new Croppie(croppieContainer[0], {
            viewport: {
                width: width_crop,
                height: height_crop,
                type: 'square'
            },
            boundary: {
                width: 500,
                height: 400
            },
            enableResize: false,
            enableOrientation: true
        });
    }

    // 可調整裁切的大小
    function handleFileSelect(input, width_crop, height_crop) {
        $("#croppie-container").show();
        if (!croppie) {
            initializeCroppie(width_crop, height_crop);
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            croppie.bind({
                url: e.target.result
            });
        };
        reader.readAsDataURL(input.files[0]);
    }

    // 重置函數，恢復到初始狀態( "重填" 按鈕使用)
    function resetToInitialState() {
        if (croppie) {
            croppie.destroy();
            croppie = null; // 銷毀 Croppie 實例並改為 null
        }
        croppieContainer.hide();
        $('#crop_img').hide();
        $('#newImg').html('');
        $('#car_upload_label').show();
        $('#bike_upload_label').show();
        $('#confirm_parkingSpaceApp').removeAttr('data-bs-toggle').removeAttr('data-bs-target');
    }

    $('#upload_car_img').on('change', function () {
        currentMode = 'car';
        resetToInitialState();
        handleFileSelect(this, car_width_crop, car_height_crop);
        $('#bike_upload_label').hide();
        $('#car_upload_label').show();
        $('#crop_img').show();
    });

    $('#upload_moto_img').on('change', function () {
        currentMode = 'bike';
        resetToInitialState();
        handleFileSelect(this, bike_width_crop, bike_height_crop);
        $('#car_upload_label').hide();
        $('#bike_upload_label').show();
        $('#crop_img').show();
    });

    $('#crop_img').on('click', function (event) {
        event.preventDefault();

        var width_crop = currentMode === 'car' ? car_width_crop : bike_width_crop;
        var height_crop = currentMode === 'car' ? car_height_crop : bike_height_crop;

        croppie.result({
            type: 'canvas',
            size: { width: width_crop, height: height_crop },
            format: 'jpeg',
            quality: 0.85
        }).then(function (imgData) {
            displayCroppedImage(imgData, currentMode);
            $('#confirm_parkingSpaceApp').attr('data-bs-toggle', 'modal').attr('data-bs-target', '#parkingSpaceApp_pdf');
        });
    });

    // 調整預覽燈箱內的圖片大小
    function displayCroppedImage(imgData, mode) {
        var width = mode === 'car' ? '100%' : '50%';
        $('#newImg').html('<img src="' + imgData + '" class="img-thumbnail" style="width: ' + width + ';">');
    }

    $('#confirm_parkingSpaceApp').on('click', function (event) {
        if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {
            event.preventDefault();
            // alert("請先上傳行照內頁並裁剪至指定大小");
            swalToastWarning('請先上傳行照內頁，並裁剪成指定大小。', 'top');
        }
    });

    // 處理重填按鈕點擊事件
    $('button[type="reset"]').on('click', function () {
        resetToInitialState();
    });
});
