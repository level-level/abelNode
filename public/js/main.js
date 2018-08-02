var testButton = document.querySelector('#urlForm > .form-group > button');
var loader = document.getElementById('wrapper-loader');
let abelCheck = document.getElementById('abel-check');
let loadingText = document.getElementById('loadingText');

document.addEventListener("DOMContentLoaded", function (event) {

    

    testButton.addEventListener('click', showLoading, false);
});

function showLoading() {
   
    setInterval(addDot, 1000);
    abelCheck.remove();
    loader.style.display = 'block';
}

function addDot() {
    if(loadingText.textContent.indexOf("..") >= 0){
        setTimeout(function(){
            loadingText.textContent = "Een moment geduld uw website wordt getest";

         }, 500);
       
    }
    loadingText.textContent += ".";
}
