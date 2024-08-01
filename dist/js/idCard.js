var dataset_idCardAll=[{id:"1",createDate:"2024-07-01",company:"超級棒股份有限公司",name:"孫小美",deactivationDate:"2024-08-30",status:"申請遺失補發",phone:"02-81234567",email:"sunxiaomei@example.com",emergContact:"李小華",ECPhone:"0912345678",idCardPhoto:"20240701ID1",readLibrary:"申請",adminNote:"",print:"1",idCardNum:"ID00000001",returnDate:"遺失"},{id:"2",createDate:"2024-07-02",company:"智力科技有限公司",name:"王大明",deactivationDate:"2024-07-03",status:"已停用",phone:"02-82345678",email:"wangdameng@example.com",idCardPhoto:"20240702ID2",emergContact:"陳美麗",ECPhone:"0918-765432",readLibrary:"不申請",adminNote:"",print:"2",receiptNum:"RN000005",idCardNum:"ID00000002",returnDate:""},{id:"3",createDate:"2024-07-03",company:"光速物流有限公司",name:"李志偉",deactivationDate:"2024-07-04",status:"已停用",phone:"02-83456789",email:"lizhiwei@example.com",idCardPhoto:"20240703ID3",emergContact:"張建國",ECPhone:"0912-341234",readLibrary:"申請",adminNote:"申請順利通過",print:"1",receiptNum:"RN000004",idCardNum:"ID00000003",returnDate:""},{id:"4",createDate:"2024-07-04",company:"鴻海電子有限公司",name:"劉敏",deactivationDate:"",status:"使用中",phone:"02-84567890",email:"liumin@example.com",idCardPhoto:"20240704ID4",emergContact:"林月嬌",ECPhone:"0915-678901",readLibrary:"不申請",adminNote:"需補交簽名文件",print:"3",receiptNum:"RN000003",idCardNum:"ID00000004",returnDate:""},{id:"5",createDate:"2024-07-05",company:"百思買有限公司",name:"周海",deactivationDate:"2023-12-01",status:"已停用",phone:"02-85678901",email:"zhouhai@example.com",idCardPhoto:"20240705ID5",emergContact:"趙雪芬",ECPhone:"0916-789012",readLibrary:"申請",adminNote:"審核通過，發送通知",print:"2",receiptNum:"RN000002",idCardNum:"ID00000005",returnDate:"2023-12-10"}];$(function(){$("#idCard_List").DataTable({...commonSettingsTable,data:dataset_idCardAll,columns:[{data:"createDate",title:"建立日期"},{data:"idCardNum",title:"識別證號碼",className:"text-center"},{data:"company",title:"所屬公司"},{data:"name",title:"姓名"},{data:"print",title:"補發<br class='d-none d-lg-block'>次數",render:function(e){var a=Number(e)-1;return 1==e?"-":a}},{data:"status",title:"狀態"},{data:"readLibrary",title:"圖書館<br class='d-none d-lg-block'>閱覽"},{data:"adminNote",title:"管理備註"},{data:"returnDate",title:"收回日期"},{data:"id",title:"修改",render:function(e){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./parkingSpaceEdit.html?id='+e+'"><i class="fa-solid fa-wrench"></i></a>'}},{data:"deactivationDate",render:function(e,a,t){return e?t.returnDate?"停用已收回":e:"沒停用"}}],columnDefs:[{targets:[0],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[3],responsivePriority:3},{searchable:!1,orderable:!1,targets:[9]},{className:"text-nowrap",targets:[0,1,2,4,5]},{className:"text-lg-center",targets:[5,7,8]}],order:[[10,"desc"],[3,"asc"]],createdRow:function(a,e,t){[7,8].forEach(function(e){$("td:eq("+e+")",a).css("max-width","70px")}),$("td:eq(2)",a).addClass("pe-3"),[0,5].forEach(function(e){$("td:eq("+e+")",a).css("min-width","100px").css("font-size",".95rem")})}})});