// ****************************傳資料至後端未完成

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
//         'salaryType': '面議',
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
//         'salaryType': '面議',
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
//         'salaryType': '面議',
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
//         'salaryType': '面議',
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



$(function () {
    let table = $('#myJobList').DataTable({
        ...commonSettingsTable,
        "data": dataset_myJob,
        "columns": [
            {
                data: 'id', title: '<i class="fa-regular fa-square-check"></i>', render: function (data) {
                    return '<input type="checkbox" class="form-check-input border-primary job-checkbox" value=' + data + '>'
                }, className: 'text-center'
            },
            { data: 'createDate', title: "刊登日期" }, // 1
            { data: 'deptOf', title: "科系限制" }, // 2
            { data: 'jobTitle', title: "職務名稱" }, // 3
            { data: 'jobEmployment', title: '工作<br class="d-none d-lg-black">性質' }, // 4
            { data: 'jobTime', title: "工作時間" }, // 5
            { data: 'applicationDeadline', title: "截止日期" }, // 6
            {
                data: 'id', title: "詳情",
                render: function (data) {
                    return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#jobDetailsModal" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>';
                },
            },
            {
                data: 'id', title: "修改",
                render: function (data) {
                    // return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./jobEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>';
                    return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="../Jobs/Edit/' + data + '"><i class="fa-solid fa-wrench"></i></a>';
                },
            },
        ],
        "order": [[1, "desc"], [0, "asc"]],
        "columnDefs": [
            { targets: [0], responsivePriority: 1 },
            { targets: [2], responsivePriority: 2 },
            { targets: [3], responsivePriority: 3 },
            { searchable: false, orderable: false, targets: [0, 7, 8] },
            { className: "text-nowrap", targets: [0, 1, 5, 6] },
            { className: "text-lg-center", targets: [1, 4, 5, 6, 7, 8] },
        ],
        createdRow: function (row, data, dataIndex) {
            [0, 7, 8].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
            });
            [1, 5, 6].forEach(function (colIdx) {
                $('td:eq(' + colIdx + ')', row).css('min-width', '130px').css('font-size', '.95em');
            });
        }
    });

    $('#jobDetailsModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let jobId = String(button.data('id'));
        // console.log('Button clicked, jobId:', jobId);

        // console.log('jobId type:', typeof jobId);

        let jobData = dataset_myJob.find(job => job.id === jobId);

        if (jobData) {
            // console.log('Job data found:', jobData);
            $('#companyName').text(jobData.company);
            $('#companyDescription').text(jobData.companyDescription);
            $('#jobTitle').text(jobData.jobTitle);
            $('#jobEmployment').text(jobData.jobEmployment);
            $('#deptOf').text(jobData.deptOf);
            $('#jobTime').text(jobData.jobTime);
            $('#vacationSystem').text(jobData.vacationSystem);
            $('#salaryDetails').text(jobData.salaryStyle + "：" + jobData.salaryAmount);
            // $('#jobContent').html(convertNewlinesToBreaks(jobData.jobContent));
            $('#jobContent').html(jobData.jobContent);
            $('#jobCondition').html(jobData.jobCondition);
            $('#jobConnect').html(jobData.jobConnect);
            $('#jobLocation').html(jobData.jobLocation);
            $('#applicationDeadline').text(jobData.applicationDeadline);
        } else {
            console.error('Job data not found for id:', jobId);
        }
    });

    $('#deleteTheseJobs').on('click', function () {
        let selectedIds = [];

        // 遍歷每一行，檢查第一列複選框是否選中
        table.rows().every(function () {
            let row = this.node();
            let checkbox = $(row).find('.job-checkbox');

            // 如果複選框被選中，獲取該行的ID
            if (checkbox.prop('checked')) {
                let rowData = this.data();
                selectedIds.push(rowData.id);
            }
        });

        // 如果没有選中任何行，提示用戶
        if (selectedIds.length === 0) {
            swalToastWarning('請先勾選欲刪除的招聘職缺。', 'top');
            return;
        }

        // console.log(selectedIds);
        // 向後端發送删除請求
        // $.ajax({
        //     url: 'asp.net的東西',
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify(requestData),
        //     success: function (response) {
        //         console.log('Delete request successful', response);
        //     },
        //     error: function (xhr, status, error) {
        //         console.error('Error deleting jobs', error);
        //     }
        // });
        // swalToastSuccess('所選職缺已刪除。', 'top');

        // 向後端發送删除請求
        $.ajax({
            // url: '@Url.Action("Delete", "JobVacancies")',
            url: deleteUrl, // 使用預先生成的URL
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(selectedIds),  // 確認這裡發送的是一個字串數組
            success: function (response) {
                // console.log('Delete request successful', response);
                // table.ajax.reload(); // 刷新表格
                swalToastSuccess(response.message, 'top');// 2秒
                setTimeout(function () {
                    location.reload();
                }, 2300);  //2.3秒後
            },
            error: function (xhr, status, error) {
                console.error('Error deleting jobs', error);
                swalToastWarning('刪除職缺時發生錯誤。', 'top');
            }
        });
    });

});