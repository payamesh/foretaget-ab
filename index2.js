$(document).ready(function() {
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

/* var slides = document.querySelectorAll('#slideVerksamhet .verksamhetBild');
console.log(slides)
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'verksamhetBild';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'verksamhetBild slideShowing';
} */
const mySiema = new Siema({
    selector: '.siema',
    duration: 1000,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: false,
    multipleDrag: false,
    threshold: 80,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
document.querySelector('.occupation__button-left').addEventListener('click', () => mySiema.prev());
document.querySelector('.occupation__button-right').addEventListener('click', () => mySiema.next());
setInterval(() => mySiema.next(), 10500)

$(document).ready(function() {
    var time = 2;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.slider');
    $slick.slick({





    });

    $bar = $('.slider-progress .progress');

    $('.slider-wrapper').on({
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

(function() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());
