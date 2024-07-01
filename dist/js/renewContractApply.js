"use strict";

$(function () {
  // ※※※※※※自我檢核：
  // 1 預設單選有輸入框，先將輸入框同步
  syncInputValue('businessComplianceReason', 'businessComplianceReason_td');
  $('#businessComplianceYes, #businessComplianceNo').change(function () {
    syncInputRadioNoValue('businessComplianceYes', 'businessComplianceNo', 'businessComplianceYes_td', 'businessComplianceNo_td', 'businessComplianceReason', 'businessComplianceReason_td');
  });

  // 2 預設單選無輸入框
  $('#violationYes, #violationNo').change(function () {
    syncInputRadioYesValue('violationYes', 'violationNo', 'violationYes_td', 'violationNo_td', 'violationReason', 'violationReason_td');
  });

  // 3 預設單選有輸入框
  syncInputValue('collaborationReason', 'collaborationReason_td');
  $('#academicCollaborationYes, #academicCollaborationNo').change(function () {
    syncInputRadioNoValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'collaborationReason', 'collaborationReason_td');
    syncInputRadioYesValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'collaborationName', 'collaborationName_td');
    syncInputRadioYesValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'studentCount', 'studentCount_td');
  });

  // 4 預設單選有輸入框，先將輸入框同步
  syncInputValue('usageComplianceReason', 'usageComplianceReason_td');
  $('#usageComplianceYes, #usageComplianceNo').change(function () {
    syncInputRadioNoValue('usageComplianceYes', 'usageComplianceNo', 'usageComplianceYes_td', 'usageComplianceNo_td', 'usageComplianceReason', 'usageComplianceReason_td');
  });

  // 5 預設單選有輸入框，先將輸入框同步
  syncInputValue('feeComplianceReason', 'feeComplianceReason_td');
  $('#feeComplianceYes, #feeComplianceNo').change(function () {
    syncInputRadioNoValue('feeComplianceYes', 'feeComplianceNo', 'feeComplianceYes_td', 'feeComplianceNo_td', 'feeComplianceReason', 'feeComplianceReason_td');
  });

  // 6 預設單選有輸入框，先將輸入框同步
  syncInputValue('participationReason', 'participationReason_td');
  $('#participationYes, #participationNo').change(function () {
    syncInputRadioNoValue('participationYes', 'participationNo', 'participationYes_td', 'participationNo_td', 'participationReason', 'participationReason_td');
  });

  // 7 預設單選有輸入框，先將輸入框同步
  syncInputValue('counselingReason', 'counselingReason_td');
  $('#counselingYes, #counselingNo').change(function () {
    syncInputRadioNoValue('counselingYes', 'counselingNo', 'counselingYes_td', 'counselingNo_td', 'counselingReason', 'counselingReason_td');
  });

  // 8 預設單選有輸入框，先將輸入框同步
  syncInputValue('badgeReturnReason', 'badgeReturnReason_td');
  $('#badgeReturnYes, #badgeReturnNo').change(function () {
    syncInputRadioNoValue('badgeReturnYes', 'badgeReturnNo', 'badgeReturnYes_td', 'badgeReturnNo_td', 'badgeReturnReason', 'badgeReturnReason_td');
  });

  // 9 預設單選有輸入框，先將輸入框同步
  syncInputValue('surveyFormReason', 'surveyFormReason_td');
  syncInputCheckbox('constructionFormCheckbox', 'constructionFormCheckbox_td');
  syncInputCheckbox('visitorFormCheckbox', 'visitorFormCheckbox_td');
  syncInputCheckbox('chemicalSurveyCheckbox', 'chemicalSurveyCheckbox_td');
  $('#surveyFormYes, #surveyFormNo').change(function () {
    syncInputRadioNoValue('surveyFormYes', 'surveyFormNo', 'surveyFormYes_td', 'surveyFormNo_td', 'surveyFormReason', 'surveyFormReason_td');
    if ($('#surveyFormNo').is(':checked')) {
      $('#constructionFormCheckbox').prop('disabled', false);
      $('#visitorFormCheckbox').prop('disabled', false);
      $('#chemicalSurveyCheckbox').prop('disabled', false);
      syncInputCheckbox('constructionFormCheckbox', 'constructionFormCheckbox_td');
      syncInputCheckbox('visitorFormCheckbox', 'visitorFormCheckbox_td');
      syncInputCheckbox('chemicalSurveyCheckbox', 'chemicalSurveyCheckbox_td');
    } else {
      $('#constructionFormCheckbox').prop('disabled', true);
      $('#visitorFormCheckbox').prop('disabled', true);
      $('#chemicalSurveyCheckbox').prop('disabled', true);
      $('#constructionFormCheckbox').prop('checked', false);
      $('#visitorFormCheckbox').prop('checked', false);
      $('#chemicalSurveyCheckbox').prop('checked', false);
      $('#constructionFormCheckbox_td').html('&#9744;');
      $('#visitorFormCheckbox_td').html('&#9744;');
      $('#chemicalSurveyCheckbox_td').html('&#9744;');
    }
  });

  // 10 預設單選有輸入框，先將輸入框同步
  syncInputValue('cooperationReason', 'cooperationReason_td');
  $('#cooperationYes, #cooperationNo').change(function () {
    syncInputRadioNoValue('cooperationYes', 'cooperationNo', 'cooperationYes_td', 'cooperationNo_td', 'cooperationReason', 'cooperationReason_td');
  });

  // ※※※※※※延長申請：

  syncInputValue('applicantName', 'applicantName_td');
  syncInputValue('applicantJobTitle', 'applicantJobTitle_td');
  syncInputValue('contactPhone', 'contactPhone_td');
  syncInputValue('contactEmail', 'contactEmail_td');
  syncInputDate('extensionPeriod', 'extensionPeriod_Y', 'extensionPeriod_m', 'extensionPeriod_D');
  syncInputValue('firstYearRevenue', 'firstYearRevenue_td');
  syncInputValue('currentRevenue', 'currentRevenue_td');
  $('#breakEvenRadio, #notBreakEvenRadio').change(function () {
    syncInputRadio('breakEvenRadio', 'notBreakEvenRadio', 'breakEvenRadio_td', 'notBreakEvenRadio_td');
  });
  syncNumberWithCommas('firstYearRevenue', 'firstYearRevenue_td');
  syncNumberWithCommas('currentRevenue', 'currentRevenue_td');
  syncNumberWithCommas('firstYearEmployeeCount', 'firstYearEmployeeCount_td');
  syncNumberWithCommas('currentEmployeeCount', 'currentEmployeeCount_td');
  syncInputValue('extensionReason', 'extensionReason_td');
  syncInputValue('otherAdvantages', 'otherAdvantages_td');
});