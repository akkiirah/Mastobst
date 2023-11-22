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
    item.style.transform = "scale(1.15)";
    window.setTimeout(function() {
        item.style.transform = "scale(0)";
    }, 100);

    window.setTimeout(function() {
        shopCartContainer.appendChild(item); 
        button.innerHTML = "- entfernen";
        checkRemainingItems();
    }, 350);

    window.setTimeout(function() {
        item.style.transform = "scale(1.15)";
        item.style.opacity = "1";
    }, 450);

    window.setTimeout(function() {
        window.setTimeout(function() {item.style.transform = "scale(1)";}, 100);
    }, 550);
}

function removeFromCart(item, button) {
    item.style.transform = "scale(1.15)";
    window.setTimeout(function() {
        item.style.transform = "scale(0)";
    }, 100);

    window.setTimeout(function() {
        shopItemsContainer.appendChild(item); 
        button.innerHTML = "+ hinzufügen";
        checkRemainingItems();
    }, 350);

    window.setTimeout(function() {
        item.style.transform = "scale(1.15)";
        item.style.opacity = "1";
    }, 450);

    window.setTimeout(function() {
        window.setTimeout(function() {item.style.transform = "scale(1)";}, 100);
    }, 550);
}

function checkRemainingItems() {
    console.log("checked");

    if(shopItemsContainer.childElementCount > 3 && shopItemsContainer.childElementCount < 10 ) { 
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