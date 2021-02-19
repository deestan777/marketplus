
<!-- accordeon  -->

$('.accordion').find('.accordion-toggle').click(function() {
    $(this).next().slideToggle('600');
    $(".accordion-content").not($(this).next()).slideUp('600');
});
$('.accordion-toggle').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
});

<!-- end accordeon -->



<!-- nav-burger -->

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header'),
        body = document.querySelector("body");

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
        body.classList.toggle('scroll-hidden');
    }

    $(".menu-item").click( function () {
        header.classList.toggle('menu-opened');
        body.classList.toggle('scroll-hidden');
    });
}());

<!-- end nav-burger -->

$(document).ready(function(){
    $(".nav").on("click",".scroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
