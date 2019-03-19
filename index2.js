 /*$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top //no need of parseInt here
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
}); 

 var slides = document.querySelectorAll('.siema .occupation__img');
console.log(slides)
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'occupation__img';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'occupation__img slideShowing';
}

$(document).ready(function() {
    const mySiema = new Siema({
        selector: '.siema',
        duration: 1000,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 1,
        draggable: false,
        multipleDrag: false,
        threshold: 10,
        loop: true,
        rtl: false,
        onInit: () => {},
        onChange: () => {},
    });
    document.querySelector('.occupation__button-left').addEventListener('click', () => mySiema.prev());
    document.querySelector('.occupation__button-right').addEventListener('click', () => mySiema.next());
    setInterval(() => mySiema.next(), 10500) */
    $(document).ready(function() {

    var time = 2;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.slider-progress');
    $slick.slick({





    });

    $bar = $('.slider-progress .progress');

    $('.sliderPosition').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 50);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }


    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

});


jQuery(document).ready(function ($) {

    $('#slider-progress').ready(function(){
      setInterval(function () {
          moveRight();
      }, 10500);
    });
    
      var slideCount = $('#sliderPosition ul .occupation__img').length;
      var slideWidth = $('#sliderPosition ul .occupation__img').width();
      var slideHeight = $('#sliderPosition ul .occupation__img').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#sliderPosition').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul img:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#sliderPosition ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#sliderPosition ul img:last-child').prependTo('#sliderPosition ul');
              $('#sliderPosition ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#sliderPosition ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#sliderPosition ul img:first-child').appendTo('#sliderPosition ul');
              $('#sliderPosition ul').css('left', '');
          });
      };
  
      $('.occupation__button-left').click(function () {
          moveLeft();
      });
  
      $('.occupation__button-right').click(function () {
          moveRight();
      });
  
  });    


  //imagebuttons
let textToChange = document.getElementsByClassName('testimones__p')[0];
let img3 = document.getElementsByClassName('bullet__button3');
let img1 = document.getElementsByClassName('bullet__button')[0];
let img2 = document.getElementsByClassName('bullet__button2');





function changeText() {
    document.getElementById('bullet__button').style.backgroundColor = '#0075c8';
    document.getElementById('bullet__button3').style.backgroundColor = 'lightgrey';
    document.getElementById('bullet__button2').style.backgroundColor = 'lightgrey';


    textToChange.innerHTML = "Vad säger våra kunder? <br> blablablab lablabla blablablablab lablablabla blablabalbal bablabla djaiosdja djaoisjda blabal"

}

function changeText2() {
    document.getElementById('bullet__button').style.backgroundColor = 'lightgrey';
    document.getElementById('bullet__button3').style.backgroundColor = 'lightgrey';
    document.getElementById('bullet__button2').style.backgroundColor = '#0075c8'


    textToChange.innerHTML = "Vad säger våra kunder? <br> Jättebra kommunikation!!<br> //Nöjd Kund"

}

function changeText3() {
    document.getElementById('bullet__button').style.backgroundColor = 'lightgrey';
    document.getElementById('bullet__button3').style.backgroundColor = '#0075c8';
    document.getElementById('bullet__button2').style.backgroundColor = 'lightgrey';


    textToChange.innerHTML = "Vad säger våra kunder? <br> Utmärkt service, rekommenderas starkt. Tack för er hjälp.<br> //Fortfarande fri"

}