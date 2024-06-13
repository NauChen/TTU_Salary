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
}
