"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var dataset_coopManufApp = [{
  'id': '1',
  'createDate': "2024-04-25",
  'company': "南方科技有限公司",
  'companyDescription': "專業提供高科技產品製造與銷售",
  'creationDate': "2010-12-03",
  'capitalAmount': "5,678,000",
  'employeesNum': "120",
  'responsiblePerson': "王大明",
  'referrer': "李小美",
  'phone': "02-87654321",
  'lineId': "nftech123",
  'contactPerson': "張小華",
  'ext': "1234",
  'jobTitle': "製造總監",
  'companyAdd': "台北市中山區中山北路100號",
  'locationOfCompany': "台北市信義區信義路200號",
  'helpItems': "提升製造效率、品質控制",
  'companyProof': "2024010101A1.pdf",
  'memoUpload': "2024010101B1.pdf",
  'consentDoc': "2024010101C1.pdf",
  'businessProof': "2024010101D1.pdf",
  'planUpload': "2024010101E1.pdf",
  'entryForm': "2024010101F1.pdf",
  'uniformNum': "23456780",
  'companyEmail': "abc@gmail.com",
  'status': "通過"
}, {
  'id': '2',
  'createDate': "2011-06-30",
  'company': "東方電子股份有限公司",
  'companyDescription': "專業從事電子產品設計與製造",
  'creationDate': "2005-04-15",
  'capitalAmount': "12,345,000",
  'employeesNum': "300",
  'responsiblePerson': "陳小明",
  'referrer': "王大力",
  'phone': "02-86543210",
  'lineId': "eastern123",
  'contactPerson': "林小玲",
  'ext': "5678",
  'jobTitle': "研發總監",
  'companyAdd': "新北市板橋區文化路300號",
  'locationOfCompany': "新北市新店區中正路500號",
  'helpItems': "產品設計、市場拓展",
  'companyProof': "2024010102A1.pdf",
  'memoUpload': "2024010102B1.pdf",
  'consentDoc': "2024010102C1.pdf",
  'businessProof': "2024010102D1.pdf",
  'planUpload': "2024010102E1.pdf",
  'entryForm': "2024010102F1.pdf",
  'uniformNum': "83456780",
  'companyEmail': "bcd@gmail.com",
  'status': "通過"
}, {
  'id': '3',
  'createDate': "2009-01-12",
  'company': "中華服飾有限公司",
  'companyDescription': "專業生產高質素服飾產品",
  'creationDate': "2001-11-20",
  'capitalAmount': "8,900,000",
  'employeesNum': "250",
  'responsiblePerson': "張小華",
  'referrer': "李小美",
  'phone': "02-81234567",
  'lineId': "zhonghua456",
  'contactPerson': "王大志",
  'ext': "4321",
  'jobTitle': "行銷經理",
  'companyAdd': "台中市西區民權路700號",
  'locationOfCompany': "台中市北區三民路800號",
  'helpItems': "市場拓展、品牌建立",
  'companyProof': "2024010103A1.pdf",
  'memoUpload': "2024010103B1.pdf",
  'consentDoc': "2024010103C1.pdf",
  'businessProof': "2024010103D1.pdf",
  'planUpload': "2024010103E1.pdf",
  'entryForm': "2024010103F1.pdf",
  'uniformNum': "53456780",
  'companyEmail': "cde@gmail.com",
  'status': "通過"
}, {
  'id': '4',
  'createDate': "2012-03-29",
  'company': "星際科技股份有限公司",
  'companyDescription': "專業提供航太科技產品解決方案",
  'creationDate': "2007-08-10",
  'capitalAmount': "15,600,000",
  'employeesNum': "180",
  'responsiblePerson': "劉大同",
  'referrer': "林小美",
  'phone': "02-80123456",
  'lineId': "stellar789",
  'contactPerson': "陳小菁",
  'ext': "6789",
  'jobTitle': "技術總監",
  'companyAdd': "台南市東區東門路900號",
  'locationOfCompany': "台南市南區南門路1000號",
  'helpItems': "技術開發、市場推廣",
  'companyProof': "2024010104A1.pdf",
  'memoUpload': "2024010104B1.pdf",
  'consentDoc': "2024010104C1.pdf",
  'businessProof': "2024010104D1.pdf",
  'planUpload': "2024010104E1.pdf",
  'entryForm': "2024010104F1.pdf",
  'uniformNum': "63456780",
  'companyEmail': "def@gmail.com",
  'status': "不通過"
}, {
  'id': '5',
  'createDate': "2008-11-28",
  'company': "綠意生活有限公司",
  'companyDescription': "專業提供生態友善產品與服務",
  'creationDate': "2004-05-06",
  'capitalAmount': "6,700,000",
  'employeesNum': "150",
  'responsiblePerson': "林小明",
  'referrer': "-",
  'phone': "02-87891234",
  'lineId': "greenlife234",
  'contactPerson': "陳小華",
  'ext': "8901",
  'jobTitle': "營運經理",
  'companyAdd': "桃園市中壢區中正路1100號",
  'locationOfCompany': "桃園市龜山區文化路1200號",
  'helpItems': "生態保護計畫、社會企業發展",
  'companyProof': "2024010105A1.pdf",
  'memoUpload': "2024010105B1.pdf",
  'consentDoc': "2024010105C1.pdf",
  'businessProof': "2024010105D1.pdf",
  'planUpload': "2024010105E1.pdf",
  'entryForm': "2024010105F1.pdf",
  'uniformNum': "83456780",
  'companyEmail': "efg@gmail.com",
  'status': "待補件"
}, {
  'id': '6',
  'createDate': "2022-10-15",
  'company': "晟霖實業股份有限公司",
  'companyDescription': "專精於工業機械設備製造與銷售",
  'creationDate': "1998-04-20",
  'capitalAmount': "1,230,000",
  'employeesNum': "268",
  'responsiblePerson': "陳明華",
  'referrer': "蔡佳玲",
  'phone': "02-86712345",
  'lineId': "shenglin123",
  'contactPerson': "林美玲",
  'ext': "1234",
  'jobTitle': "行政經理",
  'companyAdd': "台北市中山區復興北路100號",
  'locationOfCompany': "台北市信義區忠孝東路四段200號",
  'helpItems': "生產製造流程優化",
  'companyProof': "2024010101A1.pdf",
  'memoUpload': "2024010101B1.pdf",
  'consentDoc': "2024010101C1.pdf",
  'businessProof': "2024010101D1.pdf",
  'planUpload': "2024010101E1.pdf",
  'entryForm': "2024010101F1.pdf",
  'uniformNum': "63456780",
  'companyEmail': "fgh@gmail.com",
  'status': "待審核"
}, {
  'id': '7',
  'createDate': "2022-03-20",
  'company': "德昌企業有限公司",
  'companyDescription': "專業提供電子零件設計與製造服務",
  'creationDate': "2005-09-12",
  'capitalAmount': "980,000",
  'employeesNum': "153",
  'responsiblePerson': "王大明",
  'referrer': "張小芳",
  'phone': "02-86723456",
  'lineId': "techcorp456",
  'contactPerson': "張美麗",
  'ext': "5678",
  'jobTitle': "技術總監",
  'companyAdd': "台北市南港區園區二路75號",
  'locationOfCompany': "新北市中和區民富街三段90號",
  'helpItems': "新產品開發與市場推廣",
  'companyProof': "2024010102A1.pdf",
  'memoUpload': "2024010102B1.pdf",
  'consentDoc': "2024010102C1.pdf",
  'businessProof': "2024010102D1.pdf",
  'planUpload': "2024010102E1.pdf",
  'entryForm': "2024010102F1.pdf",
  'uniformNum': "63453780",
  'companyEmail': "ghi@gmail.com",
  'status': "待補件"
}, {
  'id': '8',
  'createDate': "2023-05-12",
  'company': "嘉強貿易股份有限公司",
  'companyDescription': "專注於進口與銷售高品質農產品",
  'creationDate': "2010-11-28",
  'capitalAmount': "750,000",
  'employeesNum': "87",
  'responsiblePerson': "黃小強",
  'referrer': "吳美惠",
  'phone': "02-86734567",
  'lineId': "strongtrade67",
  'contactPerson': "吳美玲",
  'ext': "6789",
  'jobTitle': "市場經理",
  'companyAdd': "台北市大安區仁愛路三段150號",
  'locationOfCompany': "新北市板橋區文化路一段200號",
  'helpItems': "市場拓展與品牌推廣",
  'companyProof': "2024010103A1.pdf",
  'memoUpload': "2024010103B1.pdf",
  'consentDoc': "2024010103C1.pdf",
  'businessProof': "2024010103D1.pdf",
  'planUpload': "2024010103E1.pdf",
  'entryForm': "2024010103F1.pdf",
  'uniformNum': "63456780",
  'companyEmail': "hij@gmail.com",
  'status': "待補件"
}, {
  'id': '9',
  'createDate': "2024-02-28",
  'company': "百傑科技有限公司",
  'companyDescription': "專業提供IT解決方案及服務",
  'creationDate': "2013-08-05",
  'capitalAmount': "1,500,000",
  'employeesNum': "312",
  'responsiblePerson': "劉文傑",
  'referrer': "張美玲",
  'phone': "02-86745678",
  'lineId': "besttech78",
  'contactPerson': "張小華",
  'ext': "3456",
  'jobTitle': "營運總監",
  'companyAdd': "台北市中正區羅斯福路一段50號",
  'locationOfCompany': "新北市新店區安和路二段300號",
  'helpItems': "系統開發與IT架構設計",
  'companyProof': "2024010104A1.pdf",
  'memoUpload': "2024010104B1.pdf",
  'consentDoc': "2024010104C1.pdf",
  'businessProof': "2024010104D1.pdf",
  'planUpload': "2024010104E1.pdf",
  'entryForm': "2024010104F1.pdf",
  'uniformNum': "63443780",
  'companyEmail': "ijk@gmail.com",
  'status': "通過"
}, {
  'id': '10',
  'createDate': "2023-11-10",
  'company': "全新文創有限公司",
  'companyDescription': "專注於文化創意產品開發與設計",
  'creationDate': "2018-06-22",
  'capitalAmount': "480,000",
  'employeesNum': "45",
  'responsiblePerson': "陳美惠",
  'referrer': "王小明",
  'phone': "02-86756789",
  'lineId': "creativexyz89",
  'contactPerson': "王大春",
  'ext': "4567",
  'jobTitle': "設計總監",
  'companyAdd': "台北市中山區民生東路三段80號",
  'locationOfCompany': "新北市三重區重新路四段500號",
  'helpItems': "產品設計與品牌推廣",
  'companyProof': "2024010105A1.pdf",
  'memoUpload': "2024010105B1.pdf",
  'consentDoc': "2024010105C1.pdf",
  'businessProof': "2024010105D1.pdf",
  'planUpload': "2024010105E1.pdf",
  'entryForm': "2024010105F1.pdf",
  'uniformNum': "22443780",
  'companyEmail': "jkl@gmail.com",
  'status': "通過"
}, {
  'id': '11',
  'createDate': "2024-01-18",
  'company': "宏達國際有限公司",
  'companyDescription': "專注於智慧型手機與通訊設備開發與製造",
  'creationDate': "2000-07-10",
  'capitalAmount': "1,800,000",
  'employeesNum': "380",
  'responsiblePerson': "王大明",
  'referrer': "張小華",
  'phone': "02-86778901",
  'lineId': "htcmobile901",
  'contactPerson': "張美玲",
  'ext': "6789",
  'jobTitle': "營運總監",
  'companyAdd': "台北市信義區松仁路100號",
  'locationOfCompany': "新北市板橋區新站路一段200號",
  'helpItems': "市場拓展與品牌推廣",
  'companyProof': "2024010106A1.pdf",
  'memoUpload': "2024010106B1.pdf",
  'consentDoc': "2024010106C1.pdf",
  'businessProof': "2024010106D1.pdf",
  'planUpload': "2024010106E1.pdf",
  'entryForm': "2024010106F1.pdf",
  'uniformNum': "52443780",
  'companyEmail': "klm@gmail.com",
  'status': "待補件"
}, {
  'id': '12',
  'createDate': "2023-09-25",
  'company': "美佳科技股份有限公司",
  'companyDescription': "專業提供多媒體播放器與數位音訊解決方案",
  'creationDate': "2010-03-15",
  'capitalAmount': "1,200,000",
  'employeesNum': "260",
  'responsiblePerson': "張小強",
  'referrer': "王大明",
  'phone': "02-86789012",
  'lineId': "mjktech012",
  'contactPerson': "王美玲",
  'ext': "8901",
  'jobTitle': "技術總監",
  'companyAdd': "台北市大安區敦化南路二段150號",
  'locationOfCompany': "新北市三重區中正北路三段300號",
  'helpItems': "產品技術升級與客戶支援",
  'companyProof': "2024010107A1.pdf",
  'memoUpload': "2024010107B1.pdf",
  'consentDoc': "2024010107C1.pdf",
  'businessProof': "2024010107D1.pdf",
  'planUpload': "2024010107E1.pdf",
  'entryForm': "2024010107F1.pdf",
  'uniformNum': "11443780",
  'companyEmail': "lmn@gmail.com",
  'status': "待補件"
}, {
  'id': '13',
  'createDate': "2023-07-08",
  'company': "新光電子有限公司",
  'companyDescription': "專業從事半導體元件設計與製造",
  'creationDate': "2005-11-30",
  'capitalAmount': "1,500,000",
  'employeesNum': "310",
  'responsiblePerson': "劉小明",
  'referrer': "陳大勇",
  'phone': "02-86790123",
  'lineId': "sunglight123",
  'contactPerson': "陳美華",
  'ext': "9012",
  'jobTitle': "研發主管",
  'companyAdd': "台北市中山區敬業三路200號",
  'locationOfCompany': "新北市永和區永利路四段400號",
  'helpItems': "技術研發與生產效率提升",
  'companyProof': "2024010108A1.pdf",
  'memoUpload': "2024010108B1.pdf",
  'consentDoc': "2024010108C1.pdf",
  'businessProof': "2024010108D1.pdf",
  'planUpload': "2024010108E1.pdf",
  'entryForm': "2024010108F1.pdf",
  'uniformNum': "11445380",
  'companyEmail': "mno@gmail.com",
  'status': "待補件"
}, {
  'id': '14',
  'createDate': "2022-11-30",
  'company': "億昌貿易有限公司",
  'companyDescription': "專注於進口與銷售高品質食品及飲料產品",
  'creationDate': "2009-04-25",
  'capitalAmount': "980,000",
  'employeesNum': "180",
  'responsiblePerson': "林大勇",
  'referrer': "張美華",
  'phone': "02-86701234",
  'lineId': "richtrade234",
  'contactPerson': "陳小華",
  'ext': "0123",
  'jobTitle': "行銷經理",
  'companyAdd': "台北市中正區中山南路100號",
  'locationOfCompany': "新北市新莊區中正路二段500號",
  'helpItems': "市場推廣與銷售策略執行",
  'companyProof': "2024010109A1.pdf",
  'memoUpload': "2024010109B1.pdf",
  'consentDoc': "2024010109C1.pdf",
  'businessProof': "2024010109D1.pdf",
  'planUpload': "2024010109E1.pdf",
  'entryForm': "2024010109F1.pdf",
  'uniformNum': "11427380",
  'companyEmail': "nop@gmail.com",
  'status': "通過"
}, {
  'id': '15',
  'createDate': "2022-10-01",
  'company': "聯華電子股份有限公司",
  'companyDescription': "全球領先的消費性電子產品製造商",
  'creationDate': "1996-05-18",
  'capitalAmount': "2,300,000",
  'employeesNum': "500",
  'responsiblePerson': "陳大明",
  'referrer': "劉小華",
  'phone': "02-86712345",
  'lineId': "lhtech345",
  'contactPerson': "劉美玲",
  'ext': "1234",
  'jobTitle': "市場部經理",
  'companyAdd': "台北市中正區忠孝西路一段150號",
  'locationOfCompany': "新北市三峽區中山路一段600號",
  'helpItems': "產品創新與市場策略執行",
  'companyProof': "2024010110A1.pdf",
  'memoUpload': "2024010110B1.pdf",
  'consentDoc': "2024010110C1.pdf",
  'businessProof': "2024010110D1.pdf",
  'planUpload': "2024010110E1.pdf",
  'entryForm': "2024010110F1.pdf",
  'uniformNum': "11445380",
  'companyEmail': "opq@gmail.com",
  'status': "通過"
}];
$(function () {
  $('#cooperativeManufacturersApplicationList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_coopManufApp,
    "columns": [{
      data: 'createDate',
      title: "申請日期"
    }, {
      data: 'company',
      title: "公司名稱"
    }, {
      data: 'uniformNum',
      title: "統一編號"
    }, {
      data: 'companyEmail',
      title: "E-mail"
    }, {
      data: 'status',
      title: "審核進度"
    }, {
      data: 'id',
      title: "檢閱",
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#vendorDetailModal" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
      },
      className: 'text-center text-nowrap'
    }],
    "columnDefs": [{
      targets: [0],
      responsivePriority: 1
    }, {
      targets: [2],
      responsivePriority: 2
    }, {
      targets: [3],
      responsivePriority: 2
    }, {
      "searchable": false,
      "orderable": false,
      "targets": [5]
    }, {
      "className": "text-nowrap",
      "targets": [0, 2, 3]
    }, {
      "className": "text-center",
      "targets": [0, 2, 4, 5]
    }]
  }));
  $('#vendorDetailModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var firmId = String(button.data('id'));
    // console.log('Button clicked, firmId:', firmId);

    // 解除先前綁定的點擊事件
    $('#updateBtn').off('click');
    var firmData = dataset_coopManufApp.find(function (firm) {
      return firm.id === firmId;
    });
    if (firmData) {
      //     // console.log('Job data found:', firmData);
      $('#companyName').text(firmData.company);
      $('#createDate').text(firmData.createDate);
      $('#companyDescription').text(firmData.companyDescription);
      $('#uniformNum').text(firmData.uniformNum);
      $('#creationDate').text(firmData.creationDate);
      $('#capitalAmount').text(firmData.capitalAmount);
      $('#employeesNum').text(firmData.employeesNum);
      $('#responsiblePerson').text(firmData.responsiblePerson);
      $('#referrer').text(firmData.referrer);
      $('#phoneNum').text(firmData.phone);
      $('#companyEmail').text(firmData.companyEmail);
      $('#lineId').text(firmData.lineId);
      $('#contactPerson').text(firmData.contactPerson);
      $('#ext').text(firmData.ext);
      $('#jobTitle').text(firmData.jobTitle);
      $('#companyAdd').text(firmData.companyAdd);
      $('#locationOfCompany').text(firmData.locationOfCompany);
      $('#helpItems').text(firmData.helpItems);
      if (firmData.status != '待審核') {
        $('#status').val(firmData.status);
      }
      ;
    } else {
      console.error('firmData data not found for id:', firmId);
    }
    ;
    if (firmData.status === "通過" || firmData.status === "不通過") {
      theseRemoveClass(["changeInput_items"], ['companyName', 'responsiblePerson', 'referrer', 'contactPerson', 'jobTitle', 'companyAdd', 'locationOfCompany']);
      theseRemoveClass(["changeTextarea_lg_items"], ['companyDescription', 'helpItems']);
      theseRemoveClass(["changeNumber_items"], ['uniformNum', 'ext']);
      theseRemoveClass(["changeDate_items"], ['creationDate']);
      theseRemoveClass(["changeMoney_items"], ['capitalAmount', 'employeesNum']);
      theseRemoveClass(["changePhone_items"], ['phoneNum']);
      theseRemoveClass(["changeEmail_items"], ['companyEmail', 'lineId']);
      theseAddClass(["readOnly"], ['companyName', 'responsiblePerson', 'referrer', 'contactPerson', 'jobTitle', 'companyAdd', 'locationOfCompany', 'companyDescription', 'helpItems', 'uniformNum', 'ext', 'creationDate', 'capitalAmount', 'employeesNum', 'phoneNum', 'companyEmail', 'lineId']);
      $('#updateBtn').hide();
      $('#supplementaryFilesBox').hide();
      $('#status').hide();
      $('#statusText').show().text(firmData.status);
    } else {
      theseAddClass(["changeInput_items"], ['companyName', 'responsiblePerson', 'referrer', 'contactPerson', 'jobTitle', 'companyAdd', 'locationOfCompany']);
      theseAddClass(["changeTextarea_lg_items"], ['companyDescription', 'helpItems']);
      theseAddClass(["changeNumber_items"], ['uniformNum', 'ext']);
      theseAddClass(["changeDate_items"], ['creationDate']);
      theseAddClass(["changeMoney_items"], ['capitalAmount', 'employeesNum']);
      theseAddClass(["changePhone_items"], ['phoneNum']);
      theseAddClass(["changeEmail_items"], ['companyEmail', 'lineId']);
      theseRemoveClass(["readOnly"], ['companyName', 'responsiblePerson', 'referrer', 'contactPerson', 'jobTitle', 'companyAdd', 'locationOfCompany', 'companyDescription', 'helpItems', 'uniformNum', 'ext', 'creationDate', 'capitalAmount', 'employeesNum', 'phoneNum', 'companyEmail', 'lineId']);
      CustomInputHandlers.init();
      $('#updateBtn').show();
      $('#supplementaryFilesBox').show();
      $('#status').show();
      $('#statusText').hide();
    }
    $('#updateBtn').on('click', function () {
      // console.log('firmId 2 :', firmId); // 確認 psId 是否正確獲取
      // 清除上次的資料
      updatedData = {};
      // 獲取所有欄位的目前值
      updatedData.id = firmId;
      updatedData.companyName = $('#companyName').text();
      updatedData.createDate = $('#createDate').text();
      updatedData.companyDescription = $('#companyDescription').text();
      updatedData.uniformNum = $('#uniformNum').text();
      updatedData.creationDate = $('#creationDate').text();
      updatedData.capitalAmount = $('#capitalAmount').text();
      updatedData.employeesNum = $('#employeesNum').text();
      updatedData.responsiblePerson = $('#responsiblePerson').text();
      updatedData.referrer = $('#referrer').text();
      updatedData.phone = $('#phoneNum').text();
      updatedData.companyEmail = $('#companyEmail').text();
      updatedData.lineId = $('#lineId').text();
      updatedData.contactPerson = $('#contactPerson').text();
      updatedData.ext = $('#ext').text();
      updatedData.jobTitle = $('#jobTitle').val();
      updatedData.companyAdd = $('#companyAdd').text();
      updatedData.locationOfCompany = $('#locationOfCompany').val();
      updatedData.helpItems = $('#helpItems').val();
      // updatedData.adminNote = $('#adminNote').text();

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