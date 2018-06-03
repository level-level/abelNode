
var testButton = document.querySelector('#urlForm > .form-group > button');
var loader = document.getElementById('wrapper-loader');
document.addEventListener("DOMContentLoaded", function (event) {

    testButton.addEventListener('click', showLoading, false);
});

function showLoading() {
    loader.style.display = 'block';
}
