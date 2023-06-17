var swiper = new Swiper(".sect03 .mySwiper", {
  spaceBetween: 60,
  centeredSlides: true,

  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: true,
  slidesPerView: "auto",
  roundLengths: true,
  // loopAdditionalSlides: 30,
});
const swiper_sect04 = new Swiper(".sect04_slide", {
  // Optional parameters
  //  direction: "horizontal",
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: true,
  slidesPerView: "auto",

  roundLengths: true,
});

const swiper_popup01 = new Swiper(".popup01", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup02 = new Swiper(".popup02", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup04 = new Swiper(".popup04", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup05 = new Swiper(".popup05", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup06 = new Swiper(".popup06", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
// var clickEvent = $('#ddkaBtn').on('click', function() {
//   let anything = $('#name').val();
//   // 'jdkjakdsg@akd.kr';

//   // validation check
//   if(anything !== dka) {

//     return;
//   }


//   //sending method process

//   anything.send(anything);
// });