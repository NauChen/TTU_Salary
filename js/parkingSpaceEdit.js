// var dataset_parkingSpaceAll = [
//     {
//         'id': '1',
//         'createDate': '2024-06-01',
//         'building': '校本部',
//         'basementNum': '10',
//         'rate': '3,000',
//         'carType': '汽車',

//         'status': '承租中',
//         'company': '馳晶科技股份有限公司',
//         'startDate': '2024-06-01',
//         'endDate': '2024-07-01',

//         'name': '李大華',
//         'phone': '02-12345678',
//         'jobTitle': '工程師',
//         'ext': '101',
//         'licensePlateNum': '5678-AB',

//         'applicationFile': '',
//         'adminNote': '費用共用車號AB-1234',
//     },
//     {
//         'id': '2',
//         'createDate': '2024-06-02',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-20',
//         'company': '宏達電股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '王小美',
//         'phone': '02-23456789',
//         'adminNote': '共用車號CD-5678',
//         'jobTitle': '經理',
//         'ext': '202',
//         'applicationFile': '',
//         'startDate': '2024-06-02',
//         'endDate': '2024-07-02',
//         'licensePlateNum': '1234-CD'
//     },
//     {
//         'id': '3',
//         'createDate': '2024-06-03',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-30',
//         'company': '威盛電子股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'name': '張志明',
//         'phone': '02-34567890',
//         'adminNote': '',
//         'jobTitle': '助理',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '2024-06-03',
//         'endDate': '2024-07-03',
//         'licensePlateNum': '1CD-234'
//     },
//     {
//         'id': '4',
//         'createDate': '2024-06-04',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-05',
//         'company': '華碩電腦股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '黃國強',
//         'phone': '02-45678901',
//         'adminNote': '費用共用車號EF-6789',
//         'jobTitle': '市場行銷',
//         'ext': '303',
//         'applicationFile': '',
//         'startDate': '2024-06-04',
//         'endDate': '2024-07-04',
//         'licensePlateNum': '3456-EF'
//     },
//     {
//         'id': '5',
//         'createDate': '2024-06-05',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-15',
//         'company': '',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '6',
//         'createDate': '2024-06-06',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-12',
//         'company': '聯發科技股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'name': '陳美麗',
//         'phone': '02-56789012',
//         'adminNote': '',
//         'jobTitle': '設計師',
//         'ext': '404',
//         'applicationFile': '',
//         'startDate': '2024-06-06',
//         'endDate': '2024-07-06',
//         'licensePlateNum': '2EF-345'
//     },
//     {
//         'id': '7',
//         'createDate': '2024-06-07',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-21',
//         'company': '台積電股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '林小龍',
//         'phone': '02-67890123',
//         'adminNote': '費用共用車號GH-7890',
//         'jobTitle': '技術顧問',
//         'ext': '505',
//         'applicationFile': '',
//         'startDate': '2024-06-07',
//         'endDate': '2024-07-07',
//         'licensePlateNum': '7890-GH'
//     },
//     {
//         'id': '8',
//         'createDate': '2024-06-08',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-08',
//         'company': '廣達電腦股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '許志安',
//         'phone': '02-78901234',
//         'adminNote': '費用共用車號IJ-2345',
//         'jobTitle': '行銷經理',
//         'ext': '606',
//         'applicationFile': '',
//         'startDate': '2024-06-08',
//         'endDate': '2024-07-08',
//         'licensePlateNum': '2345-IJ'
//     },
//     {
//         'id': '9',
//         'createDate': '2024-06-09',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-13',
//         'company': '和碩聯合科技股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'name': '周杰倫',
//         'phone': '02-89012345',
//         'adminNote': '',
//         'jobTitle': '產品經理',
//         'ext': '707',
//         'applicationFile': '',
//         'startDate': '2024-06-09',
//         'endDate': '2024-07-09',
//         'licensePlateNum': '3GH-456'
//     },
//     {
//         'id': '10',
//         'createDate': '2024-06-10',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-14',
//         'company': '',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '11',
//         'createDate': '2024-06-11',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-02',
//         'company': '友達光電股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '蔡依林',
//         'phone': '02-90123456',
//         'adminNote': '費用共用車號KL-5678',
//         'jobTitle': '行政助理',
//         'ext': '808',
//         'applicationFile': '',
//         'startDate': '2024-06-11',
//         'endDate': '2024-07-11',
//         'licensePlateNum': '5678-KL'
//     },
//     {
//         'id': '12',
//         'createDate': '2024-06-12',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-09',
//         'company': '聯合報股份有限公司',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'name': '鄭中基',
//         'phone': '02-01234567',
//         'adminNote': '',
//         'jobTitle': '記者',
//         'ext': '909',
//         'applicationFile': '',
//         'startDate': '2024-06-12',
//         'endDate': '2024-07-12',
//         'licensePlateNum': '1IJ-890'
//     },
//     {
//         'id': '13',
//         'createDate': '2024-06-13',
//         'building': '新德惠大樓',
//         'basementNum': 'B3-11',
//         'company': '中華電信股份有限公司',
//         'rate': '2,500',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '蕭敬騰',
//         'phone': '02-12345678',
//         'adminNote': '費用共用車號MN-1234',
//         'jobTitle': '客服專員',
//         'ext': '1010',
//         'applicationFile': '',
//         'startDate': '2024-06-13',
//         'endDate': '2024-07-13',
//         'licensePlateNum': '1234-MN'
//     },
//     {
//         'id': '14',
//         'createDate': '2024-06-14',
//         'building': '新德惠大樓',
//         'basementNum': 'B1-06',
//         'company': '台灣大哥大股份有限公司',
//         'rate': '3,000',
//         'status': '啟用',
//         'carType': '汽車',
//         'name': '林宥嘉',
//         'phone': '02-23456789',
//         'adminNote': '費用共用車號OP-5678',
//         'jobTitle': '資深工程師',
//         'ext': '1111',
//         'applicationFile': '',
//         'startDate': '2024-06-14',
//         'endDate': '2024-07-14',
//         'licensePlateNum': '5678-OP'
//     },
//     {
//         'id': '15',
//         'createDate': '2024-06-15',
//         'building': '新德惠大樓',
//         'basementNum': 'B2-07',
//         'company': '',
//         'rate': '100',
//         'status': '啟用',
//         'carType': '機車',
//         'name': '',
//         'phone': '',
//         'adminNote': '',
//         'jobTitle': '',
//         'ext': '',
//         'applicationFile': '',
//         'startDate': '',
//         'endDate': '',
//         'licensePlateNum': ''
//     },
//     {
//         'id': '20',
//         'carateDate': '2019-01-01',
//         'building': '校本部',
//         'room': '101',
//         'squareMeters': '10.0',
//         'rate': '100',
//         'closeDate': '2021-01-01',
//         'adminNote': '',
//         'status': '停用',
//     },
//     {
//         'id': '21',
//         'carateDate': '2020-05-01',
//         'building': '新德惠大樓',
//         'room': 'A4-102',
//         'squareMeters': '9.0',
//         'rate': '2,000',
//         'closeDate': '2021-05-01',
//         'adminNote': '心血來潮想說停用好惹',
//         'status': '停用',
//     },
// ];

$(function () {
    toggleRequiredFields();
    // 監聽 radio button 的變更事件
    $("input[name='buildingChoose']").change(function () {
        toggleRequiredFields();
    });
    function toggleRequiredFields() {
        if ($("#originalBuilding").is(":checked")) {
            // 如果選擇的是 "選擇既有"
            $("#parkingSpaceBuilding").addClass("thisRequired").attr("name", "building");
            $("#parkingSpaceBuildingNew").removeClass("thisRequired").removeAttr("name");
            $('#originalBuildingBox').show();
            $('#newBuildingBox').hide();
        } else if ($("#newBuilding").is(":checked")) {
            // 如果選擇的是 "另行輸入"
            $("#parkingSpaceBuilding").removeClass("thisRequired").removeAttr("name");
            $("#parkingSpaceBuildingNew").addClass("thisRequired").attr("name", "building");
            $('#newBuildingBox').show();
            $('#originalBuildingBox').hide();
        }
    }

    if (parkingSpaceData) {
        console.log('usedNum', parkingSpaceData.used);
        $('#parkingSpaceBuilding').val(parkingSpaceData.building);
        // 根據 parkingSpaceData 的 carType 設置 radio button 的選擇
        if (parkingSpaceData.carType === "汽車") {
            $('#car').prop('checked', true);
        } else if (parkingSpaceData.carType === "機車") {
            $('#moto').prop('checked', true);
        }
        $('#basementNum').val(parkingSpaceData.basementNum);
        $('#parkingSpaceRate').val(parkingSpaceData.rate);
        $('#parkingSpaceRemark').val(parkingSpaceData.adminNote);

        if (parkingSpaceData.used != '0') {
            console.log('XXX');
            $('#originalBuilding, #newBuilding, #parkingSpaceBuilding, #basementNum, #car, #moto, #removeParkingSpace').attr('disabled', true);
        } else {
            console.log('OOO');
            $('#originalBuilding, #newBuilding, #parkingSpaceBuilding, #basementNum, #car, #moto, #removeParkingSpace').attr('disabled', false);
        }
    } else {
        console.error('ParkingSpace data not found:', parkingSpaceData);
    }
    // 當 .thisRequired 更改時，再次執行檢查
    $('.thisRequired').on('input change', function () {
        checkThisRequiredElements.call(this);
    });

    // 點擊 submitBtn 按鈕時
    $('#submitBtn').click(function (event) {
        event.preventDefault(); // 防止表單預設提交行為
        // console.log('防止表單預設提交行為');
        // 先檢查必填項
        if (!checkRequiredElements()) {
            console.log('有必填未填');
            return; // 如果必填項有未填寫的，直接返回，不再繼續
        }
        // console.log('檢查必填項');

        // 檢查 danger_ 開頭元素的文字內容
        if (checkDangerElements()) {
            // console.log('準備送單');
            $('#formParkingSpaceEdit').submit(); // 提交表單
            // console.log('送單囉!');
        } else {
            swalToastWarning('請填上正確資料唷！', 'top');
        }
    });


});

// // 點擊 resetBtn 按鈕時
// $('#resetBtn').click(function () {
//     // 執行原有 reset 的功能
//     this.form.reset();
//     // 清空所有以 danger_ 開頭元素的內容
//     $('[id^="danger_"]').text('');
// });

// toggleRadioItems('originalBuilding', 'newBuilding', 'originalBuildingBox', 'newBuildingBox');

// const urlParams = new URLSearchParams(window.location.search);
// const parkingSpaceId = String(urlParams.get('id'));

// 確保 parkingSpaceId 存在
// if (parkingSpaceId) {
// console.log('Room ID:', parkingSpaceId);
// let parkingSpaceData = dataset_parkingSpaceAll.find(parkingSpace => parkingSpace.id === parkingSpaceId);
// if (parkingSpaceData.company) {
//     $('#originalBuilding, #newBuilding, #parkingSpaceBuilding, #basementNum, #car, #moto, #parkingSpaceStatus').attr('disabled', true);

// } else {
//     $('#originalBuilding, #newBuilding, #parkingSpaceBuilding, #basementNum, #car, #moto, #parkingSpaceStatus').attr('disabled', false);
// }
// } else {
//     console.error('ParkingSpace ID not found in URL');
// }