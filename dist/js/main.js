let commonSettingsTable={layout:{topStart:{search:{placeholder:"關鍵字搜尋"}},topEnd:null,bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(e,a,t,n,s){$(e).find("th").addClass("text-center text-nowrap align-middle")}},commonSettingsHistory={layout:{topStart:function(){var e=document.createElement("div");return e.innerHTML='<h5 class="fw-bold"><i class="fa-solid fa-clock-rotate-left me-2"></i>歷程記錄</h5>',e},topEnd:{search:{placeholder:"關鍵字搜尋"}},bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[2],responsivePriority:3},{orderable:!1,targets:[1,2,3,4,6,7]},{className:"text-lg-center",targets:[0,1,3,4,7]}],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(e,a,t,n,s){$(e).find("th").addClass("text-center text-nowrap align-middle")},createdRow:function(a,e,t){[2,5,6,7].forEach(function(e){$("td:eq("+e+")",a).css("font-size",".9em")}),[0,1,3,4].forEach(function(e){$("td:eq("+e+")",a).css("font-size",".8em")}),[0,1,2,3,4].forEach(function(e){$("td:eq("+e+")",a).addClass("text-nowrap")}),[5,6].forEach(function(e){$("td:eq("+e+")",a).css("min-width","150px")})}},commonSettingsProvision={layout:{topEnd:{search:{placeholder:"關鍵字搜尋"}},bottomStart:"info",bottomEnd:{paging:{numbers:5}}},order:[[0,"desc"]],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(e,a,t,n,s){$(e).find("th").addClass("text-center text-nowrap align-middle")}};$(function(){$(window).on("scroll",function(){var e=$(".top_button");0<$(this).scrollTop()?e.addClass("scroll-animation").removeClass("d-none"):e.removeClass("scroll-animation").addClass("d-none")}),$("#btn_up").on("click",function(){$("html, body").animate({scrollTop:0},"smooth")})}),$(function(){var n=window.location.pathname;$(".link").removeClass("active"),$.each({"#dashboardLink":["dashboard.html"],"#jobLink":["Jobs/Talent_wanted","Jobs/PostedByMe","Jobs/AllPosted","Jobs/Create","Jobs/Edit"],"#applyAndCheckLink":["ID_Card/Ours","ID_Card/Apply","ID_Card/Reissue","Remittance/Create","ParkingSpace/Ours","ParkingSpace/Apply","CultivationRoom/Ours","idCardInventory.html","parkingSpaceInventory.html","cultivationRoomInventory.html","parkingSpaceApply.html","idCardApply.html","parkingSpaceRenew.html","idCardReissue.html","renewContractApply.html","proofOfPaymentEdit.html"],"#assessmentLink":["CoopManuf/Review","coopManufApp.html","parkingSpaceApp.html","renewContractApp.html","idCardApp.html","confirmPayment.html"],"#managementLink":["User/Information","User/Edit","ID_Card/Management","Remittance/Create","Configure/Management","Remittance/Edit","ParkingSpace/Management","ParkingSpace/Create","ParkingSpace/Edit","CoopManuf/Edit","CoopManuf/VisitReport","CultivationRoom/Management","CultivationRoom/Create","CultivationRoom/Edit","parkingSpace.html","roles.html","proofOfPaymentEdit.html"],"#logRecordLink":["logRecordLink.html"],"#styleLink":["template-style.html"],"#underConstructionLink":["template-underConstruction.html"],"#userLink":["User/Settings","User/ChangeIdentity"]},function(t,e){$.each(e,function(e,a){if(-1!==n.indexOf(a))return $(t).addClass("active"),!1})})});