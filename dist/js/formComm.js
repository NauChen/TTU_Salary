function validSomeRequiredForm(t,e){$("#"+t).on("click",function(){var t=!0;$("#"+e+" .thisRequired").each(function(){if($(this).is("select")){if(null===$(this).val())return t=!1}else if(""===$(this).val().trim())return t=!1}),t?$("#"+e).submit():swalToastWarning("請將必填欄位填上。","top")})}function validAllRequiredForm(t,e){$("#"+t).on("click",function(){var t=!0;$("#"+e+" .thisRequired").each(function(){if($(this).is("select")){if(null===$(this).val())return t=!1}else if(""===$(this).val().trim())return t=!1}),t?(console.log("所有欄位都已填寫，可以提交表單。"),$("#"+e).submit()):swalToastWarning("請將所有欄位填上。","top")})}function validAllRequiredFormPreview(t,e,n){var a=!0;return $("#"+e+" .thisRequired").each(function(){if($(this).is("select")){if(null===$(this).val())return a=!1}else if($(this).is('input[type="file"]')){if(0===$(this).get(0).files.length)return a=!1}else if(""===$(this).val().trim())return a=!1}),a?$("#"+t).attr("data-bs-toggle","modal").attr("data-bs-target","#"+n):(swalToastWarning("請將所有欄位填上。","top"),$("#"+t).removeAttr("data-bs-toggle").removeAttr("data-bs-target")),a}function checkDangerElements(t,e){var n=!0;return $('[id^="danger_"]').each(function(){if(""!==$(this).text().trim())return n=!1}),n||$("#"+t).removeAttr("data-bs-toggle").removeAttr("data-bs-target"),n}function convertNewlinesToBreaks(t){return t.replace(/\n/g,"<br>")}function convertBreaksToNewlines(t){return t.replace(/<br\s*[\/]?>/gi,"\n").trim()}function verifyPhone(t){$(t).val($(t).val().replace(/[^\d-]/g,""))}function verifyEmail(t){$(t).val($(t).val().replace(/[^a-zA-Z0-9._@-]/g,""))}function restrictToNum(t){var e=$(t).val().replace(/\D/g,"");e.startsWith("0")&&(e=e.replace(/^0+/,"")),$(t).val(e)}function formatNumber(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function unformatNumber(t){return t.replace(/,/g,"")}function handleSalaryChoose(t){switch(t){case"時薪":case"日薪":theseAddClass(["choose"],["dollarsItem"]),theseRemoveClass(["choose"],["dollarsToDollarsItem","moreThenDollarsItem","negotiableItem","dollarsPerCaseItem"]),document.getElementById("salaryTypeRadio1").checked=!0,theseRemoveClass(["thisRequired"],["dollarsToDollars_1Input","dollarsToDollars_2Input","moreThenDollarsInput","negotiableInput","dollarsPerCaseInput"]),theseAddClass(["thisRequired"],["dollarsInput"]);break;case"月薪":theseAddClass(["choose"],["dollarsItem","dollarsToDollarsItem","moreThenDollarsItem","negotiableItem"]),theseRemoveClass(["choose"],["dollarsPerCaseItem"]),document.getElementById("salaryTypeRadio1").checked=!0,theseRemoveClass(["thisRequired"],["dollarsToDollars_1Input","dollarsToDollars_2Input","moreThenDollarsInput","negotiableInput","dollarsPerCaseInput"]),theseAddClass(["thisRequired"],["dollarsInput"]);break;case"按件計酬":theseAddClass(["choose"],["dollarsPerCaseItem"]),theseRemoveClass(["choose"],["dollarsItem","dollarsToDollarsItem","moreThenDollarsItem","negotiableItem"]),document.getElementById("salaryTypeRadio5").checked=!0;break;case"請選擇":theseRemoveClass(["choose"],["dollarsItem","dollarsToDollarsItem","moreThenDollarsItem","negotiableItem","dollarsPerCaseItem"]),document.getElementById("salaryTypeRadio1","salaryTypeRadio2","salaryTypeRadio3","salaryTypeRadio4","salaryTypeRadio5").checked=!1,theseRemoveClass(["thisRequired"],["dollarsInput","dollarsToDollars_1Input","dollarsToDollars_2Input","moreThenDollarsInput","negotiableInput"]),theseAddClass(["thisRequired"],["dollarsPerCaseInput"])}}function combineInputs(){var t;document.getElementById("optionsRadios2").checked&&(t=document.querySelector(".combineInputs:nth-child(1)").value+"~"+document.querySelector(".combineInputs:nth-child(2)").value,document.querySelector('[name="JobSalaryData"]').value=t)}function validatePhone(t){return/^\d{2,4}-\d{6,8}$/.test(t)}function checkThisPhone(){var t=$(this),e=t.attr("id"),e=$("#danger_"+e);validatePhone(t.val())?e.text(""):e.text("電話/手機 的格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX")}function restrictEndDate(t,e){$("#"+t).on("change",function(){var t=$(this).val();$("#"+e).attr("min",t)})}function splitJobTime(t){t=t.split(" ~ ");if(2===t.length)return{jobTime1:t[0].trim(),jobTime2:t[1].trim()};throw new Error("Invalid jobTime format. It should be in the format 'HH:mm ~ HH:mm'.")}function convertEmail(t){var e=t.indexOf("@");return-1!==e?t.substring(0,e).toLowerCase()+t.substring(e):t}function validateEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function isValidLineID(t){return/^[a-zA-Z0-9.@_-]+$/.test(t)}function validateRequiredFields(){var e=!0;return $(".thisRequired").each(function(){var t=$(this).attr("type");return!("text"!==t&&"email"!==t&&"file"!==t&&"date"!==t&&"time"!==t||$(this).val())||$(this).is("textarea")&&!$(this).val()||$(this).is("select")&&!$(this).val()?e=!1:void 0}),e}function validatePhoneNumbers(){var e=/^\d{2,4}-\d{6,8}$/,n=!0;return $(".thisPhoneNum").each(function(){var t;if(!e.test($(this).val()))return t=$(this).attr("id"),$("#danger_"+t).text("電話/手機的格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX"),n=!1}),n}function validateEmails(){var t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,e=!0;return $(".thisEmail").each(function(){if(!t.test($(this).val()))return e=!1}),e}var CustomInputHandlers={init:function(){this.bindChangeInputItems(),this.bindChangeRadioItems(),this.bindChangeDateItems(),this.bindChangeMoneyItems(),this.bindChangeTextareaItems(),this.bindChangeNumberItems(),this.bindChangePhoneItems(),this.bindChangeEmailItems(),this.bindChangeLineIDItems(),this.bindChangeSelectItems()},bindChangeInputItems:function(){$(".changeInput_items").on("click",function(){var e,n=$(this),t=n.text().trim();0===n.find("input").length&&(e=$('<input type="text" class="form-control" />').val(t),n.html(e),e.focus().select(),e.on("blur",function(){var t=e.val().trim();n.text(t)}),e.on("keypress",function(t){13===t.which&&(t=e.val().trim(),n.text(t))}))})},bindChangeRadioItems:function(){$(".changeRadio_items").on("click",function(){var e=$(this),t=e.text().trim();0===e.find('input[type="radio"]').length&&(e.html(`
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="car" value="汽車" ${"汽車"===t?"checked":""}>
                        <label class="form-check-label" for="car">汽車</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="moto" value="機車" ${"機車"===t?"checked":""}>
                        <label class="form-check-label" for="moto">機車</label>
                    </div>`),e.find('input[type="radio"]').on("change",function(){var t=$(this).val().trim();e.html(t)}),$(document).on("click",function(t){e.is(t.target)||0!==e.has(t.target).length||((t=e.find('input[type="radio"]:checked')).length&&(t=t.val().trim(),e.html(t)),$(document).off("click"))}))})},bindChangeDateItems:function(){$(".changeDate_items").on("click",function(){var e,n=$(this),a=n.text().trim();0===n.find('input[type="date"]').length&&(e=$('<input type="date" class="form-control" />').val(a),n.html(e),e.focus(),e.on("blur",function(){var t=e.val().trim();t?n.text(t):n.text(a)}),e.on("keypress",function(t){13===t.which&&((t=e.val().trim())?n.text(t):n.text(a),e.blur())}))})},bindChangeMoneyItems:function(){$(".changeMoney_items").on("click",function(){var e,n=$(this),a=unformatNumber(n.text().trim());0===n.find("input").length&&(e=$('<input type="text" class="form-control" />').val(a),n.html(e),e.focus().select(),e.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),e.on("blur",function(){var t=formatNumber(e.val().trim());t?n.text(t):n.text(formatNumber(a))}),e.on("keypress",function(t){13===t.which&&((t=formatNumber(e.val().trim()))?n.text(t):n.text(formatNumber(a)),e.blur())}))})},bindChangeTextareaItems:function(){$(".changeTextarea_lg_items").on("click",function(){var e,n=$(this),t=n.html().replace(/<br\s*[\/]?>/gi,"\n").trim();0===n.find("textarea").length&&(e=$('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(t),n.html(e),e.focus().select(),e.on("blur",function(){var t=e.val().trim().replace(/\n/g,"<br>");n.html(t)}),e.on("keydown",function(t){"Enter"===t.key&&t.ctrlKey&&(t=e.val().trim().replace(/\n/g,"<br>"),n.html(t),e.blur())}))})},bindChangeNumberItems:function(){$(".changeNumber_items").on("click",function(){var e,n=$(this),t=n.text().trim();0===n.find("input").length&&(e=$('<input type="text" class="form-control" />').val(t),n.html(e),e.focus().select(),e.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),e.on("blur",function(){var t=e.val().trim();n.text(t)}))})},bindChangePhoneItems:function(){$(".changePhone_items").on("click",function(){var e,n=$(this),a=n.text().trim();0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="verifyPhone(this)">').val(a),n.html(e),e.focus().select(),e.on("blur",function(){var t=e.val().trim();validatePhone(t)?n.text(t):(n.text(a),swalToastWarning("電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX","top"))}))})},bindChangeEmailItems:function(){$(".changeEmail_items").on("click",function(){var e,n=$(this),a=n.text().trim();0===n.find("input").length&&(e=$('<input type="email" class="form-control" onkeyup="verifyEmail(this)">').val(a),n.html(e),e.focus().select(),e.on("blur",function(){var t=e.val().trim();validateEmail(t=CconvertEmail(t))?n.text(t):(n.text(a),swalToastWarning("請輸入有效的電子郵件地址！","top"))}))})},bindChangeLineIDItems:function(){$(".changeLineID_items").on("click",function(){var e,n=$(this),a=n.text().trim();0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="verifyEmail(this)">').val(a),n.html(e),e.focus().select(),e.on("blur",function(){var t=e.val().trim();isValidLineID(t)?n.text(t):(n.text(a),swalToastWarning("請輸入有效的LINE ID！","top"))}))})},bindChangeSelectItems:function(){$(".changeSelect_items").on("click",function(){var e=$(this),n=e.text().trim();if(0===e.find("select").length){var t,a=$(`
                    <select class="form-control form-select">
                    </select>`),i={};for(t in selectOption.forEach(function(t){i[t.optigroup]||(i[t.optigroup]=[]),i[t.optigroup].push(t.option)}),i){var l=$("<optgroup>").attr("label",t);i[t].forEach(function(t){var e=$("<option>").attr("value",t).text(t);t===n&&e.attr("selected","selected"),l.append(e)}),a.append(l)}e.html(a),a.focus(),a.on("change",function(){var t=a.val();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=a.val(),e.html(t||n),$(document).off("click.select"))})}})}};