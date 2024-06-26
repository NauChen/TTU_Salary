"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_myIDcardHistory = [{
  'id': '1',
  'createDate': '2023-08-30',
  'name': '孫一美',
  'jobTitle': '工讀生',
  'startDate': '2023-09-10',
  'endDate': '2023-10-09',
  'place': '青創大樓-201',
  'library': '未申請',
  'status': '已選停用，請至研發處歸還。',
  'print': '1'
}, {
  'id': '2',
  'createDate': '2023-08-31',
  'name': '孫大美',
  'jobTitle': '專員',
  'startDate': '2023-09-10',
  'endDate': '2023-10-09',
  'place': '青創大樓-202',
  'library': '已開放',
  'status': '未到期。',
  'print': '-'
}, {
  'id': '3',
  'createDate': '2023-09-10',
  'name': '孫大帥',
  'jobTitle': '專員',
  'startDate': '2023-10-11',
  'endDate': '2023-11-30',
  'place': '青創大樓-202',
  'library': '已開放',
  'status': '未到期。',
  'print': '-'
}, {
  'id': '4',
  'createDate': '2023-09-10',
  'name': '孫二帥',
  'jobTitle': '專員',
  'startDate': '2023-10-11',
  'endDate': '2023-11-30',
  'place': '青創大樓-202',
  'library': '已開放',
  'status': '已到期，請至研發處延期或歸還。',
  'print': '3'
}];
$(function () {
  // $('#myIDcardList').DataTable({
  //     ...commonSettingsProvision,
  //     layout: {
  //         topStart: function () {
  //             let provision = document.createElement('div');
  //             provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>識別證停用後，需歸還至研發處。</h6>';
  //             return provision;
  //         },
  //     },
  //     "data": dataset_myIDcardHistory,
  //     "columns": [
  //         {
  //             data: 'id', title: "勾選", render: function (data, type, row, meta) {
  //                 return '<input type="checkbox" class="form-check-input border-primary" value=' + data + '>'
  //             },
  //         },
  //         { data: 'createDate', title: "申請日期" },
  //         { data: 'name', title: "姓名" },
  //         { data: 'jobTitle', title: "職稱", },
  //         { data: 'place', title: "培育室位置", },
  //         { data: 'startDate', title: "進駐開始", },
  //         { data: 'endDate', title: "進駐結束", },
  //         { data: 'library', title: "閱覽<br>圖書館", },
  //         { data: 'status', title: "狀態", },
  //         { data: 'print', title: "補發", },
  //     ],
  //     "order": [[1, "desc"]],
  //     "columnDefs": [
  //         {
  //             targets: [0],
  //             responsivePriority: 1,
  //         },
  //         {
  //             targets: [1],
  //             responsivePriority: 2,
  //         },
  //         {
  //             targets: [2],
  //             responsivePriority: 3,
  //         },
  //         { searchable: false, orderable: false, targets: [0] },
  //         { className: "text-center", targets: [0, 1, 2, 3, 4, 5, 6, 7, 9] },
  //     ],
  //     createdRow: function (row, data, dataIndex) {
  //         [1, 4, 5].forEach(function (colIdx) {
  //             $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
  //         });
  //         [1, 2, 4, 5, 6].forEach(function (colIdx) {
  //             $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
  //         });
  //         [1, 5, 6].forEach(function (colIdx) {
  //             $('td:eq(' + colIdx + ')', row).css('min-width', '150px');
  //         });
  //         $('td:eq(7)', row).css('max-width', '130px');
  //     },
  // });

  var table = $('#myIDcardList').DataTable(_objectSpread(_objectSpread({}, commonSettingsProvision), {}, {
    layout: {
      topStart: function topStart() {
        var provision = document.createElement('div');
        provision.innerHTML = '<h6 class="fw-bold"><i class="fa-solid fa-circle-exclamation mx-1"></i>識別證停用後，需歸還至研發處。</h6>';
        return provision;
      }
    },
    "data": dataset_myIDcardHistory,
    "columns": [{
      data: 'id',
      title: '<i class="fa-regular fa-square-check"></i>',
      render: function render(data, type, row, meta) {
        return '<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value=' + data + '>';
      }
    }, {
      data: 'createDate',
      title: "申請日期"
    }, {
      data: 'name',
      title: "姓名"
    }, {
      data: 'jobTitle',
      title: "職稱"
    }, {
      data: 'place',
      title: "培育室位置"
    }, {
      data: 'startDate',
      title: "進駐開始"
    }, {
      data: 'endDate',
      title: "進駐結束"
    }, {
      data: 'library',
      title: "閱覽<br>圖書館"
    }, {
      data: 'status',
      title: "狀態"
    }, {
      data: 'print',
      title: "補發"
    }],
    "order": [[1, "desc"]],
    "columnDefs": [{
      targets: [0],
      responsivePriority: 1
    }, {
      targets: [1],
      responsivePriority: 2
    }, {
      targets: [2],
      responsivePriority: 3
    }, {
      searchable: false,
      orderable: false,
      targets: [0]
    }, {
      className: "text-center",
      targets: [0, 1, 2, 3, 4, 5, 6, 7, 9]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      [1, 5, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('font-size', '.95em').css('min-width', '130px');
      });
      [1, 2, 4, 5, 6].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).addClass('text-nowrap');
      });
      $('td:eq(7)', row).css('max-width', '130px');
    }
  }));
  $('#deleteTheseIdCard').click(function () {
    var selectedIds = [];
    table.rows().every(function () {
      var row = this.node();
      var checkbox = $(row).find('.idCard-checkbox');

      // 如果複選框被選中，獲取該行的ID
      if (checkbox.prop('checked')) {
        var rowData = this.data();
        selectedIds.push(rowData.id);
      }
    });

    // 如果没有選中任何行，提示用戶
    if (selectedIds.length === 0) {
      swalToastWarning('請先勾選欲停用的識別證。', 'top');
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
});