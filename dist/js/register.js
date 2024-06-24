"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // ===== 成立日期
  var creationDate = document.getElementById("creationDate");
  var creationDateYet = document.getElementById("creationDateYet");
  var today = new Date().toISOString().split('T')[0];
  creationDate.setAttribute('max', today);
  var uniformNum = document.getElementById('uniformNum');
  creationDateYet.addEventListener("change", function () {
    if (creationDateYet.checked) {
      creationDate.value = "";
      creationDate.disabled = true;
      uniformNum.value = "";
      uniformNum.placeholder = "後補";
      uniformNum.disabled = true;
      creationDateYet.setAttribute('asp-for', 'CreationDate');
      creationDate.removeAttribute('asp-for');
    } else {
      creationDate.disabled = false;
      uniformNum.placeholder = "";
      uniformNum.disabled = false;
      creationDate.setAttribute('asp-for', 'CreationDate');
      creationDateYet.removeAttribute('asp-for');
    }
  });

  // ===== 通訊地址同上
  var creationAdd = document.getElementById("companyAdd");
  var creationLocalAdd = document.getElementById("locationOfCompany");
  var sameAdd = document.getElementById('sameAdd');
  sameAdd.addEventListener("change", function () {
    if (sameAdd.checked) {
      creationLocalAdd.value = creationAdd.value;
    }
  });
  creationLocalAdd.addEventListener("change", function () {
    sameAdd.checked = false;
  });
});

// ================檢查Email
function checkTheEmail() {
  var email = $("#email").val();
  $.ajax({
    url: '@Url.Action("CheckEmail", "Account")',
    type: "POST",
    data: {
      email: email
    },
    success: function success(result) {
      var checkEmail = $(".checkEmail");
      var nextButton = $(".partTwoBtn");
      switch (result) {
        case "NoText":
          checkEmail.text("檢查").removeClass("invalid").removeClass("valid");
          nextButton.prop("disabled", true);
          break;
        case false:
          //沒有相同
          checkEmail.text("檢查").removeClass("invalid").addClass("valid");
          nextButton.prop("disabled", false);
          checkRequiredGroup("partTwo", "partTwoBtn");
          break;
        case true:
          checkEmail.text("此Email已註冊過。").removeClass("valid").addClass("invalid");
          nextButton.prop("disabled", true);
          break;
        default:
          checkEmail.text("Email格式不正確。").removeClass("valid").addClass("invalid");
          nextButton.prop("disabled", true);
          break;
      }
    },
    error: function error(_error) {
      console.log("發生錯誤！", _error.responseText);
    }
  });
}
// ================必填通知
function checkRequired() {
  var inputItem = $(this); // 當前失去焦點的 input 元素
  var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
  var label = $("label[for='" + inputId + "']").text(); // 獲取與 input 元素相關聯的 label 的文本內容
  var warningBox = $("#errorBox");
  if (inputItem.val().trim() === '') {
    warningBox.text(label + " 是必填欄位，請填上歐！").addClass("show");
  } else {
    warningBox.text("").removeClass("show");
  }
}

// ================必傳通知
function checkUpload() {
  var inputItem = $(this); // 當前失去焦點的 input 元素
  var inputId = inputItem.attr('id'); // 獲取 input 元素的 id
  var fileName = $("." + inputId).text(); // 獲取與 input 元素相關聯的 div 的文本內容
  var warningBox = $("#errorBox");
  if (inputItem.val().trim() === '') {
    warningBox.text(fileName + " 是必需上傳的資料，請點擊檔案唷！").addClass("show");
  } else {
    warningBox.text("").removeClass("show");
  }
}
// ================頁檢查
function checkRequiredGroup(groupClass, nextBtn) {
  var allFilled = true;
  var submitButton = $(".registerSubmit");
  var nextButton = $("." + nextBtn);
  $("." + groupClass).each(function () {
    if ($(this).val().trim() === '') {
      allFilled = false;
      return false;
    }
  });
  if (allFilled) {
    submitButton.prop("disabled", false);
    nextButton.prop("disabled", false);
  } else {
    submitButton.prop("disabled", true);
    nextButton.prop("disabled", true);
  }
}
// ================第一頁檢查
function CreateYetRequired() {
  var allFilled = true;
  var submitButton = $(".registerSubmit");
  var nextButton = $(".partOneBtn");
  if ($("#creationDateYet").is(":checked")) {
    $(".partOne:not(#creationDate, #uniformNum)").each(function () {
      if ($(this).val().trim() === '') {
        allFilled = false;
        return false;
      }
    });
  } else {
    $(".partOne").each(function () {
      if ($(this).val().trim() === '') {
        allFilled = false;
        return false;
      }
    });
  }
  if (allFilled) {
    submitButton.prop("disabled", false);
    nextButton.prop("disabled", false);
  } else {
    submitButton.prop("disabled", true);
    nextButton.prop("disabled", true);
  }
}
// ================最後頁檢查
function checkFilesRequiredGroup(groupClass) {
  var allFilled = true;
  var submitButton = $(".registerSubmit");
  $("." + groupClass).each(function () {
    if ($(this).text().trim() === '') {
      allFilled = false;
      return false;
    }
  });
  if (allFilled) {
    submitButton.prop("disabled", false);
  } else {
    submitButton.prop("disabled", true);
  }
}
$(document).ready(function () {
  $(".requiredItem").blur(checkRequired);
  $(".requiredFile").blur(checkUpload);
  $(".partTwo").blur(function () {
    checkRequiredGroup("partTwo", "partTwoBtn");
  });
  $(".partThree").blur(function () {
    checkRequiredGroup("partThree", "partThreeBtn");
  });
  if ($(".partThree").val() !== "") {
    checkRequiredGroup("partThree", "partThreeBtn");
  }
  $("#creationDateYet").change(function () {
    CreateYetRequired();
  });
  $(".partOne").blur(function () {
    CreateYetRequired();
  });
  $(".requiredFile").blur(function () {
    checkFilesRequiredGroup("fileInfo");
  });
});

// TOP 按鈕 -當畫面滾動時觸發的事件
var btn_up_el = document.getElementById("btn_up");
btn_up_el.addEventListener("click", function () {
  console.log('aaa');
  var html_el = document.getElementsByTagName("html")[0];
  html_el.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
window.addEventListener("scroll", function () {
  var btnUp = document.querySelector(".top_button");
  if (window.scrollY > 0) {
    // 當畫面不在網頁最頂端時，加上 scroll-animation 類別來套用透明度變化的動畫
    btnUp.classList.add("scroll-animation");
    btnUp.classList.remove("d-none");
  } else {
    // 畫面在網頁最頂端時，移除 scroll-animation 類別
    btnUp.classList.remove("scroll-animation");
    btnUp.classList.add("d-none");
  }
});