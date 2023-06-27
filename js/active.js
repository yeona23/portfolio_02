$(window).scroll(function () {
  let Cscroll = $(this).scrollTop();
  $(".scroll").text(Cscroll);

  //if(조건){조건이 참값일때 실행문}
  //if(조건){조건이 참값일때 실행문}else{조건이 거짓값일때 실행문 }

  if (Cscroll >= $(".sect02").offset().top - 500) {
    $(".main_nav li:nth-child(1)")
      .addClass("show")
      .siblings()
      .removeClass("show");
    $(".sect02_title").addClass("active");
    $("main .sect02 .introduce div div").addClass("active");
  } else {
    $(".sect02_title").removeClass("active");
    $("main .sect02 .introduce div div").removeClass("active");
  }
  if (Cscroll >= $(".sect03").offset().top - 350) {
    $(".main_nav li:nth-child(2)")
      .addClass("show")
      .siblings()
      .removeClass("show");
    $(".sect03_thumbnailbox").addClass("active");
  } else {
    $(".sect03_thumbnailbox").removeClass("active");
  }
  if (Cscroll >= $(".sect04").offset().top - 350) {
    $(".main_nav li:nth-child(3)")
      .addClass("show")
      .siblings()
      .removeClass("show");
    $("main .scroll_window").addClass("active");
  } else {
    $("main .scroll_window").removeClass("active");
  }

  if (Cscroll >= $(".sect05").offset().top - 200) {
    $(".main_nav li:nth-child(4)")
      .addClass("show")
      .siblings()
      .removeClass("show");
    $(".sect05_body").addClass("active");
  } else {
    $(".sect05_body").removeClass("active");
  }
});

let left = document.querySelector(".bg_circle03");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (2351 > value) {
    left.style.animation = "out 1s ease-out forwards";
  }
  if (2351 < value) {
    left.style.animation = "left01 1s ease-out forwards";
  }
});

let right = document.querySelector(".bg_circle04");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (3320 > value) {
    right.style.animation = "out02 1s ease-out forwards";
  }
  if (3320 < value) {
    right.style.animation = "right01 1s ease-out forwards";
  }
});

let sect05left = document.querySelector(".bg_circle05_box");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (4225 > value) {
    sect05left.style.animation = "out03 1s ease-out forwards";
  }
  if (4225 < value) {
    sect05left.style.animation = "left02 1s ease-out forwards";
  }
});

$(".shadow").mouseup(function (e) {
  if ($(".popup_box").has(e.target).length === 0) {
    $(".popup_box").fadeOut();
    $(".shadow").fadeOut();
    $("body").removeClass("notScroll");
  }
  if ($(".popupVideo").has(e.target).length === 0) {
    $(".popupVideo").fadeOut();
  }
  if ($(".popup_box02").has(e.target).length === 0) {
    $(".popup_box02").fadeOut();
  }
  if ($(".popup_box03").has(e.target).length === 0) {
    $(".popup_box03").fadeOut();
  }
  if ($(".popup_box04").has(e.target).length === 0) {
    $(".popup_box04").fadeOut();
  }
  if ($(".popup_box05").has(e.target).length === 0) {
    $(".popup_box05").fadeOut();
  }
  if ($(".popup_box06").has(e.target).length === 0) {
    $(".popup_box06").fadeOut();
  }
});

$(".btn_close").click(function () {
  $(".popup_box").fadeOut();
  $(".popup_box02").fadeOut();
  $(".popup_box03").fadeOut();
  $(".popup_box04").fadeOut();
  $(".popup_box05").fadeOut();
  $(".popup_box06").fadeOut();

  $(".shadow").hide();
  $("body").removeClass("notScroll");
});

$(".sect03_thumbnailbox .logo").click(function () {
  $(".wide .popup_box02").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .hobak").click(function () {
  $(".wide .popup_box").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .onthestreet").click(function () {
  $(".wide .popupVideo").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .productpage").click(function () {
  $(".wide .popup_box03").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .sakari").click(function () {
  $(".wide .popup_box04").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .dior").click(function () {
  $(".wide .popup_box05").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox .leaflet").click(function () {
  $(".wide .popup_box06").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

// MOBILE

$(".sect03_thumbnailbox04 .logo").click(function () {
  $(".mobile_pop .popup_box02").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .hobak").click(function () {
  $(".mobile_pop .popup_box").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .onthestreet").click(function () {
  $(".mobile_pop .popupVideo").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .productpage").click(function () {
  $(".mobile_pop .popup_box03").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .sakari").click(function () {
  $(".mobile_pop .popup_box04").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .dior").click(function () {
  $(".mobile_pop .popup_box05").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sect03_thumbnailbox04 .leaflet").click(function () {
  $(".mobile_pop .popup_box06").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".hamburger").click(function () {
  $(this).addClass("active");
  $(".nav_cross").addClass("active");
  $(".side_nav").stop().slideDown();
});
$(".nav_cross").click(function () {
  $(this).removeClass("active");
  $(".hamburger").removeClass("active");
  $(".side_nav").stop().slideUp();
});

$(".langue_arr").click(function () {
  if ($("header .langue_ko.active").hasClass("active") == true) {
    $("header .langue_ko.active").removeClass("active");
    $(this).removeClass("active");
  } else {
    $("header .langue_ko").addClass("active");
    $(this).addClass("active");
  }
});

$("header ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// $(".sect04 ul li").click(function () {
//   $(this).addClass("active").siblings().removeClass("active");
// });

// $(".sec04 ul li:first-child").click(function () {
//   $(this).css({ background: "red" });
//   // $(".scroll_window01").addClass("show").sibling().removeClass("show");
// });
// $(".sec04 ul li:nth-child(2)").click(function () {
//   $(".scroll_window02").addClass("show").sibling().removeClass("show");
// });
$(".sect04 ul li").click(function () {
  let target = $(this).index();
  // alert(target);

  $(this).addClass("active").siblings().removeClass("active");
  $(this)
    .parents()
    .parents()
    .siblings(".sect04_roll")
    .children()
    .eq(target)
    .addClass("show")
    .siblings()
    .removeClass("show");
});

//스크롤 막기
$(".popup_box").on("scroll touchmove mousewheel", function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
});
function closePopup(flag) {
  $(".popup").hide(); //팝업을 닫기다.
  $(".shadow").hide(); // 배경 어둡게 삭제
  //스크롤 막기 해제
  $(".popup_box").off("scroll touchmove mousewheel");
}

$(window)
  .resize(function () {
    if (window.innerWidth < 680) {
      // 다바이스 크기가 720이상일때
      /* 스크립트내용*/
      $(window).scroll(function () {
        let Cscroll = $(this).scrollTop();
        $(".scroll").text(Cscroll);

        if (Cscroll >= $(".sect05").offset().top - 300) {
          $(".main_nav li:nth-child(4)")
            .addClass("show")
            .siblings()
            .removeClass("show");
          $(".sect05_body").addClass("active");
        } else {
          $(".sect05_body").removeClass("active");
        }
      });
    } else {
      /* 스크립트내용*/
    }
  })
  .resize();
