const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 1000, 
    disableOnInteraction: false, 
  },

 breakpoints: {
        0:{
          slidesPerView: 1
        },
        768:{
          slidesPerView: 2
        },
        1024:{
          slidesPerView: 3
        }
 }
});