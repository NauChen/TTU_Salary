var session_userData={id:"10",company:"加加油股份有限公司",responsiblePerson:"郝有錢",companyPhone:"02-74125698",uniformNum:"01478520",contactPerson:"金貝貝",employeesNum:"300"},session_adminData={id:"99",company:"大同大學研發部",name:"曾絍鉦",email:"abc_ttu@gmail.com"},selectOptionLocation=[{optigroup:"青創基地",option:"101"},{optigroup:"青創基地",option:"102"},{optigroup:"北設工培育區",option:"202"},{optigroup:"產學實驗培育區",option:"202"},{optigroup:"綜合工廠培育區",option:"202"},{optigroup:"挺生大樓培育區",option:"102"}];let commonSettingsTable={layout:{topStart:{search:{placeholder:"關鍵字搜尋"}},topEnd:null,bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(t,e,a,n,o){$(t).find("th").addClass("text-center text-nowrap align-middle")}},commonSettingsHistory={layout:{topStart:function(){var t=document.createElement("div");return t.innerHTML='<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>',t},topEnd:{search:{placeholder:"關鍵字搜尋"}},bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[2],responsivePriority:3},{orderable:!1,targets:[1,2,3,4,6,7]},{className:"text-center",targets:[0,3,4,7]}],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(t,e,a,n,o){$(t).find("th").addClass("text-center text-nowrap align-middle")},createdRow:function(e,t,a){[0,1,2,3,4,5,6,7].forEach(function(t){$("td:eq("+t+")",e).css("font-size",".95em")}),[0,1,2,4,5].forEach(function(t){$("td:eq("+t+")",e).addClass("text-nowrap")}),[5,6].forEach(function(t){$("td:eq("+t+")",e).css("min-width","150px")}),[0,3,4].forEach(function(t){$("td:eq("+t+")",e).css("min-width","100px")})}},commonSettingsProvision={layout:{topEnd:{search:{placeholder:"關鍵字搜尋"}},bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(t,e,a,n,o){$(t).find("th").addClass("text-center text-nowrap align-middle")}};function theseAddClass(a,t){t.forEach(function(t){var e=document.getElementById(t);e&&a.forEach(function(t){e.classList.add(t)})})}function theseRemoveClass(a,t){t.forEach(function(t){var e=document.getElementById(t);e&&a.forEach(function(t){e.classList.remove(t)})})}$(function(){$("#myContractList").DataTable({...commonSettingsTable,data:[{id:"1",contractType:"培育室",type:"青創",num:"101",endDate:"2024-08-31",paymentDate:"2023-07-15",status:"快到期，快來續約吧！"}],columns:[{data:"contractType",title:"合約類型"},{data:"type",title:"細項"},{data:"num",title:"號碼"},{data:"endDate",title:"到期日"},{data:"paymentDate",title:"付款日"},{data:"status",title:"狀態"},{data:"id",title:"續約",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpaceDetail_'+t+'"><i class="fa-solid fa-handshake-simple"></i></button>'},className:"text-center text-nowrap"}],columnDefs:[{targets:[1],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[4],responsivePriority:3},{searchable:!1,orderable:!1,targets:[6]},{className:"text-center",targets:[2,3,4,5,6]},{className:"text-nowrap",targets:[2,3,4,5]}],createdRow:function(e,t,a){$("td:eq(6)",e).css("max-width","70px"),[3,4].forEach(function(t){$("td:eq("+t+")",e).css("min-width","130px")})}}),$("#openRoom_Details").on("shown.bs.modal",function(){$("#roomHistoryList").DataTable().columns.adjust()}),$("#closeRoom_Details").on("shown.bs.modal",function(){$("#roomHistoryList2").DataTable().columns.adjust()})}),$(function(){$(window).on("scroll",function(){var t=$(".top_button");0<$(this).scrollTop()?t.addClass("scroll-animation").removeClass("d-none"):t.removeClass("scroll-animation").addClass("d-none")}),$("#btn_up").on("click",function(){$("html, body").animate({scrollTop:0},"smooth")})}),$(function(){var n=window.location.pathname;$(".link").removeClass("active"),console.log("Current URL:",n),$.each({"#dashboardLink":["dashboard.html"],"#jobLink":["jobMyActiveListings.html","jobActiveListings.html","index.html","jobCreate.html","jobEdit.html"],"#applyAndCheckLink":["idCardInventory.html","parkingSpaceInventory.html","cultivationRoomInventory.html","parkingSpaceApply.html","idCardApply.html","parkingSpaceRenew.html","idCardReissue.html","renewContractApply.html"],"#progressLink":["progressCheck.html"],"#assessmentLink":["coopManufApp.html","parkingSpaceApp.html","renewContractApp.html","idCardApp.html","confirmPayment.html"],"#managementLink":["cultivationRoom.html","parkingSpace.html","roles.html"],"#logRecordLink":["logRecordLink.html"],"#provideOpinionsLink":["provideOpinionsLink.html"],"#styleLink":["template-style.html"],"#underConstructionLink":["template-underConstruction.html"]},function(a,t){$.each(t,function(t,e){if(-1!==n.indexOf(e))return $(a).addClass("active"),!1})})});