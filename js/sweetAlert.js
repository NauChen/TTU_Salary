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
    const Toast = Swal.mixin({
        toast: true,
        position: positionType,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: 'warning',
        iconColor: '#e83e8c',
        title: titleText
    });
};

function swalConfirm(questionText, yesButtonText, noButtonText, onConfirm) {
    Swal.fire({
        title: questionText,
        icon: 'question',
        // iconColor: '#e83e8c',
        showCancelButton: true,
        confirmButtonText: yesButtonText,
        cancelButtonText: noButtonText,
        // reverseButtons: true,
        position: 'top', // 對齊位置
        allowOutsideClick: false, // 點旁邊關閉
        confirmButtonColor: '#888',
        cancelButtonColor: '#609b8a',

    }).then((result) => {
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
};

function swalToastSuccess(titleText, positionType) {
    const Toast = Swal.mixin({
        toast: true,
        position: positionType,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    Toast.fire({
        icon: 'success',
        iconColor: '#56cc9d',
        title: titleText
    });
};

function swalConfirmNoToast(questionText, yesButtonText, noButtonText, onConfirm, titleText, positionType) {
    Swal.fire({
        title: questionText,
        icon: 'question',
        // iconColor: '#e83e8c',
        showCancelButton: true,
        confirmButtonText: yesButtonText,
        cancelButtonText: noButtonText,
        // reverseButtons: true,
        position: 'top', // 對齊位置
        allowOutsideClick: false, // 點旁邊關閉
        confirmButtonColor: '#888',
        cancelButtonColor: '#609b8a',

    }).then((result) => {
        if (result.isConfirmed) {
            // 使用者點擊YES按鈕，執行 onConfirm 回調函數
            if (typeof onConfirm === 'function') {
                onConfirm();
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalToastConfirmSuccess(titleText, positionType);
        }
    });
};

function swalToastConfirmSuccess(titleText, positionType) {
    const Toast = Swal.mixin({
        toast: true,
        position: positionType,
        showConfirmButton: true,
        confirmButtonText: '明白了！',
        confirmButtonColor: '#f3969a',

        width: '390px',
    });

    Toast.fire({
        icon: 'success',
        iconColor: '#56cc9d',
        title: titleText
    });
};