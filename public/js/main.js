let buttonContrast = document.getElementById('buttonContrast');
let buttonStructure = document.getElementById('buttonStructure');
let buttonScaling = document.getElementById('buttonScaling');
let buttonMissingHTML = document.getElementById('buttonMissingHTML');
let hideScore = document.getElementById('hideScore');
let overviewScore = document.getElementById('overviewScore');
var problem = document.querySelector('#problem');
var oplossing = document.querySelector('#oplossing');
var effect = document.querySelector('#effect');
var problemRow = problem.querySelector('div.row');
var effectRow = effect.querySelector('div.row');
var oplossingRow = oplossing.querySelector('div.row');
let stateContrast = false;

document.addEventListener("DOMContentLoaded", function (event) {

    showContrast();
    function showContrast(e) {
        problemRow.innerHTML = ""
        effectRow.innerHTML = "";
        oplossingRow.innerHTML = "";
        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem Colors and contrast", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Het kleurgebruik van de website is niet optimaal voor slechtzienden. Mensen met bijvoorbeeld kleurenblindheid kunnen uw website hierdoor niet goed bekijken. 1 op de 200 vrouwen en zelfs 1 op de 12 mannen is kleurenblind. Doordat zij uw website niet goed kunnen bekijken loopt u mogelijke omzet mis of bereikt u niet het effect van de website zoals bedoeld is. ", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        problemRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Colors and contrast", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen zodat uw website toegankelijker is. Uw website wordt tenslotte door 1 op de 200 vrouwen en 1 op de 12 mannen niet goed bekeken.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        effectRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Colors and contrast", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen:Gebruik xxxxx kleuren Zorg dat links onderlijnd worden, zodat men weet dat dit een link is.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        oplossingRow.appendChild(card);

    }

    function showHTMLStructure(e) {
        problemRow.innerHTML = "";
        effectRow.innerHTML = "";
        oplossingRow.innerHTML = "";
        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem HTML structure", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "De structuur van de website is niet optimaal voor slechtzienden en blinden. Doordat de html structuur niet compleet is, raken slechtzienden en blinden al snel verdwaald op uw website. Zij verlaten hierdoor sneller uw website, waardoor u mogelijke omzet misloopt of waardoor u het effect van uw website niet bereikt.  ", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        problemRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Effect HTML structure", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen zodat uw website toegankelijker is", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        effectRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing HTML structure", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen: Zorg voor een duidelijke structuur op de website. Maak gebruik van H1, H2 etc.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        oplossingRow.appendChild(card);
    }

    function showScaling(e) {
        console.log("hello world");
        problemRow.innerHTML = "";
        effectRow.innerHTML = "";
        oplossingRow.innerHTML = "";
        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem Scaling and zoom", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Meer dan 350.000 Nederlanders hebben een visueel beperking. Vele daarvan zijn erbij gebaat om te kunnen inzoomen op de website. Door in te zoomen kunnen zij de website bekijken zoals ieder ander dit bekijkt. Helaas is dit bij u niet het geval. Zij kunnen hierdoor teksten niet lezen of afbeeldingen niet bekijken. Doordat niet iedereen dit kan loopt u mogelijke omzet mis of bereikt u niet het effect van de website zoals die bedoeld is. ", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        problemRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Scaling and zoom", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen zodat uw website toegankelijker is.   ", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        effectRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Scaling and zoom", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw webiste? u kent het volgende doen: ", attributes: { class: 'card-text' }, });
        var ul = createDomElement({ tagName: 'ul', attributes: { class: 'card-ul' }, });
        var li = createDomElement({ tagName: 'li', content: "Met behulp van viewport maakt u de website scalable voor verschillende devices. Hierdoor is het mogelijk in te zoomen.", attributes: { class: 'card-items' }, });
        var li2 = createDomElement({ tagName: 'li', content: "Maak gebruik van viewport. ", attributes: { class: 'card-items' }, });

        ul.appendChild(li);
        ul.appendChild(li2);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(ul);
        card.appendChild(cardBody);
        oplossingRow.appendChild(card);
    }

    function showMissingHTML(e) {
        problemRow.innerHTML = "";
        effectRow.innerHTML = "";
        oplossingRow.innerHTML = "";
        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem Missing html elements", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Er zijn meer dan 350.000 mensen slechtziend of blind in Nederland. Doordat er html elementen op de website missen, is de website voor onder andere deze mensen niet goed leesbaar. Slechtzienden en blinden lezen vaak met een screenreader, deze leest op wat er op de website staat. Wanneer een button niet staat aangegeven als een button, kunnen zij hierin verdwaald raken. Daarnaast loopt u nu mogelijke omzet mis of bereikt u niet het effect van de website zoals bedoeld is. Het is daarom belangrijk om uw website aan te passen.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        problemRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Missing html elements", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen zodat uw website toegankelijker is.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        effectRow.appendChild(card);

        var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
        var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
        var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Missing html elements", attributes: { class: 'card-title' }, });
        var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen: Afbeeldingen moeten een alt-tag hebben Links moeten herkenbare tekst hebben Maak weinig gebruik van div en span, gebruik semantiek: gebruik voor een knop een button.", attributes: { class: 'card-text' }, });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        oplossingRow.appendChild(card);
    }




    // function showScore() {
    //     scoreOverview.style.display = 'block';
    //     resultsCompare.style.display = 'none'
    // }

    // for (let i = 0; i < resultClick.length; i++) {
    //     resultClick[i].addEventListener('click', showResult, false);
    // }
    buttonContrast.addEventListener('click', showContrast, false);
    buttonStructure.addEventListener('click', showHTMLStructure, false);
    buttonScaling.addEventListener('click', showScaling, false);
    buttonMissingHTML.addEventListener('click', showMissingHTML, false);
    hideScore.addEventListener('click', function () {
    overviewScore.style.display = 'none';
    })




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