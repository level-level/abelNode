var testButton = document.querySelector('#urlForm > .form-group > button');
var loader = document.getElementById('wrapper-loader');
let abelCheck = document.getElementById('abel-check');
let loadingText = document.getElementById('loadingText');
let urlInput = document.getElementById('url');

document.addEventListener("DOMContentLoaded", function (event) {

    testButton.addEventListener('click', showLoading, false);


});

function showLoading(e) {

    // e.preventDefault();
    // $.ajax({
    //     url: 'http://localhost:8080/accessibilityCheck',
    //     type: "GET",
    //     dataType: "json",
    //     success: function (data) {
    //         if (data == true) {
    //             setInterval(addDot, 1000);
    //             abelCheck.remove();
    //             loader.style.display = 'block';
    //         }
    //     }

    // });


    setInterval(addDot, 1000);
    abelCheck.remove();
    loader.style.display = 'block';
}

function addDot() {
    if (loadingText.textContent.indexOf("..") >= 0) {
        setTimeout(function () {
            loadingText.textContent = "Een moment geduld uw website wordt getest";

        }, 500);

    }
    loadingText.textContent += ".";
}
