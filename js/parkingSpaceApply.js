$(function () {

    // 調用函數，傳入 input 和 td 的 ID
    syncInputValue('parkingSpaceName', 'parkingSpaceName_td');
    syncInputValue('parkingSpaceJobName', 'parkingSpaceJobName_td');
    syncInputValue('parkingSpacePhone', 'parkingSpacePhone_td');
    syncInputValue('parkingSpaceIDNum', 'parkingSpaceIDNum_td');
    syncInputValue('parkingSpaceEmail', 'parkingSpaceEmail_td');
    syncInputValue('parkingSpaceExt', 'parkingSpaceExt_td');

    // 點擊 resetBtn 按鈕時
    // $('#resetBtn').click(function () {
    //     // 執行原有 reset 的功能
    //     this.form.reset();
    //     // 清空所有以 danger_ 開頭元素的內容
    //     $('[id^="danger_"]').text('');
    // });

    $('#confirm_parkingSpaceApp').on('click', function (event) {
        if (!$(this).attr('data-bs-toggle') || !$(this).attr('data-bs-target')) {
            event.preventDefault();
            // alert("請先上傳行照內頁並裁剪至指定大小");
            swalToastWarning('請先上傳行照內頁，並裁剪成指定大小。', 'top');
        }
    });
});