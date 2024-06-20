"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_idCardApp = [{
  'id': '1',
  'createDate': '2024-07-01',
  'company': '超級棒股份有限公司',
  'name': '孫小美',
  'startDate': '2023-08-30',
  'endDate': '2024-08-30',
  'place': '新德惠大樓 101',
  'paymentDate': '2023-06-01',
  'status': '不通過',
  'uniformNum': '12345678',
  'jobTitle': '財務經理',
  'phone': '02-81234567',
  'email': 'sunxiaomei@example.com',
  'idCardPhoto': '20240701ID1',
  'emergContact': '李小華',
  'ECPhone': '0912345678',
  'readLibrary': '申請',
  'adminNote': '資料不齊全'
}, {
  'id': '2',
  'createDate': '2024-07-02',
  'company': '智力科技有限公司',
  'name': '王大明',
  'startDate': '2023-09-01',
  'endDate': '2024-09-01',
  'place': '實驗大樓 202',
  'paymentDate': '2023-07-02',
  'status': '待審核',
  'uniformNum': '87654321',
  'jobTitle': '工程師',
  'phone': '02-82345678',
  'email': 'wangdameng@example.com',
  'idCardPhoto': '20240702ID2',
  'emergContact': '陳美麗',
  'ECPhone': '0918-765432',
  'readLibrary': '不申請',
  'adminNote': '需補充文件'
}, {
  'id': '3',
  'createDate': '2024-07-03',
  'company': '光速物流有限公司',
  'name': '李志偉',
  'startDate': '2023-10-01',
  'endDate': '2024-10-01',
  'place': '新德惠大樓 303',
  'paymentDate': '2023-08-01',
  'status': '通過',
  'uniformNum': '11223344',
  'jobTitle': '物流助理',
  'phone': '02-83456789',
  'email': 'lizhiwei@example.com',
  'idCardPhoto': '20240703ID3',
  'emergContact': '張建國',
  'ECPhone': '0912-341234',
  'readLibrary': '申請',
  'adminNote': '申請順利通過'
}, {
  'id': '4',
  'createDate': '2024-07-04',
  'company': '鴻海電子有限公司',
  'name': '劉敏',
  'startDate': '2023-11-01',
  'endDate': '2024-11-01',
  'place': '實驗大樓 404',
  'paymentDate': '2023-09-01',
  'status': '待補件',
  'uniformNum': '33445566',
  'jobTitle': '產品經理',
  'phone': '02-84567890',
  'email': 'liumin@example.com',
  'idCardPhoto': '20240704ID4',
  'emergContact': '林月嬌',
  'ECPhone': '0915-678901',
  'readLibrary': '不申請',
  'adminNote': '需補交簽名文件'
}, {
  'id': '5',
  'createDate': '2024-07-05',
  'company': '百思買有限公司',
  'name': '周海',
  'startDate': '2023-12-01',
  'endDate': '2024-12-01',
  'place': '新德惠大樓 505',
  'paymentDate': '2023-10-01',
  'status': '通過',
  'uniformNum': '55667788',
  'jobTitle': '市場行銷',
  'phone': '02-85678901',
  'email': 'zhouhai@example.com',
  'idCardPhoto': '20240705ID5',
  'emergContact': '趙雪芬',
  'ECPhone': '0916-789012',
  'readLibrary': '申請',
  'adminNote': '審核通過，發送通知'
}];
$(function () {
  $('#idCardApplicationList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_idCardApp,
    "columns": [{
      data: 'createDate',
      title: "申請日期"
    },
    // 0
    {
      data: 'company',
      title: "申請人企業"
    },
    // 1
    {
      data: 'name',
      title: "申請人姓名"
    },
    // 2
    {
      data: 'startDate',
      title: "進駐開始"
    },
    // 3
    {
      data: 'endDate',
      title: "進駐結束"
    },
    // 4
    {
      data: 'place',
      title: "培育室位置"
    },
    // 5
    {
      data: 'paymentDate',
      title: "付款日"
    },
    // 6
    {
      data: 'status',
      title: "審核進度"
    },
    // 7
    {
      data: 'id',
      title: "檢閱",
      render: function render(data) {
        // 8
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#idCardDetailModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
      },
      className: 'text-center text-nowrap'
    }],
    "columnDefs": [{
      targets: [1],
      responsivePriority: 1
    }, {
      targets: [2],
      responsivePriority: 2
    }, {
      targets: [3],
      responsivePriority: 3
    }, {
      searchable: false,
      orderable: false,
      targets: [8]
    }, {
      className: "text-center",
      targets: [0, 3, 4, 6]
    }, {
      className: "text-nowrap",
      targets: [0, 2, 3, 4, 5, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(8)', row).css('min-width', '70px');
      [0, 2, 3, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
      });
    }
  }));
  $('#idCardDetailModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    // console.log('Event relatedTarget:', button);
    var idCardId = String(button.data('id'));
    console.log('idCard Id:', idCardId); // 確認 psId 是否正確獲取
    // console.log('Button clicked, firmId:', firmId);

    // 解除先前綁定的點擊事件
    $('#updateBtn').off('click');
    var idCardApplyData = dataset_idCardApp.find(function (idCard) {
      return idCard.id === idCardId;
    });
    if (idCardApplyData) {
      //     // console.log('Job data found:', idCardApplyData);
      $('#companyName').text(idCardApplyData.company);
      $('#uniformNum').text(idCardApplyData.uniformNum);
      $('#place').text(idCardApplyData.place);
      $('#createDate').text(idCardApplyData.createDate);
      $('#name').text(idCardApplyData.name);
      $('#jobTitle').text(idCardApplyData.jobTitle);
      $('#email').text(idCardApplyData.email);
      $('#phoneNum').text(idCardApplyData.phone);
      $('#emergContact').text(idCardApplyData.emergContact);
      $('#ECPhone').text(idCardApplyData.ECPhone);
      $('#startDate').text(idCardApplyData.startDate);
      $('#endDate').text(idCardApplyData.endDate);
      $('#readLibrary').text(idCardApplyData.readLibrary);
      $('#paymentDate').text(idCardApplyData.paymentDate);
      $('#adminNote').text(idCardApplyData.adminNote);
      $('#status').val(idCardApplyData.status);
    } else {
      console.error('idCardApplyData data not found for id:', idCardId);
    }
    ;
    if (idCardApplyData.status === "通過" || idCardApplyData.status === "不通過") {
      // 移除所有切換輸入框的事件處理程序
      $('.changeInput_items').off('click');
      $('.changeDate_items').off('click');
      $('.changePhone_items').off('click');
      $('.changeEmail_items').off('click');
      $('.changeRadioApply_items').off('click');
      theseRemoveClass(["changeInput_items"], ['name', 'jobTitle', 'email', 'emergContact', 'adminNote']);
      theseRemoveClass(["changeDate_items"], ['startDate', 'endDate', 'paymentDate']);
      theseRemoveClass(["changePhone_items"], ['phoneNum', 'ECPhone']);
      theseRemoveClass(["changeEmail_items"], ['email']);
      theseRemoveClass(["changeRadioApply_items"], ['readLibrary']);
      theseAddClass(["readOnly"], ['name', 'jobTitle', 'email', 'emergContact', 'adminNote', 'eadminNotext', 'startDate', 'endDate', 'paymentDate', 'phoneNum', 'ECPhone', 'email', 'readLibrary']);
      $('#updateBtn').hide();
      $('#supplementaryFilesBox').hide();
      $('#status').hide();
      $('#statusText').show().text(idCardApplyData.status);
    } else {
      theseAddClass(["changeInput_items"], ['name', 'jobTitle', 'email', 'emergContact', 'adminNote']);
      theseAddClass(["changeDate_items"], ['startDate', 'endDate', 'paymentDate']);
      theseAddClass(["changePhone_items"], ['phoneNum', 'ECPhone']);
      theseAddClass(["changeEmail_items"], ['email']);
      theseAddClass(["changeRadioApply_items"], ['readLibrary']);
      theseRemoveClass(["readOnly"], ['name', 'jobTitle', 'email', 'emergContact', 'adminNote', 'eadminNotext', 'startDate', 'endDate', 'paymentDate', 'phoneNum', 'ECPhone', 'email', 'readLibrary']);
      CustomInputHandlers.init();
      $('#updateBtn').show();
      $('#supplementaryFilesBox').show();
      $('#status').show();
      $('#statusText').hide();
    }
    $('#updateBtn').on('click', function () {
      // console.log('idCardId 2 :', idCardId); // 確認 psId 是否正確獲取
      // 清除上次的資料
      updatedData = {};
      // 獲取所有欄位的目前值
      updatedData.id = idCardId;
      updatedData.companyName = $('#companyName').text();
      updatedData.uniformNum = $('#uniformNum').text();
      updatedData.place = $('#place').text();
      updatedData.createDate = $('#createDate').text();
      updatedData.name = $('#name').text();
      updatedData.jobTitle = $('#jobTitle').text();
      updatedData.email = $('#email').text();
      updatedData.phoneNum = $('#phoneNum').text();
      updatedData.emergContact = $('#emergContact').text();
      updatedData.ECPhone = $('#ECPhone').text();
      updatedData.startDate = $('#startDate').text();
      updatedData.endDate = $('#endDate').text();
      updatedData.readLibrary = $('#readLibrary').text();
      updatedData.paymentDate = $('#paymentDate').text();
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