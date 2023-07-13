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

const swiper_popup01 = new Swiper(".wide .popup01", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup02 = new Swiper(".wide .popup02", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup04 = new Swiper(".wide .popup04", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup05 = new Swiper(".wide .popup05", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_popup06 = new Swiper(".wide .popup06", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

const swiper_popup07 = new Swiper(".wide .popup07", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

const swiper_popup08 = new Swiper(".wide .popup08", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

// MOBILE
const swiper_mpopup01 = new Swiper(".mobile_pop .popup01", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup02 = new Swiper(".mobile_pop .popup02", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup04 = new Swiper(".mobile_pop .popup04", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup05 = new Swiper(".mobile_pop .popup05", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup06 = new Swiper(".mobile_pop .popup06", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup07 = new Swiper(".mobile_pop .popup07", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
const swiper_mpopup08 = new Swiper(".mobile_pop .popup08", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});
var sect04_swiper = new Swiper(".sect04_mySwiper", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  loopAdditionalSlides: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

sect04_swiper.on("slideChange", function () {
  console.log("test for slide change!!");
  $(".sect04 ul li").removeClass("active");
  if (
    $(".swiper-pagination-bullet:first-child").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $(".sect04 ul li:first-child").addClass("active");
  }
  if (
    $(".swiper-pagination-bullet:nth-child(2)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $(".sect04 ul li:nth-child(2)").addClass("active");
  }
  if (
    $(".swiper-pagination-bullet:nth-child(3)").hasClass(
      "swiper-pagination-bullet-active"
    )
  ) {
    $(".sect04 ul li:nth-child(3)").addClass("active");
  }
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
