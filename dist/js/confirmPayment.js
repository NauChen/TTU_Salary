"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 生成10筆資料
// company是假的繁體中文公司名稱
// uniformNum是假的統一編號，格式：數字8字元，可重複。
// contactPerson是繁體中文的假主要聯絡人人名，
// companyPhone是假的電話，值隨機放入各種電話號碼，格式為02-86710000(0+一個數字+'-'+8個數字)或是0912-345678(09+2個數字+'-'+6個數字)
// companyEmail 是假的主要聯絡信箱
// amount 是每月服務費用，金額落在30000~80000之間，要有千分位符號
// firstDeadline是第一階段付款期限，此日期會比paymentDateFirst晚2~3天
// paymentDateFirst是第一階段付款日，此日期會比firstDeadline早2~3天
// receivedDateFirst是第一階段收款日，此日期會等於 paymentDateFirst 或是 paymentDateFirst的下一個工作天
// secondDeadline是第二階段付款期限，此日期會比firstDeadline晚半年
// paymentDateSecond是第二階段付款日，此日期會比secondDeadline早2~3天或是''
// receivedDateSecond是第二階段收款日，若paymentDateSecond沒有值，則此日期是''，若有值則會等於 paymentDateSecond 或是 paymentDateSecond的下一個工作天
// receiptNumFirst是第一階段收據號碼，格式為A+000+3個字元數字
// receiptDateFirst是第一階段收據日期，此日期會比receivedDateFirst晚3天
// receiptItemsFirst是第一階段收據項目，值為'服務費'
// receiptAmountFirst是第一階段收據項目，值與amount相同
// receiptNumSecond是第二階段收據號碼，格式為A+000+3個字元數字
// receiptDateSecond是第二階段收據日期，此日期會比receivedDateSecond晚3天
// receiptItemSecond是第二階段收據項目，值為'服務費'
// receiptAmountSecond是第二階段收據項目，值與amount相同
// remittanceFile是檔案名稱，格式為YYYYmmDD + RM + 數字1字元
// adminNote是管理員備註，可能為''
// room是配置的培育室號碼，可能為 '新德惠大樓 101' 或是 '綜合大樓 104'，由[新德惠大樓,綜合大樓,挺生大樓,實驗大樓,北設工大樓,尚志大樓]跟[101,104,105,106,201,202,A4-102,A4-103,714,809,818]組成 

// 續約 - 將可續約(不論有無點擊要續約)資料匯入

// 新進駐 - 將請進駐後，審核通過的匯入
var dataset_confirmPaymentCultivationRoom = [{
  'id': '1',
  'company': '超級棒股份有限公司',
  'uniformNum': '12345678',
  'contactPerson': '王曉明',
  'companyPhone': '02-26710000',
  'companyEmail': 'abc@gmail.com',
  'amount': '40,000',
  'firstDeadline': '2024-05-12',
  'paymentDateFirst': '2024-05-10',
  'receivedDateFirst': '2024-05-11',
  'secondDeadline': '2024-11-12',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000123',
  'receiptDateFirst': '2024-05-14',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '40,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240510RM1',
  'adminNote': '第二階段尚未付款',
  'room': '新德惠大樓 101'
}, {
  'id': '2',
  'company': '優質科技股份有限公司',
  'uniformNum': '87654321',
  'contactPerson': '李小龍',
  'companyPhone': '02-36710000',
  'companyEmail': 'xyz@gmail.com',
  'amount': '35,000',
  'firstDeadline': '2024-05-13',
  'paymentDateFirst': '2024-05-11',
  'receivedDateFirst': '2024-05-12',
  'secondDeadline': '2024-11-13',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000125',
  'receiptDateFirst': '2024-05-15',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '35,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240511RM1',
  'adminNote': '',
  'room': '綜合大樓 104'
}, {
  'id': '3',
  'company': '金鼎企業有限公司',
  'uniformNum': '23456789',
  'contactPerson': '張三豐',
  'companyPhone': '02-46710000',
  'companyEmail': 'jkl@gmail.com',
  'amount': '50,000',
  'firstDeadline': '2024-05-14',
  'paymentDateFirst': '2024-05-12',
  'receivedDateFirst': '2024-05-13',
  'secondDeadline': '2024-11-14',
  'paymentDateSecond': '2024-11-12',
  'receivedDateSecond': '2024-11-13',
  'receiptNumFirst': 'A000126',
  'receiptDateFirst': '2024-05-16',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '50,000',
  'receiptNumSecond': 'A000127',
  'receiptDateSecond': '2024-11-15',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '50,000',
  'remittanceFile': '20240512RM1',
  'adminNote': '',
  'room': '挺生大樓 105'
}, {
  'id': '4',
  'company': '龍騰科技股份有限公司',
  'uniformNum': '34567890',
  'contactPerson': '林曉月',
  'companyPhone': '0912-345678',
  'companyEmail': 'def@gmail.com',
  'amount': '45,000',
  'firstDeadline': '2024-05-15',
  'paymentDateFirst': '2024-05-13',
  'receivedDateFirst': '2024-05-14',
  'secondDeadline': '2024-11-15',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000128',
  'receiptDateFirst': '2024-05-17',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '45,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240513RM1',
  'adminNote': '',
  'room': '實驗大樓 106'
}, {
  'id': '5',
  'company': '日月光股份有限公司',
  'uniformNum': '45678901',
  'contactPerson': '陳冠希',
  'companyPhone': '02-56710000',
  'companyEmail': 'ghi@gmail.com',
  'amount': '55,000',
  'firstDeadline': '2024-05-16',
  'paymentDateFirst': '2024-05-14',
  'receivedDateFirst': '2024-05-15',
  'secondDeadline': '2024-11-16',
  'paymentDateSecond': '2024-11-14',
  'receivedDateSecond': '2024-11-15',
  'receiptNumFirst': 'A000129',
  'receiptDateFirst': '2024-05-18',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '55,000',
  'receiptNumSecond': 'A000130',
  'receiptDateSecond': '2024-11-17',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '55,000',
  'remittanceFile': '20240514RM1',
  'adminNote': '',
  'room': '北設工大樓 201'
}, {
  'id': '6',
  'company': '巨匠科技有限公司',
  'uniformNum': '56789012',
  'contactPerson': '吳宗憲',
  'companyPhone': '02-66710000',
  'companyEmail': 'mno@gmail.com',
  'amount': '60,000',
  'firstDeadline': '2024-05-17',
  'paymentDateFirst': '2024-05-15',
  'receivedDateFirst': '2024-05-16',
  'secondDeadline': '2024-11-17',
  'paymentDateSecond': '2024-11-15',
  'receivedDateSecond': '2024-11-16',
  'receiptNumFirst': 'A000131',
  'receiptDateFirst': '2024-05-19',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '60,000',
  'receiptNumSecond': 'A000132',
  'receiptDateSecond': '2024-11-18',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '60,000',
  'remittanceFile': '20240515RM1',
  'adminNote': '',
  'room': '尚志大樓 202'
}, {
  'id': '7',
  'company': '光速科技股份有限公司',
  'uniformNum': '67890123',
  'contactPerson': '周杰倫',
  'companyPhone': '02-76710000',
  'companyEmail': 'pqr@gmail.com',
  'amount': '70,000',
  'firstDeadline': '2024-05-18',
  'paymentDateFirst': '2024-05-16',
  'receivedDateFirst': '2024-05-17',
  'secondDeadline': '2024-11-18',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000133',
  'receiptDateFirst': '2024-05-20',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '70,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240516RM1',
  'adminNote': '',
  'room': '新德惠大樓 A4-102'
}, {
  'id': '8',
  'company': '太陽能科技股份有限公司',
  'uniformNum': '78901234',
  'contactPerson': '陳奕迅',
  'companyPhone': '0912-456789',
  'companyEmail': 'stu@gmail.com',
  'amount': '65,000',
  'firstDeadline': '2024-05-19',
  'paymentDateFirst': '2024-05-17',
  'receivedDateFirst': '2024-05-18',
  'secondDeadline': '2024-11-19',
  'paymentDateSecond': '2024-11-17',
  'receivedDateSecond': '2024-11-18',
  'receiptNumFirst': 'A000134',
  'receiptDateFirst': '2024-05-21',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '65,000',
  'receiptNumSecond': 'A000135',
  'receiptDateSecond': '2024-11-20',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '65,000',
  'remittanceFile': '20240517RM1',
  'adminNote': '',
  'room': '綜合大樓 A4-103'
}, {
  'id': '9',
  'company': '巨力科技有限公司',
  'uniformNum': '89012345',
  'contactPerson': '周星馳',
  'companyPhone': '02-86710000',
  'companyEmail': 'vwx@gmail.com',
  'amount': '75,000',
  'firstDeadline': '2024-05-20',
  'paymentDateFirst': '2024-05-18',
  'receivedDateFirst': '2024-05-19',
  'secondDeadline': '2024-11-20',
  'paymentDateSecond': '2024-11-18',
  'receivedDateSecond': '2024-11-19',
  'receiptNumFirst': 'A000136',
  'receiptDateFirst': '2024-05-22',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '75,000',
  'receiptNumSecond': 'A000137',
  'receiptDateSecond': '2024-11-21',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '75,000',
  'remittanceFile': '20240518RM1',
  'adminNote': '',
  'room': '挺生大樓 714'
}, {
  'id': '10',
  'company': '迅達科技股份有限公司',
  'uniformNum': '90123456',
  'contactPerson': '劉德華',
  'companyPhone': '02-96710000',
  'companyEmail': 'yz@gmail.com',
  'amount': '80,000',
  'firstDeadline': '2024-05-21',
  'paymentDateFirst': '2024-05-19',
  'receivedDateFirst': '2024-05-20',
  'secondDeadline': '2024-11-21',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000138',
  'receiptDateFirst': '2024-05-23',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '80,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240519RM1',
  'adminNote': '',
  'room': '實驗大樓 809'
}];
var selectOptionRoom = [{
  'optigroup': '新德惠大樓',
  'option': '101'
}, {
  'optigroup': '新德惠大樓',
  'option': '102'
}, {
  'optigroup': '新德惠大樓',
  'option': '103'
}, {
  'optigroup': '新德惠大樓',
  'option': '104'
}, {
  'optigroup': '新德惠大樓',
  'option': '105'
}, {
  'optigroup': '新德惠大樓',
  'option': '106'
}, {
  'optigroup': '新德惠大樓',
  'option': '107'
}, {
  'optigroup': '青創大樓',
  'option': '201'
}];

// 生成10筆資料
// deadLine是付款期限，此日期會比paymentDate晚2~3天
// company是假的繁體中文公司名稱
// type是'汽車','機車','補發識別證'
// amount 是每月服務費用，要有千分位符號，若type是'汽車'，amount的值為2500或3000。若type是'機車'，amount的值為100。若type是'補發識別證'，amount的值為300。
// paymentDate是付款日，此日期會比deadLine早2~3天
// receivedDate是入帳日，此日期會等於 paymentDate 或是等於 paymentDate的下一個工作天
// placeOrPrint是車位號碼或是補發次數，若type='汽車'或是'機車'，placeOrPrint的值可能為'B'+數字1字元+'-'+數字2字元，或是''。若type='補發識別證'，placeOrPrint的值可能為數字1~9，1字元
// adminNote是管理員備註，可能為''

// 車位與識別證 - 將可續約(不論有無點擊要續約) 與 新申請 資料匯入
var dataset_confirmPaymentCarOrCard = [{
  'id': '1',
  'deadLine': '2024-07-15',
  'company': '超級棒股份有限公司',
  'amount': '2,500',
  'type': '汽車',
  'paymentDate': '2024-07-13',
  'receivedDate': '2024-07-13',
  'placeOrPrint': 'B1-15',
  'adminNote': ''
}, {
  'id': '2',
  'deadLine': '2024-07-16',
  'company': '優質科技股份有限公司',
  'amount': '100',
  'type': '機車',
  'paymentDate': '2024-07-14',
  'receivedDate': '2024-07-15',
  'placeOrPrint': 'B2-09',
  'adminNote': ''
}, {
  'id': '3',
  'deadLine': '2024-07-17',
  'company': '金鼎企業有限公司',
  'amount': '300',
  'type': '補發識別證',
  'paymentDate': '2024-07-15',
  'receivedDate': '2024-07-16',
  'placeOrPrint': '5',
  'adminNote': '補發第五次'
}, {
  'id': '4',
  'deadLine': '2024-07-18',
  'company': '龍騰科技股份有限公司',
  'amount': '2,500',
  'type': '汽車',
  'paymentDate': '2024-07-16',
  'receivedDate': '2024-07-16',
  'placeOrPrint': 'B1-07',
  'adminNote': ''
}, {
  'id': '5',
  'deadLine': '2024-07-19',
  'company': '日月光股份有限公司',
  'amount': '100',
  'type': '機車',
  'paymentDate': '2024-07-17',
  'receivedDate': '2024-07-17',
  'placeOrPrint': '',
  'adminNote': '已空車位'
}, {
  'id': '6',
  'deadLine': '2024-07-20',
  'company': '巨匠科技有限公司',
  'amount': '300',
  'type': '補發識別證',
  'paymentDate': '2024-07-18',
  'receivedDate': '2024-07-19',
  'placeOrPrint': '3',
  'adminNote': ''
}, {
  'id': '7',
  'deadLine': '2024-07-21',
  'company': '光速科技股份有限公司',
  'amount': '3,000',
  'type': '汽車',
  'paymentDate': '2024-07-19',
  'receivedDate': '2024-07-19',
  'placeOrPrint': 'B2-12',
  'adminNote': ''
}, {
  'id': '8',
  'deadLine': '2024-07-22',
  'company': '太陽能科技股份有限公司',
  'amount': '100',
  'type': '機車',
  'paymentDate': '2024-07-20',
  'receivedDate': '2024-07-21',
  'placeOrPrint': 'B3-08',
  'adminNote': ''
}, {
  'id': '9',
  'deadLine': '2024-07-23',
  'company': '巨力科技有限公司',
  'amount': '300',
  'type': '補發識別證',
  'paymentDate': '2024-07-21',
  'receivedDate': '2024-07-22',
  'placeOrPrint': '8',
  'adminNote': ''
}, {
  'id': '10',
  'deadLine': '2024-07-24',
  'company': '迅達科技股份有限公司',
  'amount': '2,500',
  'type': '汽車',
  'paymentDate': '2024-07-22',
  'receivedDate': '2024-07-23',
  'placeOrPrint': 'B1-10',
  'adminNote': '確認車位'
}];
var dataset_confirmPaymentCultivationRoom2 = [{
  'id': '1',
  'room': '新德惠大樓 101',
  'amount': '40,000',
  'company': '',
  'uniformNum': '',
  'contactPerson': '',
  'companyPhone': '',
  'companyEmail': '',
  'firstDeadline': '',
  'paymentDateFirst': '',
  'receivedDateFirst': '',
  'secondDeadline': '',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': '',
  'receiptDateFirst': '',
  'receiptItemsFirst': '',
  'receiptAmountFirst': '',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240510RM1',
  'adminNote': ''
}, {
  'id': '2',
  'company': '優質科技股份有限公司',
  'uniformNum': '87654321',
  'contactPerson': '李小龍',
  'companyPhone': '02-36710000',
  'companyEmail': 'xyz@gmail.com',
  'amount': '35,000',
  'firstDeadline': '2024-05-13',
  'paymentDateFirst': '2024-05-11',
  'receivedDateFirst': '2024-05-12',
  'secondDeadline': '2024-11-13',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000125',
  'receiptDateFirst': '2024-05-15',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '35,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240511RM1',
  'adminNote': '',
  'room': '綜合大樓 104'
}, {
  'id': '3',
  'company': '金鼎企業有限公司',
  'uniformNum': '23456789',
  'contactPerson': '張三豐',
  'companyPhone': '02-46710000',
  'companyEmail': 'jkl@gmail.com',
  'amount': '50,000',
  'firstDeadline': '2024-05-14',
  'paymentDateFirst': '2024-05-12',
  'receivedDateFirst': '2024-05-13',
  'secondDeadline': '2024-11-14',
  'paymentDateSecond': '2024-11-12',
  'receivedDateSecond': '2024-11-13',
  'receiptNumFirst': 'A000126',
  'receiptDateFirst': '2024-05-16',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '50,000',
  'receiptNumSecond': 'A000127',
  'receiptDateSecond': '2024-11-15',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '50,000',
  'remittanceFile': '20240512RM1',
  'adminNote': '',
  'room': '挺生大樓 105'
}, {
  'id': '4',
  'company': '龍騰科技股份有限公司',
  'uniformNum': '34567890',
  'contactPerson': '林曉月',
  'companyPhone': '0912-345678',
  'companyEmail': 'def@gmail.com',
  'amount': '45,000',
  'firstDeadline': '2024-05-15',
  'paymentDateFirst': '2024-05-13',
  'receivedDateFirst': '2024-05-14',
  'secondDeadline': '2024-11-15',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000128',
  'receiptDateFirst': '2024-05-17',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '45,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240513RM1',
  'adminNote': '',
  'room': '實驗大樓 106'
}, {
  'id': '5',
  'company': '日月光股份有限公司',
  'uniformNum': '45678901',
  'contactPerson': '陳冠希',
  'companyPhone': '02-56710000',
  'companyEmail': 'ghi@gmail.com',
  'amount': '55,000',
  'firstDeadline': '2024-05-16',
  'paymentDateFirst': '2024-05-14',
  'receivedDateFirst': '2024-05-15',
  'secondDeadline': '2024-11-16',
  'paymentDateSecond': '2024-11-14',
  'receivedDateSecond': '2024-11-15',
  'receiptNumFirst': 'A000129',
  'receiptDateFirst': '2024-05-18',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '55,000',
  'receiptNumSecond': 'A000130',
  'receiptDateSecond': '2024-11-17',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '55,000',
  'remittanceFile': '20240514RM1',
  'adminNote': '',
  'room': '北設工大樓 201'
}, {
  'id': '6',
  'company': '巨匠科技有限公司',
  'uniformNum': '56789012',
  'contactPerson': '吳宗憲',
  'companyPhone': '02-66710000',
  'companyEmail': 'mno@gmail.com',
  'amount': '60,000',
  'firstDeadline': '2024-05-17',
  'paymentDateFirst': '2024-05-15',
  'receivedDateFirst': '2024-05-16',
  'secondDeadline': '2024-11-17',
  'paymentDateSecond': '2024-11-15',
  'receivedDateSecond': '2024-11-16',
  'receiptNumFirst': 'A000131',
  'receiptDateFirst': '2024-05-19',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '60,000',
  'receiptNumSecond': 'A000132',
  'receiptDateSecond': '2024-11-18',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '60,000',
  'remittanceFile': '20240515RM1',
  'adminNote': '',
  'room': '尚志大樓 202'
}, {
  'id': '7',
  'company': '光速科技股份有限公司',
  'uniformNum': '67890123',
  'contactPerson': '周杰倫',
  'companyPhone': '02-76710000',
  'companyEmail': 'pqr@gmail.com',
  'amount': '70,000',
  'firstDeadline': '2024-05-18',
  'paymentDateFirst': '2024-05-16',
  'receivedDateFirst': '2024-05-17',
  'secondDeadline': '2024-11-18',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000133',
  'receiptDateFirst': '2024-05-20',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '70,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240516RM1',
  'adminNote': '',
  'room': '新德惠大樓 A4-102'
}, {
  'id': '8',
  'company': '太陽能科技股份有限公司',
  'uniformNum': '78901234',
  'contactPerson': '陳奕迅',
  'companyPhone': '0912-456789',
  'companyEmail': 'stu@gmail.com',
  'amount': '65,000',
  'firstDeadline': '2024-05-19',
  'paymentDateFirst': '2024-05-17',
  'receivedDateFirst': '2024-05-18',
  'secondDeadline': '2024-11-19',
  'paymentDateSecond': '2024-11-17',
  'receivedDateSecond': '2024-11-18',
  'receiptNumFirst': 'A000134',
  'receiptDateFirst': '2024-05-21',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '65,000',
  'receiptNumSecond': 'A000135',
  'receiptDateSecond': '2024-11-20',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '65,000',
  'remittanceFile': '20240517RM1',
  'adminNote': '',
  'room': '綜合大樓 A4-103'
}, {
  'id': '9',
  'company': '巨力科技有限公司',
  'uniformNum': '89012345',
  'contactPerson': '周星馳',
  'companyPhone': '02-86710000',
  'companyEmail': 'vwx@gmail.com',
  'amount': '75,000',
  'firstDeadline': '2024-05-20',
  'paymentDateFirst': '2024-05-18',
  'receivedDateFirst': '2024-05-19',
  'secondDeadline': '2024-11-20',
  'paymentDateSecond': '2024-11-18',
  'receivedDateSecond': '2024-11-19',
  'receiptNumFirst': 'A000136',
  'receiptDateFirst': '2024-05-22',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '75,000',
  'receiptNumSecond': 'A000137',
  'receiptDateSecond': '2024-11-21',
  'receiptItemsSecond': '服務費',
  'receiptAmountSecond': '75,000',
  'remittanceFile': '20240518RM1',
  'adminNote': '',
  'room': '挺生大樓 714'
}, {
  'id': '10',
  'company': '迅達科技股份有限公司',
  'uniformNum': '90123456',
  'contactPerson': '劉德華',
  'companyPhone': '02-96710000',
  'companyEmail': 'yz@gmail.com',
  'amount': '80,000',
  'firstDeadline': '2024-05-21',
  'paymentDateFirst': '2024-05-19',
  'receivedDateFirst': '2024-05-20',
  'secondDeadline': '2024-11-21',
  'paymentDateSecond': '',
  'receivedDateSecond': '',
  'receiptNumFirst': 'A000138',
  'receiptDateFirst': '2024-05-23',
  'receiptItemsFirst': '服務費',
  'receiptAmountFirst': '80,000',
  'receiptNumSecond': '',
  'receiptDateSecond': '',
  'receiptItemsSecond': '',
  'receiptAmountSecond': '',
  'remittanceFile': '20240519RM1',
  'adminNote': '',
  'room': '實驗大樓 809'
}];
$(function () {
  // 新進駐
  $('#confirmPaymentCultivationRoomList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_confirmPaymentCultivationRoom,
    "columns": [{
      // data: 'paymentDate', title: "廠商通知<br>付款日",
      data: 'paymentDateSecond',
      title: "廠商通知<br>付款日",
      render: function render(data, type, row) {
        var paymentDateFirst = row.paymentDateFirst;
        if (data === '' || data === null) {
          return paymentDateFirst;
        } else {
          return data;
        }
      },
      className: 'text-center text-nowrap'
    },
    // 0

    {
      data: 'company',
      title: "公司名稱"
    },
    // 1
    {
      data: 'amount',
      title: "費用"
    },
    // 2
    {
      data: 'firstDeadline',
      title: "一階段<br>到期日"
    },
    // 3
    {
      data: 'receivedDateFirst',
      title: "一階段<br>入帳日"
    },
    // 4
    {
      data: 'secondDeadline',
      title: "二階段<br>到期日"
    },
    // 5
    {
      data: 'room',
      title: "配置培育室",
      // 8
      render: function render(data) {
        if (data == null || data == '') {
          return '尚未配置';
        } else {
          return data;
        }
      },
      className: 'text-nowrap'
    }, {
      data: 'adminNote',
      title: "管理備註"
    },
    // 7
    {
      data: 'id',
      title: "檢閱",
      // 8
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
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
      targets: [0, 3, 4, 5, 8]
    }, {
      className: "text-nowrap",
      targets: [0, 2, 3, 4, 5]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(8)', row).css('min-width', '70px');
      // $('td:eq(3)', row).addClass('pe-5');
      // [5, 6].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      // });
      [0, 3, 4, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95em');
      });
      // [1, 4, 5].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
      // });
    }
  }));
  // 同步燈箱顯示資料
  $('#confirmPaymentCultivationModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var firmId = String(button.data('id'));
    // console.log('openRoom Id:', firmId);
    var firmData = dataset_confirmPaymentCultivationRoom.find(function (firm) {
      return firm.id === firmId;
    });
    if (firmData) {
      $('#companyName').text(firmData.company); //-
      $('#uniformNum').text(firmData.uniformNum); //-
      $('#contactPerson').text(firmData.contactPerson); //-

      $('#companyPhone').text(firmData.companyPhone); //-
      $('#companyEmail').text(firmData.companyEmail); //-
      $('#rate').text(firmData.amount);
      $('#firstDeadline').text(firmData.firstDeadline);
      $('#paymentDateFirst').text(firmData.paymentDateFirst);
      $('#receivedDateFirst').text(firmData.receivedDateFirst);
      $('#secondDeadline').text(firmData.secondDeadline);
      $('#paymentDateSecond').text(firmData.paymentDateSecond);
      $('#receivedDateSecond').text(firmData.receivedDateSecond);
      $('#receiptNumFirst').text(firmData.receiptNumFirst);
      $('#receiptDateFirst').text(firmData.receiptDateFirst);
      $('#receiptItemsFirst').text(firmData.receiptItemsFirst);
      $('#receiptAmountFirst').text(firmData.receiptAmountFirst);
      $('#receiptNumSecond').text(firmData.receiptNumSecond);
      $('#receiptDateSecond').text(firmData.receiptDateSecond);
      $('#receiptItemsSecond').text(firmData.receiptItemsSecond);
      $('#receiptAmountSecond').text(firmData.receiptAmountSecond);
      $('#adminNote').text(firmData.adminNote);
      $('#room').text(firmData.room);
    } else {
      console.error('firmData data not found for id:', firmId);
    }
    ;
    theseAddClass(["changeInput_items"], ['companyName', 'contactPerson', 'receiptNumFirst', 'receiptItemsFirst', 'receiptNumSecond', 'receiptItemsSecond', 'adminNote']);
    theseAddClass(["changeSelectRoom_items"], ['room']);
    theseAddClass(["changeNumber_items"], ['uniformNum']);
    theseAddClass(["changeDate_items"], ['firstDeadline', 'paymentDateFirst', 'receivedDateFirst', 'secondDeadline', 'paymentDateSecond', 'receivedDateSecond', 'receiptDateFirst', 'receiptDateSecond']);
    theseAddClass(["changeMoney_items"], ['rate', 'receiptAmountFirst', 'receiptAmountSecond']);
    theseAddClass(["changePhone_items"], ['companyPhone']);
    theseAddClass(["changeEmail_items"], ['companyEmail']);
    CustomInputHandlers.init();
    // $('#updateBtn').show();

    $('#updateBtn').on('click', function () {
      console.log('firmId 2 :', firmId); // 確認 psId 是否正確獲取
      // 清除上次的資料
      updatedData = {};
      // 獲取所有欄位的目前值
      updatedData.id = firmId;
      updatedData.companyName = $('#companyName').text();
      updatedData.uniformNum = $('#uniformNum').text();
      updatedData.contactPerson = $('#contactPerson').text();
      updatedData.companyPhone = $('#companyPhone').text();
      updatedData.companyEmail = $('#companyEmail').text();
      updatedData.amount = $('#rate').text();
      updatedData.firstDeadline = $('#firstDeadline').text();
      updatedData.paymentDateFirst = $('#paymentDateFirst').text();
      updatedData.receivedDateFirst = $('#receivedDateFirst').text();
      updatedData.secondDeadline = $('#secondDeadline').text();
      updatedData.paymentDateSecond = $('#paymentDateSecond').text();
      updatedData.receivedDateSecond = $('#receivedDateSecond').text();
      updatedData.receiptNumFirst = $('#receiptNumFirst').text();
      updatedData.receiptDateFirst = $('#receiptDateFirst').text();
      updatedData.receiptItemsFirst = $('#receiptItemsFirst').text();
      updatedData.receiptAmountFirst = $('#receiptAmountFirst').text();
      updatedData.receiptNumSecond = $('#receiptNumSecond').text();
      updatedData.receiptDateSecond = $('#receiptDateSecond').text();
      updatedData.receiptItemsSecond = $('#receiptItemsSecond').text();
      updatedData.receiptAmountSecond = $('#receiptAmountSecond').text();
      updatedData.adminNote = $('#adminNote').text();
      updatedData.room = $('#room').text();
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

  // 車位與識別證 
  $('#confirmPaymentCarOrCardList').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_confirmPaymentCarOrCard,
    "columns": [{
      data: 'deadLine',
      title: "到期日"
    },
    // 0
    {
      data: 'company',
      title: "公司名稱"
    },
    // 1
    {
      data: 'amount',
      title: "費用"
    },
    // 2
    {
      data: 'type',
      title: "類型"
    },
    // 3
    {
      data: 'paymentDate',
      title: "廠商通知<br>付款日",
      // 4
      render: function render(data, type, row) {
        var paymentDateFirst = row.paymentDateFirst;
        if (data === '' || data === null) {
          return paymentDateFirst;
        } else {
          return data;
        }
      }
    }, {
      data: 'receivedDate',
      title: "入帳日"
    },
    // 5
    {
      data: 'placeOrPrint',
      title: "配置",
      // 6
      render: function render(data) {
        if (data == null || data == '') {
          return '尚未配置';
        } else {
          return data;
        }
      }
    }, {
      data: 'adminNote',
      title: "管理備註"
    },
    // 7
    {
      data: 'id',
      title: "檢閱",
      // 8
      render: function render(data) {
        return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-paperclip"></i></button>';
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
      targets: [0, 4, 5, 6]
    }, {
      className: "text-nowrap",
      targets: [0, 2, 3, 4, 5, 6]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(8)', row).css('min-width', '70px');
      // $('td:eq(3)', row).addClass('pe-5');
      // [5, 6].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      // });
      [0, 4, 5].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('min-width', '100px').css('font-size', '.95em');
      });
      // [1, 4, 5].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
      // });
    }
  }));
  $('#confirmPaymentCultivationRoomList2').DataTable(_objectSpread(_objectSpread({}, commonSettingsTable), {}, {
    "data": dataset_confirmPaymentCultivationRoom2,
    "columns": [{
      data: 'room',
      title: '培育室'
    },
    // 0
    {
      data: 'amount',
      title: "費用"
    },
    // 1
    {
      data: 'company',
      title: "配置公司",
      // 2
      render: function render(data) {
        if (data === null || data == '') {
          return '尚未培育';
        } else {
          return data;
        }
      }
    }, {
      data: 'firstDeadline',
      title: "第一階段",
      // 3
      render: function render(data, type, row) {
        var receivedDateFirst = row.receivedDateFirst;
        if (receivedDateFirst == '' || receivedDateFirst == null) {
          if (data != '' && data != null) {
            return '到期： ' + data;
          } else {
            return '-';
          }
        } else {
          return '入帳： ' + receivedDateFirst;
        }
      }
    }, {
      data: 'secondDeadline',
      title: "第二階段",
      // 4
      render: function render(data, type, row) {
        var receivedDateSecond = row.receivedDateSecond;
        if (receivedDateSecond === '' || receivedDateSecond === null) {
          if (data != '' && data != null) {
            return '到期： ' + data;
          } else {
            return '-';
          }
        } else {
          return '入帳： ' + receivedDateSecond;
        }
      }
    }, {
      data: 'paymentDateSecond',
      title: "廠商通知<br>付款日",
      // 5
      render: function render(data, type, row) {
        var paymentDateFirst = row.paymentDateFirst;
        if (data == '' || data == null) {
          if (paymentDateFirst != '' && paymentDateFirst != null) {
            return paymentDateFirst;
          } else {
            return '-';
          }
        } else {
          return data;
        }
      }
    }, {
      data: 'adminNote',
      title: "管理備註"
    },
    // 6
    {
      data: 'id',
      title: "操作",
      // 7
      render: function render(data, type, row) {
        var company = row.company;
        if (company == '' || company == null) {
          return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm wide_icon" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-regular fa-keyboard"></i>';
        } else {
          return '<button type="button" class="btn btn-outline-primary rounded-circle btn-sm" data-bs-toggle="modal" data-bs-target="#confirmPaymentCultivationModel" data-id="' + data + '"><i class="fa-solid fa-wrench"></i>';
        }
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
      targets: [7]
    }, {
      className: "text-center",
      targets: [3, 4, 5]
    }, {
      className: "text-nowrap",
      targets: [0, 1, 3, 4, 5]
    }],
    createdRow: function createdRow(row, data, dataIndex) {
      $('td:eq(7)', row).css('min-width', '70px');
      $('td:eq(5)', row).css('min-width', '100px').css('font-size', '.95em');
      // [5, 6].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('max-width', '70px');
      // });
      [3, 4].forEach(function (colIdx) {
        $('td:eq(' + colIdx + ')', row).css('max-width', '146px').css('font-size', '.95em');
      });
      // [1, 4, 5].forEach(function (colIdx) {
      //     $('td:eq(' + colIdx + ')', row).css('font-size', '.95em');
      // });
    }
  }));
});
$(function () {
  var table1 = $('#confirmPaymentCultivationRoomList').DataTable();
  var table2 = $('#confirmPaymentCarOrCardList').DataTable();
  var table4 = $('#confirmPaymentCultivationRoomList2').DataTable();
  // 監聽Bootstrap的切換事件
  $('input[type="radio"][name="btnradio"]').on('change', function () {
    setTimeout(function () {
      table1.columns.adjust().responsive.recalc();
      table2.columns.adjust().responsive.recalc();
      table4.columns.adjust().responsive.recalc();
    }, 200);
  });
});