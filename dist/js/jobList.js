let commonSettingsReadonlyJobTable={layout:{topStart:{search:{placeholder:"關鍵字搜尋"}},topEnd:null,bottomStart:"info",bottomEnd:{paging:{numbers:5}}},columns:[{data:"createDate",title:"刊登日期"},{data:"company",title:"公司名稱"},{data:"jobTitle",title:"職務名稱"},{data:"jobEmployment",title:"工作性質",className:"text-center"},{data:"jobTime",title:"工作時間"},{data:"applicationDeadline",title:"截止日期"},{data:"id",title:"詳情",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#jobDetailsModal" data-id="'+t+'"><i class="fa-solid fa-info px-1"></i></button>'}}],columnDefs:[{targets:[0],responsivePriority:3},{targets:[3],responsivePriority:1},{targets:[4],responsivePriority:2},{searchable:!1,orderable:!1,targets:[6]},{className:"text-nowrap",targets:[0,3,4,5]},{className:"text-lg-center",targets:[0,4,5,6]}],createdRow:function(a,t,e){$("td:eq(6)",a).css("max-width","70px"),$("td:eq(0)",a).css("min-width","130px"),[4,5].forEach(function(t){$("td:eq("+t+")",a).css("min-width","150px")}),[0,4,5].forEach(function(t){$("td:eq("+t+")",a).css("font-size",".95em")})},order:[[0,"desc"]],responsive:!0,language:{lengthMenu:"顯示 _MENU_ 筆",sProcessing:"處理中...",loadingRecords:"載入中...",sZeroRecords:"OOPS！没有匹配的结果",sInfo:"共有 _MAX_ 筆",sInfoEmpty:"共有 0 筆",sInfoFiltered:" ",sInfoPostFix:"",sSearch:'<i class="fa fa-search px-1" aria-hidden="true"></i>',sUrl:"",sEmptyTable:"尚未有資料紀錄存在",sLoadingRecords:"載入中...",sInfoThousands:",",oPaginate:{sFirst:'<i class="fa fa-step-backward" aria-hidden="true"></i>',sPrevious:'<i class="fa fa-caret-left" aria-hidden="true"></i>',sNext:'<i class="fa fa-caret-right" aria-hidden="true"></i>',sLast:'<i class="fa fa-step-forward" aria-hidden="true"></i>'},oAria:{sSortAscending:": 以升序排列此列",sSortDescending:": 以降序排列此列"}},headerCallback:function(t,a,e,n,i){$(t).find("th").addClass("text-center text-nowrap align-middle")}},engineeringList=["機械與材料工程學系","化學工程與生物科技學系","電機工程學系","資訊工程學系"],managementList=["事業經營學系","資訊經營學系"],designList=["工業設計學系","媒體設計學系"],languageList=["應用外語學系"],dataset_jobEngineeringList=dataset_jobList.filter(t=>engineeringList.includes(t.deptOf)),dataset_jobManagementList=dataset_jobList.filter(t=>managementList.includes(t.deptOf)),dataset_jobDesignList=dataset_jobList.filter(t=>designList.includes(t.deptOf)),dataset_jobLanguageList=dataset_jobList.filter(t=>languageList.includes(t.deptOf));$(function(){$("#jobAllList").DataTable({...commonSettingsReadonlyJobTable,data:dataset_jobList}),$("#jobEngineeringList").DataTable({...commonSettingsReadonlyJobTable,data:dataset_jobEngineeringList}),$("#jobManagementList").DataTable({...commonSettingsReadonlyJobTable,data:dataset_jobManagementList}),$("#jobDesignList").DataTable({...commonSettingsReadonlyJobTable,data:dataset_jobDesignList}),$("#jobLanguageList").DataTable({...commonSettingsReadonlyJobTable,data:dataset_jobLanguageList}),$("#jobDetailsModal").on("show.bs.modal",function(t){t=$(t.relatedTarget);let a=String(t.data("id"));t=dataset_jobList.find(t=>t.id===a);t?($("#companyName").text(t.company),$("#companyDescription").text(t.companyDescription),$("#jobTitle").text(t.jobTitle),$("#jobEmployment").text(t.jobEmployment),$("#deptOf").text(t.deptOf),$("#jobTime").text(t.jobTime),$("#vacationSystem").text(t.vacationSystem),$("#salaryDetails").text(t.salaryStyle+"："+t.salaryAmount),$("#jobContent").html(t.jobContent),$("#jobCondition").html(t.jobCondition),$("#jobConnect").html(t.jobConnect),$("#jobLocation").html(t.jobLocation),$("#applicationDeadline").text(t.applicationDeadline)):console.error("Job data not found for id:",a)})}),$(function(){var e=$("#jobAllList").DataTable(),n=$("#jobEngineeringList").DataTable(),i=$("#jobManagementList").DataTable(),o=$("#jobDesignList").DataTable(),s=$("#jobLanguageList").DataTable();$('button[data-bs-toggle="tab"]').on("shown.bs.tab",function(t){var a;switch($(t.target).data("bs-target")){case"#nav-all":a=e;break;case"#nav-engineering":a=n;break;case"#nav-management":a=i;break;case"#nav-design":a=o;break;case"#nav-language":a=s}a&&setTimeout(function(){a.columns.adjust().responsive.recalc()},30)})});