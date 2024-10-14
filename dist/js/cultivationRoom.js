$(function(){var t=dataset_cultivationRoomAll.filter(t=>"啟用"===t.status),e=dataset_cultivationRoomAll.filter(t=>"停用"===t.status);$("#cultivationRoom_OpenList").DataTable({...commonSettingsTable,data:t,columns:[{data:"building",title:"培育區域"},{data:"room",title:"培育室"},{data:"squareMeters",title:"坪數"},{data:"rate",title:"預設<br class='d-none d-lg-block'>服務費/月"},{data:"company",title:"培育企業"},{data:"endDate",title:"培育到期日"},{data:"adminNote",title:"管理備註"},{data:"id",title:"詳情",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#cultivationRoom_DetailsModel" data-id="'+t+'"><i class="fa-solid fa-info px-1"></i></button>'}},{data:"id",title:"修改",render:function(t){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord btnThrottle" href="/CultivationRoom/Edit/'+t+'"><i class="fa-solid fa-wrench"></i></a>'}}],order:[[0,"desc"],[1,"asc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[4],responsivePriority:3},{searchable:!1,orderable:!1,targets:[7,8]},{className:"text-nowrap",targets:[0,1,2,3,5]},{className:"text-lg-center",targets:[1,5,7,8]}],createdRow:function(e,t,a){[7,8].forEach(function(t){$("td:eq("+t+")",e).css("max-width","70px")}),[0,2,5].forEach(function(t){$("td:eq("+t+")",e).css("font-size",".95rem")}),$("td:eq(4)",e).css("min-width","250px"),[2,3].forEach(function(t){$("td:eq("+t+")",e).addClass("pe-3")})}}),$("#cultivationRoom_CloseList").DataTable({...commonSettingsTable,data:e,columns:[{data:"createDate",title:"培育室<br class='d-none d-lg-block'>建立日期"},{data:"building",title:"培育區域"},{data:"room",title:"培育室"},{data:"squareMeters",title:"坪數"},{data:"rate",title:"預設<br class='d-none d-lg-block'>服務費/月"},{data:"adminNote",title:"管理備註"},{data:"removeDate",title:"最後<br class='d-none d-lg-block'>停用日"},{data:"id",title:"歷史<br class='d-none d-lg-block'>紀錄",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#cultivationRoom_DetailsModel" data-id="'+t+'"><i class="fa-solid fa-book"></i></button>'}},{data:"id",title:"再次<br class='d-none d-lg-block'>上架",render:function(t){return'<button type="button" class="btn btn-outline-primary rounded-circle btn-sm reactivateBtn btnThrottle" data-id="'+t+'"><i class="fa-solid fa-arrow-rotate-left"></i></button>'}}],columnDefs:[{targets:[1],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[6],responsivePriority:3},{searchable:!1,orderable:!1,targets:[7,8]},{className:"text-nowrap",targets:[0,2,3,4,6]},{className:"text-lg-center",targets:[0,2,6,7,8]}],createdRow:function(e,t,a){$("td:eq(1)",e).addClass("ps-3").css("min-width","180px"),[0,6].forEach(function(t){$("td:eq("+t+")",e).css("font-size",".95em")}),[7,8].forEach(function(t){$("td:eq("+t+")",e).css("max-width","70px")}),[3,4].forEach(function(t){$("td:eq("+t+")",e).addClass("pe-3")})}}),$("#cultivationRoom_DetailsModel").on("show.bs.modal",function(t){t=$(t.relatedTarget);let e=String(t.data("id"));console.log("thisRoom Id:",e);t=dataset_cultivationRoomAll.find(t=>t.id===e);t?($("#venderBox").hide(),$("#CR_building").text(t.building),$("#CR_room").text(t.room),$("#CR_rate").text(t.rate),$("#CR_squareMeters").text(t.squareMeters),$("#CR_adminNote").text(t.adminNote),$("#CR_createBy").text(t.createBy),$("#CR_createDate").text(t.createDate),"啟用"===t.status&&($("#venderBox").show(),$("#CR_companyName").text(t.company),$("#CR_startDate").text(t.startDate),$("#CR_endDate").text(t.endDate),$("#CR_responsiblePerson").text(t.responsiblePerson))):console.error("thisRoomData data not found for id:",e);let a;$.ajax({url:roomHistoryUrl,method:"POST",data:{thisRoomId:e},success:function(t){a=t.dataset_cultivationRoomHistory,console.log("dataset_cultivationRoomHistory:",a),$("#roomHistoryList").DataTable().clear().destroy(),$("#roomHistoryList").DataTable({...commonSettingsHistory,data:a,columns:[{data:"createDate",title:"紀錄日期"},{data:"squareMeters",title:"坪數"},{data:"rate",title:"服務費"},{data:"startDate",title:"培育開始"},{data:"endDate",title:"培育結束"},{data:"company",title:"培育企業"},{data:"remark",title:"操作紀錄",render:function(t,e,a){return"display"===e?t:t.replace(/<br\/>/g,"\n")}},{data:"createBy",title:"操作者"}]})},error:function(t){console.log("錯誤:",t)}})}),$(".reactivateBtn").on("click",function(){var t=$(this).data("id");$.ajax({url:reactivateUrl,type:"POST",data:{id:t},success:function(t){swalToastSuccess(t.message,"top"),setTimeout(function(){location.reload()},2300)},error:function(t,e,a){console.error("Error:",a),swalToastWarning("啟用時發生錯誤，請稍後再試。","top")}})})});