"use strict";

$(function () {
  // $.getScript('./js/formComm.js')
  //     .done(function () {
  //         // formComm.js 加載完成後加載 formPreview.js
  //         $.getScript('./js/formPreview.js')
  //             .done(function () {
  //                 // 調用函數，傳入 input 和 td 的 ID
  //                 syncInputValue('parkingSpaceName', 'parkingSpaceName_td');
  //                 syncInputValue('parkingSpaceJobName', 'parkingSpaceJobName_td');
  //                 syncInputValue('parkingSpacePhone', 'parkingSpacePhone_td');
  //                 syncInputValue('parkingSpaceIDNum', 'parkingSpaceIDNum_td');
  //                 syncInputValue('parkingSpaceEmail', 'parkingSpaceEmail_td');
  //                 syncInputValue('parkingSpaceExt', 'parkingSpaceExt_td');
  //             });
  //     });
  // 調用函數，傳入 input 和 td 的 ID
  syncInputValue('parkingSpaceName', 'parkingSpaceName_td');
  syncInputValue('parkingSpaceJobName', 'parkingSpaceJobName_td');
  syncInputValue('parkingSpacePhone', 'parkingSpacePhone_td');
  syncInputValue('parkingSpaceIDNum', 'parkingSpaceIDNum_td');
  syncInputValue('parkingSpaceEmail', 'parkingSpaceEmail_td');
  syncInputValue('parkingSpaceExt', 'parkingSpaceExt_td');
});