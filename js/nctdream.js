$(function () {
  let deviceWidth = $(window).width();

  // 태블릿, 모바일 > 메뉴 버튼 클릭하면 내비게이션이 오른쪽에서 나타남
  $(".menu_icon").click(function () {
    $(".menu").animate({ right: 0 });
  });

  // 태블릿, 모바일 > 닫기 버튼 클릭하면 오른쪽으로 사라짐
  $(".close_icon").click(function () {
    $(".menu").animate({ right: "-100vw" });
  });

  // swiper
  var swiper = new Swiper(".sw1", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 3000,   // 시간 설정
    },
    breakpoints: {
      // 360 이상
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // 1024 이상
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      //1400 이상
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  var swiper = new Swiper(".sw2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 6000,   // 시간 설정
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    breakpoints: {
      // 360 이상
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // 1024 이상
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      //1400 이상
      1400: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  //iframe video swiper
  var swiper = new Swiper(".videoSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay: 8000,   // 시간 설정
      disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    breakpoints: {
      // 360 이상
      360: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // 1024 이상
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      //1400 이상
      1400: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
  });


  // Auto Scroll verical Swiper
  $(function () {
    var tickerLength = $('.container ul li').length;
    var tickerHeight = $('.container ul li').outerHeight();
    var currentIndex = 1; // 현재 인덱스 변수
    $('.container ul li:last-child').prependTo('.container ul');
    $('.container ul').css('marginTop', -tickerHeight);

    function moveTop() {
      $('.container ul').animate({
        top: -tickerHeight
      }, 600, function () {
        $('.container ul li:first-child').appendTo('.container ul');
        $('.container ul').css('top', '');

        currentIndex++;
        if (currentIndex > tickerLength) {
          currentIndex = 1;
        }

        var index = $('.container ul li:nth-child(2)').index(); // 다음에 표시될 li의 index 가져오기
        $('.container ul li p').css('color', '#707070'); // 모든 li의 텍스트 색상 회색으로 변경
        $('.container ul li span').css('color', '#707070'); // 모든 li의 span의 텍스트 색상 기본으로 변경
        $('.container ul li').eq(index).find('p').css('color', '#ffffff'); // 다음에 표시될 li의 텍스트 색상 흰색으로 변경
        $('.container ul li').eq(index).find('span').css('color', '#ffffff'); // 다음에 표시될 li의 span의 텍스트 색상 흰색으로 변경



        // 앨범 이미지 표시
        $('.s4_photo .album').hide(); // 모든 앨범 숨기기
        $('.s4_photo .album:nth-child(' + currentIndex + ')').show(); // currentIndex에 해당하는 앨범 표시
      });
    }

    setInterval(function () {
      moveTop();
    }, 3000);
  });

  // top 버튼
  $("#top").addClass("on");

  $("#top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  $("nav ul li a").click(function (e) {
    e.preventDefault();
    $(window).off("scroll", onScroll);

    let link = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(link).offset().top
    }, 500, function () {                   
      $(window).on("scroll", onScroll);
    });

    $("nav ul li a").removeClass("active");
    $("this").addClass("active");
  }); 


});
