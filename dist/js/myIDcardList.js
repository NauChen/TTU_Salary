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
  'place': '新德惠-101',
  'name': '孫一美',
  'jobTitle': '工讀生',
  'library': '未申請',
  'print': '1',
  'startDate': '2023-09-10',
  'endDate': '2023-10-09',
  'status': '已選停用，請至研發處歸還。',
  'idCardNum': 'ABC101',
  'phone': '0912-345678',
  'email': 'abc#gmail.com',
  'emergContact': '孫大美',
  'ECPhone': '0933-456789'
}, {
  'id': '2',
  'createDate': '2023-08-31',
  'place': '綜合-202',
  'name': '孫大美',
  'jobTitle': '專員',
  'library': '已開放',
  'print': '-',
  'startDate': '2023-09-10',
  'endDate': '2023-10-09',
  'status': '-',
  'idCardNum': 'ABC102',
  'phone': '0933-456789',
  'email': 'abcd#gmail.com',
  'emergContact': '孫一美',
  'ECPhone': '0912-345678'
}, {
  'id': '3',
  'createDate': '2023-09-10',
  'place': '產學-202',
  'name': '孫大帥',
  'jobTitle': '專員',
  'library': '已開放',
  'print': '-',
  'startDate': '2023-10-11',
  'endDate': '2023-11-30',
  'status': '-',
  'idCardNum': 'ABC103',
  'phone': '0912-345678',
  'email': 'abc#gmail.com',
  'emergContact': '孫大美',
  'ECPhone': '0933-456789'
}, {
  'id': '4',
  'createDate': '2023-09-10',
  'place': '北設工-202',
  'name': '孫二帥',
  'jobTitle': '專員',
  'library': '已開放',
  'print': '3',
  'startDate': '2023-10-11',
  'endDate': '2023-11-30',
  'status': '-',
  'idCardNum': 'ABC104',
  'phone': '0912-345678',
  'email': 'abc#gmail.com',
  'emergContact': '孫大美',
  'ECPhone': '0933-456789'
}];
$(function () {
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
        // 0
        return '<input type="checkbox" class="form-check-input border-primary idCard-checkbox" value=' + data + '>';
      }
    }, {
      data: 'createDate',
      title: "申請日期"
    },
    // 1
    {
      data: 'place',
      title: "培育室位置",
      render: function render(data) {
        var placeData = data.split("-");
        var part1 = placeData[0].trim();
        var part2 = placeData[1].trim();
        var roomName = changeCultivationRoomToBuilding(part1);
        function changeCultivationRoomToBuilding(room) {
          switch (room) {
            case '新德惠':
              return '青創基地';
            case '綜合':
              return '綜合工廠培育區';
            case '挺生':
              return '挺生大樓培育區';
            case '產學':
              return '產學實驗培育區';
            case '實驗':
              return '實驗大樓培育區';
            case '北設工':
              return '北設工培育區';
            case '尚志':
              return '尚志大樓培育區';
            default:
              return '待新增';
          }
        }
        return roomName + '-' + part2;
      }
    },
    // 2
    {
      data: 'name',
      title: "姓名"
    },
    // 3
    {
      data: 'jobTitle',
      title: "職稱"
    },
    // 4
    {
      data: 'library',
      title: "閱覽<br>圖書館"
    },
    // 5
    {
      data: 'print',
      title: "補發<br>次數"
    },
    // 6
    {
      data: 'status',
      title: "備註"
    },
    // 7
    {
      data: 'id',
      title: "申請<br>補發",
      // 8
      render: function render(data) {
        return '<a class="btn btn-outline-primary rounded-circle noOutline" href="./idCardReissue.html?id=' + data + '"><i class="fa-regular fa-face-sad-tear"></i></a>';
      }
    }],
    "order": [[1, "desc"]],
    "columnDefs": [{
      targets: [0],
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
      targets: [0, 8]
    }, {
      className: "text-center",
      targets: [0, 1, 3, 4, 5, 6, 8]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      [1].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '130px');
      });
      $('td:eq(8)', row).css('max-width', '70px');
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