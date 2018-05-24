document.addEventListener("DOMContentLoaded", function (event) {
    // let resultClick = document.querySelectorAll('.showCompare');
    // let scoreOverview = document.getElementById('overviewScore');
    // let resultsWrapper = document.getElementById('resultsWrapper');
    // let columnResults = document.getElementById('columnResults');
    // let resultsCompare = document.getElementById('resultsCompare');

    // let crossClick = document.getElementById('cross');

    // function showResult() {
    //     scoreOverview.style.display = 'none'
    //     resultsCompare.style.display = 'block';

    // }

    // function showScore() {
    //     scoreOverview.style.display = 'block';
    //     resultsCompare.style.display = 'none'
    // }

    // for (let i = 0; i < resultClick.length; i++) {
    //     resultClick[i].addEventListener('click', showResult, false);
    // }
    // crossClick.addEventListener('click', showScore, false);

});


/**
 * Generic function to create new DOM elements
 *
 * @param properties
 * @returns {Element}
 */
function createDomElement(properties) {
    //Create the element
    var domElement = document.createElement(properties.tagName);

    //Loop through the attributes to set them on the element
    var attributes = properties.attributes;
    for (var prop in attributes) {
        domElement.setAttribute(prop, attributes[prop]);
    }

    //If any content, set the inner HTML
    if (properties.content) {
        domElement.innerHTML = properties.content;
    }

    //Return to use in other functions
    return domElement;
}