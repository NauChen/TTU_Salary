function checkTheEmail(){var e=$("#email").val();$.ajax({url:'@Url.Action("CheckEmail", "Account")',type:"POST",data:{email:e},success:function(e){var t=$(".checkEmail"),a=$(".partTwoBtn");switch(e){case"NoText":t.text("檢查").removeClass("invalid").removeClass("valid"),a.prop("disabled",!0);break;case!1:t.text("檢查").removeClass("invalid").addClass("valid"),a.prop("disabled",!1),checkRequiredGroup("partTwo","partTwoBtn");break;case!0:t.text("此Email已註冊過。").removeClass("valid").addClass("invalid"),a.prop("disabled",!0);break;default:t.text("Email格式不正確。").removeClass("valid").addClass("invalid"),a.prop("disabled",!0)}},error:function(e){console.log("發生錯誤！",e.responseText)}})}function checkRequired(){var e=$(this),t=e.attr("id"),t=$("label[for='"+t+"']").text(),a=$("#errorBox");""===e.val().trim()?a.text(t+" 是必填欄位，請填上歐！").addClass("show"):a.text("").removeClass("show")}function checkUpload(){var e=$(this),t=e.attr("id"),t=$("."+t).text(),a=$("#errorBox");""===e.val().trim()?a.text(t+" 是必需上傳的資料，請點擊檔案唷！").addClass("show"):a.text("").removeClass("show")}function checkRequiredGroup(e,t){var a=!0,r=$(".registerSubmit"),t=$("."+t);$("."+e).each(function(){if(""===$(this).val().trim())return a=!1}),a?(r.prop("disabled",!1),t.prop("disabled",!1)):(r.prop("disabled",!0),t.prop("disabled",!0))}function CreateYetRequired(){var e=!0,t=$(".registerSubmit"),a=$(".partOneBtn");($("#creationDateYet").is(":checked")?$(".partOne:not(#creationDate, #uniformNum)"):$(".partOne")).each(function(){if(""===$(this).val().trim())return e=!1}),e?(t.prop("disabled",!1),a.prop("disabled",!1)):(t.prop("disabled",!0),a.prop("disabled",!0))}function checkFilesRequiredGroup(e){var t=!0,a=$(".registerSubmit");$("."+e).each(function(){if(""===$(this).text().trim())return t=!1}),t?a.prop("disabled",!1):a.prop("disabled",!0)}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("creationDate"),t=document.getElementById("creationDateYet"),a=(new Date).toISOString().split("T")[0],r=(e.setAttribute("max",a),document.getElementById("uniformNum")),i=(t.addEventListener("change",function(){(t.checked?(e.value="",e.disabled=!0,r.value="",r.placeholder="後補",r.disabled=!0,t.setAttribute("asp-for","CreationDate"),e):(e.disabled=!1,r.placeholder="",r.disabled=!1,e.setAttribute("asp-for","CreationDate"),t)).removeAttribute("asp-for")}),document.getElementById("companyAdd")),n=document.getElementById("locationOfCompany"),o=document.getElementById("sameAdd");o.addEventListener("change",function(){o.checked&&(n.value=i.value)}),n.addEventListener("change",function(){o.checked=!1})}),$(document).ready(function(){$(".requiredItem").blur(checkRequired),$(".requiredFile").blur(checkUpload),$(".partTwo").blur(function(){checkRequiredGroup("partTwo","partTwoBtn")}),$(".partThree").blur(function(){checkRequiredGroup("partThree","partThreeBtn")}),""!==$(".partThree").val()&&checkRequiredGroup("partThree","partThreeBtn"),$("#creationDateYet").change(function(){CreateYetRequired()}),$(".partOne").blur(function(){CreateYetRequired()}),$(".requiredFile").blur(function(){checkFilesRequiredGroup("fileInfo")})});let btn_up_el=document.getElementById("btn_up");btn_up_el.addEventListener("click",function(){console.log("aaa"),document.getElementsByTagName("html")[0].scrollTo({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){var e=document.querySelector(".top_button");0<window.scrollY?(e.classList.add("scroll-animation"),e.classList.remove("d-none")):(e.classList.remove("scroll-animation"),e.classList.add("d-none"))});