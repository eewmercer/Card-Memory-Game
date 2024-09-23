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