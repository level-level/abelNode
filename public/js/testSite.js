let buttonContrast = document.getElementById('screenshot-contrast');
let buttonZoom = document.getElementById('myswitch-scaling');
let removeHeaders = document.getElementById('remove-headers');
var h2 = document.getElementsByTagName("h2");
var h1 = document.getElementsByTagName("h1");
var h3 = document.getElementsByTagName("h3");
var imgTag = document.getElementsByTagName("img");
var spans = document.getElementsByTagName("span");
var a = document.getElementsByTagName("a");
let greyScale = document.getElementById('greyScale');
let greenWeak = document.getElementById('greenWeak');
let fullbody = document.getElementById('fullbody');
let redGreen = document.getElementById('redGreen');
let resultbody = document.getElementById('resultbody');
let toggleEffect = document.getElementById('myswitch');
let navbar = document.getElementById('navbar-menu');
var width = Math.max(window.screen.width, window.innerWidth);
var navbarResults = document.querySelector('.navbar ');
let checker = document.getElementById('checker-container');
let score = document.querySelector('.c100 > span');
let myForm = document.getElementById('myForm');
var scroll = this.scrollY;
let imgScreenshot = document.querySelector('.wrapper-contrast-effect > .screenshot-site > .screenshot-contrast');
let imgScreenshotZoom = document.querySelector('.wrapper-contrast-effect > .screenshot-site > .screenshot-Zoom');
let kleurcontrastImg = document.querySelector('.verklaring-image > #kleurcontrastImage');


window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    if (scroll < 20) {
        if (width > 720) {
            if (checker) {
                navbarResults.style.backgroundColor = "rgba(255,255,255,0.7)";
            }
        }
    } else {
        navbar.style.backgroundColor = "#fff";
    }
});


window.addEventListener("DOMContentLoaded", function (event) {

    if (scroll < 30) {
        if (width > 720) {
            if (checker) {
                navbarResults.style.backgroundColor = "rgba(255,255,255,0.7)";
            } else {
                navbar.style.backgroundColor = "#fff";
            }
        }

    }

});
document.addEventListener("DOMContentLoaded", function (event) {
    var scroll = this.scrollY;
    // document.onkeydown = function (e) {
    //     switch (e.keyCode) {
    //         case 27:
    //         fullbody.classList.remove("zoomOn");
    //             break;
    //     }
    // };



    $('.carousel').carousel({
        interval: 100000
    })


    var radios = document.getElementsByName('choice');
    radios[0].onclick = function () {
        imgScreenshot.classList.remove("blueYellow");
        imgScreenshot.classList.remove("redGreen");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.remove("redGreen");
        kleurcontrastImg.classList.add("greyscale");
        imgScreenshot.classList.add("greyscale");
    }
    radios[1].onclick = function () {
        imgScreenshot.classList.remove("greyscale");
        imgScreenshot.classList.remove("redGreen");
        imgScreenshot.classList.add("blueYellow");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("redGreen");
        kleurcontrastImg.classList.add("blueYellow");
    }
    radios[2].onclick = function () {
        imgScreenshot.classList.remove("greyscale");
        imgScreenshot.classList.remove("blueYellow");
        imgScreenshot.classList.add("redGreen");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.add("redGreen");
    }

    radios[3].onclick = function () {
        imgScreenshot.classList.remove("greyscale");
        imgScreenshot.classList.remove("blueYellow");
        imgScreenshot.classList.remove("redGreen");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.remove("redGreen");
    }



    removeHeaders.addEventListener("click", function () {

        for (i = 0; i < h2.length; i++) {

            h2[i].classList.toggle('contentOff');
        }

        for (i = 0; i < h1.length; i++) {

            h1[i].classList.toggle('contentOff');
        }

        score.classList.toggle('contentOff');


        for (i = 0; i < imgTag.length; i++) {
            imgTag[i].classList.toggle('contentOff');
        }
        for (i = 0; i < h3.length; i++) {
            h3[i].classList.toggle('contentOff');
        }
        for (i = 0; i < a.length; i++) {
            a[i].classList.toggle('contentOff');
        }


    });




    buttonZoom.addEventListener("click", function () {
        document.body.classList.remove("blueYellow");
        resultbody.classList.add("bodyresult");
        imgScreenshotZoom.classList.toggle("zoomOn");
    });
});