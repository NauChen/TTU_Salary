var dataset_myCultivationRoom = [
    {
        'id': '1',
        'startDate': '2023-07-01',
        'endDate': '2024-06-31',
        'building': '新德惠大樓',
        'room': '101',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '2024-05-20',
        'remark': '已到期未續約',
        'extendYears': '0',
    },
    {
        'id': '2',
        'startDate': '2023-07-14',
        'endDate': '2024-07-15',
        'building': '綜合大樓',
        'room': '104',
        'thisTimeDeadline': '2024-04-15',
        'nextTimeDeadline': '2024-07-15',
        'paymentDate': '',
        'remark': '',
        'extendYears': '1',
    },
    {
        'id': '3',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '105',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '',
        'extendYears': '0',
    },
    {
        'id': '4',
        'startDate': '2024-06-01',
        'endDate': '2026-05-31',
        'building': '實驗大樓',
        'room': '106',
        'thisTimeDeadline': '2025-05-01',
        'nextTimeDeadline': '2026-05-01',
        'paymentDate': '2024-11-28',
        'remark': '',
        'extendYears': '0',
    },
    {
        'id': '5',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '實驗大樓',
        'room': '201',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '',
        'extendYears': '0',
    },
    {
        'id': '6',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '北設工大樓',
        'room': '202',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-12-01',
        'paymentDate': '2024-11-27',
        'remark': '',
        'extendYears': '0',
    },
    {
        'id': '7',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '尚志大樓',
        'room': 'A4-102',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-07-01',
        'paymentDate': '',
        'remark': '下階段款項已逾期，如若已付款請提供匯款資訊。',
        'extendYears': '0',
    },
    {
        'id': '8',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '新德惠大樓',
        'room': 'A4-103',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '本階段為最末段，請準備續約。',
        'extendYears': '0',
    },
    {
        'id': '9',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '綜合大樓',
        'room': '714',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '2024-07-01',
        'paymentDate': '2024-11-28',
        'remark': '下階段已付款',
        'extendYears': '0',
    },
    {
        'id': '10',
        'startDate': '2024-06-01',
        'endDate': '2025-05-31',
        'building': '挺生大樓',
        'room': '809',
        'thisTimeDeadline': '2024-05-22',
        'nextTimeDeadline': '',
        'paymentDate': '',
        'remark': '本階段為最末段，請準備續約。',
        'extendYears': '0',
    }
];

$(function () {

    // 限制延駐期限，至少是輸入當日+365天
    setMinDateToSomeDaysLater('extensionPeriod', 365);

    // 抓取要代進的資料
    let sessionData = session_userData;
    // 同步session跟燈箱
    $('#renewContractCompany_td').text(sessionData.company);

    // 同步今日日期
    // syncDateParts('toDay', 'applyYear_td', 'applyMonth_td', 'applyDay_td');
    syncInputDate('toDay', 'applyYear_td', 'applyMonth_td', 'applyDay_td');


    const urlParams = new URLSearchParams(window.location.search);
    const cultivationRoomId = String(urlParams.get('id'));

    // 確保 cultivationRoomId 存在
    if (cultivationRoomId) {
        // console.log('ParkingSpace ID:', cultivationRoomId);
        let cultivationRoomData = dataset_myCultivationRoom.find(cultivationRoom => cultivationRoom.id === cultivationRoomId);
        if (cultivationRoomData) {

            var startDate = splitDate(cultivationRoomData.startDate);
            $('#startDateYear_td').text(startDate.year);
            $('#startDateMonth_td').text(startDate.month);
            $('#startDateDay_td').text(startDate.day);

            var endDate = splitDate(cultivationRoomData.endDate);
            $('#endDateYear_td').text(endDate.year);
            $('#endDateMonth_td').text(endDate.month);
            $('#endDateDay_td').text(endDate.day);

            $('#extendYears_td').text(cultivationRoomData.extendYears);
            // 過去延長進駐年限轉數字(可能小數)再+1，+1可再討論是否要改判斷有沒有滿足一年，但小心閏年
            $('#cumulativeYears_td').text((parseFloat(cultivationRoomData.extendYears) + 1));



            // 取得地下樓層放入預覽燈箱
            // $('#basementLevel_td').text(extractSubstringBetween(cultivationRoomData.cultivationRoomNum, 'B', '-'));
            // $('#cultivationRoomNum_td').text(cultivationRoomData.cultivationRoomNum);

            // 依據原車位顯示上傳行照的按鈕
            // if (cultivationRoomData.carType === '汽車') {
            //     $('#btn_motoBox').hide();
            // } else if (cultivationRoomData.carType === '機車') {
            //     $('#btn_carBox').hide();
            // } else {
            //     $('#btn_carBox').hide();
            //     $('#btn_motoBox').hide();
            // }

        } else {
            console.error('CultivationRoom data not found for id:', cultivationRoomId);
        }
    } else {
        console.error('CultivationRoom ID not found in URL');
    }


    // ※※※※※※自我檢核：
    // 1 預設單選否，否有輸入框
    syncInputRadioNoValue('businessComplianceYes', 'businessComplianceNo', 'businessComplianceYes_td', 'businessComplianceNo_td', 'businessComplianceReason', 'businessComplianceReason_td');

    // 2 預設單選否，是有輸入框
    syncInputRadioYesValue('violationYes', 'violationNo', 'violationYes_td', 'violationNo_td', 'violationReason', 'violationReason_td');

    // 3 預設單選否，否有輸入框*1，是有輸入框*2
    syncInputRadioNoValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'collaborationReason', 'collaborationReason_td');
    syncInputRadioYesValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'collaborationName', 'collaborationName_td');
    syncInputRadioYesValue('academicCollaborationYes', 'academicCollaborationNo', 'academicCollaborationYes_td', 'academicCollaborationNo_td', 'studentCount', 'studentCount_td');

    // 4 預設單選否，否有輸入框
    syncInputRadioNoValue('usageComplianceYes', 'usageComplianceNo', 'usageComplianceYes_td', 'usageComplianceNo_td', 'usageComplianceReason', 'usageComplianceReason_td');

    // 5 預設單選否，否有輸入框
    syncInputRadioNoValue('feeComplianceYes', 'feeComplianceNo', 'feeComplianceYes_td', 'feeComplianceNo_td', 'feeComplianceReason', 'feeComplianceReason_td');

    // 6 預設單選否，否有輸入框
    syncInputRadioNoValue('participationYes', 'participationNo', 'participationYes_td', 'participationNo_td', 'participationReason', 'participationReason_td');

    // 7 預設單選否，否有輸入框
    syncInputRadioNoValue('counselingYes', 'counselingNo', 'counselingYes_td', 'counselingNo_td', 'counselingReason', 'counselingReason_td');

    // 8 預設單選否，否有輸入框
    syncInputRadioNoValue('badgeReturnYes', 'badgeReturnNo', 'badgeReturnYes_td', 'badgeReturnNo_td', 'badgeReturnReason', 'badgeReturnReason_td');

    // 9 預設單選否，否有輸入框跟checkbox
    syncInputRadioNoValue('surveyFormYes', 'surveyFormNo', 'surveyFormYes_td', 'surveyFormNo_td', 'surveyFormReason', 'surveyFormReason_td');
    syncInputCheckbox('constructionFormCheckbox', 'constructionFormCheckbox_td');
    syncInputCheckbox('visitorFormCheckbox', 'visitorFormCheckbox_td');
    syncInputCheckbox('chemicalSurveyCheckbox', 'chemicalSurveyCheckbox_td');
    $('#surveyFormYes, #surveyFormNo').change(function () {
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

    // 10 預設單選否，否有輸入框
    syncInputRadioNoValue('cooperationYes', 'cooperationNo', 'cooperationYes_td', 'cooperationNo_td', 'cooperationReason', 'cooperationReason_td');

    // ※※※※※※延長申請：
    syncInputValue('applicantName', 'applicantName_td');
    syncInputValue('applicantJobTitle', 'applicantJobTitle_td');
    syncInputValue('contactPhone', 'contactPhone_td');
    syncInputValue('contactEmail', 'contactEmail_td');
    syncInputDate('extensionPeriod', 'extensionPeriod_Y', 'extensionPeriod_m', 'extensionPeriod_D');
    syncInputValue('firstYearRevenue', 'firstYearRevenue_td');
    syncInputValue('currentRevenue', 'currentRevenue_td');

    syncInputRadio('breakEvenRadio', 'notBreakEvenRadio', 'breakEvenRadio_td', 'notBreakEvenRadio_td');

    syncNumberWithCommas('firstYearEmployeeCount', 'firstYearEmployeeCount_td');
    syncNumberWithCommas('currentEmployeeCount', 'currentEmployeeCount_td');
    
    syncInputValue('extensionReason', 'extensionReason_td');
    syncInputValue('otherAdvantages', 'otherAdvantages_td');

    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    $('#confirm_remewContractApply').click(function (event) {
        // 先檢查必填項
        // if (!checkRequiredElements()) {
        //     swalToastWarning('請將必填欄位填上正確資料唷！', 'top');
        //     return; // 如果必填項有未填寫的，直接返回，不再繼續
        // }
        // // 最後檢查 danger_ 開頭元素的文字內容
        // if (checkDangerElements()) {
        //     // 如果返回 true，開啟燈箱
        //     $('#renewContractApply_pdf').modal('show');
        // } else {
        //     // 如果返回 false，顯示警告訊息
        //     swalToastWarning('請填上正確資料唷！', 'top');
        // }
        $('#renewContractApply_pdf').modal('show');
    });

});