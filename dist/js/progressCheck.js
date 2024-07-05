var dataset_progressCheck=[{id:"1",createDate:"2024-07-01",type:"汽車位",isReprint:"",isRenew:"續約",itemNum:"B1-01",paymentDate:"2024-07-07",name:"孫小美",status:"",remittanceFile:"20240710RF2"},{id:"2",createDate:"2024-06-15",type:"機車位",name:"孫中美",itemNum:"首次申請",paymentDate:"",status:"待補件。匯款證明",remittanceFile:"20240710RF1"},{id:"3",createDate:"2024-06-25",type:"識別證",name:"孫大美",itemNum:"申請補發",paymentDate:"2024-07-02",status:"通過",remittanceFile:"20240710RF3"},{id:"4",createDate:"2024-07-10",type:"汽車位",name:"王小明",itemNum:"首次申請",paymentDate:"2024-07-17",status:"不通過。使用者取消。",remittanceFile:""},{id:"5",createDate:"2024-07-03",type:"機車位",name:"陳美麗",itemNum:"續約：B3-01",paymentDate:"2024-07-09",status:"已到帳，待審核",remittanceFile:"20240710RF2"},{id:"6",createDate:"2024-06-20",type:"識別證",name:"李美麗",itemNum:"首次申請",paymentDate:"2024-06-26",status:"通過",remittanceFile:"20240710RF1"},{id:"7",createDate:"2024-06-28",type:"培育室",name:"好棒棒股份有限公司",itemNum:"續約：培育室",paymentDate:"",status:"待補件。繳費證明",remittanceFile:"20240710RF5"}];$(function(){var t=session_userData;$("#company").val(t.company);let a=$("#progressCheckList").DataTable({...commonSettingsTable,data:dataset_progressCheck,columns:[{data:"id",title:'<i class="fa-regular fa-square-check"></i>',render:function(t,e,a,n){return'<input type="checkbox" class="form-check-input border-primary application-checkbox" value='+t+">"}},{data:"createDate",title:"申請日期"},{data:"name",title:"申請人姓名"},{data:"type",title:"申請項目"},{data:"itemNum",title:"項目註記"},{data:"paymentDate",title:"付帳日"},{data:"status",title:"審核進度"},{data:"id",title:"匯款<br>憑證",render:function(t,e,a){return a.paymentDate?'<button type="button" class="btn btn-light rounded-circle remittance_voucher align_center reuploadRemittance" title="再次上傳匯款憑證" data-id="'+t+'"><i class="fa-solid fa-money-check-dollar"></i></button>':'<button type="button" class="btn btn-outline-primary rounded-circle remittance_voucher align_center uploadRemittance" title="上傳匯款憑證" data-bs-toggle="modal" data-bs-target="#remittanceModal" data-id="'+t+'"><i class="fa-solid fa-money-check-dollar"></i></button>'},className:"text-center text-nowrap"}],order:[[1,"desc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[3],responsivePriority:3},{searchable:!1,orderable:!1,targets:[0,7]},{className:"text-center",targets:[0,1,3,5]},{className:"text-nowrap",targets:[0,1,2,3,4,5,6]}],createdRow:function(e,t,a){$("td:eq(8)",e).css("min-width","70px"),$("td:eq(6)",e).css("min-width","200px"),[1,5].forEach(function(t){$("td:eq("+t+")",e).css("min-width","130px").css("font-size",".95em")})}});$("#deleteTheseApplication").click(function(){let e=[];a.rows().every(function(){var t=this.node();$(t).find(".application-checkbox").prop("checked")&&(t=this.data(),e.push(t.id))}),0===e.length?swalToastWarning("請先勾選欲取消的申請紀錄。","top"):console.log(e)}),$(".uploadRemittance, .reuploadRemittance").click(function(t){$("#danger_last5AccountNo").text(""),$("#danger_paymentDate").text(""),$("#danger_paymentAmount").text("");var e,a=$(this);let n=a.data("id");n?(e=dataset_progressCheck.find(t=>t.id==n))?($("#type").val(e.type),$("#dataId").val(e.id),a.hasClass("reuploadRemittance")&&(t.preventDefault(),swalConfirm("曾填過匯款通知，要再填一次嗎?","對，我要重新填寫上傳。","不，回到上一步。",function(){$("#remittanceModal").modal("show")}))):console.error("progress data not found for id:",n):console.error("progress ID not found in URL")}),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#remittanceSubmit").click(function(t){checkRequiredElements()?checkDangerElements()?console.log("表單資料已送出"):swalToastWarning("請填上正確資料唷！","top"):swalToastWarning("請將必填欄位填上正確資料唷！","top")})});