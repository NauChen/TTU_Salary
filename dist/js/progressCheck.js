"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// status 在後端先將 審核進度 跟 給廠商的話 做字串串接再傳來
var dataset_progressCheck = [{
  'id': '1',
  'createDate': '2024-07-01',
  'type': '汽車位',
  'name': '孫小美',
  'remark': '續約：B1-01',
  'paymentDate': '2024-07-07',
  'status': '待補件。匯款證明',
  'remittanceFile': '20240710RF2'
}, {
  'id': '2',
  'createDate': '2024-06-15',
  'type': '機車位',
  'name': '孫中美',
  'remark': '首次申請',
  'paymentDate': '',
  'status': '待補件。匯款證明',
  'remittanceFile': '20240710RF1'
}, {
  'id': '3',
  'createDate': '2024-06-25',
  'type': '識別證',
  'name': '孫大美',
  'remark': '申請補發',
  'paymentDate': '2024-07-02',
  'status': '通過',
  'remittanceFile': '20240710RF3'
}, {
  'id': '4',
  'createDate': '2024-07-10',
  'type': '汽車位',
  'name': '王小明',
  'remark': '首次申請',
  'paymentDate': '2024-07-17',
  'status': '不通過。使用者取消。',
  'remittanceFile': ''
}, {
  'id': '5',
  'createDate': '2024-07-03',
  'type': '機車位',
  'name': '陳美麗',
  'remark': '續約：B3-01',
  'paymentDate': '2024-07-09',
  'status': '已到帳，待審核',
  'remittanceFile': '20240710RF2'
}, {
  'id': '6',
  'createDate': '2024-06-20',
  'type': '識別證',
  'name': '李美麗',
  'remark': '首次申請',
  'paymentDate': '2024-06-26',
  'status': '通過',
  'remittanceFile': '20240710RF1'
}, {
  'id': '7',
  'createDate': '2024-06-28',
  'type': '培育室',
  'name': '好棒棒股份有限公司',
  'remark': '續約：培育室',
  'paymentDate': '',
  'status': '待補件。繳費證明',
  'remittanceFile': '20240710RF5'
}];
$(function () {
  var table = $('#progressCheckList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_progressCheck,
    "columns": [{
      data: 'id',
      title: '<i class="fa-regular fa-square-check"></i>',
      render: function render(data, type, row, meta) {
        // 0
        return '<input type="checkbox" class="form-check-input border-primary application-checkbox" value=' + data + '>';
      }
    }, {
      data: 'createDate',
      title: "申請日期"
    },
    // 1
    {
      data: 'name',
      title: "申請人姓名"
    },
    // 2
    {
      data: 'type',
      title: "申請項目"
    },
    // 3
    {
      data: 'remark',
      title: "項目註記"
    },
    // 4 
    {
      data: 'paymentDate',
      title: "到帳日"
    },
    // 5
    {
      data: 'status',
      title: "審核進度"
    },
    // 6
    {
      data: 'id',
      title: "匯款<br>憑證",
      render: function render(data, type, row) {
        var remittanceFile = row.remittanceFile;
        if (remittanceFile == '') {
          return '<button type="button" class="btn btn-light rounded-circle remittance_voucher align_center alreadyHave" title="再次上傳匯款憑證" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
        } else {
          return '<button type="button" class="btn btn-outline-primary rounded-circle remittance_voucher align_center" title="上傳匯款憑證" data-bs-toggle="modal" data-bs-target="#remittanceModal" data-id="' + data + '"><i class="fa-solid fa-money-check-dollar"></i></button>';
        }
      },
      className: 'text-center text-nowrap'
    }],
    "order": [[1, "desc"]],
    "columnDefs": [{
      targets: [0],
      responsivePriority: 1
    }, {
      targets: [1],
      responsivePriority: 2
    }, {
      targets: [3],
      responsivePriority: 3
    }, {
      searchable: false,
      orderable: false,
      targets: [0, 7]
    }, {
      className: "text-center",
      targets: [0, 1, 3, 5]
    }, {
      className: "text-nowrap",
      targets: [0, 1, 2, 3, 4, 5, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(8)', row).css('min-width', '70px');
      $('td:eq(6)', row).css('min-width', '200px');
      [1, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '130px').css('font-size', '.95em');
      });
    }
  }));
  $('#deleteTheseApplication').click(function () {
    var selectedIds = [];

    // 遍歷每一行，檢查第一列複選框是否選中
    table.rows().every(function () {
      var row = this.node();
      var checkbox = $(row).find('.application-checkbox');

      // 如果複選框被選中，獲取該行的ID
      if (checkbox.prop('checked')) {
        var rowData = this.data();
        selectedIds.push(rowData.id);
      }
    });

    // 如果没有選中任何行，提示用戶
    if (selectedIds.length === 0) {
      swalToastWarning('請先勾選欲刪除的申請紀錄。', 'top');
      return;
    }
    console.log(selectedIds);

    // let requestData = {
    //     ids: selectedIds
    // };

    // 向後端發送删除請求
    // $.ajax({
    //     url: 'asp.net的東西',
    //     type: 'POST',
    //     contentType: 'application/json',
    //     data: JSON.stringify(requestData),
    //     success: function (response) {
    //         console.log('Delete request successful', response);
    //     },
    //     error: function (xhr, status, error) {
    //         console.error('Error deleting jobs', error);
    //     }
    // });
  });
  $('.alreadyHave').click(function (event) {
    event.preventDefault(); // 阻止默認行為

    var button = $(this);
    var dataId = button.data('id'); // 獲取按鈕的 data-id 屬性

    swalConfirm('曾填過匯款通知，要再填一次嗎?',
    // 顯示的問題
    '對，我要重新填寫上傳。',
    // YES按鈕的文字
    '不，回到上一步。',
    // NO按鈕的文字
    function () {
      // YES按鈕點擊後開啟燈箱
      $('#remittanceModal').modal('show');
      $('#remittanceModal').data('id', dataId); // 可以選擇傳遞 data-id 到燈箱中
    });
  });
});