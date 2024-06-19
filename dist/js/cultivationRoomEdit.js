"use strict";

var dataset_cultivationRoomOpen = [{
  'id': '1',
  'building': '青創基地',
  'room': '101-A',
  'company': '馳晶科技股份有限公司',
  'rate': '80,000',
  'status': '已培育',
  'squareMeters': '12.5',
  'adminNote': '共用空間-A'
}, {
  'id': '2',
  'building': '綜合工廠培育區',
  'room': 'A4-102',
  'company': '羿安整合行銷股份有限公司',
  'rate': '12,000',
  'status': '已培育',
  'squareMeters': '10.5',
  'adminNote': ''
}, {
  'id': '3',
  'building': '挺生大樓培育區',
  'room': '714',
  'company': '博濟施生技股份有限公司',
  'rate': '6,000',
  'status': '已培育',
  'squareMeters': '10.0',
  'adminNote': ''
}, {
  'id': '4',
  'building': '產學實驗培育區',
  'room': '101',
  'company': '品庠醫藥生技股份有限公司',
  'rate': '30,000',
  'status': '已培育',
  'squareMeters': '17.4',
  'adminNote': ''
}, {
  'id': '5',
  'building': '青創基地',
  'room': '101-B',
  'company': '馳晶科技股份有限公司',
  'rate': '80,000',
  'status': '已培育',
  'squareMeters': '12.5',
  'adminNote': '共用空間-B'
}];
$(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var cultivationRoomId = String(urlParams.get('id'));

  // 確保 jobId 存在
  if (cultivationRoomId) {
    // console.log('Room ID:', cultivationRoomId);

    var cultivationRoomData = dataset_cultivationRoomOpen.find(function (parkingSpace) {
      return parkingSpace.id === cultivationRoomId;
    });
    if (cultivationRoomData) {
      $('#cultivationSpaceBuilding').val(cultivationRoomData.building);
      $('#cultivationSpaceRoom').val(cultivationRoomData.room);
      $('#cultivationSpaceRate').val(cultivationRoomData.rate);
      $('#cultivationSpaceSquareMeters').val(cultivationRoomData.squareMeters);
      $('#cultivationSpaceRemark').val(cultivationRoomData.adminNote);
    } else {
      console.error('Job data not found for id:', jobId);
    }
  } else {
    console.error('Job ID not found in URL');
  }
});