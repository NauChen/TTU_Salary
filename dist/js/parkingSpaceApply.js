$(function(){var a=session_userData;$("#parkingSpaceCompany_td").text(a.company),setMinDateToSomeDaysLater("parkingSpaceStartDate",5),syncInputValue("parkingSpaceName","parkingSpaceName_td"),syncInputValue("parkingSpaceJobTitle","parkingSpaceJobTitle_td"),syncInputValue("parkingSpaceExt","parkingSpaceExt_td"),syncInputValue("licensePlateNum","licensePlateNum_td"),syncInputValue("parkingSpaceStartDate","parkingSpaceStartDate_td"),syncInputValue("parkingSpaceIDNum","parkingSpaceIDNum_td"),syncInputValue("parkingSpacePhone","parkingSpacePhone_td"),syncInputValue("parkingSpaceEmail","parkingSpaceEmail_td"),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#confirm_parkingSpaceApply").click(function(a){checkRequiredElements()?checkDangerElements()?$("#parkingSpaceApply_pdf").modal("show"):swalToastWarning("請上傳行照圖檔，並裁剪成指定大小唷！","top"):swalToastWarning("請將必填欄位填上正確資料唷！","top")}),$("#printAndSubmit").click(function(a){console.log("表單資料已送出");var e=$("#formParkingSpaceApply").serializeArray();console.log("表單資料：",JSON.stringify(e,null,2))})});