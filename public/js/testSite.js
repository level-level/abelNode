let buttonContrast = document.getElementById('screenshot-contrast');
let buttonZoom = document.getElementById('myswitch-scaling');
let removeHeaders = document.getElementById('remove-headers');
var h2 = document.getElementsByTagName("h2");
var h4 = document.getElementsByTagName("h4");
var imgTag = document.getElementsByTagName("img");
var spans = document.getElementsByTagName("span");
var a = document.getElementsByTagName("a");
let greyScale = document.getElementById('greyScale');
let greenWeak = document.getElementById('greenWeak');
let redGreen = document.getElementById('redGreen');
let resultbody = document.getElementById('resultbody');
let toggleEffect = document.getElementById('myswitch');
let navbar = document.getElementById('navbar-menu');
var width = Math.max(window.screen.width, window.innerWidth);
var navbarResults = document.querySelector('.checker-abel > .navbar ');
let score = document.querySelector('.c100 > span');



document.addEventListener("DOMContentLoaded", function (event) {

    $('.carousel').carousel({
        interval: 100000
    })


    var radios = document.getElementsByName('choice');
    radios[0].onclick = function () {
        document.body.classList.remove("blueYellow");
        document.body.classList.remove("redGreen");
        document.body.classList.add("greyscale");
    }
    radios[1].onclick = function () {
        document.body.classList.remove("greyscale");
        document.body.classList.remove("redGreen");
        document.body.classList.add("blueYellow");
    }
    radios[2].onclick = function () {
        document.body.classList.remove("greyscale");
        document.body.classList.remove("blueYellow");
        document.body.classList.add("redGreen");
    }

    radios[3].onclick = function () {
        document.body.classList.remove("greyscale");
        document.body.classList.remove("blueYellow");
        document.body.classList.remove("redGreen");
    }

    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;

        if (scroll < 30) {
            if (width > 720) {
                if (navbarResults) {
                    navbarResults.style.backgroundColor = "rgba(255,255,255,0.7)";
                }

            }
        } else {
            navbar.style.backgroundColor = "#fff";
        }

    });

    removeHeaders.addEventListener("click", function () {

        for (i = 0; i < h2.length; i++) {
            
            h2[i].classList.toggle('contentOff');
        }

        score.classList.toggle('contentOff');


        for (i = 0; i < imgTag.length; i++) {
            imgTag[i].classList.toggle('contentOff');
        }
        for (i = 0; i < h4.length; i++) {
            h4[i].classList.toggle('contentOff');
        }
        for (i = 0; i < a.length; i++) {
            a[i].classList.toggle('contentOff');
        }


    });


    buttonZoom.addEventListener("click", function () {
        document.body.classList.remove("blueYellow");
        resultbody.classList.add("bodyresult");
        document.body.classList.toggle("zoomOn");
    });
});