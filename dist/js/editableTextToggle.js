var CustomInputHandlers={init:function(){this.bindChangeInputItems(),this.bindChangeRadioCarItems(),this.bindChangeRadioPaymentMethodItems(),this.bindChangeRadioApplyItems(),this.bindChangeDateItems(),this.bindChangeMoneyItems(),this.bindChangeTextareaLgItems(),this.bindChangeNumber5Items(),this.bindChangeUniformNumItems(),this.bindChangePhoneItems(),this.bindChangeEmailItems(),this.bindChangeLineIDItems(),this.bindChangeSelectItems(),this.bindChangeSelectRoomItems(),this.bindChangeSelectPaymentPurposeItems(),this.bindChangeSelectStatusItems(),this.bindChangeSelectPurchaseItems(),this.bindChangeDecimalItems(),this.bindChangeInputUpperNumberHyphenItems()},bindChangeInputItems:function(){$(".changeInput_items").on("click",function(){var e,n=$(this),i=n.text().trim();function o(){var t=e.val().trim();""===t&&n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(t)}0===n.find("input").length&&(e=$('<input type="text" class="form-control" />').val(i),n.html(e),e.focus().select(),e.on("blur",o),e.on("keypress",function(t){13===t.which&&o()}))})},bindChangeInputUpperNumberHyphenItems:function(){$(".changeInputUpperNumberHyphen_items").on("click",function(){var e,n=$(this),i=n.text().trim();function o(){var t=e.val().trim();""===t&&n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(t)}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToUpperCaseNumberHyphen(this)"/>').val(i),n.html(e),e.focus().select(),e.on("blur",o),e.on("keypress",function(t){13===t.which&&o()}))})},bindChangeRadioCarItems:function(){$(".changeRadio_items").on("click",function(){var e=$(this),t=e.text().trim();0===e.find('input[type="radio"]').length&&(e.html(`
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="car" value="汽車" ${"汽車"===t?"checked":""}>
                        <label class="form-check-label" for="car">汽車</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="moto" value="機車" ${"機車"===t?"checked":""}>
                        <label class="form-check-label" for="moto">機車</label>
                    </div>`),e.find('input[type="radio"]').on("change",function(){var t=$(this).val().trim();e.html(t)}),$(document).on("click",function(t){e.is(t.target)||0!==e.has(t.target).length||((t=e.find('input[type="radio"]:checked')).length&&(t=t.val().trim(),e.html(t)),$(document).off("click"))}))})},bindChangeRadioPaymentMethodItems:function(){$(".changeRadioPayMethod_items").on("click",function(){var e=$(this),t=e.text().trim();0===e.find('input[type="radio"]').length&&(e.html(`
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="cash" value="現金" ${"現金"===t?"checked":""}>
                        <label class="form-check-label" for="cash">現金</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="remittance" value="匯款" ${"匯款"===t?"checked":""}>
                        <label class="form-check-label" for="remittance">匯款</label>
                    </div>`),e.find('input[type="radio"]').on("change",function(){var t=$(this).val().trim();e.html(t)}),$(document).on("click",function(t){e.is(t.target)||0!==e.has(t.target).length||((t=e.find('input[type="radio"]:checked')).length&&(t=t.val().trim(),e.html(t)),$(document).off("click"))}))})},bindChangeRadioApplyItems:function(){$(".changeRadioApply_items").on("click",function(){var e=$(this),t=e.text().trim();0===e.find('input[type="radio"]').length&&(e.html(`
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="applyType" id="radioYes" value="申請" ${"申請"===t?"checked":""}>
                        <label class="form-check-label" for="radioYes">申請</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="applyType" id="radioNo" value="不申請" ${"不申請"===t?"checked":""}>
                        <label class="form-check-label" for="radioNo">不申請</label>
                    </div>`),e.find('input[type="radio"]').on("change",function(){var t=$(this).val().trim();e.html(t)}),$(document).on("click",function(t){e.is(t.target)||0!==e.has(t.target).length||((t=e.find('input[type="radio"]:checked')).length&&(t=t.val().trim(),e.html(t)),$(document).off("click"))}))})},bindChangeDateItems:function(){$(".changeDate_items").on("click",function(){var e,n=$(this),i=n.text().trim();function o(){var t=e.val().trim();!t&&n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可不選日期喔！","top")):n.text(t)}0===n.find('input[type="date"]').length&&(e=$('<input type="date" class="form-control" />').val(i),n.html(e),e.focus(),e.on("blur",o),e.on("keypress",function(t){13===t.which&&o()}))})},bindChangeMoneyItems:function(){$(".changeMoney_items").on("click",function(){var e,n=$(this),i=unformatNumber(n.text().trim());function o(){var t=formatNumber(e.val().trim());!t&&n.hasClass("thisTextRequired")?(n.text(formatNumber(i)),swalToastWarning("此欄位不可留白喔！","top")):n.text(t)}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToNum(this)">').val(i),n.html(e),e.focus().select(),e.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),e.on("blur",o),e.on("keypress",function(t){13===t.which&&o()}))})},bindChangeTextareaLgItems:function(){$(".changeTextarea_lg_items").on("click",function(){var e,n=$(this),i=n.html().replace(/<br\s*[\/]?>/gi,"\n").trim();function t(t){("blur"===t.type||"keydown"===t.type&&"Enter"===t.key&&t.ctrlKey)&&(!(t=e.val().trim().replace(/\n/g,"<br>"))&&n.hasClass("thisTextRequired")?(n.html(i),swalToastWarning("此欄位不可留白喔！","top")):n.html(t))}0===n.find("textarea").length&&(e=$('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(i),n.html(e),e.focus().select(),e.on("blur",t),e.on("keydown",t))})},bindChangeNumber5Items:function(){$(".changeNumber5_items").on("click",function(){var e,n=$(this),i=n.text().trim();function t(t){("blur"===t.type||"keypress"===t.type&&13===t.which)&&(!(t=e.val().trim())&&n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(t))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictTo5Num(this)">').val(i),n.html(e),e.focus().select(),e.on("input",function(){this.value=this.value.replace(/[^0-9]/g,"")}),e.on("blur",t),e.on("keypress",t))})},bindChangeUniformNumItems:function(){$(".changeUniformNum_items").on("click",function(){var e,n=$(this),i=n.text().trim();function t(t){("blur"===t.type||"keypress"===t.type&&13===t.which)&&(!(t=e.val().trim())&&n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(t))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToUniformNum(this)">').val(i),n.html(e),e.focus().select(),e.on("blur",t),e.on("keypress",t))})},bindChangePhoneItems:function(){$(".changePhone_items").on("click",function(){var e,n=$(this),i=n.text().trim();function t(t){("blur"===t.type||"keypress"===t.type&&13===t.which)&&((t=e.val().trim())?validatePhone(t)?n.text(t):(n.text(i),swalToastWarning("電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX","top")):(n.text(i),n.hasClass("thisTextRequired")&&swalToastWarning("此欄位不可留白喔！","top")))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToNumberHyphen(this)">').val(i),n.html(e),e.focus().select(),e.on("blur",t),e.on("keypress",t))})},bindChangeEmailItems:function(){$(".changeEmail_items").on("click",function(){var e,n=$(this),i=n.text().trim();function t(t){("blur"===t.type||"keypress"===t.type&&13===t.which)&&((t=e.val().trim())?(t=convertEmail(t),validateEmail(t)?n.text(t):(n.text(i),swalToastWarning("請輸入有效的電子郵件地址！","top"))):n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(""))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToValidChars(this)">').val(i),n.html(e),e.focus().select(),e.on("blur",t),e.on("keypress",t))})},bindChangeLineIDItems:function(){$(".changeLineID_items").on("click",function(){var e,n=$(this),i=n.text().trim();function t(t){("blur"===t.type||"keypress"===t.type&&13===t.which)&&((t=e.val().trim())?validLineID(t)?n.text(t):(n.text(i),swalToastWarning("請輸入有效的LINE ID！","top")):n.hasClass("thisTextRequired")?(n.text(i),swalToastWarning("此欄位不可留白喔！","top")):n.text(""))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToValidChars(this)">').val(i),n.html(e),e.focus().select(),e.on("blur",t),e.on("keypress",t))})},bindChangeSelectItems:function(){$(".changeSelect_items").on("click",function(){var e=$(this),n=e.text().trim();if(0===e.find("select").length){var t,i=$(`
                    <select class="form-control form-select">
                    </select>`),o={};for(t in selectOption.forEach(function(t){o[t.optigroup]||(o[t.optigroup]=[]),o[t.optigroup].push(t.option)}),o){var a=$("<optgroup>").attr("label",t);o[t].forEach(function(t){var e=$("<option>").attr("value",t).text(t);t===n&&e.attr("selected","selected"),a.append(e)}),i.append(a)}e.html(i),i.focus(),i.on("change",function(){var t=i.val();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=i.val(),e.html(t||n),$(document).off("click.select"))})}})},bindChangeSelectRoomItems:function(){$(".changeSelectRoom_items").on("click",function(){var e=$(this),n=e.text().trim();if(0===e.find("select").length){var i,o=$(`
                    <select class="form-control form-select">
                    </select>`),a={};for(i in selectOptionRoom.forEach(function(t){a[t.optigroup]||(a[t.optigroup]=[]),a[t.optigroup].push(t.option)}),a){var c=$("<optgroup>").attr("label",i);a[i].forEach(function(t){var e=i+" "+t,t=$("<option>").attr("value",e).text(t);e===n&&t.attr("selected","selected"),c.append(t)}),o.append(c)}e.html(o),o.focus(),o.on("change",function(){var t=o.val();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=o.val(),e.html(t||n),$(document).off("click.select"))})}})},bindChangeSelectPaymentPurposeItems:function(){$(".changeSelectPaymentPurpose_items").on("click",function(){var e=$(this),n=e.text().trim();if(0===e.find("select").length){var i=$(`
                    <select class="form-control form-select">
                    </select>`);if(selectOptionPaymentPurpose[0].hasOwnProperty("optigroup")){var o,a={};for(o in selectOptionPaymentPurpose.forEach(function(t){a[t.optigroup]||(a[t.optigroup]=[]),a[t.optigroup].push(t.option)}),a){var c=$("<optgroup>").attr("label",o);a[o].forEach(function(t){var e=o+" "+t,t=$("<option>").attr("value",e).text(t);e===n&&t.attr("selected","selected"),c.append(t)}),i.append(c)}}else selectOptionPaymentPurpose.forEach(function(t){var e=$("<option>").attr("value",t.option).text(t.option);n===t.option&&e.attr("selected","selected"),i.append(e)});e.html(i),i.focus(),i.on("change",function(){var t=i.find("option:selected").text();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=i.find("option:selected").text(),e.html(t||n),$(document).off("click.select"))})}})},bindChangeSelectStatusItems:function(){$(".changeSelectStatus_items").on("click",function(){var n,e=$(this),i=e.text().trim();0===e.find("select").length&&(n=$(`
                    <select class="form-control form-select">
                    </select>`),selectOptionStatus.forEach(function(t){var e=$("<option>").attr("value",t.option).text(t.option);i===t.option&&e.attr("selected","selected"),n.append(e)}),e.html(n),n.focus(),n.on("change",function(){var t=n.find("option:selected").text();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=n.find("option:selected").text(),e.html(t||i),$(document).off("click.select"))}))})},bindChangeSelectPurchaseItems:function(){$(".changeSelectPurchase_items").on("click",function(){var e=$(this),n=e.text().trim();if(0===e.find("select").length){var i=$(`
                        <select class="form-control form-select">
                        </select>`);if(selectOptionPurchase[0].hasOwnProperty("optigroup")){var o,a={};for(o in selectOptionPurchase.forEach(function(t){a[t.optigroup]||(a[t.optigroup]=[]),a[t.optigroup].push(t.option)}),a){var c=$("<optgroup>").attr("label",o);a[o].forEach(function(t){var e=o+" "+t,t=$("<option>").attr("value",e).text(t);e===n&&t.attr("selected","selected"),c.append(t)}),i.append(c)}}else selectOptionPurchase.forEach(function(t){var e=$("<option>").attr("value",t.option).text(t.option);n===t.option&&e.attr("selected","selected"),i.append(e)});e.html(i),i.focus(),i.on("change",function(){var t=i.find("option:selected").text();e.html(t)}),$(document).on("click.select",function(t){e.is(t.target)||0!==e.has(t.target).length||(t=i.find("option:selected").text(),e.html(t||n),$(document).off("click.select"))})}})},bindChangeDecimalItems:function(){$(".changeDecimal_items").on("click",function(){var e,n=$(this),i=unformatNumber(n.text().trim());function o(){var t=parseFloat(e.val()).toFixed(1);isNaN(t)||0==t?n.hasClass("thisTextRequired")?(n.text(formatNumber(i)),swalToastWarning("此欄位不可留白喔！","top")):n.text(""):n.text(formatNumber(t))}0===n.find("input").length&&(e=$('<input type="text" class="form-control" onkeyup="restrictToDecimal(this)">').val(i),n.html(e),e.focus().select(),e.on("input",function(){this.value=this.value.replace(/[^0-9.]/g,"");var t=this.value.split(".");2<t.length?this.value=t[0]+"."+t[1]:t[1]&&1<t[1].length&&(this.value=t[0]+"."+t[1].substring(0,1))}),e.on("blur",o),e.on("keypress",function(t){13===t.which&&o()}))})}};