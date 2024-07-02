var dataset_myCultivationRoom=[{id:"1",startDate:"2023-07-01",endDate:"2024-06-31",building:"新德惠大樓",room:"101",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"",paymentDate:"2024-05-20",remark:"已到期未續約",extendYears:"0"},{id:"2",startDate:"2023-07-14",endDate:"2024-07-15",building:"綜合大樓",room:"104",thisTimeDeadline:"2024-04-15",nextTimeDeadline:"2024-07-15",paymentDate:"",remark:"",extendYears:"1"},{id:"3",startDate:"2024-06-01",endDate:"2025-05-31",building:"挺生大樓",room:"105",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"",paymentDate:"",remark:"",extendYears:"0"},{id:"4",startDate:"2024-06-01",endDate:"2026-05-31",building:"實驗大樓",room:"106",thisTimeDeadline:"2025-05-01",nextTimeDeadline:"2026-05-01",paymentDate:"2024-11-28",remark:"",extendYears:"0"},{id:"5",startDate:"2024-06-01",endDate:"2025-05-31",building:"實驗大樓",room:"201",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"",paymentDate:"",remark:"",extendYears:"0"},{id:"6",startDate:"2024-06-01",endDate:"2025-05-31",building:"北設工大樓",room:"202",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"2024-12-01",paymentDate:"2024-11-27",remark:"",extendYears:"0"},{id:"7",startDate:"2024-06-01",endDate:"2025-05-31",building:"尚志大樓",room:"A4-102",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"2024-07-01",paymentDate:"",remark:"下階段款項已逾期，如若已付款請提供匯款資訊。",extendYears:"0"},{id:"8",startDate:"2024-06-01",endDate:"2025-05-31",building:"新德惠大樓",room:"A4-103",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"",paymentDate:"",remark:"本階段為最末段，請準備續約。",extendYears:"0"},{id:"9",startDate:"2024-06-01",endDate:"2025-05-31",building:"綜合大樓",room:"714",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"2024-07-01",paymentDate:"2024-11-28",remark:"下階段已付款",extendYears:"0"},{id:"10",startDate:"2024-06-01",endDate:"2025-05-31",building:"挺生大樓",room:"809",thisTimeDeadline:"2024-05-22",nextTimeDeadline:"",paymentDate:"",remark:"本階段為最末段，請準備續約。",extendYears:"0"}];$(function(){setMinDateToSomeDaysLater("extensionPeriod",365);var e,t=session_userData,t=($("#renewContractCompany_td").text(t.company),syncInputDate("toDay","applyYear_td","applyMonth_td","applyDay_td"),new URLSearchParams(window.location.search));let o=String(t.get("id"));o?(t=dataset_myCultivationRoom.find(e=>e.id===o))?(e=splitDate(t.startDate),$("#startDateYear_td").text(e.year),$("#startDateMonth_td").text(e.month),$("#startDateDay_td").text(e.day),e=splitDate(t.endDate),$("#endDateYear_td").text(e.year),$("#endDateMonth_td").text(e.month),$("#endDateDay_td").text(e.day),$("#extendYears_td").text(t.extendYears),$("#cumulativeYears_td").text(parseFloat(t.extendYears)+1)):console.error("CultivationRoom data not found for id:",o):console.error("CultivationRoom ID not found in URL"),syncInputRadioNoValue("businessComplianceYes","businessComplianceNo","businessComplianceYes_td","businessComplianceNo_td","businessComplianceReason","businessComplianceReason_td"),syncInputRadioYesValue("violationYes","violationNo","violationYes_td","violationNo_td","violationReason","violationReason_td"),syncInputRadioNoValue("academicCollaborationYes","academicCollaborationNo","academicCollaborationYes_td","academicCollaborationNo_td","collaborationReason","collaborationReason_td"),syncInputRadioYesValue("academicCollaborationYes","academicCollaborationNo","academicCollaborationYes_td","academicCollaborationNo_td","collaborationName","collaborationName_td"),syncInputRadioYesValue("academicCollaborationYes","academicCollaborationNo","academicCollaborationYes_td","academicCollaborationNo_td","studentCount","studentCount_td"),syncInputRadioNoValue("usageComplianceYes","usageComplianceNo","usageComplianceYes_td","usageComplianceNo_td","usageComplianceReason","usageComplianceReason_td"),syncInputRadioNoValue("feeComplianceYes","feeComplianceNo","feeComplianceYes_td","feeComplianceNo_td","feeComplianceReason","feeComplianceReason_td"),syncInputRadioNoValue("participationYes","participationNo","participationYes_td","participationNo_td","participationReason","participationReason_td"),syncInputRadioNoValue("counselingYes","counselingNo","counselingYes_td","counselingNo_td","counselingReason","counselingReason_td"),syncInputRadioNoValue("badgeReturnYes","badgeReturnNo","badgeReturnYes_td","badgeReturnNo_td","badgeReturnReason","badgeReturnReason_td"),syncInputRadioNoValue("surveyFormYes","surveyFormNo","surveyFormYes_td","surveyFormNo_td","surveyFormReason","surveyFormReason_td"),syncInputCheckbox("constructionFormCheckbox","constructionFormCheckbox_td"),syncInputCheckbox("visitorFormCheckbox","visitorFormCheckbox_td"),syncInputCheckbox("chemicalSurveyCheckbox","chemicalSurveyCheckbox_td"),$("#surveyFormYes, #surveyFormNo").change(function(){$("#surveyFormNo").is(":checked")?($("#constructionFormCheckbox").prop("disabled",!1),$("#visitorFormCheckbox").prop("disabled",!1),$("#chemicalSurveyCheckbox").prop("disabled",!1),syncInputCheckbox("constructionFormCheckbox","constructionFormCheckbox_td"),syncInputCheckbox("visitorFormCheckbox","visitorFormCheckbox_td"),syncInputCheckbox("chemicalSurveyCheckbox","chemicalSurveyCheckbox_td")):($("#constructionFormCheckbox").prop("disabled",!0),$("#visitorFormCheckbox").prop("disabled",!0),$("#chemicalSurveyCheckbox").prop("disabled",!0),$("#constructionFormCheckbox").prop("checked",!1),$("#visitorFormCheckbox").prop("checked",!1),$("#chemicalSurveyCheckbox").prop("checked",!1),$("#constructionFormCheckbox_td").html("&#9744;"),$("#visitorFormCheckbox_td").html("&#9744;"),$("#chemicalSurveyCheckbox_td").html("&#9744;"))}),syncInputRadioNoValue("cooperationYes","cooperationNo","cooperationYes_td","cooperationNo_td","cooperationReason","cooperationReason_td"),syncInputValue("applicantName","applicantName_td"),syncInputValue("applicantJobTitle","applicantJobTitle_td"),syncInputValue("contactPhone","contactPhone_td"),syncInputValue("contactEmail","contactEmail_td"),syncInputDate("extensionPeriod","extensionPeriod_Y","extensionPeriod_m","extensionPeriod_D"),syncInputValue("firstYearRevenue","firstYearRevenue_td"),syncInputValue("currentRevenue","currentRevenue_td"),syncInputRadio("breakEvenRadio","notBreakEvenRadio","breakEvenRadio_td","notBreakEvenRadio_td"),syncNumberWithCommas("firstYearEmployeeCount","firstYearEmployeeCount_td"),syncNumberWithCommas("currentEmployeeCount","currentEmployeeCount_td"),syncInputValue("extensionReason","extensionReason_td"),syncInputValue("otherAdvantages","otherAdvantages_td"),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#confirm_remewContractApply").click(function(e){$("#renewContractApply_pdf").modal("show")})});