function updateFileInfo(){var a=document.getElementById("EC_newOne"),e=document.getElementById("fileInfo_EC_newOne"),n=document.getElementById("newECMark");e.innerHTML=a.value,""!==e.innerHTML.trim()?n.textContent="*":n.innerHTML="&ensp;",setFormHeight()}$(function(){$("#companyName").val(userCompanyData.name),$("#creationDate").val(userCompanyData.companyDetails.creationDate),$("#uniformNum").val(userCompanyData.companyDetails.uniformNum),$("#capitalAmount").val(userCompanyData.companyDetails.capitalAmount),$("#responsiblePerson").val(userCompanyData.companyDetails.responsiblePerson),$("#companyAdd").val(userCompanyData.companyDetails.companyAdd),$("#locationOfCompany").val(userCompanyData.companyDetails.locationOfCompany),$("#employeesNum").val(userCompanyData.companyDetails.employeesNum),$("#referrer").val(userCompanyData.companyDetails.referrer),$("#contactPerson").val(userCompanyData.companyDetails.contactPerson),$("#ext").val(userCompanyData.companyDetails.ext),$("#jobTitle").val(userCompanyData.companyDetails.jobTitle),$("#companyPhone").val(userCompanyData.companyDetails.phone),$("#companyEmail").val(userCompanyData.companyDetails.companyEmail),$("#lineId").val(userCompanyData.companyDetails.lineId),$("#adminNote").val(userCompanyData.companyDetails.adminNoteWithCompany),$("#businessItems").text(userCompanyData.companyDetails.companyDescription),$("#helpItems").text(userCompanyData.companyDetails.helpItems),$("#tutoringProfessor").text(userCompanyData.companyDetails.tutoringProfessor),$("#nurtureProgram").text(userCompanyData.companyDetails.nurtureProgram);var a=$("#companyAdd"),e=$("#locationOfCompany"),n=$("#sameAdd");function o(){""===a.val().trim()?(n.prop("checked",!1),n.prop("disabled",!0)):n.prop("disabled",!1)}a.val().trim()===e.val().trim()&&n.prop("checked",!0),o(),n.change(function(){n.is(":checked")&&(e.val(a.val()),$("#danger_locationOfCompany").text(""))}),e.change(function(){n.prop("checked",!1),o()}),a.change(function(){n.prop("checked",!1),o()})});