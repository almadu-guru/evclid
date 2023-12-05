// Слайдер
const swiper = new Swiper('.swiper', {
	slidesPerView: 1,

  loop: true,

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  },

  // autoplay: {
  //   delay: 4000,
  // },
});

// Табы
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Аккордеон
new Accordion('.accordion');

// Бургер-меню
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  })
})

// Поиск по клику
document.addEventListener("DOMContentLoaded", function () {
  const headerBtn = document.querySelector(".header__img-btn");
  const searchWrap = document.querySelector(".search__wrap");
  const searchClose = document.querySelector(".search__btn-close");

  headerBtn.addEventListener("click", function () {
    searchWrap.classList.add("search-active");
  });

  searchClose.addEventListener("click", function () {
    searchWrap.classList.remove("search-active");
  document.querySelector('input').value = "";
  });
  });
