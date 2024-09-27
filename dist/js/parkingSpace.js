var dataset_parkingSpaceHistory=[{createDate:"2019-01-19",rate:"2,000",startDate:"-",endDate:"-",company:"-",licensePlateNum:"-",remark:"啟用",createBy:"王大明"},{createDate:"2020-01-20",rate:"3,000",startDate:"2020-03-01",endDate:"2020-09-30",company:"冠陞企業管理顧問股份有限公司",licensePlateNum:"1234-MN",remark:"-",createBy:"王大明"},{createDate:"2020-02-20",rate:"2,500",startDate:"2020-03-01",endDate:"2020-09-30",company:"冠陞企業管理顧問股份有限公司",licensePlateNum:"1234-MN",remark:"一位躺在大門財富也能體驗高速，起點他的。",createBy:"王大明"}];$(function(){var t=dataset_parkingSpaceAll.filter(t=>"啟用"===t.status),a=dataset_parkingSpaceAll.filter(t=>"停用"===t.status);$("#parkingSpaceHistoryList").DataTable({...commonSettingsHistory,data:dataset_parkingSpaceHistory,columns:[{data:"createDate",title:"紀錄日期"},{data:"licensePlateNum",title:"承租車牌"},{data:"rate",title:"服務費/月"},{data:"startDate",title:"承租開始"},{data:"endDate",title:"承租結束"},{data:"company",title:"承租企業"},{data:"remark",title:"操作紀錄"},{data:"createBy",title:"操作者"}]}),$("#parkingSpace_OpenList").DataTable({...commonSettingsTable,data:t,columns:[{data:"building",title:"車位位置"},{data:"basementNum",title:"車位號碼",className:"text-center"},{data:"rate",title:"預設<br class='d-none d-lg-block'>服務費/月"},{data:"company",title:"承租公司"},{data:"licensePlateNum",title:"車牌號碼"},{data:"endDate",title:"承租到期日"},{data:"adminNote",title:"管理備註"},{data:"id",title:"詳情",render:function(t,a,e){let r="";return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm car_icon" data-bs-toggle="modal" data-bs-target="#parkingSpace_DetailsModel" data-id="'+t+'">'+(r="汽車"===e.carType?'<i class="fa-solid fa-car-side"></i>':"機車"===e.carType?'<i class="fa-solid fa-motorcycle"></i>':'<i class="fa-solid fa-info"></i>')+"</button>"}},{data:"id",title:"修改",render:function(t){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="/ParkingSpace/Edit/'+t+'"><i class="fa-solid fa-wrench"></i></a>'}},{data:"carType",visible:!1}],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[3],responsivePriority:3},{searchable:!1,orderable:!1,targets:[7,8]},{className:"text-nowrap",targets:[0,1,2,4,5]},{className:"text-lg-center",targets:[5,7,8]}],order:[[3,"asc"]],createdRow:function(a,t,e){[7,8].forEach(function(t){$("td:eq("+t+")",a).css("max-width","70px")}),$("td:eq(2)",a).addClass("pe-3"),[0,5].forEach(function(t){$("td:eq("+t+")",a).css("min-width","100px").css("font-size",".95rem")})}}),$("#parkingSpace_CloseList").DataTable({...commonSettingsTable,data:a,columns:[{data:"carateDate",title:"停車位<br class='d-none d-lg-block'>建立日期"},{data:"building",title:"車位位置"},{data:"room",title:"車位號碼",className:"text-center"},{data:"rate",title:"預設<br class='d-none d-lg-block'>服務費/月"},{data:"adminNote",title:"管理備註"},{data:"closeDate",title:"最後停用日"},{data:"id",title:"歷史<br class='d-none d-lg-block'>紀錄",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#parkingSpace_DetailsModel" data-id="'+t+'"><i class="fa-solid fa-book"></i></button>'}},{data:"id",title:"再次<br class='d-none d-lg-block'>上架",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="'+t+'"><i class="fa-solid fa-arrow-rotate-left"></i></button>'}}],columnDefs:[{targets:[1],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[5],responsivePriority:3},{searchable:!1,orderable:!1,targets:[6,7]},{className:"text-nowrap",targets:[0,1,2,3,5]},{className:"text-lg-center",targets:[0,5,6,7]}],createdRow:function(a,t,e){[6,7].forEach(function(t){$("td:eq("+t+")",a).css("max-width","70px")}),[0,3,5].forEach(function(t){$("td:eq("+t+")",a).css("font-size",".95em")}),$("td:eq(3)",a).addClass("pe-3")}}),$("#parkingSpace_DetailsModel").on("show.bs.modal",function(t){t=$(t.relatedTarget);let a=String(t.data("id"));t=dataset_parkingSpaceAll.find(t=>t.id===a);t?($("#venderBox").hide(),$("#PS_building").text(t.building),$("#PS_basementNum").text(t.basementNum),$("#PS_rate").text(t.rate),$("#PS_carType").text(t.carType),$("#PS_adminNote").text(t.adminNote),$("#PS_createBy").text(t.createBy),$("#PS_createDate").text(t.createDate),"啟用"===t.status&&($("#venderBox").show(),$("#PS_companyName").text(t.company),$("#PS_startDate").text(t.startDate),$("#PS_endDate").text(t.endDate),$("#PS_applicant").text(t.name),$("#PS_licensePlateNum").text(t.licensePlateNum))):console.error("parkingSpaceData data not found for id:",a)})});