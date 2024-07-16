"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_parkingSpaceOpen = [{
  'id': '1',
  'createDate': '2024-06-01',
  'building': '新德惠大樓',
  'basementNum': 'B1-10',
  'rate': '3,000',
  'carType': '汽車',
  'status': '承租中',
  'company': '馳晶科技股份有限公司',
  'startDate': '2024-06-01',
  'endDate': '2024-07-01',
  'name': '李大華',
  'phone': '02-12345678',
  'jobTitle': '工程師',
  'ext': '101',
  'licensePlateNum': '5678-AB',
  'applicationFile': '',
  'adminNote': '費用共用車號AB-1234'
}, {
  'id': '2',
  'createDate': '2024-06-02',
  'building': '新德惠大樓',
  'basementNum': 'B2-20',
  'company': '宏達電股份有限公司',
  'rate': '3,000',
  'status': '承租中',
  'carType': '汽車',
  'name': '王小美',
  'phone': '02-23456789',
  'adminNote': '共用車號CD-5678',
  'jobTitle': '經理',
  'ext': '202',
  'applicationFile': '',
  'startDate': '2024-06-02',
  'endDate': '2024-07-02',
  'licensePlateNum': '1234-CD'
}, {
  'id': '3',
  'createDate': '2024-06-03',
  'building': '新德惠大樓',
  'basementNum': 'B3-30',
  'company': '威盛電子股份有限公司',
  'rate': '100',
  'status': '承租中',
  'carType': '機車',
  'name': '張志明',
  'phone': '02-34567890',
  'adminNote': '',
  'jobTitle': '助理',
  'ext': '',
  'applicationFile': '',
  'startDate': '2024-06-03',
  'endDate': '2024-07-03',
  'licensePlateNum': '1CD-234'
}, {
  'id': '4',
  'createDate': '2024-06-04',
  'building': '新德惠大樓',
  'basementNum': 'B1-05',
  'company': '華碩電腦股份有限公司',
  'rate': '2,500',
  'status': '承租中',
  'carType': '汽車',
  'name': '黃國強',
  'phone': '02-45678901',
  'adminNote': '費用共用車號EF-6789',
  'jobTitle': '市場行銷',
  'ext': '303',
  'applicationFile': '',
  'startDate': '2024-06-04',
  'endDate': '2024-07-04',
  'licensePlateNum': '3456-EF'
}, {
  'id': '5',
  'createDate': '2024-06-05',
  'building': '新德惠大樓',
  'basementNum': 'B2-15',
  'company': '',
  'rate': '3,000',
  'status': '未承租',
  'carType': '汽車',
  'name': '',
  'phone': '',
  'adminNote': '',
  'jobTitle': '',
  'ext': '',
  'applicationFile': '',
  'startDate': '',
  'endDate': '',
  'licensePlateNum': ''
}, {
  'id': '6',
  'createDate': '2024-06-06',
  'building': '新德惠大樓',
  'basementNum': 'B2-12',
  'company': '聯發科技股份有限公司',
  'rate': '100',
  'status': '承租中',
  'carType': '機車',
  'name': '陳美麗',
  'phone': '02-56789012',
  'adminNote': '',
  'jobTitle': '設計師',
  'ext': '404',
  'applicationFile': '',
  'startDate': '2024-06-06',
  'endDate': '2024-07-06',
  'licensePlateNum': '2EF-345'
}, {
  'id': '7',
  'createDate': '2024-06-07',
  'building': '新德惠大樓',
  'basementNum': 'B3-21',
  'company': '台積電股份有限公司',
  'rate': '3,000',
  'status': '承租中',
  'carType': '汽車',
  'name': '林小龍',
  'phone': '02-67890123',
  'adminNote': '費用共用車號GH-7890',
  'jobTitle': '技術顧問',
  'ext': '505',
  'applicationFile': '',
  'startDate': '2024-06-07',
  'endDate': '2024-07-07',
  'licensePlateNum': '7890-GH'
}, {
  'id': '8',
  'createDate': '2024-06-08',
  'building': '新德惠大樓',
  'basementNum': 'B1-08',
  'company': '廣達電腦股份有限公司',
  'rate': '2,500',
  'status': '承租中',
  'carType': '汽車',
  'name': '許志安',
  'phone': '02-78901234',
  'adminNote': '費用共用車號IJ-2345',
  'jobTitle': '行銷經理',
  'ext': '606',
  'applicationFile': '',
  'startDate': '2024-06-08',
  'endDate': '2024-07-08',
  'licensePlateNum': '2345-IJ'
}, {
  'id': '9',
  'createDate': '2024-06-09',
  'building': '新德惠大樓',
  'basementNum': 'B2-13',
  'company': '和碩聯合科技股份有限公司',
  'rate': '100',
  'status': '承租中',
  'carType': '機車',
  'name': '周杰倫',
  'phone': '02-89012345',
  'adminNote': '',
  'jobTitle': '產品經理',
  'ext': '707',
  'applicationFile': '',
  'startDate': '2024-06-09',
  'endDate': '2024-07-09',
  'licensePlateNum': '3GH-456'
}, {
  'id': '10',
  'createDate': '2024-06-10',
  'building': '新德惠大樓',
  'basementNum': 'B3-14',
  'company': '',
  'rate': '2,500',
  'status': '未承租',
  'carType': '汽車',
  'name': '',
  'phone': '',
  'adminNote': '',
  'jobTitle': '',
  'ext': '',
  'applicationFile': '',
  'startDate': '',
  'endDate': '',
  'licensePlateNum': ''
}, {
  'id': '11',
  'createDate': '2024-06-11',
  'building': '新德惠大樓',
  'basementNum': 'B1-02',
  'company': '友達光電股份有限公司',
  'rate': '3,000',
  'status': '承租中',
  'carType': '汽車',
  'name': '蔡依林',
  'phone': '02-90123456',
  'adminNote': '費用共用車號KL-5678',
  'jobTitle': '行政助理',
  'ext': '808',
  'applicationFile': '',
  'startDate': '2024-06-11',
  'endDate': '2024-07-11',
  'licensePlateNum': '5678-KL'
}, {
  'id': '12',
  'createDate': '2024-06-12',
  'building': '新德惠大樓',
  'basementNum': 'B2-09',
  'company': '聯合報股份有限公司',
  'rate': '100',
  'status': '承租中',
  'carType': '機車',
  'name': '鄭中基',
  'phone': '02-01234567',
  'adminNote': '',
  'jobTitle': '記者',
  'ext': '909',
  'applicationFile': '',
  'startDate': '2024-06-12',
  'endDate': '2024-07-12',
  'licensePlateNum': '1IJ-890'
}, {
  'id': '13',
  'createDate': '2024-06-13',
  'building': '新德惠大樓',
  'basementNum': 'B3-11',
  'company': '中華電信股份有限公司',
  'rate': '2,500',
  'status': '承租中',
  'carType': '汽車',
  'name': '蕭敬騰',
  'phone': '02-12345678',
  'adminNote': '費用共用車號MN-1234',
  'jobTitle': '客服專員',
  'ext': '1010',
  'applicationFile': '',
  'startDate': '2024-06-13',
  'endDate': '2024-07-13',
  'licensePlateNum': '1234-MN'
}, {
  'id': '14',
  'createDate': '2024-06-14',
  'building': '新德惠大樓',
  'basementNum': 'B1-06',
  'company': '台灣大哥大股份有限公司',
  'rate': '3,000',
  'status': '承租中',
  'carType': '汽車',
  'name': '林宥嘉',
  'phone': '02-23456789',
  'adminNote': '費用共用車號OP-5678',
  'jobTitle': '資深工程師',
  'ext': '1111',
  'applicationFile': '',
  'startDate': '2024-06-14',
  'endDate': '2024-07-14',
  'licensePlateNum': '5678-OP'
}, {
  'id': '15',
  'createDate': '2024-06-15',
  'building': '新德惠大樓',
  'basementNum': 'B2-07',
  'company': '',
  'rate': '100',
  'status': '未承租',
  'carType': '機車',
  'name': '',
  'phone': '',
  'adminNote': '',
  'jobTitle': '',
  'ext': '',
  'applicationFile': '',
  'startDate': '',
  'endDate': '',
  'licensePlateNum': ''
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
      data: 'carType',
      title: "類型"
    },
    // 0
    {
      data: 'basementNum',
      title: "車位號碼"
    },
    // 1
    {
      data: 'rate',
      title: "服務費/月"
    },
    // 2
    {
      data: 'status',
      title: "當前狀態"
    },
    // 3
    {
      data: 'endDate',
      title: "到期日"
    },
    // 4
    {
      data: 'company',
      title: "承租公司"
    },
    // 5
    {
      data: 'licensePlateNum',
      title: "車牌號碼"
    },
    // 6
    {
      data: 'adminNote',
      title: "管理備註"
    },
    // 7
    {
      data: 'id',
      title: "詳情",
      // 8
      render: function render(data, type, row) {
        var icon = '';
        if (row.carType === '汽車') {
          icon = '<i class="fa-solid fa-car-side"></i>';
        } else if (row.carType === '機車') {
          icon = '<i class="fa-solid fa-motorcycle"></i>';
        } else {
          icon = '<i class="fa-solid fa-info"></i>';
        }
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm car_icon" data-bs-toggle="modal" data-bs-target="#openParkingSpace_Details" data-id="' + data + '">' + icon + '</button>';
      }
    }, {
      data: 'id',
      title: "修改",
      //9
      // render: function (data) {
      //     return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./cultivationRoomEdit.html" data-id="' + data + '"><i class="fa-solid fa-wrench"></i></a>'
      // },
      render: function render(data, type, row) {
        var status = row.status;
        if (status === '承租中') {
          return '<button class="btn btn-light rounded-circle btn-sm cannotChange" title="承租中不可修改歐！"><i class="fa-solid fa-wrench"></i></button>';
        } else {
          return '<a class="btn btn-outline-primary rounded-circle btn-sm oneWord" href="./parkingSpaceEdit.html?id=' + data + '"><i class="fa-solid fa-wrench"></i></a>';
        }
      },
      className: 'text-center text-nowrap'
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
      "targets": [8, 9]
    }, {
      "className": "text-center",
      "targets": [0, 1, 3, 4, 6, 8, 9]
    }, {
      "className": "text-nowrap",
      "targets": [0, 1, 2, 3, 4, 6]
    }],
    "order": [[3, "desc"]],
    createdRow: function createdRow(row, data, dataIndex) {
      // $('td:eq(0)', row).addClass('ps-4');
      $('td:eq(2)', row).addClass('pe-3');
      [8, 9].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      });
      [4].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95rem');
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

  // 同步燈箱顯示資料
  // $('#openParkingSpace_Details').on('show.bs.modal', function (event) {
  //     let button = $(event.relatedTarget);
  //     let openPSId = String(button.data('id'));
  //     // console.log('openRoom Id:', openPSId);
  //     let openParkingSpaceData = dataset_cultivationRoomOpen.find(openRoom => openRoom.id === openPSId);
  //     if (openParkingSpaceData) {
  //         $('#building').text(openParkingSpaceData.building);
  //         $('#basementNum').text(openParkingSpaceData.basementNum);
  //         $('#companyName').text(openParkingSpaceData.company);
  //         $('#rate').text(openParkingSpaceData.rate);
  //         $('#status').text(openParkingSpaceData.status);
  //         $('#carType').text(openParkingSpaceData.carType);
  //         $('#startDate').text(openParkingSpaceData.startDate);
  //         $('#endDate').text(openParkingSpaceData.endDate);
  //         $('#adminNote').text(openParkingSpaceData.adminNote);
  //         $('#createBy').text(openParkingSpaceData.createBy);
  //         $('#createDate').text(openParkingSpaceData.createDate);

  //         //要加上用openPSId去資料庫撈此id的歷史紀錄，放入dataset_parkingSpaceOpen

  //     } else {
  //         console.error('openParkingSpaceData data not found for id:', openPSId);
  //     };
  // });

  $('.cannotChange').click(function () {
    swalToastWarning('承租中不可修改歐！', 'top');
  });
});