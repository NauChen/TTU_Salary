var dataset_cultivationRoomOpen=[{id:"1",building:"青創基地",room:"101-A",company:"馳晶科技股份有限公司",rate:"80,000",status:"已培育",squareMeters:"12.5",adminNote:"共用空間-A",startDate:"2024-01-05",endDate:"2025-01-05",responsiblePerson:"郝有錢",createBy:"王小明",createDate:"2023-01-15"},{id:"2",building:"綜合工廠培育區",room:"A4-102",company:"羿安整合行銷股份有限公司",rate:"12,000",status:"已培育",squareMeters:"10.5",adminNote:"",startDate:"2024-01-05",endDate:"2025-01-05",responsiblePerson:"張有錢",createBy:"王小明",createDate:"2023-01-15"},{id:"3",building:"挺生大樓培育區",room:"714",company:"博濟施生技股份有限公司",rate:"6,000",status:"已培育",squareMeters:"10.0",adminNote:"R101、R104、R105 三間培育室每月輔導服務費合算80,000元",startDate:"2024-01-05",endDate:"2025-01-05",responsiblePerson:"李有錢",createBy:"王小明",createDate:"2023-01-15"},{id:"4",building:"產學實驗培育區",room:"101",company:"品庠醫藥生技股份有限公司",rate:"30,000",status:"已培育",squareMeters:"17.4",adminNote:"",startDate:"2024-01-05",endDate:"2025-01-05",responsiblePerson:"周有錢",createBy:"周小明",createDate:"2023-01-15"},{id:"5",building:"青創基地",room:"101-B",company:"馳晶科技股份有限公司",rate:"80,000",status:"已培育",squareMeters:"12.5",adminNote:"共用空間-B",startDate:"2024-01-05",endDate:"2025-01-05",responsiblePerson:"吳有錢",createBy:"孫小明",createDate:"2023-01-15"}],dataset_cultivationRoomClose=[{id:"1",createDate:"2019-01-01",building:"青創基地",room:"101",squareMeters:"10.0",rate:"80,000",removeDate:"2021-01-01",adminNote:"分區域A",createBy:"孫小美",removeBy:"李小光"},{id:"2",createDate:"2020-05-01",building:"綜合工廠培育區",room:"A4-102",squareMeters:"9.0",rate:"12,000",removeDate:"2021-05-01",adminNote:"分區域A",createBy:"孫小美",removeBy:"李小光"},{id:"3",createDate:"2020-05-01",building:"綜合工廠培育區",room:"A4-102",squareMeters:"9.0",rate:"12,000",removeDate:"2021-05-01",adminNote:"R101、R104、R105 三間培育室每月輔導服務費合算80,000元",createBy:"孫小美",removeBy:"李小光"}],dataset_roomHistoryListOpen=[{createDate:"2019-01-19",squareMeters:"56.4",rate:"30,000",startDate:"",endDate:"",company:"",remark:"啟用",createBy:"王大明"},{createDate:"2019-08-20",squareMeters:"56.4",rate:"1,300,000",startDate:"2019-09-01",endDate:"2020-08-31",company:"冠陞企業管理顧問股份有限公司",remark:"廠商進駐",createBy:"王大明"},{createDate:"2020-08-20",squareMeters:"56.4",rate:"1,300,000",startDate:"2020-09-01",endDate:"2021-08-31",company:"冠陞企業管理顧問股份有限公司",remark:"廠商進駐",createBy:"王大明"},{createDate:"2021-10-20",squareMeters:"20.2",rate:"",startDate:"",endDate:"",company:"",remark:"改坪數",createBy:"王大明"}],dataset_roomHistoryListClose=[{createDate:"2019-01-19",squareMeters:"56.4",rate:"30,000",startDate:"",endDate:"",company:"",remark:"啟用",createBy:"王大明"},{createDate:"2019-08-20",squareMeters:"56.4",rate:"1,300,000",startDate:"2019-09-01",endDate:"2020-08-31",company:"冠陞企業管理顧問股份有限公司",remark:"廠商進駐",createBy:"王大明"},{createDate:"2020-08-20",squareMeters:"56.4",rate:"1,300,000",startDate:"2020-09-01",endDate:"2021-08-31",company:"冠陞企業管理顧問股份有限公司",remark:"廠商進駐",createBy:"王大明"},{createDate:"2021-10-20",squareMeters:"20.2",rate:"",startDate:"",endDate:"",company:"",remark:"改坪數",createBy:"王大明"},{createDate:"2022-10-20",squareMeters:"20.2",rate:"",startDate:"",endDate:"",company:"",remark:"停用",createBy:"王大明"}];$(function(){$("#cultivationRoom_OpenList").DataTable({...commonSettingsTable,data:dataset_cultivationRoomOpen,columns:[{data:"building",title:"培育區域"},{data:"room",title:"培育室"},{data:"company",title:"培育企業"},{data:"rate",title:"服務費&ensp;/&ensp;月"},{data:"adminNote",title:"管理備註"},{data:"status",title:"當前狀態"},{data:"id",title:"詳情",render:function(e){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#openRoom_DetailsModel" data-id="'+e+'"><i class="fa-solid fa-info px-1"></i></button>'}},{data:"id",title:"修改",render:function(e){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html?id='+e+'"><i class="fa-solid fa-wrench"></i></a>'}}],order:[[0,"desc"],[1,"asc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[5],responsivePriority:3},{searchable:!1,orderable:!1,targets:[6,7]},{className:"text-nowrap",targets:[0,1,3,5]},{className:"text-center",targets:[1,5,6,7]}],createdRow:function(t,e,a){$("td:eq(0)",t).addClass("ps-3"),$("td:eq(3)",t).addClass("pe-4"),[6,7].forEach(function(e){$("td:eq("+e+")",t).css("max-width","70px")}),[3,5].forEach(function(e){$("td:eq("+e+")",t).css("min-width","130px")}),$("td:eq(0)",t).css("min-width","180px"),$("td:eq(2)",t).css("min-width","280px")}}),$("#cultivationRoom_CloseList").DataTable({...commonSettingsTable,data:dataset_cultivationRoomClose,columns:[{data:"createDate",title:"培育室<br>建立日期"},{data:"building",title:"培育區域"},{data:"room",title:"培育室"},{data:"squareMeters",title:"可用坪數"},{data:"rate",title:"服務費&ensp;/&ensp;月"},{data:"adminNote",title:"管理備註"},{data:"removeDate",title:"最後<br>停用日"},{data:"id",title:"歷史<br>紀錄",render:function(e){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_DetailsModel" data-id="'+e+'"><i class="fa-solid fa-clock-rotate-left"></i></button>'},className:"text-center"},{data:"id",title:"再次<br>上架",render:function(e){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="'+e+'"><i class="fa-solid fa-arrow-rotate-left"></i></button>'},className:"text-center"}],columnDefs:[{targets:[1],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[6],responsivePriority:3},{searchable:!1,orderable:!1,targets:[7,8]},{className:"text-nowrap",targets:[0,2,3,4,6]},{className:"text-center",targets:[0,2,6]}],createdRow:function(t,e,a){$("td:eq(1)",t).addClass("ps-3").css("min-width","180px"),[0,6].forEach(function(e){$("td:eq("+e+")",t).css("font-size",".95em")}),[7,8].forEach(function(e){$("td:eq("+e+")",t).css("max-width","70px")}),[3,4].forEach(function(e){$("td:eq("+e+")",t).addClass("pe-4")})}}),$("#roomHistoryList").DataTable({...commonSettingsHistory,data:dataset_roomHistoryListOpen}),$("#roomHistoryList2").DataTable({...commonSettingsHistory,data:dataset_roomHistoryListClose}),$("#openRoom_DetailsModel").on("show.bs.modal",function(e){e=$(e.relatedTarget);let t=String(e.data("id"));e=dataset_cultivationRoomOpen.find(e=>e.id===t);e?($("#building").text(e.building),$("#room").text(e.room),$("#rate").text(e.rate),$("#squareMeters").text(e.squareMeters),$("#companyName").text(e.company),$("#startDate").text(e.startDate),$("#endDate").text(e.endDate),$("#responsiblePerson").text(e.responsiblePerson),$("#adminNote").text(e.adminNote),$("#createBy").text(e.createBy),$("#createDate").text(e.createDate)):console.error("openRoomData data not found for id:",t)}),$("#closeRoom_DetailsModel").on("show.bs.modal",function(e){e=$(e.relatedTarget);let t=String(e.data("id"));e=dataset_cultivationRoomClose.find(e=>e.id===t);e?($("#close_building").text(e.building),$("#close_room").text(e.room),$("#close_rate").text(e.rate),$("#close_squareMeters").text(e.squareMeters),$("#close_adminNote").text(e.adminNote),$("#close_createDate").text(e.createDate),$("#close_createBy").text(e.createBy),$("#close_removeDate").text(e.removeDate),$("#close_removeBy").text(e.removeBy)):console.error("closeRoomData data not found for id:",t)})});