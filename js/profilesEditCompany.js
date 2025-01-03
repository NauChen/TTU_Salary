// var userCompanyData =
// {
//     'id': '1',
//     'name': "南方科技有限公司",
//     'createDate': "2024-07-25",
//     'userId': "23456780",
//     'type': "培育廠商",
//     'editBy': "張小麵",
//     'status': "啟用",

//     'companyDetails': {
//         'id': '1',
//         'companyDescription': "專業提供高科技產品製造與銷售",
//         'uniformNum': "23456780",
//         'creationDate': "2010-12-03",
//         'capitalAmount': "5,678,000",
//         'employeesNum': "120",
//         'responsiblePerson': "王大明",
//         'referrer': "李小美",
//         'phone': "02-87654321",
//         'companyEmail': "abc@gmail.com",
//         'lineId': "nftech123",
//         'contactPerson': "張小華",
//         'ext': "1234",
//         'jobTitle': "製造總監",
//         'companyAdd': "台北市中山區中山北路100號",
//         'locationOfCompany': "台北市信義區信義路200號",
//         'helpItems': "提升製造效率、品質控制",
//         'tutoringProfessor': '黃飛鴻',
//         'nurtureProgram': '中國傳統武術發揚光大',
//         'adminNoteWithCompany': '副業：十三姨古典洋裝',
//         'companyProof': "20240926095207_CP2.pdf",
//         'businessProof': "20240829163435_BP1.pdf",
//         'memoOfCooperation': "20240829163435_MOC1.pdf",
//         'planConcept': "20240829163435_PC1.pdf",
//         'entryForm': "20240829163435_EF1.pdf",
//         'consentDoc': "20240829163435_CD1.pdf",
//         'payProof': "20240829163435_PP1.pdf",

//     },
//     'entryContract': [
//         {
//             'FEC_Id': "1",
//             'FEC_FileName': "20241126140126_EC1.pdf",
//             'FEC_Note': "20241126"
//         },
//         {
//             'FEC_Id': "2",
//             'FEC_FileName': "20241126140127_EC1.pdf",
//             'FEC_Note': "20241127"
//         },
//     ]
// };

function updateFileInfo() {
    const fileInput = document.getElementById('EC_newOne');
    const fileInfo = document.getElementById('fileInfo_EC_newOne');
    const newECMark = document.getElementById('newECMark');

    // 更新 fileInfo 的內容
    fileInfo.innerHTML = fileInput.value;

    // 根據 fileInfo 的內容更新 newECMark
    if (fileInfo.innerHTML.trim() !== '') {
        newECMark.textContent = '*';
    } else {
        newECMark.innerHTML = '&ensp;';
    }

    // 更新表單高度
    setFormHeight();
}


$(function () {
    $('#companyName').val(userCompanyData.name);
    $('#creationDate').val(userCompanyData.companyDetails.creationDate);
    $('#uniformNum').val(userCompanyData.companyDetails.uniformNum);
    $('#capitalAmount').val(userCompanyData.companyDetails.capitalAmount);
    $('#responsiblePerson').val(userCompanyData.companyDetails.responsiblePerson);
    $('#companyAdd').val(userCompanyData.companyDetails.companyAdd);
    $('#locationOfCompany').val(userCompanyData.companyDetails.locationOfCompany);
    $('#employeesNum').val(userCompanyData.companyDetails.employeesNum);
    $('#referrer').val(userCompanyData.companyDetails.referrer);
    $('#contactPerson').val(userCompanyData.companyDetails.contactPerson);
    $('#ext').val(userCompanyData.companyDetails.ext);
    $('#jobTitle').val(userCompanyData.companyDetails.jobTitle);
    $('#companyPhone').val(userCompanyData.companyDetails.phone);
    $('#companyEmail').val(userCompanyData.companyDetails.companyEmail);
    $('#lineId').val(userCompanyData.companyDetails.lineId);
    $('#adminNote').val(userCompanyData.companyDetails.adminNoteWithCompany);
    $('#businessItems').text(userCompanyData.companyDetails.companyDescription);
    $('#helpItems').text(userCompanyData.companyDetails.helpItems);

    $('#tutoringProfessor').text(userCompanyData.companyDetails.tutoringProfessor);
    $('#nurtureProgram').text(userCompanyData.companyDetails.nurtureProgram);

    // 初始設定
    var $creationAdd = $("#companyAdd");
    var $creationLocalAdd = $("#locationOfCompany");
    var $sameAdd = $('#sameAdd');

    // 初始化檢查，若#locationOfCompany與#companyAdd相同，自動勾選#sameAdd
    if ($creationAdd.val().trim() === $creationLocalAdd.val().trim()) {
        $sameAdd.prop('checked', true);
    }
    checkSameAddStatus();

    // 勾選#sameAdd時，將#locationOfCompany的值設為#companyAdd
    $sameAdd.change(function () {
        if ($sameAdd.is(":checked")) {
            $creationLocalAdd.val($creationAdd.val());
            $('#danger_locationOfCompany').text(''); // 清除錯誤訊息
        }
    });

    // 當#locationOfCompany或#companyAdd輸入框改變時，取消勾選#sameAdd
    $creationLocalAdd.change(function () {
        $sameAdd.prop('checked', false);
        checkSameAddStatus();
    });

    $creationAdd.change(function () {
        $sameAdd.prop('checked', false);
        checkSameAddStatus();
    });

    // 檢查並更新#sameAdd狀態
    function checkSameAddStatus() {
        if ($creationAdd.val().trim() === '') {
            $sameAdd.prop('checked', false);
            $sameAdd.prop('disabled', true); // 禁用
        } else {
            $sameAdd.prop('disabled', false); // 啟用
        }
    }

    // // 動態生成下載連結
    // let downloadLinks = '';
    // let updateText = '<span class="mx-1 update">補</span>';

    // // 簡化後的函數，用來生成下載連結

    // function generateDownloadLink(fileKey, fileId, fileLabel, filePrefix) {
    //     if (!fileKey || !fileId) return '';
    //     let fileNo = extractSubstringBetween(fileKey, "_", ".");
    //     // console.log(`${filePrefix}1 = `, fileNo);
    //     if (fileNo === `${filePrefix}1`) {
    //         return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i></a>`;
    //     } else {
    //         return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i>${updateText}</a>`;
    //     }
    // }

    // // 公司相關下載連結
    // let companyId = companyData.companyDetails.id;
    // if (companyData.companyDetails) {
    //     // 使用生成函數創建各項下載連結
    //     if (companyData.companyDetails.companyProof) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.companyProof, companyId, '公司登記證', 'CP');
    //     }
    //     if (companyData.companyDetails.businessProof) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.businessProof, companyId, '營利事業登記證或預查名稱表影本', 'BP');
    //     }
    //     if (companyData.companyDetails.memoOfCooperation) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.memoOfCooperation, companyId, '企業與大同大學教職員簽訂之合作備忘錄', 'MOC');
    //     }
    //     if (companyData.companyDetails.planConcept) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.planConcept, companyId, '企業營運計畫構想書', 'PC');
    //     }
    //     if (companyData.companyDetails.entryForm) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.entryForm, companyId, '創新育成中心進駐申請書', 'EF');
    //     }
    //     if (companyData.companyDetails.consentDoc) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.consentDoc, companyId, '同意審查聲明書', 'CD');
    //     }
    //     if (companyData.companyDetails.payProof) {
    //         downloadLinks += generateDownloadLink(companyData.companyDetails.payProof, companyId, '進駐審查費繳費證明', 'PP');
    //     }
    // }
    // // 合約相關下載連結
    // if (companyData.entryContract && Array.isArray(companyData.entryContract)) {
    //     // console.log()
    //     companyData.entryContract.forEach(contract => {
    //         if (contract.FEC_FileName) {
    //             downloadLinks += generateDownloadLink(contract.FEC_FileName, `${companyId}_${contract.FEC_Id}`, `合約書(${contract.FEC_Note})`, 'EC');
    //             // console.log('contract.FEC_FileName: ', contract.FEC_FileName);
    //             // console.log('contract.FEC_Id: ', contract.FEC_Id);
    //         }
    //     });
    // }

    // // 更新下載連結區域
    // $('#downloadLinksContainer').html(downloadLinks);


});