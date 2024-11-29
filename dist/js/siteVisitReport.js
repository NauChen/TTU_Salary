var dataset_thisVisitReport=[{id:"1",visitDate:"2023-07-15",fileName:"20230830153244_V1",remark:"原檔案有錯，重新上傳。",createBy:"孫一美",createDate:"2023-08-30"},{id:"2",visitDate:"2023-08-28",fileName:"20230830153244_V1",remark:"",createBy:"孫大美",createDate:"2023-08-31"},{id:"3",visitDate:"2023-09-08",fileName:"20230830153244_V1",remark:"",createBy:"孫大帥",createDate:"2023-09-10"},{id:"4",visitDate:"2023-09-09",fileName:"20230830153244_V1",remark:"",createBy:"孫二帥",createDate:"2023-09-10"},{id:"5",visitDate:"2023-09-16",fileName:"20230830153244_V1",remark:"",createBy:"劉二傻",createDate:"2023-09-15"},{id:"6",visitDate:"2024-09-01",fileName:"20230830153244_V1",remark:"",createBy:"關二爺",createDate:"2024-09-10"},{id:"7",visitDate:"2024-09-11",fileName:"20230830153244_V1",remark:"",createBy:"張三爺",createDate:"2024-09-12"}];$(function(){$("#visitReportList").DataTable({...commonSettingsProvision,layout:{topStart:function(){var e=document.createElement("div");return e.innerHTML='<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>上傳後不可修改，僅可刪除後重新上傳。</h6>',e}},data:dataset_thisVisitReport,columns:[{data:"id",title:'<i class="fa-regular fa-square-check"></i>',render:function(e,t,a,r){return"X"==a.remark||"已選停用，請至研發處歸還。"==a.remark?"":'<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value='+e+">"}},{data:"visitDate",title:"訪視日期"},{data:"fileName",title:"紀錄<br class='d-none d-lg-block'>下載",render:function(e,t,a){return"申請中"!=a.remark&&"X"!=a.remark&&"已選停用，請至研發處歸還。"!=a.remark?'<a class="" href="./.html?id='+e+'"><i class="fa-solid fa-download"></i></a>':""}},{data:"remark",title:"備註"},{data:"createBy",title:"上傳者"},{data:"createDate",title:"上傳日期"}],order:[[1,"desc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{searchable:!1,targets:[0,2]},{orderable:!1,targets:[0,2,4,5]},{className:"text-center",targets:[0,1]},{className:"text-sm-center",targets:[2]},{className:"text-md-center",targets:[4,5]},{className:"text-nowrap",targets:[0,1,2,4,5]}],createdRow:function(t,e,a){[1,4].forEach(function(e){$("td:eq("+e+")",t).css("min-width","110px").css("font-size",".9em")}),$("td:eq(5)",t).css("font-size",".8em").css("max-width","100px"),$("td:eq(2)",t).css("max-width","70px")}})});