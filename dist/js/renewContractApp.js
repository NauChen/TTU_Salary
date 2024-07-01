"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_renewContractApp = [{
  'id': '1',
  'uniformNum': '12345678',
  'createDate': '2024-07-01',
  'type': '汽車位',
  'name': '孫小美',
  'phone': '02-81234567',
  'ext': '774',
  'idNumber': 'A1234567890',
  'email': 'sunxiaomei@example.com',
  'jobTitle': '財務經理',
  'amount': '4,000',
  'adminNote': '要主動提醒',
  'company': '超級棒股份有限公司',
  'building': '新德惠大樓',
  'place': 'B1-01',
  'endDate': '2024-06-28',
  'paymentDate': '2024-07-07',
  'status': '待審核'
}, {
  'id': '2',
  'uniformNum': '34567890',
  'createDate': '2024-06-15',
  'type': '機車位',
  'name': '孫中美',
  'phone': '0912-345678',
  'ext': '',
  'idNumber': 'B0987654321',
  'email': 'sunzhongmei@example.com',
  'jobTitle': '業務專員',
  'amount': '500',
  'adminNote': '',
  'company': '最佳有限公司',
  'building': '新德惠大樓',
  'place': 'B1-05',
  'endDate': '2024-06-13',
  'paymentDate': '2024-06-20',
  'status': '待補件'
}, {
  'id': '3',
  'uniformNum': '45678901',
  'createDate': '2024-06-25',
  'type': '培育室',
  'company': '幸福股份有限公司',
  'building': '挺生大樓',
  'place': '108',
  'endDate': '2024-06-23',
  'paymentDate': '2024-07-02',
  'status': '通過'
}, {
  'id': '4',
  'uniformNum': '56789012',
  'createDate': '2024-07-10',
  'type': '汽車位',
  'name': '王小明',
  'phone': '02-83456789',
  'ext': '67',
  'idNumber': 'C2345678901',
  'email': 'lidanren@example.com',
  'jobTitle': '技術主管',
  'adminNote': '會拖款',
  'amount': '3,800',
  'company': '優秀有限公司',
  'building': '新德惠大樓',
  'place': 'B2-08',
  'endDate': '2024-07-05',
  'paymentDate': '2024-07-17',
  'status': '不通過'
}, {
  'id': '5',
  'uniformNum': '67890123',
  'createDate': '2024-07-03',
  'type': '機車位',
  'name': '陳美麗',
  'phone': '0913-456789',
  'ext': '',
  'idNumber': 'D3456789012',
  'email': 'wangxiaoming@example.com',
  'jobTitle': '客服經理',
  'amount': '500',
  'adminNote': '',
  'company': '卓越股份有限公司',
  'building': '新德惠大樓',
  'place': 'B3-01',
  'endDate': '2024-06-30',
  'paymentDate': '2024-07-09',
  'status': '待審核'
}, {
  'id': '6',
  'uniformNum': '67890123',
  'createDate': '2024-06-20',
  'type': '培育室',
  'company': '智慧科技有限公司',
  'building': '尚志大樓',
  'place': 'B3-10',
  'endDate': '2024-06-19',
  'paymentDate': '2024-06-26',
  'status': '通過'
}, {
  'id': '7',
  'uniformNum': '78901234',
  'createDate': '2024-06-28',
  'type': '汽車位',
  'name': '黃小虎',
  'ext': '4567',
  'phone': '02-87654321',
  'idNumber': 'E4567890123',
  'email': 'chenmeili@example.com',
  'jobTitle': '行銷主管',
  'amount': '3,800',
  'adminNote': '哈哈',
  'company': '永續發展股份有限公司',
  'building': '新德惠大樓',
  'place': 'B2-05',
  'endDate': '2024-06-27',
  'paymentDate': '2024-07-04',
  'status': '待補件'
}];
var selectOption = [{
  'optigroup': '新德惠大樓',
  'option': 'B1-01'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B1-05'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B2-08'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B2-08'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B3-01'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B3-10'
}, {
  'optigroup': '新德惠大樓',
  'option': 'B2-05'
}, {
  'optigroup': '青創大樓',
  'option': 'B4-01'
}];
$(function () {
  $('#renewContractAppList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_renewContractApp,
    "columns": [{
      data: 'createDate',
      title: "申請日期"
    }, {
      data: 'type',
      title: "續約類型"
    }, {
      data: 'company',
      title: "申請人公司"
    }, {
      data: 'building',
      title: "大樓"
    }, {
      data: 'place',
      title: "位置"
    }, {
      data: 'endDate',
      title: "到期日"
    }, {
      data: 'paymentDate',
      title: "付款日"
    }, {
      data: 'status',
      title: "審核進度"
    }, {
      data: 'id',
      title: "檢閱",
      render: function render(data, type, row) {
        var icon = '';
        if (row.type === '汽車位' || row.type === '機車位') {
          icon = 'renewContractParkingSpaceModel';
        } else {
          icon = 'renewContractRoomModel';
        }
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#' + icon + '" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
      },
      className: 'text-center text-nowrap'
    }],
    "order": [[0, "desc"], [1, "asc"]],
    "columnDefs": [{
      targets: [1],
      responsivePriority: 1
    }, {
      targets: [2],
      responsivePriority: 2
    }, {
      targets: [8],
      responsivePriority: 3
    }, {
      targets: [3],
      className: "text-start"
    }, {
      searchable: false,
      orderable: false,
      targets: [8]
    }, {
      className: "text-center",
      targets: [0, 1, 3, 4, 5, 6, 7]
    }, {
      className: "text-nowrap",
      targets: [0, 1, 3, 4, 5, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(8)', row).css('min-width', '70px');
      [0, 5, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
      });
    }
  }));
  $('#renewContractParkingSpaceModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    // console.log('Event relatedTarget:', button);
    var psId = String(button.data('id'));
    console.log('psId:', psId); // 確認 psId 是否正確獲取
    // console.log('Button clicked, firmId:', firmId);

    // 解除先前綁定的點擊事件
    $('#updateBtn').off('click');
    var parkingSpaceData = dataset_renewContractApp.find(function (perkingSpace) {
      return perkingSpace.id === psId;
    });
    if (parkingSpaceData) {
      var carType = '';
      //     // console.log('Job data found:', parkingSpaceData);
      $('#companyName').text(parkingSpaceData.company);
      $('#uniformNum').text(parkingSpaceData.uniformNum);
      $('#createDate').text(parkingSpaceData.createDate);
      $('#name').text(parkingSpaceData.name);
      $('#phoneNum').text(parkingSpaceData.phone);
      $('#ext').text(parkingSpaceData.ext);
      $('#idNumber').text(parkingSpaceData.idNumber);
      $('#email').text(parkingSpaceData.email);
      $('#jobTitle').text(parkingSpaceData.jobTitle);
      if (parkingSpaceData.type === '汽車位') {
        carType = '汽車';
      } else if (parkingSpaceData.type === '機車位') {
        carType = '機車';
      }
      ;
      $('#carType').text(carType);
      $('#parkingSpaceNum').text(parkingSpaceData.place);
      $('#endDate').text(parkingSpaceData.endDate);
      $('#paymentDate').text(parkingSpaceData.paymentDate);
      $('#rate').text(parkingSpaceData.amount);
      $('#adminNote').text(parkingSpaceData.adminNote);
      $('#status').val(parkingSpaceData.status);

      // if (parkingSpaceData.status != '待審核') {
      //     $('#status').val(parkingSpaceData.status);
      // };
    } else {
      console.error('parkingSpaceData data not found for id:', psId);
    }
    ;
    if (parkingSpaceData.status === "通過" || parkingSpaceData.status === "不通過") {
      // 移除所有切換輸入框的事件處理程序
      $('.changeInput_items').off('click');
      $('.changeNumber_items').off('click');
      $('.changeDate_items').off('click');
      $('.changeMoney_items').off('click');
      $('.changePhone_items').off('click');
      $('.changeEmail_items').off('click');
      $('.changeRadio_items').off('click');
      $('.changeSelect_items').off('click');
      theseRemoveClass(["changeInput_items"], ['name', 'idNumber', 'jobTitle', 'parkingSpaceNum', 'adminNote']);
      theseRemoveClass(["changeNumber_items"], ['ext']);
      theseRemoveClass(["changeDate_items"], ['endDate', 'paymentDate']);
      theseRemoveClass(["changeMoney_items"], ['rate']);
      theseRemoveClass(["changePhone_items"], ['phoneNum']);
      theseRemoveClass(["changeEmail_items"], ['email']);
      theseRemoveClass(["changeRadio_items"], ['carType']);
      theseRemoveClass(["changeSelect_items"], ['parkingSpaceNum']);
      theseAddClass(["readOnly"], ['name', 'idNumber', 'jobTitle', 'parkingSpaceNum', 'adminNote', 'ext', 'endDate', 'paymentDate', 'rate', 'phoneNum', 'email', 'carType']);
      $('#updateBtn').hide();
      $('#supplementaryFilesBox').hide();
      $('#status').hide();
      $('#statusText').show().text(parkingSpaceData.status);
    } else {
      theseAddClass(["changeInput_items"], ['name', 'idNumber', 'jobTitle', 'adminNote']);
      theseAddClass(["changeNumber_items"], ['ext']);
      theseAddClass(["changeDate_items"], ['endDate', 'paymentDate']);
      theseAddClass(["changeMoney_items"], ['rate']);
      theseAddClass(["changePhone_items"], ['phoneNum']);
      theseAddClass(["changeEmail_items"], ['email']);
      theseAddClass(["changeRadio_items"], ['carType']);
      theseAddClass(["changeSelect_items"], ['parkingSpaceNum']);
      theseRemoveClass(["readOnly"], ['name', 'idNumber', 'jobTitle', 'parkingSpaceNum', 'adminNote', 'ext', 'endDate', 'paymentDate', 'rate', 'phoneNum', 'email', 'carType']);
      CustomInputHandlers.init();
      $('#updateBtn').show();
      $('#supplementaryFilesBox').show();
      $('#status').show();
      $('#statusText').hide();
    }
    $('#updateBtn').on('click', function () {
      // console.log('psId 2 :', psId); // 確認 psId 是否正確獲取
      // 清除上次的資料
      updatedData = {};
      // 獲取所有欄位的目前值
      updatedData.id = psId;
      updatedData.companyName = $('#companyName').text();
      updatedData.uniformNum = $('#uniformNum').text();
      updatedData.createDate = $('#createDate').text();
      updatedData.name = $('#name').text();
      updatedData.phoneNum = $('#phoneNum').text();
      updatedData.ext = $('#ext').text();
      updatedData.idNumber = $('#idNumber').text();
      updatedData.email = $('#email').text();
      updatedData.jobTitle = $('#jobTitle').text();
      updatedData.carType = $('#carType').text();
      updatedData.parkingSpaceNum = $('#parkingSpaceNum').text();
      updatedData.endDate = $('#endDate').text();
      updatedData.paymentDate = $('#paymentDate').text();
      updatedData.rate = $('#rate').text();
      updatedData.adminNote = $('#adminNote').text();
      updatedData.status = $('#status').val();
      console.log(updatedData);

      // 將更新的資料送到後端
      // $.ajax({
      //     url: '您的後端URL', // 替換成您的後端接收更新請求的URL
      //     type: 'POST', // 或者 'PUT'，根據您的後端接口設計來決定
      //     contentType: 'application/json',
      //     data: JSON.stringify(updatedData),
      //     success: function (response) {
      //         // 處理成功回應
      //         console.log('更新成功:', response);
      //         // 根據需要執行其他操作，例如顯示成功訊息
      //     },
      //     error: function (xhr, status, error) {
      //         // 處理錯誤情況
      //         console.error('更新失敗:', error);
      //         // 根據需要顯示錯誤訊息或執行其他操作
      //     }
      // });
    });
  });
});