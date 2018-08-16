let buttonContrast = document.getElementById('screenshot-contrast');
let buttonZoom = document.getElementById('myswitch-scaling');
let buttonZoomMobile = document.getElementById('myswitch-scalingMobile');
let removeHeaders = document.getElementById('remove-headers');
let HeaderRemoverMobile = document.getElementById('header-remover');
var h2 = document.getElementsByTagName("h2");
var h1 = document.getElementsByTagName("h1");
var h3 = document.getElementsByTagName("h3");
var imgTag = document.getElementsByTagName("img");
let arrowLeft = document.getElementById('arrowLeft');
var spans = document.getElementsByTagName("span");
var a = document.getElementsByTagName("a");
let fullbody = document.getElementById('fullbody');
let resultbody = document.getElementById('resultbody');
let toggleEffect = document.getElementById('myswitch');
let navbar = document.getElementById('navbar-menu');
var width = Math.max(window.screen.width, window.innerWidth);
var navbarResults = document.querySelector('.navbar ');
let checker = document.getElementById('checker-container');
let score = document.querySelector('.c100 > span');
var scroll = this.scrollY;
let MobileContrast = document.getElementById('mobile-Contrast');
let screenshotZoomMobile = document.getElementById('screenshot-ZoomMobile');
let screenshotZoomDesktop = document.getElementById('screenshot-ZoomDesktop');
let desktopContrast = document.getElementById('desktop-Contrast');
let kleurcontrastImg = document.querySelector('.verklaring-image > #kleurcontrastImageDesktop');
let kleurcontrastImgMobile = document.querySelector('.verklaring-image > #kleurcontrastImage');

let removeContent = function contentRemover() {

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
}



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


    removeHeaders.addEventListener("click", removeContent);
    HeaderRemoverMobile.addEventListener("click", removeContent);

    var scroll = this.scrollY;



    $('.carousel').carousel({
        interval: 9999999999
    })

    var radiosMobile = document.getElementsByClassName('choiceMobile');
    radiosMobile[0].onclick = function () {
        MobileContrast.classList.remove("blueYellow");
        MobileContrast.classList.remove("redGreen");
        kleurcontrastImgMobile.classList.remove("blueYellow");
        kleurcontrastImgMobile.classList.remove("redGreen");
        kleurcontrastImgMobile.classList.add("greyscale");
        MobileContrast.classList.add("greyscale");
    }
    radiosMobile[1].onclick = function () {
        MobileContrast.classList.remove("greyscale");
        MobileContrast.classList.remove("redGreen");
        MobileContrast.classList.add("blueYellow");
        kleurcontrastImgMobile.classList.remove("greyscale");
        kleurcontrastImgMobile.classList.remove("redGreen");
        kleurcontrastImgMobile.classList.add("blueYellow");
    }
    radiosMobile[2].onclick = function () {
        MobileContrast.classList.remove("greyscale");
        MobileContrast.classList.remove("blueYellow");
        MobileContrast.classList.add("redGreen");
        kleurcontrastImgMobile.classList.remove("greyscale");
        kleurcontrastImgMobile.classList.remove("blueYellow");
        kleurcontrastImgMobile.classList.add("redGreen");
    }

    radiosMobile[3].onclick = function () {
        MobileContrast.classList.remove("greyscale");
        MobileContrast.classList.remove("blueYellow");
        MobileContrast.classList.remove("redGreen");
        kleurcontrastImgMobile.classList.remove("greyscale");
        kleurcontrastImgMobile.classList.remove("blueYellow");
        kleurcontrastImgMobile.classList.remove("redGreen");
    }


    var radios = document.getElementsByClassName('choice');
    radios[0].onclick = function () {
        desktopContrast.classList.remove("blueYellow");
        desktopContrast.classList.remove("redGreen");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.remove("redGreen");
        kleurcontrastImg.classList.add("greyscale");
        desktopContrast.classList.add("greyscale");
    }
    radios[1].onclick = function () {
        desktopContrast.classList.remove("greyscale");
        desktopContrast.classList.remove("redGreen");
        desktopContrast.classList.add("blueYellow");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("redGreen");
        kleurcontrastImg.classList.add("blueYellow");
    }
    radios[2].onclick = function () {
        desktopContrast.classList.remove("greyscale");
        desktopContrast.classList.remove("blueYellow");
        desktopContrast.classList.add("redGreen");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.add("redGreen");
    }

    radios[3].onclick = function () {
        desktopContrast.classList.remove("greyscale");
        desktopContrast.classList.remove("blueYellow");
        desktopContrast.classList.remove("redGreen");
        kleurcontrastImg.classList.remove("greyscale");
        kleurcontrastImg.classList.remove("blueYellow");
        kleurcontrastImg.classList.remove("redGreen");
    }


    buttonZoom.addEventListener("click", function () {
        document.body.classList.remove("blueYellow");
        resultbody.classList.add("bodyresult");
        screenshotZoomDesktop.classList.toggle("zoomOn");
    });

    buttonZoomMobile.addEventListener("click", function () {
        document.body.classList.remove("blueYellow");
        resultbody.classList.add("bodyresult");
        screenshotZoomMobile.classList.toggle("zoomOn");
    });
});