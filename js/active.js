let line = document.querySelector(".sub_line");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (613 > value) {
    line.style.animation = "disappear 2s ease-out";
  }
  if (613 < value) {
    line.style.animation = "slide 3s ease-out ";
  }
  // if (value > 1250) {
  //   line.style.animation = "disappear 1s ease-out forwards";
  // } else {
  //   line.style.animation = "slide 1s ease-out";
  // }
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

  if (4310 > value) {
    sect05left.style.animation = "out03 1s ease-out forwards";
  }
  if (4310 < value) {
    sect05left.style.animation = "left02 1s ease-out forwards";
  }
});


$('.shadow').mouseup(function (e) {
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



$(".logo").click(function () {
  $(".popup_box02").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".hobak").click(function () {
  $(".popup_box").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});


$(".onthestreet").click(function () {
  $(".popupVideo").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".productpage").click(function () {
  $(".popup_box03").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".sakari").click(function () {
  $(".popup_box04").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".dior").click(function () {
  $(".popup_box05").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});

$(".leaflet").click(function () {
  $(".popup_box06").fadeIn();
  $(".shadow").show();
  $("body").addClass("notScroll");
});


$(".hamburger").click(function () {
  $(this).addClass('active')
  $(".nav_cross").addClass("active")
  $(".side_nav").stop().slideDown()

});
$(".nav_cross").click(function () {
  $(this).removeClass('active')
  $(".hamburger").removeClass("active")
  $(".side_nav").stop().slideUp()

});

// $(".hamburger").click(function () {
//   if ($("header .hamburger.active").hasClass("active") == true) {
//     $("header .hamburger.active").removeClass("active");
//   } else {
//     $("header .langue_ko").addClass("active");
//     // $(this).addClass("active");
//   }
// });



$(".langue_arr").click(function () {
  if ($("header .langue_ko.active").hasClass("active") == true) {
    $("header .langue_ko.active").removeClass("active");
    $(this).removeClass("active");
  } else {
    $("header .langue_ko").addClass("active");
    $(this).addClass("active");
  }
});


// $(".popupVideo a").click(function() {
//   $(".video-popup").addClass("reveal"),
//   $(".video-popup .video-wrapper").remove(),
//   $(".video-popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + $(this).data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>")
// }),
// $(".video-popup-closer").click(function() {
//   $(".video-popup .video-wrapper").remove(),
//   $(".video-popup").removeClass("reveal")
// });

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

// $(".hobak")
//   .unbind("click")
//   .bind("click", function (e) {
//     target = $(e.target);
//     var p = $(target).offset();
//     vardivTop = p.top - 25;
//   });
// function popupShow() {
//   $(".popup_box").show();
//   showPopBlur(true);
// }

// function popupHide() {
//   $(".popup_box").hide();
//   showPopBlur(false);
// }

// function showPopBlur(chk){
//   if(chk == false)
//       $('.content').css({"opacity" : "1","pointer-events":"auto"});
//   else
//       $('.content').css({"opacity" : "0.3","pointer-events":"none"});
// }
// $(".icon").click(function () {
//   if ($("header .search_text input.active").hasClass("active") == true) {
//     $("header .search_text input.active").removeClass("active");
//   } else {
//     $("header .search_text input").addClass("active");
//   }
// });
// $(".icon").click(function () {
//   if ($("header .search_text input.active").hasClass("active") == true) {
//     $("header .search_text input.active").removeClass("active");
//   } else {
//     $("header .search_text input").addClass("active");
//   }
// });
// if (value > 1345) {
//   if ($(".sub_line.active").hasClass("active") == true) {
//     $(".sub_line.active").removeClass("active");
//   } else {
//     $(".sub_line").addClass("active");
//   }
// }
