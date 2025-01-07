// Слайдер Проекты

const sliderProjects = document.querySelector('.section-projects__swiper');

let swiper;

function projectsSlider() {
  // Инициализация слайдера при ширине >= 769 пикселей и если слайдер еще не инициализирован
  if (window.innerWidth >= 769 && sliderProjects.dataset.mobile === 'false') {
    swiper = new Swiper(sliderProjects, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      navigation: {
        nextEl: ".section-projects__btn-right",
        prevEl: ".section-projects__btn-left"
      },
      breakpoints: {
        576: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
        992: {
          spaceBetween: 40,
          slidesPerView: 2.5,
        },
      },
    });

    sliderProjects.dataset.mobile = 'true';
  }

  // Уничтожение слайдера при ширине < 769 пикселей и если слайдер был инициализирован
  if (window.innerWidth < 769 && sliderProjects.dataset.mobile === 'true') {
    swiper.destroy();
    sliderProjects.dataset.mobile = 'false';
  }
}

// Первичная инициализация слайдера
projectsSlider();

// Обновление состояния слайдера при изменении размера окна
window.addEventListener('resize', projectsSlider);



// Бургер-меню 

document.querySelector(".header-burger").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.add("active");
});

document.querySelector(".header-mobile__burger-nav").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
}); 

document.querySelector(".header-mobile__burger-close").addEventListener("click", function() {
  document.querySelector(".header-mobile__burger-menu").classList.remove("active");
}); 