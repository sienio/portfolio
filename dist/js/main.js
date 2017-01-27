$(window).load(function () {
    var $loadingWrapper = $(".loading-wrapper");
    $loadingWrapper
        .delay(1500)
        .fadeOut("slow");

    setTimeout(function () {
        $loadingWrapper.remove();
    }, 2000);
})

$(document).ready(function () {
    // show arrow-top
    var $arrowToTop = $('.arrow-top').hide();
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $arrowToTop.fadeIn(500);
        } else {
            $arrowToTop.fadeOut(500);
        }
    });
    $arrowToTop.click(function () {
        $('body').animate({
            scrollTop: 0
        }, 500);
    });


    var mainMenu = $("#main-menu");
    var mainMenuheight = $('#main').height();

    $(window).on('scroll',function () {
        if ($(this).scrollTop() > mainMenuheight) {
            mainMenu.addClass('main-nav-fixed');
        } else {
            mainMenu.removeClass('main-nav-fixed');
        }
    });


    // form validation
    //Walidacja nazwy
    $('#name').on('blur, keyup', function () {
        var input = $(this);
        var name_length = input.val().length;
        if (name_length >= 4 && name_length <= 15) {
            input
                .removeClass("invalid")
                .addClass("valid");
            input
                .next('.statement')
                .text("Walidacja poprawna :)")
                .removeClass("error")
                .addClass("success");
        } else {
            input
                .removeClass("valid")
                .addClass("invalid");
            input
                .next('.statement')
                .text("Nazwa musi mieć więcej niż 3 i mniej niż 16 znaków!")
                .removeClass("success")
                .addClass("error");

        }
    });

    //Walidacja email
    $('#email').on('blur, keyup', function () {
        var input = $(this);
        var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var is_email = pattern.test(input.val());
        if (is_email) {
            input
                .removeClass("invalid")
                .addClass("valid");
            input
                .next('.statement')
                .text("Email poprawny :)")
                .removeClass("error")
                .addClass("success");
        } else {
            input
                .removeClass("valid")
                .addClass("invalid");
            input
                .next('.statement')
                .text("Wprowadź poprawny email!")
                .removeClass("success")
                .addClass("error");
        }
    });

    //Walidacja wiadomości
    $('#message').on('blur, keyup', function () {
        var input = $(this);
        var message = $(this).val();
        if (message) {
            input
                .removeClass("invalid")
                .addClass("valid");
            input
                .next('.statement')
                .text("Walidacja poprawna :)")
                .removeClass("error")
                .addClass("success");
        } else {
            input
                .removeClass("valid")
                .addClass("invalid");
            input
                .next('.statement')
                .text("Wiadomość nie może być pusta!")
                .removeClass("success")
                .addClass("error");
        }
    });


    // Po próbie wysłania formularza
    $('#submit').on('mouseover', function () {
        var name = $('#name');
        var email = $('#email');
        var message = $('#message');

        if (name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid')) {
            $(this).removeClass('disabled').removeAttr('title');
        }
    });
    $('#submit').on('click', function (event) {
        var name = $('#name');
        var email = $('#email');
        var message = $('#message');

        if (!(name.hasClass('valid') && email.hasClass('valid') && message.hasClass('valid'))) {
            event.preventDefault();
            // alert("Pomyślnie wysłano formularz.");
        } else {
            $(this).removeClass('disabled');
        }
    });
})
