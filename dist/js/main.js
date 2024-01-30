
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
    }
})
$('.commercia-btn').click(function () {
    $('.modal-wrapper').addClass('active');

})
$('.window-close').click(function () {
    $('.modal-wrapper').removeClass('active');
})

$('.burger').click(function () {
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
    console.log(Event.terget)
    console.log(this);
})
$('.close').click(function () {
    $('.nav').toggleClass('active');
    $('.close').removeClass('active');
})