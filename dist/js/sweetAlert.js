function swalToastWarning(o,n){Swal.mixin({toast:!0,position:n,showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:o=>{o.onmouseenter=Swal.stopTimer,o.onmouseleave=Swal.resumeTimer}}).fire({icon:"warning",iconColor:"#e83e8c",title:o})}function swalConfirm(o,n,t,i){Swal.fire({title:o,icon:"question",showCancelButton:!0,confirmButtonText:n,cancelButtonText:t,position:"top",allowOutsideClick:!1,confirmButtonColor:"#888",cancelButtonColor:"#609b8a"}).then(o=>{o.isConfirmed?"function"==typeof i&&i():o.dismiss===Swal.DismissReason.cancel&&console.log("Action was canceled by the user")})}function swalToastSuccess(o,n){Swal.mixin({toast:!0,position:n,showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:o=>{o.onmouseenter=Swal.stopTimer,o.onmouseleave=Swal.resumeTimer}}).fire({icon:"success",iconColor:"#56cc9d",title:o})}function swalConfirmNoToast(o,n,t,i,e,s){Swal.fire({title:o,icon:"question",showCancelButton:!0,confirmButtonText:n,cancelButtonText:t,position:"top",allowOutsideClick:!1,confirmButtonColor:"#888",cancelButtonColor:"#609b8a"}).then(o=>{o.isConfirmed?"function"==typeof i&&i():o.dismiss===Swal.DismissReason.cancel&&swalToastConfirmSuccess(e,s)})}function swalConfirmNoToastSandId(o,n,t,i,e,s,c){Swal.fire({title:o,icon:"question",showCancelButton:!0,confirmButtonText:n,cancelButtonText:t,position:"top",allowOutsideClick:!1,confirmButtonColor:"#888",cancelButtonColor:"#609b8a"}).then(o=>{o.isConfirmed?"function"==typeof i&&i():o.dismiss===Swal.DismissReason.cancel&&(swalToastConfirmSuccess(e,s),console.log("將傳送的 renewId:",c))})}function swalToastConfirmSuccess(o,n){Swal.mixin({toast:!0,position:n,showConfirmButton:!0,confirmButtonText:"明白了！",confirmButtonColor:"#f3969a",width:"390px"}).fire({icon:"success",iconColor:"#56cc9d",title:o})}