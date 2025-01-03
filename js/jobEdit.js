// var dataset_myJob = [
//     {
//         'id': '1',
//         'createDate': '2024-04-25',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '資深工程師',
//         'jobEmployment': '全職',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-05-31',
//         'jobContent': '負責設計和實施新產品的生產流程。\n檢查既有流程是否需要改良並提出建議。',
//         'jobLocation': '綜合工廠大樓 403',
//         'deptOf': '不限學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '積極主動',
//         'jobConnect': '聯繫人：hr@example.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '35,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '2',
//         'createDate': '2024-04-26',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '市場推廣專員',
//         'jobEmployment': '全職',
//         'jobTime': '10:00 ~ 17:00',
//         'applicationDeadline': '2024-06-15',
//         'jobContent': '負責市場調研和制定推廣策略',
//         'jobLocation': '挺生大樓 706',
//         'deptOf': '機械與材料工程學系',
//         'vacationSystem': '排假',
//         'jobCondition': '創意思維',
//         'jobConnect': '聯繫人：info@tingsheng.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '日薪',
//         'salaryAmount': '1,800元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '3',
//         'createDate': '2024-04-27',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '物業管理員',
//         'jobEmployment': '工讀',
//         'jobTime': '08:30 ~ 17:30',
//         'applicationDeadline': '2024-06-10',
//         'jobContent': '負責物業日常運營和客戶服務',
//         'jobLocation': '尚志大樓 702B',
//         'deptOf': '化學工程與生物科技學系',
//         'vacationSystem': '其它',
//         'jobCondition': '耐心細心。\n只有週三上班',
//         'jobConnect': '聯繫人：property@shangzhi.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '28,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '4',
//         'createDate': '2024-04-28',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '生產線工人',
//         'jobEmployment': '全職',
//         'jobTime': '07:00 ~ 15:30',
//         'applicationDeadline': '2024-06-05',
//         'jobContent': '負責製造流水線上的生產作業',
//         'jobLocation': '綜合工廠大樓 404',
//         'deptOf': '電機工程學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '勤奮守時',
//         'jobConnect': '聯繫人：hr@xinweijing.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '24,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '5',
//         'createDate': '2024-04-29',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '系統工程師',
//         'jobEmployment': '全職',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-05-30',
//         'jobContent': '負責設計和實施安全監控系統',
//         'jobLocation': '綜合工廠大樓 402A',
//         'deptOf': '資訊工程學系',
//         'vacationSystem': '排假',
//         'jobCondition': '創新解決方案',
//         'jobConnect': '聯繫人：hr@securitytech.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '按件計酬',
//         'salaryAmount': '300元/件',
//         'salaryTypeItem': '5',
//     },
//     {
//         'id': '6',
//         'createDate': '2024-04-30',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '品質檢測員',
//         'jobEmployment': '全職',
//         'jobTime': '08:00 ~ 17:00',
//         'applicationDeadline': '2024-06-20',
//         'jobContent': '負責產品品質檢測和報告撰寫',
//         'jobLocation': '綜合工廠大樓 405',
//         'deptOf': '事業經營學系',
//         'vacationSystem': '其它',
//         'jobCondition': '細緻耐心。\n上班日：周一、周三、周五',
//         'jobConnect': '聯繫人：quality@factory.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '面議(1000元以上)',
//         'salaryTypeItem': '4',
//     },
//     {
//         'id': '7',
//         'createDate': '2024-05-01',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '資深軟體工程師',
//         'jobEmployment': '全職',
//         'jobTime': '10:00 ~ 19:00',
//         'applicationDeadline': '2024-06-25',
//         'jobContent': '負責大型軟體系統的開發和維護',
//         'jobLocation': '挺生大樓 710',
//         'deptOf': '資訊經營學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '創新精神',
//         'jobConnect': '聯繫人：hr@tingsheng.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '40,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '8',
//         'createDate': '2024-05-02',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '機械設計師',
//         'jobEmployment': '工讀',
//         'jobTime': '08:30 ~ 17:30',
//         'applicationDeadline': '2024-06-30',
//         'jobContent': '負責製造設備的機械設計和優化',
//         'jobLocation': '綜合工廠大樓 402',
//         'deptOf': '工業設計學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '創意思維',
//         'jobConnect': '聯繫人：hr@xinweijing.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '32,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '9',
//         'createDate': '2024-05-03',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '建築設計師',
//         'jobEmployment': '全職',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-15',
//         'jobContent': '負責住宅和商業建築的設計和規劃',
//         'jobLocation': '尚志大樓 701',
//         'deptOf': '媒體設計學系',
//         'vacationSystem': '排假',
//         'jobCondition': '創意設計',
//         'jobConnect': '聯繫人：design@shangzhi.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '面議(1,200元以上)',
//         'salaryTypeItem': '4',
//     },
//     {
//         'id': '10',
//         'createDate': '2024-05-04',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '資訊安全工程師',
//         'jobEmployment': '全職',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-10',
//         'jobContent': '負責企業資訊系統的安全防護和應急響應',
//         'jobLocation': '綜合工廠大樓 707',
//         'deptOf': '應用外語學系',
//         'vacationSystem': '排假',
//         'jobCondition': '技術熱情',
//         'jobConnect': '聯繫人：hr@securitytech.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '36,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '11',
//         'createDate': '2024-05-05',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '生產主管',
//         'jobEmployment': '工讀',
//         'jobTime': '08:00 ~ 17:00',
//         'applicationDeadline': '2024-06-20',
//         'jobContent': '負責生產流程的管理和優化',
//         'jobLocation': '綜合工廠大樓 404',
//         'deptOf': '不限學系',
//         'vacationSystem': '排假',
//         'jobCondition': '領導能力',
//         'jobConnect': '聯繫人：hr@factory.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '25,000元以上',
//         'salaryTypeItem': '3',
//     },
//     {
//         'id': '12',
//         'createDate': '2024-05-06',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '硬體工程師',
//         'jobEmployment': '全職',
//         'jobTime': '10:00 ~ 19:00',
//         'applicationDeadline': '2024-06-25',
//         'jobContent': '負責嵌入式系統和硬體設計',
//         'jobLocation': '挺生大樓 708',
//         'deptOf': '機械與材料工程學系',
//         'vacationSystem': '其它',
//         'jobCondition': '創新精神。\n隔周休',
//         'jobConnect': '聯繫人：hr@tingsheng.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '38,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '13',
//         'createDate': '2024-05-07',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '自動化工程師',
//         'jobEmployment': '全職',
//         'jobTime': '08:30 ~ 17:30',
//         'applicationDeadline': '2024-06-30',
//         'jobContent': '負責生產自動化設備的設計和安裝',
//         'jobLocation': '綜合工廠大樓 402A',
//         'deptOf': '電機工程學系',
//         'vacationSystem': '其它',
//         'jobCondition': '創意思維。\n周六要上半天班',
//         'jobConnect': '聯繫人：hr@xinweijing.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '按件計酬',
//         'salaryAmount': '2,050元/件',
//         'salaryTypeItem': '5',
//     },
//     {
//         'id': '14',
//         'createDate': '2024-05-08',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '項目經理',
//         'jobEmployment': '工讀',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-15',
//         'jobContent': '負責住宅和商業項目的規劃和執行',
//         'jobLocation': '尚志大樓 702A',
//         'deptOf': '事業經營學系',
//         'vacationSystem': '其它',
//         'jobCondition': '領導力和決策能力。\n每周至少2天',
//         'jobConnect': '聯繫人：project@shangzhi.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '面議(1200元以上)',
//         'salaryTypeItem': '4',
//     },
//     {
//         'id': '15',
//         'createDate': '2024-05-09',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '網路安全專家',
//         'jobEmployment': '工讀',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-10',
//         'jobContent': '負責企業網路安全和資料保護',
//         'jobLocation': '綜合工廠大樓 404',
//         'deptOf': '資訊工程學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '技術熱情',
//         'jobConnect': '聯繫人：hr@securitytech.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '34,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '16',
//         'createDate': '2024-05-10',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '行政助理',
//         'jobEmployment': '工讀',
//         'jobTime': '08:00 ~ 17:00',
//         'applicationDeadline': '2024-06-20',
//         'jobContent': '負責辦公室日常行政支持',
//         'jobLocation': '綜合工廠大樓 707',
//         'deptOf': '資訊經營學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '細心周到',
//         'jobConnect': '聯繫人：hr@factory.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '面議(1200元以上)',
//         'salaryTypeItem': '4',
//     },
//     {
//         'id': '17',
//         'createDate': '2024-05-11',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '軟體工程師',
//         'jobEmployment': '全職',
//         'jobTime': '10:00 ~ 19:00',
//         'applicationDeadline': '2024-06-25',
//         'jobContent': '負責企業軟體系統的開發和維護',
//         'jobLocation': '挺生大樓 711',
//         'deptOf': '資訊工程學系',
//         'vacationSystem': '周休二日',
//         'jobCondition': '創新思維',
//         'jobConnect': '聯繫人：hr@tingsheng.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '42,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '18',
//         'createDate': '2024-05-12',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '品管主管',
//         'jobEmployment': '全職',
//         'jobTime': '08:30 ~ 17:30',
//         'applicationDeadline': '2024-06-30',
//         'jobContent': '負責產品品質管理和改進',
//         'jobLocation': '綜合工廠大樓 403',
//         'deptOf': '化學工程與生物科技學系',
//         'vacationSystem': '排假',
//         'jobCondition': '品質控制',
//         'jobConnect': '聯繫人：hr@xinweijing.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '34,000元',
//         'salaryTypeItem': '1',
//     },
//     {
//         'id': '19',
//         'createDate': '2024-05-13',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '市場營銷經理',
//         'jobEmployment': '工讀',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-15',
//         'jobContent': '負責市場策略和品牌推廣',
//         'jobLocation': '尚志大樓 708',
//         'deptOf': '事業經營學系',
//         'vacationSystem': '排假',
//         'jobCondition': '市場洞察',
//         'jobConnect': '聯繫人：marketing@shangzhi.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '28,000元 ~ 30,000元',
//         'salaryTypeItem': '2',
//     },
//     {
//         'id': '20',
//         'createDate': '2024-05-14',
//         'company': '綜合工廠有限公司',
//         'jobTitle': '系統架構師',
//         'jobEmployment': '工讀',
//         'jobTime': '09:00 ~ 18:00',
//         'applicationDeadline': '2024-06-10',
//         'jobContent': '負責企業系統架構設計和優化',
//         'jobLocation': '綜合工廠大樓 402',
//         'deptOf': '工業設計學系',
//         'vacationSystem': '其它',
//         'jobCondition': '技術領導。\n只上一天',
//         'jobConnect': '聯繫人：hr@securitytech.com',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'salaryType': '月薪',
//         'salaryAmount': '38,000元',
//         'salaryTypeItem': '1',
//     }
// ];

// var dataset_myJob = [
//     {
//         'applicationDeadline': '2024-05-31',
//         'company': '綜合工廠有限公司',
//         'companyDescription': '綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。',
//         'deptOf': '不限學系',
//         'houseOf': '不限學院',
//         'id': '1',
//         'jobCondition': '積極主動',
//         'jobConnect': '聯繫人：hr@example.com',
//         'jobContent': '負責設計和實施新產品的生產流程。\n檢查既有流程是否需要改良並提出建議。',
//         'jobEmployment': '全職',
//         'jobLocation': '綜合工廠大樓 403',
//         'jobTime': '09:00 ~ 18:00',
//         'jobTitle': '資深工程師',
//         'salaryAmount': '35,000元',
//         'createDate': '2024-04-25',
//         // 'salaryStyle': '時薪',
//         // 'salaryStyle': '日薪',
//         // 'salaryStyle': '月薪',
//         'salaryStyle': '按件計酬',
//         'vacationSystem': '周休二日',
//         // 'salaryType': '元',
//         // 'salaryType': '元至元',
//         // 'salaryType': '元以上',
//         // 'salaryType': '面議',
//         'salaryType': '按件計酬',
//     },]

$(function () {
    // 將id代入並讀取資料，調用 職缺函式 - handleSalaryChoose
    // const urlParams = new URLSearchParams(window.location.search);
    // const jobId = String(urlParams.get('id'));
    // 確保 jobId 存在
    // if (jobId) {
    // console.log('Job ID:', jobId);

    // let jobData = dataset_myJob.find(job => job.id === jobId);
    if (jobData) {
        // console.log('Job data found:', jobData);
        $('#jobTitle').val(jobData.jobTitle);
        $('#jobEmployment').val(jobData.jobEmployment);
        $('#jobContent').text(jobData.jobContent);
        $('#jobLocation').text(jobData.jobLocation);
        // $('#deptOf').val(jobData.deptOf);
        $('#deptOf').val(jobData.houseOf + '|' + jobData.deptOf);
        // 將組合時間拆開，function來自formComm.js
        var splitTimes = splitJobTime(jobData.jobTime);
        $('#jobTime1').val(splitTimes.jobTime1);
        $('#jobTime2').val(splitTimes.jobTime2);

        $('#vacationSystem').val(jobData.vacationSystem);
        $('#jobCondition').text(jobData.jobCondition);
        $('#jobConnect').text(jobData.jobConnect);

        $('#salaryStyle').val(jobData.salaryStyle);
        var selectedOption = $('#salaryStyle').val();

        salaryTypeChoose(selectedOption);
        handleSalaryDetails(jobData.salaryType, jobData.salaryAmount);

        //限制截止日期不可小於當日
        var today = new Date().toISOString().split('T')[0];
        $('#applicationDeadline').attr('min', today);
        $('#applicationDeadline').val(jobData.applicationDeadline);
    } else {
        console.error('Job data not found for id:', jobId);
    }

    // } else {
    //     console.error('Job ID not found in URL');
    // }




    // 監聽 #salaryType 的 change 事件
    $('#salaryStyle').change(function () {
        // 取得選擇的選項值
        var selectedOption = $(this).val();
        handleSalaryChoose(selectedOption);
    });

    // 切換工作待遇單選時，更改class = 'thisRequired' 為相應的輸入框。 
    $('input[name="JobSalaryType"]').on("change", function () {
        var selectedValue = $(this).val();
        switch (selectedValue) {
            case "1":
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsInput").addClass("thisRequired");
                $('#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput').text(''); // 清除其他錯誤訊息
                break;
            case "2":
                $("#dollarsInput, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "3":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#moreThenDollarsInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "4":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#negotiableInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_dollarsPerCaseInput").text(''); // 清除其他錯誤訊息
                break;
            case "5":
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired");
                $("#dollarsPerCaseInput").addClass("thisRequired");
                $("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput").text(''); // 清除其他錯誤訊息
                break;
            default:
                break;
        }
    });

    // // 切換選擇單選框(薪資金額輸入)時，更改必填class。 必填class用在formComm.js的function，添加class的function來自main.js
    // $('input[name="salaryTypeItem"]').on("change", function () {
    //     var selectedValue = $(this).val();
    //     switch (selectedValue) {
    //         case "1":
    //             theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
    //             theseAddClass(["thisRequired"], ["dollarsInput"]);
    //             break;
    //         case "2":
    //             theseRemoveClass(["thisRequired"], ['dollarsInput', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
    //             theseAddClass(["thisRequired"], ["dollarsToDollars_1Input", "dollarsToDollars_2Input"]);
    //             break;
    //         case "3":
    //             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'negotiableInput', 'dollarsPerCaseInput']);
    //             theseAddClass(["thisRequired"], ["moreThenDollarsInput"]);
    //             break;
    //         case "4":
    //             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'dollarsPerCaseInput']);
    //             theseAddClass(["thisRequired"], ["negotiableInput"]);
    //             break;
    //         case "5":
    //             theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']);
    //             theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]);
    //             break;
    //         default:
    //             break;
    //     }
    // });


});

// 修改職缺專用，僅切換顯示薪資input，並未指定單選選項，單選選項另外設置
function salaryTypeChoose(selectedOption) {
    switch (selectedOption) {
        case '時薪':
        case '日薪':
            $("#dollarsItem").addClass("choose");
            $("#dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose");
            // theseAddClass(["choose"], ["dollarsItem"]);
            // theseRemoveClass(["choose"], ['dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            break;
        case '月薪':
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").addClass("choose");
            $("#dollarsPerCaseItem").removeClass("choose");
            // theseAddClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem']);
            // theseRemoveClass(["choose"], ['dollarsPerCaseItem']);
            break;
        case '按件計酬':
            $("#dollarsPerCaseItem").addClass("choose");
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").removeClass("choose");
            // theseAddClass(["choose"], ['dollarsPerCaseItem']);
            // theseRemoveClass(["choose"], ["dollarsItem", 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem',]);
            break;
        case '請選擇':
            $("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose");
            // theseRemoveClass(["choose"], ['dollarsItem', 'dollarsToDollarsItem', 'moreThenDollarsItem', 'negotiableItem', 'dollarsPerCaseItem']);
            break;
    }
}

// 修改職缺專用，設置單選選項並將金額轉換好代入
function handleSalaryDetails(salaryType, salaryAmount) {
    function cleanAmount(amount) {
        // return amount.replace(/[元|~|以上|面議|\(|\)|,]/g, '').trim();
        return amount.replace(/\D/g, '').trim();
    }

    switch (salaryType) {
        case '元':
            if ($('#salaryTypeRadio1').length) {
                $('#salaryTypeRadio1').prop('checked', true);
                var cleanSalary = formatNumber(cleanAmount(salaryAmount));
                $('input[name="dollars"]').val(cleanSalary);
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsInput").addClass("thisRequired");
                // 移除必填class，用於formComm.js
                // theseRemoveClass(["thisRequired"], ['dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
                // 增加必填class，用於formComm.js
                // theseAddClass(["thisRequired"], ["dollarsInput"]);
            }
            break;
        case '元至元':
            if ($('#salaryTypeRadio2').length) {
                $('#salaryTypeRadio2').prop('checked', true);
                var amounts = salaryAmount.replace('元', '').split('~');
                $('input[name="dollarsValue1"]').val(formatNumber(cleanAmount(amounts[0])));
                $('input[name="dollarsValue2"]').val(formatNumber(cleanAmount(amounts[1])));
                $("#dollarsInput, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#dollarsToDollars_1Input, #dollarsToDollars_2Input").addClass("thisRequired");
                // theseRemoveClass(["thisRequired"], ['dollarsInput', 'moreThenDollarsInput', 'negotiableInput', 'dollarsPerCaseInput']);
                // theseAddClass(["thisRequired"], ["dollarsToDollars_1Input", "dollarsToDollars_2Input"]);
            }
            break;
        case '元以上':
            if ($('#salaryTypeRadio3').length) {
                $('#salaryTypeRadio3').prop('checked', true);
                var cleanSalary = formatNumber(cleanAmount(salaryAmount.replace('以上', '')));
                $('input[name="moreThenDollars"]').val(cleanSalary);
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#moreThenDollarsInput").addClass("thisRequired");
                // theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'negotiableInput', 'dollarsPerCaseInput']);
                // theseAddClass(["thisRequired"], ["moreThenDollarsInput"]);
            }
            break;
        case '面議':
            if ($('#salaryTypeRadio4').length) {
                $('#salaryTypeRadio4').prop('checked', true);
                var cleanSalary = formatNumber(cleanAmount(salaryAmount.replace('面議', '').replace('以上', '')));
                $('input[name="negotiable"]').val(cleanSalary);
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #dollarsPerCaseInput").removeClass("thisRequired");
                $("#negotiableInput").addClass("thisRequired");
                // theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'dollarsPerCaseInput']);
                // theseAddClass(["thisRequired"], ["negotiableInput"]);
            }
            break;
        case '按件計酬':
            if ($('#salaryTypeRadio5').length) {
                $('#salaryTypeRadio5').prop('checked', true);
                var cleanSalary = cleanAmount(salaryAmount.replace('/件', ''));
                $('input[name="dollarsPerCase"]').val(cleanSalary);
                $("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired");
                $("#dollarsPerCaseInput").addClass("thisRequired");
                // theseRemoveClass(["thisRequired"], ['dollarsInput', 'dollarsToDollars_1Input', 'dollarsToDollars_2Input', 'moreThenDollarsInput', 'negotiableInput']);
                // theseAddClass(["thisRequired"], ["dollarsPerCaseInput"]);
            }
            break;
        default:
            console.error('Invalid salaryType: ', salaryType);
    }
}


$(function () {

    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    // 點擊 submitBtn 按鈕時
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為

        // 先檢查必填項
        if (!checkRequiredElements()) {
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }

        // 最後檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // 如果返回 true，送出表單資料
            $('#formJobEdit').submit(); // 提交表單
            console.log('表單資料已送出');
        } else {
            // 如果返回 false，顯示警告訊息
            swalToastWarning(' 請填上正確資料唷！', 'top');
        }
    });

});
// 限制確認必填class是否都已有值，才可傳送。function來自formComm.js
// validAllRequiredForm('submitBtn', 'editJobForm');