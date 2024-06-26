var inP = $('.input-field');

inP.on('blur', function () {
    if (!this.value) {
        $(this).parent('.f_row').removeClass('focus');
    } else {
        $(this).parent('.f_row').addClass('focus');
    }
}).on('focus', function () {
    $(this).parent('.f_row').addClass('focus');
    $('.btn').removeClass('active');
    $('.f_row').removeClass('shake');
});


$('.resetTag').click(function (e) {
    e.preventDefault();
    $('.formBox').addClass('level-forget').removeClass('level-consent');
});

$('.back').click(function (e) {
    e.preventDefault();
    $('.formBox').removeClass('level-forget').addClass('level-login');
});



$('.regTag').click(function (e) {
    e.preventDefault();
    $('.formBox').removeClass('level-consent-revers');
    $('.formBox').toggleClass('level-login').toggleClass('level-consent');
    if (!$('.formBox').hasClass('level-consent')) {
        $('.formBox').addClass('level-consent-revers');
    }
});
$('.btn').each(function () {
    $(this).on('click', function (e) {
        e.preventDefault();

        var finp = $(this).parent('form').find('input');

        console.log(finp.html());

        if (!finp.val() == 0) {
            $(this).addClass('active');
        }

        setTimeout(function () {

            inP.val('');

            $('.f_row').removeClass('shake focus');
            $('.btn').removeClass('active');

        }, 2000);

        if (inP.val() == 0) {
            inP.parent('.f_row').addClass('shake');
        }

        //inP.val('');
        //$('.f_row').removeClass('focus');

    });
});


$(function () {
    // ※※※ 個資規範至底才能點擊確認，確認完自動勾同意 ※※※
    var checkbox = $('#checkbox_PIP');
    var modalBody = $('.modal-body');
    var understandBtn = $('#iAgree');

    checkbox.prop('disabled', true);
    understandBtn.prop('disabled', true);

    modalBody.on('scroll', function () {
        if (modalBody.prop('scrollHeight') - modalBody.scrollTop() === modalBody.innerHeight()) {
            understandBtn.prop('disabled', false);
        }
    });

    understandBtn.on('click', function () {
        checkbox.prop('checked', true);
        checkbox.prop('disabled', false);
    });

    modalBody.append('<div style="height:100px;"></div>');



    // ※※※ 是否進入申請頁面 ※※※
    $('#danger_loginPage').hide();
    $('#nextButton').click(function (event) {
        var allChecked = true;
        var agreePIP = $('#checkbox_PIP');

        var checkboxes = [
            // '#checkbox_PIP',
            '#checkbox_memoOfCooperation',
            '#check_planConcept',
            '#checkbox_consentDoc',
            '#checkbox_entryForm',
            '#checkbox_businessProof',
        ];

        checkboxes.forEach(function (selector) {
            if (!$(selector).is(':checked')) {
                allChecked = false;
            }
        });

        if (agreePIP.is(':checked')) {
            if (!allChecked) {
                event.preventDefault();
                $('#danger_loginPage').show().text('(ó㉨ò)　請確認備齊文件再申請唷！');
            } else {
                $('#danger_loginPage').hide();
                window.location.href = $('#nextLink').attr('href');
            }
        } else {
            event.preventDefault();
            $('#danger_loginPage').show().text('(ó㉨ò)　需詳閱並同意個資規範唷！');
        }
    });


});


$(function () {


});