$(function(){$("#idCard_List").DataTable({...commonSettingsTable,data:dataset_idCardAll,columns:[{data:"createDate",title:"建立日期"},{data:"idCardNum",title:"識別證<br class='d-none d-lg-block'>號碼",className:"text-center"},{data:"company",title:"所屬公司"},{data:"name",title:"使用者<br class='d-none d-lg-block'>姓名"},{data:"print",title:"補發<br class='d-none d-lg-block'>次數",render:function(t){var e=Number(t)-1;return 1==t?"-":e}},{data:"status",title:"狀態"},{data:"readLibrary",title:"圖書館<br class='d-none d-lg-block'>閱覽"},{data:"adminNote",title:"管理備註"},{data:"returnDate",title:"收回日期"},{data:"id",title:"修改",render:function(t){return'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="../ID_Card/Edit/'+t+'"><i class="fa-solid fa-wrench"></i></a>'}},{data:"status",visible:!1,render:function(t,e,a){return"停用未收回"==t?"0":"使用中"==t?"1":"已收回"==t?"9":"6"}}],columnDefs:[{targets:[0],responsivePriority:1},{targets:[2],responsivePriority:2},{targets:[3],responsivePriority:3},{searchable:!1,orderable:!1,targets:[9,10]},{className:"text-nowrap",targets:[0,1,4,5,6,8]},{className:"text-lg-center",targets:[0,1,4,8,9]}],order:[[10,"asc"],[1,"desc"]],createdRow:function(e,t,a){"已收回"!=t.status&&"遺失"!=t.status||$("td",e).css("color","#999"),$("td:eq(9)",e).css("max-width","70px"),$("td:eq(2)",e).css("min-width","180px"),[0,4,5,6,8].forEach(function(t){$("td:eq("+t+")",e).css("font-size",".85rem")})}})});