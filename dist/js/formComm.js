function restrictToNumberHyphen(e){$(e).val($(e).val().replace(/[^\d-]/g,""))}function restrictToNum(e){var a=$(e).val().replace(/\D/g,"");a.startsWith("0")&&(a=a.replace(/^0+/,"")),$(e).val(a)}function restrictToUniformNum(e){var a=$(e).val().replace(/\D/g,"");8<a.length&&(a=a.slice(0,8)),$(e).val(a)}function restrictTo5Num(e){var a=$(e).val().replace(/\D/g,"");5<a.length&&(a=a.slice(0,5)),$(e).val(a)}function restrictToValidChars(e){$(e).val($(e).val().replace(/[^a-zA-Z0-9._@-]/g,""))}function restrictToUpperCaseNumberHyphen(e){$(e).val($(e).val().replace(/[^A-Z0-9-]/g,""))}function restrictFirstUpperSecondNum(e){var a=$(e).val().split("").map((e,a)=>0===a?e.replace(/[^A-Z]/g,""):1===a?e.replace(/[^A-Z0-9]/g,""):e.replace(/[^0-9]/g,"")).join("");$(e).val(a)}function restrictToDecimal(e){e.value=e.value.replace(/[^0-9.]/g,""),1<e.value.length&&e.value.startsWith("0")&&"."!==e.value[1]&&(e.value=e.value.slice(1));var a,t=e.value.split(".");2<t.length&&(e.value=t[0]+"."+t[1]),1<t.length&&1<t[1].length&&(a=parseFloat("0."+t[1]),a=Math.ceil(10*a)/10,e.value=1<=a?(parseInt(t[0],10)+1).toString()+".0":t[0]+"."+a.toString().split(".")[1])}function formatNumber(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function unformatNumber(e){return e.replace(/,/g,"")}function unformatOnFocus(e){var a=$(e).val();$(e).val(unformatNumber(a))}function formatOnBlur(e){var a=$(e).val();""!==a&&$(e).val(formatNumber(a))}function handleSalaryChoose(e){switch(e){case"時薪":case"日薪":$("#dollarsItem").addClass("choose"),$("#dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose"),$("#salaryTypeRadio1").prop("checked",!0),$("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired"),$("#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(""),$("#dollarsInput").addClass("thisRequired");break;case"月薪":$("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").addClass("choose"),$("#dollarsPerCaseItem").removeClass("choose"),$("#salaryTypeRadio1").prop("checked",!0),$("#dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired"),$("#danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text(""),$("#dollarsInput").addClass("thisRequired");break;case"按件計酬":$("#dollarsPerCaseItem").addClass("choose"),$("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem").removeClass("choose"),$("#salaryTypeRadio5").prop("checked",!0),$("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput").removeClass("thisRequired"),$("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput").text(""),$("#dollarsPerCaseInput").addClass("thisRequired");break;case"請選擇":$("#dollarsItem, #dollarsToDollarsItem, #moreThenDollarsItem, #negotiableItem, #dollarsPerCaseItem").removeClass("choose"),$("#salaryTypeRadio1, #salaryTypeRadio2, #salaryTypeRadio3, #salaryTypeRadio4, #salaryTypeRadio5").prop("checked",!1),$("#dollarsInput, #dollarsToDollars_1Input, #dollarsToDollars_2Input, #moreThenDollarsInput, #negotiableInput, #dollarsPerCaseInput").removeClass("thisRequired"),$("#danger_dollarsInput, #danger_dollarsToDollars_1Input, #danger_dollarsToDollars_2Input, #danger_moreThenDollarsInput, #danger_negotiableInput, #danger_dollarsPerCaseInput").text("")}}function toggleRadioItems(e,a,t,r){let n=$("#"+e),o=$("#"+a),l=$("#"+t),s=$("#"+r);function i(){n.is(":checked")?(l.show(),s.hide()):o.is(":checked")&&(l.hide(),s.show())}i(),n.on("change",i),o.on("change",i)}function splitJobTime(e){e=e.split(" ~ ");if(2===e.length)return{jobTime1:e[0].trim(),jobTime2:e[1].trim()};throw new Error("Invalid jobTime format. It should be in the format 'HH:mm ~ HH:mm'.")}function setMinDateToToday(e){var a=new Date,a=a.getFullYear()+"-"+String(a.getMonth()+1).padStart(2,"0")+"-"+String(a.getDate()).padStart(2,"0");$("#"+e).attr("min",a)}function setMinDateToSomeDaysLater(e,a){var t=new Date;t.setDate(t.getDate()+a);a=t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0");$("#"+e).attr("min",a)}function setMinDateToSomeDataDaysLater(e,a,t){a=new Date(a);a.setDate(a.getDate()+t);t=a.getFullYear()+"-"+String(a.getMonth()+1).padStart(2,"0")+"-"+String(a.getDate()).padStart(2,"0");$("#"+e).attr("min",t)}function setLaterMinDate(e,a,t,r){var n=new Date;n.setDate(n.getDate()+a);a=n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0"),n=new Date(t);n.setDate(n.getDate()+r);t=n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")+"-"+String(n.getDate()).padStart(2,"0"),r=new Date(a)>new Date(t)?a:t;$("#"+e).attr("min",r)}function enforceStartDateFirst(e,a){var t=$("#"+e),r=$("#"+a);r.on("mousedown",function(e){""===t.val()?(e.preventDefault(),r.attr("readonly",!0),swalToastWarning("請先選取開始日期。","top")):r.attr("readonly",!1)}),t.on("change",function(){""!==t.val()?(r.attr("min",t.val()),r.attr("readonly",!1)):(r.removeAttr("min"),r.attr("readonly",!0))}),r.on("change",function(){""!==r.val()?t.attr("max",r.val()):t.removeAttr("max")})}function changeRoomName(e){switch(e){case"青創基地":return"新德惠";case"綜合工廠培育區":return"綜合";case"挺生大樓培育區":return"挺生";case"產學實驗培育區":return"產學";case"實驗大樓培育區":return"實驗";case"北設工培育區":return"北設工";case"尚志大樓培育區":return"尚志";default:return"待新增"}}function changeBuildingToCultivationRoom(e){switch(e){case"青創基地":return"新德惠";case"綜合工廠培育區":return"綜合";case"挺生大樓培育區":return"挺生";case"產學實驗培育區":return"產學";case"實驗大樓培育區":return"實驗";case"北設工培育區":return"北設工";case"尚志大樓培育區":return"尚志";default:return"待新增"}}function changeCultivationRoomToBuilding(e){switch(e){case"新德惠":return"青創基地";case"綜合":return"綜合工廠培育區";case"挺生":return"挺生大樓培育區";case"產學":return"產學實驗培育區";case"實驗":return"實驗大樓培育區";case"北設工":return"北設工培育區";case"尚志":return"尚志大樓培育區";default:return"待新增"}}function populateSelect(e,a){var t=document.getElementById(e),r={};a.forEach(function(e){r[e.optigroup]||((a=document.createElement("optgroup")).label=e.optigroup,r[e.optigroup]=a,t.appendChild(a));var a=document.createElement("option");a.value=e.optigroup+"-"+e.option,a.textContent=e.option,r[e.optigroup].appendChild(a)})}function convertEmail(e){var a=e.indexOf("@");return-1!==a?e.substring(0,a).toLowerCase()+e.substring(a):e}function splitHyphen(e){e=e.split("-");if(2===e.length)return{part1:e[0].trim(),part2:e[1].trim()};throw new Error("Invalid textData format. It should be in the format 'aaaa-bbbb'.")}function extractSubstringBetween(e,a,t){a=e.indexOf(a),t=e.indexOf(t,a+1);return-1===a||-1===t||t<=a?"":e.substring(a+1,t)}function splitDate(e){e=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(e)return{year:e[1],month:e[2],day:e[3]};throw new Error("Invalid date format. Expected YYYY-MM-DD.")}function convertBrToNewline(e){return e.replace(/<br\s*\/?>/gi,"\n")}function clearValues(e){e.forEach(function(e){var a=document.getElementById(e);if(a)switch(a.tagName.toLowerCase()){case"input":switch(a.type){case"date":case"text":case"number":case"password":case"email":case"file":a.value="";break;case"radio":case"checkbox":a.checked=!1}break;case"textarea":a.value="";break;case"span":case"div":a.innerHTML="";break;default:console.warn("Unsupported element type: "+a.tagName)}else console.warn(`Element with id "${e}" not found.`)})}