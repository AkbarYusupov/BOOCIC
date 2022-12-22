var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var element = document.getElementById('selector');
var maskOptions = {
  mask: '+998-00-000-0000'
};
var mask = IMask(element, maskOptions);