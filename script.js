

function createCards() {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("grid-item")
    cardDiv.setAttribute("value", "strawberry");
    const cardsContainer = document.querySelector('.grid-container');
    
    cardsContainer.appendChild(cardDiv);
}

function addCards() {
    let cardAttribute;
    let cardAttributeValue;
    for (let i = 0; i < 16; i++) {
        createCards();
        cardAttribute = document.querySelector('.grid-item');
        cardAttributeValue = cardAttribute.getAttribute("value");
        console.log(cardAttributeValue)
    }
}

addCards()







// function cardActions() {
//     // let attributeValue;
//     for (let i = 0; i <= 4; i++) {
//         createCards();
//         // attributeValue = document.querySelector('#card-' + i);
//     }
    // console.log(attributeValue.getAttribute("value"))
// }