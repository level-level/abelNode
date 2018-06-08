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
var accordionFirst = document.querySelector('#accordion > div:nth-child(2) > .card-header > h5 > button ');

document.addEventListener("DOMContentLoaded", function (event) {

     

    if (accordionFirst == buttonContrast) {
        showContrast();
    }


    if (accordionFirst == buttonStructure) {
        showHTMLStructure();
    }

    if (accordionFirst == buttonScaling) {
        showScaling();

    }

    if (accordionFirst == buttonMissingHTML) {
        showMissingHTML();

    }


    if (buttonStructure) {
        buttonStructure.addEventListener('click', showHTMLStructure, false);

    }


    if (buttonContrast) {
        buttonContrast.addEventListener('click', showContrast, false);
    }

    if (buttonScaling) {
        buttonScaling.addEventListener('click', showScaling, false);

    }

    if (buttonMissingHTML) {
        buttonMissingHTML.addEventListener('click', showMissingHTML, false);

    }

});

function showContrast(e) {
    problemRow.innerHTML = ""
    effectRow.innerHTML = "";
    oplossingRow.innerHTML = "";
    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem Colors and contrast", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({
        tagName: 'p', content: 'Het kleurgebruik van de website is niet optimaal voor slechtzienden. Mensen met bijvoorbeeld kleurenblindheid kunnen uw website hierdoor niet goed bekijken. 1 op de 200 vrouwen en zelfs 1 op de 12 mannen is kleurenblind. Omdat er geen rekening is gehouden met het kleurcontrast kunnen letters terugvallen in de achtergrond. Hierdoor loopt u mogelijke omzet mis of bereikt u niet het effect van de website zoals bedoeld.', attributes: { class: 'card-text' },
    });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    problemRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Colors and contrast", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen, zodat deze toegankelijk is. Uw website wordt tenslotte door 1 op de 200 vrouwen en 1 op de 12 mannen niet goed bekeken. Kleur contrasten zijn heel belangrijk: wanneer er geen duidelijk verschil is tussen kleuren van elementen binnen de site zullen lijnen, hoeken en details niet duidelijk worden voor de gebruiker. Dit zorgt ervoor dat de website niet te zien is in de verschillende onderdelen, maar lijkt op een geheel vlak. Het kan daarbij een oplossing zijn om binnen afbeeldingen de kleur(en) van het product te beschrijven, zodat gebruikers niet afhankelijk zijn van de afbeelding om te erachter te komen welke kleur het heeft.", attributes: { class: 'card-text' }, });
    var imgblind = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/clothesblind.png' }, });
    var imgText = createDomElement({ tagName: 'p', content: "Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgText2 = createDomElement({ tagName: 'p', content: "Niet Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgnormal = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/clothes.png' }, });



    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(imgText);
    card.appendChild(imgblind);
    card.appendChild(imgText2);
    card.appendChild(imgnormal);
    effectRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Colors and contrast", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen: Zorg dat elementen genoeg kleurencontrast hebben, zodat ze kunnen worden onderscheiden van elkaar. Zorg dat links onderlijnd worden, zodat men weet dat dit een link is. U kunt op de volgende pagina gebruiken maken van de Color Contrast Analyzer om de correcte contrast te vinden: ", attributes: { class: 'card-text' }, });

    var link = createDomElement({ tagName: 'a', content: "color-contrast helper", attributes: { href: 'https://dequeuniversity.com/rules/axe/3.0/color-contrast' } });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardText.appendChild(link);
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
    var cardText = createDomElement({ tagName: 'p', content: "De structuur van de website is niet optimaal voor slechtzienden en blinden. Doordat de html structuur niet compleet is, raken slechtzienden en blinden al snel verdwaald op uw website. Zij verlaten hierdoor sneller uw website, waardoor u mogelijke omzet misloopt of waardoor u het effect van uw website niet bereikt.", attributes: { class: 'card-text' }, });
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    problemRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Effect HTML structure", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen, zodat deze toegankelijk is. Onderstaand ziet u een voorbeeld van hoe een visueel beperkte een website ervaart die geen correcte heading toepast. Doordat de headings missen, moeten slechtziende elke link afgaan om de gewenste categorie te vinden. Dit is geen probleem als u enkel 5 items in het menu heeft, maar het aanbod loopt al snel op tot honderden items. Dit geeft een enorme moeilijkheid voor visueel beperkten, waardoor zij afhaken met het plaatsen van een bestelling op uw website. ", attributes: { class: 'card-text' }, });
    var imgblind = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/menuslechtziende.png' }, });
    var imgText = createDomElement({ tagName: 'p', content: "Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgText2 = createDomElement({ tagName: 'p', content: "Niet Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgnormal = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/menu.png' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(imgText);
    card.appendChild(imgblind);
    card.appendChild(imgText2);
    card.appendChild(imgnormal);
    effectRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing HTML structure", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen: Zorg voor een duidelijke structuur. Maak gebruik van H1, H2. Zorg dat elke pagina voorzien is van headers. De headers moeten uiteraard beginnen met een H1, zodat de gebruiker met een screenreader kan navigeren door de website. Gebruik headers dus nooit door elkaar: dit zal ervoor zorgen dat de screenreader geen structuur kan vinden, waardoor de gebruiker verdwaald raakt op je website.", attributes: { class: 'card-text' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    oplossingRow.appendChild(card);
}

function showScaling(e) {
    problemRow.innerHTML = "";
    effectRow.innerHTML = "";
    oplossingRow.innerHTML = "";
    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Probleem Scaling and zoom", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "Meer dan 350.000 Nederlanders hebben een visuele beperking. Vele daarvan zijn erbij gebaat om te kunnen inzoomen op de website. Door in te zoomen, kunnen zij de website bekijken zoals ieder ander dit bekijkt. Helaas is dit bij uw website niet het geval. Zij kunnen hierdoor teksten niet lezen of afbeeldingen niet bekijken. Doordat niet iedereen dit kan, loopt u mogelijke omzet mis of bereikt u niet het effect van de website zoals bedoeld.", attributes: { class: 'card-text' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    problemRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Scaling and zoom", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen, zodat deze toegankelijk is. Het is belangrijk voor slechtziende om gebruik te kunnen maken van de zoom functionaliteit binnen uw site. Als deze functionaliteit mist, zullen slechtziende een groot deel van uw website niet duidelijk kunnen bekijken. Afbeeldingen en teksten blijven te klein en de klant zal daarom geen bestelling kunnen maken, wat resulteert in een gemiste kans.", attributes: { class: 'card-text' }, });
    var imgblind = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/coolblueZoom.png' }, });
    var imgText = createDomElement({ tagName: 'p', content: "Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgText2 = createDomElement({ tagName: 'p', content: "Niet Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgnormal = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/coolblue.png' }, });


    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(imgText);
    card.appendChild(imgblind);
    card.appendChild(imgText2);
    card.appendChild(imgnormal);
    effectRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Scaling and zoom", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw webiste? u kent het volgende doen: ", attributes: { class: 'card-text' }, });
    var ul = createDomElement({ tagName: 'ul', attributes: { class: 'card-ul' }, });
    var li = createDomElement({ tagName: 'li', content: "Met behulp van viewport maakt u de website schaalbaar voor verschillende apparaten. Hierdoor is het mogelijk in te zoomen.", attributes: { class: 'card-items' }, });
    var li2 = createDomElement({ tagName: 'li', content: "Verwijder user-scalable=no van uw viewport: dit zorgt er namelijk voor dat de zooming functionaliteit uit staat. ", attributes: { class: 'card-items' }, });
    var li3 = createDomElement({ tagName: 'li', content: 'Bezoek de volgende pagina voor meer uitleg: ', attributes: { class: 'card-items' }, });
    var link = createDomElement({ tagName: 'a', content: 'dequeuniversity - meta-viewport', attributes: { href: 'https://dequeuniversity.com/rules/axe/3.0/meta-viewport' }, });


    li3.appendChild(link);
    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);


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
    var cardText = createDomElement({ tagName: 'p', content: "Er zijn meer dan 350.000 mensen in Nederland met een visuele beperking. Doordat html elementen op de website missen, is de website voor o.a. deze mensen niet goed leesbaar. Visueel beperkten gebruiken vaak met screenreader, dit apparaat leest de teksten op een website. Wanneer een button niet staat aangegeven als een button, kunnen zij hierin verdwaald raken. Daardoor loopt u mogelijke omzet mis of bereikt u niet het effect van de website zoals bedoeld. Het is daarom belangrijk om uw website aan te passen.", attributes: { class: 'card-text' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    problemRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Effect Missing html elements", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "Onderstaand ziet u wat dit betekent voor uw website. Het is verstandig uw website aan te passen zodat deze toegankelijk is. Missende beschrijvingen binnen HTML elementen of HTML elementen die compleet missen, kunnen ernstige gevolgen hebben voor de gebruikers van uw website. Wanneer links en images een beschrijving missen, zullen visueel beperkten niet weten waarop ze klikken en wat er dus op de website staat. Voorbeeld. Afbeeldingen of knoppen die betekenisloze beschrijvingen hebben zoals: img1, img2, img3, worden voorgelezen als .. Hierdoor heeft de gebruiker totaal geen idee waar hij zich binnen de website bevindt en zal daarom hoogstwaarschijnlijk uw website niet gebruiken in de toekomst.", attributes: { class: 'card-text' }, });
    var imgblind = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/clothesMissing.png' }, });
    var imgText = createDomElement({ tagName: 'p', content: "Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgText2 = createDomElement({ tagName: 'p', content: "Niet Slechtziende: ", attributes: { class: 'card-text' }, });
    var imgnormal = createDomElement({ tagName: 'img', attributes: { class: 'card-img', src: '../img/clothes.png' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(imgText);
    card.appendChild(imgblind);
    card.appendChild(imgText2);
    card.appendChild(imgnormal);
    effectRow.appendChild(card);

    var card = createDomElement({ tagName: 'div', attributes: { class: 'card' }, });
    var cardBody = createDomElement({ tagName: 'div', attributes: { class: 'card-body' }, });
    var cardTitle = createDomElement({ tagName: 'h5', content: "Oplossing Missing html elements", attributes: { class: 'card-title' }, });
    var cardText = createDomElement({ tagName: 'p', content: "De vraag is, hoe verandert u uw website? U kunt het volgende doen: Afbeeldingen moeten een alt-tag bevatten. Links moeten herkenbare teksten bevatten. Probeer zoveel mogelijk HTML5 elementen te gebruiken zoals nav, header, footer, article enzovoorts.", attributes: { class: 'card-text' }, });

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    oplossingRow.appendChild(card);
}


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