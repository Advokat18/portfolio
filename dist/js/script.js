const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeMenuLink1 = document.getElementById('qw1'),
      closeMenuLink2 = document.getElementById('qw2'),
      closeMenuLink3 = document.getElementById('qw3'),
      closeMenuLink4 = document.getElementById('qw4'),
      closeMenuLink5 = document.getElementById('qw5'),
      closeMenuLink6 = document.getElementById('qw6'),
      closeMenuOverlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink1.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink2.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink3.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink4.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink5.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuLink6.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeMenuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// smooth scroll and page up
$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});
