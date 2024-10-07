$(function(){if(pendingPaymentThisAllList){console.log("顯示列表",pendingPaymentThisAllList),$("#proofOfPayment_companyName").val(pendingPaymentThisAllList.company),$("#proofOfPayment_last5AccountNo").val(pendingPaymentThisAllList.last5AccountNo),$("#proofOfPayment_Date").val(pendingPaymentThisAllList.paymentDate),$("#proofOfPayment_Money").val(pendingPaymentThisAllList.amount);{var t=pendingPaymentThisList;var e=pendingPaymentThisAllList.items;let a=$("#proofOfPayment_Table"),o=(a.empty(),e&&"string"==typeof e?e.split(","):[]);$.each(t,function(t,e){var n=o.includes(e.id)?"checked":"",n=`
                <tr>
                    <td>
                        <input type="checkbox" class="form-check-input me-2 idCard-checkbox" id="${e.id}" name="proofOfPaymentItem" ${n}>
                    </td>
                    <td>
                        <label for="${e.id}" class="col-lg col-form-label">
                            <span class="text-nowrap text-secondary">${e.type}</span>
                            <span class="text-nowrap">${e.description}</span>
                            <span class="text-nowrap text-danger">${e.amount}</span>
                        </label>
                    </td>
                </tr>
            `;a.append(n)})}}$("#listPendingItemsBtn").click(function(){let e=$("#proofOfPayment_companyName").val().trim();if(""!==e){pendingPaymentList=pendingPaymentAllList.filter(t=>t.company===e);{var t=pendingPaymentList;let n=$("#proofOfPayment_Table");n.empty(),$.each(t,function(t,e){e=`
                <tr>
                    <td>
                        <input type="checkbox" class="form-check-input me-2 idCard-checkbox" id="${e.id}" name="proofOfPaymentItem">
                    </td>
                    <td>
                        <label for="${e.id}" class="col-lg col-form-label">
                            <span class="text-nowrap text-secondary">${e.type}</span>
                            <span class="text-nowrap">${e.description}</span>
                            <span class="text-nowrap text-danger">${e.amount}</span>
                        </label>
                    </td>
                </tr>
            `;n.append(e)})}}else swalToastWarning("請輸入公司名稱唷！","top")}),$("#proofOfPayment_companyName").on("change",function(){$("#proofOfPayment_Table").empty()}),$("#proofOfPayment_companyName").typeahead({source:companyData}),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#proofOfPayment_last5AccountNo").on("input change",function(){var t=$(this).val(),e=$("#danger_proofOfPayment_last5AccountNo");5!==t.length?e.text("請輸入帳號『後5碼』"):e.text("")}),$("#submitBtn").click(function(e){if(e.preventDefault(),checkRequiredElements()){var e=$("#proofOfPayment_last5AccountNo").val(),n=$("#danger_proofOfPayment_last5AccountNo");if(5!==e.length)n.text("請輸入帳號『後5碼』");else{n.text("");let t=[];$("#proofOfPayment_Table .idCard-checkbox").each(function(){$(this).prop("checked")&&t.push($(this).attr("id"))}),0===t.length?swalToastWarning("請勾選本次支付的項目。","top"):(console.log(t),checkDangerElements()?((e=new FormData($("#formEditProofOfPayment")[0])).append("selectedIds",t),(n=$("#remittancePdf")[0].files[0])&&e.append("remittancePdf",n),n="/Remittance/Edit/"+pendingPaymentThisAllList.id,$.ajax({url:n,type:"POST",data:e,processData:!1,contentType:!1,success:function(t){swalToastSuccess(t.message,"top"),setTimeout(function(){window.history.back()},2300)},error:function(t){swalToastError("提交失敗，請稍後再試。","top")}})):swalToastWarning("請填上正確資料唷！","top"))}}})});