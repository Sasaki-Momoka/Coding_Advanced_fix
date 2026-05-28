


const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidePerview: 1,

  breakpoints: {
    800: {
      slidesPerView: 2,
  },

765: {
      slidesPerView: 1,
     }
  },

  autoplay: {
    delay: 3000,  // 3秒ごとにスライドを自動切り替え
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
 // scrollbar: {
   // el: '.swiper-scrollbar',
  //},
});

$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});