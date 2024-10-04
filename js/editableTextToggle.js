// ================燈箱文字 切換輸入 審核區域 
var CustomInputHandlers = {
    init: function () {
        this.bindChangeInputItems();
        this.bindChangeRadioCarItems();
        this.bindChangeRadioPaymentMethodItems();
        this.bindChangeRadioApplyItems();
        this.bindChangeDateItems();
        this.bindChangeMoneyItems();
        this.bindChangeTextareaLgItems();
        this.bindChangeNumber5Items();
        this.bindChangeUniformNumItems();
        this.bindChangePhoneItems();
        this.bindChangeEmailItems();
        this.bindChangeLineIDItems();
        this.bindChangeSelectItems();
        this.bindChangeSelectRoomItems();
        this.bindChangeSelectPaymentPurposeItems();
        this.bindChangeSelectStatusItems();
        this.bindChangeSelectPurchaseItems();
        this.bindChangeDecimalItems();
        this.bindChangeInputUpperNumberHyphenItems();
        this.bindChangeInputUpperNumberItems();
        this.bindChangeSelectStatus2Items();
    },
    destroy: function () {
        this.unbindChangeInputItems();
        this.unbindChangeRadioCarItems();
        this.unbindChangeRadioPaymentMethodItems();
        this.unbindChangeRadioApplyItems();
        this.unbindChangeDateItems();
        this.unbindChangeMoneyItems();
        this.unbindChangeTextareaLgItems();
        this.unbindChangeNumber5Items();
        this.unbindChangeUniformNumItems();
        this.unbindChangePhoneItems();
        this.unbindChangeEmailItems();
        this.unbindChangeLineIDItems();
        this.unbindChangeSelectItems();
        this.unbindChangeSelectRoomItems();
        this.unbindChangeSelectPaymentPurposeItems();
        this.unbindChangeSelectStatusItems();
        this.unbindChangeSelectPurchaseItems();
        this.unbindChangeDecimalItems();
        this.unbindChangeInputUpperNumberHyphenItems();
        this.unbindChangeInputUpperNumberItems();
        this.unbindChangeSelectStatus2Items();
    },
    bindChangeInputItems: function () {
        $('.changeInput_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" />').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter() {
                    var newText = $input.val().trim();
                    if (newText === '' && $this.hasClass('thisTextRequired')) {
                        $this.text(currentText);
                        swalToastWarning('此欄位不可留白喔！', 'top');
                    } else {
                        $this.text(newText);
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                // 設定鍵碼13(enter)
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                    }
                });
            }
        });
    },
    unbindChangeInputItems: function () {
        // 解除綁定 click 事件
        $('.changeInput_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeInput_items').find('input').off('blur').off('keypress');
    },
    bindChangeInputUpperNumberHyphenItems: function () {
        $('.changeInputUpperNumberHyphen_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToUpperCaseNumberHyphen(this)"/>').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter() {
                    var newText = $input.val().trim();
                    if (newText === '' && $this.hasClass('thisTextRequired')) {
                        $this.text(currentText);
                        swalToastWarning('此欄位不可留白喔！', 'top');
                    } else {
                        $this.text(newText);
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                // 設定鍵碼13(enter)
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                    }
                });
            }
        });
    },
    unbindChangeInputUpperNumberHyphenItems: function () {
        // 解除綁定 click 事件
        $('.changeInputUpperNumberHyphen_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeInputUpperNumberHyphen_items').find('input').off('blur').off('keypress');
    },
    bindChangeInputUpperNumberItems: function () {
        $('.changeInputUpperNumber_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictFirstUpperSecondNum(this)"/>').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter() {
                    var newText = $input.val().trim();
                    if (newText === '' && $this.hasClass('thisTextRequired')) {
                        $this.text(currentText);
                        swalToastWarning('此欄位不可留白喔！', 'top');
                    } else {
                        $this.text(newText);
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                // 設定鍵碼13(enter)
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                    }
                });
            }
        });
    },
    unbindChangeInputUpperNumberItems: function () {
        // 解除綁定 click 事件
        $('.changeInputUpperNumber_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeInputUpperNumber_items').find('input').off('blur').off('keypress');
    },
    bindChangeRadioCarItems: function () {
        $('.changeRadioCar_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input[type="radio"]').length === 0) {
                var radioOptions = `
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="car" value="汽車" ${currentText === '汽車' ? 'checked' : ''}>
                        <label class="form-check-label" for="car">汽車</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="parkingType" id="moto" value="機車" ${currentText === '機車' ? 'checked' : ''}>
                        <label class="form-check-label" for="moto">機車</label>
                    </div>`;

                $this.html(radioOptions);

                $this.find('input[type="radio"]').on('change', function () {
                    var newText = $(this).val().trim();
                    $this.html(newText);
                });

                $(document).on('click', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var checkedRadio = $this.find('input[type="radio"]:checked');
                        if (checkedRadio.length) {
                            var newText = checkedRadio.val().trim();
                            $this.html(newText);
                        }
                        $(document).off('click');
                    }
                });
            }
        });
    },
    unbindChangeRadioCarItems: function () {
        // 解除綁定 click 事件
        $('.changeRadioCar_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeRadioCar_items').find('input').off('blur').off('keypress');
    },
    bindChangeRadioPaymentMethodItems: function () {
        $('.changeRadioPayMethod_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input[type="radio"]').length === 0) {
                var radioOptions = `
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="cash" value="現金" ${currentText === '現金' ? 'checked' : ''}>
                        <label class="form-check-label" for="cash">現金</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="remittance" value="匯款" ${currentText === '匯款' ? 'checked' : ''}>
                        <label class="form-check-label" for="remittance">匯款</label>
                    </div>`;

                $this.html(radioOptions);

                $this.find('input[type="radio"]').on('change', function () {
                    var newText = $(this).val().trim();
                    $this.html(newText);
                });

                $(document).on('click', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var checkedRadio = $this.find('input[type="radio"]:checked');
                        if (checkedRadio.length) {
                            var newText = checkedRadio.val().trim();
                            $this.html(newText);
                        }
                        $(document).off('click');
                    }
                });
            }
        });
    },
    unbindChangeRadioPaymentMethodItems: function () {
        // 解除綁定 click 事件
        $('.changeRadioPayMethod_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeRadioPayMethod_items').find('input').off('blur').off('keypress');
    },
    bindChangeRadioApplyItems: function () {
        $('.changeRadioApply_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input[type="radio"]').length === 0) {
                var radioOptions = `
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="applyType" id="radioYes" value="申請" ${currentText === '申請' ? 'checked' : ''}>
                        <label class="form-check-label" for="radioYes">申請</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="applyType" id="radioNo" value="不申請" ${currentText === '不申請' ? 'checked' : ''}>
                        <label class="form-check-label" for="radioNo">不申請</label>
                    </div>`;

                $this.html(radioOptions);

                $this.find('input[type="radio"]').on('change', function () {
                    var newText = $(this).val().trim();
                    $this.html(newText);
                });

                $(document).on('click', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var checkedRadio = $this.find('input[type="radio"]:checked');
                        if (checkedRadio.length) {
                            var newText = checkedRadio.val().trim();
                            $this.html(newText);
                        }
                        $(document).off('click');
                    }
                });
            }
        });
    },
    unbindChangeRadioApplyItems: function () {
        // 解除綁定 click 事件
        $('.changeRadioApply_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeRadioApply_items').find('input').off('blur').off('keypress');
    },
    bindChangeDateItems: function () {
        $('.changeDate_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input[type="date"]').length === 0) {
                var $input = $('<input type="date" class="form-control" />').val(currentText);
                $this.html($input);
                $input.focus();

                function handleBlurOrEnter() {
                    var newText = $input.val().trim();
                    if (!newText && $this.hasClass('thisTextRequired')) {
                        $this.text(currentText);
                        swalToastWarning('此欄位不可不選日期喔！', 'top');
                    } else {
                        $this.text(newText);
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                    }
                });
            }
        });
    },
    unbindChangeDateItems: function () {
        // 解除綁定 click 事件
        $('.changeDate_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeDate_items').find('input').off('blur').off('keypress');
    },
    bindChangeMoneyItems: function () {
        $('.changeMoney_items').on('click', function () {
            var $this = $(this);
            var currentText = unformatNumber($this.text().trim());

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToNum(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                $input.on('input', function () {
                    this.value = this.value.replace(/[^0-9]/g, '');
                });

                function handleBlurOrEnter() {
                    var newText = formatNumber($input.val().trim());
                    if (newText) {
                        $this.text(newText);
                    } else {
                        if ($this.hasClass('thisTextRequired')) {
                            $this.text(formatNumber(currentText));
                            swalToastWarning('此欄位不可留白喔！', 'top');
                        } else {
                            $this.text(newText);
                        }
                    }
                }
                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                        // $input.blur(); // 强制触发 blur 事件以便执行相应逻辑
                    }
                });
            }
        });
    },
    unbindChangeMoneyItems: function () {
        // 解除綁定 click 事件
        $('.changeMoney_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeMoney_items').find('input').off('blur').off('keypress');
    },
    bindChangeTextareaLgItems: function () {
        $('.changeTextarea_lg_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.html().replace(/<br\s*[\/]?>/gi, '\n').trim();

            if ($this.find('textarea').length === 0) {
                var $textarea = $('<textarea class="form-control textarea-lg" rows="5"></textarea>').val(currentText);
                $this.html($textarea);
                $textarea.focus().select();

                function handleBlurOrCtrlEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keydown' && e.key === 'Enter' && e.ctrlKey)) {
                        var newText = $textarea.val().trim().replace(/\n/g, '<br>');
                        if (!newText && $this.hasClass('thisTextRequired')) {
                            $this.html(currentText);
                            swalToastWarning('此欄位不可留白喔！', 'top');
                        } else {
                            $this.html(newText);
                        }
                    }
                }

                $textarea.on('blur', handleBlurOrCtrlEnter);
                $textarea.on('keydown', handleBlurOrCtrlEnter);
            }
        });
    },
    unbindChangeTextareaLgItems: function () {
        // 解除綁定 click 事件
        $('.changeTextarea_lg_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeTextarea_lg_items').find('input').off('blur').off('keypress');
    },
    bindChangeNumber5Items: function () {
        $('.changeNumber5_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictTo5Num(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                $input.on('input', function () {
                    this.value = this.value.replace(/[^0-9]/g, '');
                });

                function handleBlurOrEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keypress' && e.which === 13)) {
                        var newText = $input.val().trim();
                        if (!newText && $this.hasClass('thisTextRequired')) {
                            $this.text(currentText);
                            swalToastWarning('此欄位不可留白喔！', 'top');
                        } else {
                            $this.text(newText);
                        }
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', handleBlurOrEnter);
            }
        });
    },
    unbindChangeNumber5Items: function () {
        // 解除綁定 click 事件
        $('.changeNumber5_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeNumber5_items').find('input').off('blur').off('keypress');
    },
    bindChangeUniformNumItems: function () {
        $('.changeUniformNum_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToUniformNum(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keypress' && e.which === 13)) {
                        var newText = $input.val().trim();
                        if (!newText && $this.hasClass('thisTextRequired')) {
                            $this.text(currentText);
                            swalToastWarning('此欄位不可留白喔！', 'top');
                        } else {
                            $this.text(newText);
                        }
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', handleBlurOrEnter);
            }
        });
    },
    unbindChangeUniformNumItems: function () {
        // 解除綁定 click 事件
        $('.changeUniformNum_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeUniformNum_items').find('input').off('blur').off('keypress');
    },
    bindChangePhoneItems: function () {
        $('.changePhone_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToNumberHyphen(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keypress' && e.which === 13)) {
                        var newText = $input.val().trim();
                        if (!newText) {
                            $this.text(currentText);
                            if ($this.hasClass('thisTextRequired')) {
                                swalToastWarning('此欄位不可留白喔！', 'top');
                            }
                        } else {
                            if (validatePhone(newText)) {
                                $this.text(newText);
                            } else {
                                $this.text(currentText);
                                swalToastWarning('電話格式不正確，請輸入正確的格式：區碼-電話號碼 或 09XX-XXXXXX', 'top');
                            }
                        }
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', handleBlurOrEnter);
            }
        });
    },
    unbindChangePhoneItems: function () {
        // 解除綁定 click 事件
        $('.changePhone_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changePhone_items').find('input').off('blur').off('keypress');
    },
    bindChangeEmailItems: function () {
        $('.changeEmail_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToValidChars(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keypress' && e.which === 13)) {
                        var newText = $input.val().trim();
                        if (!newText) {
                            if ($this.hasClass('thisTextRequired')) {
                                $this.text(currentText);
                                swalToastWarning('此欄位不可留白喔！', 'top');
                            } else {
                                $this.text('');
                            }
                        } else {
                            // 轉換@之前的大寫字母為小寫
                            newText = convertEmail(newText);

                            if (validateEmail(newText)) {
                                $this.text(newText);
                            } else {
                                $this.text(currentText);
                                swalToastWarning('請輸入有效的電子郵件地址！', 'top');
                            }
                        }
                    }
                }
                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', handleBlurOrEnter);
            }
        });
    },
    unbindChangeEmailItems: function () {
        // 解除綁定 click 事件
        $('.changeEmail_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeEmail_items').find('input').off('blur').off('keypress');
    },
    bindChangeLineIDItems: function () {
        $('.changeLineID_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToValidChars(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                function handleBlurOrEnter(e) {
                    if (e.type === 'blur' || (e.type === 'keypress' && e.which === 13)) {
                        var newText = $input.val().trim();
                        if (!newText) {
                            if ($this.hasClass('thisTextRequired')) {
                                $this.text(currentText);
                                swalToastWarning('此欄位不可留白喔！', 'top');
                            } else {
                                $this.text('');
                            }
                        } else {
                            if (validLineID(newText)) {
                                $this.text(newText);
                            } else {
                                $this.text(currentText);
                                swalToastWarning('請輸入有效的LINE ID！', 'top');
                            }
                        }
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', handleBlurOrEnter);
            }
        });
    },
    unbindChangeLineIDItems: function () {
        // 解除綁定 click 事件
        $('.changeLineID_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeLineID_items').find('input').off('blur').off('keypress');
    },
    // selectOption
    // bindChangeSelectItems: function () {
    //     $('.changeSelect_items').on('click', function () {
    //         var $this = $(this);
    //         var currentText = $this.text().trim();

    //         if ($this.find('select').length === 0) {
    //             var selectOptions = `
    //                 <select class="form-control form-select">
    //                 </select>`;

    //             var $select = $(selectOptions);

    //             // var selectOption = [
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B1-01' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B1-05' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B3-01' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B3-10' },
    //             //     { 'optigroup': '新德惠大樓', 'option': 'B2-05' },
    //             //     { 'optigroup': '青創大樓', 'option': 'B4-01' },
    //             // ];

    //             var groupedOptions = {};
    //             selectOption.forEach(function (item) {
    //                 if (!groupedOptions[item.optigroup]) {
    //                     groupedOptions[item.optigroup] = [];
    //                 }
    //                 groupedOptions[item.optigroup].push(item.option);
    //             });

    //             for (var group in groupedOptions) {
    //                 var optgroup = $('<optgroup>').attr('label', group);
    //                 groupedOptions[group].forEach(function (option) {
    //                     var optionElement = $('<option>').attr('value', option).text(option);
    //                     if (option === currentText) {
    //                         optionElement.attr('selected', 'selected');
    //                     }
    //                     optgroup.append(optionElement);
    //                 });
    //                 $select.append(optgroup);
    //             }

    //             $this.html($select);
    //             $select.focus();

    //             $select.on('change', function () {
    //                 var newText = $select.val();
    //                 $this.html(newText);
    //             });

    //             $(document).on('click.select', function (e) {
    //                 if (!$this.is(e.target) && $this.has(e.target).length === 0) {
    //                     var newText = $select.val();
    //                     $this.html(newText ? newText : currentText);
    //                     $(document).off('click.select');
    //                 }
    //             });
    //         }
    //     });
    // },
    bindChangeSelectItems: function () {
        $('.changeSelect_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                    <select class="form-control form-select">
                    </select>`;

                var $select = $(selectOptions);

                // 判斷 selectOption 是否有 optigroup
                if (selectOption.length > 0 && selectOption[0].hasOwnProperty('optigroup')) {
                    // 如果有 optigroup，則進行分組
                    var groupedOptions = {};

                    selectOption.forEach(function (item) {
                        if (!groupedOptions[item.optigroup]) {
                            groupedOptions[item.optigroup] = [];
                        }
                        groupedOptions[item.optigroup].push(item.option);
                    });

                    for (var group in groupedOptions) {
                        var optgroup = $('<optgroup>').attr('label', group);
                        groupedOptions[group].forEach(function (option) {
                            var optionElement = $('<option>').attr('value', option).text(option);
                            if (option === currentText) {
                                optionElement.attr('selected', 'selected');
                            }
                            optgroup.append(optionElement);
                        });
                        $select.append(optgroup);
                    }
                } else {
                    // 如果沒有 optigroup，則直接添加選項
                    selectOption.forEach(function (item) {
                        var optionElement = $('<option>').attr('value', item.option).text(item.option);
                        if (currentText === item.option) {
                            optionElement.attr('selected', 'selected');
                        }
                        $select.append(optionElement);
                    });
                }

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.val();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.val();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },

    unbindChangeSelectItems: function () {
        // 解除綁定 click 事件
        $('.changeSelect_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelect_items').find('input').off('blur').off('keypress');
    },
    // selectOptionRoom
    bindChangeSelectRoomItems: function () {
        $('.changeSelectRoom_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                    <select class="form-control form-select">
                    </select>`;

                var $select = $(selectOptions);

                var groupedOptions = {};
                selectOptionRoom.forEach(function (item) {
                    if (!groupedOptions[item.optigroup]) {
                        groupedOptions[item.optigroup] = [];
                    }
                    groupedOptions[item.optigroup].push(item.option);
                });

                for (var group in groupedOptions) {
                    var optgroup = $('<optgroup>').attr('label', group);
                    groupedOptions[group].forEach(function (option) {
                        var optionValue = group + ' ' + option;
                        var optionElement = $('<option>').attr('value', optionValue).text(option);
                        if (optionValue === currentText) {
                            optionElement.attr('selected', 'selected');
                        }
                        optgroup.append(optionElement);
                    });
                    $select.append(optgroup);
                }

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.val();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.val();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },
    unbindChangeSelectRoomItems: function () {
        // 解除綁定 click 事件
        $('.changeSelectRoom_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelectRoom_items').find('input').off('blur').off('keypress');
    },
    // selectOptionPaymentPurpose
    bindChangeSelectPaymentPurposeItems: function () {
        $('.changeSelectPaymentPurpose_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                    <select class="form-control form-select">
                    </select>`;

                var $select = $(selectOptions);

                // 判斷是否有 optigroup
                if (selectOptionPaymentPurpose[0].hasOwnProperty('optigroup')) {
                    var groupedOptions = {};
                    selectOptionPaymentPurpose.forEach(function (item) {
                        if (!groupedOptions[item.optigroup]) {
                            groupedOptions[item.optigroup] = [];
                        }
                        groupedOptions[item.optigroup].push(item.option);
                    });

                    for (var group in groupedOptions) {
                        var optgroup = $('<optgroup>').attr('label', group);
                        groupedOptions[group].forEach(function (option) {
                            var optionValue = group + ' ' + option;
                            var optionElement = $('<option>').attr('value', optionValue).text(option);
                            if (optionValue === currentText) {
                                optionElement.attr('selected', 'selected');
                            }
                            optgroup.append(optionElement);
                        });
                        $select.append(optgroup);
                    }
                } else {
                    selectOptionPaymentPurpose.forEach(function (item) {
                        var optionElement = $('<option>').attr('value', item.option).text(item.option);
                        if (currentText === item.option) {
                            optionElement.attr('selected', 'selected');
                        }
                        $select.append(optionElement);
                    });
                }

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.find('option:selected').text();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.find('option:selected').text();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },
    unbindChangeSelectPaymentPurposeItems: function () {
        // 解除綁定 click 事件
        $('.changeSelectPaymentPurpose_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelectPaymentPurpose_items').find('input').off('blur').off('keypress');
    },
    // selectOptionStatus
    bindChangeSelectStatusItems: function () {
        $('.changeSelectStatus_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                    <select class="form-control form-select">
                    </select>`;

                var $select = $(selectOptions);

                selectOptionStatus.forEach(function (item) {
                    var optionElement = $('<option>').attr('value', item.option).text(item.option);
                    if (currentText === item.option) {
                        optionElement.attr('selected', 'selected');
                    }
                    $select.append(optionElement);
                });

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.find('option:selected').text();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.find('option:selected').text();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },
    unbindChangeSelectStatusItems: function () {
        // 解除綁定 click 事件
        $('.changeSelectStatus_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelectStatus_items').find('input').off('blur').off('keypress');
    },
    // selectOptionPurchase
    bindChangeSelectPurchaseItems: function () {
        $('.changeSelectPurchase_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                        <select class="form-control form-select">
                        </select>`;

                var $select = $(selectOptions);

                // 判斷是否有 optigroup
                if (selectOptionPurchase[0].hasOwnProperty('optigroup')) {
                    var groupedOptions = {};
                    selectOptionPurchase.forEach(function (item) {
                        if (!groupedOptions[item.optigroup]) {
                            groupedOptions[item.optigroup] = [];
                        }
                        groupedOptions[item.optigroup].push(item.option);
                    });

                    for (var group in groupedOptions) {
                        var optgroup = $('<optgroup>').attr('label', group);
                        groupedOptions[group].forEach(function (option) {
                            var optionValue = group + ' ' + option;
                            var optionElement = $('<option>').attr('value', optionValue).text(option);
                            if (optionValue === currentText) {
                                optionElement.attr('selected', 'selected');
                            }
                            optgroup.append(optionElement);
                        });
                        $select.append(optgroup);
                    }
                } else {
                    selectOptionPurchase.forEach(function (item) {
                        var optionElement = $('<option>').attr('value', item.option).text(item.option);
                        if (currentText === item.option) {
                            optionElement.attr('selected', 'selected');
                        }
                        $select.append(optionElement);
                    });
                }

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.find('option:selected').text();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.find('option:selected').text();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },
    unbindChangeSelectPurchaseItems: function () {
        // 解除綁定 click 事件
        $('.changeSelectPurchase_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelectPurchase_items').find('input').off('blur').off('keypress');
    },
    bindChangeDecimalItems: function () {
        $('.changeDecimal_items').on('click', function () {
            var $this = $(this);
            var currentText = unformatNumber($this.text().trim());

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" onkeyup="restrictToDecimal(this)">').val(currentText);
                $this.html($input);
                $input.focus().select();

                $input.on('input', function () {
                    this.value = this.value.replace(/[^0-9.]/g, '');
                    var parts = this.value.split('.');
                    if (parts.length > 2) {
                        this.value = parts[0] + '.' + parts[1];
                    } else if (parts[1] && parts[1].length > 1) {
                        this.value = parts[0] + '.' + parts[1].substring(0, 1);
                    }
                });

                function handleBlurOrEnter() {
                    var newValue = parseFloat($input.val()).toFixed(1);
                    if (isNaN(newValue) || newValue == 0.0) {
                        if ($this.hasClass('thisTextRequired')) {
                            $this.text(formatNumber(currentText));
                            swalToastWarning('此欄位不可留白喔！', 'top');
                        } else {
                            $this.text('');
                        }
                    } else {
                        $this.text(formatNumber(newValue));
                    }
                }

                $input.on('blur', handleBlurOrEnter);
                $input.on('keypress', function (e) {
                    if (e.which === 13) {
                        handleBlurOrEnter();
                        // $input.blur(); // 强制触发 blur 事件以便执行相应逻辑
                    }
                });
            }
        });
    },
    unbindChangeDecimalItems: function () {
        // 解除綁定 click 事件
        $('.changeDecimal_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeDecimal_items').find('input').off('blur').off('keypress');
    },
    // selectOptionStatus2
    bindChangeSelectStatus2Items: function () {
        $('.changeSelectStatus2_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                        <select class="form-control form-select">
                        </select>`;

                var $select = $(selectOptions);

                selectOptionStatus2.forEach(function (item) {
                    var optionElement = $('<option>').attr('value', item.option).text(item.option);
                    if (currentText === item.option) {
                        optionElement.attr('selected', 'selected');
                    }
                    $select.append(optionElement);
                });

                $this.html($select);
                $select.focus();

                $select.on('change', function () {
                    var newText = $select.find('option:selected').text();
                    $this.html(newText);
                });

                $(document).on('click.select', function (e) {
                    if (!$this.is(e.target) && $this.has(e.target).length === 0) {
                        var newText = $select.find('option:selected').text();
                        $this.html(newText ? newText : currentText);
                        $(document).off('click.select');
                    }
                });
            }
        });
    },
    unbindChangeSelectStatus2Items: function () {
        // 解除綁定 click 事件
        $('.changeSelectStatus2_items').off('click');

        // 解除綁定 blur 和 keypress 事件
        $('.changeSelectStatus2_items').find('input').off('blur').off('keypress');
    },
};