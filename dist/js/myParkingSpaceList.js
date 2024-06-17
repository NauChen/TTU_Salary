var dataset_myParkingSpaceHistory=[{paymentDate:"2024-01-30",type:"汽車",parkingSpaceNum:"B4-30",name:"陳凱富",licensePlateNum:"0869-RE",endDate:"2024-02-29",remark:"-",id:"1"},{paymentDate:"2024-02-15",type:"機車",parkingSpaceNum:"B5-1",name:"陳昭嫺",licensePlateNum:"X-8470",endDate:"2024-03-15",remark:"-",id:"2"},{paymentDate:"2024-03-05",type:"汽車",parkingSpaceNum:"B6-12",name:"林雅惠",licensePlateNum:"4823-JF",endDate:"2024-04-05",remark:"-",id:"3"},{paymentDate:"2024-04-10",type:"機車",parkingSpaceNum:"B7-5",name:"張文成",licensePlateNum:"2-9685",endDate:"2024-05-10",remark:"-",id:"4"},{paymentDate:"2024-05-25",type:"汽車",parkingSpaceNum:"B8-21",name:"許美玲",licensePlateNum:"7219-LK",endDate:"2024-06-25",remark:"-",id:"5"},{paymentDate:"2024-06-02",type:"機車",parkingSpaceNum:"B9-8",name:"黃佩樺",licensePlateNum:"7-Y245",endDate:"2024-07-02",remark:"-",id:"6"},{paymentDate:"2024-07-20",type:"汽車",parkingSpaceNum:"B10-18",name:"劉建宏",licensePlateNum:"5390-ZP",endDate:"2024-08-20",remark:"-",id:"7"},{paymentDate:"2024-08-12",type:"機車",parkingSpaceNum:"B11-3",name:"吳明憲",licensePlateNum:"9-5012",endDate:"2024-09-12",remark:"-",id:"8"},{paymentDate:"2024-09-28",type:"汽車",parkingSpaceNum:"B12-9",name:"蔡淑芬",licensePlateNum:"4825-NX",endDate:"2024-10-28",remark:"-",id:"9"},{paymentDate:"2024-10-15",type:"機車",parkingSpaceNum:"B13-6",name:"陳芳儀",licensePlateNum:"6-X084",endDate:"2024-11-15",remark:"-",id:"10"},{paymentDate:"2024-11-05",type:"汽車",parkingSpaceNum:"B14-28",name:"葉文祥",licensePlateNum:"1265-DK",endDate:"2024-12-05",remark:"-",id:"11"},{paymentDate:"2024-12-18",type:"機車",parkingSpaceNum:"B15-10",name:"劉惠珍",licensePlateNum:"3-L769",endDate:"2025-01-18",remark:"-",id:"12"},{paymentDate:"2025-01-25",type:"汽車",parkingSpaceNum:"B16-15",name:"林秋美",licensePlateNum:"9274-BH",endDate:"2025-02-25",remark:"-",id:"13"},{paymentDate:"2025-02-14",type:"機車",parkingSpaceNum:"B17-2",name:"張雅婷",licensePlateNum:"7-V821",endDate:"2025-03-14",remark:"-",id:"14"},{paymentDate:"2025-03-08",type:"汽車",parkingSpaceNum:"B18-25",name:"郭大偉",licensePlateNum:"6841-MG",endDate:"2025-04-08",remark:"-",id:"15"},{paymentDate:"2025-04-22",type:"機車",parkingSpaceNum:"B19-4",name:"陳志明",licensePlateNum:"1-Q525",endDate:"2025-05-22",remark:"-",id:"16"},{paymentDate:"2025-05-10",type:"汽車",parkingSpaceNum:"B20-13",name:"王美玲",licensePlateNum:"9406-CP",endDate:"2025-06-10",remark:"-",id:"17"},{paymentDate:"2025-06-29",type:"機車",parkingSpaceNum:"B21-7",name:"林志豪",licensePlateNum:"8-N012",endDate:"2025-07-29",remark:"-",id:"18"},{paymentDate:"2025-07-15",type:"汽車",parkingSpaceNum:"B22-20",name:"楊惠君",licensePlateNum:"1782-QR",endDate:"2025-08-15",remark:"-",id:"19"},{paymentDate:"2024-05-09",type:"機車",parkingSpaceNum:"B23-12",name:"陳建宏",licensePlateNum:"5-H953",endDate:"2024-06-10",remark:"-",id:"20"}];$(function(){let t=new Date;dataset_myParkingSpaceHistory.forEach(e=>{var a=new Date(e.endDate).getTime()-t.getTime(),a=Math.ceil(a/864e5);e.diffDays=a<0?null:-1*a}),$("#myParkingSpaceList").DataTable({...commonSettingsProvision,layout:{topStart:function(){var e=document.createElement("div");return e.innerHTML='<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>若要續用，請於車位到期前申請續約。</h6>',e}},data:dataset_myParkingSpaceHistory,columns:[{data:"paymentDate",title:"付款日"},{data:"type",title:"車位類型"},{data:"parkingSpaceNum",title:"車位號碼"},{data:"name",title:"登記使用人"},{data:"licensePlateNum",title:"車牌號碼"},{data:"endDate",title:"到期日"},{data:"remark",title:"備註"},{data:"id",title:"續約",render:function(e,a,t){t=t.diffDays;return null===t?'<button type="button" class="btn btn-light rounded-circle btn-sm oneWord cursor_default" title="續約時間已過"><i class="fa-solid fa-hourglass-end"></i></button>':-10<=t?'<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./parkingSpace_edit.html?id='+e+'" title="立即續約"><i class="fa-solid fa-repeat"></i></a>':'<button type="button" class="btn btn-light rounded-circle btn-sm oneWord cursor_default" title="續約時間未到"><i class="fa-solid fa-hourglass-half"></i></button>'}},{data:"diffDays",visible:!1}],order:[[8,"desc"]],columnDefs:[{targets:[0],responsivePriority:1},{targets:[1],responsivePriority:2},{targets:[2],responsivePriority:3},{targets:[6],className:"text-start"},{searchable:!1,orderable:!1,targets:[7]},{className:"text-center",targets:[0,1,2,3,4,5,7]}],createdRow:function(a,e,t){[0,5].forEach(function(e){$("td:eq("+e+")",a).css("font-size",".95em")}),[0,1,2,4,5].forEach(function(e){$("td:eq("+e+")",a).addClass("text-nowrap")}),$("td:eq(6)",a).css("min-width","200px"),[7].forEach(function(e){$("td:eq("+e+")",a).css("max-width","70px")})}}),$('[data-bs-toggle="tooltip"]').tooltip()});