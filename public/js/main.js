var testButton = document.querySelector('#urlForm > .form-group > button');
var loader = document.getElementById('wrapper-loader');
let abelCheck = document.getElementById('abel-check');
let loadingText = document.getElementById('loadingText');
let urlInput = document.getElementById('url');

document.addEventListener("DOMContentLoaded", function (event) {

    testButton.addEventListener('click', showLoading, false);


});

function showLoading() {

    //   $("form").submit(function (e) {
    //     e.preventDefault();
    //     console.log("Hello world");
    //     var $form = $(this);
    //     var url = "/";
    //     $.ajax({
    //         url: url,
    //         type: "POST",
    //         dataType: "json",
    //         success: function (data) {
    //             console.log("Hello world");
    //         }

    //     });

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
