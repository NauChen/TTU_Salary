// ※※ onkeyup函式 - 限制輸入用 ※※ 
//   數字 & '-'
function restrictToNumberHyphen(obj) {
    $(obj).val($(obj).val().replace(/[^\d-]/g, ""));
}
//   數字。 禁開頭是0
function restrictToNum(obj) {
    var inputValue = $(obj).val().replace(/\D/g, '');
    if (inputValue.startsWith('0')) {
        inputValue = inputValue.replace(/^0+/, '');
    }
    $(obj).val(inputValue);
}
//   數字，且最多8個字元
function restrictToUniformNum(obj) {
    var inputValue = $(obj).val().replace(/\D/g, ''); // 移除所有非數字字符
    if (inputValue.length > 8) {
        inputValue = inputValue.slice(0, 8); // 截取前8個字符
    }
    $(obj).val(inputValue);
}
//   字母、數字、點、破折號、底線、@ 符號
function restrictToValidChars(obj) {
    $(obj).val($(obj).val().replace(/[^a-zA-Z0-9._@-]/g, ""));
}

// ※※ 金額函式 - 千分位符號 ※※ 
//   增加千分號
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//   刪除千分號
function unformatNumber(str) {
    return str.replace(/,/g, '');
}

// ※※ onfocus函式 - 變更輸入當下用 ※※ 
//   onfocus 時，調用函式-移除千分號
function unformatOnFocus(obj) {
    var value = $(obj).val();
    $(obj).val(unformatNumber(value));
}

// ※※ onblur函式 - 變更輸入完畢後用 ※※ 
//   onblur 時，調用函式-增加千分號
function formatOnBlur(obj) {
    var value = $(obj).val();
    if (value !== '') {
        $(obj).val(formatNumber(value));
    }
}

// ※※ 職缺函式 - 職缺表單專用 ※※
//   根據薪資類型，顯示相應的金額輸入框 與 預選單選
function handleSalaryChoose(selectedOption) {
    switch (selectedOption) {
        case '時薪':
        case '日薪':
            $("#dollarsItem").addClass("choose");
            $("#dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose");
            $('#salaryTypeRadio1').prop('checked', true);
            $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
            $('#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput').text(''); // 清除其他錯誤訊息
            $("#dollarsInput").addClass("thisRequired");
            break;
        case '月薪':
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").addClass("choose");
            $("#dollarsPerCaseItem").removeClass("choose");
            $('#salaryTypeRadio1').prop('checked', true);
            $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
            $("#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
            $("#dollarsInput").addClass("thisRequired");
            break;
        case '按件計酬':
            $("#dollarsPerCaseItem").addClass("choose");
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").removeClass("choose");
            $('#salaryTypeRadio5').prop('checked', true);
            $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired");
            $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput").text(''); // 清除其他錯誤訊息
            $("#dollarsPerCaseInput").addClass("thisRequired");
            break;
        case '請選擇':
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose");
            $('#salaryTypeRadio1, #salaryTypeRadio2, #salaryTypeRadio3, #salaryTypeRadio4, #salaryTypeRadio5').prop('checked', false);
            $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
            $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
            break;
    }
}

// ※※ 時間函式 - 職缺表單專用 ※※
//   將組合過的時間拆開
function splitJobTime(jobTime) {
    var timeParts = jobTime.split(" ~ ");
    if (timeParts.length === 2) {
        return {
            jobTime1: timeParts[0].trim(),
            jobTime2: timeParts[1].trim()
        };
    } else {
        throw new Error("Invalid jobTime format. It should be in the format 'HH:mm ~ HH:mm'.");
    }
}

// ※※ 日期函式 - 起訖日期專用 ※※

//   限制可選日期不可早於當前日期
function setMinDateToToday(inputId) {
    // 獲取當前日期
    var today = new Date();

    // 格式化日期為 YYYY-MM-DD
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // 獲取月份，並確保格式為兩位數
    var dd = String(today.getDate()).padStart(2, '0'); // 獲取日期，並確保格式為兩位數
    var formattedDate = yyyy + '-' + mm + '-' + dd;

    // 設置 input 元素的 min 屬性
    $('#' + inputId).attr('min', formattedDate);
}
//   確保選擇 開始日期 之前 不能選擇 結束日期，會跳Toast提示。選擇結束日期後開始日期加上max限制，避免逆選漏洞。
function enforceStartDateFirst(startDateId, endDateId) {
    var startDate = $('#' + startDateId);
    var endDate = $('#' + endDateId);

    // 當結束日期的 input 被點擊時
    endDate.on('mousedown', function(e) {
        // 如果起始日期為空，顯示警告訊息並防止日期選擇器展開
        if (startDate.val() === '') {
            e.preventDefault(); // 阻止事件的默認行為
            endDate.attr('readonly', true); // 設置結束日期為只讀
            swalToastWarning('請先選取開始日期。', 'top');
        } else {
            endDate.attr('readonly', false); // 否則結束日期可選
        }
    });

    // 當起始日期改變時，更新結束日期的 min 屬性並取消只讀屬性
    startDate.on('change', function() {
        if (startDate.val() !== '') {
            endDate.attr('min', startDate.val());
            endDate.attr('readonly', false); // 啟用結束日期的輸入
        } else {
            endDate.removeAttr('min');
            endDate.attr('readonly', true); // 禁用結束日期的輸入
        }
    });
    endDate.on('change', function() {
        if (endDate.val() !== '') {
            startDate.attr('max', endDate.val());
        } else {
            startDate.removeAttr('max');
        }
    });
}

// ※※ 文字轉換函式 - 存取資料專用 ※※
// 將資料庫的文字內的 \n 轉成 <br>
function convertNewlinesToBreaks(text) {
    return text.replace(/\n/g, '<br>');
}




// function handleSalaryChoose(selectedOption) {
//     switch (selectedOption) {
//         case '時薪':
//         case '日薪':
//             theseAddClass(["choose"], ["dollarsItem"]);
//             theseRemoveClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
//             document.getElementById('salaryTypeRadio1').checked = true;
//             theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["dollarsInput"]);
//             break;
//         case '月薪':
//             theseAddClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem']);
//             theseRemoveClass(["choose"], ['dollarsPerCaseItem']);

//             document.getElementById('salaryTypeRadio1').checked = true; 
//             theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
//             theseAddClass(["thisRequired"], ["dollarsInput"]);
//             break;
//         case '按件計酬':
//             theseAddClass(["choose"], ['dollarsPerCaseItem']);
//             theseRemoveClass(["choose"], ["dollarsItem", 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem',]);
//             document.getElementById('salaryTypeRadio5').checked = true; 
//             theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]);
//             break;
//         case '請選擇':
//             theseRemoveClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
//             document.getElementById('salaryTypeRadio1', 'salaryTypeRadio2', 'salaryTypeRadio3', 'salaryTypeRadio4', 'salaryTypeRadio5').checked = false; 
//             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']); 
//             break;
//     }
// }
