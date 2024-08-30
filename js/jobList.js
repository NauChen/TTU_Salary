// DataTable設定 - 搜尋左上，無自選顯示個數(預設10筆)，職缺唯讀
let commonSettingsReadonlyJobTable = {
    layout: {
        topStart: {
            search: {
                placeholder: '關鍵字搜尋'
            }
        },
        topEnd: null,
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                numbers: 5
            }
        }
    },
    "columns": [
        { data: 'createDate', title: "刊登日期" },
        { data: 'company', title: "公司名稱" },
        { data: 'jobTitle', title: "職務名稱" },
        { data: 'jobEmployment', title: "工作性質", className: 'text-center' },
        { data: 'jobTime', title: "工作時間" },
        { data: 'applicationDeadline', title: "截止日期" },
        {
            data: 'id', title: "詳情",
            render: function (data) {
                return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#jobDetailsModal" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>';
            }
        },
    ],
    "columnDefs": [
        { targets: [0], responsivePriority: 3 },
        { targets: [3], responsivePriority: 1 },
        { targets: [4], responsivePriority: 2 },
        { searchable: false, orderable: false, targets: [6] },
        { className: "text-nowrap", targets: [0, 3, 4, 5] },
        { className: "text-lg-center", targets: [0, 4, 5, 6] },
    ],
    createdRow: function (row, data, dataIndex) {
        $('td:eq(6)', row).css('max-width', '70px');
        $('td:eq(0)', row).css('min-width', '130px');
        [4, 5].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
        });
        [0, 4, 5].forEach(function (colIdx) {
            $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
        });
    },
    "order": [[0, "desc"]],
    responsive: true,
    language: {
        lengthMenu: "顯示 _MENU_ 筆",
        sProcessing: "處理中...",
        loadingRecords: "載入中...",
        sZeroRecords: "OOPS！没有匹配的结果",
        sInfo: "共有 _MAX_ 筆",
        sInfoEmpty: "共有 0 筆",
        sInfoFiltered: " ",
        sInfoPostFix: "",
        sSearch: '<i class="fa fa-search px-1" aria-hidden="true"></i>',
        sUrl: "",
        sEmptyTable: "尚未有資料紀錄存在",
        sLoadingRecords: "載入中...",
        sInfoThousands: ",",
        oPaginate: {
            sFirst: '<i class="fa fa-step-backward" aria-hidden="true"></i>',
            sPrevious: '<i class="fa fa-caret-left" aria-hidden="true"></i>',
            sNext: '<i class="fa fa-caret-right" aria-hidden="true"></i>',
            sLast: '<i class="fa fa-step-forward" aria-hidden="true"></i>',
        },
        oAria: {
            sSortAscending: ": 以升序排列此列",
            sSortDescending: ": 以降序排列此列",
        },
    },
    "headerCallback": function (thead, data, start, end, display) {
        $(thead).find('th').addClass('text-center text-nowrap align-middle');
    },
};

// let dataset_jobList = [
//     {
//         "id": "1",
//         "createDate": "2024-04-25",
//         "company": "綜合工廠有限公司",
//         "jobTitle": "資深工程師",
//         "jobEmployment": "全職",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-05-31",
//         "jobContent": "負責設計和實施新產品的生產流程",
//         "jobLocation": "綜合工廠大樓 403",
//         "deptOf": "不限學系",
//         "vacationSystem": "周休二日",
//         "jobCondition": "積極主動",
//         "jobConnect": "聯繫人：hr@example.com",
//         "companyDescription": "綜合工廠有限公司是一家專注於高端製造的公司，致力於提供最佳的生產解決方案。",
//         "salaryType": "月薪",
//         "salaryAmount": "35,000元"
//     },
//     {
//         "id": "2",
//         "createDate": "2024-04-26",
//         "company": "挺生科技股份有限公司",
//         "jobTitle": "市場推廣專員",
//         "jobEmployment": "全職",
//         "jobTime": "10:00 ~ 17:00",
//         "applicationDeadline": "2024-06-15",
//         "jobContent": "負責市場調研和制定推廣策略",
//         "jobLocation": "挺生大樓 706",
//         "deptOf": "事業經營學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創意思維",
//         "jobConnect": "聯繫人：info@tingsheng.com",
//         "companyDescription": "挺生科技股份有限公司是一家致力於創新科技產品的研發與推廣的公司。",
//         "salaryType": "日薪",
//         "salaryAmount": "1,800元"
//     },
//     {
//         "id": "3",
//         "createDate": "2024-04-27",
//         "company": "尚志地產開發有限公司",
//         "jobTitle": "物業管理員",
//         "jobEmployment": "工讀",
//         "jobTime": "08:30 ~ 17:30",
//         "applicationDeadline": "2024-06-10",
//         "jobContent": "負責物業日常運營和客戶服務",
//         "jobLocation": "尚志大樓 702B",
//         "deptOf": "事業經營學系",
//         "vacationSystem": "彈性休假",
//         "jobCondition": "耐心細心",
//         "jobConnect": "聯繫人：property@shangzhi.com",
//         "companyDescription": "尚志地產開發有限公司致力於提供高品質的住宅和商業物業開發服務。",
//         "salaryType": "月薪",
//         "salaryAmount": "28,000元"
//     },
//     {
//         "id": "4",
//         "createDate": "2024-04-28",
//         "company": "新維京製造股份有限公司",
//         "jobTitle": "生產線工人",
//         "jobEmployment": "全職",
//         "jobTime": "07:00 ~ 15:30",
//         "applicationDeadline": "2024-06-05",
//         "jobContent": "負責製造流水線上的生產作業",
//         "jobLocation": "綜合工廠大樓 404",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "勤奮守時",
//         "jobConnect": "聯繫人：hr@xinweijing.com",
//         "companyDescription": "新維京製造股份有限公司專注於精密零件製造和組裝，擁有先進的生產設施和管理團隊。",
//         "salaryType": "月薪",
//         "salaryAmount": "24,000元"
//     },
//     {
//         "id": "5",
//         "createDate": "2024-04-29",
//         "company": "安全監控科技有限公司",
//         "jobTitle": "系統工程師",
//         "jobEmployment": "全職",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-05-30",
//         "jobContent": "負責設計和實施安全監控系統",
//         "jobLocation": "綜合工廠大樓 402A",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創新解決方案",
//         "jobConnect": "聯繫人：hr@securitytech.com",
//         "companyDescription": "安全監控科技有限公司專注於提供全方位的安全監控和解決方案，應用於各種場所。",
//         "salaryType": "按件計酬",
//         "salaryAmount": "300元/件"
//     },
//     {
//         "id": "6",
//         "createDate": "2024-04-30",
//         "company": "綜合工廠有限公司",
//         "jobTitle": "品質檢測員",
//         "jobEmployment": "全職",
//         "jobTime": "08:00 ~ 17:00",
//         "applicationDeadline": "2024-06-20",
//         "jobContent": "負責產品品質檢測和報告撰寫",
//         "jobLocation": "綜合工廠大樓 405",
//         "deptOf": "化學工程與生物科技學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "細緻耐心",
//         "jobConnect": "聯繫人：quality@factory.com",
//         "companyDescription": "綜合工廠有限公司專注於高質量製造和服務，擁有先進的生產技術和質量管理體系。",
//         "salaryType": "面議(1000元以上)",
//         "salaryAmount": "時薪"
//     },
//     {
//         "id": "7",
//         "createDate": "2024-05-01",
//         "company": "挺生科技股份有限公司",
//         "jobTitle": "資深軟體工程師",
//         "jobEmployment": "全職",
//         "jobTime": "10:00 ~ 19:00",
//         "applicationDeadline": "2024-06-25",
//         "jobContent": "負責大型軟體系統的開發和維護",
//         "jobLocation": "挺生大樓 710",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創新精神",
//         "jobConnect": "聯繫人：hr@tingsheng.com",
//         "companyDescription": "挺生科技股份有限公司是一家致力於開發創新軟體解決方案的公司，擁有多年的技術積累。",
//         "salaryType": "月薪",
//         "salaryAmount": "40,000元"
//     },
//     {
//         "id": "8",
//         "createDate": "2024-05-02",
//         "company": "新維京製造股份有限公司",
//         "jobTitle": "機械設計師",
//         "jobEmployment": "工讀",
//         "jobTime": "08:30 ~ 17:30",
//         "applicationDeadline": "2024-06-30",
//         "jobContent": "負責製造設備的機械設計和優化",
//         "jobLocation": "綜合工廠大樓 402",
//         "deptOf": "電機工程學系",
//         "vacationSystem": "彈性休假",
//         "jobCondition": "創意思維",
//         "jobConnect": "聯繫人：hr@xinweijing.com",
//         "companyDescription": "新維京製造股份有限公司專注於精密機械製造和設計，擁有一流的工程師團隊。",
//         "salaryType": "月薪",
//         "salaryAmount": "32,000元"
//     },
//     {
//         "id": "9",
//         "createDate": "2024-05-03",
//         "company": "尚志地產開發有限公司",
//         "jobTitle": "建築設計師",
//         "jobEmployment": "全職",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-15",
//         "jobContent": "負責住宅和商業建築的設計和規劃",
//         "jobLocation": "尚志大樓 701",
//         "deptOf": "工業設計學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創意設計",
//         "jobConnect": "聯繫人：design@shangzhi.com",
//         "companyDescription": "尚志地產開發有限公司致力於打造創新和高品質的住宅和商業建築項目。",
//         "salaryType": "時薪",
//         "salaryAmount": "面議(1000元以上)"
//     },
//     {
//         "id": "10",
//         "createDate": "2024-05-04",
//         "company": "安全監控科技有限公司",
//         "jobTitle": "資訊安全工程師",
//         "jobEmployment": "全職",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-10",
//         "jobContent": "負責企業資訊系統的安全防護和應急響應",
//         "jobLocation": "綜合工廠大樓 707",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "技術熱情",
//         "jobConnect": "聯繫人：hr@securitytech.com",
//         "companyDescription": "安全監控科技有限公司專注於提供全方位的安全監控和解決方案，應用於各種場所。",
//         "salaryType": "月薪",
//         "salaryAmount": "36,000元"
//     },
//     {
//         "id": "11",
//         "createDate": "2024-05-05",
//         "company": "綜合工廠有限公司",
//         "jobTitle": "生產主管",
//         "jobEmployment": "工讀",
//         "jobTime": "08:00 ~ 17:00",
//         "applicationDeadline": "2024-06-20",
//         "jobContent": "負責生產流程的管理和優化",
//         "jobLocation": "綜合工廠大樓 404",
//         "deptOf": "資訊經營學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "領導能力",
//         "jobConnect": "聯繫人：hr@factory.com",
//         "companyDescription": "綜合工廠有限公司專注於高質量製造和服務，擁有先進的生產技術和質量管理體系。",
//         "salaryType": "月薪",
//         "salaryAmount": "30,000元"
//     },
//     {
//         "id": "12",
//         "createDate": "2024-05-06",
//         "company": "挺生科技股份有限公司",
//         "jobTitle": "硬體工程師",
//         "jobEmployment": "全職",
//         "jobTime": "10:00 ~ 19:00",
//         "applicationDeadline": "2024-06-25",
//         "jobContent": "負責嵌入式系統和硬體設計",
//         "jobLocation": "挺生大樓 708",
//         "deptOf": "工業設計學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創新精神",
//         "jobConnect": "聯繫人：hr@tingsheng.com",
//         "companyDescription": "挺生科技股份有限公司是一家致力於開發創新科技產品的公司，擁有多年的技術積累。",
//         "salaryType": "月薪",
//         "salaryAmount": "38,000元"
//     },
//     {
//         "id": "13",
//         "createDate": "2024-05-07",
//         "company": "新維京製造股份有限公司",
//         "jobTitle": "自動化工程師",
//         "jobEmployment": "全職",
//         "jobTime": "08:30 ~ 17:30",
//         "applicationDeadline": "2024-06-30",
//         "jobContent": "負責生產自動化設備的設計和安裝",
//         "jobLocation": "綜合工廠大樓 402A",
//         "deptOf": "工業設計學系",
//         "vacationSystem": "彈性休假",
//         "jobCondition": "創意思維",
//         "jobConnect": "聯繫人：hr@xinweijing.com",
//         "companyDescription": "新維京製造股份有限公司專注於精密機械製造和設計，擁有一流的工程師團隊。",
//         "salaryType": "按件計酬",
//         "salaryAmount": "250元/件"
//     },
//     {
//         "id": "14",
//         "createDate": "2024-05-08",
//         "company": "尚志地產開發有限公司",
//         "jobTitle": "項目經理",
//         "jobEmployment": "工讀",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-15",
//         "jobContent": "負責住宅和商業項目的規劃和執行",
//         "jobLocation": "尚志大樓 702A",
//         "deptOf": "媒體設計學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "領導力和決策能力",
//         "jobConnect": "聯繫人：project@shangzhi.com",
//         "companyDescription": "尚志地產開發有限公司致力於打造創新和高品質的住宅和商業建築項目。",
//         "salaryType": "時薪",
//         "salaryAmount": "面議(1000元以上)"
//     },
//     {
//         "id": "15",
//         "createDate": "2024-05-09",
//         "company": "安全監控科技有限公司",
//         "jobTitle": "網路安全專家",
//         "jobEmployment": "工讀",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-10",
//         "jobContent": "負責企業網路安全和資料保護",
//         "jobLocation": "綜合工廠大樓 404",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "技術熱情",
//         "jobConnect": "聯繫人：hr@securitytech.com",
//         "companyDescription": "安全監控科技有限公司專注於提供全方位的安全監控和解決方案，應用於各種場所。",
//         "salaryType": "月薪",
//         "salaryAmount": "34,000元"
//     },
//     {
//         "id": "16",
//         "createDate": "2024-05-10",
//         "company": "綜合工廠有限公司",
//         "jobTitle": "行政助理",
//         "jobEmployment": "工讀",
//         "jobTime": "08:00 ~ 17:00",
//         "applicationDeadline": "2024-06-20",
//         "jobContent": "負責辦公室日常行政支持，接待外賓。",
//         "jobLocation": "綜合工廠大樓 707",
//         "deptOf": "應用外語學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "細心周到",
//         "jobConnect": "聯繫人：hr@factory.com",
//         "companyDescription": "綜合工廠有限公司專注於高質量製造和服務，擁有先進的生產技術和質量管理體系。",
//         "salaryType": "時薪",
//         "salaryAmount": "面議(1000元以上)"
//     },
//     {
//         "id": "17",
//         "createDate": "2024-05-11",
//         "company": "挺生科技股份有限公司",
//         "jobTitle": "軟體工程師",
//         "jobEmployment": "全職",
//         "jobTime": "10:00 ~ 19:00",
//         "applicationDeadline": "2024-06-25",
//         "jobContent": "負責企業軟體系統的開發和維護",
//         "jobLocation": "挺生大樓 711",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "創新思維",
//         "jobConnect": "聯繫人：hr@tingsheng.com",
//         "companyDescription": "挺生科技股份有限公司是一家致力於開發創新科技產品的公司，擁有多年的技術積累。",
//         "salaryType": "月薪",
//         "salaryAmount": "42,000元"
//     },
//     {
//         "id": "18",
//         "createDate": "2024-05-12",
//         "company": "新維京製造股份有限公司",
//         "jobTitle": "品管主管",
//         "jobEmployment": "全職",
//         "jobTime": "08:30 ~ 17:30",
//         "applicationDeadline": "2024-06-30",
//         "jobContent": "負責產品品質管理和改進",
//         "jobLocation": "綜合工廠大樓 403",
//         "deptOf": "事業經營學系",
//         "vacationSystem": "彈性休假",
//         "jobCondition": "品質控制",
//         "jobConnect": "聯繫人：hr@xinweijing.com",
//         "companyDescription": "新維京製造股份有限公司專注於精密機械製造和設計，擁有一流的工程師團隊。",
//         "salaryType": "月薪",
//         "salaryAmount": "34,000元"
//     },
//     {
//         "id": "19",
//         "createDate": "2024-05-13",
//         "company": "尚志地產開發有限公司",
//         "jobTitle": "市場營銷經理",
//         "jobEmployment": "工讀",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-15",
//         "jobContent": "負責市場策略和品牌推廣",
//         "jobLocation": "尚志大樓 708",
//         "deptOf": "媒體設計學系",
//         "vacationSystem": "彈性工時",
//         "jobCondition": "市場洞察",
//         "jobConnect": "聯繫人：marketing@shangzhi.com",
//         "companyDescription": "尚志地產開發有限公司致力於打造創新和高品質的住宅和商業建築項目。",
//         "salaryType": "時薪",
//         "salaryAmount": "面議(1000元以上)"
//     },
//     {
//         "id": "20",
//         "createDate": "2024-05-14",
//         "company": "安全監控科技有限公司",
//         "jobTitle": "系統架構師",
//         "jobEmployment": "工讀",
//         "jobTime": "09:00 ~ 18:00",
//         "applicationDeadline": "2024-06-10",
//         "jobContent": "負責企業系統架構設計和優化",
//         "jobLocation": "綜合工廠大樓 402",
//         "deptOf": "資訊工程學系",
//         "vacationSystem": "固定休息日",
//         "jobCondition": "技術領導",
//         "jobConnect": "聯繫人：hr@securitytech.com",
//         "companyDescription": "安全監控科技有限公司專注於提供全方位的安全監控和解決方案，應用於各種場所。",
//         "salaryType": "月薪",
//         "salaryAmount": "38,000元"
//     }
// ];
// console.log(dataset_jobList);

const engineeringList = ["機械與材料工程學系", "化學工程與生物科技學系", "電機工程學系", "資訊工程學系"];
const managementList = ["事業經營學系", "資訊經營學系"];
const designList = ["工業設計學系", "媒體設計學系"];
const languageList = ["應用外語學系"];

let dataset_jobEngineeringList = dataset_jobList.filter(item => engineeringList.includes(item.deptOf));
let dataset_jobManagementList = dataset_jobList.filter(item => managementList.includes(item.deptOf));
let dataset_jobDesignList = dataset_jobList.filter(item => designList.includes(item.deptOf));
let dataset_jobLanguageList = dataset_jobList.filter(item => languageList.includes(item.deptOf));

$(function () {
    $('#jobAllList').DataTable({
        ...commonSettingsReadonlyJobTable,
        "data": dataset_jobList
    });

    $('#jobEngineeringList').DataTable({
        ...commonSettingsReadonlyJobTable,
        "data": dataset_jobEngineeringList
    });

    $('#jobManagementList').DataTable({
        ...commonSettingsReadonlyJobTable,
        "data": dataset_jobManagementList
    });

    $('#jobDesignList').DataTable({
        ...commonSettingsReadonlyJobTable,
        "data": dataset_jobDesignList
    });

    $('#jobLanguageList').DataTable({
        ...commonSettingsReadonlyJobTable,
        "data": dataset_jobLanguageList
    });

    $('#jobDetailsModal').on('show.bs.modal', function (event) {
        let button = $(event.relatedTarget);
        let jobId = String(button.data('id'));
        // console.log('Button clicked, jobId:', jobId);

        // console.log('jobId type:', typeof jobId);

        let jobData = dataset_jobList.find(job => job.id === jobId);

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
            $('#jobContent').html(jobData.jobContent);
            $('#jobCondition').html(jobData.jobCondition);
            $('#jobConnect').html(jobData.jobConnect);
            $('#jobLocation').html(jobData.jobLocation);
            $('#applicationDeadline').text(jobData.applicationDeadline);
        } else {
            console.error('Job data not found for id:', jobId);
        }
    });
});

// $(function () {
//     var table1 = $('#jobAllList').DataTable();
//     var table2 = $('#jobEngineeringList').DataTable();
//     var table3 = $('#jobManagementList').DataTable();
//     var table4 = $('#jobDesignList').DataTable();
//     var table5 = $('#jobLanguageList').DataTable();
//     // 監聽Bootstrap的切換事件
//     $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
//         setTimeout(function () {
//             table1.columns.adjust().responsive.recalc();
//             table2.columns.adjust().responsive.recalc();
//             table3.columns.adjust().responsive.recalc();
//             table4.columns.adjust().responsive.recalc();
//             table5.columns.adjust().responsive.recalc();
//         }, 50);
//     });
// });

$(function () {
    var table1 = $('#jobAllList').DataTable();
    var table2 = $('#jobEngineeringList').DataTable();
    var table3 = $('#jobManagementList').DataTable();
    var table4 = $('#jobDesignList').DataTable();
    var table5 = $('#jobLanguageList').DataTable();

    // 監聽Bootstrap的切換事件
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).data("bs-target"); // 獲取當前顯示的 tab 目標
        var table;

        switch (target) {
            case '#nav-all':
                table = table1;
                break;
            case '#nav-engineering':
                table = table2;
                break;
            case '#nav-management':
                table = table3;
                break;
            case '#nav-design':
                table = table4;
                break;
            case '#nav-language':
                table = table5;
                break;
        }
        if (table) {
            setTimeout(function () {
                table.columns.adjust().responsive.recalc();
            }, 30);
        }
    });
});
