// var dataset_cultivationRoomAll = [
//     {
//         'id': '1',
//         'building': '青創基地',
//         'room': '101-A',
//         'company': '馳晶科技股份有限公司',
//         'rate': '80,000',
//         'squareMeters': '12.5',
//         'adminNote': '共用空間-A',
//         'startDate': '2024-01-05',
//         'endDate': '2025-01-05',
//         'responsiblePerson': '郝有錢',
//         'createBy': '王小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '2',
//         'building': '綜合工廠培育區',
//         'room': 'A4-102',
//         'company': '羿安整合行銷股份有限公司',
//         'rate': '12,000',
//         'squareMeters': '10.5',
//         'adminNote': '',
//         'startDate': '2024-01-05',
//         'endDate': '2025-01-05',
//         'responsiblePerson': '張有錢',
//         'createBy': '王小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '3',
//         'building': '挺生大樓培育區',
//         'room': '714',
//         'company': '博濟施生技股份有限公司',
//         'rate': '6,000',
//         'squareMeters': '10.0',
//         'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
//         'startDate': '2024-01-05',
//         'endDate': '2025-01-05',
//         'responsiblePerson': '李有錢',
//         'createBy': '王小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '4',
//         'building': '產學實驗培育區',
//         'room': '101',
//         'company': '品庠醫藥生技股份有限公司',
//         'rate': '30,000',
//         'squareMeters': '17.4',
//         'adminNote': '',
//         'startDate': '2024-01-05',
//         'endDate': '2025-01-05',
//         'responsiblePerson': '周有錢',
//         'createBy': '周小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '5',
//         'building': '青創基地',
//         'room': '101-B',
//         'company': '馳晶科技股份有限公司',
//         'rate': '80,000',
//         'squareMeters': '12.5',
//         'adminNote': '共用空間-B',
//         'startDate': '2024-01-05',
//         'endDate': '2025-01-05',
//         'responsiblePerson': '吳有錢',
//         'createBy': '孫小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '6',
//         'building': '青創基地',
//         'room': '501',
//         'company': '',
//         'rate': '80,000',
//         'squareMeters': '12.5',
//         'adminNote': '',
//         'startDate': '',
//         'endDate': '',
//         'responsiblePerson': '',
//         'createBy': '孫小明',
//         'createDate': '2023-01-15',
//         'status': '啟用',
//     },
//     {
//         'id': '21',
//         'createDate': '2019-01-01',
//         'building': '青創基地',
//         'room': '101',
//         'squareMeters': '10.0',
//         'rate': '80,000',
//         'removeDate': '2021-01-01',
//         'adminNote': '分區域A',
//         'createBy': '孫小美',
//         'removeBy': '李小光',
//         'status': '停用',
//     },
//     {
//         'id': '22',
//         'createDate': '2020-05-01',
//         'building': '綜合工廠培育區',
//         'room': 'A4-102',
//         'squareMeters': '9.0',
//         'rate': '12,000',
//         'removeDate': '2021-05-01',
//         'adminNote': '分區域A',
//         'createBy': '孫小美',
//         'removeBy': '李小光',
//         'status': '停用',
//     },
//     {
//         'id': '23',
//         'createDate': '2020-05-01',
//         'building': '綜合工廠培育區',
//         'room': 'A4-102',
//         'squareMeters': '9.0',
//         'rate': '12,000',
//         'removeDate': '2021-05-01',
//         'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
//         'createBy': '孫小美',
//         'removeBy': '李小光',
//         'status': '停用',
//     },
// ];

// var selectOption = [
//     { 'optigroup': '新德惠大樓', 'option': 'B1-01' },
//     { 'optigroup': '新德惠大樓', 'option': 'B1-05' },
//     { 'optigroup': '新德惠大樓', 'option': 'B2-05' },
//     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
//     { 'optigroup': '新德惠大樓', 'option': 'B3-01' },
//     { 'optigroup': '新德惠大樓', 'option': 'B3-10' },
//     { 'optigroup': '新德惠大樓', 'option': 'B4-02' },
//     { 'optigroup': '新德惠大樓', 'option': 'B6-03' },
//     { 'optigroup': '新德惠大樓', 'option': 'B7-04' },
//     { 'optigroup': '新德惠大樓', 'option': 'B8-02' },
//     { 'optigroup': '新德惠大樓', 'option': 'B9-03' },
//     { 'optigroup': '青創大樓', 'option': 'B10-01' },
//     { 'optigroup': '青創大樓', 'option': 'B11-02' },
//     { 'optigroup': '青創大樓', 'option': 'B12-01' },
// ];

$(function () {
    // 建議輸入
    $('#cultivationSpaceBuilding').typeahead({
        source: buildingData
    });

    // const urlParams = new URLSearchParams(window.location.search);
    // const cultivationRoomId = String(urlParams.get('id'));

    // 確保 cultivationRoomId 存在
    // if (cultivationRoomId) {
        // console.log('Room ID:', cultivationRoomId);

        // let cultivationRoomData = dataset_cultivationRoomAll.find(cultivationRoom => cultivationRoom.id === cultivationRoomId);
        if (cultivationRoomData) {
            // console.log('company', cultivationRoomData.company);
            $('#cultivationSpaceBuilding').val(cultivationRoomData.building);
            $('#cultivationSpaceRoom').val(cultivationRoomData.room);
            $('#cultivationSpaceRate').val(cultivationRoomData.rate);
            $('#cultivationSpaceSquareMeters').val(cultivationRoomData.squareMeters);
            $('#cultivationSpaceRemark').val(cultivationRoomData.adminNote);
            $('#cultivationSpaceStatus').val(cultivationRoomData.status);
            // if (cultivationRoomData.company) {
            //     $('#cultivationSpaceBuilding, #cultivationSpaceRoom, #cultivationSpaceStatus').attr('disabled', true);
            // } else {
            //     $('#cultivationSpaceBuilding, #cultivationSpaceRoom, #cultivationSpaceStatus').attr('disabled', false);
            // }

        } else {
            console.error('data not found');
        }

    // } else {
    //     console.error('Job ID not found in URL');
    // }

});