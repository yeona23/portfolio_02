var swiperTopNum = $(".swiper").find(".swiper");
var swiperSubNum = $(".gallery-thumbs").find(".gallery-thumbs");
const swiper = new Swiper(".swiper", {
  // Optional parameters
  //  direction: "horizontal",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: true,
  freemode: true,

  slidesPerView: "auto",
  spaceBetween: 30,

  roundLengths: true,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
const swiper_sect04 = new Swiper(".sect04_slide", {
  // Optional parameters
  //  direction: "horizontal",
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 2,
  scrollbar: {
    el: ".swiper-scrollbar",
    clickable: true,
  },
  slideToClickedSlide: true,
  keyboard: true,
  freemode: true,

  slidesPerView: "며",

  roundLengths: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var galleryTop = new Swiper('.gallery-top', {
//   	spaceBetween: 10,	//슬라이드 간격
//       pagination: {	//페이징 사용자 설정
//       	el: ".swiper-pagination",	//페이징 태그 클래스 설정
// 		clickable: true,	//버튼 클릭 여부
// 		type : 'bullets',	//페이징 타입 설정(종류: bullets, fraction, progressbar)
// 		// Bullet Numbering 설정
//       	renderBullet: function (index, className) {
//       		return '<span class="' + className + '">' + (index + 1) + "</span>";
//       	},
// 	},
// 	loop: true,	//슬라이드 반복
// 	loopedSlides: swiperTopNum.length	//loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
//   });

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0, //슬라이드 간격
  navigation: {
    //네비게이션 사용자 설정
    nextEl: ".swiper-button-next", //다음 버튼 클래스 설정
    prevEl: ".swiper-button-prev", //이전 버튼 클래스 설정
  },
  centeredSlides: true, //슬라이드 중앙 배치
  slidesPerView: "auto", //한번에 보여지는 슬라이드 개수(auto 가능)
  touchRatio: 0.2, //드래그 비율 설정(기본값: 1, 기본값을 0으로 설정할 경우 드래그 불가능)
  slideToClickedSlide: true, //슬라이드가 여러개 나열되어 있을 경우, 클릭 시 해당 슬라이드 위치로 이동
  loop: true, //슬라이드 반복
  loopedSlides: swiperSubNum.length, //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 4 표현 가능
});
