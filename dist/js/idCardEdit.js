$(function(){$("#idCardNumber").val(idCardData.idCardNum),$("#idCardName").val(idCardData.name),$("#idCardBuilding").val(idCardData.building),$("#idCardRoom").val(idCardData.room),$("#idCardCompany").val(idCardData.company),"開放"===idCardData.readLibrary?$("#canReadLibrary").prop("checked",!0):"不開放"===idCardData.readLibrary&&$("#cannotReadLibrary").prop("checked",!0),("1"==idCardData.print?($("#initial").prop("checked",!0),$("#reissue")):($("#reissue").prop("checked",!0),$("#initial"))).prop("disabled",!0),$("#idCardStatus").val(idCardData.status),""!==idCardData.returnDate&&($("#returnDate").val(idCardData.returnDate),$("#idCardStatus").val("已收回").attr("disabled",!0),$("#returnDateStart").removeClass("d-none")),$("#idCardRemark").val(idCardData.adminNote),setMaxDateToToday("returnDate"),$("#returnDate").on("change",function(){""!==$(this).val()?($("#idCardStatus").val("已收回").attr("disabled",!0),$("#returnDateStart").removeClass("d-none")):($("#idCardStatus").val("使用中").removeAttr("disabled"),$("#returnDateStart").addClass("d-none"))}),$("#idCardStatus").on("change",function(){"已收回"===$(this).val()?($("#returnDate").addClass("thisRequired"),$("#returnDateStart").removeClass("d-none")):($("#returnDate").removeClass("thisRequired"),$("#returnDateStart").addClass("d-none"))}),$("#idCardCompany").typeahead({source:companyData}),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#resetBtn").click(function(){this.form.reset(),$('[id^="danger_"]').text("")}),$("#updateBtn").click(function(a){a.preventDefault(),checkRequiredElements()&&(checkDangerElements()?(console.log("表單資料已送出"),$("#formIdCardEdit").submit()):swalToastWarning("請填上正確資料唷！","top"))})});