let pendingPaymentList=[{id:"CP1",type:"階段付款",description:"培育室(挺生大樓-202)",amount:"20,000元"},{id:"CP2",type:"階段付款",description:"停車位(校本部-01)",amount:"2,000元"},{id:"CA1",type:"新申請",description:"停車位(ABC-119)",amount:"費用待確認"},{id:"BA1",type:"新申請",description:"識別證(王小明)",amount:"100元"},{id:"BA2",type:"遺失補發",description:"識別證(王小明)",amount:"300元"}];$(function(){let n=$("#proofOfPayment_Table");n.empty(),$.each(pendingPaymentList,function(t,e){e=`
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
        </tr>`;n.append(e)}),$("#proofOfPayment_companyName").typeahead({source:companyData}),last5Num&&$("#proofOfPayment_last5AccountNo").text(last5Num),$(".thisRequired").on("input change",function(){checkThisRequiredElements.call(this)}),$("#proofOfPayment_last5AccountNo").on("input change",function(){var t=$(this).val(),e=$("#danger_proofOfPayment_last5AccountNo");5!==t.length?e.text("請輸入帳號『後5碼』"):e.text("")}),$("#resetBtn").click(function(){this.form.reset(),$('[id^="danger_"]').text("")}),$("#submitBtn").click(function(e){if(e.preventDefault(),checkRequiredElements()){var e=$("#proofOfPayment_last5AccountNo").val(),n=$("#danger_proofOfPayment_last5AccountNo");if(5!==e.length)n.text("請輸入帳號『後5碼』");else{n.text("");let t=[];$("#proofOfPayment_Table .idCard-checkbox").each(function(){$(this).prop("checked")&&t.push($(this).attr("id"))}),0===t.length?swalToastWarning("請勾選本次支付的項目。","top"):(console.log(t),checkDangerElements()?((e=new FormData($("#formSendProofOfPayment")[0])).append("selectedIds",t),(n=$("#remittancePdf")[0].files[0])&&e.append("remittancePdf",n),$.ajax({url:paymentUrl,type:"POST",data:e,processData:!1,contentType:!1,success:function(t){swalToastSuccess(t.message,"top"),setTimeout(function(){window.history.back()},2300)},error:function(t){swalToastError("提交失敗，請稍後再試。","top")}})):swalToastWarning("請填上正確資料唷！","top"))}}})});