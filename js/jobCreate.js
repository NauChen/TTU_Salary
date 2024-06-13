document.write('<script type="text/javascript" src="./js/formComm.js"></script>');
// ***********************************確定後再合併$(function(){ });

/* ::::::::::::::::::::::::::::: 新增/修改職缺 */
//選擇薪資條件變動輸入框
// document.addEventListener('DOMContentLoaded', function () {
//     // 監聽 select 的 change 事件
//     document.getElementById('salaryType').addEventListener('change', function () {
//         // 取得選擇的選項值
//         var selectedOption = this.value;
//         handleSalaryChoose(selectedOption);
//     });

//     // 取得選擇的選項值
//     var selectedOption = document.getElementById('salaryType').value;
//     // 初始化時執行判斷
//     handleSalaryChoose(selectedOption);
// });
$(function () {
    // 監聽 select 的 change 事件
    $('#salaryType').on('change', function () {
        // 取得選擇的選項值
        var selectedOption = $(this).val();
        handleSalaryChoose(selectedOption);
    });

    // 取得選擇的選項值
    // var selectedOption = $('#salaryType').val();
    //  初始化時執行判斷
    // handleSalaryChoose(selectedOption);

    //限制截止日期不可小於當日
    var today = new Date().toISOString().split('T')[0];
    $('#applicationDeadline').attr('min', today);
    $('#applicationDeadline').val(jobData.applicationDeadline);
});

$(function () {

    // 切換選擇單選框(薪資金額輸入)時，更改必填class。 必填class用在formComm.js的function，添加class的function來自main.js
    $('input[name="salaryTypeItem"]').on("change", function () {
        // alert("Handler for `change` called.");
        var selectedValue = $(this).val();
        // console.log(selectedValue);
        switch (selectedValue) {
            case "1":
                theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
                theseAddClass(["thisRequired"], ["dollarsInput"]);
                break;
            case "2":
                theseRemoveClass(["thisRequired"], ['dollarsInput', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
                theseAddClass(["thisRequired"], ["dollarsToDollars_1Input", "dollarsToDollars_2Input"]);
                break;
            case "3":
                theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'negotiableInput', 'dollarsPerCaseInput']);
                theseAddClass(["thisRequired"], ["moreThenDollarsInput"]);
                break;
            case "4":
                theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'dollarsPerCaseInput']);
                theseAddClass(["thisRequired"], ["negotiableInput"]);
                break;
            case "5":
                theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']);
                theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]);
                break;
            default:
                break;
        }
    });
});



$(function () {
    // 限制確認必填class是否都已有值，才可傳送。function來自formComm.js
    validAllRequiredForm('submitBtn', 'createJobForm');
});