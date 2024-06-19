"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_cultivationRoomOpen = [{
  'id': '1',
  'building': '青創基地',
  'room': '101-A',
  'company': '馳晶科技股份有限公司',
  'rate': '80,000',
  'status': '已培育',
  'squareMeters': '12.5',
  'adminNote': '共用空間-A',
  'startDate': '2024-01-05',
  'endDate': '2025-01-05',
  'responsiblePerson': '郝有錢',
  'createBy': '王小明',
  'createDate': '2023-01-15'
}, {
  'id': '2',
  'building': '綜合工廠培育區',
  'room': 'A4-102',
  'company': '羿安整合行銷股份有限公司',
  'rate': '12,000',
  'status': '已培育',
  'squareMeters': '10.5',
  'adminNote': '',
  'startDate': '2024-01-05',
  'endDate': '2025-01-05',
  'responsiblePerson': '張有錢',
  'createBy': '王小明',
  'createDate': '2023-01-15'
}, {
  'id': '3',
  'building': '挺生大樓培育區',
  'room': '714',
  'company': '博濟施生技股份有限公司',
  'rate': '6,000',
  'status': '已培育',
  'squareMeters': '10.0',
  'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
  'startDate': '2024-01-05',
  'endDate': '2025-01-05',
  'responsiblePerson': '李有錢',
  'createBy': '王小明',
  'createDate': '2023-01-15'
}, {
  'id': '4',
  'building': '產學實驗培育區',
  'room': '101',
  'company': '品庠醫藥生技股份有限公司',
  'rate': '30,000',
  'status': '已培育',
  'squareMeters': '17.4',
  'adminNote': '',
  'startDate': '2024-01-05',
  'endDate': '2025-01-05',
  'responsiblePerson': '周有錢',
  'createBy': '周小明',
  'createDate': '2023-01-15'
}, {
  'id': '5',
  'building': '青創基地',
  'room': '101-B',
  'company': '馳晶科技股份有限公司',
  'rate': '80,000',
  'status': '已培育',
  'squareMeters': '12.5',
  'adminNote': '共用空間-B',
  'startDate': '2024-01-05',
  'endDate': '2025-01-05',
  'responsiblePerson': '吳有錢',
  'createBy': '孫小明',
  'createDate': '2023-01-15'
}];
var dataset_cultivationRoomClose = [{
  'id': '1',
  'createDate': '2019-01-01',
  'building': '青創基地',
  'room': '101',
  'squareMeters': '10.0',
  'rate': '80,000',
  'removeDate': '2021-01-01',
  'adminNote': '分區域A',
  'createBy': '孫小美',
  'removeBy': '李小光'
}, {
  'id': '2',
  'createDate': '2020-05-01',
  'building': '綜合工廠培育區',
  'room': 'A4-102',
  'squareMeters': '9.0',
  'rate': '12,000',
  'removeDate': '2021-05-01',
  'adminNote': '分區域A',
  'createBy': '孫小美',
  'removeBy': '李小光'
}, {
  'id': '3',
  'createDate': '2020-05-01',
  'building': '綜合工廠培育區',
  'room': 'A4-102',
  'squareMeters': '9.0',
  'rate': '12,000',
  'removeDate': '2021-05-01',
  'adminNote': 'R101、R104、R105 三間培育室每月輔導服務費合算80,000元',
  'createBy': '孫小美',
  'removeBy': '李小光'
}];
var dataset_roomHistoryList1 = [{
  "createDate": "2019-01-19",
  "squareMeters": "56.4",
  "rate": "30,000",
  "startDate": "-",
  "endDate": "-",
  "company": "-",
  "responsiblePerson": "-",
  "remark": "啟用",
  "createBy": "王大明"
}, {
  "createDate": "2020-01-20",
  "squareMeters": "56.4",
  "rate": "1,300,000",
  "startDate": "2020-03-01",
  "endDate": "2020-09-30",
  "company": "冠陞企業管理顧問股份有限公司",
  "responsiblePerson": "陳智揚",
  "remark": "-",
  "createBy": "王大明"
}, {
  "createDate": "2020-02-20",
  "squareMeters": "56.4",
  "rate": "1,300,000",
  "startDate": "2020-03-01",
  "endDate": "2020-09-30",
  "company": "冠陞企業管理顧問股份有限公司",
  "responsiblePerson": "陳智揚",
  "remark": "一位躺在大門財富也能體驗高速，起點他的。",
  "createBy": "王大明"
}];
var dataset_roomHistoryList2 = [{
  "createDate": "2019-01-19",
  "squareMeters": "56.4",
  "rate": "30,000",
  "startDate": "-",
  "endDate": "-",
  "company": "-",
  "responsiblePerson": "-",
  "remark": "啟用",
  "createBy": "王大明"
}, {
  "createDate": "2019-01-20",
  "squareMeters": "56.4",
  "rate": "30,000",
  "startDate": "2020-03-01",
  "endDate": "2020-09-30",
  "company": "冠陞企業管理顧問股份有限公司",
  "responsiblePerson": "陳智揚",
  "remark": "-",
  "createBy": "王大明"
}, {
  "createDate": "2020-05-18",
  "squareMeters": "15.28",
  "rate": "30,000",
  "startDate": "2019-10-01",
  "endDate": "2020-09-30",
  "company": "冠陞企業管理顧問股份有限公司",
  "responsiblePerson": "陳智揚",
  "remark": "-",
  "createBy": "王大明"
}];
$(function () {
  $('#cultivationRoom_OpenList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_cultivationRoomOpen,
    "columns": [{
      data: 'building',
      title: "培育區域"
    }, {
      data: 'room',
      title: "培育室"
    }, {
      data: 'company',
      title: "培育企業"
    }, {
      data: 'rate',
      title: "服務費&ensp;/&ensp;月"
    }, {
      data: 'adminNote',
      title: "管理備註"
    }, {
      data: 'status',
      title: "當前狀態"
    }, {
      data: 'id',
      title: "詳情",
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#openRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-info px-1"></i></button>';
      }
    }, {
      data: 'id',
      title: "修改",
      render: function render(data) {
        return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>';
      }
    }],
    "order": [[0, "desc"], [1, "asc"]],
    "columnDefs": [{
      targets: [0],
      responsivePriority: 1
    }, {
      targets: [1],
      responsivePriority: 2
    }, {
      targets: [5],
      responsivePriority: 3
    }, {
      "searchable": false,
      "orderable": false,
      "targets": [6, 7]
    }, {
      "className": "text-nowrap",
      "targets": [0, 1, 3, 5]
    }, {
      "className": "text-center",
      "targets": [1, 5, 6, 7]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(0)', row).addClass('ps-3');
      $('td:eq(3)', row).addClass('pe-4');
      [6, 7].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      });
      [3, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
      });
      $('td:eq(0)', row).css('min-width', '180px');
      $('td:eq(2)', row).css('min-width', '280px');
    }
  }));
  $('#cultivationRoom_CloseList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_cultivationRoomClose,
    "columns": [{
      data: 'createDate',
      title: "培育室<br>建立日期"
    }, {
      data: 'building',
      title: "培育區域"
    }, {
      data: 'room',
      title: "培育室"
    }, {
      data: 'squareMeters',
      title: "可用坪數"
    }, {
      data: 'rate',
      title: "服務費&ensp;/&ensp;月"
    }, {
      data: 'adminNote',
      title: "管理備註"
    }, {
      data: 'removeDate',
      title: "最後<br>停用日"
    }, {
      data: 'id',
      title: "歷史<br>紀錄",
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_DetailsModel" data-id="' + data + '"><i class="fa-solid fa-clock-rotate-left"></i></button>';
      },
      className: 'text-center'
    }, {
      data: 'id',
      title: "再次<br>上架",
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-id="' + data + '"><i class="fa-solid fa-arrow-rotate-left"></i></button>';
      },
      className: 'text-center'
    }],
    "columnDefs": [{
      targets: [1],
      responsivePriority: 1
    }, {
      targets: [2],
      responsivePriority: 2
    }, {
      targets: [6],
      responsivePriority: 3
    }, {
      "searchable": false,
      "orderable": false,
      "targets": [7, 8]
    }, {
      "className": "text-nowrap",
      "targets": [0, 2, 3, 4, 6]
    }, {
      "className": "text-center",
      "targets": [0, 2, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(1)', row).addClass('ps-3').css('min-width', '180px');
      [0, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
      });
      [7, 8].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      });
      [3, 4].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).addClass('pe-4');
      });
    }
  }));
  $('#roomHistoryList').DataTable(_objectSpread(_objectSpread({}, commonSettingsHistory), {}, {
    "data": dataset_roomHistoryList1
  }));
  $('#roomHistoryList2').DataTable(_objectSpread(_objectSpread({}, commonSettingsHistory), {}, {
    "data": dataset_roomHistoryList2
  }));

  // 同步燈箱顯示資料
  $('#openRoom_DetailsModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var openRoomId = String(button.data('id'));
    // console.log('openRoom Id:', openRoomId);
    var openRoomData = dataset_cultivationRoomOpen.find(function (openRoom) {
      return openRoom.id === openRoomId;
    });
    if (openRoomData) {
      $('#building').text(openRoomData.building);
      $('#room').text(openRoomData.room);
      $('#rate').text(openRoomData.rate);
      $('#squareMeters').text(openRoomData.squareMeters);
      $('#companyName').text(openRoomData.company);
      $('#startDate').text(openRoomData.startDate);
      $('#endDate').text(openRoomData.endDate);
      $('#responsiblePerson').text(openRoomData.responsiblePerson);
      $('#adminNote').text(openRoomData.adminNote);
      $('#createBy').text(openRoomData.createBy);
      $('#createDate').text(openRoomData.createDate);
    } else {
      console.error('openRoomData data not found for id:', openRoomId);
    }
    ;
  });
  $('#closeRoom_DetailsModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var closeRoomId = String(button.data('id'));
    // console.log('openRoom Id:', openRoomId);
    var closeRoomData = dataset_cultivationRoomClose.find(function (openRoom) {
      return openRoom.id === closeRoomId;
    });
    if (closeRoomData) {
      $('#close_building').text(closeRoomData.building);
      $('#close_room').text(closeRoomData.room);
      $('#close_rate').text(closeRoomData.rate);
      $('#close_squareMeters').text(closeRoomData.squareMeters);
      $('#close_adminNote').text(closeRoomData.adminNote);
      $('#close_createDate').text(closeRoomData.createDate);
      $('#close_createBy').text(closeRoomData.createBy);
      $('#close_removeDate').text(closeRoomData.removeDate);
      $('#close_removeBy').text(closeRoomData.removeBy);
    } else {
      console.error('closeRoomData data not found for id:', closeRoomId);
    }
    ;
  });
});