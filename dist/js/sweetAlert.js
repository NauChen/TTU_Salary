"use strict";

// function swalToastWarning(titleText, positionType) {
//     Swal.fire({
//         toast: true,
//         position: positionType,
//         icon: 'warning',
//         iconColor: '#ff7851',
//         title: titleText,
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//         }
//     });
// };

function swalToastWarning(titleText, positionType) {
  var Toast = Swal.mixin({
    toast: true,
    position: positionType,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: function didOpen(toast) {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: 'warning',
    iconColor: '#e83e8c',
    title: titleText
  });
}
;
function swalConfirm(questionText, yesButtonText, noButtonText, onConfirm) {
  Swal.fire({
    title: questionText,
    icon: 'question',
    // iconColor: '#e83e8c',
    showCancelButton: true,
    confirmButtonText: yesButtonText,
    cancelButtonText: noButtonText,
    // reverseButtons: true,
    position: 'top',
    // 對齊位置
    allowOutsideClick: false,
    // 點旁邊關閉
    confirmButtonColor: '#888',
    cancelButtonColor: '#609b8a'
  }).then(function (result) {
    if (result.isConfirmed) {
      // 使用者點擊YES按鈕，執行 onConfirm 回調函數
      if (typeof onConfirm === 'function') {
        onConfirm();
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // 使用者點擊NO按鈕，什麼都不做
      console.log('Action was canceled by the user');
    }
  });
}
;