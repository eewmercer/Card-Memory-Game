let cardDiv = document.querySelector('.grid-item');
let matches = document.querySelector('#matches');
let attributeValueArray = [];

function compareCards(element, event) {
    let attributeValue = element.getAttribute("value");
    element.innerHTML = attributeValue;
    attributeValueArray.push(element);

    if (attributeValueArray.length == 2 ) {
        if (attributeValueArray[0].getAttribute("value") == attributeValueArray[1].getAttribute("value")) {
            matches.innerHTML = matches.innerHTML - 1
            console.log(matches)
            for (const item of attributeValueArray) {
                setTimeout(() => {
                    item.style.color = "pink"
                    item.style.border = "pink"
                    item.style.background = "pink"
                    item.style.text = "pink"
                    item.removeAttribute("onclick");
                }, 200);
            }
        } else {
            for (const item of attributeValueArray) {
                setTimeout(() => {
                    item.innerHTML = '';
                }, 200);
            }
            
        }
        attributeValueArray = []
    }
    
}




// const fruitCards = ['strawberry', 'blueberry', 'lemon', 'orange', 'banana', 'apple', 'raspberry', 'blackberry']
// let fruitTrackerArray = [];

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getOccurence(array, value) {
//     var count = 0;
//     array.forEach((v) => (v === value && count++));
//     return count;
// }

// function createCards() {
//     const cardDiv = document.createElement("div");
//     let random = getRandomInt(6);

//     cardDiv.classList.add("grid-item"); //adds styles class
//     cardDiv.setAttribute("value", fruitCards[random]);//sets attribute to random value from array
//     fruitTrackerArray.push(cardDiv.getAttribute("value"));
//     cardDiv.innerHTML = cardDiv.getAttribute("value");//gets that random attribute
//     console.log(fruitCards)

//     if (getOccurence(fruitTrackerArray, 'strawberry') == 2) {
//         fruitCards.splice('strawberry', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'blueberry') == 2) {
//         fruitCards.splice('blueberry', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'lemon') == 2) {
//         fruitCards.splice('lemon', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'orange') == 2) {
//         fruitCards.splice('orange', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'banana') == 2) {
//         fruitCards.splice('banana', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'apple') == 2) {
//         fruitCards.splice('apple', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'raspberry') == 2) {
//         fruitCards.splice('raspberry', 1);
//         return true;

//     } else if (getOccurence(fruitTrackerArray, 'blackberry') == 2) {
//         fruitCards.splice('blackberry', 1);
//         return true;

//     }

//     const cardsContainer = document.querySelector('.grid-container');

//     cardsContainer.appendChild(cardDiv);

// }

// // function addCards() {
// //     for (let i = 0; i < 16; i++) {
// //         createCards();
// //         // console.log(fruitTrackerArray)

// //     }      
// //     console.log(getOccurence(fruitTrackerArray, 'strawberry'));
// //     console.log(getOccurence(fruitTrackerArray, 'blueberry'));
// //     console.log(getOccurence(fruitTrackerArray, 'orange'));
// //     console.log(getOccurence(fruitTrackerArray, 'lemon'));
// //     console.log(getOccurence(fruitTrackerArray, 'banana'));
// //     console.log(getOccurence(fruitTrackerArray, 'apple'));
// // }

// // addCards()