// ================燈箱文字 切換輸入 審核區域 
var CustomInputHandlers = {
    init: function () {
        this.bindChangeInputItems();
        this.bindChangeRadioCarItems();
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
    bindChangeRadioCarItems: function () {
        $('.changeRadio_items').on('click', function () {
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
    bindChangeLineIDItems: function () {
        $('.changeLineID_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('input').length === 0) {
                var $input = $('<input type="text" class="form-control" />').val(currentText);
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
                            if (isValidLineID(newText)) {
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
    bindChangeSelectItems: function () {
        $('.changeSelect_items').on('click', function () {
            var $this = $(this);
            var currentText = $this.text().trim();

            if ($this.find('select').length === 0) {
                var selectOptions = `
                    <select class="form-control form-select">
                    </select>`;

                var $select = $(selectOptions);

                // var selectOption = [
                //     { 'optigroup': '新德惠大樓', 'option': 'B1-01' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B1-05' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B2-08' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B3-01' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B3-10' },
                //     { 'optigroup': '新德惠大樓', 'option': 'B2-05' },
                //     { 'optigroup': '青創大樓', 'option': 'B4-01' },
                // ];

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
    }


};