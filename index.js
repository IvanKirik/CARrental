$(document).ready(function () {

    let carousel = $('.your-class');
    carousel.slick({
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('a.menu-item').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 1000,
            easing: 'swing'
        });
        return false;
    });

    $('a.up').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, {
            duration: 1000,
            easing: 'swing'
        });
        return false;
    });



    let arrowsContainer = $('.arrows');
    $('.responsive').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        appendArrows: arrowsContainer,
        appendDots: arrowsContainer,
        responsive: [
            {
                breakpoint: 538,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ],
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();


    let btn = $('#btn-form');
    let pop = $('#pop-up');
    let btnRequest = $('#button-request');
    let inputName = $('#input-name');
    let inputTel = $('#input-tel');
    let inputMail = $('#input-mail');
    let inputAuto = $('#input-auto');
    let inputPoint = $('#input-point');
    let inputTime = $('.input-time');
    let form = $('#form');
    let btnRent = $('.button-rent');
    let popThanks = $('.pop-up-thanks');
    let popThanksText = $('.pop-up-thanks-text');
    let textMessage = $('#text-message');
    let btnCall = $('#button-calling');
    let popCall = $('.pop-up-calling');
    let formCall = $('.form-calling-input');
    let error = $('.error');
    let btnCalling = $('#calling');
    let inputCallingName = $('#name-calling');
    let inputCallingTel = $('#tel-calling');
    let burger = $('#burger');
    let menu = $('.menu');
    let close = $('.close');
    let closeMenu = $('.close-menu');
    let closeFormCalling = $('.close-form-calling');
    let btnUp = $('.up');

    $(function () {
        inputTel.mask("+375 29 999 99 99");
    });

    $(function () {
        inputCallingTel.mask("+375 29 999 99 99");
    });

    burger.click(function () {
        menu.addClass('open-menu')
        burger.css({
            display: 'none',
        })
    })



    closeMenu.click(function () {
        menu.removeClass('open-menu')
        burger.css({
            display: 'block',
        })
    })

    closeFormCalling.click(function () {
        popCall.hide();
    })

    btn.click(function () {
        pop.css({
            display: 'flex',
        })
    })


    $(document).mouseup(function (e) {
        if (!form.is(e.target)
            && form.has(e.target).length === 0) {
            pop.hide();

            inputAuto.next().hide();
            inputAuto.css({
                border: '1px solid #454545',
            });
            inputAuto.next().hide();
            inputAuto.css({
                border: '1px solid #454545',
            });

            inputTime.next().hide();
            inputTime.css({
                border: '1px solid #454545',
            });
            inputTime.next().hide();
            inputTime.css({
                border: '1px solid #454545',
            });

            inputTel.next().hide();
            inputTel.css({
                border: '1px solid #454545',
            });
            inputTel.next().hide();
            inputTel.css({
                border: '1px solid #454545',
            });

            inputName.next().hide();
            inputName.css({
                border: '1px solid #454545',
            });
            inputName.next().hide();
            inputName.css({
                border: '1px solid #454545',
            });

            inputPoint.next().hide();
            inputPoint.css({
                border: '1px solid #454545',
            });
            inputPoint.next().hide();
            inputPoint.css({
                border: '1px solid #454545',
            });

            inputMail.next().hide();
            inputMail.css({
                border: '1px solid #454545',
            });
            inputMail.next().hide();
            inputMail.css({
                border: '1px solid #454545',
            });
        }

    })

    close.click(function () {
        pop.css({
            display: 'none',
        })

    })

    $(document).mouseup(function (e) {
        if (!popThanksText.is(e.target)
            && popThanksText.has(e.target).length === 0) {
            popThanks.hide();
        }
    });

    $(document).mouseup(function (e) {
        if (!formCall.is(e.target)
            && formCall.has(e.target).length === 0) {
            popCall.hide();
            inputCallingTel.removeClass('placeholder-red');
            inputCallingTel.css({
                border: '1px solid #454545',
            })
            inputCallingName.removeClass('placeholder-red');
            inputCallingName.css({
                border: '1px solid #454545',
            })
        }
    });

    btnCalling.click(function () {
        popCall.css({
            display: 'flex',
        })
    })

    btnCall.click(function () {
        let hasError = false;

        error.hide();

        if (!inputCallingName.val()) {
            inputCallingName.addClass('placeholder-red');
            inputCallingName.css({
                border: '1px solid red',
            })
            hasError = true;
        } else {
            inputCallingName.removeClass('placeholder-red');
            inputCallingName.css({
                border: '1px solid #454545',
            })
        }

        if (!inputCallingTel.val()) {
            inputCallingTel.addClass('placeholder-red');
            inputCallingTel.css({
                border: '1px solid red',
            })
            hasError = true;
        } else {
            inputCallingTel.removeClass('placeholder-red');
            inputCallingTel.css({
                border: '1px solid #454545',
            })
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: inputCallingName.val()},
            })
                .done(function (message) {
                    if (message.success) {
                        popCall.hide();
                        popThanks.css({
                            display: 'flex',
                        });
                        inputCallingName.val('');
                        inputCallingTel.val('');
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    }
                });
        }

    })

    btnRequest.click(function () {


        let hasError = false;

        error.hide();


        if (!inputAuto.val()) {
            inputAuto.next().show();
            inputAuto.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputAuto.css({
                border: '1px solid #454545',
            });
        }

        if (!inputTime.val()) {
            inputTime.next().show();
            inputTime.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputTime.css({
                border: '1px solid #454545',
            });
        }

        if (!inputPoint.val()) {
            inputPoint.next().show();
            inputPoint.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputPoint.css({
                border: '1px solid #454545',
            });
        }

        if (!inputName.val()) {
            inputName.next().show();
            inputName.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputName.css({
                border: '1px solid #454545',
            });
        }

        if (!inputTel.val()) {
            inputTel.next().show();
            inputTel.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputTel.css({
                border: '1px solid #454545',
            });
        }

        if (!inputMail.val()) {
            inputMail.next().show();
            inputMail.css({
                border: '1px solid red',
            });
            hasError = true;
        } else {
            inputMail.css({
                border: '1px solid #454545',
            });
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: inputName.val()},
            })
                .done(function (message) {
                    if (message.success) {
                        inputAuto.val('');
                        inputPoint.val('');
                        inputTime.val('');
                        inputTel.val('');
                        inputMail.val('');
                        inputName.val('');
                        textMessage.val('');
                        pop.hide();
                        popThanks.css({
                            display: 'flex',
                        });
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    }
                });
        }

    })

    let index = 0;
    let carParcText = $('.car-park-action-tittle');

    carousel.on('afterChange', function (e, s, currentSlideIndex) {

        if (currentSlideIndex === 1) {
            index = 1;
             carParcText.html('<p>Lamborghini Aventador J<p><p>Стоимость аренды в сутки $1000</p>');
        }
        if (currentSlideIndex === 0) {
            index = 0;
            carParcText.html('<p>Lamborghini Aventador SVJ<p><p>Стоимость аренды в сутки $1280</p>');
        }
        if (currentSlideIndex === 2) {
            index = 2;
            carParcText.html('<p>Lamborghini Aventador LP 740 4S<p><p>Стоимость аренды в сутки $1360</p>');
        }
        if (currentSlideIndex === 3) {
            index = 3;
            carParcText.html('<p>Lamborghini Aventador LP750 SuperVeloce<p><p>Стоимость аренды в сутки $1440</p>');
        }
    });

    btnRent.click(function () {
        pop.css({
            display: 'flex',
        })
        if (index === 0) {
            inputAuto.val(index)
        }
        if (index === 1) {
            inputAuto.val(index)
        }
        if (index === 2) {
            inputAuto.val(index)
        }
        if (index === 3) {
            inputAuto.val(index)
        }

    })

});



