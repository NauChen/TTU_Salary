function syncInputValue(t,e){$("#"+t).on("blur",function(){var t=$(this).val();$("#"+e).text(t)})}function syncInputDate(t,n,o,i){$("#"+t).on("blur",function(){var t=$(this).val().split("-"),e=t[0],a=t[1],t=t[2];$("#"+n).text(e),$("#"+o).text(a),$("#"+i).text(t)})}function syncSelectValue(t,a,n){$("#"+t).on("blur change",function(){var t=$(this).find("option:selected"),e=t.val(),t=changeRoomName(t.closest("optgroup").attr("label"));$("#"+a).text(t),$("#"+n).text(e)})}function changeRoomName(t){switch(t){case"青創基地":return"新德惠";case"綜合工廠培育區":return"綜合";case"挺生大樓培育區":return"挺生";case"產學實驗培育區":return"產學";case"實驗大樓培育區":return"實驗";case"北設工培育區":return"北設工";case"尚志大樓培育區":return"尚志";default:return"待新增"}}$(document).on("click",".print",function(){var t=$("section"),e=$(".modal-body").detach();t.append(e),window.print(),t.empty(),$(".modal-body-wrapper").append(e)}),$(function(){var n=$("#croppie-container"),o=($("#croppie-container").hide(),$("#crop_img").hide(),null),a=null;function t(t,e,a){$("#croppie-container").show(),o=o||new Croppie(n[0],{viewport:{width:e,height:a,type:"square"},boundary:{width:500,height:400},enableResize:!1,enableOrientation:!0});e=new FileReader;e.onload=function(t){o.bind({url:t.target.result})},e.readAsDataURL(t.files[0])}function e(){o&&(o.destroy(),o=null),n.hide(),$("#crop_img").hide(),$("#newImg").html(""),$("#car_upload_label").show(),$("#bike_upload_label").show(),$("#confirm_parkingSpaceApp").removeAttr("data-bs-toggle").removeAttr("data-bs-target")}$("#upload_car_img").on("change",function(){a="car",e(),t(this,529,360),$("#bike_upload_label").hide(),$("#car_upload_label").show(),$("#crop_img").show()}),$("#upload_moto_img").on("change",function(){a="bike",e(),t(this,264.5,360),$("#car_upload_label").hide(),$("#bike_upload_label").show(),$("#crop_img").show()}),$("#crop_img").on("click",function(t){t.preventDefault();t="car"===a?529:264.5;o.result({type:"canvas",size:{width:t,height:360},format:"jpeg",quality:.85}).then(function(t){var e=a;e="car"===a?"100%":"50%",$("#newImg").html('<img src="'+t+'" class="img-thumbnail" style="width: '+e+';">'),$("#confirm_parkingSpaceApp").attr("data-bs-toggle","modal").attr("data-bs-target","#parkingSpaceApp_pdf")})}),$("#confirm_parkingSpaceApp").on("click",function(t){$(this).attr("data-bs-toggle")&&$(this).attr("data-bs-target")||(t.preventDefault(),alert("請先上傳行照內頁並裁剪至指定大小"))}),$('button[type="reset"]').on("click",function(){e()})});