function syncInputValue(e,t){$("#"+e).on("blur",function(){var e=$(this).val();$("#"+t).text(e)})}function syncInputDate(e,a,i,o){var t,n,c;"toDay"===e?(t=new Date,n=(t=t).getFullYear(),c=String(t.getMonth()+1).padStart(2,"0"),t=String(t.getDate()).padStart(2,"0"),$("#"+a).text(n),$("#"+i).text(c),$("#"+o).text(t)):$("#"+e).on("blur",function(){var e,t,n=$(this).val();n?(e=(n=n.split("-"))[0],t=n[1],n=n[2],$("#"+a).text(e),$("#"+i).text(t),$("#"+o).text(n)):console.error("The date input is empty or invalid.")})}function syncSelectValue(e,n,a){$("#"+e).on("blur change",function(){var e=$(this).find("option:selected"),t=e.val(),e=e.closest("optgroup").attr("label"),e=changeRoomName(e);$("#"+n).text(e),$("#"+a).text(t)})}function syncInputRadio(e,t,n,a){function i(){$("#"+e).is(":checked")?($("#"+n).html("&#9745;"),$("#"+a).html("&#9744;")):$("#"+t).is(":checked")&&($("#"+n).html("&#9744;"),$("#"+a).html("&#9745;"))}$("#"+e+", #"+t).on("change",i),i()}function syncInputRadioYesValue(e,t,n,a,i,o){function c(){$("#"+e).is(":checked")?($("#"+n).html("&#9745;"),$("#"+a).html("&#9744;"),$("#"+i).prop("disabled",!1).addClass("thisRequired"),syncInputValue(i,o)):$("#"+t).is(":checked")&&($("#"+n).html("&#9744;"),$("#"+a).html("&#9745;"),$("#"+i).prop("disabled",!0).val("").removeClass("thisRequired"),$("#danger_"+i).text(""),$("#"+o).html(""))}$("#"+e+", #"+t).on("change",c),c()}function syncInputRadioNoValue(e,t,n,a,i,o){function c(){$("#"+e).is(":checked")?($("#"+n).html("&#9745;"),$("#"+a).html("&#9744;"),$("#"+i).prop("disabled",!0).val("").removeClass("thisRequired"),$("#danger_"+i).text(""),$("#"+o).html("")):$("#"+t).is(":checked")&&($("#"+n).html("&#9744;"),$("#"+a).html("&#9745;"),$("#"+i).prop("disabled",!1).addClass("thisRequired"),syncInputValue(i,o))}$("#"+e+", #"+t).on("change",c),c()}function syncInputCheckbox(e,t){$("#"+e).on("change",function(){$("#"+e).is(":checked")?$("#"+t).html("&#9745;"):$("#"+t).html("&#9744;")})}function syncNumberWithCommas(e,t){$("#"+e).on("blur",function(){var e=$(this).val();e&&(e=Number(e).toLocaleString("en"),$("#"+t).text(e))})}function openFile(e){var e=e.target,t=new FileReader;t.readAsDataURL(e.files[0]),t.onload=function(){var e=t.result;$("#output_img").attr("src",e).show(),$("#output_text").attr("src",e).hide()}}$(document).on("click","#printAndSubmit",function(){var e=$("section"),t=$("#printWrapper").detach();e.append(t),window.print(),e.empty(),$("#returnThisBox").append(t)}),$(function(){var a=$("#croppie-container"),i=($("#croppie-container").hide(),$("#crop_img").hide(),$("#warning_parkingSpaceImg").hide(),null),n=null;function e(e,t,n){$("#croppie-container").show(),i=i||new Croppie(a[0],{viewport:{width:t,height:n,type:"square"},boundary:{width:500,height:400},enableResize:!1,enableOrientation:!0});t=new FileReader;t.onload=function(e){i.bind({url:e.target.result})},t.readAsDataURL(e.files[0])}function t(){i&&(i.destroy(),i=null),a.hide(),$("#crop_img").hide(),$("#newImg").html(""),$("#car_upload_label").show(),$("#bike_upload_label").show(),$("#parkingSpaceType").val(""),$("#danger_parkingSpaceImg").show(),$("#warning_parkingSpaceImg").hide()}$("#upload_car_img").on("change",function(){n="car",t(),e(this,480,306),$("#bike_upload_label").hide(),$("#car_upload_label").show(),$("#parkingSpaceType").val("汽車"),$("#crop_img").show()}),$("#upload_moto_img").on("change",function(){n="bike",t(),e(this,240,306),$("#car_upload_label").hide(),$("#bike_upload_label").show(),$("#parkingSpaceType").val("機車"),$("#crop_img").show()}),$("#crop_img").on("click",function(e){e.preventDefault();e="car"===n?480:240;i.result({type:"canvas",size:{width:e,height:306},format:"jpeg",quality:.85}).then(function(e){var t=n;t="car"===n?"80%":"40%",$("#newImg").html('<img src="'+e+'" class="img-thumbnail" style="width: '+t+';">'),$("#danger_parkingSpaceImg").hide(),$("#warning_parkingSpaceImg").show()})}),$("#resetPSFormBtn").on("click",function(){t()})});