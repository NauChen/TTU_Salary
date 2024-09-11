var dataset_idCardAll=[{id:"1",idCardNum:"ID00000001",company:"超級棒股份有限公司",name:"孫小美",print:"1",status:"遺失",readLibrary:"開放",createDate:"2024-07-01",adminNote:"",deactivationDate:"2024-08-30",returnDate:"X"},{id:"2",idCardNum:"ID00000002",company:"智力科技有限公司",name:"王大明",print:"2",status:"停用",readLibrary:"不開放",createDate:"2024-07-02",adminNote:"",deactivationDate:"2024-07-03",returnDate:""},{id:"3",idCardNum:"ID00000003",company:"光速物流有限公司",name:"李志偉",print:"1",status:"停用",readLibrary:"開放",createDate:"2024-07-03",adminNote:"",deactivationDate:"2024-07-04",returnDate:"2024-07-06"},{id:"4",idCardNum:"ID00000004",company:"鴻海電子有限公司",name:"劉敏勳",print:"3",status:"使用中",readLibrary:"不開放",createDate:"2024-07-04",adminNote:"",deactivationDate:"",returnDate:""},{id:"5",idCardNum:"ID00000005",company:"百思買有限公司",name:"周海媚",print:"2",status:"停用",readLibrary:"開放",createDate:"2024-07-05",adminNote:"",deactivationDate:"2023-12-01",returnDate:"2023-12-10"}];$(function(){$("#idCard_List").DataTable({...commonSettingsTable,data:dataset_idCardAll,columns:[{data:"createDate",title:"建立日期"},{data:"idCardNum",title:"識別證<br class='d-none d-lg-block'>號碼",className:"text-center"},{data:"company",title:"所屬公司"},{data:"name",title:"使用者<br class='d-none d-lg-block'>姓名"},{data:"print",title:"補發<br class='d-none d-lg-block'>次數",render:function(t){var a=Number(t)-1;return 1==t?"-":a}},{data:"status",title:"狀態"},{data:"readLibrary",title:"圖書館<br class='d-none d-lg-block'>閱覽"},{data:"adminNote",title:"管理備註"},{data:"returnDate",title:"收回日期"},{data:"id",title:"修改",render:function(t){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./parkingSpaceEdit.html?id='+t+'"><i class="fa-solid fa-wrench"></i></a>'}}],columnDefs:[{targets:[0],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[3],responsivePriority:3},{searchable:!1,orderable:!1,targets:[9]},{className:"text-nowrap",targets:[0,1,2,4,5]},{className:"text-lg-center",targets:[0,1,4,5,6,8,9]}],order:[[5,"asc"],[8,"asc"],[1,"desc"]],createdRow:function(t,a,e){"遺失"==a.status&&$("td",t).css("color","#999"),"停用"==a.status&&a.returnDate&&$("td",t).css("color","#999"),$("td:eq(9)",t).css("max-width","70px")}})});