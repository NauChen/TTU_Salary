function checkRequiredElements(){var a=!0;return $(".thisRequired").each(function(){var e="";switch($(this).prop("tagName").toLowerCase()){case"input":var t=$(this).attr("type").toLowerCase();"checkbox"===t||"radio"===t?$(this).is(":checked")||(a=!1,addDangerRequiredMessage($(this).attr("id"))):"file"===t?(0===$(this).get(0).files.length?(a=!1,addDangerRequiredFilesMessage):removeDangerMessage)($(this).attr("id")):""===(e=$(this).val().trim())?(a=!1,addDangerRequiredMessage($(this).attr("id"))):(removeDangerMessage($(this).attr("id")),$(this).hasClass("thisPhone")&&(t=$(this).attr("id"),validatePhone(e)?$("#danger_"+t).text(""):(addDangerPhoneMessage(t),a=!1)));break;case"select":(""===(e=$(this).val()?$(this).val().trim():"")?(a=!1,addDangerRequiredSelectMessage):removeDangerMessage)($(this).attr("id"));break;case"textarea":(""===(e=$(this).val()?$(this).val().trim():"")?(a=!1,addDangerRequiredMessage):removeDangerMessage)($(this).attr("id"))}}),a}function checkPhoneNumbers(){var a=!0;return $(".thisPhone").each(function(){var e=$(this).val().trim(),t=$(this).attr("id");if(""===e)return $("#danger_"+t).text(""),!0;validatePhone(e)?$("#danger_"+t).text(""):(addDangerPhoneMessage(t),a=!1)}),a}function addDangerRequiredMessage(e){$("#danger_"+e).text("此為必填欄位！")}function addDangerRequiredSelectMessage(e){$("#danger_"+e).text("此為必選欄位！")}function addDangerRequiredFilesMessage(e){$("#danger_"+e).html("&#10551;此為必須上傳的檔案！")}function addDangerPhoneMessage(e){$("#danger_"+e).text("格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX")}function removeDangerMessage(e){$("#danger_"+e).text("")}function validatePhone(e){return/^\d{2,4}-\d{6,8}$/.test(e)}function checkThisPhone(){var e=$(this).val().trim(),t=$(this).attr("id"),t=$("#danger_"+t);""===e||validatePhone(e)?t.text(""):t.text("格式不正確，請依正確的格式輸入：區碼-電話號碼 或 09XX-XXXXXX")}function checkDangerElements(){for(var e=$('[id^="danger_"]'),t=0;t<e.length;t++)if(""!==$(e[t]).text().trim())return!1;return!0}