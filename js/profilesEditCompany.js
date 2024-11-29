var companyData = 
    {
        'id': '1',
        'name': "南方科技有限公司",
        'createDate': "2024-07-25",
        'userId': "23456780",
        'type': "培育廠商",
        'editBy': "張小麵",
        'status': "啟用",

        'companyDetails': {
            'id':'1',
            'companyDescription': "專業提供高科技產品製造與銷售",
            'uniformNum': "23456780",
            'creationDate': "2010-12-03",
            'capitalAmount': "5,678,000",
            'employeesNum': "120",
            'responsiblePerson': "王大明",
            'referrer': "李小美",
            'phone': "02-87654321",
            'companyEmail': "abc@gmail.com",
            'lineId': "nftech123",
            'contactPerson': "張小華",
            'ext': "1234",
            'jobTitle': "製造總監",
            'companyAdd': "台北市中山區中山北路100號",
            'locationOfCompany': "台北市信義區信義路200號",
            'helpItems': "提升製造效率、品質控制",
            'tutoringProfessor': '黃飛鴻',
            'nurtureProgram': '中國傳統武術發揚光大',
            'adminNoteWithCompany': '副業：十三姨古典洋裝',
            'companyProof': "20240926095207_CP2.pdf",
            'businessProof': "20240829163435_BP1.pdf",
            'memoOfCooperation': "20240829163435_MOC1.pdf",
            'planConcept': "20240829163435_PC1.pdf",
            'entryForm': "20240829163435_EF1.pdf",
            'consentDoc': "20240829163435_CD1.pdf",
            'payProof': "20240829163435_PP1.pdf",

        },
        'entryContract': [
            {
                'FEC_Id' : "1",
                'FEC_FileName' : "20241126140126_EC1.pdf",
                'FEC_Note' : "20241126"
            },
            {
                'FEC_Id' : "2",
                'FEC_FileName' : "20241126140127_EC1.pdf",
                'FEC_Note' : "20241127"
            },
        ]
    };


$(function(){
    $('#companyName').val(companyData.name);
    $('#helpItems').text(companyData.companyDetails.creationDate);
    $('#uniformNum').val(companyData.companyDetails.uniformNum);
    $('#capitalAmount').val(companyData.companyDetails.capitalAmount);
    $('#responsiblePerson').val(companyData.companyDetails.responsiblePerson);
    $('#companyAdd').val(companyData.companyDetails.companyAdd);
    $('#locationOfCompany').val(companyData.companyDetails.locationOfCompany);
    $('#employeesNum').val(companyData.companyDetails.employeesNum);
    $('#referrer').val(companyData.companyDetails.referrer);
    $('#contactPerson').val(companyData.companyDetails.contactPerson);
    $('#ext').val(companyData.companyDetails.ext);
    $('#jobTitle').val(companyData.companyDetails.jobTitle);
    $('#companyPhone').val(companyData.companyDetails.phone);
    $('#companyEmail').val(companyData.companyDetails.companyEmail);
    $('#lineId').val(companyData.companyDetails.lineId);
    $('#adminNote').val(companyData.companyDetails.adminNoteWithCompany);
    $('#businessItems').text(companyData.companyDetails.companyDescription);
    $('#helpItems').text(companyData.companyDetails.helpItems);

    $('#tutoringProfessor').text(companyData.companyDetails.tutoringProfessor);
    $('#nurtureProgram').text(companyData.companyDetails.nurtureProgram);

    // 動態生成下載連結
    let downloadLinks = '';
    let updateText = '<span class="mx-1 update">補</span>';

    // 簡化後的函數，用來生成下載連結

    function generateDownloadLink(fileKey, fileId, fileLabel, filePrefix) {
        if (!fileKey || !fileId) return '';
        let fileNo = extractSubstringBetween(fileKey, "_", ".");
        // console.log(`${filePrefix}1 = `, fileNo);
        if (fileNo === `${filePrefix}1`) {
            return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i></a>`;
        } else {
            return `<a class="d-inline me-3" href="../DownloadInformation/${filePrefix}_${fileId}">${fileLabel}&ensp;<i class="fa-solid fa-download"></i>${updateText}</a>`;
        }
    }

    // 公司相關下載連結
    let companyId = companyData.companyDetails.id;
    if (companyData.companyDetails) {
        // 使用生成函數創建各項下載連結
        if (companyData.companyDetails.companyProof) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.companyProof, companyId, '公司登記證', 'CP');
        }
        if (companyData.companyDetails.businessProof) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.businessProof, companyId, '營利事業登記證或預查名稱表影本', 'BP');
        }
        if (companyData.companyDetails.memoOfCooperation) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.memoOfCooperation, companyId, '企業與大同大學教職員簽訂之合作備忘錄', 'MOC');
        }
        if (companyData.companyDetails.planConcept) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.planConcept, companyId, '企業營運計畫構想書', 'PC');
        }
        if (companyData.companyDetails.entryForm) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.entryForm, companyId, '創新育成中心進駐申請書', 'EF');
        }
        if (companyData.companyDetails.consentDoc) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.consentDoc, companyId, '同意審查聲明書', 'CD');
        }
        if (companyData.companyDetails.payProof) {
            downloadLinks += generateDownloadLink(companyData.companyDetails.payProof, companyId, '進駐審查費繳費證明', 'PP');
        }
    }
    // 合約相關下載連結
    if (companyData.entryContract && Array.isArray(companyData.entryContract)) {
        // console.log()
        companyData.entryContract.forEach(contract => {
            if (contract.FEC_FileName) {
                downloadLinks += generateDownloadLink(contract.FEC_FileName, `${companyId}_${contract.FEC_Id}`, `合約書(${contract.FEC_Note})`, 'EC');
                // console.log('contract.FEC_FileName: ', contract.FEC_FileName);
                // console.log('contract.FEC_Id: ', contract.FEC_Id);
            }
        });
    }

    // 更新下載連結區域
    $('#downloadLinksContainer').html(downloadLinks);


});