let shopButtons = document.querySelectorAll('.shop_item-add');

const shopCartContainer = document.getElementById('shop_cart-content');
const shopItemsContainer = document.getElementById('shop_items-wrap');
const buyButton = document.getElementById('shop_cart-buy');

shopButtons.forEach(shopButton => {
    shopButton.addEventListener("click", moveItems);
});

buyButton.addEventListener("click", notifyBought);

function moveItems() {
    let button = this;
    let shopItem = this.parentNode;

    if (shopItem.parentNode == shopItemsContainer) { addToCart(shopItem, button); }
    else if (shopItem.parentNode == shopCartContainer) { removeFromCart(shopItem, button); }
    else { console.warn("shop broken") }
}

function addToCart(item, button) {
    shopCartContainer.appendChild(item); 
    button.innerHTML = "- entfernen";

    checkRemainingItems();
}

function removeFromCart(item, button) {
    shopItemsContainer.appendChild(item); 
    button.innerHTML = "+ hinzufügen";

    checkRemainingItems();
}

function checkRemainingItems() {
    console.log("checked");

    if(shopItemsContainer.childElementCount > 3) { 
        shopItemsContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr";
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "auto";
        }
    }

    else if(shopItemsContainer.childElementCount == 3 ) { 
        shopItemsContainer.style.gridTemplateRows = "1fr 1fr 1fr";
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "fit-content";
        }
    }

    else if(shopItemsContainer.childElementCount < 3 ) {
        shopItemsContainer.style.gridTemplateRows = "1fr 1fr";
        shopItemsContainer.style.gridTemplateColumns = "1fr 1fr";

        for (let i = 0; i < shopItemsContainer.childElementCount; i++) {
            shopItemsContainer.children[i].style.height = "fit-content";
        }
    }
}

function notifyBought() {
    let items = "";

    for (let i = 0; i < shopCartContainer.childElementCount; i++) {
        items = items + " " + shopCartContainer.children[i].firstElementChild.nextElementSibling.innerHTML + ","; 
    }
    
    alert("Sie haben folgende Gegenstände bestellt: " + items);
}