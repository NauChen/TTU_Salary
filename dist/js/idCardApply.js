function checkElementsAndToggleModal(d,e,a){var t=!0;a.forEach(function(d){if(""===$("#"+d).text().trim())return t=!1}),t?$("#"+d).attr("data-bs-toggle","modal").attr("data-bs-target","#"+e):($("#"+d).removeAttr("data-bs-toggle").removeAttr("data-bs-target"),swalToastWarning("請將所有欄位填上。","top"))}$(function(){populateSelect("idCardCultRoom",selectOptionLocation),$("#typeReissue").prop({checked:!1,disabled:!0}),$("#typeFirst").prop("checked",!0),$("#wantReadLibrary").prop("checked",!1),$("#dontWantReadLibrary").prop("checked",!0),$("#isReprint").hide(),setMinDateToToday("idCard_Period1"),enforceStartDateFirst("idCard_Period1","idCard_Period2");var d=session_userData;$("#idCardCompany_td").text(d.company),$("#idCardResponsiblePerson_td").text(d.responsiblePerson),$("#idCardCompanyPhone_td").text(d.companyPhone),syncInputValue("idCardName","idCardName_td"),syncInputValue("idCardJobTitle","idCardJobTitle_td"),syncInputValue("idCardPhone","idCardPhone_td"),syncInputValue("idCardEmail","idCardEmail_td"),syncInputDate("idCard_Period1","idCard_Period1_Y","idCard_Period1_m","idCard_Period1_D"),syncInputDate("idCard_Period2","idCard_Period2_Y","idCard_Period2_m","idCard_Period2_D"),syncSelectValue("idCardCultRoom","idCardCultRoom_Building","idCardCultRoom_Room"),syncInputValue("idCardEmergContact","ICE_Person"),syncInputValue("idCardECPhone","ICE_Phone"),$('input[name="libraryRead"]').on("change",function(){syncInputRadio("wantReadLibrary","dontWantReadLibrary","wantYes","dontWantYes")}),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#confirm_idCardApply").click(function(d){checkRequiredElements()?checkDangerElements()?$("#idCardApply_pdf").modal("show"):swalToastWarning("請填上正確資料唷！","top"):swalToastWarning("請將必填欄位填上正確資料唷！","top")}),$("#printAndSubmit").click(function(d){$("#formIdCardApply").submit()})});