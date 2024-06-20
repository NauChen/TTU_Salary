"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_parkingSpaceOpen = [{
  'id': '1',
  'building': '新德惠大樓',
  'basementNum': 'B1-10',
  'company': '馳晶科技股份有限公司',
  'rate': '80,000',
  'status': '已承租',
  'carType': '汽車'
}, {
  'id': '2',
  'building': '新德惠大樓',
  'basementNum': 'B1-08',
  'company': '羿安整合行銷股份有限公司',
  'rate': '12,000',
  'status': '已承租',
  'carType': '機車'
}, {
  'id': '3',
  'building': '新德惠大樓',
  'basementNum': 'B2-20',
  'company': '博濟施生技股份有限公司',
  'rate': '6,000',
  'status': '已承租',
  'carType': '汽車'
}, {
  'id': '4',
  'building': '新德惠大樓',
  'basementNum': 'B3-41',
  'company': '品庠醫藥生技股份有限公司',
  'rate': '30,000',
  'status': '已承租',
  'carType': '汽車'
}];
var dataset_cultivationRoomClose = [{
  'id': '1',
  'carateDate': '2019-01-01',
  'building': '青創基地',
  'room': '101',
  'squareMeters': '10.0',
  'rate': '80,000',
  'closeDate': '2021-01-01'
}, {
  'id': '2',
  'carateDate': '2020-05-01',
  'building': '綜合工廠培育區',
  'room': 'A4-102',
  'squareMeters': '9.0',
  'rate': '12,000',
  'closeDate': '2021-05-01'
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
  $('#parkingSpace_OpenList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_parkingSpaceOpen,
    "columns": [{
      data: 'building',
      title: "車位大樓"
    }, {
      data: 'basementNum',
      title: "車位號碼"
    }, {
      data: 'company',
      title: "承租公司"
    }, {
      data: 'carType',
      title: "車位類型"
    }, {
      data: 'rate',
      title: "服務費&ensp;/&ensp;月"
    }, {
      data: 'status',
      title: "當前狀態"
    }, {
      data: 'id',
      title: "詳情",
      render: function render(data, type, row) {
        var icon = '';
        if (row.carType === '汽車') {
          icon = '<i class="fa-solid fa-car-side"></i>';
        } else if (row.carType === '機車') {
          icon = '<i class="fa-solid fa-motorcycle"></i>';
        } else {
          icon = '<i class="fa-solid fa-info"></i>';
        }
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm car_icon" data-bs-toggle="modal" data-bs-target="#openRoom_Details" data-id="' + data + '">' + icon + '</button>';
      }
    }, {
      data: 'id',
      title: "修改",
      render: function render(data) {
        return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>';
      }
    }],
    "columnDefs": [{
      targets: [0],
      responsivePriority: 1
    }, {
      targets: [1]
    }, {
      targets: [2],
      responsivePriority: 2
    }, {
      targets: [5],
      responsivePriority: 3
    }, {
      "searchable": false,
      "orderable": false,
      "targets": [5, 6]
    }, {
      "className": "text-nowrap",
      "targets": [0, 1, 4]
    }, {
      "className": "text-center",
      "targets": [1, 4, 5, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(0)', row).addClass('ps-3');
      $('td:eq(3)', row).addClass('pe-5');
      [5, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      });
      [3, 4].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
      });
    }
  }));
  $('#cultivationRoom_CloseList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_cultivationRoomClose,
    "columns": [{
      data: 'carateDate',
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
      data: 'closeDate',
      title: "最後停用日"
    }, {
      data: 'id',
      title: "歷史<br>紀錄",
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#closeRoom_Details" data-id="' + data + '"><i class="fa-solid fa-clock-rotate-left"></i></button>';
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
      targets: [5],
      responsivePriority: 3
    }, {
      "searchable": false,
      "orderable": false,
      "targets": [6, 7]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      [0, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
      });
      [0, 2, 3, 4, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
      });
      [5, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      });
      [0, 2, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).addClass('text-center');
      });
      [3, 4].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).addClass('pe-5');
      });
      $('td:eq(1)', row).addClass('ps-3').css('min-width', '160px');
    }
  }));
  $('#roomHistoryList').DataTable(_objectSpread(_objectSpread({}, commonSettingsHistory), {}, {
    "data": dataset_roomHistoryList1
  }));
  $('#roomHistoryList2').DataTable(_objectSpread(_objectSpread({}, commonSettingsHistory), {}, {
    "data": dataset_roomHistoryList2
  }));
});